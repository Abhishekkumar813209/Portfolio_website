import React from 'react'
import { FaInstagram, FaLinkedinIn, FaReact,FaGithub } from "react-icons/fa";
import { SiJavascript,SiTailwindcss, SiNodedotjs ,SiHtml5 } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/abhishekkumar.13">
            <span className="bannerIcon">
              <a href="AF"><FaInstagram /></a>
            </span>
            </a>

          <a href="https://github.com/Abhishekkumar813209">
          <span className="bannerIcon">
              <a href="sdf"><FaGithub /></a>
            </span>
          </a>

            <a href="https://www.linkedin.com/in/abhishek-kumar-5-year-idd-chemistry-0b436a246/">
            <span className="bannerIcon">
            <FaLinkedinIn />
            </span>
            </a>

          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <a href="https://git-first.hashnode.dev/react-js-in-bollywood-style">
            <span className="bannerIcon">
              <FaReact />
            </span>
            </a>
            <a href="https://git-first.hashnode.dev/javascript-with-cricket-analogy">
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            </a>
            <a href="https://git-first.hashnode.dev/the-evolution-of-tailwind-css-a-revolution-in-web-styling">
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            </a>
            <a href="https://git-first.hashnode.dev/nodejs-and-expressjs-powering-modern-web-development">
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            </a>

            <a href="https://git-first.hashnode.dev/javascript-with-cricket-analogy">
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            </a>
            
          </div>
        </div>
      </div>
  )
}

export default Media