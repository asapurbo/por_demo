import Container from "../Container"
import Flex from "../Flex"
import Head from "../Head"
import Images from "../Images"
import Paragraph from "../Paragraph"
import cardK from "../../assets/cardK.png"
import cardJ from "../../assets/cardJ.png"
import cardI from "../../assets/cardI.png"


const Review = () => {
  return (
    <section className="pt-24 pb-28">
        <Container className="max-w-container">
            <Flex className="justify-between"> 
                <div className="w-[346px]">
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
                        <Head className="text-secondaryColor font-Open text-5xl font-extrabold tracking-tighterP py-4 " text="Client Review" as="h3"/>

                        <Paragraph className="text-bnrTClr font-Papri text-lg font-normal leading-serCdLh" text="people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  " />
                    </div>

                    <div className="mt-2">
                      <Flex>
                        <div className="mr-6 cursor-pointer">
                            <Images src={cardK} />
                        </div>
                        <div>
                            <Images src={cardJ} className="cursor-pointer" />
                        </div>
                      </Flex>
                    </div>
                </div>

                <div className="pl-10 pt-6 pr-14 pb-14 w-[370px] bg-cdOne rounded-serCdR shadow-serCdShd">
                    <Paragraph className="text-bnrTClr font-Papri text-lg font-normal leading-serCdLh" text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient." />
                    
                   
                <div className="pt-2"> 
                    <Flex>
                        <div className="mr-2">
                            <Images src={cardI} />
                        </div>


                        <div>
                            <Head className="text-SocialClr font-Open text-2xl font-semibold tracking-tighterP" text="Jane Cooper" as="h3"/>
                            <Head className="pt-2 text-SocialClr font-Open text-lg font-normal tracking-tighterP" text="Fashion Designer" as="h4"/>
                        </div>
                    </Flex>
                 </div>
                </div>




                <div className="pl-10 pt-6 pr-14 pb-14 w-[370px] bg-white rounded-serCdR shadow-serCdShd">
                    <Paragraph className="text-bnrTClr font-Papri text-lg font-normal leading-serCdLh" text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient." />
                    
                   
                <div className="pt-2"> 
                    <Flex>
                        <div className="mr-2">
                            <Images src={cardI} />
                        </div>


                        <div>
                            <Head className="text-SocialClr font-Open text-2xl font-semibold tracking-tighterP" text="Eleanor Pena" as="h3"/>
                            <Head className="pt-2 text-SocialClr font-Open text-lg font-normal tracking-tighterP" text="Architecture" as="h4"/>
                        </div>
                    </Flex>
                  </div>
                </div>

                
            </Flex>
        </Container>
    </section>
  )
}

export default Review