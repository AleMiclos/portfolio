import "./About.css";
import FadeIn from "../../blocks/TextAnimations/FadeIn/FadeIn.jsx";
import LogoLoop from "../../blocks/Animations/LogoLoop/LogoLoop.jsx";
import {
  SiAngular,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { FaCogs, FaMobileAlt, FaLaptopCode } from "react-icons/fa";

const skills = [
  {
    icon: <FaLaptopCode />,
    title: "Soluções Web",
    desc: "Sistemas web modernos, performáticos e escaláveis.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Apps Mobile",
    desc: "Aplicativos Android e iOS com React Native focados em UX.",
  },
  {
    icon: <FaCogs />,
    title: "Automação e Integração",
    desc: "Integrações com APIs, microserviços e automações robustas.",
  },
];

const techLogos = [
  { node: <SiAngular />, title: "Angular", href: "https://angular.dev" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/docs/Web/HTML",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/docs/Web/CSS",
  },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
];

export default function About() {
  return (
    <section id="sobre" className="fade-in fade-in-delay-2">
      <div className="sobreContainer">
        {/* Sobre mim */}
        <FadeIn delay={0.1}>
          <div className="sobreMimCard">
            <h2>Sobre mim</h2>
            <p>
              Sou desenvolvedor focado em criar experiências digitais modernas,
              performáticas e envolventes. Trabalho com aplicações web e mobile,
              sempre unindo tecnologia, design e usabilidade para entregar
              soluções que realmente fazem diferença.
              <br />
              <br />
              Minha missão é transformar ideias em projetos funcionais e bem
              estruturados — seja construindo do zero ou evoluindo produtos já
              existentes.
            </p>
          </div>
        </FadeIn>

        {/* O que posso fazer */}
        <FadeIn delay={0.2}>
          <h2 className="subtitulo">O que posso fazer por você?</h2>
          <div className="cardsWrapper">
            {skills.map((skill, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.2}>
                <div className="card">
                  <div className="icon">{skill.icon}</div>
                  <h3>{skill.title}</h3>
                  <p>{skill.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Logos em loop */}
        <FadeIn className="baixo" delay={0.6}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              marginTop: "3rem",
            }}
          >
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              ariaLabel="Technology partners"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
