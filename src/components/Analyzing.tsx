import { useEffect } from "react";
import LoadingSpin from "react-loading-spin";
import axios from "axios";

type AnalyzingProps = {
  setRodentResult: React.Dispatch<React.SetStateAction<string>>;
  ratID: string;
  username: string;
};

export const AnalyzingScreen: React.FC<AnalyzingProps> = ({
  setRodentResult,
  ratID,
  username,
}) => {
  const fetchID = ratID || "726d5d2a-bb91-419f-b36b-7ca45b2ba3e8";
  const fetchUrl = `https://api.monsterapi.ai/v1/status/${fetchID}`;

  const getOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImIzOWYwOGU5Y2ZhMDBkYzA1MDMwOWQ1OGQ1YjQ5MTQxIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDItMjRUMjA6Mzk6MDMuNDk3ODA3In0.-H3v9zAZ5DG4TZylg8HAd0_qnDbK4qsdfYYWX741Pzk",
    },
  };

  const postBody = {
    user: username,
    //gotta change this to the stuff that is uh returned
    picLink: fetchID,
    uploadedRat: "",
  };

  useEffect(() => {
    const postData = async () => {
      try {
        console.log("postbody");
        console.log(postBody);
        const response = await axios.post("http://localhost:4001/", postBody);
        console.log("response from post");
        console.log(response.data);
      } catch (err) {
        console.error(`Error with posting rat data: ${err}`);
      }
    };

    postData();
  }, []);

  /*setTimeout(async () => {
    await fetch(fetchUrl, getOptions)
      .then((res) => res.json())
      .then((response) => {
        setRodentResult(response?.result?.output[0]);
      })
      .catch((err) => console.error(err));
  }, 15000);*/

  return (
    <div>
      <p>
        Our most powerful algorithms are searching for a potential match to your
        suspect. This may take around ten seconds, because the algorithms are
        just that complex and powerful.{" "}
        <span style={{ fontWeight: "bold" }}>RATTRACK</span>, a fully licensed
        and funded subsidiary of the NYPD, thanks you for your patience.
        Remember: if you <span style={{ fontWeight: "bold" }}>see</span>{" "}
        something, <span style={{ fontWeight: "bold" }}>squeak</span> something!
      </p>
      <LoadingSpin />
    </div>
  );
};
