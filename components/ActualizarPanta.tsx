// A menudo, querrás que tu componente «recuerde» alguna información y 
// la muestre. Por ejemplo, quizá quieras contar el número de veces que 
// hiciste clic en un botón. Para lograrlo, añade estado a tu componente.

// 1ro se debe importar useState
import { useState } from "react";

// Se crea componente con variable de estado
// Obtendrás dos cosas de useState: el estado actual (count), y la función 
// que te permite actualizarlo (setCount). Puedes nombrarlos de cualquier 
// forma, pero la convención es llamarlos algo como [something, setSomething].
const BotonEstado = () => {
    const [contador, setContador] = useState(0);

    // se crea funcion que va a cambiar el estado
    function handleClick() {
        setContador(contador + 1);
    }

    // se crea componente que usa funcion con evento
    // y se muestra con JSX el estado
    return (
        <div>
            <button onClick={handleClick}>
                Hiciste click {contador} veces
            </button>
        </div>
    )
}

// Se crea el componente que va a contener los botones
// Incluso se puede exportar la funcion BotonEstado
const ActualizarPanta = () => {
  return (
    <div>
        <h1>Actualizar pantalla con estados individuales</h1>
        <BotonEstado></BotonEstado>
        <BotonEstado></BotonEstado>
    </div>
  )
}

export default ActualizarPanta
