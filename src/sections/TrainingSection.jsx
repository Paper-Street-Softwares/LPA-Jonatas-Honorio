import React from 'react'
import SectionArea from '../components/sectionElements/SectionArea'
import MotionDivDownToUp from '../components/animations/MotionDownToUp'
import { GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react'
import CtaButton from '../components/buttons/CtaButton'
import content from '../content/Content'

function TrainingSection() {
  return (
    <div className="bg-neutral-100 text-justify">
      <SectionArea>
        <section className="relative">
          <div className="container max-w-7xl mx-auto">
            <MotionDivDownToUp className="flex flex-col lg:flex-row items-center gap-16">
              <MotionDivDownToUp className="lg:w-1/2 space-y-8">
                {/* <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 mx-auto desktop1:mx-0 w-fit">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider font-secondFont">
                    Formação
                  </span>
                </div> */}

                <h2 className="font-mainFont text-3xl font-bold tracking-tight lg:text-4xl text-center desktop1:text-start">
                  Formação Jurídica para Corretores e Imobiliárias
                </h2>

                <p className="max-w-3xl mx-auto mt-6 text-lg sm:text-xl text-fontDarker/85 font-secondFont text-center desktop1:text-start">
                  Cursos e treinamentos voltados para quem atua na linha de
                  frente do mercado imobiliário.
                </p>

                <div className="p-6 rounded-lg border border-white/5 font-secondFont">
                  <p className="text-primary font-semibold mb-4">
                    Temas abordados:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-fontDarker/85">
                    {[
                      'Contratos imobiliários na prática',
                      'Locações sem risco jurídico',
                      'Repasses e cessões com segurança',
                      'Como evitar nulidades e prejuízos',
                      'Leitura e interpretação contratual',
                      'Erros jurídicos que mais geram processos',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <p className="text-black font-medium font-secondFont">
                    Conteúdo prático, direto e baseado em casos reais.
                  </p>
                </div>
              </MotionDivDownToUp>

              <MotionDivDownToUp className="lg:w-1/2 relative font-secondFont">
                <div className="relative z-10 overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-primary/20 to-secondary/50 p-12">
                  <div className="text-center space-y-8">
                    <GraduationCap className="w-24 h-24 text-primary mx-auto" />
                    <h3 className="text-2xl font-display font-bold text-black">
                      Capacite sua equipe
                    </h3>
                    <p className="text-muted-foreground">
                      Treinamentos personalizados para sua imobiliária
                    </p>
                    <CtaButton
                      label="Solicitar Treinamento"
                      icon={<ArrowRight className="ml-2 h-5 w-5" />}
                      link={content.util.ctaWhatsapp}
                    />
                  </div>
                </div>
              </MotionDivDownToUp>
            </MotionDivDownToUp>
          </div>
        </section>
      </SectionArea>
    </div>
  )
}

export default TrainingSection
