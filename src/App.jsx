import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false) /* state para verificar que el presupuesto sea válido. Se inicializa en false, porque al cargar la app el presupuesto es 0, ergo no es válido */

  const [modal, setModal] = useState(false) /* Controlará la ventana modal que se debe mostrar al hacer click en el ícono añadir gasto */
  const [animarModal, setAnimarModal] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => { /* Gracias a los estilos de transicion que hay en el index.css y las clases que apliquemos, aparecera una animación que mostrará el formulario en la ventana modal */
      setAnimarModal(true) /* Pasado el tiempo indicado, cambia el valor de setAnimarModal a true */
    }, 400)
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && ( /* No necesito validar mas de una condición, con el && verifico si se cumple para mostar el ícono de añadir gast */
        <div className='nuevo-gasto'> {/* Con eso es suficiente */}
          <img
            src={IconoNuevoGasto}
            alt='Icono Nuevo Gasto'
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
      />}

    </div>
  )
}

export default App
