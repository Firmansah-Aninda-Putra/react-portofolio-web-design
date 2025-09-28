"use client"

import React, { useEffect, useRef } from "react"
import {
  Menu,
  X,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Zap,
  Code,
  Layers,
  Youtube,
  Bold,
} from "lucide-react"

const FuturisticPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const sectionRefs = {
    profile: useRef(null),
    education: useRef(null),
    portfolio: useRef(null),
    social: useRef(null),
    contact: useRef(null),
  }
  const [activeSection, setActiveSection] = React.useState("profile")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (
          ref.current &&
          scrollPosition >= ref.current.offsetTop &&
          scrollPosition < ref.current.offsetTop + ref.current.offsetHeight
        ) {
          setActiveSection(section)
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (section) => {
    setIsMenuOpen(false)
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" })
  }

  // Data untuk project portofolio (6 project)
  const projectData = [
    {
      id: 1,
      title: "Pantau Madiun : Madiun Traffic Surveillance",
      description: "Website Monitoring Dan Pengambilan Data Traffic Lalu Lintas Dari CCTV Menggunakan Computer Vision",
      image: "/web.jpg"
    },
    {
      id: 2,
      title: "G-Plasma Journalistic Quiz & Education Website",
      description: "Website Edukasi Mengenai Pengetahuan Media Dan Jurnalistik Menggunakan Metode Soal Dan Quiz",
      image: "/quiz.png"
    },
    {
      id: 3,
      title: "Madiun E-Voice : Suara Madiun",
      description: "Sistem Rekap Data Call Center Otomatis Melalui Voice Recognition Tool & Speech To Text Tool",
      image: "/voice.png"
    },
    {
      id: 4,
      title: "Madiun Backpaker",
      description: "Informasi Tempat Wisata & Kuliner Di Kota Madiun",
      image: "/packer.png"
    },
     
    {
      id: 5,
      title: "Madiun Ambulance Monitor & Call Center",
      description: "Website Call Center & Pelacak Ambulan Kota Madiun",
      image: "/tracker.jpg"
    },
    {
      id: 6,
      title: "Soiltech : Soil Temperature and Moisture Monitor",
      description: "Alat & Modul Untuk Monitoring Suhu & Kelembapan Tanah",
      image: "/soil.jpg"
    },
    {
      id: 7,
      title: "Coconut Grating and Coconut Milk Stirring Automation System",
      description: "Alat Otomatisasi Untuk Pemarutan Kelapa dan Pengadukan Santan",
      image: "/parutan.jpg"
    },
    {
      id: 8,
      title: "Smart Home System And Automation Using Handphone",
      description: "Kontrol Rumah Otomatis Menggunakan Smartphone",
      image: "/smarthome.jpg"
    },
    {
      id: 9,
      title: "Fire Alarm System",
      description: "Alarm & Sensor Untuk Pendeteksian Terjadinya Kebakaran",
      image: "/alarm.jpg"
    },
  ]

  // Data untuk logo design (12 logo)
  const logoData = [
    { id: 1, image: "/filens.jpg" },
    { id: 2, image: "/distopia.jpg" },
    { id: 3, image: "/kakao.jpg" },
    { id: 4, image: "roket.jpg" },
    { id: 5, image: "/pilots.jpg" },
    { id: 6, image: "/sanggar.png" },
    { id: 7, image: "/creativerse.jpg" },
    { id: 8, image: "/soiltech.jpg" },
    { id: 9, image: "/saint.jpg" },
    { id: 10, image: "/louviere.jpg" },
    { id: 11, image: "/pet.png" },
    { id: 12, image: "/ligamers.jpg" },
    { id: 13, image: "/pecel.jpg" },
    { id: 14, image: "/bakmi.png" },
    { id: 15, image: "/ejfest.jpg" },
    { id: 16, image: "/kkmi.jpg" },
    { id: 17, image: "/ural.png" },
    { id: 18, image: "/reich.jpg" },
    { id: 19, image: "/jasuke.jpg" },
    { id: 20, image: "/milad.jpg" },
    { id: 21, image: "/sasana.jpg" },
    { id: 22, image: "/fx.jpg" },
    { id: 23, image: "/pantau.jpg" },
    { id: 24, image: "/pnm.jpg" },
  ]

  // Data untuk Photography Section (18 gambar manual dengan path berbeda)
  const photographyData = [
    { id: 1, image: "/vape.jpg" },
    { id: 2, image: "/teh.jpg" },
    { id: 3, image: "/pinilih.jpg" },
    { id: 4, image: "/thai.jpg" },
    { id: 5, image: "/sensor.jpg" },
    { id: 6, image: "/kitariviu.jpg" },
    { id: 7, image: "/guild.jpg" },
    { id: 8, image: "/kopi.jpg" },
    { id: 9, image: "/putih.jpg" },
    { id: 10, image: "/koran.jpg" },
    { id: 11, image: "/pensil.jpg" },
    { id: 12, image: "/kentang.jpg" },
    { id: 13, image: "/sosis.jpg" },
    { id: 14, image: "/cireng.jpg" },
    { id: 15, image: "/masdo.jpg" },
    { id: 16, image: "/iklan.jpg" },
    { id: 17, image: "/metal.jpg" },
  ]

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <img src="/fixtive.jpg" alt="Logo" className="logo" />
            <div className="desktop-menu">
              {[
                { name: "Profil", key: "profile" },
                { name: "Pendidikan dan Karir", key: "education" },
                { name: "Portofolio", key: "portfolio" },
                { name: "Sosial Media", key: "social" },
                { name: "Kontak", key: "contact" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`menu-item ${activeSection === item.key ? "active" : ""}`}
                >
                  <span className="menu-text">{item.name}</span>
                </button>
              ))}
            </div>
            <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu">
            {[
              { name: "Profil", key: "profile" },
              { name: "Pendidikan dan Karir", key: "education" },
              { name: "Portofolio", key: "portfolio" },
              { name: "Sosial Media", key: "social" },
              { name: "Kontak", key: "contact" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className={`mobile-menu-item ${activeSection === item.key ? "active" : ""}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Profile Section */}
        <section ref={sectionRefs.profile} className="section profile-section">
          <div className="hero-background">
            <div className="hero-grid">
              <div className="hero-grid-item"></div>
              <div className="hero-grid-item"></div>
              <div className="hero-grid-item"></div>
              <div className="hero-grid-item"></div>
              <div className="hero-grid-item"></div>
              <div className="hero-grid-item"></div>
              <div className="hero-grid-item"></div>
              <div className="hero-grid-item"></div>
            </div>
          </div>
          <div className="profile-content">
            <div className="profile-image-container">
              <div className="profile-image-wrapper">
                <img src="/saya.jpg" alt="Profile" className="profile-image" />
                <div className="profile-image-glow"></div>
              </div>
              <div className="profile-decorations">
                <div className="profile-decoration-item">
                  <Zap className="decoration-icon" />
                </div>
                <div className="profile-decoration-item">
                  <Code className="decoration-icon" />
                </div>
                <div className="profile-decoration-item">
                  <Layers className="decoration-icon" />
                </div>
              </div>
            </div>
            <div className="profile-info">
              <h1 className="profile-name">Firmansah Aninda Putra</h1>
              <h3 className="profile-subtitle">Tech & Multimedia Enthusiast</h3>
              <p className="profile-description">
                <strong className="blue-gradient">Hello Everyone.</strong><br /> I hope you're having a fantastic day and your coffee's <br />as strong as your ambition. Allow me to introduce myself :<br />
                My Name is <strong className="gradient-blue">Firmansah Aninda Putra</strong>. I am currently pursuing a degree in Computer Control Engineering at Madiun State Polytechnic. I am passionate about expanding my expertise in various fields, particularly technology and multimedia. I am consistently engaged in innovative projects to further enhance my skills. I look forward to connecting and sharing insights among professionals who share my interests.
              </p>
              <div className="skills-preview">
                <h4 className="skills-title">Expanding My Expertise</h4>
                <ul className="skills-list">
                  {[
                    "Graphic Designer",
                    "Electronics Engineer",
                    "IoT Engineer",
                    "UI/UX Designer",
                    "Frontend Developer",
                    "Software Developer",
                    "Network Technician",
                  ].map((skill) => (
                    <li key={skill} className="skill-item">
                      <ChevronRight className="skill-icon" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education and Career Section */}
        <section ref={sectionRefs.education} className="section education-section">
          <div className="section-header">
            <h2 className="section-title">EDUCATION AND CAREER</h2>
            <div className="section-title-line"></div>
          </div>
          {/* Education */}
          <div className="subsection">
            <h3 className="subsection-title">Educational Journey</h3>
            <div className="education-grid">
              <div className="education-card">
                <div className="education-card-content">
                  <div className="education-logo">
                    <img src="smk.png" alt="SMKN 1 GEGER Logo" className="education-logo-image" />
                  </div>
                  <div className="education-details">
                    <h4 className="education-title">Teknik Komputer dan Jaringan</h4>
                    <p className="education-institution">SMKN 1 GEGER</p>
                    <p className="education-period">2020 – 2023</p>
                  </div>
                </div>
                <div className="card-glow"></div>
              </div>
              <div className="education-card">
                <div className="education-card-content">
                  <div className="education-logo">
                    <img src="pnm.png" alt="Politeknik Negeri Madiun Logo" className="education-logo-image" />
                  </div>
                  <div className="education-details">
                    <h4 className="education-title">Teknik Komputer Kontrol</h4>
                    <p className="education-institution">Politeknik Negeri Madiun</p>
                    <p className="education-period">2023 – Now</p>
                  </div>
                </div>
                <div className="card-glow"></div>
              </div>
            </div>
          </div>
          {/* Career */}
          <div className="subsection">
            <h3 className="subsection-title">Professional and Organizational Experience</h3>
            <div className="career-grid">
              {[
                {
                  title: "Network Engineer Assistant (Internship)",
                  company: "GIRADIA NET",
                  description: "PT PELANGI NUSANTARA MULTIMEDIA",
                  period: "2022",
                  img: "/giradia.jpg",
                },
                {
                  title: "Software & Web Developer",
                  company: "PPID Kota Madiun",
                  description: "Bidang Pengelolaan Informasi & Komunikasi",
                  period: "2024",
                  img: "/kota madiun.jpeg",
                },
                {
                  title: "Editor Divisi Design & Layout",
                  company: "PERS G-PLASMA",
                  period: "2023-2024",
                  img: "pers.png",
                },
                {
                  title: "Freelancer & Graphic Designer",
                  company: "FIXTIVE",
                  description: "SELF - EMPLOYED",
                  period: "2020 - Now",
                  img: "/fixtive.jpg",
                },
                {
                  title: "Social Media Administrator",
                  company: "INC INDO COMMUNITY",
                  period: "2020 - 2022",
                  img: "/inc.jpg",
                },
                {
                  title: "OSIS SMKN 1 GEGER",
                  company: "SMKN 1 GEGER",
                  period: "2021 - 2022",
                  img: "/osis.jpg",
                },
              ].map((job, index) => (
                <div key={index} className="career-card">
                  <div className="career-card-content">
                    <div className="career-logo">
                      <img src={job.img} alt={`${job.company} Logo`} className="career-logo-image" />
                    </div>
                    <div className="career-details">
                      <h4 className="career-title">{job.title}</h4>
                      <p className="career-company">
                        {job.company}
                        {job.description && (
                          <>
                            <br />
                            {job.description}
                          </>
                        )}
                      </p>
                      {job.period && <p className="career-period">{job.period}</p>}
                    </div>
                  </div>
                  <div className="card-glow"></div>
                </div>
              ))}
            </div>
          </div>
          {/* Skills */}
          <div className="subsection">
            <h3 className="subsection-title">Software & Tools Experience</h3>
            <div className="skills-grid">
              {[
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Corel Draw",
                "Arduino IDE",
                "Visual Studio Code",
                "CX-One",
                "Capcut",
                "Canva"
              ].map((skill) => (
                <div key={skill} className="skill-card">
                  <div className="skill-icon-container">
                    <ChevronRight className="skill-card-icon" />
                  </div>
                  <span className="skill-name">{skill}</span>
                  <div className="skill-card-glow"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section ref={sectionRefs.portfolio} className="section portfolio-section">
          <div className="section-header">
            <h2 className="section-title">Portofolio</h2>
            <div className="section-title-line"></div>
          </div>
          {/* Projects */}
          <div className="subsection">
            <h3 className="subsection-title">Project</h3>
            <div className="projects-grid">
              {projectData.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                  <div className="project-info">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                  </div>
                  <div className="project-card-glow"></div>
                </div>
              ))}
            </div>
            <div className="see-more-container" style={{ marginTop: "2rem" }}>
              <a href="https://www.youtube.com/@firmansahanindaputra" className="see-more-button">See More</a>
            </div>
          </div>
          {/* Logos */}
          <div className="subsection">
            <h3 className="subsection-title">Logo Design</h3>
            <div className="logos-grid">
              {logoData.map((logo) => (
                <div key={logo.id} className="logo-card">
                  <img src={logo.image} alt={`Logo Design ${logo.id}`} className="logo-design" />
                  <div className="logo-card-glow"></div>
                </div>
              ))}
            </div>
            <div className="see-more-container" style={{ marginTop: "1.5rem" }}>
              <a href="https://www.instagram.com/fixtive/" className="see-more-button">See More</a>
            </div>
          </div>
          {/* Photography Section */}
          <div className="subsection">
            <h3 className="subsection-title">Photography</h3>
            {/* Baris Pertama: 5 gambar dengan aspect ratio 9:16 */}
            <div className="photography-first-row">
              {photographyData.slice(0, 5).map((photo) => (
                <div key={photo.id} className="photography-card portrait">
                  <div className="photography-image-container">
                    <img src={photo.image} alt={`Photo ${photo.id}`} className="photography-image" />
                  </div>
                </div>
              ))}
            </div>
            {/* Baris Kedua: sisanya (gambar 6 s/d 18) */}
            <div className="photography-grid">
              {photographyData.slice(5).map((photo) => (
                <div key={photo.id} className="photography-card">
                  <div className="photography-image-container">
                    <img src={photo.image} alt={`Photo ${photo.id}`} className="photography-image" />
                  </div>
                </div>
              ))}
            </div>
            <div className="see-more-container" style={{ marginTop: "1.5rem" }}>
              <a href="https://www.instagram.com/fixtive/" className="see-more-button">See More</a>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section ref={sectionRefs.social} className="section social-section">
          <div className="section-header">
            <h2 className="section-title">Social Media</h2>
            <div className="section-title-line"></div>
          </div>
          <div className="social-grid">
            {[
              { name: "Instagram", icon: <Instagram className="social-icon" />, username: "@fixtive" },
              { name: "Youtube", icon: <Youtube className="social-icon" />, username: "Firmansah Aninda Putra" },
              { name: "LinkedIn", icon: <Linkedin className="social-icon" />, username: "Firmansah Putra" },
              { name: "GitHub", icon: <Github className="social-icon" />, username: "thinkercad" },
            ].map((platform) => (
              <a key={platform.name} href="#" className="social-card">
                <div className="social-icon-container">{platform.icon}</div>
                <div className="social-info">
                  <h4 className="social-platform">{platform.name}</h4>
                  <p className="social-username">{platform.username}</p>
                </div>
                <div className="social-card-glow"></div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section ref={sectionRefs.contact} className="section contact-section">
          <div className="section-header">
            <h2 className="section-title">Contact</h2>
            <div className="section-title-line"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-subtitle">Contact Me</h3>
              <div className="contact-methods">
                {[
                  { icon: <Mail className="contact-method-icon" />, label: "Email", value: "firmansahanindap@gmail.com" },
                  { icon: <Phone className="contact-method-icon" />, label: "Phone", value: "+62 123 4567 890" },
                  { icon: <MapPin className="contact-method-icon" />, label: "Location", value: "Madiun, Jawa Timur, Indonesia" },
                ].map((contact) => (
                  <div key={contact.label} className="contact-method">
                    <div className="contact-method-icon-container">{contact.icon}</div>
                    <div className="contact-method-details">
                      <p className="contact-method-label">{contact.label}</p>
                      <p className="contact-method-value">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="contact-social">
                <h4 className="contact-social-title">Social Media</h4>
                <div className="contact-social-icons">
                  {[
                    { icon: <Instagram className="contact-social-icon" />, label: "Instagram" },
                    { icon: <Twitter className="contact-social-icon" />, label: "Twitter" },
                    { icon: <Linkedin className="contact-social-icon" />, label: "LinkedIn" },
                    { icon: <Github className="contact-social-icon" />, label: "GitHub" },
                  ].map((platform) => (
                    <a key={platform.label} href="#" className="contact-social-icon-container" aria-label={platform.label}>
                      {platform.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <h3 className="contact-form-title">Send Message</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input id="name" type="text" className="form-input" placeholder="Full Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input id="email" type="email" className="form-input" placeholder="email@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="messa" rows={4} className="form-textarea" placeholder="Drop Message ... " />
                </div>
                <button type="submit" className="form-submit">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </footer>

      {/* CSS Styles */}
      <style jsx>{`
        /* Base Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
        }
        /* Futuristic Elements */
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(100, 100, 255, 0.3); }
          50% { box-shadow: 0 0 20px rgba(100, 100, 255, 0.5); }
          100% { box-shadow: 0 0 5px rgba(100, 100, 255, 0.3); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
        /* Navbar */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(230, 230, 250, 0.3);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
        }
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
        }
        .logo {
          height: 34px;
          width: auto;
          object-fit: contain;
          position: relative;
          z-index: 1;
          border-radius: 0;
          box-shadow: none;
        }
        .desktop-menu {
          display: none;
          gap: 2.5rem;
        }
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex;
          }
        }
        .menu-item {
          position: relative;
          font-size: 0.95rem;
          font-weight: 500;
          color: #1a1a2e;
          padding: 0.5rem 0;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .menu-item:hover {
          color: #0070f3;
        }
        .menu-item::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #0070f3, #00c8ff);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }
        .menu-item:hover::before {
          transform: scaleX(1);
          transform-origin: left;
        }
        .menu-item.active {
          color: #0070f3;
        }
        .menu-item.active::before {
          transform: scaleX(1);
        }
        .menu-text {
          position: relative;
          z-index: 1;
        }
        .mobile-menu-button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          background: rgba(0, 112, 243, 0.1);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .mobile-menu-button:hover {
          background: rgba(0, 112, 243, 0.2);
        }
        @media (min-width: 768px) {
          .mobile-menu-button {
            display: none;
          }
        }
        .icon {
          width: 24px;
          height: 24px;
          color: #0070f3;
        }
        .mobile-menu {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(230, 230, 250, 0.5);
        }
        .mobile-menu-item {
          padding: 0.75rem 0;
          font-size: 1rem;
          font-weight: 500;
          color: #1a1a2e;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .mobile-menu-item:hover,
        .mobile-menu-item.active {
          color: #0070f3;
        }
        /* Main Content */
        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        /* Profile Section */
        .profile-section {
          position: relative;
          padding: 6rem 0 4rem;
          overflow: hidden;
        }
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 1fr);
          width: 100%;
          height: 100%;
          opacity: 0.05;
        }
        .hero-grid-item {
          border: 1px solid #0070f3;
          position: relative;
        }
        .hero-grid-item::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          background: #0070f3;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .profile-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          position: relative;
          z-index: 1;
        }
        @media (min-width: 768px) {
          .profile-content {
            grid-template-columns: 1fr 1fr;
          }
        }
        .profile-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .profile-image-wrapper {
          position: relative;
          width: 320px;
          height: 320px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          border: 3px solid rgba(255, 255, 255, 0.8);
        }
        .profile-image-wrapper:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 112, 243, 0.2);
        }
        .profile-image-wrapper:hover .profile-image-glow {
          opacity: 1;
        }
        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
          transition: transform 0.5s ease;
        }
        .profile-image-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          background: radial-gradient(circle at 50% 50%, rgba(0, 112, 243, 0.2), transparent 70%);
          opacity: 0.6;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        .profile-decorations {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .profile-decoration-item {
          position: absolute;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          animation: float 6s infinite ease-in-out;
        }
        .profile-decoration-item:nth-child(1) {
          top: 5%;
          right: 10%;
          animation-delay: 0s;
        }
        .profile-decoration-item:nth-child(2) {
          bottom: 10%;
          left: 5%;
          animation-delay: 1s;
        }
        .profile-decoration-item:nth-child(3) {
          bottom: 30%;
          right: 5%;
          animation-delay: 2s;
        }
        .decoration-icon {
          width: 24px;
          height: 24px;
          color: #0070f3;
        }
        .profile-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .profile-name {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(120deg, #0070f3, #00c8ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.2;
        }
        .profile-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 1.5rem;
        }
        /* Modifikasi: Justify pada profil description */
        .profile-description {
          font-size: 1.1rem;
          color: #4a4a6a;
          line-height: 1.6;
          margin-bottom: 2rem;
          text-align: justify !important;
        }
        .skills-preview {
          background: rgba(0, 112, 243, 0.05);
          border-radius: 16px;
          padding: 1.5rem;
          border: 1px solid rgba(0, 112, 243, 0.1);
        }
        .skills-title {
          font-size: 1.1rem;
          color: #1a1a2e;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .skills-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          list-style: none;
        }
        @media (min-width: 480px) {
          .skills-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: #4a4a6a;
        }
        .skill-icon {
          width: 16px;
          height: 16px;
          color: #0070f3;
        }
        /* Education and Career Section */
        .section {
          padding: 5rem 0;
          position: relative;
        }
        .section-header {
          margin-bottom: 3rem;
          text-align: center;
          position: relative;
        }
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 1rem;
          letter-spacing: 0.5px;
        }
        .section-title-line {
          height: 3px;
          width: 60px;
          background: linear-gradient(90deg, #0070f3, #00c8ff);
          margin: 0 auto;
          border-radius: 3px;
        }
        .subsection {
          margin-bottom: 4rem;
        }
        .subsection-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 2rem;
          text-align: center;
        }
        .education-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .education-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .education-card {
          position: relative;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(230, 230, 250, 0.7);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .education-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 112, 243, 0.15);
        }
        .education-card:hover .card-glow {
          opacity: 1;
        }
        .education-card-content {
          padding: 2rem;
          display: flex;
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }
        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(0, 112, 243, 0.1), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .education-logo {
          width: 60px;
          height: 60px;
          flex-shrink: 0;
          background: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(230, 230, 250, 0.7);
        }
        .education-logo-image {
          width: 70%;
          height: auto;
          object-fit: contain;
        }
        .education-details {
          flex: 1;
        }
        .education-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }
        .education-institution {
          font-size: 1rem;
          color: #4a4a6a;
          margin-bottom: 0.5rem;
        }
        .education-period {
          font-size: 0.9rem;
          color: #6e6e9e;
        }
        .career-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .career-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .career-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .career-card {
          position: relative;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(230, 230, 250, 0.7);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }
        .career-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 112, 243, 0.15);
        }
        .career-card:hover .card-glow {
          opacity: 1;
        }
        .career-card-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
          z-index: 1;
          height: 100%;
        }
        .career-logo {
          width: 60px;
          height: 60px;
          flex-shrink: 0;
          background: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(230, 230, 250, 0.7);
        }
        .career-logo-image {
          width: 70%;
          height: auto;
          object-fit: contain;
        }
        .career-details {
          flex: 1;
        }
        .career-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }
        .career-company {
          font-size: 1rem;
          color: #4a4a6a;
          margin-bottom: 0.5rem;
        }
        .career-period {
          font-size: 0.9rem;
          color: #6e6e9e;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media (min-width: 480px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .skill-card {
          position: relative;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid rgba(230, 230, 250, 0.7);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.75rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 112, 243, 0.15);
        }
        .skill-card:hover .skill-card-glow {
          opacity: 1;
        }
        .skill-icon-container {
          width: 40px;
          height: 40px;
          background: rgba(0, 112, 243, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .skill-card-icon {
          width: 20px;
          height: 20px;
          color: #0070f3;
        }
        .skill-name {
          font-size: 0.95rem;
          color: #4a4a6a;
          font-weight: 500;
        }
        .skill-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(0, 112, 243, 0.1), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        /* Portfolio Section */
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .project-card {
          position: relative;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(230, 230, 250, 0.7);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 112, 243, 0.15);
        }
        .project-card:hover .project-card-glow {
          opacity: 1;
        }
        .project-image-container {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
        .project-info {
          padding: 1.5rem;
        }
        .project-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }
        .blue-gradient {
          background: linear-gradient(to right, rgb(24, 103, 251), rgb(0, 94, 255));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
        .gradient-blue {
          background: linear-gradient(to right, rgb(57, 124, 248), rgb(0, 94, 255));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
        .project-description {
          font-size: 0.95rem;
          color: #4a4a6a;
          line-height: 1.6;
        }
        .project-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(0, 112, 243, 0.1), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .logos-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media (min-width: 480px) {
          .logos-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 768px) {
          .logos-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .logos-grid {
            grid-template-columns: repeat(6, 1fr);
          }
        }
        .logo-card {
          position: relative;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(230, 230, 250, 0.7);
          aspect-ratio: 1/1;
        }
        .logo-card:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 15px 40px rgba(0, 112, 243, 0.15);
        }
        .logo-card:hover .logo-card-glow {
          opacity: 1;
        }
        .logo-design {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .logo-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(0, 112, 243, 0.1), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        /* Photography Section Styles */
        .photography-first-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .photography-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .photography-card {
          position: relative;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .photography-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 112, 243, 0.15);
        }
        .photography-image-container {
          width: 100%;
          overflow: hidden;
        }
        .photography-first-row .photography-image-container {
          aspect-ratio: 9 / 16;
        }
        .photography-grid .photography-image-container {
          aspect-ratio: 16 / 9;
        }
        .photography-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .photography-card:hover .photography-image {
          transform: scale(1.05);
        }
        /* Social Media Section */
        .social-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 480px) {
          .social-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 768px) {
          .social-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .social-card {
          position: relative;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(230, 230, 250, 0.7);
          padding: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          height: 100%;
          text-decoration: none;
        }
        .social-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 112, 243, 0.15);
        }
        .social-card:hover .social-card-glow {
          opacity: 1;
        }
        .social-icon-container {
          width: 60px;
          height: 60px;
          background: rgba(0, 112, 243, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }
        .social-card:hover .social-icon-container {
          background: rgba(0, 112, 243, 0.2);
        }
        .social-icon {
          width: 30px;
          height: 30px;
          color: #0070f3;
        }
        .social-info {
          flex: 1;
        }
        .social-platform {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }
        .social-username {
          font-size: 0.95rem;
          color: #4a4a6a;
        }
        .social-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(0, 112, 243, 0.1), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        /* Contact Section */
        .contact-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        @media (min-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr 1fr;
          }
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .contact-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 1.5rem;
        }
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .contact-method-icon-container {
          width: 50px;
          height: 50px;
          background: rgba(0, 112, 243, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-method-icon {
          width: 24px;
          height: 24px;
          color: #0070f3;
        }
        .contact-method-details {
          flex: 1;
        }
        .contact-method-label {
          font-size: 0.9rem;
          color: #6e6e9e;
          margin-bottom: 0.25rem;
        }
        .contact-method-value {
          font-size: 1rem;
          color: #1a1a2e;
          font-weight: 500;
        }
        .contact-social {
          margin-top: 1rem;
        }
        .contact-social-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 1rem;
        }
        .contact-social-icons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .contact-social-icon-container {
          width: 40px;
          height: 40px;
          background: rgba(0, 112, 243, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .contact-social-icon-container:hover {
          background: rgba(0, 112, 243, 0.2);
          transform: translateY(-5px);
        }
        .contact-social-icon {
          width: 20px;
          height: 20px;
          color: #0070f3;
        }
        .contact-form-container {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(230, 230, 250, 0.7);
        }
        .contact-form-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 1.5rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-label {
          font-size: 0.95rem;
          color: #4a4a6a;
          font-weight: 500;
        }
        .form-input,
        .form-textarea {
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0, 112, 243, 0.2);
          border-radius: 8px;
          font-size: 1rem;
          color: #1a1a2e;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: rgba(0, 112, 243, 0.5);
          box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.1);
        }
        .form-submit {
          padding: 0.875rem 1.5rem;
          background: linear-gradient(90deg, #0070f3, #00c8ff);
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 112, 243, 0.2);
          margin-top: 0.5rem;
        }
        .form-submit:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 112, 243, 0.3);
        }
        /* Footer */
        .footer {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(230, 230, 250, 0.3);
          padding: 2rem 0;
          margin-top: 4rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          text-align: center;
        }
        .footer-text {
          font-size: 0.95rem;
          color: #4a4a6a;
        }
        /* Animation to make the logo glow on hover */
        .logo:hover {
          animation: pulse 2s infinite;
        }
        @keyframes floatIcon {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .profile-decoration-item {
          animation: floatIcon 6s infinite ease-in-out;
        }
        /* Responsive adjustments */
        @media (max-width: 767px) {
          .profile-image-wrapper {
            width: 260px;
            height: 260px;
          }
          .profile-name {
            font-size: 2rem;
          }
          .profile-subtitle {
            font-size: 1.3rem;
          }
          .section-title {
            font-size: 1.8rem;
          }
          .subsection-title {
            font-size: 1.3rem;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .section {
          animation: fadeIn 0.8s ease-out forwards;
        }
        html {
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(240, 240, 250, 0.5);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(0, 112, 243, 0.3);
          border-radius: 10px;
          border: 3px solid rgba(240, 240, 250, 0.5);
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 112, 243, 0.5);
        }
        .form-input:hover,
        .form-textarea:hover {
          border-color: rgba(0, 112, 243, 0.3);
        }
        .form-group:focus-within .form-label {
          color: #0070f3;
        }
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInFromRight {
          0% {
            transform: translateX(30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .profile-image-container {
          animation: slideInFromLeft 0.8s ease-out 0.2s forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .profile-info {
          animation: slideInFromRight 0.8s ease-out 0.4s forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .project-card::before,
        .social-card::before,
        .career-card::before,
        .education-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent 65%, rgba(255, 255, 255, 0.15) 70%, transparent 75%);
          background-size: 200% 200%;
          animation: shine 3s infinite linear;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 1;
        }
        .project-card:hover::before,
        .social-card:hover::before,
        .career-card:hover::before,
        .education-card:hover::before {
          opacity: 1;
        }
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        @media (max-width: 480px) {
          .section-title {
            font-size: 1.6rem;
          }
          .subsection-title {
            font-size: 1.2rem;
          }
          .profile-name {
            font-size: 1.8rem;
          }
          .profile-subtitle {
            font-size: 1.2rem;
          }
          .profile-description {
            font-size: 1rem;
          }
          .education-title,
          .career-title,
          .project-title,
          .contact-subtitle {
            font-size: 1rem;
          }
        }
        .project-image,
        .profile-image,
        .logo-design,
        .graphic-design-image,
        .education-logo-image,
        .career-logo-image {
          position: relative;
          transition: opacity 0.3s ease, transform 0.5s ease;
        }
        button:focus,
        a:focus,
        input:focus,
        textarea:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.3);
        }
        .menu-item, 
        .mobile-menu-button, 
        .mobile-menu-item,
        .project-card,
        .social-card,
        .view-all-button,
        .form-submit,
        .contact-social-icon-container {
          cursor: pointer;
        }
        .menu-item:focus-visible,
        .mobile-menu-item:focus-visible,
        .social-card:focus-visible,
        .contact-social-icon-container:focus-visible {
          outline: 2px solid #0070f3;
          outline-offset: 2px;
        }
        @media (hover: none) {
          .project-card:hover,
          .social-card:hover,
          .education-card:hover,
          .career-card:hover,
          .logo-card:hover,
          .graphic-design-card:hover {
            transform: none;
          }
          .projects-grid:hover .project-card:not(:hover),
          .social-grid:hover .social-card:not(:hover),
          .logos-grid:hover .logo-card:not(:hover) {
            transform: none;
            opacity: 1;
          }
        }
        @media (min-width: 1200px) {
          .main-content {
            max-width: 1400px;
          }
          .navbar-container {
            max-width: 1400px;
          }
          .profile-content {
            gap: 6rem;
          }
          .profile-image-wrapper {
            width: 380px;
            height: 380px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          *,
          ::before,
          ::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        @supports (-webkit-touch-callout: none) {
          .navbar {
            -webkit-backdrop-filter: blur(20px);
          }
          .education-card,
          .career-card,
          .project-card,
          .social-card,
          .logo-card,
          .graphic-design-card,
          .contact-form-container {
            -webkit-backdrop-filter: blur(10px);
          }
        }
        /* See More Button Styles */
        .see-more-container {
          width: 100%;
          text-align: center;
        }
        .see-more-button {
          display: inline-block;
          width: 100%;
          padding: 1rem;
          background: linear-gradient(90deg, #0070f3, #00c8ff);
          color: #fff;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: background 0.3s ease;
        }
        .see-more-button:hover {
          background: linear-gradient(90deg, #005bb5, #0091d5);
        }
      `}</style>
    </div>
  )
}

export default FuturisticPortfolio
