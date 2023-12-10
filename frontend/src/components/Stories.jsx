import { useEffect, useState } from "react";
import axios from "axios";

const Stories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users/showStoriesArticles")
      .then((data) => setData(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="stories">
      {data.map((item) => (
        <>
          <div>
            <img src="/anime23.png" alt="" className="story" />
            <p className="story-text">{item.title}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Stories;
