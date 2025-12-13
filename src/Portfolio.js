import React from 'react';
import { ArrowUpRight } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import project1Image from './assets/images/project1.jpg';
import project2Image from './assets/images/project2.jpg';
import project3Image from './assets/images/project3.png';
import project4Image from './assets/images/project4.jpg';
import project5Image from './assets/images/project5.jpg';
import project6Image from './assets/images/project6.jpg';
import project7Image from './assets/images/project7.jpg';
import project8Image from './assets/images/project8.jpg';
import project9Image from './assets/images/project9.jpg';
import project10Image from './assets/images/moon.png';
import project11Image from './assets/images/elec.png';
import project12Image from './assets/images/leaf.png';
import project13Image from './assets/images/lib.png';
import project14Image from './assets/images/attend.png';
import project15Image from './assets/images/audio.png';
import project16Image from './assets/images/bank.png';
import project17Image from './assets/images/it.png';
import project18Image from './assets/images/ki.png';
import project19Image from './assets/images/auction.png';
import project20Image from './assets/images/winp.png'; // Importing additional project images
import project21Image from './assets/images/robot.png'; // Placeholder for additional project image
import project22Image from './assets/images/sha.png'; // Placeholder for additional project image
import project23Image from './assets/images/invt.png';
import project24Image from './assets/images/comm.png' // Placeholder for additional project image
import profile from './assets/images/profilev2.jpeg'; // Importing profile image
import project25Image from './assets/images/pipro.jpg';
// Placeholder for additional project image

import pythonImg from './assets/images/skills/python.jpg'; // Importing images
import cImg from './assets/images/skills/c.jpg';
import verilogImg from './assets/images/skills/verilog.jpg';
import matlabImg from './assets/images/skills/matlab.jpg';
import csharpImg from './assets/images/skills/csharp.png';
import dotnetImg from './assets/images/skills/dotnet.png';
import arduinoUnoImg from './assets/images/skills/arduino_uno.png';
import arduinoNanoImg from './assets/images/skills/arduino_nano.png';
import raspberryPiPicoImg from './assets/images/skills/raspberry_pi_pico.png';
import stm32BluePillImg from './assets/images/skills/stm32_blue_pill.png';
import esp8266Img from './assets/images/skills/esp8266.png';
import mitsubishiImg from './assets/images/skills/mitsubishi.png';
import siemensImg from './assets/images/skills/siemens.png';
import deltaImg from './assets/images/skills/delta.png';
import multisimImg from './assets/images/skills/multisim.png';
import quartusImg from './assets/images/skills/quartus.png';
import easyEDAImg from './assets/images/skills/easyeda.png';
import labVIEWImg from './assets/images/skills/labview.png';
import arduinoIDEImg from './assets/images/skills/arduino_ide.png';
import stm32CUBEIDEImg from './assets/images/skills/stm32cubeide.png';
import simaticManagerImg from './assets/images/skills/simatic_manager.png';
import ispSoftImg from './assets/images/skills/isp_soft.png';
import sqlImg from './assets/images/skills/sql.png';
import htmlImg from './assets/images/skills/html.png';
import cssImg from './assets/images/skills/css.png';  
import javascriptImg from './assets/images/skills/javascript.png';
import kicadImg from './assets/images/skills/kicad.png';
import keilImag from './assets/images/skills/keil.png';
import esp32Img from './assets/images/skills/esp32.png';
import javaImg from './assets/images/skills/java.png';
import linuxImg from './assets/images/skills/linux.png'; // Importing Java image
import gitImg from './assets/images/skills/gitlogo.png';
import piImg from './assets/images/skills/rasp.webp';
import fImg from './assets/images/skills/f360.png';

export default function Portfolio() {
  const projectData = [
    {
      image: project25Image, // Local image for Project 9
      url: 'https://github.com/Karthigeyan06/project9', // URL for Project 9
      title: '2D Contour Detection and 3D Depth Mapping Using Raspberry Pi and OpenCV',
      category: 'Core',
      description: 'Developed a Raspberry Pi-based system that captures images, detects contours in 2D, and generates 3D depth maps using OpenCV. The system utilizes computer vision techniques to analyze and visualize spatial information from images.',
    },
    {
      image: project19Image, // Local image for Project 1
      url: 'https://github.com/Karthigeyan06/project1', // URL for Project 1
      title: 'IPL Auction System Using Python',
      category: 'IT',
      description: 'Developed an IPL auction system using Python, allowing users to bid on players, manage teams, and simulate auction scenarios. The system features a user-friendly interface and real-time updates.',
      
    },
    {
      image: project20Image, // Local image for Project 1
      url: 'https://github.com/Karthigeyan06/project1', // URL for Project 1
      title: 'Cricket Match Win Predictor Using Java',
      category: 'IT',
      description: 'Developed a cricket match win predictor using Java, leveraging historical match data and machine learning algorithms to predict match outcomes. The application provides insights into team performance and player statistics.',
      
    },

    {
      image: project21Image, // Local image for Project 1
      url: 'https://github.com/Karthigeyan06/project1', // URL for Project 1
      title: 'Internal Logistics Robot Using Raspberry Pi',
      category: 'Core',
      description: 'Developed an internal logistics robot using Raspberry Pi, capable of navigating through warehouses and delivering items autonomously. The robot uses sensors for obstacle detection and pathfinding algorithms for efficient navigation.',
      
    },

    {
      image: project22Image, // Local image for Project 1
      url: 'https://github.com/Karthigeyan06/project1', // URL for Project 1
      title: 'AI Integrated Structural Health Monitoring System',
      category: 'Core',
      description: 'Developed an AI-integrated structural health monitoring system that uses sensors to collect data on structural integrity and applies machine learning algorithms to predict potential failures, enhancing safety and maintenance efficiency.',
      
    },

    {
      image: project23Image, // Local image for Project 1
      url: 'https://github.com/Karthigeyan06/project1', // URL for Project 1
      title: 'Inventory Management System Using Python and Sqlite',
      category: 'IT',
      description: 'Developed an inventory management system using Python and SQLite, allowing users to track stock levels, manage suppliers, and generate reports. The system features a user-friendly interface and real-time updates.',
    },
    {
      image: project24Image, // Local image for Project 1
      url: 'https://github.com/Karthigeyan06/project1', // URL for Project 1
      title: 'Simulated Message Communication through Network between Machines',
      category: 'Core',
      description: 'Linux-based project simulating message communication between machines in a network. It demonstrates how machines can exchange messages using protocols like TCP/IP, enhancing understanding of network communication.',
    },
    {
      image: project1Image, // Local image for Project 2
      url: 'https://github.com/Karthigeyan06/project2', // URL for Project 2
      title: 'Four-Axis Robot Arm with Joystick and Mobile Control ',
      category: 'Core',
      description: 'Built a four-axis robot arm controlled by two joysticks and mobile automation. The arm can also be programmed to perform automated tasks regularly. ',
    },
    {
      image: project3Image, // Local image for Project 3
      url: 'https://github.com/Karthigeyan06/project3', // URL for Project 3
      title: 'Organization Transport Management System',
      category: 'Core',
      description: 'IoT based transport management system with the collection of data such as attendance with timestamp, occupancy and vehicle timings',
    },
    {
      image: project4Image, // Local image for Project 4
      url: 'https://github.com/Karthigeyan06/project4', // URL for Project 4
      title: 'Smart Irrigation and Monitoring System using IoT',
      category: 'Core',
      description: 'System that collects the environmental and plant parameters and irrigation system controlled with mobile',
    },
    {
      image: project5Image, // Local image for Project 5
      url: 'https://github.com/Karthigeyan06/project5', // URL for Project 5
      title: 'Autonomous GPS-Based Delivery Robot with Secure User Authentication',
      category: 'Core',
      description: 'An Autonomous delivery bot equipped with environmental sensors and GPS that delivers to the target location',
    },
    {
      image: project6Image, // Local image for Project 6
      url: 'https://github.com/Karthigeyan06/project6', // URL for Project 6
      title: 'Dual-Mode Wireless Rover: Real-Time Control and Environmental Sensing',
      category: 'Core',
      description: 'Developed an Arduino-based rover with a team, featuring real-time remote control and environmental sensing.',
    },
    {
      image: project7Image, // Local image for Project 7
      url: 'https://github.com/Karthigeyan06/project7', // URL for Project 7
      title: 'Automatic Balance System for 2-Wheel Bot Using 3-Axis Gyroscope',
      category: 'Core',
      description: 'This project uses a 3-axis gyroscope to automatically balance a 2-wheel robot. The gyroscope detects the robot tilt and sends data to adjust wheel speed for stability',
    },
    {
      image: project8Image, // Local image for Project 8
      url: 'https://github.com/Karthigeyan06/project8', // URL for Project 8
      title: 'Emergency Communication Device for Disaster Situations ',
      category: 'Core',
      description: 'Engineered a portable, waterproof communication device. It provides reliable voice communication, real-time GPS data, and power backup with solar support, ensuring connectivity in disaster scenarios ',
    },
    {
      image: project9Image, // Local image for Project 9
      url: 'https://github.com/Karthigeyan06/project9', // URL for Project 9
      title: 'Traffic Management System for Emergency Vehicles Using RFID and IoT',
      category: 'Core',
      description: 'Designed an RFID and IoT-enabled system to prioritize emergency vehicles at traffic signals. The system detects vehicle type, adjusts signals for clear passage, and logs data to a server and text file for monitoring.',
    },
    {
      image: project10Image, // Local image for Project 9
      url: 'https://github.com/Karthigeyan06/project9', // URL for Project 9
      title: 'Moon Phase Detector Using Python and OpenCV',
      category: 'IT',
      description: 'Developed a Python program using OpenCV to detect and classify moon phases from images. The program analyzes image features, applies filters, and uses machine learning for accurate phase identification.',
    },
    {
      image: project11Image, // Local image for Project 9
      url: 'https://github.com/Karthigeyan06/project9', // URL for Project 9
      title: 'ElectroRookie: A Calculator',
      category: 'IT',
      description: 'Developed a Python-based calculator for electronics enthusiasts. It performs calculations for resistors, capacitors, and inductors, providing quick and accurate results for circuit design.',
    },
    {
      image: project12Image, // Local image for Project 9
      url: 'https://github.com/Karthigeyan06/project9', // URL for Project 9
      title: 'Leaf Disease Detection Using Python and OpenCV',
      category: 'IT',
      description: 'Created a Python program using OpenCV to detect and classify leaf diseases. The program analyzes leaf images, applies filters, and uses machine learning for accurate disease identification.',
    },
    {
      image: project13Image, // Local image for Project 9
      url: 'https://github.com/Karthigeyan06/project9', // URL for Project 9
      title: 'Library Management System Using Python and MySQL',
      category: 'IT',
      description: 'Developed a Library Management System using Python and MySQL. The system allows users to manage book records, track borrowed books, and generate reports, enhancing library efficiency.',
    },
    {
      image: project14Image, // Local image for Project 9
      url: 'https://github.com/Karthigeyan06/project9', // URL for Project 9
      title: 'Attendance Management System Using Python and MySQL with QR Code',
      category: 'IT',
      description: 'Developed an Attendance Management System using Python and MySQL with QR code integration. The system allows users to mark attendance by scanning QR codes, streamlining the attendance process.',
    },
    {
      image: project15Image, // Local image for Project 9
      url: 'https://github.com/Karthigeyan06/project9', // URL for Project 9
      title: 'Audio Player using Python packages',
      category: 'IT',
      description: 'Developed an audio player using Python packages. The player supports various audio formats, provides playback controls, and features a user-friendly interface for seamless audio experience.',
    },
    {
      image: project16Image, // Local image for Project 9
      url: 'https://github.com/Karthigeyan06/project9', // URL for Project 9
      title: 'Bank Management System Using Python and MySQL',
      category: 'IT',
      description: 'Developed a Bank Management System using Python and MySQL. The system allows users to manage customer accounts, transactions, and generate reports, enhancing banking operations.',
    },
    {
      image: project17Image, // Local image for Project 9
      url: 'https://github.com/Karthigeyan06/project9', // URL for Project 9
      title: 'Website for My Youtube Channel',
      category: 'IT',
      description: 'Developed a personal website for my YouTube channel using HTML and CSS. The website showcases my videos, provides information about my channel, and allows users to subscribe.',
    },
    {
      image: project18Image, // Local image for Project 9
      url: 'https://github.com/Karthigeyan06/project9', // URL for Project 9
      title: 'Website for Kreotix Innovations',
      category: 'IT',
      description: 'Developed a website for Kreotix Innovations using HTML, CSS, and JavaScript. The website showcases the company\'s services, projects, and provides contact information.',
    },
    

    
  ];

const aboutRef = useRef(null);
const isInView = useInView(aboutRef, { once: true });
const [activeCategory, setActiveCategory] = useState("Core");

const certificationData = [
  {
    title: "Embedded Software and Hardware Architecture",
    platform: "Coursera",
    issuer: "University of Colorado Boulder",
    year: "2025",
    link: "https://drive.google.com/file/d/1Vv7kVm1sukB6hD3S-OI2CbaN4h73IIBA/view"
  },
  {
    title: "Linux Embedded System Topics and Projects",
    platform: "Coursera",
    issuer: "University of Colorado Boulder",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/verify/IFQCV39AJN3U"
  },
  {
    title: "IP Addressing and Subnetting",
    platform: "GeeksforGeeks",
    issuer: "GeeksforGeeks",
    year: "2025",
    link: "https://drive.google.com/file/d/1E-7LVrjOWDM1vYshwIDWkVti9HOJesPx/view"
  },
  {
    title: "System Design Through Verilog",
    platform: "NPTEL",
    issuer: "IIT Guwahati",
    year: "2024",
    link: "https://drive.google.com/file/d/1OKvodhnFReieT9CZurJFrf5dyIrjNDGO/view"
  },
  {
    title: "Using Python for Automation",
    platform: "LinkedIn Learning",
    issuer: "LinkedIn",
    year: "2023",
    link: "https://www.linkedin.com/learning/certificates/f7ab8c47cb9bb2f7778a460d8aa62703691cff242082b9177a0b6c7f7bc8892b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BsRmS9HD3QS%2B3dt45V2pBUA%3D%3D"
  },
  {
    title: "Networking and Storage Essentials",
    platform: "EdX",
    issuer: "IBM",
    year: "2025",
    link: "https://courses.edx.org/certificates/30d659616d25482587ba61e388391600"
  },
  {
    title: "Embedded Systems using C",
    platform: "Coursera",
    issuer: "EDUCBA",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/verify/6NE9J07PFG8O"
  }
];

const [count, setCount] = useState({
  projects: 0,
  internships: 0,
  miniProjects: 0,
  cgpa: 0,
});

useEffect(() => {
  if (isInView) {
    const interval = setInterval(() => {
      setCount((prev) => {
        const next = {
          projects: Math.min(prev.projects + 1, 15),
          internships: Math.min(prev.internships + 1, 3),
          miniProjects: Math.min(prev.miniProjects + 1, 30),
          cgpa: Math.min((parseFloat(prev.cgpa) + 0.1).toFixed(1), 8.8),
        };
        return {
          projects: Number(next.projects),
          internships: Number(next.internships),
          miniProjects: Number(next.miniProjects),
          cgpa: Number(next.cgpa),
        };
      });
    }, 50);
    return () => clearInterval(interval);
  }
}, [isInView]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-300 font-sans">
      {/* Navigation Bar */}
<nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 shadow-lg z-50 py-4 px-8 flex justify-between items-center border-b border-gray-700">
  <h1 className="text-2xl font-bold text-cyan-400">Karthigeyan G.</h1>
  <ul className="hidden md:flex space-x-6 text-lg">
    <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
    <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
    <li><a href="#experience" className="hover:text-cyan-400 transition">Experience</a></li>
    <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
    <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
  </ul>
  {/* Mobile Menu Toggle */}
  <div className="md:hidden flex items-center">
    <button className="text-white" onClick={() => {/* toggle mobile menu logic */}}>
      {/* Hamburger Icon */}
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
</nav>
{/* Hero Section */}
<section className="min-h-screen flex items-center justify-center px-6 mt-16">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 max-w-7xl w-full">

    {/* Image First on Mobile */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center md:justify-end order-first md:order-last"
    >
      <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-[0_0_20px_#00fff7] hover:shadow-[0_0_30px_#00fff7] transition duration-300">
  <img
    src={profile}
    alt="Karthigeyan Ganesan"
    className="w-full h-full object-cover"
  />
</div>
    </motion.div>

    {/* Text Section */}
    <div className="text-center md:text-center">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse leading-tight font-poppins"
      >
        Hello, I'm KARTHIGEYAN
      </motion.h1>

       <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-gray-400 leading-relaxed font-poppins mb-4 font-bold"
      >
        Project Intern at embedUR Systems
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-gray-400 leading-relaxed font-poppins mb-4"
      >
        Embedded Systems & IoT Engineer | Electronics & Communication Engineer | Linux | Computer Networking | IIoT
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex justify-center md:justify-center space-x-6 mb-4"
      >
        <a href="mailto:karthigeyanganesan06@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-transform hover:scale-110"><Mail size={28} /></a>
        <a href="https://www.linkedin.com/in/karthigeyan-ganesan-203066257/" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-transform hover:scale-110"><Linkedin size={28} /></a>
        <a href="https://github.com/Karthigeyan06" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-transform hover:scale-110"><Github size={28} /></a>
        <a href="tel:+918428804975" className="text-gray-400 hover:text-cyan-400 transition-transform hover:scale-110"><Phone size={28} /></a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a 
          href="https://drive.google.com/file/d/1BQfdOsaT9mH6RY5h_pvRsciqSBhTjBFl/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-base md:text-lg font-semibold text-white border-2 border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-lg"
        >
          View Resume <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </motion.div>
    </div>
  </div>
</section>



      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-gradient-to-b from-gray-900 to-black px-8">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-6 text-cyan-400"
        >
          About Me
        </motion.h2>
        <p className="text-center text-lg text-gray-400 max-w-3xl mx-auto font-poppins mb-12">
          I'm an Electronics & Communication Engineer with a passion for Embedded Systems and IoT. Over the years, I've worked on projects involving microcontrollers, automation systems using PLCs, and smart devices. My expertise spans across various platforms like Arduino, Raspberry Pi, and STM32, integrating them into real-world applications that solve practical problems.
        </p>

        {/* Stats section */}
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto text-center text-white font-poppins">
    <div>
      <h3 className="text-3xl font-bold text-cyan-400">{count.projects}</h3>
      <p>Projects</p>
    </div>
    <div>
      <h3 className="text-3xl font-bold text-cyan-400">{count.internships}</h3>
      <p>Internships</p>
    </div>
    <div>
      <h3 className="text-3xl font-bold text-cyan-400">{count.miniProjects}</h3>
      <p>Mini Projects</p>
    </div>
    <div>
      <h3 className="text-3xl font-bold text-cyan-400">{count.cgpa}</h3>
      <p>CGPA</p>
    </div>
  </div>

      </section>

      {/* Education Section */}
<section id="education" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black px-8">
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl font-bold text-center mb-12 text-cyan-400 font-poppins"
  >
    Education
  </motion.h2>

  <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-8">
    <h3 className="text-2xl sm:text-3xl font-bold text-white font-poppins mb-2">
      B.E. Electronics and Communication Engineering
    </h3>
    <p className="text-cyan-400 text-lg font-semibold mb-1">2022 - 2026</p>
    <p className="text-gray-400 mb-4">Rajalakshmi Institute of Technology, Chennai</p>
    <p className="text-gray-300 font-medium">Current CGPA: <span className="text-cyan-400 font-bold">8.8</span> (Till 6th Semester)</p>
  </div>
    {/* Class 12 Education Details 
  <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-8">
    <h3 className="text-2xl sm:text-3xl font-bold text-white font-poppins mb-2">
      Class 12 - State Board
    </h3>
    <p className="text-cyan-400 text-lg font-semibold mb-1">2022</p>
    <p className="text-gray-400 mb-4">Bharathidaasan Matric. hr. sec. School, Kanchipuram</p>
    <p className="text-gray-300 font-medium">Percentage: <span className="text-cyan-400 font-bold">93.2</span></p>
  </div>*/}
</section>


      {/* Projects Section with Toggle */}
<section id="projects" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black px-6">
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl font-bold text-center mb-4 text-cyan-400 font-poppins"
  >
    Project Spotlight
  </motion.h2>

  <p className="text-center text-lg text-gray-400 mb-8 max-w-3xl mx-auto font-poppins">
    A glimpse of some exciting projects I've built during my engineering journey.
  </p>

  {/* Toggle Switch */}
  <div className="flex justify-center space-x-6 mb-12">
    {["Core", "IT"].map((cat) => (
      <button
        key={cat}
        onClick={() => setActiveCategory(cat)}
        className={`px-6 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-300
          ${
            activeCategory === cat
              ? "bg-cyan-400 text-black border-cyan-400"
              : "text-cyan-400 border-cyan-400 hover:bg-cyan-500 hover:text-black"
          }`}
      >
        {cat} Projects
      </button>
    ))}
  </div>

  {/* Filtered Projects Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {projectData
      .filter((p) => p.category === activeCategory)
      .map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          className="relative group rounded-xl overflow-hidden shadow-lg bg-gray-900 border border-gray-700"
        >
          <div
            className="h-48 bg-cover bg-center transition-all duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl" />
          <div className="p-5 relative z-10">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-4">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2 bg-cyan-500 text-black font-semibold rounded-md hover:bg-pink-500 hover:text-white transition duration-300"
            >
              View Project <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      ))}
  </div>

  <div className="text-center mt-16">
    <a
      href="https://github.com/Karthigeyan06"
      target="_blank"
      className="inline-flex items-center gap-1 px-10 py-3 text-black font-bold bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg hover:from-pink-500 hover:to-purple-600 hover:text-white transition-transform transform hover:scale-105"
    >
      Explore More Projects on GitHub <ArrowUpRight className="w-4 h-4" />
    </a>
  </div>
</section>

{/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-6 text-cyan-400"
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
        <div className="p-6 bg-gray-800 shadow-md rounded-2xl">
            <h3 className="text-2xl font-semibold text-cyan-400">embedUR Systems</h3>
            <p className="text-gray-400">Project Intern | Nov 2025 – Present</p>
            <p className="mt-2 text-gray-400">Linux, IIoT & IEE 802.11</p>
          </div>
        <div className="p-6 bg-gray-800 shadow-md rounded-2xl">
            <h3 className="text-2xl font-semibold text-cyan-400">Kreotix Innovations</h3>
            <p className="text-gray-400">Technical Lead | Feb 2025 – May 2025</p>
            <p className="mt-2 text-gray-400">Managing and executing all technical activities of the startup, including website development, client solutions, and project implementation.</p>
          </div>
          <div className="p-6 bg-gray-800 shadow-md rounded-2xl">
            <h3 className="text-2xl font-semibold text-cyan-400">Delphi-TVS Technologies Limited</h3>
            <p className="text-gray-400">Engineering Intern | Dec 2024 – Jan 2025</p>
            <p className="mt-2 text-gray-400">Worked on machine troubleshooting, PLC programming, and CNC maintenance. Developed a QR code-based web app to track machine data.</p>
          </div>
          <div className="p-6 bg-gray-800 shadow-md rounded-2xl">
            <h3 className="text-2xl font-semibold text-cyan-400">Rook Ecom Pvt Ltd</h3>
            <p className="text-gray-400">Techie Intern | Jan 2023 – Apr 2023</p>
            <p className="mt-2 text-gray-400">Enhanced WordPress websites and optimized user experience.</p>
          </div>

          
        </div>
      </section>

<section id="certifications" className="py-16 px-4 bg-white dark:bg-gray-900">
  <div className="max-w-6xl mx-auto">
    <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-6 text-cyan-400"
        >
          Certifications
        </motion.h2>
    <div className="grid md:grid-cols-2 gap-8">
      {certificationData.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-1">
            {cert.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Platform: <span className="font-medium">{cert.platform}</span>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Issuer: <span className="font-medium">{cert.issuer}</span>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Year: <span className="font-medium">{cert.year}</span>
          </p>
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-4 px-3 py-1 bg-cyan-500 text-black font-semibold rounded-md hover:bg-pink-500 hover:text-white transition duration-300"
          >
            View Certificate <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      


      {/* Skills Section */}
<section id="skills" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black px-6">
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl font-bold text-center mb-12 text-cyan-400 font-poppins"
  >
    Skills
  </motion.h2>

  <div className="space-y-20 max-w-7xl mx-auto text-center">
    {[
      {
        title: "Programming Languages & Database",
        skills: [
          { name: "Python", img: pythonImg },
          { name: "C", img: cImg },
          { name: "Verilog", img: verilogImg },
          { name: "MATLAB", img: matlabImg },
          { name: "C#", img: csharpImg },
          { name: ".NET", img: dotnetImg },
          { name: "SQL", img: sqlImg },
          { name: "HTML", img: htmlImg },
          { name: "CSS", img: cssImg },
          { name: "JavaScript", img: javascriptImg },
          { name: "Java", img: javaImg }, // Added Java to the skills list
        ],
      },
      {
        title: "Microcontrollers & Boards",
        skills: [
          { name: "Raspberry Pi", img: piImg },
          { name: "Arduino Uno", img: arduinoUnoImg },
          { name: "Arduino Nano", img: arduinoNanoImg },
          { name: "Raspberry Pi Pico", img: raspberryPiPicoImg },
          { name: "STM32 Blue Pill", img: stm32BluePillImg },
          { name: "ESP8266", img: esp8266Img },
          { name: "ESP32", img: esp32Img },
        ],
      },
      {
        title: "PLCs",
        skills: [
          { name: "Mitsubishi", img: mitsubishiImg },
          { name: "Siemens", img: siemensImg },
          { name: "Delta", img: deltaImg },
        ],
      },
      {
        title: "Tools",
        skills: [
          { name: "Multisim", img: multisimImg },
          { name: "Quartus", img: quartusImg },
          { name: "EasyEDA", img: easyEDAImg },
          { name: "LabVIEW", img: labVIEWImg },
          { name: "Arduino IDE", img: arduinoIDEImg },
          { name: "STM32CUBEIDE", img: stm32CUBEIDEImg },
          { name: "Simatic Manager", img: simaticManagerImg },
          { name: "ISPSoft", img: ispSoftImg },
          { name: "KICAD", img: kicadImg },
          { name: "KEIL UVISION", img: keilImag },
          { name: "Linux", img: linuxImg },
          { name: "GIT", img: gitImg },
          { name: "FUSION360", img: fImg } // Added Linux to the skills list
        ],
      },
    ].map((category, idx) => (
      <div key={idx}>
        <h3 className="text-2xl font-semibold text-cyan-400 mb-8 font-poppins">
          {category.title}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {category.skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-xl shadow-md"
            >
              <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-3 object-contain" />
              <p className="text-gray-300 text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>




     {/* Contact Section */}
<section id="contact" className="py-20 bg-black px-8">
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl font-bold text-center mb-12 text-cyan-400"
  >
    Contact Me
  </motion.h2>



  {/* Catchy Line with Pulse and Neon Glow */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      scale: [1, 1.1, 1],
      textShadow: [
        "0 0 5px rgba(0, 255, 255, 0.7)",
        "0 0 10px rgba(0, 255, 255, 0.7)",
        "0 0 15px rgba(0, 255, 255, 0.7)"
      ]
    }}
    transition={{ duration: 1, repeat: 0 }}
    className="text-xl text-center text-gray-300 mb-8"
  >
    I’d Love to Hear From You – Let’s Get Started and Build Something Together!
  </motion.p>

  <div className="flex justify-center space-x-8">
    <a href="mailto:karthigeyanganesan06@gmail.com" className="text-gray-400 hover:text-cyan-400 transition">
      <Mail size={36} />
    </a>
    <a href="https://www.linkedin.com/in/karthigeyan-ganesan-203066257/" target="_blank" className="text-gray-400 hover:text-cyan-400 transition">
      <Linkedin size={36} />
    </a>
    <a href="https://github.com/Karthigeyan06" target="_blank" className="text-gray-400 hover:text-cyan-400 transition">
      <Github size={36} />
    </a>
    <a href="tel:+918428804975" target="_blank" className="text-gray-400 hover:text-cyan-400 transition">
      <Phone size={36} />
    </a>

  </div>
</section>



      {/* Footer */}
      <footer className="py-6 bg-black text-center text-gray-500 border-t border-gray-700">
        &copy; 2025 Karthigeyan Ganesan. All rights reserved.
      </footer>
    </div>
  );
}
