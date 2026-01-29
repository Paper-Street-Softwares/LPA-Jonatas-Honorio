import MotionDivDownToUp from '../components/animations/MotionDownToUp.jsx'
import CtaButton from '../components/buttons/CtaButton'
import CardFeatures from '../components/cards/CardFeatures'
import SectionArea from '../components/sectionElements/SectionArea'
import SectionHeader from '../components/sectionElements/SectionHeader.jsx'
import content from '../content/Content'

export default function Features() {
  return (
    <>
      <div className="bg-neutral-100">
        <SectionArea>
          <div className="flex flex-col items-center mx-auto max-w-7xl ">
            <h1 className="font-mainFont text-3xl font-bold tracking-tight lg:text-4xl text-center">
              {content.features.texts.titulo}
            </h1>
            <p className="max-w-3xl mx-auto mt-6 text-lg sm:text-xl text-fontDarker/85 font-secondFont text-center">
              {content.features.texts.subtitulo}
            </p>
            <div
              className={`w-full h-px max-w-6xl mx-auto mt-6 mb-6 lg:mb-12 bg-custom-divider-lighter`}
            ></div>
            <div className="flex flex-col items-start gap-10 mb-16 md:flex-row md:flex-wrap md:justify-center">
              {content.features.cards
                .filter((card) => card.index !== 0)
                .map((card) => (
                  <CardFeatures modal={false} key={card.index} {...card} />
                ))}
            </div>

            {/* <CtaButton
              icon={content.util.svgWhatsapp}
              link={content.util.ctaWhatsapp}
              label={content.features.texts.labelBotaoPrincial}
              colorMode="dark"
            /> */}
            {/* <p className="max-w-3xl mx-auto text-lg sm:text-xl text-fontDarker/85 font-secondFont text-justify">
              📌 Não realizamos atendimentos avulsos para clientes finais. Nosso
              foco é parceria jurídica profissional e contínua.
            </p> */}
          </div>
        </SectionArea>
      </div>
    </>
  )
}
