import { useState, useRef } from 'react';
// import { useDispatch } from 'react-redux';

const Draggable = ({ initialPos, children }) => {
  
  // const dispatch = useDispatch();

  const [pos, setPos] = useState(initialPos);
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const onMouseDown = (e) => {

    const { left, top } = ref.current.getBoundingClientRect();
    setDragging(true);
    setRel({
      x: e.pageX - left,
      y: e.pageY - top,
    });
    e.stopPropagation();
    e.preventDefault();
  };

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
    if (dragging) {
      setDragging(false);
      e.stopPropagation();
      e.preventDefault();
    }
  };

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      style={{
        position: 'absolute',
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        cursor: dragging ? 'grabbing' : 'default', // Add a visual cue for dragging
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
