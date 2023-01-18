import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import pxmeImage from "../../public/pxme.png";
import digicatImage1 from "../../public/digicat-1.png";
import digicatImage2 from "../../public/digicat-2.png";
import digicatImage3 from "../../public/digicat-3.png";
import iduImage from "../../public/idu.png";
import comicImage from "../../public/comic.png";
import agileImage from "../../public/agile.png";
import meImage from "../../public/me.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import Fab from "@mui/material/Fab";

export default function Home() {
  return (
    <>
      <Head>
        <title>App Development | John Andrew Owen</title>
        <meta
          name="description"
          content="I develop web and mobile apps for Australian business | John Andrew Owen"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO: an AI generated favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fab
        color="primary"
        variant="extended"
        className={styles.contactButton}
        href="#contact"
      >
        <LocalPhoneIcon sx={{ mr: 1 }} />
        Contact
      </Fab>
      <main className={styles.main}>
        <Image src={comicImage} alt="Comic" className={styles.headerImage} />
        <hr />
        <h1>Hi! I&apos;m John Andrew Owen</h1>
        <h3>I develop web and mobile apps for Australian business</h3>
        <hr style={{ marginBottom: 35 }} />
        <h2>Thinking of developing an app?</h2>
        <p>
          Wow, I&apos;m a mind-reader. Don&apos;t hire anyone until you know
          what the risks are. The problem is that...
        </p>
        <h2>Most app developers suck</h2>
        <p>
          Most developers will charge you by the hour, spend months tinkering
          away on a perpetually half-baked app before they finally hand you a
          functional product after 4 months and $20k down the drain.
        </p>
        <p>This means that:</p>
        <ul>
          <li>
            You won&apos;t know if you&apos;ve gotten a good deal until 4 months
            into the project.
          </li>
          <li>
            If you want to pivot the app in a different direction (this happens
            often) then you&apos;ll have to repeat the entire process.
          </li>
        </ul>
        <h2>There&apos;s a better way</h2>
        <p>
          I break your app into 3-week increments of work (sprints). I charge
          $3,000 for each sprint.
        </p>
        <p>
          After the first sprint, you&apos;re left with a stable, functional,
          high-quality app that you can use as you wish.
        </p>
        <p>
          With every subsequent sprint, I&apos;ll add more features and we can
          adjust the plan as necessary.
        </p>
        <Image
          src={agileImage}
          alt="Sprint diagram"
          className={styles.bigImage}
        />
        <p className={styles.caption}>Bad devs vs good devs.</p>
        <h2>Money-back guarantee</h2>
        <p>
          I&apos;m so certain that you&apos;ll be satisfied with my work after
          the first sprint that if you aren&apos;t, I will return your $3,000.
        </p>
        <h2>My past work</h2>
        <h3>IDU</h3>
        <Image
          src={iduImage}
          alt="IDU screenshot"
          className={styles.bigImage}
        />
        <p className={styles.caption}>
          IDU, a startup in the night life industry, wanted to create an app
          that bouncers could use to scan IDs. IDU went from $0 to $40k MMR, 6
          months after launch. The startup currently has a monopoly in its
          market.
        </p>
        <h3>Energesse</h3>
        <Image
          src={pxmeImage}
          alt="PXme screenshot"
          className={styles.bigImage}
        />
        <p className={styles.caption}>
          Energesse, a healthcare consulting company, wanted an app to display
          reports to clients. The client successfully rolled out this app in
          several hospitals.
        </p>
        <h3>TMR</h3>
        <div className={styles.collage}>
          <div className={styles.collageItem}>
            <Image
              src={digicatImage1}
              alt="DigiCAT screenshot"
              className={styles.collageItemImage}
            />
          </div>
          <div className={styles.collageItem}>
            <Image
              src={digicatImage2}
              alt="DigiCAT screenshot"
              className={styles.collageItemImage}
            />
          </div>
          <div className={styles.collageItem}>
            <Image
              src={digicatImage3}
              alt="DigiCAT screenshot"
              className={styles.collageItemImage}
            />
          </div>
        </div>
        <p className={styles.caption}>
          The Queensland Dept. of Transport and Main Roads needed to find gaps
          in the digital skills of their employees. The client loved the app and
          continued extendeding it with more features.
        </p>
        <h2>About me</h2>
        <p>
          I&apos;ve been coding since I was 14 and now I can&apos;t stop. I have
          6 years of professional experience in full-stack software development.
          I&apos;m all about good communication and developing quality software.
          I&apos;ve provided my services to 16 different organisations including
          Uber and Shell.
        </p>
        <p>
          I am currently employed by an Australian betting company and I am
          working on building my network of freelance clients and generally cool
          people.
        </p>
        <p>
          I like Australian businesses owners and entrepreneurs because they are
          cool as - yes, I am biased 😎
        </p>
        <Image src={meImage} alt="Photo of John" className={styles.bigImage} />
        <p className={styles.caption}>Me and my cheeky grin.</p>
        <hr style={{ marginBottom: 35 }} />
        <h2 id="contact">Contact</h2>
        <a href="tel:+61416185172" className={styles.contactItem}>
          <LocalPhoneIcon className={styles.contactItemIcon} /> +61 416 185 172
        </a>
        <a href="mailto:john@adowen.com" className={styles.contactItem}>
          <EmailIcon className={styles.contactItemIcon} /> john@adowen.com
        </a>
        <a
          href="https://www.linkedin.com/in/john-andrew-owen/"
          className={styles.contactItem}
        >
          <LinkedInIcon className={styles.contactItemIcon} /> John Andrew Owen
        </a>
        <a
          href="https://twitter.com/JohnAndrewOwen"
          className={styles.contactItem}
        >
          <TwitterIcon className={styles.contactItemIcon} /> @JohnAndrewOwen
        </a>
        <div className={styles.contactItem}>
          <PlaceIcon className={styles.contactItemIcon} /> Brisbane, Australia
        </div>
      </main>
    </>
  );
}
