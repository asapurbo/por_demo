import Container from "../Container"
import Flex from "../Flex"
import Head from "../Head"
import Images from "../Images"
import List from "../List"
import cardA from "../../assets/CardA.png"
import cardB from "../../assets/cardB.png"
import cardC from "../../assets/cardC.png"
import cardD from "../../assets/cardD.png"
import cardE from "../../assets/cardE.png"
import cardF from "../../assets/cardF.png"

const Project = () => {
  return (
    <section className="pt-20 pb-24">
      <Container className="max-w-container">
        <div className="text-center">
        <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="124" height="68" viewBox="0 0 124 68" fill="none">
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
    
        <div className="text-center">
        <Head className="text-secondaryColor font-Open text-5xl font-extrabold tracking-tighterP py-4 " text="Work Showcase" as="h3"/>
        </div>

        <div className="pt-12 pb-14">
          <Flex>
            <List className="text-bnrTClr font-Open text-2xl font-semibold hover:text-primaryColor duration-300 px-5" href="#" text="All"/>

            <List className="text-bnrTClr font-Open text-2xl font-semibold hover:text-primaryColor duration-300 px-5" href="#" text="Digital Mkt"/>

            <List className="text-bnrTClr font-Open text-2xl font-semibold hover:text-primaryColor duration-300 px-5" href="#" text="Branding"/>

            <List className="text-bnrTClr font-Open text-2xl font-semibold hover:text-primaryColor duration-300 px-5" href="#" text="Content Mkt"/>

            <List className="text-bnrTClr font-Open text-2xl font-semibold hover:text-primaryColor duration-300 px-5" href="#" text="Social Media Mkt"/>
          </Flex>
        </div>

        <div>
            <Flex className="justify-between">
                <Images src={cardA} />
                <Images src={cardB} />
                <Images src={cardC} />
            </Flex>
            <Flex className="justify-between pt-8">
                <Images src={cardD} />
                <Images src={cardE} />
                <Images src={cardF} />
            </Flex>
        </div>
      </Container>
    </section>
  )
}

export default Project