import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const Card = ({ id, name }) => {
  return (
    <div className="card">
      {name} ({id})
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

  console.log(`🔥 burgers`, burgers);

  return (
    <>
      <h1>Burgers Feed</h1>
      {burgers?.map((x) => (
        <Card key={x.id} name={x.name} id={x.id} />
      ))}
    </>
  );
}

export default App;
