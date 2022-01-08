import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from './containers/calculator';

export const App = (): JSX.Element => {
  return (
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Calculator/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;