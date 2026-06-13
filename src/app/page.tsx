"use client";

import React, { useState, useEffect } from "react";
import { 
  MapPin, 
  Copy, 
  Check, 
  ArrowRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./components/Icons";

const sections = ["about", "experience", "projects", "skills"];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const copyEmail = () => {
    navigator.clipboard.writeText("zainurroziqin38@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Sistem Absensi QR Code",
      description: "Sistem pencatatan kehadiran terintegrasi berbasis QR Code untuk kegiatan Mastamaru Universitas Muhammadiyah Ponorogo. Memudahkan panitia memantau kehadiran secara real-time.",
      tags: ["Laravel", "PHP", "Bootstrap", "MySQL"],
      link: "https://github.com/Inur123?tab=repositories",
    },
    {
      title: "Backend Sistem GrilyPOPS",
      description: "Pengembangan modul backend RESTful API untuk aplikasi edukasi kesehatan menstruasi, dilengkapi data game, sistem level, kuis interaktif, dan panel admin.",
      tags: ["Laravel", "PHP", "MySQL", "REST API"],
      link: "https://github.com/Inur123?tab=repositories",
    },
    {
      title: "Laci Pelajar NU Magetan",
      description: "Platform web terpusat untuk database organisasi PC IPNU IPPNU Kabupaten Magetan guna mengotomatisasi surat-menyurat dan pendataan anggota baru.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      link: "https://laci.pelajarnumagetan.or.id/",
    },
    {
      title: "Website HMI Cabang Ponorogo",
      description: "Website portal informasi organisasi, portal berita, dan administrasi database keanggotaan HMI Ponorogo secara digital.",
      tags: ["Laravel", "Livewire", "Tailwind CSS", "MySQL"],
      link: "https://github.com/Inur123?tab=repositories",
    },
    {
      title: "Website Desa Sukowinangun",
      description: "Aplikasi pelayanan publik desa digital mandiri untuk pengajuan surat keterangan warga secara online dilengkapi sistem notifikasi pengumuman.",
      tags: ["Laravel 12", "Tailwind CSS", "MySQL", "Axios"],
      link: "https://github.com/Inur123?tab=repositories",
    },
    {
      title: "Website KUA Gerih Ngawi",
      description: "Portal KUA untuk pendaftaran nikah secara online, publikasi informasi keagamaan, serta integrasi blog manajemen artikel dakwah.",
      tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
      link: "https://github.com/Inur123?tab=repositories",
    },
  ];

  const experiences = [
    {
      role: "Fullstack Developer (Magang)",
      company: "PT Tiga Serangkai Inti Corpora",
      period: "2025 - 2026",
      desc: "Bertanggung jawab merancang dan merawat sistem internal perusahaan. Membangun modul real-time menggunakan Laravel, Livewire, serta memfasilitasi integrasi event streaming Apache Kafka.",
      tags: ["Laravel", "Livewire", "Apache Kafka", "MySQL"],
    },
    {
      role: "Freelance Fullstack Developer",
      company: "Proyek Mandiri / Kontrak",
      period: "2024 - Sekarang",
      desc: "Menyediakan jasa konsultasi dan pengembangan web untuk instansi desa serta organisasi lokal. Membangun absensi QR Code, modul administrasi desa, dan website portal publik.",
      tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Livewire"],
    },
  ];

  const skillsGroup = [
    { title: "Languages & Frameworks", skills: ["PHP", "Laravel", "Livewire", "JavaScript", "Golang (Learning)", "Next.js", "React.js", "Tailwind CSS", "Bootstrap"] },
    { title: "Databases & Tools", skills: ["MySQL", "PostgreSQL", "Git", "Linux VPS", "Nginx", "cPanel"] }
  ];

  return (
    <div className="bg-[#090d16] bg-grid-cyber min-h-screen text-white font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20 lg:px-8">
        <div className="lg:flex lg:justify-between lg:gap-8">
          
          {/* Left Column (Sticky Sidebar) */}
          <header className="lg:sticky lg:top-20 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-0">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-indigo-950/40 text-indigo-400 px-3 py-1 rounded-full border border-indigo-900/30 text-xs font-mono">
                <span>ready_to_build_code: true</span>
              </div>
              
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                  Muhammad Zainur <br />
                  <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Roziqin
                  </span>
                </h1>
                <h2 className="text-lg font-semibold text-slate-100">
                  Laravel Fullstack Developer
                </h2>
                <p className="text-white text-sm leading-relaxed max-w-sm">
                  Fokus pada performa kode yang bersih, integrasi database, dan otomatisasi administrasi web.
                </p>
              </div>

              {/* Dynamic Scroll Indicator Nav */}
              <nav className="hidden lg:block pt-12" aria-label="Navigasi halaman">
                <ul className="space-y-4 w-max font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {sections.map((sec) => (
                    <li key={sec}>
                      <a 
                        href={`#${sec}`}
                        onClick={(e) => { e.preventDefault(); scrollToSection(sec); }}
                        className={`group flex items-center py-2 transition-all cursor-pointer ${
                          activeSection === sec ? "text-indigo-400" : "hover:text-slate-200"
                        }`}
                      >
                        <span className={`mr-4 h-px transition-all bg-current ${
                          activeSection === sec ? "w-16 bg-indigo-400" : "w-8 bg-slate-600 group-hover:w-16"
                        }`} />
                        <span>{sec}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Sidebar Bottom: Contact & Socials */}
            <div className="pt-12 lg:pt-0 space-y-6">
              <div className="flex items-center space-x-3 text-xs text-white font-mono">
                <MapPin className="h-4 w-4 text-indigo-400" />
                <span>Jawa Timur, Indonesia</span>
              </div>
              
              <div className="bg-slate-900/50 border border-slate-800 p-3.5 rounded-2xl max-w-sm flex items-center justify-between shadow-sm">
                <span className="text-xs font-mono text-white truncate pr-2">
                  zainurroziqin38@gmail.com
                </span>
                <button 
                  onClick={copyEmail}
                  className="bg-indigo-650 hover:bg-indigo-600 text-white font-bold px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center space-x-1.5 text-xs shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-white" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex space-x-4 text-slate-450">
                <a href="https://github.com/Inur123?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub Muhammad Zainur Roziqin" className="hover:text-slate-200 transition-colors">
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-zainur-roziqin-8453b130a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Muhammad Zainur Roziqin" className="hover:text-slate-200 transition-colors">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/inurzainur87/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Muhammad Zainur Roziqin" className="hover:text-slate-200 transition-colors">
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </header>

          {/* Right Column (Scrollable Content) */}
          <main className="pt-24 lg:w-1/2 lg:pt-0 space-y-20 lg:space-y-24">
            
            {/* About Section */}
            <section id="about" className="scroll-mt-20 space-y-4">
              <div className="lg:hidden sticky top-0 bg-[#090d16]/80 backdrop-blur-md py-4 z-25 border-b border-slate-900 mb-6">
                <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold">About</h3>
              </div>
              <p className="text-white leading-relaxed">
                Saya adalah Fullstack Developer dengan minat besar pada arsitektur sistem berbasis <strong className="text-white font-semibold">Laravel</strong>. Berfokus pada kemudahan integrasi database, manajemen logika yang terstruktur, dan performa tinggi pada sisi server.
              </p>
              <p className="text-white leading-relaxed">
                Saat ini saya aktif mengeksplorasi ekosistem <strong className="text-white font-semibold">Golang</strong> untuk optimasi backend mikro, serta integrasi modern <strong className="text-white font-semibold">Next.js</strong> untuk memberikan pengalaman antarmuka pengguna (*frontend*) yang cepat dan responsif.
              </p>
            </section>

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-20 space-y-6">
              <div className="lg:hidden sticky top-0 bg-[#090d16]/80 backdrop-blur-md py-4 z-25 border-b border-slate-900 mb-6">
                <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold">Experience</h3>
              </div>
              
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.role} className="group grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 rounded-2xl hover:bg-slate-900/30 border border-transparent hover:border-slate-800/60 hover:shadow-sm transition-all duration-300">
                    <span className="text-xs font-mono text-slate-400 uppercase pt-0.5">{exp.period}</span>
                    <div className="sm:col-span-3 space-y-2">
                      <h4 className="font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                        {exp.role} — <span className="text-emerald-450">{exp.company}</span>
                      </h4>
                      <p className="text-xs text-white leading-relaxed">{exp.desc}</p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.tags.map((t) => (
                          <span key={t} className="bg-slate-850 border border-slate-800 text-[10px] text-indigo-300 px-2 py-0.5 rounded-md font-semibold font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-20 space-y-6">
              <div className="lg:hidden sticky top-0 bg-[#090d16]/80 backdrop-blur-md py-4 z-25 border-b border-slate-900 mb-6">
                <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold">Projects</h3>
              </div>
              
              <div className="space-y-6">
                {projects.map((proj) => (
                  <a 
                    key={proj.title}
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block group p-5 rounded-2xl hover:bg-slate-900/30 border border-transparent hover:border-slate-800/60 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-100 group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                          {proj.title} <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-indigo-450" />
                        </h4>
                      </div>
                      <p className="text-xs text-white leading-relaxed">{proj.description}</p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {proj.tags.map((t) => (
                          <span key={t} className="bg-slate-900 border border-slate-850 text-[9px] text-white px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="scroll-mt-20 space-y-6">
              <div className="lg:hidden sticky top-0 bg-[#090d16]/80 backdrop-blur-md py-4 z-25 border-b border-slate-900 mb-6">
                <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold">Skills</h3>
              </div>
              
              <div className="space-y-6">
                {skillsGroup.map((group) => (
                  <div key={group.title} className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-100 tracking-wide uppercase font-mono">{group.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-medium text-white px-3 py-1.5 rounded-xl hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-12 text-xs text-slate-500 font-mono">
              <p>© {new Date().getFullYear()} Muhammad Zainur Roziqin. Dibuat dengan Next.js &amp; Tailwind CSS.</p>
            </footer>

          </main>

        </div>
      </div>
    </div>
  );
}
