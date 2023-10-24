// Responder a eventos como clicks

// Se define el evento
const HandleClick = () => {
    alert("¡Me hiciste click!")
}

// Se crea el componente que llama al evento si ocurre algo
const ResponderEvent = () => {
    return (
        <div>
            <h1>Responder eventos</h1>
            <button onClick={HandleClick}>
                Hazme Click que respondo
            </button>
        </div>
    )
}

export default ResponderEvent