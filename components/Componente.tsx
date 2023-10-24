// con comando rafc puedes crear 3 tipos de funciones arrow componentes

// las variantes de rafc es igual a :
// export default function Page() {
//   return <h1>Hello, Next.js!</h1>
// }

// Los nombres de los componentes de React siempre deben comenzar con mayúscula, mientras las etiquetas HTML deben estar minúsculas.
// export const Boton = () => {
//   return (
//     <button>Boton</button>
//   )
// }


// Tu componente NO puede devolver múltiples etiquetas de JSX. Debes envolverlas en un padre compartido, como <div>...</div> o en un envoltorio vacío <>...</>

const Boton = () => {
  return (
    <div>
      <h1>Componente</h1>
      <button>Boton</button>
    </div>

  )
}

export default Boton