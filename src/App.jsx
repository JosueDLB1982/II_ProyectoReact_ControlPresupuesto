import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false) /* state para verificar que el presupuesto sea válido. Se inicializa en false, porque al cargar la app el presupuesto es 0, ergo no es válido */

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
    </div>
  )
}

export default App
