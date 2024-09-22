import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/pascalwhitepants.jpg";
import code from "../public/code.png";
import design from "../public/fullstack.jpg";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/kanyesax.png";
import web2 from "../public/lovia.jpg";
import web3 from "../public/segmentfetus.png";
import web4 from "../public/footage.png";
import web5 from "../public/braintumordetection.jpg";
import web6 from "../public/sam2.png";
import { FaXTwitter, FaEnvelope } from 'react-icons/fa6';
import * as webllm from "@mlc-ai/web-llm";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [messages, setMessages] = useState([{ content: "You are a helpful AI agent helping users.", role: "system" }]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [usageStats, setUsageStats] = useState("");
  const availableModels = webllm.prebuiltAppConfig.model_list.map(m => m.model_id);
  const [selectedModel, setSelectedModel] = useState("Llama-3.1-8B-Instruct-q4f32_1-1k");

  const onMessageSend = async () => {
    if (currentMessage.trim() === "") return;
    setMessages([...messages, { content: currentMessage, role: "user" }]);
    setCurrentMessage("");
    setIsGenerating(true);

    const engine = new webllm.MLCEngine();
    let generatedMessage = "";

    try {
      const completion = await engine.chat.completions.create({
        stream: true,
        messages: [...messages, { content: currentMessage, role: "user" }],
        stream_options: { include_usage: true }
      });

      for await (const chunk of completion) {
        generatedMessage += chunk.choices[0]?.delta.content || "";
        setMessages(prevMessages => [...prevMessages, { content: generatedMessage, role: "assistant" }]);
        if (chunk.usage) setUsageStats(chunk.usage);
      }
    } catch (err) {
      console.error(err);
    }

    setIsGenerating(false);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>PascalMusabyimana</title>
        <meta name="description" content="Generated by Pascal Musabyimana" />
        <link rel="icon" href="/vexoimage.jpg" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbypascalmusabyimana</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/pascal.pdf"
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
              <a href="https://twitter.com/pascalmusabyim1?lang=en"><FaXTwitter /></a>
              <a href="https://be.linkedin.com/in/pascal-musabyimana-573b66178"><AiFillLinkedin /></a>
              <a href="https://github.com/pascal-maker"><AiFillGithub /></a>
              <a href="https://pascal-musa@hotmail.com"><FaEnvelope /></a>
            </div>

            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image 
                src={deved} 
                layout="fill" 
                objectFit="cover" 
                alt="" 
                sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 192px" 
              />
            </div>

            <h3 className="text-3xl py-1 dark:text-white">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I&apos;m a student at the University of Ghent. In my free time, I like to build websites and apps. Let me help you fulfill your dream as an entrepreneur. If you need a landing page, an e-commerce app, or a brand new website for your marketing agency, I&apos;m your guy. Let’s work together to fulfill your potential to the fullest.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have worked with experienced developers across the world who worked at Facebook, Twitter, Pinterest, and Adobe. When it comes to user experience or design, I always try to enhance the user experience based on your target audience.
            </p>
          </div>
          
          {/* Skills Section */}
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2">Coding Languages</h3>
              <p className="py-2">Using these coding languages to create your dream website or mobile app.</p>
              <h4 className="py-4 text-teal-600">Languages I Use</h4>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">Objective-C</p>
              <p className="text-gray-800 py-1">Swift</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">PHP</p>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">Kotlin</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">TypeScript</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2">Frameworks</h3>
              <p className="py-2">Do you have an idea for your next great startup? Let’s make it a reality.</p>
              <h4 className="py-4 text-teal-600">Tools & Technologies I Use</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">React Native</p>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">Laravel</p>
              <p className="text-gray-800 py-1">OpenCV</p>
              <p className="text-gray-800 py-1">Ultralytics</p>
              <p className="text-gray-800 py-1">TensorFlow</p>
              <p className="text-gray-800 py-1">Flask</p>
              <p className="text-gray-800 py-1">Firebase</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
              <p className="py-2">I’m here to help you with your software development needs.</p>
              <h4 className="py-4 text-teal-600">Let&apos;s Talk</h4>
              <p className="text-gray-800 py-1">I’m available for freelance work. Contact me!</p>
            </div>
          </div>

          {/* Portfolio Section */}
          <h3 className="text-3xl py-1 dark:text-white">My Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Some of the projects I&apos;ve worked on.
          </p>
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
            <a
              href="https://www.linkedin.com/posts/pascal-musabyimana-573b66178_meta-computervision-segmentation-activity-7169017148386840576-4GCh?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-1/3 flex-1"
            >
              <Image src={web1} className="rounded-lg object-cover" width={100} height={100} alt="Project 1" />
            </a>
            <a
              href="https://www.linkedin.com/posts/pascal-musabyimana-573b66178_hey-linkedin-network-i-have-decided-activity-7153396537753030657-_Vzm?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-1/3 flex-1"
            >
              <Image src={web2} className="rounded-lg object-cover" width={100} height={100} alt="Project 2" />
            </a>
            <a
              href="https://www.linkedin.com/posts/pascal-musabyimana-573b66178_meta-computervision-segmentation-activity-7169017148386840576-4GCh?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-1/3 flex-1"
            >
              <Image src={web3} className="rounded-lg object-cover" width={100} height={100} alt="Project 3" />
            </a>
            <a
              href="https://medium.com/@pascalmusa/brain-tumor-detection-yolov8-vs-sam-2-7a19ad44efb4"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-1/3 flex-1"
            >
              <Image src={web4} className="rounded-lg object-cover" width={100} height={100} alt="Project 4" />
            </a>
            <a
              href="https://medium.com/@pascalmusa/brain-tumor-detection-yolov8-vs-sam-2-7a19ad44efb4"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-1/3 flex-1"
            >
              <Image src={web5} className="rounded-lg object-cover" width={100} height={100} alt="Project 5" />
            </a>
            <a
              href="https://medium.com/@pascalmusa/brain-tumor-detection-yolov8-vs-sam-2-7a19ad44efb4"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-1/3 flex-1"
            >
              <Image src={web6} className="rounded-lg object-cover" width={100} height={100} alt="Project 6" />
            </a>
          </div>
        </section>

        {/* Chat Component */}
        <section className="chat-section py-10">
          <h3 className="text-3xl py-1 dark:text-white">Chat with Me</h3>
          <div className="chat-container border p-5 rounded-lg">
            <div className="messages max-h-60 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.role}`}>
                  <p className={`role ${msg.role}`}>{msg.role === "user" ? "You" : "Assistant"}</p>
                  <p className="content">{msg.content}</p>
                </div>
              ))}
            </div>
            <div className="input-area flex mt-4">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                className="flex-grow border p-2 rounded-lg"
                placeholder="Type your message..."
              />
              <button onClick={onMessageSend} className="bg-teal-500 text-white px-4 py-2 rounded-lg ml-2">
                Send
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
