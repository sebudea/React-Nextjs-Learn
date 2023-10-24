// Si queremos que ambos botones tengan el mismo estado
import { useState } from "react";

// Definir los tipos esperados para las props del componente BotonEstado
type BotonEstadoProps = {
    contador: number;
    onClick: () => void;
}

// el evento recibe los props
const BotonEstado = ({ contador, onClick }: BotonEstadoProps) => {
    return (
        <button onClick={onClick}>
            Hiciste click {contador} veces
        </button>
    )
}

// el componente a exportar debe tener el estado y la funcion para cambiar el estado
// se deben pasar los props a los componenetes BotonEstado, tanto el estado
// como la funcion o evento
const ActualizarPanta2 = () => {
    const [contador, setContador] = useState(0);

    function handleClick() {
        setContador(contador + 1);
    }
    return (
        <div>
            <h1>Actualizar pantalla con estados compartidos</h1>
            <BotonEstado contador={contador} onClick={handleClick}></BotonEstado>
            <BotonEstado contador={contador} onClick={handleClick}></BotonEstado>
        </div>
    )
}

export default ActualizarPanta2
