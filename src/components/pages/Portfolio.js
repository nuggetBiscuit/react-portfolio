import React from "react";
import techblogPic from "../../assets/img/portfolio/techblog.png";
import jatePic from "../../assets/img/portfolio/jate.png";
import bdayPic from "../../assets/img/portfolio/bday.png";
import careerPic from "../../assets/img/portfolio/career.png";
import trackerPic from "../../assets/img/portfolio/tracker.png";
import puzzlePic from "../../assets/img/portfolio/puzzle-store.png";
import Project from "../Project";
import backgroundPic from "../../assets/img/background.webp";


function Portfolio() {
    return (
    <>
        <section style={{backgroundImage: `url(${backgroundPic})`}} className="page-section portfolio" id="portfolio">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row justify-content-center">
                    <Project 
                        id="1"
                        name="Puzzle Store"
                        description="An ecommerce website that lets puzzle enthusiasts explore and purchase a wide range of puzzles from a reliable online platform that offers a variety of selections. App uses MERN Stack, Apollo Server and GraphQL API. Teamsize: 4"
                        github="https://github.com/mark-227-g/puzzlestore"
                        deployed="https://puzzle-store-2fc8c1b1fb52.herokuapp.com/"
                        img={puzzlePic}
                    />               
                    <Project 
                        id="2"
                        name="Career Crusader"
                        description="Career Crusader is an online platform designed to connect job seekers with employers by providing an easy-to-use job listing and posting system. The app run in the browser and features dynamically updated HTML and CSS."
                        github="https://github.com/bragceo/Career_Crusader"
                        deployed="https://career-crusaders-mvp.herokuapp.com/"
                        img={careerPic}

                    />                    
                    <Project 
                        id="3"
                        name="Tech Blog MVC Fulltack application"
                        description="I created this Tech Blog specifically for developers who are interested in exploring and discussing technical ideas, the latest progress, and emerging technologies. Using this blog allows users to share their coding knowledge with each others by posting articles and commenting on other's posts. This app follows MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. App is deployed to Heroku."
                        github="https://github.com/nuggetBiscuit/mvc-tech-blog-2"
                        deployed="https://mvc-tech-blog-t2.herokuapp.com/"
                        img={techblogPic}
                    />
                    <Project 
                        id="4"
                        name="PWA Text Editor application"
                        description="I have developed a browser-based text editor that operates as a single page application and fulfills the criteria of a Progressive Web App (PWA). Moreover, it incorporates various data persistence techniques to ensure redundancy in case any of the options are unsupported by the browser. The application is capable of functioning offline as well. To facilitate data storage and retrieval, I utilize the idb package, a lightweight wrapper built around the indexedDB API, offering a range of useful methods. App is deployed to Heroku."
                        github="https://github.com/nuggetBiscuit/text-editor-JATE"
                        img={jatePic}
                    />
                    <Project 
                        id="5"
                        name="It's Your Party"
                        description="The It’s Your Party app allows the user to discover amazing facts about the day they were born, be they big events or little-known gems. Leveraging trusted, established 3rd party APIs from the New York Times, Wikipedia, Billboard and others, the app delivers a nearly infinite amount of compelling stories, compiled easily into a single streamlined page. Entertain yourself and others on other things that make your birthday so special. 
"
                        github="https://github.com/ZeeDabbagh/its-your-party"
                        deployed="https://zeedabbagh.github.io/its-your-party/"
                        img={bdayPic}
                    />
                    <Project 
                        id="6"
                        name="Employee Tracker SQL application"
                        description="I built a command-line application to manage a company's employee database. This app is using Node.js, Inquirer package to interact with the user, MySQL2 package to connect with MYSQL database and perform queries, and console.table package to print MYSQL rows to the console."
                        github="https://github.com/nuggetBiscuit/sql-employee-tracker"
                        img={trackerPic}
                    />
                </div>                
            </div>
        </section>        
    </>    
    );
}

export default Portfolio;