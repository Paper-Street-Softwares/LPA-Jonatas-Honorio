import React from 'react'
import SectionArea from '../components/sectionElements/SectionArea'
import MotionDivDownToUp from '../components/animations/MotionDownToUp'
import { Briefcase, CheckCircle2, Target, Scale } from 'lucide-react'
import SectionHeader from '../components/sectionElements/SectionHeader'

function ServicesSection() {
  return (
    <div className="text-justify">
      <SectionArea>
        {' '}
        <section className="bg-secondary/20 relative">
          <div className="container max-w-7xl mx-auto">
            <MotionDivDownToUp
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-16"
            >
              <MotionDivDownToUp className="text-center space-y-4">
                <h2 className="font-mainFont text-3xl font-bold tracking-tight lg:text-4xl text-center">
                  O que fazemos
                </h2>
                <p className="max-w-3xl mx-auto mt-6 text-lg sm:text-xl text-fontDarker/85 font-secondFont text-center">
                  Contrato mensal de acompanhamento jurídico preventivo e
                  estratégico.
                </p>
              </MotionDivDownToUp>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-secondFont">
                {/* Card 1 */}
                <MotionDivDownToUp className="lg:max-w-[311px] mx-auto group p-8 rounded-0 border shadow-lg cursor-pointer h-fit border-white/5 hover:border-daker/50 transition-all duration-300 hover:shadow-2xl hover:shadow-daker/5">
                  <div className="mb-6 p-4 rounded-lg bg-daker/10 w-fit group-hover:bg-daker/20 transition-colors border-2 border-solid border-lighter">
                    <Briefcase
                      className="text-darker/50"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display text-black">
                    Assessoria Jurídica Contínua para Imobiliárias
                  </h3>
                  <p className="text-fontDarker/70 mb-4">
                    Contrato mensal de acompanhamento jurídico preventivo e
                    estratégico.
                  </p>
                  <p className="text-sm text-daker font-semibold mb-3">
                    Inclui:
                  </p>
                  <ul className="space-y-2 text-fontDarker/70">
                    {[
                      'Elaboração, revisão e padronização de contratos imobiliários',
                      'Apoio jurídico à equipe comercial durante negociações',
                      'Análise de riscos antes da assinatura de contratos',
                      'Consultoria em locações, repasses e cessões',
                      'Orientação jurídica para evitar passivos futuros',
                      'Suporte técnico em decisões sensíveis da operação',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-daker shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </MotionDivDownToUp>

                {/* Card 2 */}
                <MotionDivDownToUp className="lg:max-w-[311px] mx-auto group p-8 rounded-0 border shadow-lg cursor-pointer h-fit border-white/5 hover:border-daker/50 transition-all duration-300 hover:shadow-2xl hover:shadow-daker/5">
                  <div className="mb-6 p-4 rounded-lg bg-daker/10 w-fit group-hover:bg-daker/20 transition-colors border-2 border-solid border-lighter">
                    <Target
                      className="text-darker/50"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display text-black">
                    Consultoria Jurídica Estratégica
                  </h3>
                  <p className="text-fontDarker/70 mb-4">
                    Atuação consultiva para gestores e proprietários de
                    imobiliárias.
                  </p>
                  <ul className="space-y-2 text-fontDarker/70">
                    {[
                      'Estruturação jurídica do negócio imobiliário',
                      'Análise de modelos operacionais e contratos',
                      'Diagnóstico de riscos jurídicos ocultos',
                      'Estratégias para crescimento com segurança jurídica',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-daker shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </MotionDivDownToUp>

                {/* Card 3 */}
                <MotionDivDownToUp className="lg:max-w-[311px] mx-auto group p-8 rounded-0 border shadow-lg cursor-pointer h-fit border-white/5 hover:border-daker/50 transition-all duration-300 hover:shadow-2xl hover:shadow-daker/5">
                  <div className="mb-6 p-4 rounded-lg bg-daker/10 w-fit group-hover:bg-daker/20 transition-colors border-2 border-solid border-lighter">
                    <Scale
                      className="text-darker/50"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display text-black">
                    Direito Imobiliário Aplicado à Prática
                  </h3>
                  <p className="text-fontDarker/70 mb-4">
                    Nada de teoria distante da realidade.
                  </p>
                  <p className="text-sm text-daker font-semibold mb-3">
                    Trabalhamos com:
                  </p>
                  <ul className="space-y-2 text-fontDarker/70">
                    {[
                      'Situações reais do mercado imobiliário',
                      'Casos concretos',
                      'Problemas recorrentes de imobiliárias',
                      'Soluções jurídicas aplicáveis no dia a dia',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-daker shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </MotionDivDownToUp>
              </div>
            </MotionDivDownToUp>
          </div>
        </section>
      </SectionArea>
    </div>
  )
}

export default ServicesSection
