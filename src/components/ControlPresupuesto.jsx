import { useState, useEffect } from "react"

const ControlPresupuesto = ({ gastos, presupuesto }) => {
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
       const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0) /* al total le irá sumando cada gasto individual, eso me dará el total de gastos */
        console.log(totalGastado)
        setGastado(totalGastado)
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
                <p>Aquí irá la gráfica de gastos</p>
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>

                <p>
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
