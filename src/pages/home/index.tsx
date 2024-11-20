import Header from "../../components/defaults/Header"
import About from "../../components/sections/About"
import Blog from "../../components/sections/Blog"
import Categories from "../../components/sections/Categories"
import Hero from "../../components/sections/Hero"
import Openings from "../../components/sections/Openings"
import Plans from "../../components/sections/Plans"
import Testimonials from "../../components/sections/Testimonials"
import TopRated from "../../components/sections/TopRated"
import TrustedBrands from "../../components/sections/TrustedBrands"

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <About />
      <Openings />
      <TopRated />
      <Plans />
      <Testimonials />
      <Blog />
      <TrustedBrands />
    </div>
  )
}

export default Home
