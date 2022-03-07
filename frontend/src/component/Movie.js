import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import config from "../config";

const Movie = () => {
  const [mov, setmovie] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    try {
      const { data } = await axios.get(`${config.BACKEND_HOST}/${id}`);
      setmovie(data);

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(id);
  return (
    <main>
      <article className="container">
        <Link to="/moviesData">Back</Link>
        <ul>
          <li>{mov.name}</li>
          <li>{mov.rating}</li>
        </ul>
      </article>
    </main>
  );
};

export default Movie;
