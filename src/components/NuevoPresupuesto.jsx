import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {
    const [mensaje, setMensaje] = useState('    ')

    const handlePresupuesto = (e) => {
        e.preventDefault()
        if(!presupuesto || presupuesto < 0){
            setMensaje('No es un presupuesto válido')
            return /* interrumpe la ejecución del if, para que sólo ejecute la primera parte, si no es válido el presupuesto. De serlo, se debe cargar el componente Gastos */
        }
        setMensaje('') /* No vovler a mostrar el mensaje de error, en caso de que el usuario haya cometido un error */
        setIsValidPresupuesto(true)
        console.log(presupuesto)
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handlePresupuesto} className='formulario'>
                <div className='campo'>
                    <label>Definir Presupuesto</label>
                    <input
                        className='nuevo-presupuesto'
                        type='number'
                        placeholder='Añade tu Presupuesto'
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                    <input type="submit" value='Añadir' />
                    {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto
