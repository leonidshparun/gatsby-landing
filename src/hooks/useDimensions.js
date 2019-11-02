import { useState, useCallback, useLayoutEffect } from 'react';

const getDimensionObject = node => {
  const rect = node.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
    top: 'x' in rect ? rect.x : rect.top,
    left: 'y' in rect ? rect.y : rect.left,
    x: 'x' in rect ? rect.x : rect.left,
    y: 'y' in rect ? rect.y : rect.top,
    right: rect.right,
    bottom: rect.bottom
  };
};

const useDimensions = ({ liveMeasure = true }) => {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);

  const ref = useCallback(el => {
    setNode(el);
  }, []);

  useLayoutEffect(() => {
    const measure = () =>
      window.requestAnimationFrame(() =>
        setDimensions(getDimensionObject(node))
      );

    if (node) {
      measure();
      if (liveMeasure) {
        window.addEventListener('resize', measure);
        window.addEventListener('scroll', measure);
      }
    }
    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', measure);
    };
  }, [liveMeasure, node]);

  return [ref, dimensions, node];
};

export default useDimensions;