import style from "./resume.module.css";
import Link from "next/link";

export default function resume() {
  return (
    <div>
      <div className={style.resume}>
        <h1 className="pageTitle">Resume</h1>
        <Link href="Nathaniel_Victorino.pdf" download>
          Download Resume
        </Link>
        <section className={style.section}>
          <h2 className={style.sectionTitle}>Education</h2>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>
              Bachelors degree in Computer Science
            </h3>
            <p className={style.entryInfo}>
              California Polytechnic State University, San Luis Obispo |
              Expected Graduation May 2027
            </p>
          </div>
        </section>
        <section className={style.section}>
          <h2 className={style.sectionTitle}>Experience</h2>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>
              Hack4Impact Software Dev Trainee
            </h3>
            <p className={style.entryInfo}>Projects coming soon!!</p>
            <p className={style.entryDescription}>hi</p>
          </div>
        </section>
        <section className={style.section}>
          <h2 className={style.sectionTitle}>Projects</h2>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>Advance Auto Locksmith</h3>
            <p className={style.entryInfo}>
              Created a website for a family owned business in Santa Maria
            </p>
            <p className={style.entryDescription}>
              <Link href="https://www.advanceautolocksmith.net">
                advanceautolocksmith.net
              </Link>
            </p>
          </div>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>Lacafecita</h3>
            <p className={style.entryInfo}>
              Santa Maria Coffee shop website (under development preview)
            </p>
            <p className={style.entryDescription}>
              <Link href="https://www.lacafecita.com/secretaccess">
                lacafecita.com
              </Link>
            </p>
          </div>
        </section>
        <section className={style.section}>
          <h2 className={style.sectionTitle}>Coursework</h2>
          <ul className={style.courseList}>
            <li>
              CS50x - C, Python, SQL, HTML, CSS, and Javascript introduction
            </li>
            <li>Data structures and Algorithms</li>
          </ul>
        </section>
        <section className={style.section}>
          <h2 className={style.sectionTitle}>Skills</h2>
          <ul className={style.skillList}>
            <li>Laravel & PHP</li>
            <li>React + Javascript</li>
            <li>Mysql</li>
            <li>Lua</li>
            <li>Stripe API</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
