
const user = {
  name: "Sebastian A",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

// Para Mostrar datos se deben poner llaves {clase.atributo}
const Perfil = () => {
  return (
    <div>
      <h1>Mostrar datos</h1>
      <h2>{user.name}</h2>
      <img src={user.imageUrl} alt={user.name}
        className="rounded-full"
        style={{
          width: user.imageSize,
          height: user.imageSize
        }} />
    </div>
  )
}

export default Perfil