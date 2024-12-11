import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Empleado from './component/Empleados.jsx'
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/Empleado' element={<Empleado/>} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
