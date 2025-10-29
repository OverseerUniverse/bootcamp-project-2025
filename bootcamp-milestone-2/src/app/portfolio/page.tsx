import Link from "next/link";
import style from "./portfolio.module.css";

export default function portfolio() {
  return (
    <div>
      <h1 className="pageTitle">👏 Portfolio</h1>
      <div className={style.project}>
        <Link href="/">
          <img src="../images/domocat.jpg" alt="cat chase domo?" />
        </Link>
        <div className={style.projectDetails}>
          <p className={style.projectName}>super duper cool project</p>
          <p className={style.projectDescription}>
            its very cool, click below to see!
          </p>
          <a href="https://lacafecita.com/secretaccess">Learn More</a>
        </div>
      </div>
      <div className={style.portfolio}>
        <div>
          <img src="../images/domocat.jpg" alt="cat chase domo?" />
        </div>
        <div className={style.portfolioText}>
          <p>yooo here is some text in da div</p>
        </div>
      </div>
    </div>
  );
}
