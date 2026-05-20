import React, { useState } from "react";
import style from "./EmailSection.module.css";
import SendButton from "../button/send/SendButton";
import GlassDiv from "../glassDiv/GlassDiv";

const CONTACT_API_URL =
  process.env.REACT_APP_CONTACT_API_URL ||
  "https://syncplay.vercel.app/api/v1/contact";
const CONTACT_API_KEY =
  process.env.REACT_APP_CONTACT_API_KEY || "your-local-test-key";

export default function EmailSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [btnTxt, setBtnTxt] = useState("SEND");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSending(true);
      setBtnTxt("SENDING...");
      setStatusMessage("");

      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-contact-api-key": CONTACT_API_KEY,
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error(`Contact API returned ${res.status}`);
      }

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setBtnTxt("SENT");
      setStatusMessage("Message sent.");
    } catch (err) {
      setBtnTxt("ERROR");
      setStatusMessage("Could not send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <GlassDiv className={style["glass"]}>
      <form className={`${style.emailSection}`} onSubmit={handleSubmit}>
        <h2 className={style["h2"]}>Email me your thoughts</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <SendButton
          type="submit"
          btnTxt={btnTxt}
          disabled={isSending}
        ></SendButton>
        {statusMessage && (
          <p className={style.status} role="status">
            {statusMessage}
          </p>
        )}
      </form>
    </GlassDiv>
  );
}
