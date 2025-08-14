import "../style-sheets/namecard.css"

function NameCard() {


    return (
        <div className="card">
            <h1 className="name">
                Matthew Sikorski 
            </h1>
            <h3 className="title">
                Computer Scientist
            </h3>
            <p className="bio">
                Hello! I am a Computer Scientist from Upstate New York. <br/>
                Ever since I "borrowed" my older sister's DS, ever since I got to mess around with the Windows XP machines at my summer camp, I've been fascinated by computers. They've always been a core interest of mine. <br/>
                <br/>
                My experience with machines goes back my whole life, I've practically been raised with them.<br/>
                The bulk of my experience is with the software of machines. <br/> 
                The bulk of my studies at SUNY Oswego had me working with the Java language among others. <br/>
            </p>
        </div>
    )

}

export default NameCard