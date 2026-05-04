import React, { useCallback, useEffect, useRef, useState } from "react";
import style from "./Work.module.css";
import { clamp, randomRGBA } from "../../global/helper/function/ui";
import { useScrollPosition } from "../../global/provider/GlobalProvider";
import {
  HOME_SECTION_SCROLL_CENTER,
  getSectionScrollTrigger,
} from "../home/scrollSections";

const WORK_SCROLL_TRIGGER = getSectionScrollTrigger(
  HOME_SECTION_SCROLL_CENTER.WORK
);

const mainWork = [
  {
    eyebrow: "Platform foundation",
    title: "Dashboard Foundation",
    summary:
      "Enterprise Next.js framework with OpenAPI type generation, Zod validation, shadcn UI, centralized auth/RBAC, and embedded AI guardrails for fast product launches.",
    stack: ["Next.js", "OpenAPI", "Zod", "shadcn UI"],
    signal: "0-to-1 accelerator",
  },
  {
    eyebrow: "Maps and community",
    title: "Pathao Map",
    href: "https://maps.pathao.io/",
    summary:
      "Microservices-based POI gathering and validation platform with RBAC, built for high-volume map operations serving Pathao's daily mobility network.",
    stack: ["Go", "Vue", "Nuxt", "Docker"],
    signal: "100K+ daily users",
  },
  {
    eyebrow: "Growth systems",
    title: "Loop",
    summary:
      "Campaign management platform for marketing operations with bulk XLSX uploads, robust file handling, workflow controls, and real-time analytics.",
    stack: ["Next.js", "Go", "PostgreSQL"],
    signal: "Bulk ops at scale",
  },
  {
    eyebrow: "Engagement engine",
    title: "Mission",
    summary:
      "Gamification platform with event listeners, streak rewards, mission phase management, dashboards, and analytics pipelines.",
    stack: ["Next.js", "Go", "Redis", "BigQuery"],
    signal: "Event-driven rewards",
  },
];

const workSystems = [
  {
    eyebrow: "Restaurant SaaS",
    name: "Resto Web",
    stack: ["Next.js", "Zod", "WebSocket"],
    signal: "Live ops",
    href: "https://restoweb.p-stageenv.xyz/",
    detail: "Restaurant SaaS with WebSocket notifications, dynamic menus, and analytics.",
  },
  {
    eyebrow: "Interactive story",
    name: "Year End Wrap",
    stack: ["Next.js", "TypeScript"],
    signal: "No app update",
    href: "https://wrapped.pathao.com/eyJvcmQiOlsyNjMsMTAsMCwyMiwwLDFdLCJ1c2ciOlsxMTk0NjQsMjc5MzMuNjIsInAiXSwiY2lkIjoxLCJ1dCI6ImEiLCJtZSI6WyJyIiwiciIsMTkwMV0sInAiOiJiL3ZldGVyYW4ifQ==",
    detail: "Interactive 2025 wrap experience shipped without app updates.",
  },
  {
    eyebrow: "Geo operations",
    name: "GariKoi",
    stack: ["Next.js", "Go", "Google Maps"],
    signal: "Real-time tracking",
    detail: "Real-time driver geo tracking, allocation, and operations visibility.",
  },
  {
    eyebrow: "Map quality",
    name: "Mapsense",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    signal: "Route anomaly detection",
    detail: "Chrome extension and web tool for route anomaly detection against map providers.",
  },
  {
    eyebrow: "Reservation platform",
    name: "Mapage",
    stack: ["Socket.IO", "Next.js", "MongoDB"],
    signal: "Optimistic realtime",
    href: "https://mapage.net/stylist/landing-page",
    detail: "Reservation/payment communication system with optimistic real-time updates.",
  },
  {
    eyebrow: "Workspace app",
    name: "UUORK",
    stack: ["Next.js", "Electron", "JWT"],
    signal: "Cross-platform app",
    href: "https://shellbeehaken.com/portfolio/8",
    detail: "Electron and Next.js workspace app with JWT auth and collaboration flows.",
  },
  {
    eyebrow: "Media voting",
    name: "Honnemir",
    stack: ["Next.js", "GraphQL", "S3"],
    signal: "Upload pipeline",
    href: "https://shellbeehaken.com/portfolio/6",
    detail: "Multimedia voting platform with GraphQL, Amplify, and S3 upload pipeline.",
  },
  {
    eyebrow: "Marketplace payout",
    name: "KriyaKarak",
    stack: ["Next.js", "MongoDB"],
    signal: "Reconciliation",
    href: "https://kriyakarak.com/",
    detail: "Payment disbursement and reconciliation system for a creative marketplace.",
  },
];

const workPool = [
  ...mainWork,
  ...workSystems.map((item) => ({
    eyebrow: item.eyebrow,
    title: item.name,
    href: item.href,
    summary: item.detail,
    stack: item.stack,
    signal: item.signal,
  })),
];

const getRandomFeaturedWork = () => {
  return [...workPool].sort(() => Math.random() - 0.5).slice(0, 4);
};

function WorkTitle({ children, href }) {
  if (!href) {
    return children;
  }

  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function Work() {
  const rootRef = useRef();
  const cardsRef = useRef();
  const wasActiveRef = useRef(false);
  const [scrollPositionOfElement] = useScrollPosition();
  const [progress, setProgress] = useState(0);
  const [featuredWork, setFeaturedWork] = useState(() =>
    getRandomFeaturedWork()
  );

  const setDynamicColors = useCallback(() => {
    if (!rootRef.current) return;

    rootRef.current.style.setProperty("--work-left-color", randomRGBA(0.3));
    rootRef.current.style.setProperty("--work-right-color", randomRGBA(0.28));
    rootRef.current.style.setProperty("--work-accent-color", randomRGBA(0.86));
  }, []);

  useEffect(() => {
    setDynamicColors();
  }, [setDynamicColors]);

  useEffect(() => {
    const active =
      scrollPositionOfElement > WORK_SCROLL_TRIGGER.start &&
      scrollPositionOfElement < WORK_SCROLL_TRIGGER.end;
    const nextProgress = clamp(
      1 -
        Math.abs(scrollPositionOfElement - WORK_SCROLL_TRIGGER.center) /
          (WORK_SCROLL_TRIGGER.end - WORK_SCROLL_TRIGGER.center),
      0,
      1
    );

    if (Math.abs(nextProgress - progress) > 0.04 || nextProgress === 0) {
      setProgress(nextProgress);
    }

    if (!wasActiveRef.current && active) {
      setDynamicColors();
      setFeaturedWork(getRandomFeaturedWork());
    }

    if (wasActiveRef.current && !active) {
      setDynamicColors();
    }

    wasActiveRef.current = active;
  }, [scrollPositionOfElement, progress, setDynamicColors]);

  const updateMousePosition = (event) => {
    if (!cardsRef.current) return;

    const pointer = event.touches ? event.touches[0] : event;
    for (const card of [...cardsRef.current.children]) {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", pointer.clientX - rect.left + "px");
      card.style.setProperty("--mouse-y", pointer.clientY - rect.top + "px");
    }
  };

  return (
    <div
      className={style.work}
      ref={rootRef}
      style={{ "--work-progress": progress }}
    >
      <div className={style.workGlow} />
      <div
        className={style.workBackdropWord}
        aria-hidden="true"
        style={{
          opacity: 0.08 + progress * 0.18,
          transform: `translateY(-50%) scale(${0.62 + progress * 0.38})`,
        }}
      >
        Work
      </div>
      <div className={style.workShell}>
        <div className={style.workIntro}>
          <div
            className={style.workHeader}
            style={{
              opacity: 0.28 + progress * 0.72,
              transform: `translateX(${(1 - progress) * -34}%) scale(${
                0.92 + progress * 0.08
              })`,
            }}
          >
            <p className={style.workKicker}>Selected work</p>
            <h2>Systems I have helped ship and improve.</h2>
            <p>
              Full-stack platforms across maps, growth, operations, real-time
              collaboration, and AI-assisted engineering workflows.
            </p>
          </div>

          <div
            className={style.workStats}
            aria-label="Professional impact"
            style={{
              opacity: 0.2 + progress * 0.8,
              transform: `translateX(${(1 - progress) * -44}%)`,
            }}
          >
            <span>
              <strong>100K+</strong>
              <small>daily users served</small>
            </span>
            <span>
              <strong>40%</strong>
              <small>developer velocity lift</small>
            </span>
            <span>
              <strong>3+</strong>
              <small>years shipping systems</small>
            </span>
          </div>
        </div>

        <div
          className={style.workGrid}
          ref={cardsRef}
          onMouseMove={updateMousePosition}
          onTouchMove={updateMousePosition}
        >
          {featuredWork.map((item, index) => (
            <article
              className={style.workCard}
              key={item.title}
              style={{
                opacity: clamp(progress * 1.4 - index * 0.12, 0, 1),
                transform: `translate(${(1 - progress) * (index % 2 ? 42 : 64)}%, ${
                  (1 - progress) * (index < 2 ? -18 : 18)
                }%)`,
                transitionDelay: 90 * index + "ms",
              }}
            >
              <div>
                <span className={style.workEyebrow}>{item.eyebrow}</span>
                <h3>
                  <WorkTitle href={item.href}>{item.title}</WorkTitle>
                </h3>
                <p>{item.summary}</p>
              </div>
              <div className={style.workMeta}>
                <span>{item.signal}</span>
                <ul>
                  {item.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div
          className={style.systemGrid}
          style={{
            opacity: clamp(progress * 1.35 - 0.25, 0, 1),
            transform: `translateY(${(1 - progress) * 56}px)`,
          }}
        >
          {workSystems.map((item, index) => (
            <article
              className={style.systemCard}
              key={item.name}
              style={{ transitionDelay: 40 * index + "ms" }}
            >
              <h3>
                <WorkTitle href={item.href}>{item.name}</WorkTitle>
              </h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
