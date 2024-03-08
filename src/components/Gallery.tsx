import { useEffect, useState } from "react";
import axios from "axios";

export const Gallery = () => {
  const [rats, setRats] = useState(null);
  console.log(rats);

  useEffect(() => {
    console.log("aight leggo");
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4001/");
        console.log(response);
      } catch (err) {
        console.error(`Error getting dem rats: ${err}`);
      }
      /*fetch("/")
        .then((response) => {
          console.log("raw response");
          console.log(response);
          console.log("json");
          console.log(response.json());
          console.log("body??");
          console.log(response.body);
          //@ts-expect-error i'll try and fix this one later sorry mom
          setRats(response.body);
        })
        .catch((error) => console.error(`Error getting those rats ${error}`));*/
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>RODENT'S ROGUE GALLERY</div>
      {rats && (
        <div>
          <p>Rats achieved.</p>
        </div>
      )}
    </div>
  );
};
