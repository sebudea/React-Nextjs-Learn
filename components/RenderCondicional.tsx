// Se muestra codigo con condiciones

// Se define content, que es lo que se va a mostrar
let content;

// Se define la condicion que va a hacer que se cumpla una cosa u otra
// en este caso si es true, muestra el AdminPanel
// si es false muestra el LoginForm
let isLoggedIn = true;

// Se definen los componentes propios de la condicion
// que solo pueden ser accedidos desde RenderCondicional
// por eso no tienen la sentencia export
const AdminPanel = () => {
  return (
    <div>AdminPanel</div>
  )
}

const LoginForm = () => {
  return (
    <div>LoginForm</div>
  )
}

// Se define el componente codicional, efectivo para roles
const RenderCondicional = () => {
  if (isLoggedIn) {
    content = <AdminPanel></AdminPanel>;
  } else {
    content = <LoginForm></LoginForm>;
  }
  return (
    <div>
      <h1>Render condicional</h1>
      {content}
    </div>
  )
}

export default RenderCondicional