import React from 'react';
import './Skills.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, FaPython, FaAws, FaDatabase, FaGit, FaGithub, FaFileExcel } from 'react-icons/fa';
import { SiJquery, SiExpress, SiMongodb, SiPostman } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="Skills-container mt-5">
      <h1 id="Skills-Heading" className="text-center mb-4">
        Skills
      </h1>
      <div id="skills-box" className="row justify-content-center">

        <div className="col-12 col-md-4 mb-4">
          <h2 className="text-center front-end-heading">Front End</h2>
          <div className="skills-container front-end-box">
            <div className="row mb-3">
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="skill-item text-center" id="HTML">
                  <FaHtml5 size={65} />
                  <p>HTML</p>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="skill-item text-center" id="CSS">
                  <FaCss3Alt size={65} />
                  <p>CSS</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="skill-item text-center" id="BOOTSTRAP">
                  <FaBootstrap size={65} />
                  <p>Bootstrap</p>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="skill-item text-center" id="JAVASCRIPT">
                  <FaJs size={65} />
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="skill-item text-center" id="JQUERY">
                  <SiJquery size={65} />
                  <p>jQuery</p>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="skill-item text-center" id="REACT">
                  <FaReact size={65} />
                  <p>React</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 mb-4">
          <h2 className="text-center back-end-heading">Back End</h2>
          <div className="skills-container back-end-box">
            <div className="row mb-3">
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="skill-item text-center" id="PYTHON">
                  <FaPython size={65} />
                  <p>Python</p>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="skill-item text-center" id="NODE">
                  <FaNodeJs size={65} />
                  <p>Node.js</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="skill-item text-center" id="EXPRESS">
                  <SiExpress size={65} />
                  <p>Express.js</p>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="skill-item text-center" id="MONGODB">
                  <SiMongodb size={65} />
                  <p>MongoDB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 mb-4">
          <h2 className="text-center misc-heading">Misc.</h2>
          <div className="skills-container misc-box">
            <div className="row mb-3">
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="skill-item text-center" id="AWS">
                  <FaAws size={65} />
                  <p>AWS</p>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="skill-item text-center" id="SQL">
                  <FaDatabase size={65} />
                  <p>SQL</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="skill-item text-center" id="GIT">
                  <FaGit size={65} />
                  <p>Git</p>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="skill-item text-center" id="GITHUB">
                  <FaGithub size={65} />
                  <p>GitHub</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="skill-item text-center" id="POSTMAN">
                  <SiPostman size={65} />
                  <p>Postman</p>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="skill-item text-center" id="EXCEL">
                  <FaFileExcel size={65} />
                  <p>Excel</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
