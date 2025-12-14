import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Mail, Linkedin, Github, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import profile from './assets/images/profilev2.jpeg';
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
import project20Image from './assets/images/winp.png';
import project21Image from './assets/images/robot.png';
import project22Image from './assets/images/sha.png';
import project23Image from './assets/images/invt.png';
import project24Image from './assets/images/comm.png';
import project25Image from './assets/images/pipro.jpg';

// Certifications Component - Updated to remove images and use direct links
const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certificationData = [
    {
      title: 'Embedded Software and Hardware Architecture',
      platform: 'Coursera',
      issuer: 'University of Colorado Boulder',
      year: '2025',
      link: 'https://drive.google.com/file/d/1Vv7kVm1sukB6hD3S-OI2CbaN4h73IIBA/view',
      description: 'Comprehensive course on embedded systems design and architecture.',
      featured: true
    },
    {
      title: 'Linux Embedded System Topics and Projects',
      platform: 'Coursera',
      issuer: 'University of Colorado Boulder',
      year: '2025',
      link: 'https://www.coursera.org/account/accomplishments/verify/IFQCV39AJN3U',
      description: 'Hands-on projects and topics in Linux embedded systems.',
      featured: true
    },
    {
      title: 'Networking and Storage Essentials',
      platform: 'EdX',
      issuer: 'IBM',
      year: '2025',
      link: 'https://courses.edx.org/certificates/30d659616d25482587ba61e388391600',
      description: 'Essential knowledge in networking and storage technologies.',
      featured: true
    },
    {
      title: 'System Design Through Verilog',
      platform: 'NPTEL',
      issuer: 'IIT Guwahati',
      year: '2024',
      link: 'https://drive.google.com/file/d/1OKvodhnFReieT9CZurJFrf5dyIrjNDGO/view',
      description: 'System design principles using Verilog hardware description language.',
      featured: true
    },
    // Add other certifications with featured: false
  ];

  const featuredCerts = certificationData.filter(c => c.featured);
  const allCerts = showAll ? certificationData : featuredCerts;

  return (
    <motion.section
      id="certifications"
      ref={ref}
      className="py-12 md:py-16 px-4 md:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-semibold text-center mb-8 text-cyan-400 font-space-grotesk tracking-tight"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {allCerts.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-xl p-2 md:p-3 shadow-lg border border-gray-700 backdrop-blur-sm"
              whileHover={{ y: -2 }}
            >
              <h3 className="text-base font-semibold text-cyan-400 mb-2 font-space-grotesk">{cert.title}</h3>
              <p className="text-gray-300 mb-1 font-poppins text-sm">{cert.platform} | {cert.issuer}</p>
              <p className="text-gray-400 mb-3 font-poppins text-sm">{cert.year}</p>
              <button
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-600 transition-all duration-300 font-poppins text-sm min-h-[36px]"
              >
                View Certificate <ArrowUpRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>
        {!showAll && (
          <div className="text-center mt-8">
            <a
  href="https://karthigeyan06.github.io/myportfolio/certificates.html"
  className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
>
  View All Certifications <ArrowUpRight className="w-4 h-4 ml-2" />
</a>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedCert && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            className="bg-gray-800/90 rounded-xl p-6 max-w-md w-full mx-4 border border-gray-700 backdrop-blur-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-2 font-space-grotesk">{selectedCert.title}</h3>
            <p className="text-gray-300 mb-1 font-poppins">{selectedCert.platform} | {selectedCert.issuer}</p>
            <p className="text-gray-400 mb-3 font-poppins">{selectedCert.year}</p>
            <p className="text-gray-300 mb-4 font-poppins">{selectedCert.description}</p>
            <div className="flex gap-3">
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-600 transition-all duration-300 text-center font-poppins"
              >
                View Certificate
              </a>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 bg-gray-700 text-gray-300 font-semibold rounded-full hover:bg-gray-600 transition-all duration-300 font-poppins"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

// Hero Component
const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.section
      className="min-h-[80vh] md:min-h-screen flex items-center justify-center px-6 md:px-16 py-8 md:py-20 relative"
      style={{ y }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00ffff', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <polygon points="0,0 100,0 100,100 0,100" fill="url(#grad1)" />
        </svg>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] items-center gap-6 md:gap-12 max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:flex justify-center md:justify-end order-2 md:order-2"
        >
          <div className="relative w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-cyan-400/20">
            <img
              src={profile}
              alt="Karthigeyan Ganesan"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center md:text-left order-1 md:order-1"
        >
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 leading-none font-space-grotesk tracking-tight max-w-none">
            Karthigeyan Ganesan
          </h1>
          <div className="w-8 h-1 bg-cyan-400 mx-auto md:mx-0 mb-4 hidden md:block"></div>
          <p className="text-sm md:text-xl lg:text-2xl text-gray-300 mb-4 font-semibold font-space-grotesk hidden md:block">
            Embedded Systems & IoT Engineer
          </p>
          <p className="text-xs md:text-base text-gray-400 mb-4 md:mb-8 max-w-lg mx-auto md:mx-0 font-space-grotesk leading-relaxed hidden md:block">
            Crafting intelligent embedded solutions with cutting-edge technologies in Linux, IoT, and robotics.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center md:justify-start hidden md:flex">
            <a
              href="https://drive.google.com/file/d/1BQfdOsaT9mH6RY5h_pvRsciqSBhTjBFl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl font-space-grotesk text-sm min-h-[36px] flex items-center justify-center"
            >
              View Resume
            </a>
            <a
              href="#projects"
              className="px-3 py-1 md:px-4 md:py-2 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 font-space-grotesk text-sm min-h-[36px] flex items-center justify-center"
            >
              View Projects
            </a>
          </div>
          <div className="md:hidden flex justify-between items-center mt-4">
            <div className="text-left">
              <p className="text-sm text-gray-300 mb-2 font-semibold font-space-grotesk">
                Embedded Systems & IoT Engineer
              </p>
              <p className="text-xs text-gray-400 max-w-xs font-space-grotesk leading-relaxed">
                Crafting intelligent embedded solutions with cutting-edge technologies in Linux, IoT, and robotics.
              </p>
            </div>
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-2xl border-4 border-cyan-400/20 flex-shrink-0">
              <img
                src={profile}
                alt="Karthigeyan Ganesan"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:hidden flex flex-row gap-2 justify-center mt-4">
            <a
              href="https://drive.google.com/file/d/1BQfdOsaT9mH6RY5h_pvRsciqSBhTjBFl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl font-space-grotesk text-sm flex items-center justify-center"
            >
              View Resume
            </a>
            <a
              href="#projects"
              className="px-4 py-1 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 font-space-grotesk text-sm flex items-center justify-center"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// About Component
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      id="about"
      ref={ref}
      className="py-12 md:py-16 px-4 md:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-semibold mb-6 text-cyan-400 font-space-grotesk tracking-tight"
        >
          About Me
        </motion.h2>
        <p className="text-base text-gray-300 mb-6 leading-relaxed font-poppins">
          As an Embedded Systems & IoT Engineer, I specialize in developing robust, scalable solutions for industrial and consumer applications. With expertise in microcontrollers, Linux systems, and computer vision, I bridge the gap between hardware and software to create innovative products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800/50 p-4 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2 font-space-grotesk">Expertise</h3>
            <p className="text-gray-400 font-poppins">Embedded C, Python, OpenCV, Robotics</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2 font-space-grotesk">Passion</h3>
            <p className="text-gray-400 font-poppins">Building intelligent IoT ecosystems</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2 font-space-grotesk">Achievements</h3>
            <p className="text-gray-400 font-poppins">15+ projects, 3 internships, 8.8 CGPA</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Skills Component
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillsData = {
    primary: ['Embedded C', 'Python', 'Linux', 'STM32', 'ESP32', 'Raspberry Pi', 'OpenCV'],
    secondary: ['Arduino', 'PLCs (Siemens, Mitsubishi)', 'MATLAB', 'Verilog', 'SQL', 'Git'],
    tools: ['STM32CubeIDE', 'Arduino IDE', 'KiCad', 'Quartus', 'Multisim', 'Fusion 360']
  };

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="py-12 md:py-16 px-4 md:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-semibold text-center mb-8 text-cyan-400 font-space-grotesk tracking-tight"
        >
          Skills
        </motion.h2>
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 p-6 shadow-xl backdrop-blur-sm">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3 capitalize font-space-grotesk">{category} Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600 hover:bg-cyan-500 hover:text-black transition-all duration-300 cursor-pointer font-poppins"
                    whileHover={{ scale: 1.02 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Projects Component
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showAll, setShowAll] = useState(false);

  const projectData = [
    {
      image: project25Image,
      title: '2D Contour Detection & 3D Depth Mapping System',
      description: 'Raspberry Pi-based system for 2D contour detection and 3D depth mapping using OpenCV.',
      tags: ['Embedded', 'Linux', 'OpenCV', 'IoT'],
      url: 'https://github.com/Karthigeyan06/project9',
      featured: true
    },
    {
      image: project21Image,
      title: 'Internal Logistics Autonomous Robot',
      description: 'Autonomous robot using Raspberry Pi for warehouse navigation with sensors and pathfinding.',
      tags: ['Embedded', 'Linux', 'Robotics', 'IoT'],
      url: 'https://github.com/Karthigeyan06/project1',
      featured: true
    },
    {
      image: project22Image,
      title: 'AI-Based Structural Health Monitoring System',
      description: 'AI-integrated system for structural health monitoring with sensors and ML for failure prediction.',
      tags: ['Embedded', 'IoT', 'AI', 'Robotics'],
      url: 'https://github.com/Karthigeyan06/project1',
      featured: true
    },
    {
      image: project5Image,
      title: 'Autonomous GPS-Based Delivery Robot',
      description: 'GPS-equipped autonomous delivery robot with sensors for secure navigation.',
      tags: ['Embedded', 'IoT', 'Robotics'],
      url: 'https://github.com/Karthigeyan06/project5',
      featured: true
    },
    {
      image: project1Image,
      title: 'Four-Axis Robotic Arm with Precision Control',
      description: 'Four-axis robotic arm controlled by joysticks and mobile for precise tasks.',
      tags: ['Embedded', 'Robotics', 'IoT'],
      url: 'https://github.com/Karthigeyan06/project2',
      featured: true
    },
    {
      image: project8Image,
      title: 'Emergency Communication & Alert System',
      description: 'Portable communication device for disasters with GPS and voice capabilities.',
      tags: ['Embedded', 'IoT', 'Networking'],
      url: 'https://github.com/Karthigeyan06/project8',
      featured: true
    },
    // Add more projects here, marking featured: false for others
    {
      image: project19Image,
      title: 'IPL Auction System Using Python',
      description: 'Python-based IPL auction system for bidding and team management.',
      tags: ['Python', 'IT'],
      url: 'https://github.com/Karthigeyan06/project1',
      featured: false
    },
    {
      image: project20Image,
      title: 'Cricket Match Win Predictor Using Java',
      description: 'Java application predicting cricket match outcomes using historical data and ML algorithms.',
      tags: ['Java', 'ML', 'IT'],
      url: 'https://github.com/Karthigeyan06/project1',
      featured: false
    },
    {
      image: project23Image,
      title: 'Inventory Management System Using Python and Sqlite',
      description: 'Python and SQLite system for inventory tracking, supplier management, and reports.',
      tags: ['Python', 'SQLite', 'IT'],
      url: 'https://github.com/Karthigeyan06/project1',
      featured: false
    },
    {
      image: project24Image,
      title: 'Simulated Message Communication through Network between Machines',
      description: 'Linux-based simulation of message communication between machines using TCP/IP protocols.',
      tags: ['Linux', 'Networking', 'TCP/IP'],
      url: 'https://github.com/Karthigeyan06/project1',
      featured: false
    },
    {
      image: project6Image,
      title: 'Dual-Mode Wireless Rover: Real-Time Control and Environmental Sensing',
      description: 'Arduino-based rover with real-time control and environmental sensing.',
      tags: ['Arduino', 'Robotics', 'IoT'],
      url: 'https://github.com/Karthigeyan06/project6',
      featured: false
    },
    {
      image: project7Image,
      title: 'Automatic Balance System for 2-Wheel Bot Using 3-Axis Gyroscope',
      description: '2-wheel robot balancing system using 3-axis gyroscope for stability.',
      tags: ['Embedded', 'Robotics', 'IoT'],
      url: 'https://github.com/Karthigeyan06/project7',
      featured: false
    },
    {
      image: project10Image,
      title: 'Moon Phase Detector Using Python and OpenCV',
      description: 'Python program detecting moon phases using OpenCV and ML.',
      tags: ['Python', 'OpenCV', 'ML'],
      url: 'https://github.com/Karthigeyan06/project9',
      featured: false
    },
    {
      image: project11Image,
      title: 'ElectroRookie: A Calculator',
      description: 'Python-based calculator for electronics calculations.',
      tags: ['Python', 'Calculator', 'IT'],
      url: 'https://github.com/Karthigeyan06/project9',
      featured: false
    },
    {
      image: project12Image,
      title: 'Leaf Disease Detection Using Python and OpenCV',
      description: 'Python program detecting leaf diseases using OpenCV and ML.',
      tags: ['Python', 'OpenCV', 'ML'],
      url: 'https://github.com/Karthigeyan06/project9',
      featured: false
    },
    {
      image: project13Image,
      title: 'Library Management System Using Python and MySQL',
      description: 'Python and MySQL system for library book management and reports.',
      tags: ['Python', 'MySQL', 'IT'],
      url: 'https://github.com/Karthigeyan06/project9',
      featured: false
    },
    {
      image: project14Image,
      title: 'Attendance Management System Using Python and MySQL with QR Code',
      description: 'Python and MySQL attendance system with QR code integration.',
      tags: ['Python', 'MySQL', 'QR Code', 'IT'],
      url: 'https://github.com/Karthigeyan06/project9',
      featured: false
    },
    {
      image: project15Image,
      title: 'Audio Player using Python packages',
      description: 'Python audio player with playback controls and user interface.',
      tags: ['Python', 'Audio', 'IT'],
      url: 'https://github.com/Karthigeyan06/project9',
      featured: false
    },
    {
      image: project16Image,
      title: 'Bank Management System Using Python and MySQL',
      description: 'Python and MySQL system for bank account management and transactions.',
      tags: ['Python', 'MySQL', 'Banking', 'IT'],
      url: 'https://github.com/Karthigeyan06/project9',
      featured: false
    },
    {
      image: project17Image,
      title: 'Website for My Youtube Channel',
      description: 'Personal website for YouTube channel using HTML and CSS.',
      tags: ['HTML', 'CSS', 'YouTube'],
      url: 'https://github.com/Karthigeyan06/project9',
      featured: false
    },
    {
      image: project18Image,
      title: 'Website for Kreotix Innovations',
      description: 'Website for Kreotix Innovations using HTML, CSS, and JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Kreotix'],
      url: 'https://github.com/Karthigeyan06/project9',
      featured: false
    },
  ];

  const featuredProjects = projectData.filter(p => p.featured);
  const allProjects = showAll ? projectData : featuredProjects;

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="py-12 md:py-16 px-4 md:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-semibold text-center mb-8 text-cyan-400 font-space-grotesk tracking-tight"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg border border-gray-700 backdrop-blur-sm"
              whileHover={{ y: -2 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-24 md:h-32 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-2 md:p-3">
                <h3 className="text-base font-semibold text-cyan-400 mb-2 font-space-grotesk">{project.title}</h3>
                <p className="text-gray-400 mb-2 font-poppins line-clamp-2 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-gray-700 text-xs text-gray-300 rounded-full font-poppins">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-600 transition-all duration-300 font-poppins text-sm min-h-[36px]"
                >
                  View Project <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        {!showAll && (
          <div className="text-center mt-8">
            <a
  href="https://karthigeyan06.github.io/myportfolio/projects.html"
  className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
>
  View All Projects <ArrowUpRight className="w-4 h-4 ml-2" />
</a>

          </div>
        )}
        {showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(false)}
              className="px-6 py-2 bg-gray-700 text-gray-300 font-semibold rounded-full hover:bg-gray-600 transition-all duration-300 font-poppins"
            >
              Show Featured Only <ChevronUp className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

// Experience Component
const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experienceData = [
    {
      company: 'embedUR Systems',
      role: 'Project Intern',
      duration: 'Nov 2025 – Present',
      achievements: ['Developed Linux-based IIoT solutions', 'Implemented IEEE 802.11 protocols'],
      tech: ['Linux', 'IIoT', 'Networking']
    },
    {
      company: 'Kreotix Innovations',
      role: 'Technical Lead',
      duration: 'Feb 2025 – May 2025',
      achievements: ['Managed website development projects', 'Delivered client solutions'],
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      company: 'Delphi-TVS Technologies Limited',
      role: 'Engineering Intern',
      duration: 'Dec 2024 – Jan 2025',
      achievements: ['Troubleshot industrial machines', 'Developed QR code tracking app'],
      tech: ['PLCs', 'CNC', 'Web Apps']
    },
    {
      company: 'Rook Ecom Pvt Ltd',
      role: 'Techie Intern',
      duration: 'Jan 2023 – Apr 2023',
      achievements: ['Optimized WordPress websites', 'Enhanced user experience'],
      tech: ['WordPress', 'UX']
    }
  ];

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="py-12 md:py-16 px-4 md:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-semibold text-center mb-8 text-cyan-400 font-space-grotesk tracking-tight"
        >
          Experience
        </motion.h2>
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-xl p-3 md:p-4 shadow-lg border border-gray-700 backdrop-blur-sm"
              whileHover={{ y: -2 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-cyan-400 font-space-grotesk">{exp.company}</h3>
                <span className="text-gray-400 font-poppins">{exp.duration}</span>
              </div>
              <p className="text-base text-gray-300 mb-3 font-poppins">{exp.role}</p>
              <ul className="text-gray-400 mb-4 list-disc list-inside font-poppins">
                {exp.achievements.map((ach, achIndex) => (
                  <li key={achIndex}>{ach}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1">
                {exp.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-cyan-500 text-black text-sm rounded-full font-poppins">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Contact Component
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-12 md:py-16 px-4 md:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-semibold mb-8 text-cyan-400 font-space-grotesk tracking-tight"
        >
          Contact
        </motion.h2>
        <p className="text-base text-gray-300 mb-8 font-poppins">
          Ready to collaborate on innovative embedded solutions? Let's connect.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="mailto:karthigeyanganesan06@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <Mail size={32} />
          </a>
          <a href="https://www.linkedin.com/in/karthigeyan-ganesan-203066257/" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <Linkedin size={32} />
          </a>
          <a href="https://github.com/Karthigeyan06" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <Github size={32} />
          </a>
          <a href="tel:+918428804975" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <Phone size={32} />
          </a>
        </div>
        <a
          href="mailto:karthigeyanganesan06@gmail.com"
          className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
        >
          Let's Connect
        </a>
      </div>
    </motion.section>
  );
};

// Navigation Component
const Navigation = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(scrollY.get() > 50);
    const unsubscribe = scrollY.onChange(updateScrolled);
    return unsubscribe;
  }, [scrollY]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 shadow-lg backdrop-blur-sm' : 'bg-black/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400 font-space-grotesk">KG</h1>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors font-poppins">About</a></li>
            <li><a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors font-poppins">Skills</a></li>
            <li><a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors font-poppins">Projects</a></li>
            <li><a href="#experience" className="text-gray-300 hover:text-cyan-400 transition-colors font-poppins">Experience</a></li>
            <li><a href="#certifications" className="text-gray-300 hover:text-cyan-400 transition-colors font-poppins">Certifications</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors font-poppins">Contact</a></li>
          </ul>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeMobileMenu}
        >
          <motion.div
            className="absolute top-16 left-0 right-0 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-sm border-t border-gray-600 shadow-lg"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="py-4 px-4 space-y-4">
              <li><a href="#about" onClick={closeMobileMenu} className="block text-gray-300 hover:text-cyan-400 transition-colors font-poppins py-2">About</a></li>
              <li><a href="#skills" onClick={closeMobileMenu} className="block text-gray-300 hover:text-cyan-400 transition-colors font-poppins py-2">Skills</a></li>
              <li><a href="#projects" onClick={closeMobileMenu} className="block text-gray-300 hover:text-cyan-400 transition-colors font-poppins py-2">Projects</a></li>
              <li><a href="#experience" onClick={closeMobileMenu} className="block text-gray-300 hover:text-cyan-400 transition-colors font-poppins py-2">Experience</a></li>
              <li><a href="#certifications" onClick={closeMobileMenu} className="block text-gray-300 hover:text-cyan-400 transition-colors font-poppins py-2">Certifications</a></li>
              <li><a href="#contact" onClick={closeMobileMenu} className="block text-gray-300 hover:text-cyan-400 transition-colors font-poppins py-2">Contact</a></li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

// Main Portfolio Component
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-gray-300 font-sans">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <footer className="py-8 bg-black text-center text-gray-500 border-t border-gray-700 font-poppins">
        &copy; 2025 Karthigeyan Ganesan. All rights reserved.
      </footer>
    </div>
  );
}