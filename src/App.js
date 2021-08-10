import React from "react";
import Collapsible from "./Collapsible";

function App() {
  return (
    <div>
      <Collapsible label="Click me">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
        commodi culpa, id tempora officia eligendi ratione provident magnam
        voluptatem fuga, beatae totam,
      </Collapsible>
      <Collapsible label="Collapse for more">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </Collapsible>
      <Collapsible label="🧒">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
        commodi culpa, id tempora officia eligendi ratione provident magnam
        voluptatem fuga, beatae totam, consequatur ad ducimus veritatis animi
        tenetur impedit ipsa.
      </Collapsible>
    </div>
  );
}

export default App;
