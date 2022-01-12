import './style.scss'
import '../../assets/css/all.css';

export default function About({ setNavbarIndex }) {

    return (
        <div className='about' id="about">
            <div className="skewed"/>
            <div className="content">
                <div className="text_container">
                    <div className="title">
                        <h1>
                            About
                        </h1>
                    </div>
                    <div className="subtext">
                        <p>
                            I'm a software engineer specialized in frontend and backend development for complex, scalable web apps. I design, build, and sometimes rescue applications. I'm just looking for the right company for my career, creating exceptional experiences on the web.
                        </p>
                    </div>
                    <div className="buttons">
                        <a>
                            <div className='about_button'>
                                Resume
                            </div>
                        </a>
                        <a href="#contact" onClick={() => setNavbarIndex(3)}>
                            <div className='about_button'>
                                Contact Me
                            </div>
                        </a>
                    </div>
                </div>
                <div className="skills">
                    <div className="title">
                        <h1>
                            Skills
                        </h1>
                    </div>
                    <div className="icons">
                        <h3>
                                Front End: 
                        </h3>
                        <div className='front_end'>
                            
                            <i class="fab fa-html5"/>
                            <i class="fab fa-js"/>
                            <i class="fab fa-react"/>
                            <i class="fab fa-css3-alt"/>
                            <i class="fab fa-sass"/>
                            <i class="fab fa-bootstrap"/>
                        </div>
                        <h3>
                            Back End: 
                        </h3>
                        <div className='back_end'>
                            <i class="fab fa-python"/>
                            <i class="fab fa-java"/>
                            <i class="fab fa-node-js"/>
                            <i class="fab fa-aws"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
