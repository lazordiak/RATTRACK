import { ratProfiles, RatProfile } from "../data/RatProfs";
import { FC } from "react";

const getRat = (array: RatProfile[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

type RodentResultProps = {
  source: string;
  setWindow: (arg0: string) => void;
  setRodentResult: React.Dispatch<React.SetStateAction<string>>;
};

export const RodentResult: FC<RodentResultProps> = ({
  source,
  setWindow,
  setRodentResult,
}) => {
  const rando = Math.floor(Math.random() * (99 - 80 + 1) + 80);
  const string = `Based on your description and image, our advanced AI algorithms have determined this rat is a ${rando}% match.`;
  const rat = getRat(ratProfiles);

  return (
    <div className="form-container" style={{ alignItems: "flex-start" }}>
      <h2>RAT ANALYZED</h2>
      <p>{string}</p>
      <p>
        Suspect: <span style={{ fontWeight: "bold" }}>IDENTIFIED</span>.
      </p>
      <img
        style={{
          marginTop: "12px",
          height: "300px",
          width: "300px",
          borderRadius: "5%",
          borderStyle: "solid",
        }}
        src={source}
      />
      <div style={{ marginTop: "24px" }}>
        <span style={{ fontWeight: "bold" }}>NAME: </span>
        {rat.name}
      </div>
      <div style={{ marginTop: "6px" }}>
        <span style={{ fontWeight: "bold" }}>ALIAS: </span>
        {rat.alias}
      </div>
      <div style={{ marginTop: "6px" }}>
        <span style={{ fontWeight: "bold" }}>WEIGHT: </span>
        {rat.weight}
      </div>
      <div style={{ marginTop: "6px" }}>
        <span style={{ fontWeight: "bold" }}>HEIGHT: </span>
        {rat.height}
      </div>
      <div style={{ marginTop: "6px" }}>
        <span style={{ fontWeight: "bold" }}>GENDER: </span>
        {rat.gender}
      </div>
      <div style={{ marginTop: "6px" }}>
        <span style={{ fontWeight: "bold" }}>HOMETOWN: </span>
        {rat.homeTown}
      </div>
      <div style={{ marginTop: "6px" }}>
        <span style={{ fontWeight: "bold" }}>CRIMINAL RECORD: </span>
        {rat.criminalRecord}
      </div>
      <div style={{ marginTop: "6px" }}>
        <span style={{ fontWeight: "bold" }}>CAUTIONARY NOTE: </span>
        {rat.cautionaryNote}
      </div>
      <div className="fullWidth">
        <button
          onClick={(e) => {
            e.preventDefault();
            setWindow("");
            setRodentResult("");
          }}
          className="claimsButton"
        >
          🚨FILE ANOTHER CLAIM🚨
        </button>
      </div>
    </div>
  );
};
