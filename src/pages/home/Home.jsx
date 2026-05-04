import { React } from "react";
import About from "../about/About";
import Projects from "../projects/Projects";
import Landing from "../landing/Landing";

import style from "./Home.module.css";
import Skills from "../skills/Skills";

import Contacts from "../contacts/Contacts";
import Stars from "../stars/stars";
import Experience from "../experience/Experience";
import Work from "../work/Work";
import Links from "../../global/components/links/Links";
import ProviderWrapper from "../../global/provider/ProviderWrapper";

export default function Home() {
  return (
    <ProviderWrapper>
      <div className={style.container}>
        <section id="landing">
          <Landing />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="work">
          <Work />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Stars />
        </section>
        <section>
          <Experience />
        </section>
        <section>
          <Contacts />
        </section>
        <Links />
      </div>
    </ProviderWrapper>
  );
}
