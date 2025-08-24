import {useState} from "react";
import langData from "../data/languages.json";
import "../style-sheets/languages.css";


function Languages() {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const langs = langData.languages;

    const toggleExpand = (index: any) => {
        setExpandedIndex( expandedIndex === index ? null : index );
    }

    return (
        <div className="card-container">
            <h2>Languages, Libraries & Software Experience</h2>
            <div className="cards">
                {langs.map((lang,index) => (
                        <div
                            key = {lang.id}
                            className = {`card ${expandedIndex === index ? 'expanded': ''}`}
                            style = {{ animationDelay: `${index * 0.1}s`}}
                        >
                            <div className="card-main">
                                <div className="card-image">
                                    <img src={lang.image} alt={lang.title}/>
                                </div>
                                <div className="card-content">
                                    <h3>{lang.title}</h3>
                                    <div className="card-links">
                                        {lang.links.map((link, linkIndex) => (
                                                <a
                                                    key = {linkIndex}
                                                    href = {link.url}
                                                    className = {`link-item ${link.type === 'pdf' ? 'pdf-link' : ''}`}
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
                                </div>
                            </div>
                        </div>                            
                    )
                )}
            </div>
        </div>
    )
}

export default Languages;