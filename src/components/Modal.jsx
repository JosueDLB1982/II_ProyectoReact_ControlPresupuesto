import CerrarVtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
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
            </form>
        </div>
    )
}

export default Modal
