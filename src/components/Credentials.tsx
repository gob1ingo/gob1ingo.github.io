import {useState} from 'react';
import credData from "../data/credentials.json";
import '../style-sheets/credentials.css';

function Credentials() {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const creds = credData.credentials;

    const toggleExpanded = (index: any) => {
        setExpandedIndex(expandedIndex === index ? null : index );
    }

    const handleLinkClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    }
    
    return (
        <div className="brick-container" id="credentials">
            <h2>Credentials</h2>
            <div className="bricks">
                {creds.map((cred,index) => (
                    <div
                        key = {cred.id}
                        className = {`brick ${expandedIndex === index ? 'expanded' : '' }`}
                        style = {{ animationDelay: `${index * 0.1}s`}}
                        onClick={(() => toggleExpanded(index))}
                    >
                        <div className="brick-main">
                            <div className="brick-image">
                                <img src={cred.image} alt={cred.title} />
                            </div>
                            <div className="brick-content">
                                <h3>{cred.title}</h3>
                                <p className="institution">{cred.institution}</p>
                                <p className="year">{cred.year}</p>
                            </div>
                        </div>

                        {expandedIndex === index && (
                            <div
                                className="brick-links"
                                onClick={handleLinkClick}
                            >
                                {cred.links.map((link,linkIndex) => (
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

export default Credentials;