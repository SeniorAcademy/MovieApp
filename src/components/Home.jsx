import React, { useState, useEffect } from "react";
import { GetMovies, GetSearchMovies } from "../Api/GetRequest";
import Layout from "../layout/Layout";
import { useGlobalContext } from "../context/GlobalContext";
import Hero from "./Hero";

const Home = () => {

  const { movies, setMovies, search, setSearch } = useGlobalContext()


  const fetchMovies = async () => {
    const response = await GetMovies();
    setMovies(response ? response.Search : []);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchSerchMovie = async () => {
    if (search.trim() !== "") {
      const response = await GetSearchMovies(search);
      setMovies(response ? response.Search : []);
    } else {
      fetchMovies();
    }
  };

  useEffect(() => {
    fetchSerchMovie();
  }, [search]);

  console.log("search", search);

  return (
    <Layout>
      <Hero/>-
      <div className="p-10 dark:bg-black">
        <input
          type="text"
          placeholder="Search Movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-black py-2 px-4 rounded-lg m-3 border-2 border-sky-400  focus:outline-none w-24 lg:w-48 transition duration-500 "
        />

        <div className=" bg-white container grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:bg-black ">
          {movies && movies.length > 0 ? (
            movies.map((movie) => {
              return (
                <div className="mx-auto" key={movie.imdbID}>
                  <div className="group relative overflow-hidden cursor-pointer">
                    <img
                      src={movie.Poster}
                      className=" duration-500 rounded-sm "
                      alt={movie.Title}
                    />
                    <div className="absolute px-8 bottom-8">
                      <h2 className="text-gray-200 group-hover:text-yellow-400  font-poppins font-bold duration-500 text-xl">
                        {movie.Title.slice(0, 13)}
                        <span className="group-hover:text-green-500 ml-3">
                          {movie.Year}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gega-red text-4xl font-bold">Not Found...</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
