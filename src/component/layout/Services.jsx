import Container from "../Container"
import Flex from "../Flex"
import Head from "../Head"
import Images from "../Images"
import Paragraph from "../Paragraph"
import cardYA from "../../assets/cardYA.png"
import cardYB from "../../assets/cardYB.png"
import cardYC from "../../assets/cardYC.png"
import Button from "../Button"

const Services = () => {
  return (
    <section className="pt-16 pb-24">
        <Container className="max-w-container text-center">
            <div>
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
                <Head text="Our Services" className="text-secondaryColor font-Open text-5xl font-extrabold tracking-tighterP pb-4" as="h3"/>
                <div className="w-serTxt mx-auto">
                    <Paragraph className="text-bnrTClr text-lg font-Papri font-normal leading-8 pb-serCdP" text="We have been providing great flooring solutions service." />
                </div>
            </div>
         
            
            <Flex className="justify-between">
                <div className="px-11 w-serCdW shadow-serCdShd rounded-serCdR bg-cdOne pt-serCdP pb-14 text-center">
                    <Images src={cardYA} className="inline-block" alt="cardYA"/>
                    <Head className="text-SocialClr font-Open text-3xl font-semibold leading-9 pb-5 pt-7" text="Marketing Strategy" as="h3"/>
                    <Paragraph className="font-Papri text-lg font-normal leading-serCdLh text-bnrTClr px-2 pb-6" text="Social Media has changed the way we interact & do business while creating"/>
                    <div>
                        <Button className="text-SocialClr font-Open text-lg font-bold leading-6 relative before:absolute before:w-8 before:h-8 before:bg-serCdBr before:left-[-15px] before:top-[-4px] before:z-[-1] before:rounded-full z-20" btn="Read more"/>
                    </div>
                </div>

                <div className="px-10 w-serCdW shadow-serCdShd rounded-serCdR bg-cdHClr pt-serCdP pb-14 text-center">
                    <Images src={cardYB} className="inline-block" alt="cardYB"/>
                    <Head className="text-SocialClr font-Open text-3xl font-semibold leading-9 pb-5 pt-7" text="Social Marketing" as="h3"/>
                    <Paragraph className="font-Papri text-lg font-normal leading-serCdLh text-bnrTClr pb-6" text="Social Media has changed the way we interact & do business while creating a new avenue."/>
                    <div>
                        <Button className="text-SocialClr font-Open text-lg font-bold leading-6 relative before:absolute before:w-8 before:h-8 before:bg-serCdBr before:left-[-15px] before:top-[-4px] before:z-[-1] before:rounded-full z-20" btn="Read more"/>
                    </div>
                </div>

                <div className="px-10 w-serCdW shadow-serCdShd rounded-serCdR bg-cdTwo pt-serCdP pb-14 text-center">
                    <Images src={cardYC} className="inline-block" alt="cardYC"/>
                    <Head className="text-SocialClr font-Open text-3xl font-semibold leading-9 pb-5 pt-7" text="Content Marketing" as="h3"/>
                    <Paragraph className="font-Papri text-lg font-normal leading-serCdLh text-bnrTClr pb-6" text="Content Marketing is the other fold of online advertisement. If you are looking to build"/>
                    <div>
                        <Button className="text-SocialClr font-Open text-lg font-bold leading-6 relative before:absolute before:w-8 before:h-8 before:bg-serCdBr before:left-[-15px] before:top-[-4px] before:z-[-1] before:rounded-full z-20" btn="Read more"/>
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Services