import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import List from "../List"
import Button from "../Button"
import Logo from "../../assets/Logo.png"


const Nav = () => {
  return (
    <nav className="pt-8 w-full">
      <Container className="max-w-container">
          <Flex>
            <div className="w-2/12">
              <picture>
                 <Images src={Logo} alt="Logo"/>
              </picture>
            </div>
            <div className="w-8/12 py-4">
              <Flex>
                <List href="#" text="Home" className="px-8 font-Open text-lg font-semibold text-secondaryColor hover:text-primaryColor duration-300" />
                <List href="#" text="About" className="px-8 font-Open text-lg font-semibold text-secondaryColor hover:text-primaryColor duration-300" />
                <List href="#" text="Service" className="px-8 font-Open text-lg font-semibold text-secondaryColor hover:text-primaryColor duration-300" />
                <List href="#" text="Portfolio" className="px-8 font-Open text-lg font-semibold text-secondaryColor hover:text-primaryColor duration-300" />
                <List href="#" text="Price" className="px-8 font-Open text-lg font-semibold text-secondaryColor hover:text-primaryColor duration-300" />
                <List href="#" text="Blog" className="px-8 font-Open text-lg font-semibold text-secondaryColor hover:text-primaryColor duration-300" />
              </Flex>
            </div>
            
            <div className="w-2/12 text-right">
               <Button className="py-3.5 px-7 rounded-navBtn bg-primaryColor text-white font-Open text-lg font-semibold" btn="Contact Us" />
            </div>
          </Flex>
      </Container>
    </nav>
  )
}

export default Nav