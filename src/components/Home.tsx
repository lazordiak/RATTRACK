import { FC } from "react";
// Import and apply CSS stylesheet
import "../styles/styles.css";

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
          src="../assets/rat.jpeg"
          className="illustration"
          alt="A picture of a rat on the NYC subway."
          style={{ borderRadius: "5%", borderStyle: "solid" }}
        />
      </div>
      <span className="moving-text">
        <a href="">🚨WANTED🚨WANTED🚨WANTED🚨</a>
      </span>
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
