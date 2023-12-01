import Container from "../Container"
import Flex from "../Flex"
import Head from "../Head"
import Images from "../Images"
import Paragraph from "../Paragraph"
import Nav from "./Nav"
import cardXB from "../../assets/cardXB.png"
import Button from "../Button"


const Banner = () => {
  return (
    <>
    <Nav/>
    <section className="py-52 w-full">
      <Container className="max-w-container">
        <Flex>
          <div className="w-BnrW">
            <div>
                <Head text="We Are Digital #Marketing# Agency" className="text-secondaryColor font-Open text-7xl font-extrabold" as="h1"/>
            </div>
            <div className="pt-5 w-BnrP">
            <Paragraph className="font-Papri text-xl font-normal leading-9 text-bnrTClr" text="Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. "/>
            </div>
            <div className="pt-16">
            <Button className="py-3.5 px-7 rounded-navBtn bg-primaryColor text-white font-Open text-lg font-semibold" btn="Get Free Quoto" />
            </div>
          </div>

          <div className="relative w-ful w-96	ml-10">
            <div className="absolute top-32  w-bnrCdW z-10">
                <picture>
                    <Images src={cardXB} className="w-full" alt="cardXB"/>
                </picture>
            </div>
            <div className="absolute left-72 bottom-[149px] w-bnrCdW z-0">
                <picture>
                    <Images src={cardXB} className="w-full" alt="cardXB"/>
                </picture>
            </div>
          </div>
        </Flex>
         

          
      </Container>
    </section>  
    </>
    
  )
}

export default Banner