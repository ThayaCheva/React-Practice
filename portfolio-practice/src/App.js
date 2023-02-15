import React from 'react'

import Control from './components/Control.js'

// import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/styles.css"

import {nanoid} from "nanoid"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse , faUser, faBriefcase, faNewspaper, faEnvelopeOpen, faDownload, faMapMarkerAlt, faEnvelope, faUserGraduate, faPhone, faGlobe, faAdjust} from '@fortawesome/free-solid-svg-icons'

import { LoremIpsum } from 'react-lorem-ipsum';
import { faBehance, faFacebook, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

function App() {
    const [controlBtn, setControlBtn] = React.useState(GenerateButtons)
    const [theme, setTheme] = React.useState("dark")

    function handleToggle() {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    function handleControl(id) {
        setControlBtn(prevState => prevState.map(control => {
            return control.id === id ? {...control, isClicked: true} : {...control, isClicked: false}
        }))
    }

    function CreateControl(value, cName, isClicked) {
        return (
            {
                id: nanoid(),
                value: value,
                cName: cName,
                isClicked: isClicked
            }
        )
    }

    function GenerateButtons() {
        const controlArray = [
            CreateControl(<FontAwesomeIcon icon={faHouse} />, "control-1", true),
            CreateControl(<FontAwesomeIcon icon={faUser} />, "control-2", false),
            CreateControl(<FontAwesomeIcon icon={faBriefcase} />, "control-3", false),
            CreateControl(<FontAwesomeIcon icon={faNewspaper} />, "control-4", false),
            CreateControl(<FontAwesomeIcon icon={faEnvelopeOpen} />, "control-5", false),
        ]
        return controlArray
    }

    const controlElement = controlBtn.map(btn => 
    <Control 
        id={btn.id} 
        value={btn.value} 
        cName={btn.cNamae} 
        handleControl={() => handleControl(btn.id)}
        isClicked = {btn.isClicked}
    />)

    return (
        <div className={`App ${theme === "dark" ? "dark" : "light"}`}>
            <header className={`section ${controlBtn[0].isClicked ? "sec1" : ""} header`}>
                    <div className="header-content">
                        <div className="left-header">
                            <div className="image">
                                <img src={require("./img/hero.png")} alt=""></img>
                                <div className="h-shape"></div>
                            </div>
                        </div>
                        <div className="right-header">
                            <div className="name">
                                Hi, I'm <span>Thaya Chevaphatrakul. </span>
                                A Web Developer
                            </div>
                            <p>I'm a Web Developer, I love to create beautiful and functional websites. Furthermore, I also really like doing stuff with code and other stuff like that. This is basically a lorem ipsum but I don't really care.</p>
                            <div className="btn-con">
                                <a href="" className="main-btn">
                                    <span className="btn-text">Download CV</span>
                                    <span className="btn-icon"><FontAwesomeIcon icon={faDownload} /></span>
                                </a>
                            </div>
                        </div>
                    </div>
            </header>
            <main>
                <section className={`section ${controlBtn[1].isClicked ? "sec2" : ""} about`}>
                    <div className="main-title">
                        <h2>About <span>me</span><span className="bg-text">my stats</span></h2>
                    </div>
                    <div className="about-container">
                        <div className="left-about">
                            <h4>Information About me</h4>
                            <LoremIpsum p={1} />
                            <div className="btn-con">
                                <a href="" className="main-btn">
                                    <span className="btn-text">Download CV</span>
                                    <span className="btn-icon"><FontAwesomeIcon icon={faDownload} /></span>
                                </a>
                            </div>
                        </div>
                        <div className="right-about">
                            <div className="about-item">
                                <div className="abt-text">
                                    <p className="large-text">560+</p>
                                    <p className="small-text">Projects <br/> Completed</p>
                                </div>
                            </div>
                            <div className="about-item">
                                <div className="abt-text">
                                    <p className="large-text">10+</p>
                                    <p className="small-text">Years of <br/> experience</p>
                                </div>
                            </div>
                            <div className="about-item">
                                <div className="abt-text">
                                    <p className="large-text">300+</p>
                                    <p className="small-text">Happy <br/> Clients</p>
                                </div>
                            </div>
                            <div className="about-item">
                                <div className="abt-text">
                                    <p className="large-text">400+</p>
                                    <p className="small-text">Customer <br/> Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-stats">
                        <h4 className="stat-title">My Skills</h4>
                        <div className="progress-bars">
                            <div className="progress-bar">
                                <p className="prog-title">html5</p>
                                <div className="progress-con">
                                    <p className="prog text">80%</p>
                                    <div className="progress">
                                        <span className="html"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <p className="prog-title">JavaScript</p>
                                <div className="progress-con">
                                    <p className="prog text">75%</p>
                                    <div className="progress">
                                        <span className="javascript"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <p className="prog-title">NodeJS</p>
                                <div className="progress-con">
                                    <p className="prog text">87%</p>
                                    <div className="progress">
                                        <span className="nodejs"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <p className="prog-title">css3</p>
                                <div className="progress-con">
                                    <p className="prog text">95%</p>
                                    <div className="progress">
                                        <span className="css3"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <p className="prog-title">ReactJS</p>
                                <div className="progress-con">
                                    <p className="prog text">75%</p>
                                    <div className="progress">
                                        <span className="reactjs"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <p className="prog-title">Python</p>
                                <div className="progress-con">
                                    <p className="prog text">70%</p>
                                    <div className="progress">
                                        <span className="python"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                    <h4 className="stat-title">My Timeline</h4>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="tl-icon">
                            <FontAwesomeIcon icon={faBriefcase} />
                            </div>
                            <p className="tl-duration">2010 - present</p>
                            <h5>Web Developer<span> - Vircrosoft</span></h5>
                            <p>
                                <LoremIpsum p={1}></LoremIpsum>
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                            <FontAwesomeIcon icon={faBriefcase} />
                            </div>
                            <p className="tl-duration">2016 - 2017</p>
                            <h5>C++ Programmer<span> - Slime Tech</span></h5>
                            <p>
                                <LoremIpsum p={1}></LoremIpsum>
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                            <FontAwesomeIcon icon={faBriefcase} />
                            </div>
                            <p className="tl-duration">2013 -2016</p>
                            <h5>Computer Science Degree<span> - Brookes University</span></h5>
                            <p>
                                <LoremIpsum p={1}></LoremIpsum>
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                            <FontAwesomeIcon icon={faBriefcase} />
                            </div>
                            <p className="tl-duration">2008 - 2011</p>
                            <h5>Software Engineer<span> - Boogle, INC.</span></h5>
                            <p>
                                <LoremIpsum p={1}></LoremIpsum>
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                            <FontAwesomeIcon icon={faBriefcase} />
                            </div>
                            <p className="tl-duration">2009 - 2013</p>
                            <h5>Business Degree<span> - Sussex University</span></h5>
                            <p>
                                <LoremIpsum p={1}></LoremIpsum>
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                            <FontAwesomeIcon icon={faBriefcase} />
                            </div>
                            <p className="tl-duration">2017 - present</p>
                            <h5>3D animation<span> - Brighton University</span></h5>
                            <p>
                                <LoremIpsum p={1}></LoremIpsum>
                            </p>
                        </div>
                    </div>
                </section>
                <section className={`section ${controlBtn[2].isClicked ? "sec3" : ""} portfolio`}>
                    <div className="main-title">
                        <h2>My <span>Portfolio</span><span className="bg-text">my work</span></h2>
                    </div>
                    <p className="port-text">
                        Here is some of my work that I've done in various programming languages
                    </p>
                    <div className="portfolios">
                        <div className="portfolio-item">
                            <div className="image">
                                <img src={require("./img/port1.jpg")} alt=""></img>
                            </div>
                            <div className="hover-items">
                                <h3>Project Source</h3>
                                <div className="icons">
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faGithub}/>
                                        </div>
                                    </a>
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBehance}/>
                                        </div>
                                    </a>
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faYoutube}/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="image">
                                <img src={require("./img/port2.jpg")} alt=""></img>
                            </div>
                            <div className="hover-items">
                                <h3>Project Source</h3>
                                <div className="icons">
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faGithub}/>
                                        </div>
                                    </a>
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBehance}/>
                                        </div>
                                    </a>
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faYoutube}/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="image">
                                <img src={require("./img/port3.jpg")} alt=""></img>
                            </div>
                            <div className="hover-items">
                                <h3>Project Source</h3>
                                <div className="icons">
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faGithub}/>
                                        </div>
                                    </a>
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBehance}/>
                                        </div>
                                    </a>
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faYoutube}/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="image">
                                <img src={require("./img/port4.jpg")} alt=""></img>
                            </div>
                            <div className="hover-items">
                                <h3>Project Source</h3>
                                <div className="icons">
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faGithub}/>
                                        </div>
                                    </a>
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBehance}/>
                                        </div>
                                    </a>
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faYoutube}/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="image">
                                <img src={require("./img/port5.jpg")} alt=""></img>
                            </div>
                            <div className="hover-items">
                                <h3>Project Source</h3>
                                <div className="icons">
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faGithub}/>
                                        </div>
                                    </a>
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBehance}/>
                                        </div>
                                    </a>
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faYoutube}/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="image">
                                <img src={require("./img/port6.jpg")} alt=""></img>
                            </div>
                            <div className="hover-items">
                                <h3>Project Source</h3>
                                <div className="icons">
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faGithub}/>
                                        </div>
                                    </a>
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBehance}/>
                                        </div>
                                    </a>
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faYoutube}/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="image">
                                <img src={require("./img/port7.jpg")} alt=""></img>
                            </div>
                            <div className="hover-items">
                                <h3>Project Source</h3>
                                <div className="icons">
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faGithub}/>
                                        </div>
                                    </a>
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBehance}/>
                                        </div>
                                    </a>
                                    <a href="www.google.com" target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faYoutube}/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`section ${controlBtn[3].isClicked ? "sec4" : ""}`}>
                    <div className="blogs-content">
                        <div className="main-title">
                            <h2>My <span>Blogs</span><span className="bg-text">my blogs</span></h2>
                        </div>
                        <div className="blogs">
                            <div className="blog">
                                <img src={require("./img/blog1.jpg")} alt=""></img>
                                <div className="blog-text">
                                    <h4>
                                        How to Create Your Own Website
                                    </h4>
                                    <p>
                                    Lorem ipsum odor amet, consectetuer adipiscing elit. Sed gravida curae quisque felis potenti sit imperdiet.
                                    </p>
                                </div>
                            </div>
                            <div className="blog">
                                <img src={require("./img/blog2.jpg")} alt=""></img>
                                <div className="blog-text">
                                    <h4>
                                        How to Become an Expert in Web Design
                                    </h4>
                                    <p>
                                    Lorem ipsum odor amet, consectetuer adipiscing elit. Sed gravida curae quisque felis potenti sit imperdiet.
                                    </p>
                                </div>
                            </div>
                            <div className="blog">
                                <img src={require("./img/blog3.jpg")} alt=""></img>
                                <div className="blog-text">
                                    <h4>
                                        Become a Web Designer in 10 Days
                                    </h4>
                                    <p>
                                    Lorem ipsum odor amet, consectetuer adipiscing elit. Sed gravida curae quisque felis potenti sit imperdiet.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section className={`section ${controlBtn[4].isClicked ? "sec5" : ""} contact`}>
                    <div className="main-title">
                        <h2>Contact <span>me</span><span className="bg-text">contacts</span></h2>
                    </div>
                    <div className="contact-content-con">
                        <div className="left-contact">
                            <h4>Contact me here</h4>
                            <p>
                                Lorem ipsum odor amet, consectetuer adipiscing elit. Quis vivamus praesent laoreet class nostra semper? Elit justo vel praesent orci per purus urna fringilla. Augue faucibus id ridiculus volutpat elit dignissim non convallis.
                            </p>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                        Location
                                    </div>
                                    <p>
                                        : London, United Kingdom
                                    </p>
                                </div>
                                <div className="contact-item">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                        <span>Emaol</span>
                                    </div>
                                    <p>
                                        : randomemail@gmail.com
                                    </p>
                                </div>
                                <div className="contact-item">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faUserGraduate}/>
                                        Education
                                    </div>
                                    <p>
                                       : Some University, Random City
                                    </p>
                                </div>
                                <div className="contact-item">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faPhone}/>
                                        Mobile Number
                                    </div>
                                    <p>
                                        : 04801234567
                                    </p>
                                </div>
                                <div className="contact-item">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faGlobe}/>
                                        Languages
                                    </div>
                                    <p>
                                        : English,  Thai
                                    </p>
                                </div>
                            </div>
                            <div className="contact-icons">
                                <div className="contact-icon">
                                    <a href="www.google.com" target="_blank"><FontAwesomeIcon icon={faFacebook} className="i"/></a>
                                </div>
                                <div className="contact-icon">
                                    <a href="www.google.com" target="_blank"><FontAwesomeIcon icon={faTwitter} className="i"/></a>
                                </div>
                                <div className="contact-icon">
                                    <a href="www.google.com" target="_blank"><FontAwesomeIcon icon={faInstagram} className="i"/></a>
                                </div>
                                <div className="contact-icon">
                                    <a href="www.google.com" target="_blank"><FontAwesomeIcon icon={faYoutube} className="i"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="right-contact">
                            <form action="" className="contact-form">
                                <div className="input-control i-c-2">
                                    <input type="text" required placeholder="Your Name"></input>
                                    <input type="email" required placeholder="Your Email"></input>
                                </div>
                                <div className="input-control">
                                    <input type="text" required placeholder="Enter Subject"></input>
                                </div>
                                <div className="input-control">
                                    <textarea name="" id="" cols="15" rows="8" placeholder="Message Here"></textarea>
                                </div>
                                <div className="submit-btn">
                                    <a href="" className="main-btn">
                                        <span className="btn-text">Submit</span>
                                        <span className="btn-icon"><FontAwesomeIcon icon={faDownload} /></span>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <div className="controls">
                {controlElement}
            </div>
            <div className="theme-btn" onClick={(handleToggle)}>
                <FontAwesomeIcon className="icon" icon={faAdjust} />
            </div>
        </div>
    );
}

export default App;
