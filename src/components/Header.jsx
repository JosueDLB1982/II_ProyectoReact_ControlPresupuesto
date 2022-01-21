import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos, setGastos }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            <h3><a href="https://github.com/JosueDLB1982" target='blanck'>Josue Lopez - Developer Treinee</a></h3>

            {isValidPresupuesto ? ( /* Ternario que me permitirá validar si el presupuesto es válido. Al no serlo, muestra el mensaje de error en la misma pantalla componente, de ser válido, cargará el componente ControlPresupuesto */
                <ControlPresupuesto
                    gastos={gastos}
                    setGastos={setGastos}
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            ) : (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            )}
        </header>
    )
}

export default Header
