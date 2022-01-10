import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({ gastos, presupuesto }) => {
    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0) /* al total le irá sumando cada gasto individual, eso me dará el total de gastos */
        const totalDisponible = presupuesto - totalGastado /* Simplemente le restamos al total lo que se va gastando */

        /* Calculo del porcentaje gastado del presupuesto asignado */
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)
        setDisponible(totalDisponible)
        setGastado(totalGastado)
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje) /* Con el proposito de que la gráfica se actualice 1.5 seg despues de añadir el gasto y obtener un mejor */
        }, 1000) /* aspecto visual */
    }, [gastos])

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? '#dc2626' : '#3b82f6', /* Si el porcentaje de gastado supera el 100% el color de la gráfica */
                        trailColor: '#f5f5f5',                                 /* cambia a rojo */
                        textColor: porcentaje > 100 ? '#dc2626' : '#3b82f6'  /* De igual modo el texto de la gráfica */
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                />
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>

                <p className={`${disponible < 0 ? 'negativo' : ''}`}> {/* Si se agota el presupuesto, el disponible cambia a color rojo mediante la aplicación de la clase negativo */}
                    <span>Disponible: </span>{formatearCantidad(disponible)} {/* controlado por el state disponible, muestra el dinero del presupuesto*/}
                </p>

                <p>
                    <span>Gastado: </span>{formatearCantidad(gastado)} {/* controlado por el state gastado muestra el total de gastos */}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto
