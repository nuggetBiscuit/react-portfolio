import React from "react";
import backgroundPic from "../../assets/img/background.gif";

function Resume() {
    return (
        <section style={{backgroundImage: `url(${backgroundPic})`, backgroundSize: "cover"}} className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
               
                <h2 className="page-section-heading text-center text-uppercase text-white">Resume</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
               
                <div className="row">
                    <div className="col-lg-3 ms-auto">
                        <p className="lead">Front-End Tech</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Bootstrap</li>
                                <li>React.js</li>
                                <li>Handlebars</li>
                                <li>Jquery</li>
                                <li>Responsive design</li>                            
                            </ul>
                    </div>
                    <div className="col-lg-3 ms-auto">
                        <p className="lead">Back-End Tech</p>
                            <ul>
                                <li>Node.js</li>
                                <li>Jest</li>
                                <li>Express.js</li>
                                <li>Progressive Web App (PWA)</li>
                                <li>Model-View Controller (MVC)</li>
                                <li>Object-Relational Mapping (ORM)</li>
                                <li>MySQL/Sequelize</li>
                                <li>MongoDB/Mongoose</li>
                            </ul>
                    </div>
                    <div className="col-lg-3 ms-auto">
                        <p className="lead">Performance Tech</p>
                            <ul>
                            <li>Rest Api</li>
                            <li>GraphQL Api</li>
                            <li>Github</li>
                            <li>Apollo Server</li>
                            <li>Heroku</li>
                            <li>Postman/Insomnia</li>
                            <li>Agile Scrum</li>
                            </ul>
                    </div>
                </div>
                
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="https://drive.google.com/file/d/1shSmvit9zmaSxHI9ugwE5bXnBUCu5y5W/view?usp=sharing">
                        <i className="fas fa-download me-2"></i>
                        Download My Resume!
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Resume;