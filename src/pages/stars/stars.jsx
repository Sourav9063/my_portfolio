import React, { useEffect, useRef, useState } from "react";
import StarCanvas from "./StarCanvas";
import style from "./stars.module.css";

const listOfWords = [
  "I've a Great Attention Span",
  "I'm Attentive To Detail",
  "I'm a Team Player",
  "I'm Communicative",
  "I'm a Creative Thinker",
  "I'm Humble",
  "I'm Eager to Learn",
  "I'm Adaptive",
  "I'm a Quick Learner",
  "I'm a Problem Solver",
  "I'm a Hard Worker",
  "I'm a Self-Starter",
  "I'm Passionate",
  "I'm a Critical Thinker",
];

const getRandomWord = () =>
  listOfWords[Math.floor(Math.random() * listOfWords.length)];

export default function Stars() {
  const timeoutRef = useRef();
  const [word, setWord] = useState("");
  const [show, setShow] = useState(1);

  const changeWord = () => {
    window.clearTimeout(timeoutRef.current);
    setShow(2);

    timeoutRef.current = window.setTimeout(() => {
      setWord(getRandomWord());
      setShow(1);
    }, 1000);
  };

  useEffect(() => {
    setWord(getRandomWord());

    return () => {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className={`${style.beforeZ} text_not_selectable`}>
      <div className={style.body}>
        <StarCanvas
          className={style.canvas}
          onEdgeEnter={changeWord}
          onClick={changeWord}
        />
      </div>

      <div className={`${style.word} ${show === 2 ? style["word-out"] : ""}`}>
        <div>{word}</div>
      </div>
    </div>
  );
}
