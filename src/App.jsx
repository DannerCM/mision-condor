import { Canvas } from '@react-three/fiber'

export default function App() {
  return (
    <Canvas camera={{ position: [0, 12, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} />

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 20]} />
        <meshStandardMaterial color="#555" />
      </mesh>
    </Canvas>
  )
}
