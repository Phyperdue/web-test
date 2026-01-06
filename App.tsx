
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Monitor, 
  Code2, 
  User, 
  Send,
  MessageSquare,
  Instagram,
  Terminal,
  Cpu,
  Braces,
  Database,
  Globe,
  Menu,
  X,
  ChevronUp
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, PROJECTS } from './constants';
import { Project, Skill, ContactData } from './types';

// Helper Components
const SectionTitle: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="mb-12 text-center">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    {subtitle && <p className={`max-w-2xl mx-auto text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>}
    <div className={`w-20 h-1 mx-auto mt-4 rounded-full ${light ? 'bg-indigo-400' : 'bg-indigo-600'}`}></div>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-slate-800 tracking-tight">
          web<span className="text-indigo-600">porto</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-indigo-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl animate-fade-in-down">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const AnimatedHeroGraphic = () => (
  <div className="relative w-full max-w-lg aspect-square flex items-center justify-center animate-float">
    <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-30 -z-10"></div>
    <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-30 -z-10"></div>
    
    <div className="w-full bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
      <div className="bg-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">main.js — webporto</div>
      </div>
      
      <div className="p-8 font-mono text-sm sm:text-base">
        <div className="flex gap-4 mb-3">
          <span className="text-slate-600 select-none">1</span>
          <span className="text-pink-400">const</span>
          <span className="text-slate-100 italic">developer</span>
          <span className="text-indigo-400">=</span>
          <span className="text-slate-100">{'{'}</span>
        </div>
        <div className="flex gap-4 mb-3">
          <span className="text-slate-600 select-none">2</span>
          <span className="text-slate-100 ml-4 italic">name:</span>
          <span className="text-amber-200">'Afif Dhiyaulhaq'</span>,
        </div>
        <div className="flex gap-4 mb-3 animate-code">
          <span className="text-slate-600 select-none">3</span>
          <span className="text-slate-100 ml-4 italic">status:</span>
          <span className="text-green-400">'Semester 5'</span>,
        </div>
        <div className="flex gap-4 mb-3">
          <span className="text-slate-600 select-none">4</span>
          <span className="text-slate-100 ml-4 italic">isLearning:</span>
          <span className="text-purple-400">true</span>
        </div>
        <div className="flex gap-4 mb-3">
          <span className="text-slate-600 select-none">5</span>
          <span className="text-slate-100">{'}'};</span>
        </div>
        <div className="flex gap-4 mb-3">
          <span className="text-slate-600 select-none">6</span>
        </div>
        <div className="flex gap-4 mb-3">
          <span className="text-slate-600 select-none">7</span>
          <span className="text-indigo-400">while</span>
          <span className="text-slate-100">(</span>
          <span className="text-indigo-400">learning</span>
          <span className="text-slate-100">) {'{'}</span>
        </div>
        <div className="flex gap-4">
          <span className="text-slate-600 select-none">8</span>
          <span className="text-indigo-400 ml-4">improve</span>
          <span className="text-slate-100">();</span>
          <span className="w-2 h-5 bg-indigo-500 animate-pulse inline-block ml-1"></span>
        </div>
      </div>
    </div>

    <div className="absolute -top-4 -right-4 p-4 bg-white rounded-2xl shadow-lg border border-slate-100 text-indigo-600">
      <Braces className="w-6 h-6" />
    </div>
    <div className="absolute top-1/2 -left-8 p-4 bg-white rounded-2xl shadow-lg border border-slate-100 text-purple-600">
      <Globe className="w-6 h-6" />
    </div>
    <div className="absolute -bottom-6 right-12 p-4 bg-white rounded-2xl shadow-lg border border-slate-100 text-amber-500">
      <Database className="w-6 h-6" />
    </div>
  </div>
);

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-slate-50 to-indigo-50 scroll-mt-24">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div className="animate-fade-in-up">
        <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
          👋 Hello Everyone!
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
          Afif Dhiyaulhaq <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Junior Developer.</span>
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
          {PERSONAL_INFO.shortBio}
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
            Lihat Project
          </a>
          <a href="#contact" className="px-8 py-3 bg-white text-slate-800 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-all">
            Hubungi Saya
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <AnimatedHeroGraphic />
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white scroll-mt-24">
    <div className="container mx-auto px-6">
      <SectionTitle title="Tentang Saya" subtitle="Kenali saya lebih dekat, latar belakang pendidikan dan minat saya dalam dunia IT." />
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-6">
          <p className="text-xl text-slate-700 leading-relaxed italic">
            "{PERSONAL_INFO.education}"
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            {PERSONAL_INFO.aboutDetailed}
          </p>
          <div className="p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
            <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5" /> Status Pembelajaran
            </h4>
            <p className="text-amber-700">{PERSONAL_INFO.learningStatus}</p>
          </div>
        </div>
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-indigo-600" /> Quick Facts
          </h4>
          <ul className="space-y-4">
            <li className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Lokasi</span>
              <span className="font-medium">Mataram, Indonesia</span>
            </li>
            <li className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Status</span>
              <span className="font-medium text-green-600">Open for Internship</span>
            </li>
            <li className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Bahasa</span>
              <span className="font-medium">ID / EN (Beginner)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-24 bg-slate-900 text-white scroll-mt-24">
    <div className="container mx-auto px-6">
      <SectionTitle title="Skill & Teknologi" subtitle="Kumpulan teknologi yang sedang saya pelajari dan gunakan dalam proyek-proyek saya." light />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {SKILLS.map((skill, index) => (
          <div key={index} className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all hover:-translate-y-1">
            <div className="mb-4 text-indigo-400 group-hover:text-indigo-300 transition-colors">
               <Code2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold mb-1">{skill.name}</h4>
            <span className="text-xs uppercase tracking-widest text-slate-500">{skill.category}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 bg-white scroll-mt-24">
    <div className="container mx-auto px-6">
      <SectionTitle title="Project Saya" subtitle="Kumpulan karya digital yang saya bangun selama masa perkuliahan." />
      
      <div className="mb-10 p-4 bg-indigo-50 rounded-lg flex items-start gap-4 border border-indigo-100">
        <div className="p-2 bg-indigo-600 rounded-full text-white shrink-0">
          <Monitor className="w-4 h-4" />
        </div>
        <p className="text-indigo-800 text-sm">
          <strong>Catatan Penting:</strong> Sebagian besar project di bawah ini masih berjalan di lingkungan <strong>localhost</strong> karena dikembangkan untuk keperluan tugas kuliah dan pembelajaran pribadi.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all flex flex-col md:flex-row h-full">
            <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 md:w-2/3 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">{project.title}</h3>
                  <span className={`px-2 py-1 text-[10px] font-bold rounded uppercase tracking-tighter ${
                    project.status === 'Localhost' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <button 
                  disabled={project.status === 'Localhost'}
                  className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg transition-all ${
                    project.status === 'Localhost' 
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  {project.status === 'Localhost' ? 'Demo (Offline)' : 'Live Demo'}
                </button>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors px-4 py-2"
                  >
                    <Github className="w-4 h-4" /> Repo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState<ContactData>({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionTitle title="Hubungi Saya" subtitle="Punya pertanyaan atau ingin berdiskusi? Jangan ragu untuk mengirim pesan!" />
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900">Mari Terhubung</h3>
            <p className="text-slate-600 leading-relaxed">
              Saya selalu terbuka untuk diskusi mengenai teknologi web, proyek kolaborasi, atau sekadar berbagi pengalaman sebagai sesama mahasiswa IT.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 group p-4 bg-white rounded-xl border border-slate-100 hover:border-indigo-200 transition-all">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email</p>
                  <p className="text-slate-800 font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </a>
              <div className="flex gap-4">
                {[
                  { icon: Github, url: PERSONAL_INFO.github, name: 'GitHub' },
                  { icon: Linkedin, url: PERSONAL_INFO.linkedin, name: 'LinkedIn' },
                  { icon: Instagram, url: PERSONAL_INFO.instagram, name: 'Instagram' }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white border border-slate-100 rounded-xl text-slate-600 hover:text-indigo-600 hover:border-indigo-100 transition-all flex-1 flex flex-col items-center gap-2"
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="text-[10px] font-bold uppercase">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" 
                  placeholder="Masukkan nama anda"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Alamat Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" 
                  placeholder="email@contoh.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Pesan</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" 
                  placeholder="Ketik pesan anda di sini..."
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Kirim Pesan
              </button>
              {isSent && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm text-center font-medium animate-pulse">
                  Pesan berhasil terkirim! (Simulasi)
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 bg-white border-t border-slate-100">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
      <div>
        <h4 className="font-bold text-slate-800 mb-2 tracking-tight uppercase">web<span className="text-indigo-600">porto</span></h4>
        <p className="text-sm text-slate-500 max-w-xs">
          Built with React & Tailwind CSS. <br />
          Materi Pembelajaran Semester 5 IT.
        </p>
      </div>
      <div className="text-sm text-slate-400 font-medium">
        &copy; {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Semua hak cipta dilindungi.
      </div>
      <div className="flex gap-6">
        <a href="#home" className="text-slate-400 hover:text-indigo-600 transition-colors font-medium">Home</a>
        <a href="#about" className="text-slate-400 hover:text-indigo-600 transition-colors font-medium">About</a>
        <a href="#projects" className="text-slate-400 hover:text-indigo-600 transition-colors font-medium">Projects</a>
      </div>
    </div>
  </footer>
);

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 p-3 bg-indigo-600 text-white rounded-full shadow-lg transition-all z-40 hover:bg-indigo-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default function App() {
  return (
    <div className="selection:bg-indigo-100 selection:text-indigo-700">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
