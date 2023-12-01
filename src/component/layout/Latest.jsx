import Container from "../Container"
import Flex from "../Flex"
import Head from "../Head"
import Images from "../Images"
import Paragraph from "../Paragraph"
import cardH from "../../assets/cardH.png"
import Button from "../Button"

const Latest = () => {
  return (
    <section className="pt-20 pb-24">
        <Container className="max-w-container">
            <div>
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
                <Head text="Our Latest Blog" className="text-secondaryColor font-Open text-5xl font-extrabold tracking-tighterP pb-4" as="h3"/>
                <div className="w-[412px] mx-auto">
                    <Paragraph className="text-bnrTClr text-lg font-Papri font-normal leading-8 pb-serCdP" text="We provide digital experience services to startups and small businesses." />
                </div>
            </div>
            </div>
          
            <div>
                <Flex className="justify-between">
                    <div className="w-[370px] rounded-[30px] border border-solid border-[#EFEFEF] shadow-serCdShd">
                        <div>
                            <Images src={cardH}/>
                        </div>

                        <div className="py-8 pl-8">
                          <Head className="text-latClr font-Work font-medium text-2xl leading-8" text="How to Be Ahead of Stock Changes" as="h3"/>
                          <Head className="pt-4 pb-8 text-[#474747] font-Nunito text-lg font-normal leading-6 tracking-tighterP" text="By John  - 5 Comments" as="h3"/>
                          
                        <div>
                        <Button className="text-SocialClr font-Open text-lg font-bold leading-6 relative before:absolute before:w-8 before:h-8 before:bg-serCdBr before:left-[-15px] before:top-[-4px] before:z-[-1] before:rounded-full z-20" btn="Read more"/>
                        </div>
                        </div>
                    </div>


                    <div className="w-[370px] rounded-[30px] border border-solid border-[#EFEFEF] shadow-serCdShd">
                        <div>
                            <Images src={cardH}/>
                        </div>

                        <div className="py-8 pl-8">
                          <Head className="text-latClr font-Work font-medium text-2xl leading-8" text="How to Be Ahead of Stock Changes" as="h3"/>
                          <Head className="pt-4 pb-8 text-[#474747] font-Nunito text-lg font-normal leading-6 tracking-tighterP" text="By John  - 5 Comments" as="h3"/>
                          
                        <div>
                        <Button className="text-SocialClr font-Open text-lg font-bold leading-6 relative before:absolute before:w-8 before:h-8 before:bg-serCdBr before:left-[-15px] before:top-[-4px] before:z-[-1] before:rounded-full z-20" btn="Read more"/>
                        </div>
                        </div>
                    </div>


                    <div className="w-[370px] rounded-[30px] border border-solid border-[#EFEFEF] shadow-serCdShd">
                        <div>
                            <Images src={cardH}/>
                        </div>

                        <div className="py-8 pl-8">
                          <Head className="text-latClr font-Work font-medium text-2xl leading-8" text="How to Be Ahead of Stock Changes" as="h3"/>
                          <Head className="pt-4 pb-8 text-[#474747] font-Nunito text-lg font-normal leading-6 tracking-tighterP" text="By John  - 5 Comments" as="h3"/>
                          
                        <div>
                        <Button className="text-SocialClr font-Open text-lg font-bold leading-6 relative before:absolute before:w-8 before:h-8 before:bg-serCdBr before:left-[-15px] before:top-[-4px] before:z-[-1] before:rounded-full z-20" btn="Read more"/>
                        </div>
                        </div>
                    </div>
                </Flex>
            </div>

        </Container>
    </section>
  )
}

export default Latest