import socMedData from "../data/socialmedias.json";
import { SocialMediasData } from '../types';
import "../style-sheets/socialmedias.css";

function SocialMedias() {
    const medias = (socMedData as SocialMediasData).socialmedias;

    return (
        <div className="sm-container">
            <h1>
                Reach out!
            </h1>
            <div
                className="sm-list"
            >
                <div className="sm-main">
                    <div className="sm-button">
                        <div className="sm-icon">
                            <a href="mailto:sikomattrski@gmail.com">
                                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Femail-icon-png-email-icon-image-122-2400.png&f=1&nofb=1&ipt=aa05bb81ea4533f3b1dd4707122c34f9416c55dcbc97aad041f16304034941ba" alt="Email"/>
                            </a>
                        </div>
                    </div>
                </div>
                {medias.map((media) => (
                    <div
                        key={media.id}
                        className="sm-main"
                    >
                        <div className="sm-button">
                            <div className="sm-icon">
                                <a href={media.link} target="_blank" rel="noopener noreferrer">
                                    <img src={media.icon} alt={media.title} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SocialMedias;