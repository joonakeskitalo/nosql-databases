import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const Card = ({ name, description, website, address }) => {
  return (
    <div className="card">
      <b>{name}</b>
      <p>{description}</p>
      <span>{address}</span>
      <a href={website}>{website}</a>
    </div>
  );
};

function App() {
  const baseUrl = "http://localhost:3000";
  const burgersUri = `${baseUrl}/burgers`;
  const [burgers, setBurgers] = useState(null);

  const fetchData = async () => {
    const req = await axios.get(burgersUri);
    const data = req.data;
    setBurgers(data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Burgers Feed</h1>
      {burgers?.map((x) => (
        <Card key={x.id} {...x} />
      ))}
    </>
  );
}

export default App;
