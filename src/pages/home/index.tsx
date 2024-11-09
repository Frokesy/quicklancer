import Header from "../../components/defaults/Header"
import About from "../../components/sections/About"
import Categories from "../../components/sections/Categories"
import Hero from "../../components/sections/Hero"
import Openings from "../../components/sections/Openings"
import TopRated from "../../components/sections/TopRated"

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <About />
      <Openings />
      <TopRated />
    </div>
  )
}

export default Home
