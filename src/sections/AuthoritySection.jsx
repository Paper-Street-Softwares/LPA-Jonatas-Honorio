import React from 'react'
import SectionArea from '../components/sectionElements/SectionArea'
import { motion } from 'framer-motion'
import authorityImg from '../assets/authorityImg.webp'

function AuthoritySection() {
  return (
    <SectionArea>
      <section className="bg-background relative overflow-hidden">
        <div className="container max-w-7xl mx-auto ">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 overflow-hidden shadow-2xl">
                <div className="aspect-[3/4] bg-secondary/50">
                  <img
                    src={authorityImg}
                    alt="Advogado Especialista"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              {/* <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 -z-0 hidden md:block" /> */}
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-8"
            >
              <h2 className="font-mainFont text-3xl font-bold tracking-tight text-start lg:text-4xl">
                Advocacia de{' '}
                <span className="text-primary">Alta Performance</span>
              </h2>

              <div className="space-y-6 text-lg text-black/85 font-secondFont">
                <p className="w-full max-w-6xl mx-auto text-justify">
                  Atuação focada no direito imobiliário aplicado à prática
                  diária das imobiliárias, com mais de 10 anos de experiência e
                  mais de 500 processos analisados e conduzidos, transformando
                  conhecimento jurídico em segurança operacional,
                  previsibilidade e eficiência comercial.
                </p>

                <div className="pl-6 border-l-4 border-primary italic text-black/70 bg-primary/5 py-4 pr-4 text-lg text-justify">
                  "Aqui, o jurídico não atua apenas quando o problema surge —
                  atua antes, para evitar que ele exista. "
                </div>
              </div>

              {/* <div className="pt-4">
                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                  <div>
                    <h4 className="text-3xl font-display font-bold text-primary">
                      10+
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Anos de Experiência
                    </p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-display font-bold text-primary">
                      500+
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Processos Conduzidos
                    </p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-display font-bold text-primary">
                      100%
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Comprometimento
                    </p>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>
    </SectionArea>
  )
}

export default AuthoritySection
