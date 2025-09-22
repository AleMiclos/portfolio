import { useState } from "react";
import Nav from "../Nav/Nav";
import Typewriter from "./Typewriter";
import './Header.css';
import { FaDownload } from "react-icons/fa";
import ShinyText from "../../blocks/TextAnimations/ShinyText/ShinyText";
import ShinyHr from "../../blocks/TextAnimations/ShinyHr/ShinyHr";
import LightRays from "../../blocks/Backgrounds/LightRays/LightRays.jsx";
import { GoArrowDown } from "react-icons/go";

export default function Header() {
  const [firstDone, setFirstDone] = useState(false);

  return (
    <>
      <Nav />
      {/* Container principal com position: relative que envolve tudo */}
      <div className="header-container">
        <div className="lightrays-wrapper">
          <LightRays
            raysOrigin="top-center"
            raysColor="#bec6c6ff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        {/* A sua seção de cabeçalho com o conteúdo principal */}
        <section id="header" className="hero-section">
          <div className="name">
            <ShinyText
              text="Olá, eu sou Alexandre Miclos"
              disabled={false}
              speed={3}
              className="custom-class"
            />
            <ShinyHr speed={3} />
            <Typewriter
              text="Engenheiro de Computação e Desenvolvedor Full Stack"
              speed={80}
              onFinish={() => setFirstDone(true)}
            />
            {/* O bloco a seguir só será renderizado quando firstDone for true */}
            {firstDone && (
              <div className="button fade-in">
                <a
                  href="https://drive.google.com/file/d/1lA7urtrMNAkxZSYfUcDTT3RZ4yfcmepI/view?usp=sharing"
                  download
                  className="btn"
                >
                  <FaDownload /> Curriculo
                </a>
                <a href="#sobre" className="btn-1">
                  <GoArrowDown />
                </a>
                <a href="#contato" className="btn">
                  Contato
                </a>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}