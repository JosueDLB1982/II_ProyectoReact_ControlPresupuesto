import Gasto from "./Gasto"

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados }) => {
    return (
        <div className="listado-gastos contenedor">

            {filtro ? ( /* Si existe un filtro seleccionado, iteramos sobre él */
                <>
                    <h2>{gastosFiltrados.length ? 'gastos' : 'No hay gastos en la categoría seleccionada'}</h2>
                    {gastosFiltrados.map(gasto => (
                        <Gasto
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGasto}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2>{gastos.length ? 'gastos' : 'No hay gastos aún'}</h2>
                    {gastos.map(gasto => ( /* Caso contrario, iteramos sobre todos los gastos */
                        <Gasto
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGasto}
                        />
                    ))}
                </>
            )
            }
        </div>
    )
}

export default ListadoGastos
