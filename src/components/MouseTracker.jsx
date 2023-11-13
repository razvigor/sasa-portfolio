import { useState, useEffect } from 'react';

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: -10000, y: -10000 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX - 300, y: e.clientY - 300 });
    };
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none hidden md:block rounded-full overflow-hidden fixed z-30 transition duration-300 radial-blue-gradient w-[600px] h-[600px]`}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    ></div>
  );
};

export default MouseTracker;
