// Punto A (verde) y punto B (azul) pintados en el suelo
export default function Zonas() {
  return (
    <>
      {/* Punto A: donde empieza el jugador */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 8]}>
        <planeGeometry args={[10, 2]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Punto B: la meta */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -9]}>
        <planeGeometry args={[10, 2]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  )
}