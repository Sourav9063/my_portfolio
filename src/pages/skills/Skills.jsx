import React, { useState } from "react";
import style from "./Skills.module.css";
import "../../global/css/global.css";
import { useScrollPosition } from "../../global/provider/GlobalProvider";
import { useEffect } from "react";

export default function Skills() {
  const cardsRef = React.useRef();
  const [scrollPositionOfElement] = useScrollPosition();
  const [scrollPosition, setScrollPosition] = useState(245);
  const backdropProgress = Math.min(
    Math.max(1 - Math.abs(scrollPosition - 300) / 55, 0),
    1
  );

  useEffect(() => {
    if (
      scrollPositionOfElement > 250 &&
      scrollPositionOfElement < 350 &&
      Math.abs(scrollPositionOfElement - scrollPosition) > 8
    ) {
      if (scrollPositionOfElement > 290 && scrollPositionOfElement < 310) {
        setScrollPosition(300);
      } else setScrollPosition(scrollPositionOfElement);
    }
    return () => {};
  }, [scrollPositionOfElement, scrollPosition]);

  return (
    <div className={`${style.body}`}>
      <div
        className="hello_backdrop_text"
        aria-hidden="true"
        style={{
          opacity: 0.08 + backdropProgress * 0.18,
          transform: `translateY(-50%) scale(${
            0.62 + backdropProgress * 0.38
          })`,
        }}
      >
        Skills
      </div>
      <div
        className={`${style.cards}`}
        ref={cardsRef}
        onMouseMove={(event) => {
          for (const card of [...cardsRef.current.children]) {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            card.style.setProperty("--mouse-x", x + "px");
            card.style.setProperty("--mouse-y", y + "px");
          }
        }}
        onTouchMove={(event) => {
          for (const card of [...cardsRef.current.children]) {
            const rect = card.getBoundingClientRect();
            const x = event.touches[0].clientX - rect.left;
            const y = event.touches[0].clientY - rect.top;
            card.style.setProperty("--mouse-x", x + "px");
            card.style.setProperty("--mouse-y", y + "px");
          }
        }}
      >
        <div
          className={`${style.card} ${style.col13_row11}`}
          style={{
            transform: `translateX(${scrollPosition - 300}%)`,
            transitionDelay: 100 + "ms",
          }}
        >
          <div className={`${style.card_content}`}>
            <div className={`${style.card_image}`}>
              <i className="fa-duotone fa-apartment"></i>
            </div>
            <div className={`${style.card_info_wrapper}`}>
              <div className={`${style.card_info}`}>
                <i className="fa-duotone fa-apartment"></i>
                <div className={`${style.card_info_title}`}>
                  <h3>Problem Solving</h3>
                  <h4>
                    - Solved 700+ competitive programming problems in various
                    online judges using C++ and Python.<br></br>- Have
                    intermediate-level Algorithm and Data Structure knowledge.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.card} ${style.col25_row22}`}
          style={{
            transform: `translateX(${scrollPosition - 300}%)`,
            transitionDelay: 320 * 1 + "ms",
          }}
        >
          <div className={`${style.card_content}`}>
            <div className={`${style.card_image}`}>
              <i className="fa-duotone fa-unicorn"></i>
            </div>
            <div className={`${style.card_info_wrapper}`}>
              <div className={`${style.card_info}`}>
                <i className="fa-duotone fa-unicorn"></i>
                <div className={`${style.card_info_title}`}>
                  <h3>UI and UX enthusiasm</h3>
                  <h4>
                    - Love to learn new UI design trends. Likes to experiment
                    with different design approaches i.e Glassmorphism,
                    Neumorphism, Illustrations, and animations like Rive,
                    Lottie, Framer-motion, etc.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.card} ${style.col11_row23}`}
          style={{
            transform: `translateX(${scrollPosition - 300}%)`,
            transitionDelay: 320 * 2 + "ms",
          }}
        >
          <div className={`${style.card_content}`}>
            <div className={`${style.card_image}`}>
              <i className="fa-duotone fa-blender-phone"></i>
            </div>
            <div className={`${style.card_info_wrapper}`}>
              <div className={`${style.card_info}`}>
                <i className="fa-duotone fa-blender-phone"></i>
                <div className={`${style.card_info_title}`}>
                  <h3>Framework & Library</h3>
                  <h4>
                    - NextJS <br></br> - ReactJS <br></br> - GoLang <br></br> -
                    NuxtJS / VueJS <br></br> - NodeJS / ExpressJS <br></br> -
                    ElectronJS <br></br> - Socket.IO <br></br> - PostgreSQL{" "}
                    <br></br> - MySQL <br></br> - MongoDB <br></br> - Redis{" "}
                    <br></br> - BigQuery <br></br> - Docker <br></br> - AWS
                    Amplify / S3 <br></br> - Firebase <br></br> - Git & GitHub
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.card} ${style.col45_row11}`}
          style={{
            transform: `translateX(${scrollPosition - 300}%)`,
            transitionDelay: 320 * 3 + "ms",
          }}
        >
          <div className={`${style.card_content}`}>
            <div className={`${style.card_image}`}>
              <i className="fa-duotone fa-person-to-portal"></i>
            </div>
            <div className={`${style.card_info_wrapper}`}>
              <div className={`${style.card_info}`}>
                <i className="fa-duotone fa-person-to-portal"></i>
                <div className={`${style.card_info_title}`}>
                  <h3>Programming Languages</h3>
                  <h4>
                    - C++, C#, Java, Python, JavaScript(HTML,CSS), Dart, SQL,
                    LATEX
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.card} ${style.col23_row33}`}
          style={{
            transform: `translateX(${scrollPosition - 300}%)`,
            transitionDelay: 320 * 4 + "ms",
          }}
        >
          <div className={`${style.card_content}`}>
            <div className={`${style.card_image}`}>
              <i className="fa-duotone fa-person-from-portal"></i>
            </div>
            <div className={`${style.card_info_wrapper}`}>
              <div className={`${style.card_info}`}>
                <i className="fa-duotone fa-person-from-portal"></i>
                <div className={`${style.card_info_title}`}>
                  <h3>Database design</h3>
                  <h4>
                    - Have a grasp on the path of Requirement analysis to
                    Database design.<br></br>- Worked with both SQL and NoSQL
                    databases
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.card} ${style.col34_row33}`}
          style={{
            transform: `translateX(${scrollPosition - 300}%)`,
            transitionDelay: 320 * 5 + "ms",
          }}
        >
          <div className={`${style.card_content}`}>
            <div className={`${style.card_image}`}>
              <i className="fa-duotone fa-otter"></i>
            </div>
            <div className={`${style.card_info_wrapper}`}>
              <div className={`${style.card_info}`}>
                <i className="fa-duotone fa-otter"></i>
                <div className={`${style.card_info_title}`}>
                  <h3>Design Pattern implementation</h3>
                  <h4>
                    - Familiar with different types of design patterns and
                    refactoring processes. <br></br>- Loves to organize code for
                    future use.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// body
// :
// "Skills_body__8wXL7"
// card
// :
// "Skills_card__YPqNg"
// card-content
// :
// "Skills_card-content__2fjz0"
// card-image
// :
// "Skills_card-image__xY8zS"
// card-info
// :
// "Skills_card-info__ayHvX"
// card-info-title
// :
// "Skills_card-info-title__fIHUb"
// card-info-wrapper
// :
// "Skills_card-info-wrapper__FvpzI"
// cards
// :
// "Skills_cards__J0Lwh"
