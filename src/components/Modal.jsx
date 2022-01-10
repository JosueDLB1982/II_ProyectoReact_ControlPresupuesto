import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import CerrarVtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar }) => {
    const [mensajeValidacion, setMensajeValidacion] = useState('')

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('') /* Para poder añadir fecha a las ediciones de registros de gastos */
    const [id, setId] = useState('') /* Para efectos de identificar las ediciones de registros */

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    }, [])

    const ocultarModal = () => { /* Se agrega este setTimeout, para que al cierre se vea transición */
        setAnimarModal(false) /* Para que siempre se vea la animación, la devolvemos a false, cada vez que se abra se verá */
        setGastoEditar({}) /* Al cerrar la ventana modal el state de editar gasto se borrará */
        setTimeout(() => {
            setModal(false)
        }, 400)
    }
    const handleSubmit = e => {
        e.preventDefault()

        if ([nombre, cantidad, categoria].includes('')) {
            setMensajeValidacion('Todos los Campos son Requeridos') /* Vamos a reutilizar el componente <Mensaje/> */

            setTimeout(() => {
                setMensajeValidacion('')
            }, 2000)
            return
        }
        guardarGasto({ nombre, cantidad, categoria, id, fecha }) /* Aquí se generará el objeto con las propiedades o keys de cada gasto */
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
            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
                {mensajeValidacion && <Mensaje tipo='error'>{mensajeValidacion}</Mensaje>} {/* Si mensaje tiene contenido, se cargará <Mensaje/> Mostrará el mensaje que estamos seteando en la línea 22 */}
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
                        <option value="varios">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'}
                />
            </form>
        </div>
    )
}

export default Modal
