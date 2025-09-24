import {useState} from 'react';
import softData from "../data/softwares.json";
import { LanguagesData } from '../types';
import "../style-sheets/softwares.css";

function Softwares() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const langs = (softData as LanguagesData).languages;

    const toggleExpanded = (index: number) => {
        setExpandedIndex( expandedIndex === index ? null : index );
    }

    const handleLinkClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    }

    return (
        <div className="card-container" id="software-experience">
            <h2>Languages, Libraries & Software Experience</h2>
            <div className="cards">
                {langs.map((lang,index) => (
                        <div
                            key = {lang.id}
                            className={`card ${expandedIndex === index ? 'expanded' : ''}`}
                            style = {{ animationDelay: `${index * 0.1}s`}}
                            onClick={(() => toggleExpanded(index))}
                        >
                            <div className="card-main">
                                <div className="card-image">
                                    <img src={lang.image} alt={lang.title}/>
                                </div>
                                <div className="card-content">
                                    <a href={lang.src_doc} target="_blank" rel="noopener noreferrer" style={{color:'orange', textDecoration:'none'}}> 
                                        <h3>{lang.title}</h3>
                                    </a>
                                    {expandedIndex === index && (
                                        <div 
                                            className="card-links"
                                            onClick={handleLinkClick}
                                        >
                                            {lang.links.map((link, linkIndex) => (
                                                    <a
                                                        key = {linkIndex}
                                                        href = {link.url}
                                                        className = {`card-link ${link.type === 'pdf' ? 'pdf-link' : ''}`}
                                                        target = "_blank"
                                                        rel = "noopener noreferrer"
                                                    >
                                                        {link.type === 'pdf' && (
                                                            <svg
                                                                width="14"
                                                                height="14"
                                                                viewBox="0 0 24 24"
                                                                fill = "currentColor"
                                                            >
                                                                <path
                                                                    d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
                                                                />
                                                            </svg>
                                                        )}
                                                        {link.name}
                                                        {link.type === 'external' && (
                                                            <svg width="12" height="12" viewBox="0 0 12 12">
                                                                <path d="M3 9l6-6M9 3h-6M9 3v6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                                                            </svg>
                                                        )}
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>                            
                    )
                )}
            </div>
        </div>
    )
}

export default Softwares;