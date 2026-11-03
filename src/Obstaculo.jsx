import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// Esfera roja que va de lado a lado y choca con el jugador
export default function Obstaculo({ z, velocidad, jugadorRef, alChocar }) {
  const esferaRef = useRef()

  // fiber: esto se repite en cada cuadro (60 veces por segundo)
  useFrame(({ clock }) => {
    const esfera = esferaRef.current

    // Math.sin va de -1 a 1, por 4 la esfera va de x = -4 a x = 4
    esfera.position.x = Math.sin(clock.elapsedTime * velocidad) * 4

    // Si esta a menos de 1 de distancia del jugador, hay choque
    if (esfera.position.distanceTo(jugadorRef.current.position) < 1) {
      alChocar()
    }
  })

  return (
    <mesh ref={esferaRef} position={[0, 0.5, z]}>
      <sphereGeometry args={[0.5]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}
