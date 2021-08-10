import React, { useState, useRef } from "react";

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);
  const contentElement = useRef();
  if (contentElement.current) console.log(contentElement.current.scrollHeight);

  return (
    <div className="Collapsible">
      <button
        className="toggle"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {props.label}
      </button>
      <div
        className={`content ${!isOpen ? "hidden" : null}`}
        ref={contentElement}
        style={{
          height:
            contentElement.current && isOpen
              ? contentElement.current.scrollHeight
              : 0,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Collapsible;
