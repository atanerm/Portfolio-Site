import Card from './components/Card.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="page-wrapper">
      <main>
        <section className="hero">
          <Card />
        </section>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App
