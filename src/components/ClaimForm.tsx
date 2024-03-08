import React, { FC, FormEvent, useState } from "react";
import { AnalyzingScreen } from "./Analyzing";
import axios from "axios";

type ClaimFormProps = {
  setRodentResult: React.Dispatch<React.SetStateAction<string>>;
};

const ClaimForm: FC<ClaimFormProps> = ({ setRodentResult }) => {
  const [uploadPreview, setUploadPreview] = useState("");
  const [ratID, setRatID] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //@ts-expect-error i'll try and fix this one later sorry mom
    setUsername(event.target[3].value);

    const prompt =
      "A rat from New York City. The description of the rat is " +
      //@ts-expect-error i'll try and fix this one later sorry mom
      event.target[2].value;

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImIzOWYwOGU5Y2ZhMDBkYzA1MDMwOWQ1OGQ1YjQ5MTQxIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDItMjRUMjA6Mzk6MDMuNDk3ODA3In0.-H3v9zAZ5DG4TZylg8HAd0_qnDbK4qsdfYYWX741Pzk", // Your token
      },
      body: JSON.stringify({
        aspect_ratio: "square",
        guidance_scale: 40,
        prompt: prompt,
        samples: 1,
        seed: 2414,
        steps: 50,
        style: "realism",
      }),
    };

    //Uncomment the below fetch when you want to make the API call
    /*await fetch("https://api.monsterapi.ai/v1/generate/txt2img", options)
      .then((response) => response.json())
      .then((response) => {
        setRatID(response.process_id);
      })
      .catch((err) => console.error(err));*/

    setIsLoading(true);
  };

  const imageUploaded = (e: FormEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) return;
    const file = e.currentTarget.files[0];
    console.log("New image uploaded:", e.currentTarget.files[0]);
    const objectUrl = URL.createObjectURL(file);
    console.log(objectUrl);
    setUploadPreview(objectUrl);
  };

  if (isLoading) {
    return (
      <AnalyzingScreen
        setRodentResult={setRodentResult}
        username={username}
        ratID={ratID}
      />
    );
  }

  return (
    <div className="form-container">
      <h1 className="title">RATTRACK</h1>
      <h2>Incident Intake Form</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Where did the incident take place? <br />
          <input type="text" name="location" />
        </label>
        <br />
        <label>
          When did the incident take place? <br />
          <input type="text" name="time" />
        </label>
        <br />
        <label>
          Please describe the criminal in AS MUCH DETAIL AS POSSIBLE! The more
          detail we have, the better our hyper-efficient algorithms will work!
          <br />
          <textarea
            name="description"
            className="description"
            rows={4}
            style={{ width: "100%" }}
          />
        </label>
        <br />
        <label>
          Please input your name or a pseuodonym; this will show in the RODENT'S
          ROGUE GALLERY.
          <br />
          <input type="text" name="time" />
        </label>
        <br />
        <label htmlFor="img">Upload your photo of the rodent:</label>
        <input
          onInput={imageUploaded}
          type="file"
          id="img"
          name="img"
          accept="image/*"
        />
        {uploadPreview ? (
          <img style={{ maxWidth: "100%" }} src={uploadPreview} />
        ) : null}
        <br />
        <div style={{ marginTop: "12px" }}>
          <input
            style={{ fontSize: "1rem" }}
            type="submit"
            value="🚨 SUBMIT YOUR INCIDENT REPORT 🚨"
          />
        </div>
      </form>
    </div>
  );
};

export default ClaimForm;
