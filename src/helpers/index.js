/* Función generadora de ID */
export const generarId = () => {
    const ramdom = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return ramdom + fecha
}

/* Función para formatear fechas */
export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}