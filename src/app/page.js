import React from 'react'
import Results from './components/Results';

const TMDB_API_KEY = process.env.TMDB_API_KEY

export default async function Home( { searchParams } ) {
  const genre = searchParams.genre || 'fetchTrending';
  // const res = await fetch( 
  //   `https://api.themoviedb.org/3${
  //     genre === `fetchTopRated` ? `/movie/top_rated` : `/trending/all/week`}?api_key=${TMDB_API_KEY}&
  //     language=en-US&page=1`
  // );

  const res = await new Promise((resolve) => {
    setTimeout(async() => {
      const response = fetch( 
      `https://api.themoviedb.org/3${
        genre === `fetchTopRated` ? `/movie/top_rated` : `/trending/all/week`}?api_key=${TMDB_API_KEY}&
        language=en-US&page=1`,
        {next : {revalidate : 10000}}
    );
    resolve(response);
    }, 2000);
  });

  console.log(res)

  if(!res.ok){
    console.log("Failed")
    throw new Error("Failed to fetch the movies")
  }

  const data = await res.json();
  const results = data.results;
  console.log(results)

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
