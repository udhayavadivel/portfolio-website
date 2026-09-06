'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars, Line } from '@react-three/drei';
import * as THREE from 'three';

const GlowingGlobe = () => {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.2;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.1;
      innerRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={outerRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial 
          color="#00f5ff" 
          wireframe={true} 
          transparent={true} 
          opacity={0.3} 
        />
      </mesh>
      <mesh ref={innerRef}>
        <sphereGeometry args={[1.6, 64, 64]} />
        <MeshDistortMaterial
          color="#0066ff"
          distort={0.4}
          speed={2}
          transparent={true}
          opacity={0.15}
          emissive="#0066ff"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

const DataCubes = () => {
  const cubes = useMemo(() => {
    return Array.from({ length: 8 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
      color: ['#00f5ff', '#0066ff', '#8b5cf6'][Math.floor(Math.random() * 3)]
    }));
  }, []);

  return (
    <group>
      {cubes.map((cube, i) => (
        <Float key={i} speed={2} floatIntensity={2} rotationIntensity={2}>
          <mesh position={cube.position} rotation={cube.rotation}>
            <boxGeometry args={[0.2, 0.2, 0.2]} />
            <meshStandardMaterial 
              color={cube.color}
              emissive={cube.color}
              emissiveIntensity={0.8}
              transparent={true}
              opacity={0.8}
              roughness={0.1}
              metalness={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const NeuralNodes = () => {
  const nodeCount = 12;
  const nodes = useMemo(() => {
    return Array.from({ length: nodeCount }).map(() => {
      const radius = 2.5 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      return new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
    });
  }, []);

  const lines = useMemo(() => {
    const connections: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 4) {
          connections.push([nodes[i], nodes[j]]);
        }
      }
    }
    return connections;
  }, [nodes]);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      groupRef.current.children.forEach((child, i) => {
        if (child.type === 'Mesh') {
          const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.2;
          child.scale.set(scale, scale, scale);
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={`node-${i}`} position={pos}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#00f5ff" />
        </mesh>
      ))}
      
      {lines.map((pair, i) => (
        <Line
          key={`line-${i}`}
          points={[pair[0], pair[1]]}
          color="#00f5ff"
          opacity={0.3}
          transparent={true}
          lineWidth={1}
        />
      ))}
    </group>
  );
};

const MouseCamera = () => {
  const { camera } = useThree();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    const targetX = mousePos.x * 0.5;
    const targetY = mousePos.y * 0.5;
    
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export default function HeroScene() {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        style={{ position: 'absolute', inset: 0 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#00f5ff" />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#8b5cf6" />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={3000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
        
        <GlowingGlobe />
        <DataCubes />
        <NeuralNodes />
        <MouseCamera />
      </Canvas>
    </div>
  );
}
