import React, { Suspense, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Float, Html } from '@react-three/drei';

interface WallProps {
  position: [number, number, number];
  args: [number, number, number];
  rotation?: [number, number, number];
}

const Wall: React.FC<WallProps> = memo(({ position, args, rotation = [0, 0, 0] }) => (
  <mesh position={position} rotation={rotation}>
    <boxGeometry args={args} />
    <meshStandardMaterial color="#222" metalness={0.6} roughness={0.2} />
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[args[0] + 0.02, args[1] + 0.02, args[2] + 0.02]} />
      <meshBasicMaterial color="#b18d59" wireframe />
    </mesh>
  </mesh>
));

const ArchitecturalModel: React.FC = memo(() => {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.1} />
      </mesh>
      
      {/* Grid Helper */}
      <gridHelper args={[20, 20, 0xb18d59, 0x333333]} position={[0, -0.49, 0]} />

      {/* Basic Villa Layout Representation */}
      <Wall position={[-4, 1.5, -4]} args={[0.2, 4, 8]} />
      <Wall position={[4, 1.5, -4]} args={[0.2, 4, 8]} />
      <Wall position={[0, 1.5, -8]} args={[8, 4, 0.2]} />
      
      {/* Internal Walls */}
      <Wall position={[0, 1.5, -4]} args={[0.1, 4, 4]} />
      <Wall position={[-2, 1.5, -2]} args={[4, 4, 0.1]} />

      {/* Floating Callouts */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Html position={[-4, 3, -4]} distanceFactor={10} center>
          <div className="bg-primary/90 backdrop-blur px-3 py-1 text-white text-[8px] font-bold uppercase tracking-widest whitespace-nowrap pointer-events-none shadow-xl border border-white/20">
            Load Bearing Column A1
          </div>
        </Html>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Html position={[2, 2.5, -7]} distanceFactor={10} center>
          <div className="bg-charcoal/90 backdrop-blur px-3 py-1 text-primary border border-primary text-[8px] font-bold uppercase tracking-widest whitespace-nowrap pointer-events-none shadow-xl">
            HVAC Core Integration
          </div>
        </Html>
      </Float>

      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Html position={[0, 0, 2]} distanceFactor={10} center>
          <div className="bg-white/10 backdrop-blur px-4 py-2 text-white border border-white/20 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap pointer-events-none shadow-xl">
            Precision BIM Layer: 14.02
          </div>
        </Html>
      </Float>

      {/* Central Aesthetic Element */}
      <mesh position={[0, 0, -4]}>
        <boxGeometry args={[1, 0.1, 1]} />
        <meshStandardMaterial color="#b18d59" emissive="#b18d59" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
});

const ProjectExplorer3D: React.FC = () => {
  return (
    <div className="w-full h-full bg-charcoal relative overflow-hidden">
      <div className="absolute top-6 left-6 z-10 pointer-events-none select-none">
        <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] block mb-2">Technical Preview</span>
        <h3 className="text-white font-headline text-xl font-bold uppercase tracking-tighter">BIM Structural Analysis</h3>
        <p className="text-white/40 text-[9px] uppercase tracking-widest mt-2 max-w-[200px]">
          Interactive 3D environment powered by MBSYS engineering data.
        </p>
      </div>

      <div className="absolute bottom-6 left-6 z-10 flex gap-4 pointer-events-none select-none">
        <div className="flex items-center gap-2 text-white/40 text-[8px] font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[14px]">mouse</span>
            Orbit
        </div>
        <div className="flex items-center gap-2 text-white/40 text-[8px] font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[14px]">pinch</span>
            Zoom
        </div>
      </div>

      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[12, 12, 12]} fov={35} />
          <OrbitControls 
            enablePan={true} 
            maxPolarAngle={Math.PI / 2.1} 
            minDistance={5} 
            maxDistance={25}
            autoRotate
            autoRotateSpeed={0.5}
          />
          
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
          <spotLight position={[-10, 15, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
          
          <ArchitecturalModel />
          
          <Environment preset="city" />
          <ContactShadows position={[0, -0.49, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
        </Suspense>
      </Canvas>
      
      <div className="absolute inset-0 pointer-events-none border border-white/5"></div>
    </div>
  );
};

export default ProjectExplorer3D;