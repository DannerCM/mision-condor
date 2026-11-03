import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from '@react-three/drei'
import Jugador from './Jugador'
import Obstaculo from './Obstaculo'
import Zonas from './Zonas'
import Marcador from './Marcador'

// Que tecla hace que cosa
const teclas = [
  { name: 'arriba', keys: ['ArrowUp', 'w'] },
  { name: 'abajo', keys: ['ArrowDown', 's'] },
  { name: 'izquierda', keys: ['ArrowLeft', 'a'] },
  { name: 'derecha', keys: ['ArrowRight', 'd'] },
]

export default function App() {
  const jugadorRef = useRef()
  const [muertes, setMuertes] = useState(0)
  const [gano, setGano] = useState(false)

  // Cuando un obstaculo toca al cubo: +1 muerte y vuelve a A
  function morir() {
    setMuertes(muertes + 1)
    jugadorRef.current.position.set(0, 0.5, 8)
  }

  return (
    <KeyboardControls map={teclas}>
      <Canvas camera={{ position: [0, 12, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} />

        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10, 20]} />
          <meshStandardMaterial color="#555" />
        </mesh>

        <Jugador jugadorRef={jugadorRef} alLlegar={() => setGano(true)} />

        <Obstaculo z={4} velocidad={1} jugadorRef={jugadorRef} alChocar={morir} />
        <Obstaculo z={0} velocidad={2} jugadorRef={jugadorRef} alChocar={morir} />
        <Obstaculo z={-4} velocidad={3} jugadorRef={jugadorRef} alChocar={morir} />
      </Canvas>

    <Marcador muertes={muertes} gano={gano} />
    </KeyboardControls>
  )
}
