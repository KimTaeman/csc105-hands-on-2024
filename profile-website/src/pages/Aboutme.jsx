import React from 'react'
import Button from "../components/Button"

const Aboutme = () => {
  return (
    <section className="home min-w-screen p-8 md:p-20 flex flex-col md:flex-row justify-center items-center text-black text-sm md:text-lg md:font-bold" id="aboutme">
      <div className="home-img w-80 md:w-1/2 p-5">
        <img src="https://static.vecteezy.com/system/resources/previews/024/558/280/non_2x/businessman-isolated-illustration-ai-generative-free-png.png" className="bg-cover" alt="Artist John Profile" />
      </div>
      <div className="contents-container h-auto flex flex-row justify-between w-full m-5 md:w-1/2">

        <div className="home-text text-left flex flex-col gap-1.5 md:gap-4 justify-center md:pr-10">
          
          <p className="home-title text-2xl md:text-5xl font-bold">About Me</p>
          <p className="text-gray-700 md:text-black font-semibold md:font-bold">Artist & Designer</p>
          <p className="text-gray-600 text-xs md:text-black font-medium py-2.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum temporibus hic dolorum voluptate laudantium obcaecati consectetur consequatur pariatur illum dolor quos, cumque aspernatur nulla beatae natus praesentium. Aperiam voluptas quos libero fuga sunt assumenda temporibus ipsum officia, dicta iure amet incidunt impedit consectetur sed fugit quisquam odit veritatis minus!</p>
          <Button text="Read More" className="home-btn" style="md:text-sm md:font-semi-bold  text-xs md:w-30 w-25 md:py-3"/>
        </div>
        
      </div>
    </section>
  )
}

export default Aboutme