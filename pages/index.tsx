import ActualizarPanta from '@/components/ActualizarPanta'
import ActualizarPanta2 from '@/components/ActualizarPanta2'
import Game from '@/components/App3Lineas'
import Board from '@/components/App3Lineas'
import Juego from '@/components/App3Lineas'
import Boton from '@/components/Componente'
import Perfil from '@/components/MostrarDatos'
import RenderCondicional from '@/components/RenderCondicional'
import RenderListas from '@/components/RenderListas'
import ResponderEvent from '@/components/ResponderEvent'
import React from 'react'


const Index = () => {
  return (
    <div>
      <h1>Bienvenido a mi app, index</h1>
      <Boton></Boton>
      <Perfil></Perfil>
      <RenderCondicional></RenderCondicional>
      <RenderListas></RenderListas>
      <ResponderEvent></ResponderEvent>
      <ActualizarPanta></ActualizarPanta>
      <ActualizarPanta2></ActualizarPanta2>
      <div>
        <h2>Juego 3 en linea</h2>
        <Game></Game>
      </div>
    </div>
  )
}

// Las palabras clave export default especifican el componente principal en el archivo
export default Index
