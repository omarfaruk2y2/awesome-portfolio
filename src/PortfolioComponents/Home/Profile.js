import React from "react";
import "./Profile.css";
import Typewriter from 'typewriter-effect';
import BgImage from './images/bg.png';
import BgShape from './images/shape-bg.png';
import ProfilePhoto from './images/profilephoto2.jpg';
const Profile = () => {
  return (
    <div className="profile-section">
      <div className="profile-container">
        <div className="row profile-details">
          <div className="col-lg-6">
            <div className="profile-social">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-instagram"></i></a>
              <a href="#"><i class="fa fa-dribbble"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-linkedin-in"></i></a>
            </div>
            <div className="profile-name">
              <h1>Hi, I am <span className="highlighted-text">Omar Faruk</span></h1>
            </div>
            <div className="profile-skills">
              <h1>
                <Typewriter
                  options={{
                    strings: ['WordPress Developer 😜', 'PHP Developer 😈', 'Java Developer 💘', 'React Developer 💠'],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              </h1>
              <h3>Knack of building applications with front and back end operations.
              </h3>
              <div className="profile-button">
                <button className="btn profile-hire">Hire Me</button>
                <button className="btn profile-download"><a href="OmarFaruk.pdf">Download CV</a></button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="profile-photo-section">
              <img src={ProfilePhoto} />
            </div>
          </div>
        </div>
      </div>
      <div className="profile-footer-shape">
        <img src={BgShape} />
      </div>

    </div>
  )
}

export default Profile;