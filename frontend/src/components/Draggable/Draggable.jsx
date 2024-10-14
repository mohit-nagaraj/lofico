import React, { useRef, useState, useEffect } from 'react';

const Draggable = ({ initialPos, children }) => {
  const [pos, setPos] = useState(initialPos);
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState(null);
  const ref = useRef(null);

  /** Using useEffect to manage event listeners can be advantageous for more complex scenarios where you need to handle multiple events or perform additional logic when events occur. */
  useEffect(() => {
    /** When the dragging state changes, the useEffect hook runs again. If dragging is true, it adds event listeners for mousemove and mouseup events. If dragging is false, it removes these event listeners. */
    const onMouseMove = (e) => {
      if (!dragging) return;
      setPos({
        x: e.pageX - rel.x,
        y: e.pageY - rel.y,
      });
      e.stopPropagation();
      e.preventDefault();
    };

    const onMouseUp = (e) => {
      setDragging(false);
      e.stopPropagation();
      e.preventDefault();
    };

    if (dragging) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    } else {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
    /** returns a cleanup function that removes the event listeners when the component unmounts or when dragging changes to false. */
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging, rel]);

  const onMouseDown = (e) => {
    // Only handle left mouse button
    if (e.button !== 0) return;
    const node = ref.current;
    if (!node) return;
    const { left, top } = node.getBoundingClientRect();
    setDragging(true);
    setRel({
      x: e.pageX - left,
      y: e.pageY - top,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      style={{
        position: 'absolute',
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
