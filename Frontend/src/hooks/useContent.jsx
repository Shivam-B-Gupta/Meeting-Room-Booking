import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState, useEffect } from "react";

export default function useContent() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/room/preview`)
      .then((response) => {
        // console.log("Fetched data: ", response.data);
        setContent(response.data.rooms || []);
      })
      .catch((err) => console.log(err));
  }, []);
  return content;
}
