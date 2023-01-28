import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/facebook-api-developer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import { event } from "nextjs-google-analytics";
import Button from "@mui/material/Button";
import { Varela_Round } from "@next/font/google";

import aginicLogoImage from "../../public/aginic-logo.png";
import arrowImage from "../../public/arrow.svg";
import bhpLogoImage from "../../public/bhp-logo.png";
import htwLogoImage from "../../public/htw-logo.png";
import iduLogoImage from "../../public/idu-logo.png";
import juicedLogoImage from "../../public/juiced-logo.png";
import qldGovLogoImage from "../../public/qld-gov-logo.png";
import qtacLogoImage from "../../public/qtac-logo.png";
import resolutionsLogoImage from "../../public/resolutions-logo.png";
import roadshowLogoImage from "../../public/roadshow-logo.png";
import shellLogoImage from "../../public/shell-logo.png";
import tukkaLogoImage from "../../public/tukka-logo.png";
import uberLogoImage from "../../public/uber-logo.png";
import unilodgeLogoImage from "../../public/unilodge-logo.png";
import wineAustraliaLogoImage from "../../public/wine-australia-logo.png";
import dabbleLogoImage from "../../public/dabble-logo.png";
import artohLogoImage from "../../public/artoh-logo.png";
import facebookAppOnMobileImage from "../../public/facebook-app-on-mobile.png";
import artohScreenshotOnLaptopImage from "../../public/artoh-screenshot-on-laptop.png";
import myFacePhotoImage from "../../public/my-face-photo.jpeg";
import villageRoadshowDiagramOnDesktopScreen from "../../public/village-roadshow-diagram-on-desktop-screen.png";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import {
  Card,
  CardContent,
  createTheme,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "next/link";

const WEB3_FORMS_API_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3_FORMS_PUBLIC_ACCESS_KEY = "c282595d-6e8f-438d-b971-c5cb817f6754";
const WEB3_FORMS_SUBJECT =
  "New contact form submission from the Facebook API Developer page";

const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function FacebookApiDeveloper() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Facebook API Developer | John Andrew Owen</title>
          <meta
            name="description"
            content="I Help You Integrate With the Facebook API."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.root}>
          <div className={styles.rootInner}>
            <div className={styles.hero}>
              <div className={styles.heroLeft}>
                <h1 className={`${styles.heroTitle} ${varelaRound.className}`}>
                  Facebook API Development Doesn&apos;t Have To Be Hard
                </h1>
                <p className={styles.heroSubtitle}>
                  <em>John Andrew Owen, Facebook API Developer</em>
                </p>
                <h3
                  className={`${styles.heroSubtitle} ${varelaRound.className}`}
                >
                  Learn How To Integrate With the Facebook API
                </h3>
                <p>
                  In a <u>free</u>, no-obligation, Facebook API integration
                  strategy, tailored to your situation.
                </p>
                <div className={styles.goToContactFormButtonContainer}>
                  <Button
                    className={styles.goToContactFormButton}
                    style={varelaRound.style}
                    variant="contained"
                    href="#contact"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => recordClickGoToContactFormButtonEvent("1")}
                  >
                    <div>
                      Get Your <u>Free</u> Strategy Session
                    </div>
                  </Button>
                </div>
              </div>
              <div className={styles.heroRight}>
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.image}
                    src={facebookAppOnMobileImage}
                    alt="Facebook app on mobile"
                  />
                </div>
              </div>
            </div>
            <main className={styles.main}>
              <SectionDivider />
              <h2 className={varelaRound.className}>
                Don&apos;t Integrate With the Facebook API Until You Know
                This...
              </h2>
              <p>
                Integration with the Facebook API can be a powerful addition to
                your business, but non-specialist developers take months to
                integrate with the Facebook API and integration requires deep
                platform knowledge to avoid its many pitfalls.
              </p>
              <Alert severity="info">
                <AlertTitle>Did you know?</AlertTitle>A survey of over 100
                developers found that Facebook has <em>the</em> most difficult
                API to work with.
              </Alert>
              <SectionDivider />
              <h2 className={varelaRound.className}>I Can Help You...</h2>
              <ul>
                <li>Sync Facebook Page insights data into another service</li>
                <li>Build a Facebook Messenger chatbot</li>
                <li>Manage Facebook Ads automatically</li>
                <li>Track conversions</li>
                <li>
                  Integrate the Facebook Marketplace with your e-commerce
                  website
                </li>
                <li>And much more</li>
              </ul>
              <SectionDivider />
              <h2 className={varelaRound.className}>
                My Service Is Trusted By...
              </h2>
              <LogoContainer />
              <SectionDivider />
              <h2 className={varelaRound.className}>
                How I Helped Artoh Become the Next-Gen Ecommerce SaaS With
                Facebook Ads API
              </h2>
              <p>
                Artoh, the financial OS for ecommerce, needed to aggregate
                analytics data from Facebook Ads with other data sources and
                display the results to their users.
              </p>
              <p>
                So, in under a month, I built a custom Facebook API integration
                in their backend which reads data from the Facebook Graph API
                and persists this data in a database.
              </p>
              <p>
                As a result, Artoh is now capable of displaying near real-time
                ad performance data to users.
              </p>
              <Image
                src={artohScreenshotOnLaptopImage}
                alt="Artoh screenshot"
                className={styles.bigImage}
              />
              <p className={styles.caption}>
                Artoh aggregates data for their users from many marketing
                channels including Facebook Ads.
              </p>
              <SectionDivider />
              <h2 className={varelaRound.className}>
                How I Helped Village Roadshow Optimize Their Marketing With the
                Facebook Pages API
              </h2>
              <p>
                Village Roadshow, an entertainment company, needed to copy
                analytics data from their Facebook page to their Salesforce
                Marketing Cloud account on a regular schedule.
              </p>
              <p>
                So, in under a month, I built a custom service which reads data
                from the Facebook Graph API and uploads it to Salesforce
                Marketing Cloud.
              </p>
              <p>
                As a result, Village Roadshow used this data to understand how
                users engage with their posts, which allowed them to improve
                page engagement metrics and the effectiveness of their marketing
                campaigns.
              </p>
              <Image
                src={villageRoadshowDiagramOnDesktopScreen}
                alt="Village roadshow diagram"
                className={styles.bigImage}
              />
              <p className={styles.caption}>
                Village Roadshow uses data from Facebook Pages to improve their
                marketing campaigns.
              </p>
              <SectionDivider />
              <div className={styles.goToContactFormButtonContainer}>
                <Button
                  className={styles.goToContactFormButton}
                  style={varelaRound.style}
                  variant="contained"
                  href="#contact"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => recordClickGoToContactFormButtonEvent("2")}
                >
                  Interested? Let&apos;s Get in touch
                </Button>
              </div>
              <SectionDivider />
              <h2 className={varelaRound.className}>Facebook API Use Cases</h2>
              <MyAccordion title="Aggregate Facebook Ads Analytics With Other Ad Services">
                Use the Facebook Insights API to aggregate Facebook Ad analytics
                data.
              </MyAccordion>
              <MyAccordion title="Integrate Your E-Commerce Platform With Facebook Marketplace">
                Use the Facebook Marketplace Platform to integrate your
                e-commerce platform with Facebook Marketplace, to increase
                visibility, reach a wider audience and expand sales channels.
                The API enables you to list products, receive purchase and
                viewing insights which can help optimize e-commerce strategy.
              </MyAccordion>
              <MyAccordion title="Login With Facebook">
                Use Facebook Login to implement a login system for your website
                or mobile app using Facebook credentials, making it more
                convenient for users to sign in. Facebook Login can bring more
                engagement and user data.
              </MyAccordion>
              <MyAccordion title="WhatAapp Or Messenger Chatbot">
                Use the WhatsApp Business Platform or Messenger Platform to
                communicate with your customers through WhatsApp. These APIs can
                help you to improve customer service, automate responses and
                send notifications, which can increase customer satisfaction and
                sales.
              </MyAccordion>
              <MyAccordion title="Improve Collaboration On Facebook Workplace">
                Integrate your existing systems with Facebook Workplace. This
                API can help you to improve communication and collaboration
                among employees, which can result in better productivity and
                employee satisfaction.
              </MyAccordion>
              <MyAccordion title="Track Conversions From Facebook Ads">
                Use the Facebook Conversions API and the Facebook Pixel to track
                and measure the effectiveness of ad campaigns. This can help you
                to optimize your ad campaigns and improve ROI.
              </MyAccordion>
              <MyAccordion title="Automate And Scale Your Facebook Ads">
                Use the Facebook Marketing API to automate and scale your
                advertising efforts on Facebook, Instagram and Audience Network.
                This API can help you to reach a larger audience, automate ad
                targeting and improve the performance of your ads.
              </MyAccordion>
              <MyAccordion title="Stream Live Video On Facebook, Instagram, And Other Platforms">
                Use the Facebook Live Video API to stream live video on
                Facebook, Instagram, and other platforms. This API can help you
                to increase engagement, reach a wider audience, and create a
                more personal connection with their customers.
              </MyAccordion>
              <MyAccordion title="Manage Your Facebook Pages Programmatically">
                Use the Facebook Pages API to manage your Facebook pages
                programmatically, which can help you to automate page management
                tasks such as publishing posts, responding to comments, and
                managing page settings. This API can help you to save time and
                improve the efficiency of your social media management.
              </MyAccordion>
              <SectionDivider />
              <h2 className={varelaRound.className}>
                What Can You Expect When Integrating With the Facebook API?
              </h2>
              <ServiceFlowChart />
              <SectionDivider />
              <h2>About Me</h2>
              <div className={styles.aboutMe}>
                <div>
                  <p>
                    I&apos;ve been coding since I was 14 and now I can&apos;t
                    stop. I&apos;m a senior software engineer by trade and I
                    have worked in the industry for over 6 years.
                  </p>
                  <p>
                    I have built software for over a dozen different
                    organizations including Uber, Shell, and the Australian
                    government.
                  </p>
                </div>
                <Image
                  src={myFacePhotoImage}
                  alt="Photo of John Andrew Owen"
                  className={styles.myFacePhoto}
                />
              </div>
              <SectionDivider />
              <h2 id="contact">Contact Me</h2>
              <Alert severity="info">
                Ask me how you can integrate with the Facebook API
              </Alert>
              <p />
              <ContactForm />
              <SectionDivider />
              <Footer />
            </main>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

const SectionDivider = () => <div className={styles.sectionDivider} />;

const LogoContainer = () => (
  <div className={styles.logoContainer}>
    <Image src={shellLogoImage} alt="shell logo" className={styles.logo} />
    <Image src={uberLogoImage} alt="uber logo" className={styles.logo} />
    <Image src={qldGovLogoImage} alt="qld gov logo" className={styles.logo} />
    <Image
      src={roadshowLogoImage}
      alt="roadshow logo"
      className={styles.logo}
    />
    <Image src={qtacLogoImage} alt="qtac logo" className={styles.logo} />
    <Image src={htwLogoImage} alt="htw logo" className={styles.logo} />
    <Image src={bhpLogoImage} alt="bhp logo" className={styles.logo} />
    <Image src={aginicLogoImage} alt="aginic logo" className={styles.logo} />
    <Image src={iduLogoImage} alt="idu logo" className={styles.logo} />
    <Image src={juicedLogoImage} alt="juiced logo" className={styles.logo} />
    <Image
      src={resolutionsLogoImage}
      alt="resolutions logo"
      className={styles.logo}
    />
    <Image src={tukkaLogoImage} alt="tukka logo" className={styles.logo} />
    <Image
      src={unilodgeLogoImage}
      alt="unilodge logo"
      className={styles.logo}
    />
    <Image
      src={wineAustraliaLogoImage}
      alt="wine australia logo"
      className={styles.logo}
    />
    <Image src={dabbleLogoImage} alt="dabble logo" className={styles.logo} />
    <Image src={artohLogoImage} alt="artoh logo" className={styles.logo} />
  </div>
);

const MyAccordion = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{children}</Typography>
    </AccordionDetails>
  </Accordion>
);

const ServiceFlowChart = () => (
  <div className={styles.serviceFlowChart}>
    <Card variant="outlined" className={styles.serviceCard}>
      <CardContent>
        <h3 className={`${styles.serviceCardTitle} ${varelaRound.className}`}>
          1. Free Strategy Session
        </h3>
        <ul className={styles.serviceCardList}>
          <li>Discuss your needs</li>
          <li>How you could use the Facebook API</li>
          <li>Integration with your existing technology</li>
          <li>High-level plan</li>
          <li>ETA</li>
          <li>Quote</li>
        </ul>
      </CardContent>
    </Card>
    <Image src={arrowImage} alt="arrow" className={styles.arrowImage} />
    <Card variant="outlined" className={styles.serviceCard}>
      <CardContent>
        <h3 className={`${styles.serviceCardTitle} ${varelaRound.className}`}>
          2. Minimum Viable Product
        </h3>
        <ul className={styles.serviceCardList}>
          <li>Planning</li>
          <li>Coding</li>
          <li>Demo</li>
        </ul>
      </CardContent>
    </Card>
    <Image src={arrowImage} alt="arrow" className={styles.arrowImage} />
    <Card variant="outlined" className={styles.serviceCard}>
      <CardContent>
        <h3 className={`${styles.serviceCardTitle} ${varelaRound.className}`}>
          3. Development
        </h3>
        <ul className={styles.serviceCardList}>
          <li>Planning</li>
          <li>Coding</li>
          <li>Quality assurance and testing</li>
        </ul>
      </CardContent>
    </Card>
    <Image src={arrowImage} alt="arrow" className={styles.arrowImage} />
    <Card variant="outlined" className={styles.serviceCard}>
      <CardContent>
        <h3 className={`${styles.serviceCardTitle} ${varelaRound.className}`}>
          4. Maintenance
        </h3>
        <ul className={styles.serviceCardList}>
          <li>Improvements</li>
          <li>Optimization</li>
          <li>Support</li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

const ContactForm = () => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const disabled = isFormSubmitting || isFormSubmitted;

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsFormSubmitting(true);
    recordSubmitContactFormEvent();
    const form = document.getElementById("contact-form") as HTMLFormElement;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    fetch(WEB3_FORMS_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((response) => {
      setIsFormSubmitting(false);
      setIsFormSubmitted(true);
      if (response.status !== 200) {
        throw new Error(
          `Failed to submit form. Form responded with ${response.status}.`
        );
      }
    });
  };

  return (
    <form
      id="contact-form"
      className={styles.contactForm}
      action={WEB3_FORMS_API_ENDPOINT}
      method="POST"
      onSubmit={onSubmit}
    >
      <input
        type="hidden"
        name="access_key"
        value={WEB3_FORMS_PUBLIC_ACCESS_KEY}
      />
      <input type="hidden" name="subject" value={WEB3_FORMS_SUBJECT} />
      <input
        type="checkbox"
        name="botcheck"
        id=""
        style={{ display: "none" }}
      />
      <TextField
        name="name"
        label="Name"
        variant="outlined"
        className={styles.contactFormField}
        disabled={disabled}
      />
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        className={styles.contactFormField}
        disabled={disabled}
      />
      <TextField
        name="message"
        label="Message"
        variant="outlined"
        placeholder="What would you like to know more about?"
        multiline
        minRows={3}
        className={styles.contactFormField}
        disabled={disabled}
      />
      <LoadingButton
        variant="contained"
        color="primary"
        type="submit"
        className={styles.contactFormButton}
        disabled={disabled}
        loading={isFormSubmitting}
        endIcon={<SendIcon />}
        style={varelaRound.style}
      >
        Send
      </LoadingButton>
      {isFormSubmitted && (
        <>
          <p />
          <Alert severity="success">
            <AlertTitle>Thank you!</AlertTitle>
            I&apos;ll get back to you within 24 hours.
          </Alert>
        </>
      )}
    </form>
  );
};

const recordSubmitContactFormEvent = () => {
  if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    event("submitContactForm");
  }
};

const recordClickContactItemEvent = (type: string) => {
  if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    event("clickContactItem", { type });
  }
};

const recordClickGoToContactFormButtonEvent = (location: string) => {
  if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    event("clickGoToContactFormButton", { location });
  }
};

const Footer = () => (
  <>
    <hr className={styles.footerDivider} />
    <Link href="/" className={styles.contactItem}>
      <AppSettingsAltIcon className={styles.contactItemIcon} /> I also do web
      and mobile app development
    </Link>
    <a
      href="tel:+61416185172"
      className={styles.contactItem}
      onClick={() => recordClickContactItemEvent("Phone")}
    >
      <PhoneIcon className={styles.contactItemIcon} /> +61 416 185 172
    </a>
    <a
      href="mailto:john@adowen.com"
      className={styles.contactItem}
      onClick={() => recordClickContactItemEvent("Email")}
    >
      <EmailIcon className={styles.contactItemIcon} /> john@adowen.com
    </a>
    <a
      href="https://www.linkedin.com/in/john-andrew-owen/"
      className={styles.contactItem}
      onClick={() => recordClickContactItemEvent("LinkedIn")}
    >
      <LinkedInIcon className={styles.contactItemIcon} /> John Andrew Owen
    </a>
    <a
      href="https://twitter.com/JohnAndrewOwen"
      className={styles.contactItem}
      onClick={() => recordClickContactItemEvent("Twitter")}
    >
      <TwitterIcon className={styles.contactItemIcon} /> @JohnAndrewOwen
    </a>
    <div className={styles.contactItem}>
      <PlaceIcon className={styles.contactItemIcon} /> Brisbane, Australia
    </div>
    <Link href="/privacy-policy" className={styles.contactItem} target="_blank">
      <PrivacyTipIcon className={styles.contactItemIcon} /> Privacy policy
    </Link>
  </>
);

const theme = createTheme({
  typography: {
    fontSize: 16,
  },
});
