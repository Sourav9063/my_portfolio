import React from "react";
import styles from "./Experience.module.css";
import { useScrollPosition } from "../../global/provider/GlobalProvider";

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
                scrollPositionOfElement > 470
                  ? Math.min(1, (scrollPositionOfElement - 470) / 30)
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
                scrollPositionOfElement > 470
                  ? 20 * Math.max(500 - scrollPositionOfElement, 0)
                  : 20 * 35
              }px)`,
            }}
          >
            Experiences
          </div>
          <div
            className={styles["back-text"]}
            style={{
              transform: `translateX(${
                scrollPositionOfElement > 470
                  ? 60 * Math.max(500 - scrollPositionOfElement, 0)
                  : 60 * 35
              }px)`,
            }}
          >
            Educations
          </div>
          <div
            className={styles["back-text"]}
            style={{
              transform: `translateX(${
                scrollPositionOfElement > 470
                  ? 40 * Math.max(500 - scrollPositionOfElement, 0)
                  : 40 * 35
              }px)`,
            }}
          >
            Achievements
          </div>
          <div
            className={styles["back-text"]}
            style={{
              transform: `translateX(${
                scrollPositionOfElement > 470
                  ? 80 * Math.max(500 - scrollPositionOfElement, 0)
                  : 80 * 35
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
    <div className={styles["experiment-home"]}>
      <div className={styles["back-text-white"]}>Experiences</div>
      <div>
        {data.Experiences.map((el, index) => {
          return <div key={index}>{el.at+", "+el.pos}</div>;
        })}
      </div>
    </div>
  );
}
function AchievementHome() {
  return (
    <div className={styles["achievement-home"]}>
      <div className={styles["back-text-white"]}>Achievements</div>
      <div>
        {data.Achievements.map((el, index) => {
          return <div key={index}>{el.at}</div>;
        })}
      </div>
    </div>
  );
}
function CoCurricularHome() {
  return (
    <div className={styles["achievement-home"]}>
      <div className={styles["back-text-white"]}>Co-curriculars</div>
      <div>
        {data.CoCurriculars.map((el, index) => {
          return <div key={index}>{el.at}</div>;
        })}
      </div>
    </div>
  );
}

function EducationHome() {
  return (
    <div className={styles["education-home"]}>
      <div className={styles["back-text-white"]}>Educations</div>
      <div>
        {data.Educations.map((el, index) => {
          return <div key={index}>{el.at}</div>;
        })}
      </div>
    </div>
  );
}

const data = {
  Experiences: [
    {
      at: "ShellBeeHaken Ltd.",
      pos: "Intern Software Engineer",
      from: "February 2023",
      to: "July 2023",
      images: [""],
      logo: "",
    },
    {
      at: "ShellBeeHaken Ltd.",
      pos: "Associate Software Engineer",
      from: "July 2023",
      to: "December 2024",
      images: [""],
      logo: "",
    },
    {
      at: "Pathao Ltd.",
      pos: "Software Engineer L1",
      from: "December 2024",
      to: "Current",
      images: [""],
      logo: "",
    },
  ],
  //   Shahjalal University of Science and Technology (SUST)
  //   Institute of Information and Communication Technology (IICT)
  // CGPA: 3.61 (till 3rd year 2nd semester)

  // Notre Dame College, Dhaka, Bangladesh.
  // HSC GPA: 5

  // Manikganj Government High School, Manikganj
  // SSC GPA: 5

  Educations: [
    {
      at: "Shahjalal University of Science and Technology (SUST)",
      from: "2018",
      to: "2023",
      pos: "B.Sc. in Software Engineering",
      images: [],
    },
    {
      at: "Notre Dame College, Dhaka, Bangladesh.",
      from: "2018",
      to: "2019",
      pos: "Higher Secondary Certificate (HSC)",
      images: [],
    },
    {
      at: "Manikganj Government High School, Manikganj",
      from: "2012",
      to: "2018",
      pos: "Secondary School Certificate (SSC)",
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
