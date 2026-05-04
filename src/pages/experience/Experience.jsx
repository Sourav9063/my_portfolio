import React from "react";
import styles from "./Experience.module.css";
import { useScrollPosition } from "../../global/provider/GlobalProvider";
import { HOME_SECTION_SCROLL_CENTER } from "../home/scrollSections";

const EXPERIENCE_SCROLL_CENTER = HOME_SECTION_SCROLL_CENTER.EXPERIENCE;
const EXPERIENCE_INTRO_DISTANCE = 30;
const EXPERIENCE_INTRO_START =
  EXPERIENCE_SCROLL_CENTER - EXPERIENCE_INTRO_DISTANCE;
const EXPERIENCE_INITIAL_OFFSET = 35;

export default function Experience() {
  const [scrollPositionOfElement] = useScrollPosition();
  return (
    <div className={styles["hs-wrapper"]}>
      <div className={styles["body"]} style={{ top: `calc(0*93vh)` }}>
        <section className={styles["back"]}>
          <div
            className={styles["back-white"]}
            style={{
              opacity: ` ${
                scrollPositionOfElement > EXPERIENCE_INTRO_START
                  ? Math.min(
                      1,
                      (scrollPositionOfElement - EXPERIENCE_INTRO_START) /
                        EXPERIENCE_INTRO_DISTANCE
                    )
                  : 0
              }`,
            }}
          >
            <div
              className={`${styles["back-text-white"]} ${styles["back-text-reset-pos"]} `}
            >
              Experiences
            </div>
            <div
              className={`${styles["back-text-white"]} ${styles["back-text-reset-pos"]} `}
            >
              Educations
            </div>
            <div
              className={`${styles["back-text-white"]} ${styles["back-text-reset-pos"]} `}
            >
              Achievements
            </div>
            <div
              className={`${styles["back-text-white"]} ${styles["back-text-reset-pos"]} `}
            >
              & Co-curriculars
            </div>
          </div>
          <div
            className={styles["back-text"]}
            style={{
              transform: `translateX(${
                scrollPositionOfElement > EXPERIENCE_INTRO_START
                  ? 20 *
                    Math.max(
                      EXPERIENCE_SCROLL_CENTER - scrollPositionOfElement,
                      0
                    )
                  : 20 * EXPERIENCE_INITIAL_OFFSET
              }px)`,
            }}
          >
            Experiences
          </div>
          <div
            className={styles["back-text"]}
            style={{
              transform: `translateX(${
                scrollPositionOfElement > EXPERIENCE_INTRO_START
                  ? 60 *
                    Math.max(
                      EXPERIENCE_SCROLL_CENTER - scrollPositionOfElement,
                      0
                    )
                  : 60 * EXPERIENCE_INITIAL_OFFSET
              }px)`,
            }}
          >
            Educations
          </div>
          <div
            className={styles["back-text"]}
            style={{
              transform: `translateX(${
                scrollPositionOfElement > EXPERIENCE_INTRO_START
                  ? 40 *
                    Math.max(
                      EXPERIENCE_SCROLL_CENTER - scrollPositionOfElement,
                      0
                    )
                  : 40 * EXPERIENCE_INITIAL_OFFSET
              }px)`,
            }}
          >
            Achievements
          </div>
          <div
            className={styles["back-text"]}
            style={{
              transform: `translateX(${
                scrollPositionOfElement > EXPERIENCE_INTRO_START
                  ? 80 *
                    Math.max(
                      EXPERIENCE_SCROLL_CENTER - scrollPositionOfElement,
                      0
                    )
                  : 80 * EXPERIENCE_INITIAL_OFFSET
              }px)`,
            }}
          >
            & Co-curriculars
          </div>
        </section>
      </div>
      <div className={`${styles["body"]} ${styles["t50vw"]} `}>
        <ExperienceHome />
      </div>
      <div className={`${styles["body"]} ${styles["t50vw"]} `}>
        <EducationHome />
      </div>
      <div className={`${styles["body"]} ${styles["t50vw"]} `}>
        <AchievementHome />
      </div>
      <div className={`${styles["body"]} ${styles["t50vw"]} `}>
        <CoCurricularHome />
      </div>
    </div>
  );
}

function ExperienceHome() {
  return (
    <div className={styles["timeline-wrapper"]}>
      <h2 className={styles["section-title"]}>Experiences</h2>
      <ol className={styles["timeline"]}>
        {[...data.Experiences].reverse().map((el, index) => (
          <li className={styles["timeline-item"]} key={index}>
            <span className={styles["timeline-dot"]} />
            <div className={styles["timeline-card"]}>
              <span className={styles["date-pill"]}>
                {el.from} — {el.to}
              </span>
              <h3 className={styles["item-title"]}>{el.pos}</h3>
              <p className={styles["item-org"]}>{el.at}</p>
              {el.desc && <p className={styles["item-desc"]}>{el.desc}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function EducationHome() {
  return (
    <div className={styles["timeline-wrapper"]}>
      <h2 className={styles["section-title"]}>Educations</h2>
      <ol className={styles["timeline"]}>
        {[...data.Educations].reverse().map((el, index) => (
          <li className={styles["timeline-item"]} key={index}>
            <span
              className={`${styles["timeline-dot"]} ${styles["dot-edu"]}`}
            />
            <div className={styles["timeline-card"]}>
              <span
                className={`${styles["date-pill"]} ${styles["pill-edu"]}`}
              >
                {el.from} — {el.to}
              </span>
              <h3 className={styles["item-title"]}>{el.pos}</h3>
              <p className={styles["item-org"]}>{el.at}</p>
              {el.desc && <p className={styles["item-desc"]}>{el.desc}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function AchievementHome() {
  return (
    <div className={styles["timeline-wrapper"]}>
      <h2 className={styles["section-title"]}>Achievements</h2>
      <div className={styles["card-grid"]}>
        {data.Achievements.map((el, index) => (
          <div key={index} className={styles["badge-card"]}>
            <div className={styles["badge-icon"]}>★</div>
            <span className={styles["date-pill"]}>{el.from}</span>
            <h3 className={styles["item-title"]}>{el.pos}</h3>
            <p className={styles["item-org"]}>{el.at}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CoCurricularHome() {
  return (
    <div className={styles["timeline-wrapper"]}>
      <h2 className={styles["section-title"]}>Co-curriculars</h2>
      <div className={styles["card-grid"]}>
        {data.CoCurriculars.map((el, index) => (
          <div key={index} className={styles["badge-card"]}>
            <div
              className={`${styles["badge-icon"]} ${styles["icon-co"]}`}
            >
              ◆
            </div>
            <span
              className={`${styles["date-pill"]} ${styles["pill-co"]}`}
            >
              {el.from}
              {el.to ? ` — ${el.to}` : ""}
            </span>
            <h3 className={styles["item-title"]}>{el.at}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = {
  Experiences: [
    {
      at: "ShellBeeHaken Ltd.",
      pos: "Intern Software Engineer",
      from: "Feb 2023",
      to: "Aug 2023",
      desc: "Shipped features and fixed critical bugs across multiple production codebases with agile processes.",
      images: [""],
      logo: "",
    },
    {
      at: "ShellBeeHaken Ltd.",
      pos: "Associate Software Engineer",
      from: "Aug 2023",
      to: "Nov 2024",
      desc: "Promoted to full-time after delivering production applications across diverse business domains.",
      images: [""],
      logo: "",
    },
    {
      at: "Pathao Ltd.",
      pos: "Software Engineer I",
      from: "Dec 2024",
      to: "Jan 2026",
      desc: "Full-stack across mapping, campaign mgmt and real-time systems serving 100K+ daily users.",
      images: [""],
      logo: "",
    },
    {
      at: "Pathao Ltd.",
      pos: "Software Engineer II (Promoted)",
      from: "Feb 2026",
      to: "Current",
      desc: "Promoted; contributing to Super AI team's LLM integration efforts alongside platform work.",
      images: [""],
      logo: "",
    },
  ],
  //   Shahjalal University of Science and Technology (SUST)
  //   Institute of Information and Communication Technology (IICT)
  // CGPA: 3.64/4.00, Ranked 2nd in class

  // Notre Dame College, Dhaka, Bangladesh.
  // HSC GPA: 5

  // Manikganj Government High School, Manikganj
  // SSC GPA: 5

  Educations: [
    {
      at: "Shahjalal University of Science and Technology (SUST), IICT",
      from: "2019",
      to: "2024",
      pos: "B.Sc. in Software Engineering",
      desc: "CGPA 3.64/4.00 — Ranked 2nd in class (all courses cleared on first attempt).",
      images: [],
    },
    {
      at: "Notre Dame College, Dhaka, Bangladesh",
      from: "2018",
      to: "2019",
      pos: "Higher Secondary Certificate (HSC)",
      desc: "GPA 5.00",
      images: [],
    },
    {
      at: "Manikganj Government High School, Manikganj",
      from: "2012",
      to: "2018",
      pos: "Secondary School Certificate (SSC)",
      desc: "GPA 5.00",
      images: [],
    },
  ],
  Achievements: [
    {
      at: "SJ Innovation Hackathon",
      from: "Oct 2021",
      pos: "Innovative Idea prize in Medical Category",
      images: [],
    },
    {
      at: "Hack NSU 2022",
      from: "Nov’ 2021",
      pos: "5th place",
    },
    {
      at: "BdApps National Hackathon 2022",
      from: "Aug’ 2022",
      pos: "1st place Regional Round 3: Sylhet",
    },
    {
      at: "Idea Competition of Mobile App Game & Job Festival 2023",
      from: "March 2023",
      pos: "1st Runner Up",
    },
  ],

  CoCurriculars: [
    {
      at: "Assistant Treasurer at Maavoi Abritti Samsad, SUST",
      from: "Jan 2020",
      to: "Jul 2020",
    },
    {
      at: "Assistant Office Secretary at Manikganj Shamprity, SUST",
      from: "Jan 2022",
      to: "Jul 2022",
    },
    {
      at: "Creative Executive at SUST ACM Student Chapter",
      from: "Jul 2022",
      to: "Jan 2023",
    },
    {
      at: "Organizing Committee SUST SWE Technovent 2023, IICT",
      from: "Jan 2023",
    },
  ],
};
