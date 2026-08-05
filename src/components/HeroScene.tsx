import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import type { Mesh, Group } from 'three'

function WireIcosahedron({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
  const ref = useRef<Mesh>(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * speed * 0.4
    ref.current.rotation.y += delta * speed * 0.6
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#00F5B8" wireframe transparent opacity={0.55} />
    </mesh>
  )
}

function GlassCore() {
  const ref = useRef<Mesh>(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.15
    ref.current.rotation.x += delta * 0.06
  })
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshStandardMaterial
        color="#111111"
        metalness={0.6}
        roughness={0.15}
        emissive="#00F5B8"
        emissiveIntensity={0.08}
        wireframe={false}
        transparent
        opacity={0.35}
      />
    </mesh>
  )
}

function Particles() {
  const ref = useRef<Group>(null)
  const count = 60
  const points = useRef(
    Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 6,
      y: (Math.random() - 0.5) * 6,
      z: (Math.random() - 0.5) * 4,
    }))
  ).current

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.03
  })

  return (
    <group ref={ref}>
      {points.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[0.014, 6, 6]} />
          <meshBasicMaterial color="#00F5B8" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  )
}

function CameraRig() {
  const { camera, pointer } = useThree()
  useFrame(() => {
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.04
    camera.position.y += (pointer.y * 0.4 - camera.position.y) * 0.04
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[3, 3, 3]} intensity={0.6} color="#00F5B8" />
          <GlassCore />
          <WireIcosahedron position={[1.8, 0.6, -1]} scale={0.35} speed={0.8} />
          <WireIcosahedron position={[-1.6, -0.8, -0.5]} scale={0.24} speed={1.2} />
          <WireIcosahedron position={[1.2, -1.1, 0.4]} scale={0.16} speed={1.6} />
          <Particles />
          <CameraRig />
        </Suspense>
      </Canvas>
    </div>
  )
}
