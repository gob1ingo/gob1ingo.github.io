import {useState} from 'react';
import qData from "../data/qualifications.json";
import '../style-sheets/qualifications.css';

function Qualifications() {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const quals = qData.qualifications;

    
    const toggleExpanded = (index: any) => {
        setExpandedIndex(expandedIndex === index ? null : index );
    }
    

    // TODO: Implement this. 
    return (
        <div className="brick-container">
            <h2>Noteable Qualificaitons</h2>
            <div className="bricks">
                {quals.map((qual,index) => (
                    <div
                        key = {qual.id}
                        className = {`brick ${expandedIndex === index ? 'expanded' : '' }`}
                        style = {{ animationDelay: `${index * 0.1}s`}}
                    >
                        <div className="brick-main">
                            <div className="brick-image">
                                <img src={qual.image} alt={qual.title} />
                            </div>
                            <div className="brick-content">
                                <h3>{qual.title}</h3>
                                <p className="institution">{qual.institution}</p>
                                <p className="year">{qual.year}</p>
                            </div>
                            <button
                                className="expand-btn"
                                onClick={() => toggleExpanded(index)}
                                aria-label="Expand for more links"
                            >
                                <svg
                                    className={`arrow ${expandedIndex === index ? 'rotated' : '' }`}
                                    width = "20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d = "M% 71.5 5 5-5"
                                        stroke = "currentColor"
                                        strokeWidth = "2"
                                        fill = "none"
                                    />
                                </svg>
                            </button>
                        </div>

                        {expandedIndex === index && (
                            <div className="brick-links">
                                {qual.links.map((link,linkIndex) => (
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
                                ))}
                            </div>
                        )}
                    </div>
                    ))}
            </div>
        </div>
    );
}

export default Qualifications;