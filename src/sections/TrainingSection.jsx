import React from "react";
import SectionArea from "../components/sectionElements/SectionArea";
import MotionDivDownToUp from "../components/animations/MotionDownToUp";
import {
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Scale,
  FileCheck,
} from "lucide-react";
import CtaButton from "../components/buttons/CtaButton";
import content from "../content/Content";
import SectionHeader from "../components/sectionElements/SectionHeader";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

function TrainingSection() {
  const listFeatures = Object.values({
    card1: {
      icon: <Check />,
      text: "Contratos imobiliários na prática",
    },
    card2: {
      icon: <Check />,
      text: "Locações sem risco jurídico",
    },
    card3: {
      icon: <Check />,
      text: "Repasses e cessões com segurança",
    },
    card4: {
      icon: <Check />,
      text: "Como evitar nulidades e prejuízos",
    },
    card5: {
      icon: <Check />,
      text: "Leitura e interpretação contratual",
    },
    card6: {
      icon: <Check />,
      text: "Erros jurídicos que mais geram processos",
    },
  });

  // 🎓 Conteúdo prático, direto e baseado em casos reais.

  return (
    <div className="text-justify bg-neutral-100">
      <SectionArea>
        <div className="container relative z-10 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <MotionDivDownToUp>
              <h1 className="text-3xl font-bold tracking-tight text-center font-mainFont lg:text-4xl">
                Formação Jurídica para Corretores e Imobiliárias
              </h1>
              <p className="max-w-3xl mx-auto mt-6 text-lg text-center sm:text-xl text-fontDarker/85 font-secondFont">
                Cursos e treinamentos voltados para quem atua na linha de frente
                do mercado imobiliário.
              </p>
              <div
                className={`w-full h-px max-w-6xl mx-auto mt-6 bg-custom-divider-lighter`}
              ></div>
            </MotionDivDownToUp>
          </div>

          <MotionDivDownToUp className="mt-8 p-8 lg:p-16 justify-evenly font-secondFont relative overflow-hidden rounded-sm bg-white w-full max-w-[800px] mx-auto  shadow-lg  md:flex lg:gap-x-20">
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-yellow-500 to-accent" />

            <div className="max-w-md mx-auto text-center md:mx-0 lg:mx-0 lg:flex-auto lg:text-left">
              <div className="flex flex-col justify-center gap-4 mb-6 md:flex-row lg:justify-start">
                <div className="p-3 border-2 bg-white/10 w-fit h-fit mx-autp md:mx-0 rounded-xl backdrop-blur-sm border-lighter">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
                <h1 className="font-bold leading-6 tracking-tight font-mainFont text-title1 text-start">
                  {" "}
                  Conteúdo prático, direto e baseado em casos reais.
                </h1>
              </div>

              {listFeatures.map((item, index) => (
                <div className="flex justify-start md:justify-start">
                  <div key={index} className="flex gap-2 text-start ">
                    <span>{item.icon}</span>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-center mt-10 gap-x-6 md:justify-start">
                <CtaButton
                  label="Fale com um Especialista"
                  icon={<ArrowRight className="w-4 h-4" />}
                  link={content.util.ctaWhatsapp}
                  colorMode="light"
                />
              </div>
            </div>

            <div className="relative mb-2 mt-10 tablet1:mb-0 tablet1:mt-0 min-w-[200px] flex items-center justify-center lg:h-auto ">
              <div className="absolute w-[280px] h-[280px] bg-accent/20 rounded-full blur-[100px]" />
              <div className="relative z-10 max-w-sm p-8 transition-all duration-500 border rounded-lg shadow-lg bg-darker backdrop-blur-md border-white/10 rotate-3 hover:rotate-0">
                <div className="w-20 h-2 mb-4 rounded bg-accent/60" />
                <div className="w-full h-2 mb-2 rounded bg-white/70" />
                <div className="w-full h-2 mb-2 rounded bg-white/70" />
                <div className="w-3/4 h-2 mb-6 rounded bg-white/70" />

                <div className="w-full h-2 mb-2 rounded bg-white/70" />
                <div className="w-5/6 h-2 mb-2 rounded bg-white/70" />

                <div className="flex items-center gap-0 mt-8">
                  <div className="flex items-center justify-center w-10 h-10 text-lg font-bold text-white rounded-full bg-accent/80">
                    ✓
                  </div>
                  <div className="text-sm font-medium text-white">
                    Conteúdo Validado
                  </div>
                </div>
              </div>
            </div>
          </MotionDivDownToUp>
        </div>
      </SectionArea>
    </div>
  );
}

export default TrainingSection;
