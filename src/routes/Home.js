import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
   const [loading, setLoading] = useState(true);
   const [movies, setMovies] = useState([]);
   // 이전 to do list에서는 then을 사용했지만 최근에는 async - await를 보편적으로 사용한다고 한다
   const getMovies = async () => {
      const json = await (
         await fetch(
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
         )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
   };
   useEffect(() => {
      getMovies();
   }, []);
   return (
      <div className={styles.container}>
         {loading ? (
            <h1 className={styles.loader}>Loading...</h1>
         ) : (
            <div className={styles.movies}>
               {movies.map((movie) => (
                  <Movie
                     key={movie.id}
                     id={movie.id}
                     coverImg={movie.medium_cover_image}
                     title={movie.title}
                     summary={movie.summary}
                     genres={movie.genres}
                  />
               ))}
            </div>
         )}
      </div>
   );
}

export default Home;
