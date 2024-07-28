import React, { Suspense } from "react";
import { useFetch } from "./useFetch";
import "./App.css";
import config from './config';


function App() {
  const { data, loading, error, handleCancelRequest } = useFetch(config.apiUrl);

  return (
    <div className="App">
      <h1>Obtenemos los Datos</h1>

      <button onClick={handleCancelRequest}>Cancel Request</button>
      <ul className="card">
        {error && <li>Error: {error}</li>}
        {loading && <li>Loading...</li>}
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}


export default App;
