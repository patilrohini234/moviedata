import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../config";

const Movies = () => {
  const [mov, setMovies] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await axios.get(`${config.BACKEND_HOST}`);
    setMovies(data);
  };
  return (
    <main>
      <section className="container">
        <table className="table-content">
          <tr>
            <th>MovieName</th>
            <th>rating</th>
          </tr>
          {mov.map((e) => (
            <tr key={e.id}>
              <Link to={`/${e.id}`}>
                <td>{e.name}</td>
                <td>{e.rating}</td>
              </Link>
            </tr>
          ))}
        </table>
      </section>
    </main>
  );
};

export default Movies;
