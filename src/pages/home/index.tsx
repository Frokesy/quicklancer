import Header from "../../components/defaults/Header"
import About from "../../components/sections/About"
import Categories from "../../components/sections/Categories"
import Hero from "../../components/sections/Hero"

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <About />
    </div>
  )
}

export default Home
