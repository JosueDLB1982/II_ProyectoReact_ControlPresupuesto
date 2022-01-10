import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [gastos, setGastos] = useState([])

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )

  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false) /* state para verificar que el presupuesto sea válido. Se inicializa en false, porque al cargar la app el presupuesto es 0, ergo no es válido */

  const [modal, setModal] = useState(false) /* Controlará la ventana modal que se debe mostrar al hacer click en el ícono añadir gasto */
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) { /* Si hay algo en editar gasto abre la ventana modal con el formulario */
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true)
      }, 400)
    }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0 /* Buscará un presupuesto en local storage, si lo consigue, asigna ese, de no conseguirlo, le asigna 0 */
    if(presupuestoLS > 0 ) {
      setIsValidPresupuesto(true) /* Con el propósito de que si hay un presupuesto guardado en el LS no aparezca la pantalla de asignar presupuesto */
    }
  }, [])


  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({}) /* Para que al clickear el boton nuevo gasto, el formulario salga vacío, de ese modo sólo al editar aparece lleno, con los datos del gasto en cuestión. */

    setTimeout(() => { /* Gracias a los estilos de transicion que hay en el index.css y las clases que apliquemos, aparecera una animación que mostrará el formulario en la ventana modal */
      setAnimarModal(true) /* Pasado el tiempo indicado, cambia el valor de setAnimarModal a true */
    }, 400)
  }

  const guardarGasto = gasto => { /* Esta función manejará los gastos */
    if(gasto.id) {
      const gastoActualizado = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState) /* Si los id son iguales es una edicion y retorna gasto que es el objeto actualizado, caso contrario es un registro nuevo, retorna gastoState que es la informacion del state */
      setGastos(gastoActualizado)
      setGastoEditar({}) /* Luego de editar un gasto devuelve el state a vacío */
    } else {
      gasto.fecha = Date.now()
      gasto.id = generarId()
      setGastos([...gastos, gasto]) /* Hacemos una copia del arreglo gastos y le añadimos el nuevo gasto, que es el objeto que viene de <Modal/> */
    }
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 400)
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados)
  }


  return (
    <div className={modal ? 'fijar' : ''}> {/* Esto es con el proposito de que si hay scroll por muchos gastos, y voy a añadir otro, aparexca la ventana modal sobre todo. Si modal esta activa, aplica la clase fijar */}
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && ( /* No necesito validar mas de una condición, con el && verifico si se cumple para mostar el ícono de añadir gast */
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          </main>

          <div className='nuevo-gasto'> {/* Con eso es suficiente */}
            <img
              src={IconoNuevoGasto}
              alt='Icono Nuevo Gasto'
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
      />}

    </div>
  )
}

export default App
