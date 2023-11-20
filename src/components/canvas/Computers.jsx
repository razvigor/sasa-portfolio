import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = React.memo(({ isMobile }) => {
  const { scene } = useGLTF('./computer301_o.glb');

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='#804dee' skyColor='#b1e1ff' />
      <spotLight
        position={[-10, 10, -10]}
        angle={60}
        penumbra={0.35}
        distance={100}
        color='#c6b962'
        intensity={150}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={12} dispose={25} color='#c6b962' />
      <primitive
        object={scene}
        scale={isMobile ? 0.12 : 0.18}
        position={isMobile ? [0, -2.6, -1.2] : [0, -3, -0.12]}
        rotation={[0.05, 0, 0]}
      />
    </mesh>
  );
});

const ComputersCanvas = React.memo(() => {
  const [isMobile, setIsMobile] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

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
      shadows
      dpr={[1, 1]}
      camera={{ position: [0, 10, 5], fov: 25, near: 0.1, far: 50 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
});

export default ComputersCanvas;
