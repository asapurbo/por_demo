import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import cardUA from "../../assets/cardUA.png"
import cardUB from "../../assets/cardUB.png"
import cardUC from "../../assets/cardUC.png"
import Head from "../Head"
import Paragraph from "../Paragraph"
import Logo from "./Logo"

export const About = () => {
  return (
    <section className="pb-20 pt-24">
        <Container className="max-w-containerX">
            <Flex className="justify-between">
                <div className="w-abtLW relative">
                    <div className="absolute left-[91px]">
                        <picture>
                            <Images src={cardUA} alt="cardUA"/>
                        </picture>
                    </div>

                    <div className="absolute top-[266px]">
                        <picture>
                            <Images src={cardUB} alt="cardUB"/>
                        </picture>
                    </div>

                    <div className="absolute z-[-10] top-[123px]">
                        <picture>
                            <Images src={cardUC} alt="cardUC"/>
                        </picture>
                    </div>
                </div>


                <div className="w-abtRW">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="124" height="68" viewBox="0 0 124 68" fill="none">
                    <path d="M121.931 34.37C121.931 52.25 107.672 66.75 90.0882 66.75C72.5046 66.75 58.2549 52.25 58.2549 34.37C58.2549 16.49 72.5046 2 90.0882 2" stroke="#FF7628" stroke-width="2.5" stroke-miterlimit="10"/>
                    <path d="M1 52.92L15.9578 37.71" stroke="#539CF0" stroke-width="1.5" stroke-miterlimit="10"/>
                    <path d="M14.04 52.92L28.9979 37.71" stroke="#539CF0" stroke-width="1.5" stroke-miterlimit="10"/>
                    <path d="M27.0801 52.92L42.0379 37.71" stroke="#539CF0" stroke-width="1.5" stroke-miterlimit="10"/>
                    <path d="M40.1201 52.92L55.0878 37.71" stroke="#539CF0" stroke-width="1.5" stroke-miterlimit="10"/>
                    <path d="M53.1606 52.92L68.1283 37.71" stroke="#539CF0" stroke-width="1.5" stroke-miterlimit="10"/>
                    <path d="M66.2104 52.92L81.1683 37.71" stroke="#539CF0" stroke-width="1.5" stroke-miterlimit="10"/>
                    <path d="M79.2505 52.92L94.2083 37.71" stroke="#539CF0" stroke-width="1.5" stroke-miterlimit="10"/>
                    </svg>
                    </div>
                    
                    <div>
                        <Head className="text-secondaryColor font-Open text-5xl font-extrabold tracking-tighterP py-4 " text="Who We Are" as="h3"/>

                        <Paragraph className="text-bnrTClr font-Papri text-lg font-normal leading-serCdLh" text="We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, " />
                    </div>
                    <div className="pt-10">
                        <Logo/>
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}
