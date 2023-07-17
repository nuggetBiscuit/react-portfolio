import React from "react";
import avatarPic from "../../assets/img/me.png";
import backgroundPic from "../../assets/img/flowers.gif";

function About() {
    return (
        <header style={{backgroundImage: `url(${backgroundPic})`, backgroundSize: "cover"}} className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column text-color">
              
                <img className="masthead-avatar mb-5" src={avatarPic} alt="Muhammad Khuzema Aslam profile pic" />
               
                <h1 className="masthead-heading text-uppercase mb-0">Muhammad Khuzema Aslam</h1>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
               
                <p className="masthead-subheading font-weight-light mb-0 ">Full Stack Develop and Biomedical Engineer/</p>
                <p>My name is Khuzema. I got my degree in biomedical engineering from the City College of New York. I have recently completed the Fullstack course from the Columbia Engineering Coding Boot Camp. I am life long learner with a strong foundation of engineering and problem solving principles. I am looking forward to applying my skills to creating practical products which will propel society forwards.</p>
                <p>I have acquired expertise in multiple programming languages, encompassing HTML, CSS, JavaScript, Typescript, C#, React.js, Asp.NET Core, Node.js, MySQL, and MongoDB. Furthermore, I have successfully completed over 20 projects that have been deployed, which involved constructing dynamic full stack web applications and designing user interfaces that adapt seamlessly to different devices. These endeavors have not only enhanced my technical abilities but also fostered robust teamwork and communication skills, which I consider vital for thriving in a collaborative setting.</p>
                {/* <p>In my free time</p> */}
                
            </div>
        </header>
    );
}

export default About;