import './App.css'
import { FoodDeliveryForm } from './components/FoodDeliveryForm'
import { TypicalForm } from './components/TypicalForm'

function App() {

  return (
    <>
      <div className="container">
        <div className="mx-5">
          <div>
            <FoodDeliveryForm />
            <TypicalForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
