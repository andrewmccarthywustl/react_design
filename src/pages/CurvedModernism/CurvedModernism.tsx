// CurvedModernism.tsx (with separated Nav)
import React, { useEffect, useState } from "react";
import styles from "./CurvedModernismStyles.module.css";
import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Services from "./Sections/Services/Services";
import Portfolio from "./Sections/Portfolio/Portfolio";
import BlogSection from "./Sections/BlogSection/BlogSection";
import Contact from "./Sections/Contact/Contact";
import Nav from "./Components/Nav/Nav";
import CircleAnimation from "./Components/CircleAnimation/CircleAnimation";
import { TbBackground } from "react-icons/tb";

const CurvedModernism: React.FC = () => {
  const [activeSection, setActiveSection] = useState("program");

  const navItems = [
    { id: "program", label: "Program" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Determine active section based on scroll position
      if (scrollPosition < 400) {
        setActiveSection("program");
      } else if (scrollPosition < 800) {
        setActiveSection("about");
      } else if (scrollPosition < 1200) {
        setActiveSection("services");
      } else if (scrollPosition < 1600) {
        setActiveSection("portfolio");
      } else {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <CircleAnimation />
          </div>
          <Nav
            activeSection={activeSection}
            onSectionChange={setActiveSection}
            navItems={navItems}
          />
        </header>

        <Hero
          institution1="Design Innovation"
          institution2="Creative Solutions"
          title={["Modern Design", "Studio"]}
          programs={[
            "Brand Identity",
            "Digital Design",
            "Print Media",
            "Environmental Design",
          ]}
        />

        <About
          id="about"
          title="About Our Studio"
          description="We are a collaborative team of designers and developers dedicated to creating meaningful experiences through thoughtful design and innovative technology."
          values={[
            {
              title: "Innovative Approach",
              description:
                "We embrace new technologies and methodologies to push boundaries.",
            },
            {
              title: "User-Centered",
              description:
                "People are at the heart of our design process and decisions.",
            },
            {
              title: "Sustainable Practices",
              description:
                "We prioritize sustainability in our work and operations.",
            },
          ]}
        />

        <Services
          id="services"
          title="Our Services"
          services={[
            {
              title: "Digital Design",
              description:
                "User experience, interface design, and digital products.",
            },
            {
              title: "Brand Strategy",
              description:
                "Visual identity, brand systems, and marketing materials.",
            },
            {
              title: "Web Development",
              description:
                "Responsive websites, applications, and e-commerce solutions.",
            },
            {
              title: "Print & Packaging",
              description:
                "Publication design, packaging, and environmental graphics.",
            },
          ]}
        />

        <Portfolio
          id="portfolio"
          title="Selected Work"
          projects={[
            {
              title: "Oceanic Research Institute",
              category: "Branding & Digital",
              imageUrl: "great_wave.webp",
              link: "#",
            },
            {
              title: "GreenTech Solutions",
              category: "Web Development",
              imageUrl: "great_wave.webp",
              link: "#",
            },
            {
              title: "Modern Architecture Quarterly",
              category: "Print & Digital",
              imageUrl: "great_wave.webp",
              link: "#",
            },
            {
              title: "Modern Architecture Quarterly",
              category: "Print & Digital",
              imageUrl: "great_wave.webp",
              link: "#",
            },
            {
              title: "Modern Architecture Quarterly",
              category: "Print & Digital",
              imageUrl: "great_wave.webp",
              link: "#",
            },
            {
              title: "Modern Architecture Quarterly",
              category: "Print & Digital",
              imageUrl: "great_wave.webp",
              link: "#",
            },
            {
              title: "Oceanic Research Institute",
              category: "Branding & Digital",
              imageUrl: "great_wave.webp",
              link: "#",
            },
          ]}
        />

        <BlogSection
          title="Latest Insights"
          posts={[
            {
              title: "The Future of Sustainable Design",
              excerpt:
                "Exploring how design can contribute to environmental sustainability...",
              date: "February 20, 2025",
              imageUrl: "great_wave.webp",
              link: "#",
            },
            {
              title: "Typography Trends for 2025",
              excerpt:
                "An analysis of emerging typography trends in digital and print media...",
              date: "February 15, 2025",
              imageUrl: "great_wave.webp",
              link: "#",
            },
          ]}
        />

        <Contact
          id="contact"
          title="Get in Touch"
          address="123 Design Avenue, Creative District"
          email="hello@moderndesign.studio"
          phone="+1 (555) 123-4567"
        />
      </div>
    </div>
  );
};

export default CurvedModernism;
