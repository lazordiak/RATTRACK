import { useState } from "react";
import { AboutPage } from "../components/About";
import ClaimForm from "../components/ClaimForm";
import { RodentResult } from "../components/RodentResult";
import { Gallery } from "../components/Gallery";
import { Home } from "../components/Home";

export default function HomeScreen() {
  const [progress, setProgress] = useState("");
  const [rodentResult, setRodentResult] = useState("");

  const setWindow = (string: string) => {
    window.scrollTo(0, 0);
    setProgress(string);
  };

  if (progress === "gallery") {
    return <Gallery />;
  }
  if (rodentResult) {
    return (
      <RodentResult
        source={rodentResult}
        setWindow={setWindow}
        setRodentResult={setRodentResult}
      />
    );
  }
  if (progress === "claims") {
    return <ClaimForm setRodentResult={setRodentResult} />;
  }
  if (progress === "about") {
    return <AboutPage setWindow={setWindow} />;
  }
  return <Home setWindow={setWindow} />;
}
