import React from 'react';

export default function About() {
  return (
    <div className="h-screen flex flex-col items-center justify-start p-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden transition-shadow">
        <div className="bg-amber-500 text-lg font-semibold py-2 px-4">
          About Us
        </div>
        <div className="p-4">
          <p className="text-gray-600 mb-4">
          Welcome to our IMDB clone, where cinephiles and TV enthusiasts alike come together to discover, rate, and review their favorite movies and TV shows. Our platform is dedicated to providing a comprehensive database of entertainment content, offering users a one-stop destination to explore the vast world of cinema.
          </p>
          <p className="text-gray-600 mb-4">
          At IMDB clone, we understand the passion and excitement that surrounds the world of movies and television. Whether you are a casual viewer looking for your next binge-worthy series or a dedicated cinephile seeking hidden gems, our platform has something for everyone. From classic films to the latest releases, we strive to curate a diverse collection of content that caters to every taste and preference.
          </p>
          <p className="text-gray-600 mb-4">
          Our mission is to empower users with the tools and resources they need to make informed decisions about what to watch next. With our user-friendly interface and intuitive search functionality, discovering new favorites has never been easier. Dive into our extensive library of titles, explore curated lists and recommendations, and engage with fellow movie buffs through ratings, reviews, and discussions.         
          </p>
          <p className="text-gray-600">
          Join us on our journey to celebrate the magic of cinema and television. Whether you are a lifelong movie aficionado or just beginning your exploration, IMDB clone is here to guide you on your cinematic adventure. Lets discover, share, and celebrate the art of storytelling together.
          </p>
        </div>
      </div>
    </div>
  )
}
