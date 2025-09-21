import "./Contact.css";
import FadeIn from "../../blocks/TextAnimations/FadeIn/FadeIn.jsx"; 
import ShinyText from "../../blocks/TextAnimations/ShinyText/ShinyText.jsx"; // ajuste o caminho se necessário

export default function Contact() {
  return (
    <section id="contato" className="contact-section">
      <FadeIn>
        <h2>
          <ShinyText text="Entre em contato" speed={3} />
        </h2>
      </FadeIn>

      <ul className="social-links">
        <FadeIn delay={0.2}>
          <li>
            <a
              href="https://github.com/AleMiclos"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>{" "}
              <ShinyText text="GitHub" speed={3} />
            </a>
          </li>
        </FadeIn>

        <FadeIn delay={0.4}>
          <li>
            <a
              href="https://www.linkedin.com/in/alexandre-miclos-956643258/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>{" "}
              <ShinyText text="LinkedIn" speed={3} />
            </a>
          </li>
        </FadeIn>

        <FadeIn delay={0.8}>
          <li>
            <a href="mailto:alexandremiclos@gmail.com">
              <i className="fa-solid fa-envelope"></i>{" "}
              <ShinyText text="alexandremiclos@gmail.com" speed={3} />
            </a>
          </li>
        </FadeIn>
      </ul>
    </section>
  );
}
