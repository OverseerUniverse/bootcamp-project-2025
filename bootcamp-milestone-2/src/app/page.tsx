import style from "./home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="pageTitle">Welcome to my Site! :)</h1>
      <div className={style.about}>
        <div className={style.aboutImg}>
          <img src="../images/mewithcats.jpg" alt="Me aura farming" />
        </div>
        <div className={style.aboutText}>
          <p>
            Hi I'm Nathaniel Victorino, a 3rd year transfer student from Allan
            Hancock College! I grew up in Guadalupe with my mom and two sisters
            and 3 chihuahuas. I love playing video games like elden ring,
            roblox, <strong>call of duty</strong>, valorant, minecraft, ark, and
            a lot more. Outside of my dungeon, I enjoy going out to eat, going
            to the gym, skateboarding (occassionally because I always get
            injured) and also basketball.
          </p>
          <p>
            When it comes to programming, I have made websites in the past for
            local businesses in Santa Maria like <em>lacafecita</em>. Here is a
            secret access link
            <Link href="https://lacafecita.com/secretaccess">
              {" "}
              {/*This whitespace is becuz prettier extension is dumb (very important)*/}
              lacafecita.com{" "}
            </Link>
            (dont actually make a purchase <strong>IT WILL CHARGE YOU</strong>)
            For this site I used Laravel as the backend with a React frontend! I
            also enjoy programming Roblox games if I have the spare time, I
            particularly want to build a sandbox game to play with friends.
          </p>
        </div>
      </div>
    </div>
  );
}
