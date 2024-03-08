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
  const string = `Based on your description and image, our advanced AI algorithms have determined this rat is a ${rando}% match. Suspect: `;
  const rat = getRat(ratProfiles);

  return (
    <div className="form-container" style={{ alignItems: "flex-start" }}>
      <p>
        {string}
        <span style={{ fontWeight: "bold" }}>IDENTIFIED</span>.
      </p>
      <img style={{ height: "300px", width: "300px" }} src={source} />
      <div>
        <span style={{ fontWeight: "bold", marginTop: "12px" }}>NAME: </span>
        {rat.name}
      </div>
      <div>
        <span style={{ fontWeight: "bold", marginTop: "6px" }}>ALIAS: </span>
        {rat.alias}
      </div>
      <div>
        <span style={{ fontWeight: "bold", marginTop: "6px" }}>WEIGHT: </span>
        {rat.weight}
      </div>
      <div>
        <span style={{ fontWeight: "bold", marginTop: "6px" }}>HEIGHT: </span>
        {rat.height}
      </div>
      <div>
        <span style={{ fontWeight: "bold", marginTop: "6px" }}>GENDER: </span>
        {rat.gender}
      </div>
      <div>
        <span style={{ fontWeight: "bold", marginTop: "6px" }}>HOMETOWN: </span>
        {rat.homeTown}
      </div>
      <div>
        <span style={{ fontWeight: "bold", marginTop: "6px" }}>
          CRIMINAL RECORD:{" "}
        </span>
        {rat.criminalRecord}
      </div>
      <div>
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
