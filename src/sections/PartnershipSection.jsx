import React from 'react'
import SectionArea from '../components/sectionElements/SectionArea'
import MotionDivDownToUp from '../components/animations/MotionDownToUp'
import {
  ArrowRight,
  ClipboardCheck,
  Users,
  Shield,
  TrendingUp,
  ArrowDown,
  Search,
  Lightbulb,
  BarChart3,
  Settings,
  Target,
} from 'lucide-react'
import content from '../content/Content'
import CtaButton from '../components/buttons/CtaButton'

function PartnershipSection() {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico',
      description: 'Diagnóstico da operação imobiliária',
      icon: Search,
      color: 'bg-darker',
    },
    {
      number: '02',
      title: 'Definição',
      description: 'Definição do modelo de assessoria (mensal)',
      icon: Lightbulb,
      color: 'bg-darker',
    },
    {
      number: '03',
      title: 'Atuação',
      description: 'Atuação contínua junto à equipe.',
      icon: BarChart3,
      color: 'bg-darker',
    },
    {
      number: '04',
      title: 'Suporte',
      description: 'Suporte jurídico permanente.',
      icon: Settings,
      color: 'bg-darker',
    },
    {
      number: '05',
      title: 'Evolução',
      description: 'Atualizações, ajustes e orientação estratégica',
      icon: Target,
      color: 'bg-darker',
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

              <section className="w-full">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-16">
                    {steps.map((step, index) => {
                      const Icon = step.icon

                      return (
                        <div
                          key={index}
                          className="relative bg-white sm:max-w-[300px] rounded-sm shadow-md px-6 pt-14 pb-6 text-center font-secondFont"
                        >
                          {/* Seta superior */}
                          <div
                            className={`absolute -top-4 left-1/2 -translate-x-1/2 w-[90%] h-12 ${step.color} text-white font-bold text-2xl flex items-center justify-center clip-arrow`}
                          >
                            {step.number}
                          </div>

                          <h3 className="mt-4 font-semibold text-lg text-darker">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                            {step.description}
                          </p>

                          <div className="mt-8 flex justify-center">
                            <Icon className="w-8 h-8 text-darker" />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>

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
