import { useEffect, useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [active, setActive] = useState("header");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
      if (current) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="dotNav">
      <a href="#header" className={`dot ${active === "header" ? "active" : ""}`} />
      <a href="#sobre" className={`dot ${active === "sobre" ? "active" : ""}`} />
      <a href="#projects" className={`dot ${active === "projects" ? "active" : ""}`} />
      <a href="#contato" className={`dot ${active === "contato" ? "active" : ""}`} />
    </nav>
  );
}
