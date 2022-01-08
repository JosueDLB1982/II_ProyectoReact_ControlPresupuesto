import CerrarVtn from '../img/cerrar.svg'

const Modal = ({ setModal }) => {
    const ocultarModal = () => {
        setModal(false)
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
        </div>
    )
}

export default Modal
