import { useState } from 'react'
import CerrarVtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState('')

    const ocultarModal = () => { /* Se agrega este setTimeout, para que al cierre se vea transición */
        setTimeout(() => {
            setModal(false)
        }, 400)
        setAnimarModal(false) /* Para que siempre se vea la animación, la devolvemos a false, cada vez que se abra se verá */
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarVtn}
                    alt="Cerrar ventana modal"
                    onClick={ocultarModal}
                />
            </div>
            <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                <legend>Nuevo Gasto</legend>
                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Añade el Nombre del Gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)} /* Se le asignará al state el valor que el usuario coloque en el input */
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="number"
                        placeholder='Añade la Cantidad de Presupuesto Asignado al Gasto'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Categoría del Gasto</label>
                    <select
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                            <option value="">-- Seleccione --</option>
                            <option value="ahorro">Ahorro</option>
                            <option value="comida">Comida</option>
                            <option value="casa">Casa</option>
                            <option value="gastos">Gastos</option>
                            <option value="ocio">Ocio</option>
                            <option value="salud">Salud</option>
                            <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value="Añadir Gasto"    
                />
            </form>
        </div>
    )
}

export default Modal
