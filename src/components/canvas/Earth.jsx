import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = React.memo(() => {
  const earth = useGLTF('./of_planes_and_satellites.glb');

  return (
    <mesh>
      <primitive object={earth.scene} scale={30} position={[0, 0, 0]} />
    </mesh>
  );
});

const EarthCanvas = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, [initialized]);

  if (!initialized) {
    return <div></div>;
  }

  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      camera={{
        fov: 10,
        near: 0.1,
        far: 500,
        position: [14, 15, 25],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
