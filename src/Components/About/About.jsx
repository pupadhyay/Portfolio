import React from "react";

const About = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="left">
          <div className="image"></div>
        </div>
      </div>
      <div className="col-md-6">
        <div class="right">
          <div className="short">
            <h3>I'm Bany Jara</h3>
            <h5>
              A Lead <span className="theme-color"> Visual Artist </span>based
              in <span className="theme-color">America</span>
            </h5>
            <p>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences through meaningful
              interactions. Check out my Portfolio
            </p>
          </div>
          <div className="extra">
            <h3 className="title">Personal Info</h3>
            <div className="list">
              <ul>
                <li>
                  <span>Name :</span> Bany Jara
                </li>
                <li>
                  <span>Address :</span> H-400 - Path2UK
                </li>
                <li>
                  <span>Age :</span> 21 Years
                </li>
                <li>
                  <span>Phone :</span> +12345667
                </li>
                <li>
                  <span>Nationality :</span> USA
                </li>
                <li>
                  <span>Email :</span> yourmail@gmail.com
                </li>
                <li>
                  <span>Freelance :</span> Available
                </li>
                <li>
                  <span>Languages :</span> French, English
                </li>
              </ul>
            </div>
            <div className="beny_tm_button color-outline">
              <a
                className="btn btn-primary btn-lg"
                href="img/about/cv.webp"
                download=""
              >
                <span className="wrapper">
                  <span className="first">Download CV</span>
                  <span className="second">Download CV</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
