import Header from "./componentes/header"
import SalesCard from "./componentes/SalesCard"

function App() {
  return (
    <>

      <Header />
      <main>
        <section id="sales">
          <div class="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
