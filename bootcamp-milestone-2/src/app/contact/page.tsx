"use client";

import style from "./contact.module.css";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const validate = () => {
    const form = formRef.current!;
    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement)
        .value;

    const nameError = !get("name").trim() ? "Name is required" : "";
    const emailRaw = get("email");
    const emailError = !emailRaw.trim()
      ? "Email is required"
      : /\S+@\S+\.\S+/.test(emailRaw)
      ? ""
      : "Invalid email";

    const titleError = !get("title").trim() ? "Subject is required" : "";
    const messageError = !get("message").trim() ? "Message is required" : "";

    const newErrors = {
      name: nameError,
      email: emailError,
      title: titleError,
      message: messageError,
    };
    setErrors(newErrors);

    // return true only if no errors
    return Object.values(newErrors).every((e) => e === "");
  };

  useEffect(() => {
    emailjs.init("Jg6-WkEfTMBcGSbbT");
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await emailjs.sendForm(
        "service_o5ukhnk", // service ID
        "template_vhkqszb", // template ID
        formRef.current!
      );

      console.log("SUCCESS!");
      formRef.current!.reset();
    } catch (err) {
      console.error("FAILED...", err);
    }
  };

  return (
    <div className={style.page}>
      <h1 className="pageTitle">📨 Contact Me!</h1>
      <div className={style.contact}>
        <form
          id="contact-form"
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-4"
        >
          <input type="hidden" name="time" value={new Date().toString()} />

          <label>Name</label>
          <input type="text" name="name" />
          {errors.message && <p style={{ color: "red" }}>{errors.name}</p>}

          <label>Email</label>
          <input type="email" name="email" />
          {errors.message && <p style={{ color: "red" }}>{errors.email}</p>}

          <label>Subject</label>
          <input type="text" name="title" />
          {errors.message && <p style={{ color: "red" }}>{errors.title}</p>}

          <label>Message</label>
          <textarea name="message" />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

          <button className={style.submit} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
