import React, { useState, useEffect } from "react";
import "./App";
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0")
      .then((res) => res.json())
      .then((res) => {
        setData(res.hits);
      });
  }, []);

  return<div className="card-group">
    {data.map((res) => (
      <div
        className="card"
        style={{ width: "300px", height: "300px", border: "1px solid #464646" }}
      >
        <>
          <img src={res?.url} />
          <h1>Title: {res?.title}</h1>
          <h1>author: {res?.author}</h1>
          <h1>
            created_at: {new Date(res?.created_at).toDateString("DD-MM-YYYY")}
          </h1>
        </>
      </div>
    ))}
  </div>;
};

export default App;

// title
// author
// created_at
// url
