import { Container } from "./components/Container"
function App() {


  return (
    <>
      <header className="ctr wh hdr">
        <h1 className="title">Práctica ToDoList</h1>
      </header>
      <main className="screen b pad">
        <Container />
      </main>
      <footer className="ctr wh foot">
        <p>footer</p>
      </footer>
    </>
  )
}

export default App
