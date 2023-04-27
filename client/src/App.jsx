import { Navbar, Footer, Welcome, Transations, Services } from "./components"

const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transations />
      <Footer />
    </div>
  )
}

export default App
