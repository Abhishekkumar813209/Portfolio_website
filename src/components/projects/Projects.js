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
          des="Leveraged React with Chakra Ui for Responsive web Design and Redux Toolkit Query for efficient state management and axios data fetching in a dynamic e-learning platform, ensuring seamless user experiences in a concise and scalable codebase."
          src={udemy}
          link=""
        />
        <ProjectsCard
          title="Udemy Clone Backend"
          des="Developed robust e-learning platform with Mern stack. Features course management, user auth, real-time updates, and admin controls. Integrated Cloudinary, asynchronous error handling, and razorpay payment. A massive project with extensive functionalities."
          src={udemy}
          link="https://razorpay-backend-zgwh.onrender.com"
        />
        <ProjectsCard
          title="React Chat App"
          des="Developed a real-time chat app with React and Firebase, featuring Google authentication, message storage and logout Functionality, and dynamic UI updates. Utilized Chakra UI for a sleek interface."
          src={chat}
          link="https://chat-app-gilt-five.vercel.app/"
        />
        <ProjectsCard
          title="Razorpay Website"
          des="Integrated Razorpay in MERN stack project for product purchases. Backend on Render.com, frontend on Netlify. Live demo: Below. Accepts payments using Razorpay payment gateway , Try to use demo debit card numbers from razorpay test card website"
          src={razorpay}
          link="https://remarkable-flan-4bbf59.netlify.app"
        />
        <ProjectsCard
          title="Tic Tac Toe"
          des="Built a React Tic-Tac-Toe game with a responsive board, state management, winning logic, and play-again feature. Modular components, like squares and player cards, elevate the UI, complemented by customizable icons for a visually engaging"
          src={Tictac}
          link="https://tic-tac-toe-murex-two.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Projects