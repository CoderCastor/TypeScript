
import { useState } from "react";
import Box from "./components/Box";


function App() {

  const [val, setVal] = useState<string>('')
  
  return (
    <div>
      <Box label="Search" value={val} setter={setVal} />
    </div>
  );
}

export default App;
