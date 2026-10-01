import Card from './components/Card.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="page-wrapper">
      <main>
        <section className="hero">
        <Card />
        </section>
        <About />
        <Education />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App