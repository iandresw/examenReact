import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Producto from './component/Producto.jsx'
import Suma from './component/Suma.jsx';
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
