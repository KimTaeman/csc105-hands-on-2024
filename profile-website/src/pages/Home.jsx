import React from 'react'
import Button from "../components/Button"

const Home = () => {
  return (
    <section className="min-w-screen h-screen home  p-3 md:p-10 md:mb-20 flex justify-center text-black text-sm md:text-lg md:font-bold" id="home">
    
      <div className="contents-container h-auto flex flex-row md:w-5/6">

        <div className="home-text text-left w-2/3 md:w-1/2  px-8 flex flex-col gap-1.5 justify-center">
          <p>Hello, It's me</p>
          
          <p className="home-title text-xl md:text-5xl font-bold">Artist John</p>
          <p>I'm a Artist</p>
          <p className="text-gray-600 text-xs md:text-black">Please hold your breath as we dive into a world full of creativity with designer John.</p>

          {/* Social media links */}
          <div className="social-links h-auto flex gap-2 md:gap-6 my-2 md:my-8">
            <a href="https://www.facebook.com/" className="social-link w-6 md:w-10"><svg alt="Facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></a>
            <a href="https://www.instagram.com/" className="social-link w-6 md:w-10"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram"/></a>
            <a href="https://x.com/" className="social-link w-6 md:w-10"><img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg" alt="X" className="rounded-lg"/></a>
          </div>

          <Button text="My Portfolio" className="home-btn" style="md:text-sm md:px-12 md:py-2 text-xs md:w-50 w-25 px-1"/>
        </div>
        <div className="home-img w-1/2 h-auto flex items-center relative md:static">
          <img src="https://static.vecteezy.com/system/resources/previews/024/558/280/non_2x/businessman-isolated-illustration-ai-generative-free-png.png" className="bg-cover max-w-md w-[250px] md:w-full absolute -left-20 md:static" alt="Artist John Profile" />
        </div>
      </div>
    </section>
  )
}

export default Home