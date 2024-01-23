import Head from "next/head";
import {
  
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/pascal2023.jpg";
import code from "../public/code.png";
import design from "../public/fullstack.jpg";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/vex-oh.png";
import web2 from "../public/lovia.jpg";
import web3 from "../public/boxingscreenshot.png";
import web4 from "../public/footage.png";
import web5 from "../public/heatmap.jpg";
import {FaXTwitter} from 'react-icons/fa6';
import {FaEnvelope} from 'react-icons/fa6';
FaXTwitter
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>PascalMusabyimana</title>
        <meta name="description" content="Generated by Pascal Musabyimana" />
        <link rel="icon" href="/vexoimage.jpg" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbypascalmusabyimana</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Pascal Musabyimana
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full-Stack Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            I have 3 years of experience in software development, with a focus on web and mobile applications and computer-vision related projects. I am proficient in React, Laravel, React-Native, OpenCV, Ultralytics, YOLOv8, Objective-C, Java, JavaScript, Firebase, and Swift.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">     
    <a href="https://twitter.com/pascalmusabyim1?lang=en">< FaXTwitter/></a>
 <a href="https://be.linkedin.com/in/pascal-musabyimana-573b66178"><AiFillLinkedin /></a>
    <a href="https://github.com/pascal-maker"><AiFillGithub /></a>
    <a href="https://pascal-musa@hotmail.com"><FaEnvelope /></a>

</div>

            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I&apos;m a student at the University of Ghent in my freetime I like to build websites and apps. Let me help you fullfill your dream as an entrepeneur. If you need a landing page , an e-commerce app , a brand new website for your marketing agency or anything else that you desire I&apos;m your guy. Lets work together to fulfill your potential to the fullest.


I have worked with experienced developers across the world who worked at Facebook, Twitter, Pinterest and Adobe. When it comes to user-experience or design I always try to enhance the user experience based on your target audience. This includes the ability to create something that will appeal to the user.
              Worked on cool   <span className="text-teal-500">startup projects </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including web-development,
              mobile-app development  and design.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Coding Languages
              </h3>
              <p className="py-2">
                Using these Coding Languages to create your dream website or mobile app so we can launch your business in the best way possible.
              </p>
              <h4 className="py-4 text-teal-600">Coding Languages I Use</h4>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">Objective-C</p>
              <p className="text-gray-800 py-1">Swift</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">PHP</p>
              <p className="text-gray-800 py-1">Node Js</p>
              <p className="text-gray-800 py-1">Kotlin</p>
              <p className="text-gray-800 py-1">Python</p>

            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great startup? Let &apos;s make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Technologies/Frameworks Tools I Use</h4>
              <p className="text-gray-800 py-1">Firebase</p>
              <p className="text-gray-800 py-1">Github</p>
              <p className="text-gray-800 py-1">Yarn</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Wordpress</p>
              <p className="text-gray-800 py-1">Laravel</p>
              <p className="text-gray-800 py-1">React-Native</p  > 
              <p className="text-gray-800 py-1">OpenCV</p  > 
              <p className="text-gray-800 py-1">Yolov8</p  > 
              <p className="text-gray-800 py-1">Ultralytics</p  > 
              <p className="text-gray-800 py-1">nextjs</p  > 



      
           </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in chasing your dreams  I can
                help you achieve your dreams as an aspiring entrepeneur.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a developer and
              freelancer, I have created/designed certain 
              <span className="text-teal-500"> Projects </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              developing and consulting.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"200%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt=""

              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"200%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"300%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt=""
              />
            </div>
            
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"300%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt=""
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"200%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt=""
              />
            </div>
            
          </div>
        </section>
      </main>
    </div>
  ); 
}