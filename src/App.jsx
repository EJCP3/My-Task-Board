// import CreateTask from "./componets/CreateTask"

import Tittle from "./components/Tittle"
import ListTask from "./components/ListTask"
import CreateTask from "./components/CreateTask"

import { ContextProvider } from "./context/GlobalState"

function App() {



  return (
    <ContextProvider>
    <main className="container mx-auto p-10  w-[600px]  ">
    <Tittle/>
    <ListTask/>
    <CreateTask/>
    </main>
    </ContextProvider>
  )
}

export default App
