import { useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'

// El cubo amarillo que controla el jugador
export default function Jugador({ jugadorRef, alLlegar }) {
  // drei: lee que teclas estan apretadas
  const [, leerTeclas] = useKeyboardControls()

  // fiber: esto se repite en cada cuadro (60 veces por segundo)
  useFrame(() => {
    const teclas = leerTeclas()
    const cubo = jugadorRef.current
    const velocidad = 0.1

    if (teclas.arriba) cubo.position.z -= velocidad
    if (teclas.abajo) cubo.position.z += velocidad
    if (teclas.izquierda) cubo.position.x -= velocidad
    if (teclas.derecha) cubo.position.x += velocidad

    // Si el cubo paso la linea de B, gano
    if (cubo.position.z < -8) alLlegar()
  })

  return (
    <mesh ref={jugadorRef} position={[0, 0.5, 8]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  )
}
