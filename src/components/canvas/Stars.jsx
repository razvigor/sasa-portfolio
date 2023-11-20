import React from 'react';
import { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = React.memo((props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, 0.8]}>
      <Points ref={ref} positions={sphere} stride={4} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
});

const StarsCanvas = React.memo(() => {
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
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ preserveDrawingBuffer: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
});

export default StarsCanvas;
