import './App.css'
import Counter from './components/Counter'
import Cart from './components/Cart'
import CounterContextProvider from './contexts/CounterContextProvider'

function App() {

  return (
    <>
      <CounterContextProvider>
        <Counter />
        <Cart />
      </CounterContextProvider>
    </>
  )
}

export default App
