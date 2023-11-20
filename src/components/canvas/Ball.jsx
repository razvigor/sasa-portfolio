import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = React.memo((props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 5, 10]} />
      <directionalLight
        castShadow
        position={[3.3, 1, 4.4]}
        shadow-mapSize={[1024, 1024]}
      >
        <orthographicCamera attach='shadow-camera' args={[-10, 10, 10, -10]} />
      </directionalLight>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color='#5271ff'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
});

const BallCanvas = React.memo(({ icon }) => {
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
      dpr={[1, 1]}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
});

export default BallCanvas;
