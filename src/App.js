import { useEffect, useState } from "react";

function App() {
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
   console.log(movies);
   return (
      <div>
         {loading ? (
            <h1>Loading...</h1>
         ) : (
            <div>
               {movies.map((movie) => (
                  <div key={movie.id}>
                     <img src={movie.medium_cover_image} />
                     <h2>{movie.title}</h2>
                     <p>{movie.summary}</p>
                     <ul>
                        {movie.genres.map((g) => (
                           <li key={g}>{g}</li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
}

export default App;
