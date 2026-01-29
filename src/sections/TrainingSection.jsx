import React from 'react'
import SectionArea from '../components/sectionElements/SectionArea'
import MotionDivDownToUp from '../components/animations/MotionDownToUp'
import {
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Scale,
  FileCheck,
} from 'lucide-react'
import CtaButton from '../components/buttons/CtaButton'
import content from '../content/Content'
import SectionHeader from '../components/sectionElements/SectionHeader'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

function TrainingSection() {
  const listFeatures = Object.values({
    card1: {
      icon: <Check />,
      text: 'Contratos imobiliários na prática',
    },
    card2: {
      icon: <Check />,
      text: 'Locações sem risco jurídico',
    },
    card3: {
      icon: <Check />,
      text: 'Repasses e cessões com segurança',
    },
    card4: {
      icon: <Check />,
      text: 'Como evitar nulidades e prejuízos',
    },
    card5: {
      icon: <Check />,
      text: 'Leitura e interpretação contratual',
    },
    card6: {
      icon: <Check />,
      text: 'Erros jurídicos que mais geram processos',
    },
  })

  // 🎓 Conteúdo prático, direto e baseado em casos reais.

  return (
    <div className="bg-neutral-100 text-justify">
      <SectionArea>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <MotionDivDownToUp>
              <h1 className="font-mainFont text-3xl font-bold tracking-tight lg:text-4xl text-center">
                Formação Jurídica para Corretores e Imobiliárias
              </h1>
              <p className="max-w-3xl mx-auto mt-6 text-lg sm:text-xl text-fontDarker/85 font-secondFont text-center">
                Cursos e treinamentos voltados para quem atua na linha de frente
                do mercado imobiliário.
              </p>
              <div
                className={`w-full h-px max-w-6xl mx-auto mt-6 bg-custom-divider-lighter`}
              ></div>
            </MotionDivDownToUp>
          </div>

          <MotionDivDownToUp className="mt-8 justify-evenly font-secondFont relative overflow-hidden rounded-sm bg-white w-full max-w-[800px] mx-auto px-4 py-4 shadow-lg sm:px-8 md:flex lg:gap-x-20 lg:px-20">
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-yellow-500 to-accent" />

            <div className="mx-auto md:mx-0 max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left">
              <div className="flex flex-col md:flex-row justify-center gap-4 lg:justify-start mb-6">
                <div className="bg-white/10 w-fit h-fit mx-autp md:mx-0 p-3 rounded-xl backdrop-blur-sm border-2 border-lighter">
                  <GraduationCap className="h-8 w-8 text-accent" />
                </div>
                <h1 className="font-mainFont text-title1 font-bold tracking-tight leading-6 md:text-start">
                  {' '}
                  Conteúdo prático, direto e baseado em casos reais.
                </h1>
              </div>

              {listFeatures.map((item, index) => (
                <div className="flex justify-center md:justify-start">
                  <div key={index} className="flex gap-2 text-start ">
                    <span>{item.icon}</span>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}

              <div className="mt-10 flex items-center justify-center gap-x-6 md:justify-start">
                <CtaButton
                  label="Fale com um Especialista"
                  icon={<ArrowRight className="w-4 h-4" />}
                  link={content.util.ctaWhatsapp}
                  colorMode="light"
                />
              </div>
            </div>

            <div className="relative mt-4 h-80 lg:mt-8 min-w-[200px] flex items-center justify-center lg:h-auto ">
              <div className="absolute w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px]" />
              <div className="relative z-10 bg-darker backdrop-blur-md rounded-lg p-8 border border-white/10 max-w-sm rotate-3 hover:rotate-0 transition-all duration-500 shadow-lg">
                <div className="h-2 w-20 bg-accent/60 rounded mb-4" />
                <div className="h-2 w-full bg-white/70 rounded mb-2" />
                <div className="h-2 w-full bg-white/70 rounded mb-2" />
                <div className="h-2 w-3/4 bg-white/70 rounded mb-6" />

                <div className="h-2 w-full bg-white/70 rounded mb-2" />
                <div className="h-2 w-5/6 bg-white/70 rounded mb-2" />

                <div className="mt-8 flex items-center gap-0">
                  <div className="h-10 w-10 rounded-full bg-accent/80 flex items-center justify-center font-bold text-white text-lg">
                    ✓
                  </div>
                  <div className="text-sm text-white font-medium">
                    Conteúdo Validado
                  </div>
                </div>
              </div>
            </div>
          </MotionDivDownToUp>
        </div>
      </SectionArea>
    </div>
  )
}

export default TrainingSection
