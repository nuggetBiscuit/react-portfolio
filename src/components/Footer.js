import React from "react";

function Footer() {
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                   
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">                            
                            New York City, NY 
                            <br />
                            (willing to relocate)
                        </p>
                    </div>
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/muhammad-khuzema-aslam/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/nuggetBiscuit"><i className="fab fa-fw fa-github"></i></a>
                    </div>
                  
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">Contact Info</h4>
                        <p className="lead mb-0">
                            Email: khuzemamura@gmail.com
                        </p>
                    </div>
                </div>
                <p>Made with React.js</p>
            </div>
        </footer>
    );
}

export default Footer;