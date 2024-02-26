import React from 'react'
import Header from "../components/Header";
import Hero from "../components/hero";
import Mission from "../components/mission";
import Featured from "../components/Featured";
import Collections from "../components/Collections";
import Footer from "../components/Footer";
function Home() {
  return (
   <>
 <Header />
<Hero/>
<Mission />
<Featured/>
<Collections/>
<Footer />
   </>
  )
}

export default Home