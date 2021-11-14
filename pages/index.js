import { Hero, AgencySelectionSection } from "../sections";
import Head from 'next/head'
import parse from "html-react-parser";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const agencySelectionProps = {
  image: { src: "/img/background.png", alt: "", width: 1060, height: 520},
  cards: [
    {
      src: "/img/briefimgg.png",
      title: "Brief",
      text: parse(`Complete <strong>brief writing or simple guidance</strong> on what to include, we've got you covered.`),
      width: "442px",
      color: "#F9F9F9"
    },

    {
      src: "/img/searchimgg.png",
      title: "Search",
      text: parse(`In-depth agency search covering; <strong>criteria matching</strong> door knocking and due-dilligence vertting.`),
      width: "469px",
      color: "#F4F4F4"
    },

    {
      src: "/img/pitchimgg.png",
      title: "Pitch",
      text: parse(`Comprehensive <strong>pitch management,</strong> including comms, diary management and pitch hosting.`),
      width: "501px",
      color: "#F1F1F1"
    }
  ],
  headingText: "Managed agency selection",
  subheadingText: "Strengthen your onboarding process"
}

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Hero {...heroProps} />
        <AgencySelectionSection {...agencySelectionProps} />
        {/** Other sections */}
      </div>
    </>
  );
}
