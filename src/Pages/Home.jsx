import "../css/HomeStyle.css";
import heroImg from "../assets/WhatsApp Image 2025-10-27 at 17.26.38_dc176daa.jpg";
import aboutImg from "../assets/WhatsApp Image 2025-10-27 at 17.26.38_571d0256.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as faEnvelopeRegular } from "@fortawesome/free-regular-svg-icons";

function Home() {
  return (
    <>
      <div className="home pt-5">
        <section id="hero-section" className="hero-section d-flex align-items-center justify-content-center text-center">
          <div className="row container align-items-center">
            <div className="image clo-12 col-lg-6 mb-4 mb-lg-0">
              <img
                src={heroImg}
                alt=""
                className="img-fluid rounded-5 shadow-lg profile-img"
              />
            </div>

            <div className="col-12 col-lg-6">
              <h1 className="display-4 fw-bold text-white">
                Hi, I'm <span className="text-info">Ziad Tamer</span>
              </h1>
              <p className="lead text-secondary fw-bold mb-3">
                3rd-Year Electrical Engineering Student
              </p>
              <p className="text-secondary-emphasis">
                Huawei Certified – Passionate about innovation, electronics, and
                sustainable technology.
              </p>
              <a
                href="#about-section"
                className="btn btn-outline-info btn-lg mt-3"
              >
                About
              </a>
            </div>
          </div>
        </section>

        <section
          id="about-section"
          className="about-section card-layout text-light py-5"
        >
          <h2 className="text-info fw-bold mb-4 text-center">About Me</h2>
          <div className="about-card container d-flex flex-column flex-lg-row align-items-center justify-content-center">
            <img
              src={aboutImg}
              alt="Ziad Tamer"
              className="about-img rounded-5 shadow-lg mb-3 mb-lg-0"
            />
            <div className="about-text ms-lg-4 text-center text-lg-start">
              <h3 className="fw-bold text-info">Ziad Tamer</h3>
              <p className="text-secondary">
                I’m a 3rd-Year Electrical Engineering student at{" "}
                <span>October 6 University</span> —{" "}
                <span>Huawei Certified</span>, with hands-on experience through
                a Huawei internship. I actively participated in{" "}
                <span>EGYPES – Egypt Energy Show in both 2024 and 2025</span> ,
                gaining real-world exposure to cutting-edge energy and
                sustainability innovations. I’m passionate about electronics,
                smart systems, and sustainable technology, driven by a vision to
                create efficient and impactful engineering solutions.
              </p>
            </div>
          </div>
        </section>

        <section
          id="skills-section"
          className="skills-section text-center py-5"
        >
          <div className="container">
            <h2 className="text-info fw-bold mb-4">Skills</h2>

            <div className="d-flex flex-wrap justify-content-center gap-5 pt-2">
              {/* Category 1 */}
              <div className="category mb-4">
                <h4 className="text-light mb-3">Technical & Engineering</h4>
                <div className="d-flex flex-column">
                  <span className="skill rounded-5 fs-6 bg-info text-dark m-1 py-2">
                    Circuit Design
                  </span>
                  <span className="skill rounded-5 fs-6 bg-info text-dark m-1 py-2">
                    Arduino
                  </span>
                  <span className="skill rounded-5 fs-6 bg-info text-dark m-1 py-2">
                    MATLAB
                  </span>
                  <span className="skill rounded-5 fs-6 bg-info text-dark m-1 py-2">
                    PCB Design
                  </span>
                </div>
              </div>

              {/* Category 2 */}
              <div className="category mb-4">
                <h4 className="text-light mb-3">Soft & Professional</h4>
                <div className="d-flex flex-column">
                  <span className="skill rounded-5 fs-6 bg-info text-dark m-1 py-2">
                    Teamwork
                  </span>
                  <span className="skill rounded-5 fs-6 bg-info text-dark m-1 py-2">
                    Leadership
                  </span>
                  <span className="skill rounded-5 fs-6 bg-info text-dark m-1 py-2">
                    Problem Solving
                  </span>
                  <span className="skill rounded-5 fs-6 bg-info text-dark m-1 py-2">
                    Communication
                  </span>
                </div>
              </div>

              {/* Certificates & EGYPES Paragraph */}
              <div className="category mb-4 text-light">
                <h4 className="text-info mb-3">Certificates & Achievements</h4>
                <p className="text-secondary text-start px-3">
                  Certified by <span className="text-info">Huawei (HCIA)</span>{" "}
                  with practical experience gained through a{" "}
                  <span className="text-info">Huawei Internship</span>.
                  Participated in{" "}
                  <span className="text-info">
                    EGYPES – Egypt Energy Show 2024 and 2025
                  </span>
                  , contributing to discussions on innovation and sustainable
                  technology in Egypt’s energy sector.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact-section"
          className="contact-section text-center d-flex flex-column gap-4 gap-lg-5"
        >
          <h2 className="text-info fw-bold">Contact me at anytime</h2>

          <div className="d-flex flex-column flex-lg-row justify-content-around gap-4 p-4">
            <div className="contact-card text-center p-5">
              <div className="about-text text-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-info fs-1 mb-3"
                />
                <h5 className="text-light">Email (iCloud)</h5>
                <p className="text-secondary mb-1">
                  ziadtamer.ayesh@icloud.com
                </p>
              </div>
            </div>
            <div className="contact-card text-center p-5">
              <div className="about-text text-center">
                <FontAwesomeIcon
                  icon={faEnvelopeRegular}
                  className="text-info fs-1 mb-3"
                />
                <h5 className="text-light">Email (Gmail)</h5>
                <p className="text-secondary mb-1">ziadtamer.ayesh@gmail.com</p>
              </div>
            </div>
            <div className="contact-card text-center p-5">
              <div className="about-text text-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-info fs-1 mb-3"
                />
                <h5 className="text-light">Phone</h5>
                <p className="text-secondary mb-1">+20 101 518 8971</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
