import React from 'react';
import { Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.min.css';

const AnimatedButton = () => {
  const { scale } = useSpring({
    from: { scale: 1 },
    to: async (next) => {
      while (true) {
        await next({ scale: 1.1 });
        await next({ scale: 1 });
      }
    },
    config: { tension: 200, friction: 10 },
  });

  return (
    <div>
      <animated.div style={{ transform: scale.interpolate((s) => `scale(${s})`) }}>
        <Button>Animated Button</Button>
      </animated.div>
    </div>
  );
};

export default AnimatedButton;