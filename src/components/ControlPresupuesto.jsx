const ControlPresupuesto = ({ presupuesto }) => {
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
                    <span>Disponible: </span>{formatearCantidad(0)} {/* Colocamos valor estático 0, sólo para ir construyendo el componente */}
                </p>

                <p>
                    <span>Gastado: </span>{formatearCantidad(0)} {/* Luego que se creen las funciones, se añade el valor dinámico */}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto
