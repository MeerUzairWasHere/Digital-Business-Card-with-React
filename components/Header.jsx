import React from "react"

export default function Header() {
    return (<>
        <header>
            <div className="container img">
                <img src="./Profile-Picture.svg" className="profileImg" alt="profilePicture" />
            </div>
            <div className="container about">
            <h1 className="about-name">Mir Uzair</h1>
            <p className="about-profession">Frontend Developer</p>
                     <small className="about-website">   <a href="https://mir-uzair-personal-portfolio.netlify.app/" target="_blank">miruzair.website</a></small>
        </div>
        <div className="container about-buttons">
            <a href="mailto:example@gmail.com"><button  className="email-button">
                <img src="./email-logo.svg" alt="email-logo" />Email</button></a>
            <a  href="https://www.linkedin.com/in/meer-uzair-1b682b176/" target="_blank" ><button className="linkedIn-button">
                <img src="./linkedIn-logo.svg" alt="linkedIn-logo" />LinkedIn</button></a>
        </div>
        </header>
    </>)
}