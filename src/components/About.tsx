import { FC, useState } from "react";

type AboutProps = {
  setWindow: (arg0: string) => void;
};

export const AboutPage: FC<AboutProps> = ({ setWindow }) => {
  const [agreed, setAgreed] = useState(false);

  /*const handleAgree = () => {
    if (agreed) {
      //setWindow(null);
      // Additional logic or actions upon agreement can be added here
    } else {
      // Display a message or take action if the user has not agreed
    }
  };*/

  return (
    <>
      <p className="color-info">
        🚨NYPD's PREMIERE
        <span style={{ fontWeight: "bolder" }}> Rat Incident Form </span>
        and
        <span style={{ fontWeight: "bolder" }}>
          {" "}
          Facial Database For Rat Felons{" "}
        </span>
        and
        <span style={{ fontWeight: "bolder" }}> Rat Persons of Interest </span>
        In And Around the
        <span style={{ fontWeight: "bolder" }}>
          {" "}
          New York Metropolitan Area{" "}
        </span>
        and
        <span style={{ fontWeight: "bolder" }}>
          {" "}
          New York Metropolitan Area Subway System
        </span>
        🚨
      </p>
      <h2>How We Do It</h2>

      <p className="introductions">
        In the clandestine world of rodent surveillance, we deploy the latest in
        rat-ology to expose these whiskered criminals. Our top-secret operation
        is executed with the precision of a cat stalking its prey (minus the
        nonchalance).
      </p>

      <h3>PapaRATzzi Training 📸</h3>

      <p className="introductions">
        Our elite team of PapaRATzzi undergoes intense training to capture the
        perfect mugshot of these cunning criminals. From understanding rat
        fashion trends to mastering the art of stealthy photography, they're the
        unsung heroes behind every snapshot.
      </p>

      <h3>High-Tech Rodent Recognition 🤖</h3>

      <p className="introductions">
        Once your incriminating evidence is submitted, our state-of-the-art
        image recognition model goes to work. It analyzes rat facial features,
        snazzy fur patterns, and those beady little eyes to identify the
        culprits. It's like CSI, but with more fur and fewer sunglasses.
      </p>

      <h3>Rat Gallery Showcase 🎭</h3>

      <p className="introductions">
        The identified rat villains proudly take center stage in our Rat Gallery
        Marquee. Think of it as their fifteen minutes of fame before we send
        them packing. Browse through the rogues' gallery, and maybe you'll
        recognize a rat you've crossed paths with.
      </p>

      <h3>Citizen Vigilance 🌐</h3>

      <p>
        Here is where your contributions become important. We encourage a
        community-wide commitment to vigilance. Share your findings, warn your
        neighbors, and let's create a rat-free utopia together. Because when it
        comes to rodent satire, the more, the merrier!
      </p>

      <div className="disclaimer">
        <p>
          **Disclaimer: By submitting images, you acknowledge and agree that
          they may be stored in a public dataset and displayed on this website.
          Rattrack does not endorse or encourage any harm to animals. The
          information provided here is intended for satirical and entertainment
          purposes only. Any necessary action or intervention related to rodent
          control should be taken by authorized personnel and in compliance with
          local laws and regulations.**
        </p>
      </div>
      <div className="disclaimer">
        <label>
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          I have read all the content and agree to all terms and conditions
        </label>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          setWindow("");
        }}
        className="claimsButton"
      >
        Proceed
      </button>
    </>
  );
};
