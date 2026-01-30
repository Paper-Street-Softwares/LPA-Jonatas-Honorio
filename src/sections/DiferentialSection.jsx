import React from "react";
import SectionArea from "../components/sectionElements/SectionArea";
import MotionDivDownToUp from "../components/animations/MotionDownToUp";
import { Check, CheckCircle2, Handshake } from "lucide-react";

function DiferentialSection() {
  return (
    <div className="text-justify">
      <SectionArea className={``}>
        <section className=" w-[90%] max-w-[1280px]">
          <div className="">
            <MotionDivDownToUp className="flex flex-col items-center justify-between gap-12 lg:flex-row">
              <MotionDivDownToUp className="space-y-8 lg:w-1/2">
                <h1 className="text-3xl font-bold tracking-tight text-center font-mainFont lg:text-4xl phone3:text-start">
                  Nossos <span className="text-primary">Diferenciais</span>
                </h1>

                <ul className="space-y-4 font-secondFont text-fontDarker/70">
                  {[
                    "Atuação preventiva, não reativa",
                    "Linguagem acessível ao mercado imobiliário",
                    "Visão jurídica + visão de negócio",
                    "Parceria contínua, não atendimento pontual",
                    "Experiência prática real em processos imobiliários",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 p-1 transition-colors border rounded-lg border-white/5 hover:border-primary/30"
                    >
                      <span className="p-1 rounded-full bg-lighter">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                      </span>
                      <span className="font-secondFont text-fontDarker/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </MotionDivDownToUp>

              <MotionDivDownToUp className="lg:w-1/2 font-secondFont ">
                <div className="p-10 shadow-2xl shadow-primary/10">
                  <div className="space-y-6">
                    <Handshake className="w-16 h-16 text-primary" />
                    <h1 className="text-2xl font-bold md:text-3xl font-display font-secondFont">
                      Você não contrata apenas um advogado.
                    </h1>
                    <p className="text-xl font-medium text-primary text-fontDarker/70">
                      Contrata um jurídico que entende sua operação.
                    </p>
                    <div className="w-20 h-1 rounded-full bg-primary" />
                  </div>
                </div>
              </MotionDivDownToUp>
            </MotionDivDownToUp>
          </div>
        </section>
      </SectionArea>
    </div>
  );
}

export default DiferentialSection;
