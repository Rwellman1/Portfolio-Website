import React from "react"
import linkedIn from "./images/linkedin-icon.png"

export default function Contact(){

    return(
        <section id="contact" className="page-container contact-container">
            <div className="nav-container ">
                <h2 className="nav-title contact-title">Contact</h2>
                <nav className="navbar">
                    <ul>
                        <a href="#portfolio"><li>Portfolio</li></a>
                        <a href="#about"><li>About Me</li></a>
                        <a href="#contact"><li>Contact</li></a>
                    </ul>
                </nav>
            </div>
            <div>
                <p>Please get in touch below or email me at: <a href="mailto:rwellman.dev@gmail.com" className="download-link">rwellman.dev@gmail.com</a></p>
                <p>Download CV <a className="download-link" href="src\components\Ryan Wellman - Frontend Developer.pdf" download>here</a></p>
            </div>
            <form className="contact-form">
                <input className="contact-input" type="text" placeholder="Name"/>
                <input className="contact-input" type="email" placeholder="Email"/>
                <textarea className="contact-input contact-message" type="text" placeholder="Message"/>
                <button className="contact-form-button">Submit</button>
            </form>
            <div className="contact-extra">
                <p>Download CV <a className="download-link" href="src\components\Ryan Wellman - Frontend Developer.pdf" download>here</a></p>
                
                <a href="https://www.linkedin.com/in/ryan-wellman-04952b227/"> 
                    <img src={linkedIn} alt="linkedin logo"/>
                </a>
            </div>
        </section>
    )
}