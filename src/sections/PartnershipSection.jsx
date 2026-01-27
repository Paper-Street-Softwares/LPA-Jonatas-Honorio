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
} from 'lucide-react'
import content from '../content/Content'
import CtaButton from '../components/buttons/CtaButton'
import { ArrowBigDown } from 'lucide-react'
import { ArrowDown } from 'lucide-react'

function PartnershipSection() {
  return (
    <div className="bg-neutral-100 text-justify">
      <SectionArea>
        <section className="relative">
          <div className="container mx-auto">
            <MotionDivDownToUp className="space-y-16">
              <MotionDivDownToUp className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-mainFont font-bold text-black">
                  Como funciona a <span className="text-dark">parceria</span>
                </h2>
                <div
                  className={`w-full h-px max-w-6xl mx-auto mt-6 mb-6 lg:mb-12 bg-custom-divider-lighter`}
                ></div>
                <div className="h-1 w-20 bg-dark mx-auto rounded-full" />
              </MotionDivDownToUp>

              <div className="flex flex-wrap gap-6 justify-center font-secondFont">
                {[
                  {
                    step: '1',
                    title: 'Diagnóstico',
                    desc: 'Diagnóstico da operação imobiliária',
                    icon: ClipboardCheck,
                  },
                  {
                    step: '2',
                    title: 'Definição',
                    desc: 'Definição do modelo de assessoria (mensal)',
                    icon: Settings,
                  },
                  {
                    step: '3',
                    title: 'Atuação',
                    desc: 'Atuação contínua junto à equipe',
                    icon: Users,
                  },
                  {
                    step: '4',
                    title: 'Suporte',
                    desc: 'Suporte jurídico permanente',
                    icon: Shield,
                  },
                  {
                    step: '5',
                    title: 'Evolução',
                    desc: 'Atualizações, ajustes e orientação estratégica',
                    icon: TrendingUp,
                  },
                ].map((item, i) => (
                  <MotionDivDownToUp key={i} className="relative group">
                    <div className="p-6 rounded-xl border border-black/5 hover:border-dark/50 text-center h-full flex flex-col items-center hover:border-lighter cursor-pointer scale-105 transition-all duration-500 max-w-[200px] lg:max-w-[160px] xl:max-w-[200px]">
                      <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center text-xl font-bold mb-4 text-black/50">
                        {item.step}
                      </div>
                      <item.icon className="w-8 h-8 text-lighter mb-3" />
                      <h3 className="font-bold font-display text-black mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-black/60">{item.desc}</p>
                      {i < 4 && (
                        <span className="p-1 rounded-full bg-white border absolute -right-6 top-28 z-10 hidden min-[490px]:inline-flex">
                          <ArrowRight className="text-lighter" />
                        </span>
                      )}
                      {i < 4 && (
                        <span
                          className={`p-1 rounded-full bg-white border absolute -bottom-6 z-10 hidden max-[489px]:inline-flex`}
                        >
                          <ArrowDown className="text-lighter" />
                        </span>
                      )}
                    </div>
                  </MotionDivDownToUp>
                ))}
              </div>

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
