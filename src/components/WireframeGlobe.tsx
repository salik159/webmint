import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Group, Mesh } from 'three'

// A handful of node markers placed on the sphere surface (lat, lon in degrees).
const NODE_COORDS: [number, number][] = [
  [40, -74], // New York
  [51, 0], // London
  [19, 73], // Mumbai
  [35, 139], // Tokyo
  [-33, 151], // Sydney
  [1, 103], // Singapore
]

function latLonToVec3(lat: number, lon: number, radius: number): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  const x = -radius * Math.sin(phi) * Math.cos(theta)
  const z = radius * Math.sin(phi) * Math.sin(theta)
  const y = radius * Math.cos(phi)
  return [x, y, z]
}

function Globe() {
  const groupRef = useRef<Group>(null)
  const nodeRefs = useRef<(Mesh | null)[]>([])

  const nodePositions = useMemo(
    () => NODE_COORDS.map(([lat, lon]) => latLonToVec3(lat, lon, 1.52)),
    []
  )

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18
    }
    const t = state.clock.elapsedTime
    nodeRefs.current.forEach((mesh, i) => {
      if (!mesh) return
      const s = 1 + Math.sin(t * 2 + i) * 0.35
      mesh.scale.setScalar(s)
    })
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1.5, 28, 20]} />
        <meshBasicMaterial color="#00F5B8" wireframe transparent opacity={0.32} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.5, 28, 20]} />
        <meshBasicMaterial color="#00F5B8" transparent opacity={0.03} />
      </mesh>
      {nodePositions.map((pos, i) => (
        <mesh key={i} position={pos} ref={(el) => { nodeRefs.current[i] = el }}>
          <sphereGeometry args={[0.028, 8, 8]} />
          <meshBasicMaterial color="#FFD166" />
        </mesh>
      ))}
    </group>
  )
}

function Starfield() {
  const positions = useMemo(() => {
    const count = 120
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4 - 1
    }
    return arr
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#3a4a52" size={0.02} transparent opacity={0.7} />
    </points>
  )
}

export default function WireframeGlobe() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 42 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <Starfield />
          <Globe />
        </Suspense>
      </Canvas>
    </div>
  )
}
