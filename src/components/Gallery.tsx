import { useEffect, useState } from "react";
import axios from "axios";

type Rat = {
  id: number;
  picLink: string;
  user: string;
};

export const Gallery = () => {
  const [rats, setRats] = useState<Rat[] | null>(null);
  console.log(rats);

  useEffect(() => {
    console.log("aight leggo");
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4001/");
        setRats(response.data);
      } catch (err) {
        console.error(`Error getting dem rats: ${err}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div
        style={{
          marginTop: "12px",
          fontWeight: "bold",
          fontSize: "48px",
        }}
      >
        RODENT'S ROGUE GALLERY
      </div>
      {rats && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {rats.map((rat) => (
            <div key={rat.id} style={{ width: "100%", marginTop: "12px" }}>
              <img
                style={{
                  width: "100%",
                  borderRadius: "5%",
                  borderStyle: "solid",
                }}
                src={rat.picLink}
              />
              <span style={{ fontStyle: "italic" }}>
                Reported by:{" "}
                <span style={{ fontWeight: "bold" }}>{rat.user}</span>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
