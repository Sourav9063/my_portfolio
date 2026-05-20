import React from "react";
import style from "./Contacts.module.css";
import { useRive } from "@rive-app/react-canvas";
import keyboard from "./keyboard.riv";
import "../../global/css/global.css";
import GlassDiv from "../../global/components/glassDiv/GlassDiv";
import svg from "./ssscribble.svg";
import svg1 from "./rrrainbow.svg";
import svg2 from "./ttten.svg";
import svg3 from "./ssscribble1.svg";
import svg4 from "./dddepth248.jpg";
import EmailSection from "../../global/components/emailSection/EmailSection";

let pattern = Math.floor(Math.random() * 5) + 1;
// let pattern = 3

export default function Contacts() {
  const { RiveComponent, rive } = useRive({
    src: keyboard,
    autoplay: false,
  });

  const [isCopied, setIsCopied] = React.useState(false);

  return (
    <div
      className={`${style.body}`}
      style={{
        backgroundImage: `url(${
          pattern === 1
            ? svg
            : pattern === 2
            ? svg1
            : pattern === 3
            ? svg2
            : pattern === 4
            ? svg3
            : svg4
        })`,
        // backgroundImage: `url(${svg2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#000000",
      }}
      onMouseEnter={() => rive && rive.play()}
    >
      <RiveComponent className={`${style.rive}`} />
      <GlassDiv className={`${style.glassDivTop} ${style.glassDiv}`}>
        <h2>Full-Stack Software Engineer, studied from </h2>
        <a
          className={`${style.sust}`}
          href="https://www.sust.edu/"
          target="_blank"
          rel="noreferrer"
        >
          Shahjalal University of Science and Technology
        </a>
      </GlassDiv>

      <div>
        {/* 
                 Email : sourav.ahmed5654@gmail.com
                    Github : https://github.com/Sourav9063
                    Website : https://sourav9063.github.io/my_portfolio/
                    LinkedIn : https://www.linkedin.com/in/sourav-ahmed/
                    +8801760725654

                    create GlassDiv for all the links
                */}
        <GlassDiv>
          <a
            href="mailto:sourav.ahmed5654@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            sourav.ahmed5654@gmail.com
          </a>
        </GlassDiv>
        <GlassDiv>
          <div
            className="tooltip imposterA"
            onMouseEnter={() => setIsCopied(() => false)}
            onClick={(e) => {
              navigator.clipboard.writeText("+8801760725654");
              setIsCopied(() => true);
              e.preventDefault();
            }}
          >
            +8801760725654
            <span className="glass tooltiptext  text_not_selectable">
              {isCopied ? "Copied" : "Click To Copy"}
            </span>
          </div>
        </GlassDiv>
        <GlassDiv>
          <div
            className="tooltip imposterA"
            onMouseEnter={() => setIsCopied(() => false)}
            onClick={(e) => {
              navigator.clipboard.writeText("+8801760725654");
              setIsCopied(() => true);
              e.preventDefault();
            }}
          >
            +8801775767596
            <span className="glass tooltiptext  text_not_selectable">
              {isCopied ? "Copied" : "Click To Copy"}
            </span>
          </div>
        </GlassDiv>
        <GlassDiv>
          <a
            href="https://www.facebook.com/Sourav.Ahmed63/"
            target="_blank"
            rel="noreferrer"
          >
            FaceBook
          </a>
        </GlassDiv>
        <GlassDiv>
          <a
            href="https://www.linkedin.com/in/sourav-ahmed/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </GlassDiv>
      </div>

      <EmailSection></EmailSection>
    </div>
  );
}

/* <div className={`${style.email}`}
    onClick={(e) => {
        // window.location.href = 'mailto:yourmail@domain.com';
        window.open('mailto:sourav.ahmed5654@gmail.com', '_blank');
        e.preventDefault();
    }}
>
    <h1>Email : sourav.ahmed5654@gmail.com</h1><span> hii</span>
</div> */

// {
// router.push("/" + MODAL_QUERY_POST);
//     const res = await fetch("/api/email-sender/from-portfolio", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: "email@gmail.com",
//         username: "username@gmail.com",
//         emailSubject: "emailSubject",
//         emailBody: "emailBody",
//       }),
//     });
//     const result = await res.json();
//     console.log(result);
//   }
