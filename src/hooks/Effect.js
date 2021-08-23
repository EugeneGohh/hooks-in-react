/* eslint-disable array-callback-return */
import { useState, useEffect } from "react";
import axios from "axios";

function Effect() {
  const [getMemes, setGetMemes] = useState([]);

  useEffect(() => {
    const fetchMemes = () => {
      axios.get("https://api.imgflip.com/get_memes").then((response) => {
        setGetMemes(response.data.data.memes);
      });
    };

    fetchMemes();
  }, [getMemes]);

  return (
    <>
      {getMemes.map((res, key) => {
        return <h6 key={key}>{res.name}</h6>;
      })}
    </>
  );
}

export default Effect;

// https://api.imgflip.com/get_memes <-- This is an API
