// Texto encima del juego: las muertes y el mensaje de victoria
export default function Marcador({ muertes, gano }) {
  return (
    <div style={{ position: 'absolute', top: 20, left: 20, color: 'white', fontSize: 30 }}>
      <p>Muertes: {muertes}</p>
      {gano && <p>¡Ganaste!</p>}
    </div>
  )
}
