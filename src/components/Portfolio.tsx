import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Youtube,
  Play,
} from "lucide-react";
import colabImg from "/images/colab.png";
import gameImg from "/images/game.png";
import reciper from "/images/reciper.png";
import goodstatusImg from "/images/goodstatus.png";
import feedbackImg from "/images/feedback.png";
import nasaImg from "/images/nasa.png";
import predictiveImg from "/images/predictive.png";

const Portfolio = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [visibleRoles, setVisibleRoles] = useState([]);
  const [visibleAcademics, setVisibleAcademics] = useState([]);
  const [page, setPage] = useState(0);
  const [tab, setTab] = useState("projects");
  const [canContinue, setCanContinue] = useState(false);
  const [showInstruction, setShowInstruction] = useState(true);
  const [pacmanPosition, setPacmanPosition] = useState({ x: 0, y: 0 });
  const [collectedDots, setCollectedDots] = useState([]);

  const roles = [
    "Software Engineer",
    "Product Manager",
    "Data Analyst",
    "UX Researcher",
    "Technical Writer",
  ];

  const academics = [
    "I'm currently a senior at Stanford University, concentrating in Human Computer Interaction with a Master's in Management Science & Engineering.",
    "I combine technical expertise with creative problem-solving to build impactful software solutions and drive innovation through research and design.",
  ];

  const projects = [
    {
      title: "CoLab - Project Matching Platform",
      description: (
        <>
          <p className="mb-4">
            Developed Co-Lab, a sophisticated project-matching platform for the
            Stanford community that addresses coordination opacity in
            collaborative initiatives.
          </p>
          <p className="mb-4">
            <strong>Key Features:</strong> Stanford SSO authentication,
            personalized feed ranking, real-time search filtering, and instant
            project publishing with Firestore integration.
          </p>
          <p className="mb-4">
            <strong>Impact:</strong> Streamlined collaboration formation through
            intelligent tag-based matching and real-time updates.
          </p>
        </>
      ),
      image: colabImg,
      link: "https://docs.google.com/document/d/1eUh4dupSBPem_IHob-TmjJpwT7SyMwYNfNYKqOo1KVM/edit?usp=sharing",
      tech: ["React", "TypeScript", "Firebase", "Node.js"],
    },
    {
      title: "Last Dive - Interactive Game Experience",
      description: (
        <>
          <p className="mb-4">
            Created an immersive escape-room-in-a-box experience featuring a
            hijacked submarine scenario with integrated digital and physical
            gameplay elements.
          </p>
          <p className="mb-4">
            <strong>Technical Implementation:</strong> Built with React and
            TypeScript, featuring environmental condition management, automated
            puzzle validation, and seamless game flow without requiring a game
            master.
          </p>
          <p className="mb-4">
            <strong>Innovation:</strong> Successfully bridged physical and
            digital gaming to enhance immersion and challenge complexity.
          </p>
        </>
      ),
      image: gameImg,
      link: "https://mechanicsofmagic.com/2025/06/07/p2-last-dive-group-21/",
      tech: ["React", "TypeScript", "Game Design", "UX/UI"],
    },
    {
      title: "Good Status - Wellbeing Application",
      description: (
        <>
          <p className="mb-4">
            Developed a comprehensive wellbeing application with social
            features, AI-powered responses, and secure user authentication.
          </p>
          <p className="mb-4">
            <strong>Features:</strong> Social status sharing, AI-generated
            wellness recommendations via Gemini API, friend networking, and
            personalized wellbeing tasks.
          </p>
          <p className="mb-4">
            <strong>Backend:</strong> Implemented robust database architecture
            using Supabase with advanced SQL queries and Row Level Security
            policies.
          </p>
        </>
      ),
      image: goodstatusImg,
      link: "https://github.com/MaimunaMuntaha/GoodStatus.git",
      tech: ["React", "SQL", "Supabase", "Gemini API"],
    },
    {
      title: "Voice Feedback Systems Research",
      description: (
        <>
          <p className="mb-4">
            Conducted comprehensive HCI research investigating the impact of
            user involvement in error detection and correction on transcription
            accuracy.
          </p>
          <p className="mb-4">
            <strong>Methodology:</strong> Developed and evaluated three voice
            dictation system variations with different feedback mechanisms using
            Python and advanced audio processing.
          </p>
          <p className="mb-4">
            <strong>Results:</strong> Post-transcription feedback achieved 99.1%
            proper noun accuracy, significantly improving accessibility for
            screenless and hands-free environments.
          </p>
        </>
      ),
      image: feedbackImg,
      link: "https://github.com/matthewjguck/audio.git",
      tech: ["Python", "Audio Processing", "HCI Research", "Data Analysis"],
    },
    {
      title: "Voice Controlled Cooking Site",
      description: (
        <>
          <p className="mb-4">
            Whenever I cook, I always get my hands dirty, and consequently, my
            hands. I wanted to build something where you can save your recipes
            and use voice dictation to see the steps of the recipe to follow
            without having to touch my device.
          </p>
          <p className="mb-4">
            <strong>Methodology:</strong> I used audio libraries to listen when
            the cook was speaking, and whenever the computer processed the words
            "next step," the next step of the recipe would appear
          </p>
        </>
      ),
      image: reciper,
      link: " https://superlative-biscuit-187621.netlify.app/",
      tech: ["React", "Voice Dictation", "TypeScript", "AI"],
    },
    {
      title: "NASA Climate Research - ML Model",
      description: (
        <>
          <p className="mb-4">
            Analyzed relationships between air temperature and land surface
            temperature using NASA MODIS data across global and NYC-specific
            scales as part of the CCRI Team.
          </p>
          <p className="mb-4">
            <strong>Scale:</strong> Processed data from 227 global stations and
            8 NYC locations, incorporating thermal imaging and machine learning
            for predictive modeling.
          </p>
          <p className="mb-4">
            <strong>Impact:</strong> Advanced climate change research while
            engaging high school students and environmental justice
            organizations in hands-on scientific inquiry.
          </p>
        </>
      ),
      image: nasaImg,
      link: "#",
      tech: ["Machine Learning", "Python", "Climate Data", "Research"],
    },
    {
      title: "Predictive Policing Analysis",
      description: (
        <>
          <p className="mb-4">
            Recreated and analyzed predictive policing models using NYPD
            historical data to examine algorithmic bias in law enforcement
            applications.
          </p>
          <p className="mb-4">
            <strong>Methodology:</strong> Applied Bayesian statistical concepts
            with NYC demographic data to calculate crime probability
            distributions across neighborhoods.
          </p>
          <p className="mb-4">
            <strong>Findings:</strong> Identified systematic biases targeting
            socioeconomically disadvantaged areas, demonstrating how AI inherits
            historical discrimination patterns.
          </p>
        </>
      ),
      image: predictiveImg,
      link: "https://docs.google.com/document/d/14siQDmsjhZkG6QzkFAdnJHYDLw2Ak-LJxtBof_Qxu3g/edit?usp=sharing",
      tech: ["Python", "Bayesian Statistics", "Data Analysis", "Ethics in AI"],
    },
  ];

  const hobbies = [
    {
      title: "Filmmaking",
      description: (
        <>
          <p className="mb-4">
            I have vlogged my entire life, mainly for myself and for the
            enjoyment of my friends. Here's a vlog of my last week as a
            sophomore at Stanford:
          </p>
          <div className="aspect-video bg-black rounded-lg flex items-center justify-center mb-4 border-2 border-yellow-400">
            <div className="text-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bPIsqNQ04Wc?si=G5D74TUJkDo2jeLh"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <p className="mb-4">
            I also LOVE FILM ANALYSIS!!!{" "}
            <a
              href="https://letterboxd.com/maimunam/"
              className="text-yellow-400 underline"
            >
              Check out my LetterBoxd
            </a>
          </p>
        </>
      ),
      image: "/images/film.png",
      link: "https://www.youtube.com/@mussvlogs",
      tech: ["Video Editing", "Storytelling", "Creative Direction"],
    },
    {
      title: "Visual Arts & Painting",
      description: (
        <>
          <p className="mb-4">
            Long-standing passion for visual expression through various painting
            mediums, exploring themes of identity, nature, and human experience.
          </p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <img
              src="/images/painting1.png"
              alt="Painting 1"
              className="aspect-square object-cover rounded border-2 border-yellow-400"
            />
            <img
              src="/images/painting2.png"
              alt="Painting 2"
              className="aspect-square object-cover rounded border-2 border-yellow-400"
            />
            <img
              src="/images/painting3.png"
              alt="Painting 3"
              className="aspect-square object-cover rounded border-2 border-yellow-400"
            />
          </div>

          <p className="text-sm text-cyan-300 font-mono">
            Portfolio includes landscape studies, abstract compositions, and
            portrait work developed over years of artistic practice.
          </p>
        </>
      ),
      image: "/images/painting.png",
      link: "#",
      tech: ["Traditional Media", "Digital Art", "Color Theory"],
    },
    {
      title: "Creative Writing & Literature",
      description: (
        <>
          <p className="mb-4">
            I studied abroad at Oxford University for Winter (Hilary) term in
            2025 and I did my tutorial in Creative Writing. I wrote different
            types of stories like science fiction and memoirs.
          </p>

          <p className="text-sm text-cyan-300 font-mono">
            I do love creative writing, I have written many different songs and
            short stories.
          </p>
          <p className="text-sm text-cyan-300 font-mono">
            I also love reading!!!{" "}
            <a
              href="https://www.goodreads.com/user/show/180978233-maimuna-muntaha"
              className="text-yellow-400 underline"
            >
              Here is a link to my Goodreaads
            </a>
          </p>
        </>
      ),
      image: "/images/writing.png",
      link: "#",
      tech: ["Creative Writing", "Literary Analysis", "Narrative Structure"],
    },
  ];

  // Sound effects
  const playSound = (soundType) => {
    // In a real implementation, you would load and play actual sound files
    console.log(`Playing ${soundType} sound`);
  };

  // Pacman cursor follow
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPacmanPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      // Play coin sound on load
      playSound("coin");

      // Show intro section
      setShowIntro(true);

      // Animate roles with Pac-Man collecting dots
      for (let i = 0; i < roles.length; i++) {
        if (cancelled) return;
        await new Promise((res) => setTimeout(res, 800));
        setVisibleRoles((prev) => [...prev, roles[i]]);
        setCollectedDots((prev) => [...prev, i]);
        playSound("chomp");
      }

      // Show academic background
      await new Promise((res) => setTimeout(res, 800));
      for (let i = 0; i < academics.length; i++) {
        if (cancelled) return;
        await new Promise((res) => setTimeout(res, 1000));
        setVisibleAcademics((prev) => {
          if (!prev.includes(academics[i])) {
            return [...prev, academics[i]];
          }
          return prev;
        });
      }

      // Enable navigation
      await new Promise((res) => setTimeout(res, 1000));
      setCanContinue(true);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const pages =
    tab === "hobbies" ? hobbies : tab === "projects" ? projects : [];

  const handleNavigation = (direction) => {
    playSound("wakka");
    if (direction === "next") {
      setPage((p) => p + 1);
    } else {
      setPage((p) => p - 1);
    }
  };

  const handleTabClick = (newTab) => {
    playSound("chomp");
    setTab(newTab);
    setPage(0);
  };

  const handleClick = () => {
    playSound("chomp");
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pacman-maze">
      {/* Custom Pacman Cursor */}
      <div
        className="pacman-cursor fixed pointer-events-none z-50"
        style={{
          left: pacmanPosition.x - 10,
          top: pacmanPosition.y - 10,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-5 h-5 bg-yellow-400 rounded-full relative">
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-black border-b-[10px] border-b-black animate-pulse"></div>
        </div>
      </div>

      {/* Floating Ghosts */}
      <div className="ghost-container fixed inset-0 pointer-events-none z-10">
        <div className="ghost ghost-red" style={{ top: "10%", left: "5%" }}>
          👻
        </div>
        <div className="ghost ghost-blue" style={{ top: "20%", right: "10%" }}>
          👻
        </div>
        <div className="ghost ghost-pink" style={{ bottom: "30%", left: "8%" }}>
          👻
        </div>
        <div
          className="ghost ghost-orange"
          style={{ bottom: "15%", right: "5%" }}
        >
          👻
        </div>
      </div>

      {/* Maze Grid Background */}
      <div className="maze-grid fixed inset-0 opacity-20 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 z-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-cyan-400 neon-glow shadow-2xl">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQHSj4djTIIEZQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701149980435?e=1756339200&v=beta&t=_paAmPYIVNj67bV6Yxw_Mpa-qU3YcFvOHPnVkgo6NIk"
                alt="Maimuna Muntaha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="neon-wrapper">
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6 pixel-font neon-text">
              MAIMUNA MUNTAHA
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-cyan-300 font-mono">
            &gt; HUMAN_COMPUTER_INTERACTION • STANFORD_UNIVERSITY &lt;
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      {showIntro && (
        <section className="py-20 px-4 relative z-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-16 pixel-font neon-text">
              MY SKILLS
            </h2>

            <div className="grid md:grid-cols-5 gap-6 mb-16">
              {roles.map((role, i) => (
                <div
                  key={i}
                  className={`arcade-card p-6 text-center transform transition-all duration-500 hover:scale-105 ${
                    visibleRoles.includes(role) ? "animate-bounce" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  <div className="text-2xl mb-2">
                    {collectedDots.includes(i) ? "🟡" : "⚫"}
                  </div>
                  <div className="text-sm font-mono text-cyan-300 font-bold">
                    {role.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-6">
              {visibleAcademics.map((line, i) => (
                <p
                  key={i}
                  className="text-lg md:text-xl text-green-400 leading-relaxed opacity-0 font-mono animate-fade-in"
                  style={{
                    animationDelay: `${
                      visibleRoles.length * 0.2 + i * 0.5 + 0.5
                    }s`,
                    animationFillMode: "forwards",
                  }}
                >
                  &gt; {line}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Navigation */}
      {canContinue && (
        <section className="py-20 px-4 relative z-20">
          <div className="max-w-6xl mx-auto">
            {showInstruction && (
              <div className="arcade-instruction-box mb-8 text-center p-6">
                <p className="text-cyan-300 mb-4 font-mono">
                  &gt; NAVIGATE_THROUGH_ARCADE_SECTIONS_BELOW &lt;
                </p>
                <button
                  onClick={() => {
                    setShowInstruction(false);
                    handleClick();
                  }}
                  className="arcade-button"
                >
                  START_GAME
                </button>
              </div>
            )}

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="arcade-cabinet-frame p-2 flex space-x-2">
                {["projects", "hobbies", "about"].map((t) => (
                  <button
                    key={t}
                    className={`arcade-button ${tab === t ? "active" : ""}`}
                    onClick={() => handleTabClick(t)}
                  >
                    {t.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Display - Arcade Cabinet */}
            <div className="arcade-cabinet">
              {tab !== "about" ? (
                <div className="arcade-screen">
                  {/* Image Section */}
                  <div className="screen-left">
                    <img
                      src={pages[page]?.image}
                      alt={pages[page]?.title}
                      className="w-full h-full object-cover pixel-border"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="screen-right">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 pixel-font">
                        {pages[page]?.title}
                      </h3>
                      <div className="text-cyan-300 leading-relaxed mb-6 font-mono text-sm">
                        {pages[page]?.description}
                      </div>

                      {/* Tech Stack */}
                      {pages[page]?.tech && (
                        <div className="mb-6">
                          <h4 className="font-bold text-green-400 mb-2 font-mono">
                            TECH_STACK:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {pages[page].tech.map((tech, i) => (
                              <span key={i} className="power-up-badge">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Project Link */}
                      {pages[page]?.link && pages[page].link !== "#" && (
                        <a
                          href={pages[page].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="arcade-button inline-flex items-center"
                          onClick={handleClick}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          VIEW_PROJECT
                        </a>
                      )}
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between items-center mt-8">
                      <button
                        onClick={() => handleNavigation("prev")}
                        disabled={page === 0}
                        className="nav-button"
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        PREV
                      </button>

                      <span className="text-sm text-yellow-400 font-mono">
                        LEVEL {page + 1} / {pages.length}
                      </span>

                      <button
                        onClick={() => handleNavigation("next")}
                        disabled={page === pages.length - 1}
                        className="nav-button"
                      >
                        NEXT
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* About Section */
                <div className="arcade-screen">
                  <div className="screen-left">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-cyan-400 neon-glow shadow-2xl">
                      <img
                        src="/images/me.png"
                        alt="Maimuna Muntaha"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="screen-right">
                    <h3 className="text-3xl font-bold text-yellow-400 mb-6 pixel-font">
                      PLAYER PROFILE
                    </h3>

                    <div className="mt-6">
                      <h4 className="font-bold text-green-400 mb-3 font-mono">
                        EDUCATION STATS:
                      </h4>
                      <p className="text-cyan-300 font-mono text-sm">
                        <strong className="text-yellow-400">
                          STANFORD UNIVERSITY
                        </strong>
                        <br />
                        &gt; B.S. Human-Computer Interaction
                        <br />
                        &gt; M.S. Management Science & Engineering
                      </p>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-bold text-green-400 mb-3 font-mono">
                        BONUS SIDE QUEST:
                      </h4>
                      <p className="text-cyan-300 font-mono text-sm">
                        <strong className="text-yellow-400">
                          OXFORD UNIVERSITY
                        </strong>
                        <br />
                        &gt; Creative Writing Tutorial (Winter 2025)
                      </p>
                      <p className="text-cyan-300 font-mono text-sm">
                        <strong className="text-yellow-400">Bonus:</strong>
                        <br />
                        &gt; Attended YC's First AI Startup School in 2025
                        <br />
                        <br />
                        &gt; Questbridge College Prep Scholar and National
                        College Match Award Recipient
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Resume Section */}
      {/* Resume Section */}
      <section className="py-20 px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 pixel-font neon-text">
            PLAYER_STATS_and_EXPERIENCES
          </h2>
          <div className="arcade-cabinet-frame p-8 mb-8">
            <div className="aspect-[8.5/11] bg-black rounded border-4 border-cyan-400 flex items-center justify-center overflow-hidden">
              <img
                src="/images/resume.png"
                alt="Resume Preview"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <a
            href="/images/resume.png"
            download="Maimuna_Muntaha_Resume.png"
            className="arcade-button inline-flex items-center"
            onClick={handleClick}
          >
            <Download className="w-4 h-4 mr-2" />
            DOWNLOAD_STATS
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t-4 border-yellow-400 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-lg font-bold text-yellow-400 pixel-font">
                MAIMUNA MUNTAHA
              </p>
              <p className="text-cyan-300 font-mono">
                © {new Date().getFullYear()} ALL_RIGHTS_RESERVED
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/maimuna-muntaha"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                onClick={handleClick}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/MaimunaMuntaha"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                onClick={handleClick}
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@mussvlogs"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                onClick={handleClick}
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .pixel-font {
          font-family: 'Press Start 2P', monospace;
        }
        
        .pacman-maze {
  background-color: black;
  background-image: 
    radial-gradient(circle at 25% 25%, #0066cc 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, #0066cc 2px, transparent 2px);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
}

        
        .maze-grid {
          background-image: 
            linear-gradient(0deg, #001122 1px, transparent 1px),
            linear-gradient(90deg, #001122 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .neon-glow {
          box-shadow: 
            0 0 10px #00ffff,
            0 0 20px #00ffff,
            0 0 40px #00ffff;
        }
        
        .neon-text {
  text-shadow: 
    0 0 3px #ffff00,
    0 0 6px #ffff00,
    0 0 12px #ffff00; /* LESS than 20px */
}
.neon-wrapper {
  background-color: rgba(0, 0, 0, 0.6); /* semi-transparent black */
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

        
        .arcade-card {
          background: linear-gradient(135deg, #001122, #002244);
          border: 3px solid #00ffff;
          border-radius: 10px;
          box-shadow: 
            0 0 10px #00ffff,
            inset 0 0 10px rgba(0, 255, 255, 0.1);
        }
        
        .arcade-button {
          background: linear-gradient(135deg, #ffff00, #ffaa00);
          border: 3px solid #ff0080;
          border-radius: 8px;
          color: #000;
          font-family: 'Press Start 2P', monospace;
          font-size: 12px;
          font-weight: bold;
          padding: 12px 20px;
          text-transform: uppercase;
          transition: all 0.2s;
          cursor: pointer;
          box-shadow: 
            0 4px 0 #cc0066,
            0 0 10px #ff0080;
        }
        
        .arcade-button:hover {
          transform: translateY(2px);
          box-shadow: 
            0 2px 0 #cc0066,
            0 0 15px #ff0080;
        }
        
        .arcade-button:active {
          transform: translateY(4px);
          box-shadow: 
            0 0 0 #cc0066,
            0 0 20px #ff0080;
        }
        
        .arcade-button.active {
          background: linear-gradient(135deg, #00ff00, #00cc00);
          border-color: #ffff00;
          box-shadow: 
            0 4px 0 #cccc00,
            0 0 15px #00ff00;
        }
        
        .arcade-cabinet {
          background: linear-gradient(135deg, #002244, #001122);
          border: 4px solid #00ffff;
          border-radius: 15px;
          box-shadow: 
            0 0 20px #00ffff,
            inset 0 0 20px rgba(0, 255, 255, 0.1);
          overflow: hidden;
        }
        
        .arcade-cabinet-frame {
          background: linear-gradient(135deg, #333, #111);
          border: 3px solid #ffff00;
          border-radius: 10px;
          box-shadow: 
            0 0 15px #ffff00,
            inset 0 0 15px rgba(255, 255, 0, 0.1);
        }
        
        .arcade-screen {
          display: flex;
          min-height: 600px;
        }
        
        .screen-left {
          flex: 1;
          background: #000;
          border-right: 2px solid #00ffff;
        }
        
        .screen-right {
          flex: 1;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(135deg, #001122, #002244);
        }
        
        .pixel-border {
          border: 2px solid #00ffff;
          image-rendering: pixelated;
        }
        
        .power-up-badge {
          background: linear-gradient(135deg, #ff0080, #cc0066);
          border: 2px solid #ffff00;
          border-radius: 6px;
          color: #fff;
          font-family: 'Press Start 2P', monospace;
          font-size: 8px;
          padding: 4px 8px;
          text-transform: uppercase;
          box-shadow: 0 0 5px #ff0080;
        }
        
        .nav-button {
          background: linear-gradient(135deg, #00ff00, #00cc00);
          border: 2px solid #ffff00;
          border-radius: 6px;
          color: #000;
          display: flex;
          align-items: center;
          font-family: 'Press Start 2P', monospace;
          font-size: 10px;
          font-weight: bold;
          padding: 8px 12px;
          text-transform: uppercase;
          transition: all 0.2s;
          cursor: pointer;
        }
        
        .nav-button:hover:not(:disabled) {
          box-shadow: 0 0 10px #00ff00;
          transform: scale(1.05);
        }
        
        .nav-button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        
        .social-link {
          color: #00ffff;
          transition: all 0.2s;
        }
        
        .social-link:hover {
          color: #ffff00;
          transform: scale(1.2);
          filter: drop-shadow(0 0 5px #ffff00);
        }
        
        .arcade-instruction-box {
          background: linear-gradient(135deg, #001122, #002244);
          border: 3px solid #ffff00;
          border-radius: 10px;
          box-shadow: 
            0 0 15px #ffff00,
            inset 0 0 15px rgba(255, 255, 0, 0.1);
        }
        
        .ghost {
          font-size: 2rem;
          animation: float 3s ease-in-out infinite;
          position: absolute;
        }
        
        .ghost-red { color: #ff0000; animation-delay: 0s; }
        .ghost-blue { color: #0080ff; animation-delay: 0.5s; }
        .ghost-pink { color: #ff80ff; animation-delay: 1s; }
        .ghost-orange { color: #ff8000; animation-delay: 1.5s; }
        
        .pacman-cursor .w-5 {
          animation: chomp 0.5s infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes chomp {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(45deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out;
        }
        
        @media (max-width: 768px) {
          .arcade-screen {
            flex-direction: column;
          }
          
          .screen-left {
            border-right: none;
            border-bottom: 2px solid #00ffff;
            height: 250px;
          }
          
          .screen-right {
            padding: 1rem;
          }
          
          .pixel-font {
            font-size: 8px;
          }
          
          .arcade-button {
            font-size: 8px;
            padding: 8px 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
