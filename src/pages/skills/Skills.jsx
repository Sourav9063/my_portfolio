import React, { useState } from "react";
import style from "./Skills.module.css";
import "../../global/css/global.css";
import { useScrollPosition } from "../../global/provider/GlobalProvider";
import { useEffect } from "react";
import {
  HOME_SECTION_SCROLL_CENTER,
  getSectionScrollTrigger,
} from "../home/scrollSections";

const SKILLS_SCROLL_TRIGGER = getSectionScrollTrigger(
  HOME_SECTION_SCROLL_CENTER.SKILLS
);
const SKILLS_BACKDROP_EXTRA_RADIUS = 5;
const SKILLS_SCROLL_SNAP_RADIUS = 10;
const SKILLS_SCROLL_UPDATE_THRESHOLD = 8;

export default function Skills() {
  const cardsRef = React.useRef();
  const [scrollPositionOfElement] = useScrollPosition();
  const [scrollPosition, setScrollPosition] = useState(
    SKILLS_SCROLL_TRIGGER.start
  );
  const backdropProgress = Math.min(
    Math.max(
      1 -
        Math.abs(scrollPosition - SKILLS_SCROLL_TRIGGER.center) /
          (SKILLS_SCROLL_TRIGGER.end -
            SKILLS_SCROLL_TRIGGER.center +
            SKILLS_BACKDROP_EXTRA_RADIUS),
      0
    ),
    1
  );

  useEffect(() => {
    if (
      scrollPositionOfElement > SKILLS_SCROLL_TRIGGER.start &&
      scrollPositionOfElement < SKILLS_SCROLL_TRIGGER.end &&
      Math.abs(scrollPositionOfElement - scrollPosition) >
        SKILLS_SCROLL_UPDATE_THRESHOLD
    ) {
      if (
        Math.abs(scrollPositionOfElement - SKILLS_SCROLL_TRIGGER.center) <
        SKILLS_SCROLL_SNAP_RADIUS
      ) {
        setScrollPosition(SKILLS_SCROLL_TRIGGER.center);
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
            transform: `translateX(${
              scrollPosition - SKILLS_SCROLL_TRIGGER.center
            }%)`,
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
                    online judges using C++ and Python.<br/>- Have
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
            transform: `translateX(${
              scrollPosition - SKILLS_SCROLL_TRIGGER.center
            }%)`,
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
            transform: `translateX(${
              scrollPosition - SKILLS_SCROLL_TRIGGER.center
            }%)`,
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
                    - React <br/> - Next.js <br/> - Vue.js / Nuxt.js{" "}
                    <br/> - Flutter <br/> - Tailwind CSS <br/> -
                    Zod / shadcn/ui <br/> - Node.js / Express.js{" "}
                    <br/> - GraphQL / REST API
                    <br/> - WebSocket / Socket.IO <br/> - PostgreSQL{" "}
                    <br/> - MongoDB <br/> - Redis <br/> - Firebase{" "}
                    <br/> - BigQuery <br/> - Docker <br/> - AWS S3
                    / Amplify <br/> - CI/CD / Git <br/> - Electron{" "}
                    <br/> - OpenAPI / RBAC
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.card} ${style.col45_row11}`}
          style={{
            transform: `translateX(${
              scrollPosition - SKILLS_SCROLL_TRIGGER.center
            }%)`,
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
                    - C++, C#, JavaScript, TypeScript, Go (Golang), Python, Java, SQL,
                    HTML5, CSS3
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.card} ${style.col23_row33}`}
          style={{
            transform: `translateX(${
              scrollPosition - SKILLS_SCROLL_TRIGGER.center
            }%)`,
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
                    Database design.<br/>- Worked with both SQL and NoSQL
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
            transform: `translateX(${
              scrollPosition - SKILLS_SCROLL_TRIGGER.center
            }%)`,
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
                    refactoring processes. <br/>- Loves to organize code for
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
