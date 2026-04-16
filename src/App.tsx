import { motion } from "motion/react";
import { 
  ArrowRight,
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MessageSquare
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="md:w-80 flex flex-col justify-between md:border-r border-border md:pr-10 py-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter mb-2">Hamid Ullah</h1>
        <p className="text-sm uppercase tracking-widest text-text-sub mb-8">Digital Marketing & AI Expert</p>
        <p className="text-sm leading-relaxed text-text-sub mb-10">
          Specializing in AI-integrated marketing strategies to grow small businesses and large enterprises through targeted SEO, content, and SMM.
        </p>
        
        <span className="section-label">Expertise</span>
        <ul className="space-y-3 text-sm text-text-sub mb-12">
          <li className="flex items-center gap-2">• SEO & Performance Marketing</li>
          <li className="flex items-center gap-2">• AI Automation Systems</li>
          <li className="flex items-center gap-2">• Social Media Strategy</li>
          <li className="flex items-center gap-2">• Lead Generation Engineering</li>
        </ul>
      </div>

      <div>
        <span className="section-label mb-3">Connect</span>
        <div className="grid grid-cols-2 gap-3">
          <a href="https://facebook.com/HamidUllah" target="_blank" rel="noreferrer" className="social-link">Facebook</a>
          <a href="https://linkedin.com/in/HamidUllah" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
          <a href="https://instagram.com/HamidUllah" target="_blank" rel="noreferrer" className="social-link">Instagram</a>
          <a href="https://x.com/HamidUllah" target="_blank" rel="noreferrer" className="social-link">X (Twitter)</a>
          <a href="https://tiktok.com/@HamidUllah" target="_blank" rel="noreferrer" className="social-link">TikTok</a>
        </div>
      </div>
    </aside>
  );
};

const MainContent = () => {
  const aiProjects = [
    {
      title: "School Management Software",
      desc: "Complete AI-driven system for administrative efficiency and student tracking.",
      tag: "AI Engineering"
    },
    {
      title: "Social Media Automation",
      desc: "Automated content pipeline and interaction engine for enterprise scale.",
      tag: "AI Engineering"
    },
    {
      title: "Digital Marketing Growth",
      desc: "Strategic SEO and content overhaul for international retail brands.",
      tag: "Digital Marketing"
    },
    {
      title: "Lead Generation Engine",
      desc: "Custom AI tool to scrape, verify, and nurture high-intent business leads.",
      tag: "AI Engineering"
    }
  ];

  return (
    <main className="flex-1 flex flex-col gap-12 py-10">
      <section>
        <span className="section-label">Impact</span>
        <div className="flex gap-12">
          <div className="stat-item">
            <h3 className="text-5xl font-light tracking-tighter">10+</h3>
            <p className="text-xs text-text-sub uppercase tracking-wider">Global Clients</p>
          </div>
          <div className="stat-item">
            <h3 className="text-5xl font-light tracking-tighter">100%</h3>
            <p className="text-xs text-text-sub uppercase tracking-wider">Growth Rate</p>
          </div>
        </div>
      </section>

      <section>
        <span className="section-label">Selected Projects</span>
        <div className="grid md:grid-cols-2 gap-5">
          {aiProjects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card"
            >
              <h4 className="text-base font-bold mb-2">{p.title}</h4>
              <p className="text-sm text-text-sub leading-relaxed mb-4">{p.desc}</p>
              <span className="inline-block text-[10px] px-2 py-0.5 bg-gray-100 rounded-full uppercase tracking-wider font-bold text-text-sub">
                {p.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="mt-auto p-8 bg-accent rounded-2xl text-white flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-widest opacity-70 block mb-1">Direct Contact</span>
          <div className="text-xl font-bold">+92 311 4918272</div>
        </div>
        <div className="md:text-right">
          <span className="text-[10px] uppercase tracking-widest opacity-70 block mb-1">Ready to scale?</span>
          <div className="text-sm">hamidullah8872@gmail.com</div>
        </div>
        <a 
          href="https://wa.me/923114918272" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-accent px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-all flex items-center gap-2"
        >
          WhatsApp Me <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </main>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl glass rounded-[2rem] p-6 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16 min-h-[80vh]">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
