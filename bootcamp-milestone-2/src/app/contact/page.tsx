import style from "./contact.module.css";

export default function contact() {
  return (
    <div>
      <h1 className="pageTitle">📨 Contact Me!</h1>
      <div className={style.contact}>
        <form id="contact-form">
          <label htmlFor="Name">Name:</label>
          <input type="text" id="Name" />
          <br />
          <label htmlFor="Email">Email:</label>
          <input type="text" id="Email" />
          <br />
          <label htmlFor="textbox">Message:</label>
          <textarea name="textbox" defaultValue=""></textarea>
          <input className={style.submit} type="submit" />
        </form>
        <div className="contact-text"></div>
      </div>
    </div>
  );
}
