/* Función generadora de ID */
export const generarId = () => {
    const ramdom = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return ramdom + fecha
}