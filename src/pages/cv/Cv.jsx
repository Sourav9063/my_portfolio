import React from "react";
import style from "./Cv.module.css";

export default function Cv() {
  return (
    <div className={`${style.body}`}>
      <div>
        <audio className={`${style.audio}`} controls autoPlay src="assets/audio/RESUME.mp3" />
      </div>
      {/* <iframe
        className={`${style.cv}`}
        src="assets/pdf/RESUME.pdf"
        type="application/pdf"
        title="CV"
      ></iframe> */}
      <iframe
        className={`${style.cv}`}
        src="https://sourav9063.github.io/CV"
        // type="application/pdf"
        title="CV"
      ></iframe>
      <div className={`${style.alternative}`}>
        <p>
          Alternative link to
          <a target='_blank' rel='noreferrer' href="https://github.com/Sourav9063/CV/blob/main/index.pdf">
            {" "}
            view the RESUME.
          </a>
        </p>
        <p>
          <a href="assets/pdf/index.pdf" download="SouravAhmedResume.pdf">
            Click here
          </a>{" "}
          to download the RESUME.
        </p>
      </div>
    </div>
  );
}
