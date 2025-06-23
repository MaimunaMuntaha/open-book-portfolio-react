
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Download, ExternalLink, Github, Linkedin, Youtube, Play } from "lucide-react";

const Portfolio = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [visibleRoles, setVisibleRoles] = useState([]);
  const [visibleAcademics, setVisibleAcademics] = useState([]);
  const [page, setPage] = useState(0);
  const [tab, setTab] = useState("projects");
  const [canContinue, setCanContinue] = useState(false);
  const [showInstruction, setShowInstruction] = useState(true);

  const roles = [
    "Software Engineer",
    "Product Manager", 
    "Data Analyst",
    "UX Researcher",
    "Technical Writer"
  ];

  const academics = [
    "I'm currently a senior at Stanford University, concentrating in Human Computer Interaction with a Master's in Management Science & Engineering.",
    "I combine technical expertise with creative problem-solving to build impactful software solutions and drive innovation through research and design."
  ];

  const projects = [
    {
      title: "CoLab - Project Matching Platform",
      description: (
        <>
          <p className="mb-4">
            Developed Co-Lab, a sophisticated project-matching platform for the Stanford community that addresses coordination opacity in collaborative initiatives.
          </p>
          <p className="mb-4">
            <strong>Key Features:</strong> Stanford SSO authentication, personalized feed ranking, real-time search filtering, and instant project publishing with Firestore integration.
          </p>
          <p className="mb-4">
            <strong>Impact:</strong> Streamlined collaboration formation through intelligent tag-based matching and real-time updates.
          </p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      link: "https://docs.google.com/document/d/1eUh4dupSBPem_IHob-TmjJpwT7SyMwYNfNYKqOo1KVM/edit?usp=sharing",
      tech: ["React", "TypeScript", "Firebase", "Node.js"]
    },
    {
      title: "Last Dive - Interactive Game Experience",
      description: (
        <>
          <p className="mb-4">
            Created an immersive escape-room-in-a-box experience featuring a hijacked submarine scenario with integrated digital and physical gameplay elements.
          </p>
          <p className="mb-4">
            <strong>Technical Implementation:</strong> Built with React and TypeScript, featuring environmental condition management, automated puzzle validation, and seamless game flow without requiring a game master.
          </p>
          <p className="mb-4">
            <strong>Innovation:</strong> Successfully bridged physical and digital gaming to enhance immersion and challenge complexity.
          </p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      link: "https://mechanicsofmagic.com/2025/06/07/p2-last-dive-group-21/",
      tech: ["React", "TypeScript", "Game Design", "UX/UI"]
    },
    {
      title: "Good Status - Wellbeing Application",
      description: (
        <>
          <p className="mb-4">
            Developed a comprehensive wellbeing application with social features, AI-powered responses, and secure user authentication.
          </p>
          <p className="mb-4">
            <strong>Features:</strong> Social status sharing, AI-generated wellness recommendations via Gemini API, friend networking, and personalized wellbeing tasks.
          </p>
          <p className="mb-4">
            <strong>Backend:</strong> Implemented robust database architecture using Supabase with advanced SQL queries and Row Level Security policies.
          </p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      link: "https://github.com/MaimunaMuntaha/GoodStatus.git",
      tech: ["React", "SQL", "Supabase", "Gemini API"]
    },
    {
      title: "Voice Feedback Systems Research",
      description: (
        <>
          <p className="mb-4">
            Conducted comprehensive HCI research investigating the impact of user involvement in error detection and correction on transcription accuracy.
          </p>
          <p className="mb-4">
            <strong>Methodology:</strong> Developed and evaluated three voice dictation system variations with different feedback mechanisms using Python and advanced audio processing.
          </p>
          <p className="mb-4">
            <strong>Results:</strong> Post-transcription feedback achieved 99.1% proper noun accuracy, significantly improving accessibility for screenless and hands-free environments.
          </p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      link: "https://github.com/matthewjguck/audio.git",
      tech: ["Python", "Audio Processing", "HCI Research", "Data Analysis"]
    },
    {
      title: "NASA Climate Research - ML Model",
      description: (
        <>
          <p className="mb-4">
            Analyzed relationships between air temperature and land surface temperature using NASA MODIS data across global and NYC-specific scales as part of the CCRI Team.
          </p>
          <p className="mb-4">
            <strong>Scale:</strong> Processed data from 227 global stations and 8 NYC locations, incorporating thermal imaging and machine learning for predictive modeling.
          </p>
          <p className="mb-4">
            <strong>Impact:</strong> Advanced climate change research while engaging high school students and environmental justice organizations in hands-on scientific inquiry.
          </p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
      link: "#",
      tech: ["Machine Learning", "Python", "Climate Data", "Research"]
    },
    {
      title: "Predictive Policing Analysis",
      description: (
        <>
          <p className="mb-4">
            Recreated and analyzed predictive policing models using NYPD historical data to examine algorithmic bias in law enforcement applications.
          </p>
          <p className="mb-4">
            <strong>Methodology:</strong> Applied Bayesian statistical concepts with NYC demographic data to calculate crime probability distributions across neighborhoods.
          </p>
          <p className="mb-4">
            <strong>Findings:</strong> Identified systematic biases targeting socioeconomically disadvantaged areas, demonstrating how AI inherits historical discrimination patterns.
          </p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      link: "https://docs.google.com/document/d/14siQDmsjhZkG6QzkFAdnJHYDLw2Ak-LJxtBof_Qxu3g/edit?usp=sharing",
      tech: ["Python", "Bayesian Statistics", "Data Analysis", "Ethics in AI"]
    }
  ];

  const hobbies = [
    {
      title: "Digital Storytelling & Filmmaking",
      description: (
        <>
          <p className="mb-4">
            I document life experiences through creative video storytelling, focusing on authentic narratives and personal growth journeys.
          </p>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
            <div className="text-center">
              <Play className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-600">Stanford Sophomore Year Reflection</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Featured: "Last Week as a Sophomore at Stanford" - A reflective vlog capturing pivotal moments in academic and personal development.
          </p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop"
    },
    {
      title: "Visual Arts & Painting",
      description: (
        <>
          <p className="mb-4">
            Long-standing passion for visual expression through various painting mediums, exploring themes of identity, nature, and human experience.
          </p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded"></div>
            <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded"></div>
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded"></div>
          </div>
          <p className="text-sm text-gray-600">
            Portfolio includes landscape studies, abstract compositions, and portrait work developed over years of artistic practice.
          </p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=400&fit=crop"
    },
    {
      title: "Creative Writing & Literature",
      description: (
        <>
          <p className="mb-4">
            Studied Creative Writing at Oxford University during Winter 2025 term, exploring diverse narrative forms including science fiction, memoir, and experimental prose.
          </p>
          <p className="mb-4">
            <strong>Academic Focus:</strong> Tutorial-based learning in various writing genres, developing skills in character development, narrative structure, and literary analysis.
          </p>
          <p className="text-sm text-gray-600">
            This intensive program enhanced my ability to communicate complex ideas through compelling storytelling across multiple mediums.
          </p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    }
  ];

  useEffect(() => {
    let cancelled = false;
    (async () => {
      // Show intro section
      setShowIntro(true);
      
      // Animate roles
      for (let i = 0; i < roles.length; i++) {
        if (cancelled) return;
        await new Promise(res => setTimeout(res, 600));
        setVisibleRoles(prev => [...prev, roles[i]]);
      }
      
      // Show academic background
      await new Promise(res => setTimeout(res, 800));
      for (let i = 0; i < academics.length; i++) {
        if (cancelled) return;
        await new Promise(res => setTimeout(res, 1000));
        setVisibleAcademics(prev => [...prev, academics[i]]);
      }
      
      // Enable navigation
      await new Promise(res => setTimeout(res, 1000));
      setCanContinue(true);
    })();
    
    return () => {
      cancelled = true;
    };
  }, []);

  const pages = tab === "hobbies" ? hobbies : tab === "projects" ? projects : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100 opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-100 opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-200 to-indigo-300 flex items-center justify-center text-6xl font-light text-white shadow-2xl">
              M
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-slate-800 mb-6">
            Maimuna Muntaha
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light">
            Human-Computer Interaction • Stanford University
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      {showIntro && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-center text-slate-800 mb-16">
              Multifaceted Professional
            </h2>
            
            <div className="grid md:grid-cols-5 gap-6 mb-16">
              {visibleRoles.map((role, i) => (
                <div 
                  key={i}
                  className="p-6 bg-white rounded-lg shadow-lg text-center transform transition-all duration-500 hover:scale-105"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="text-lg font-medium text-slate-700">
                    {role}
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-6">
              {visibleAcademics.map((line, i) => (
                <p 
                  key={i} 
                  className="text-lg md:text-xl text-slate-600 leading-relaxed opacity-0"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${(visibleRoles.length * 0.2) + (i * 0.5) + 0.5}s forwards`
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Navigation */}
      {canContinue && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {showInstruction && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-center">
                <p className="text-slate-700 mb-4">
                  Explore my professional work and creative pursuits through the sections below.
                </p>
                <button 
                  onClick={() => setShowInstruction(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-lg shadow-lg p-2 flex space-x-2">
                {["projects", "hobbies", "about"].map((t) => (
                  <button
                    key={t}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      tab === t 
                        ? "bg-blue-600 text-white shadow-md" 
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                    onClick={() => {
                      setTab(t);
                      setPage(0);
                    }}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Display */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {tab !== "about" ? (
                <div className="md:flex min-h-[600px]">
                  {/* Image Section */}
                  <div className="md:w-1/2 bg-slate-100">
                    <img 
                      src={pages[page]?.image} 
                      alt={pages[page]?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-light text-slate-800 mb-6">
                        {pages[page]?.title}
                      </h3>
                      <div className="text-slate-600 leading-relaxed mb-6">
                        {pages[page]?.description}
                      </div>
                      
                      {/* Tech Stack for Projects */}
                      {tab === "projects" && pages[page]?.tech && (
                        <div className="mb-6">
                          <h4 className="font-medium text-slate-700 mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {pages[page].tech.map((tech, i) => (
                              <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Project Link */}
                      {tab === "projects" && pages[page]?.link && pages[page].link !== "#" && (
                        <a 
                          href={pages[page].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      )}
                    </div>
                    
                    {/* Navigation */}
                    <div className="flex justify-between items-center mt-8">
                      <button
                        onClick={() => setPage(p => p - 1)}
                        disabled={page === 0}
                        className="flex items-center px-4 py-2 text-slate-600 hover:text-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Previous
                      </button>
                      
                      <span className="text-sm text-slate-500">
                        {page + 1} of {pages.length}
                      </span>
                      
                      <button
                        onClick={() => setPage(p => p + 1)}
                        disabled={page === pages.length - 1}
                        className="flex items-center px-4 py-2 text-slate-600 hover:text-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Next
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* About Section */
                <div className="md:flex min-h-[600px]">
                  <div className="md:w-1/2 bg-slate-100 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-200 to-indigo-300 flex items-center justify-center text-8xl font-light text-white shadow-2xl">
                      M
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-light text-slate-800 mb-6">About Me</h3>
                    {visibleAcademics.map((line, i) => (
                      <p key={i} className="text-slate-600 leading-relaxed mb-4">
                        {line}
                      </p>
                    ))}
                    <div className="mt-6">
                      <h4 className="font-medium text-slate-700 mb-3">Education</h4>
                      <p className="text-slate-600">
                        <strong>Stanford University</strong><br />
                        B.S. Human-Computer Interaction<br />
                        M.S. Management Science & Engineering
                      </p>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-medium text-slate-700 mb-3">Study Abroad</h4>
                      <p className="text-slate-600">
                        <strong>Oxford University</strong><br />
                        Creative Writing Tutorial (Winter 2025)
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
      <section className="py-20 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-8">
            Professional Resume
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="aspect-[8.5/11] bg-gray-50 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-gray-600">Resume Preview</p>
              </div>
            </div>
          </div>
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-lg font-light">Maimuna Muntaha</p>
              <p className="text-slate-400">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/maimuna-muntaha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/MaimunaMuntaha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/@mussvlogs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default Portfolio;
