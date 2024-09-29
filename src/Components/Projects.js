import React from 'react';
import './Projects.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import quiz1 from '../Images/quiz1.PNG';
import quiz2 from '../Images/quiz2.PNG';
import quiz3 from '../Images/quiz3.PNG';
import quiz4 from '../Images/quiz4.PNG';
import Australia from '../Images/Australia.png';
import England from '../Images/England.png';
import India from '../Images/India.png';
import Bangladesh from '../Images/Bangladesh.png';
import PhirKabhi from '../Images/PhirKabhi.png';
import SpiritOfJersey from '../Images/SpiritOfJersey.png';
import Hukum from '../Images/Hukum.png';
import ChaliGaliChudu from '../Images/ChaliGaliChudu.png';

function Projects() {
    return (
        <div className="projects-container my-5">
            <div className="text-center mb-5">
                <h1 style={{ color: 'rgb(30, 128, 0)' }}>Projects</h1>
            </div>

            <div className="row mb-5 align-items-start virat-kohli-quiz">
                <div className="col-lg-6">
                    <h2 className="project-title-1">Virat Kohli Quiz</h2>
                    <p className="project-description">
                        I have developed a Virat Kohli Quiz website using HTML, CSS, and JavaScript. Users have to choose an option; each correct answer will be marked in vibrant green color, while the incorrect options are highlighted in bold red color.
                    </p>
                    <p className="project-description">
                        This project demonstrates my passion for cricket and my proficiency in web development, allowing users to engage in an interactive way.
                    </p>
                    <p className="project-subtitle">Key Features of the Website:</p>
                    <ul className="project-features list-unstyled">
                        <li><i className="fas fa-tv-alt"></i> Responsive Design</li>
                        <li><i className="fas fa-smile"></i> User Interaction</li>
                        <li><i className="fas fa-sync-alt"></i> Real-time Updates</li>
                        <li><i className="fas fa-graduation-cap"></i> Educational Insights</li>
                        <li><i className="fa-regular fa-comment"></i> Immediate Feedback</li>
                        <li><i className="fas fa-cogs"></i> Customizable Settings</li>
                        <li><i className="fas fa-info-circle"></i> Interactive Quiz Interface</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <img src={quiz1} alt="Quiz 1" className="img-fluid mb-3" />
                    <img src={quiz2} alt="Quiz 2" className="img-fluid mb-3" />
                    <img src={quiz3} alt="Quiz 3" className="img-fluid mb-3" />
                    <img src={quiz4} alt="Quiz 4" className="img-fluid mb-3" />
                </div>
                <div className="button-wrapper text-center col-lg-12">
                    <a href="https://virat-kohli-quiz.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-demo me-2">
                        <i className="fas fa-desktop"></i> Demo
                    </a>
                    <a href="https://github.com/Karthik0285/Virat-Kohli-Quiz" target="_blank" rel="noopener noreferrer" className="btn btn-code">
                        <i className="fas fa-code"></i> View Code
                    </a>
                </div>
            </div>

            <div className="row mb-5 align-items-start icc-odi-world-cup">
                <div className="col-lg-6">
                    <h2 className="project-title-2">ICC ODI World Cup</h2>
                    <p className="project-description">
                        I've developed a dynamic cricket team showcase website using HTML, CSS, and JavaScript. Users can explore teams like India, England, Australia, and Bangladesh with real-time updates featuring team logos, official colours, prominent players, and cricketing histories.
                    </p>
                    <p className="project-description">
                        This project showcases my web development skills and offers a platform for users to discover and learn about their favorite teams.
                    </p>
                    <p className="project-subtitle">Key Features of the Website:</p>
                    <ul className="project-features list-unstyled">
                        <li><i className="fas fa-users"></i> Team Selection</li>
                        <li><i className="fas fa-comments"></i> Fans Interaction</li>
                        <li><i className="fas fa-sync-alt"></i> Real-time Updates</li>
                        <li><i className="fas fa-info-circle"></i> Informative Content</li>
                        <li><i className="fas fa-calendar-alt"></i> Schedule and Fixtures</li>
                        <li><i className="fas fa-smile"></i> User-Friendly Interface</li>
                        <li><i className="fas fa-poll"></i> Player Stats and Records</li>
                        <li><i className="fas fa-tv"></i> Live Streaming and Score</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <img src={India} alt="India" className="img-fluid mb-3" />
                    <img src={England} alt="England" className="img-fluid mb-3" />
                    <img src={Australia} alt="Australia" className="img-fluid mb-3" />
                    <img src={Bangladesh} alt="Bangladesh" className="img-fluid mb-3" />
                </div>
                <div className="button-wrapper text-center col-lg-12">
                    <a href="https://icc-mens-odi-world-cup-2023.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-demo me-2">
                        <i className="fas fa-desktop"></i> Demo
                    </a>
                    <a href="https://github.com/Karthik0285/ICC-ODI-World-Cup-2023" target="_blank" rel="noopener noreferrer" className="btn btn-code">
                        <i className="fas fa-code"></i> View Code
                    </a>
                </div>
            </div>

            <div className="row mb-5 align-items-start karthik-playlist">
                <div className="col-lg-6">
                    <h2 className="project-title-3">Karthik's Playlist</h2>
                    <p className="project-description">
                        I have successfully built a music playlist using HTML, CSS, and JavaScript. This allows users to play their chosen songs. They can click the "Next" button to skip the current song or the "Previous" button to go back in the playlist.
                    </p>
                    <p className="project-description">
                        Users have the option to click the 'shuffle' button to randomize the playlist. This creates a dynamic listening experience for the users. The playlist also features convenient options for replaying songs and adjusting the volume.
                    </p>
                    <p className="project-subtitle">Key Features of the Website:</p>
                    <ul className="project-features list-unstyled">
                        <li><i className="fas fa-tv-alt"></i> Responsive Design</li>
                        <li><i className="fas fa-smile"></i> User-Friendly Interface</li>
                        <li><i className="fas fa-sync-alt"></i> Real-time Updates</li>
                        <li><i className="fa-regular fa-eye"></i> Dynamic Backgrounds</li>
                        <li><i className="fa-solid fa-music"></i> Playlist Management</li>
                        <li><i className="fas fa-pen"></i> Customizing Player Themes</li>
                        <li><i className="fas fa-headphones"></i> Equalizer and Sound Effects</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <img src={PhirKabhi} alt="Phir Kabhi" className="img-fluid mb-3" />
                    <img src={SpiritOfJersey} alt="Spirit of Jersey" className="img-fluid mb-3" />
                    <img src={Hukum} alt="Hukum" className="img-fluid mb-3" />
                    <img src={ChaliGaliChudu} alt="Chali Gali Chudu" className="img-fluid mb-3" />
                </div>
                <div className="button-wrapper text-center col-lg-12">
                    <a href="https://karthiks-playlist.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-demo me-2">
                        <i className="fas fa-desktop"></i> Demo
                    </a>
                    <a href="https://github.com/Karthik0285/Karthiks-Playlist" target="_blank" rel="noopener noreferrer" className="btn btn-code">
                        <i className="fas fa-code"></i> View Code
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
