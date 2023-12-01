import { About } from "./component/layout/About"
import Banner from "./component/layout/Banner"
import Contact from "./component/layout/Contact"
import Creative from "./component/layout/Creative"

import Latest from "./component/layout/Latest"
import Project from "./component/layout/Project"
import Review from "./component/layout/Review"
import Services from "./component/layout/Services"


function App() {
  
  return (
    <>
       <Banner/>
       <Services/>
       <About/>
       <Project/>
       <Creative/>
       <Review/>
       <Latest/>
       <Contact/>
    </>
  )
}

export default App
