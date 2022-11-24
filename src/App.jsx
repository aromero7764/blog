import Article1 from "./components/Article1"
import Article2 from "./components/Article2"
import Article3 from "./components/Article3"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"


function App() {
  

  return (
    <div className="App">
    <NavBar />
    <Hero />
    <div className="container">
      {/*  START ARTICLE FEED */}
        <section className="articles">
          <div className="column is-8 is-offset-2">
          <Article1 />
          <Article2 />
          <Article3 />


          </div>
        </section>
       {/* END ARTICLE FEED */}
        </div>
     
    </div>
  )
}

export default App
