import React from 'react'
import SectionArea from '../components/sectionElements/SectionArea'
import MotionDivDownToUp from '../components/animations/MotionDownToUp'
import {
  ArrowRight,
  ClipboardCheck,
  Settings,
  Users,
  Shield,
  TrendingUp,
  ArrowDown,
} from 'lucide-react'
import content from '../content/Content'
import CtaButton from '../components/buttons/CtaButton'

function PartnershipSection() {
  const steps = [
    {
      step: '1',
      title: 'Diagnóstico',
      desc: 'Diagnóstico da operação imobiliária',
      icon: ClipboardCheck,
      rodape: 'Próximo: 2',
    },
    {
      step: '2',
      title: 'Definição',
      desc: 'Definição do modelo de assessoria (mensal)',
      icon: Settings,
      rodape: 'Próximo: 3',
    },
    {
      step: '3',
      title: 'Atuação',
      desc: 'Atuação contínua junto à equipe',
      icon: Users,
      rodape: 'Próximo: 4',
    },
    {
      step: '4',
      title: 'Suporte',
      desc: 'Suporte jurídico permanente',
      icon: Shield,
      rodape: 'Próximo: 5',
    },
    {
      step: '5',
      title: 'Evolução',
      desc: 'Atualizações, ajustes e orientação estratégica',
      icon: TrendingUp,
    },
  ]

  return (
    <div className="bg-neutral-100 text-justify">
      <SectionArea>
        <section className="relative">
          <div className="container mx-auto">
            <MotionDivDownToUp className="space-y-16">
              {/* Título */}
              <MotionDivDownToUp className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-mainFont font-bold text-black">
                  Como funciona a <span className="text-dark">parceria</span>
                </h2>
                <div className="w-full h-px max-w-6xl mx-auto mt-6 mb-6 lg:mb-12 bg-custom-divider-lighter" />
                <div className="h-1 w-20 bg-dark mx-auto rounded-full" />
              </MotionDivDownToUp>

              {/* Cards */}
              <div className="flex flex-wrap gap-6 justify-center font-secondFont">
                {steps.map((item, i) => (
                  <MotionDivDownToUp key={i} className="relative">
                    {/* CARD */}
                    <div className="relative z-10 p-6 rounded-sm border border-black/5 hover:border-dark/50 text-center h-full flex flex-col items-center shadow-lg bg-white scale-105 transition-all duration-500 max-w-[200px] lg:max-w-[170px] xl:max-w-[200px]">
                      <div className="rounded-full bg-dark flex items-center justify-center text-xl font-bold mb-2 text-black/50">
                        {item.step}
                      </div>

                      <item.icon className="w-8 h-8 text-lighter mb-3" />

                      <h3 className="font-bold font-display text-black mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm text-black/60 mb-6">{item.desc}</p>

                      <span className="font-secondFont absolute bottom-0 text-[12px] mb-5 text-darker">
                        {item.rodape}
                      </span>
                    </div>

                    {/* SETA DESKTOP */}
                    {/* {i < steps.length - 1 && (
                      <span className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 z-40 hidden min-[490px]:inline-flex p-1 rounded-full bg-white border">
                        <ArrowRight className="text-lighter" />
                      </span>
                    )} */}

                    {/* SETA MOBILE */}
                    {/* {i < steps.length - 1 && (
                      <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-6 z-40 hidden max-[489px]:inline-flex p-1 rounded-full bg-white border">
                        <ArrowDown className="text-lighter" />
                      </span>
                    )} */}
                  </MotionDivDownToUp>
                ))}
              </div>

              {/* CTA */}
              <MotionDivDownToUp className="text-center">
                <CtaButton
                  label="Iniciar Parceria"
                  icon={<ArrowRight className="ml-2 h-5 w-5" />}
                  link={content.util.ctaWhatsapp}
                />
              </MotionDivDownToUp>
            </MotionDivDownToUp>
          </div>
        </section>
      </SectionArea>
    </div>
  )
}

export default PartnershipSection
