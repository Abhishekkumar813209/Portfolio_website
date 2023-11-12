import React from 'react'
import Title from '../layouts/Title'
import { jarvis,Tictac,udemy,razorpay,chat} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Jarvis(Voice Assistant)"
          des="Created a voice-activated assistant in JavaScript. Features greetings,web navigation, information retrieval, and real-time responses. Demonstrated skills in SpeechRecognition and Synthesis APIs. Enhanced user experience with personalized interactions"
          src={jarvis}
          link="https://merry-malabi-6340be.netlify.app/"
        />
        <ProjectsCard
          title="Udemy Clone Frontend"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={udemy}
          link=""
        />
        <ProjectsCard
          title="Udemy Clone Backend"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={udemy}
          link="https://razorpay-backend-zgwh.onrender.com"
        />
        <ProjectsCard
          title="React Chat App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={chat}
          link="https://chat-app-gilt-five.vercel.app/"
        />
        <ProjectsCard
          title="Razorpay Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={razorpay}
          link="https://remarkable-flan-4bbf59.netlify.app"
        />
        <ProjectsCard
          title="Tic Tac Toe"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={Tictac}
          link="https://tic-tac-toe-murex-two.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Projects