import { useEffect, useState } from "react";
import styled from "styled-components";

const CursorWrapper = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;

const CursorDot = styled.div`
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
`;

const CursorRing = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease-out;
  pointer-events: none;
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorState = (e) => {
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "A" ||
          target.tagName === "BUTTON"
      );
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateCursorState);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateCursorState);
    };
  }, []);

  return (
    <CursorWrapper>
      <CursorDot
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${
            isPointer ? 1.5 : 1
          })`,
        }}
      />
      <CursorRing
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${
            isPointer ? 1.5 : 1
          })`,
        }}
      />
    </CursorWrapper>
  );
};

export default CustomCursor;
