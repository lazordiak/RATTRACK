import { FC } from "react";

type HomeScreenProps = {
  setWindow: (window: string) => void;
};

export const Home: FC<HomeScreenProps> = ({ setWindow }) => {
  return (
    <>
      <h1 className="title">RATTRACK</h1>
      <div className="introduction">
        Help us rid our community of the rat felons! Spot a rat doing its deed?
        Snap a pic, submit it here, and let's bring them to justice together.
        Our cutting-edge AI model will identify these villains and match them to
        our dataset on{" "}
        <span style={{ fontWeight: "bold" }}>all existing rats</span>. Your
        contribution may also be added to our{" "}
        <span style={{ fontWeight: "bold" }}>Rat Gallery Most Wanted List</span>
        .
      </div>
      <div className="fullWidth">
        <button
          onClick={(e) => {
            e.preventDefault();
            setWindow("about");
          }}
          className="aboutButton"
        >
          NEW? LEARN ABOUT RATTRACK
        </button>
      </div>
      <div>
        <img
          src="https://cdn.glitch.global/2005a23a-0f59-4a7d-90a8-c2710002b041/rat.jpeg?v=1708805533186"
          className="illustration"
          alt="Illustration click to change language"
        />
      </div>
      <marquee behavior="scroll" direction="left" scrollamount="5">
        <a href="">
          🚨WANTED🚨WANTED🚨WANTED🚨WANTED🚨WANTED🚨WANTED🚨WANTED🚨WANTED🚨WANTED🚨WANTED🚨WANTEDW🚨WANTED🚨WANTED🚨
        </a>
      </marquee>
      <div className="instructions">
        <h2>How it works:</h2>

        <ol>
          <li>Spot a rat? 🐀</li>
          <li>Snap a quick pic. 📸</li>
          <li>Submit the image and description below.</li>
        </ol>

        <p className="introduction">
          👮‍♂️ Together, we'll keep our streets rodent-free. Let's outsmart these
          little criminals and make our community safe and sound.
        </p>

        <p>
          Join the fight against the rat invasion now! Report sightings, share
          with neighbors, and let's create a safer environment for everyone.
          #RatWatch #CommunitySafety 🏡✨
        </p>
      </div>
      <div className="fullWidth">
        <button
          onClick={(e) => {
            e.preventDefault();
            setWindow("claims");
          }}
          className="claimsButton"
        >
          🚨FILE A CLAIM🚨
        </button>
        <p>or</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            setWindow("gallery");
          }}
          className="claimsButton"
        >
          🚨VIEW THE RODENT'S ROGUE GALLERY🚨
        </button>
      </div>
    </>
  );
};
