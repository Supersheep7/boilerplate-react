import { BoilerplateClass, BoilerplateHook } from './components/Boilerplate'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss';
import './Layout.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoilerplateClass />}/>
        {/*<Route path="/no" element={<NoBoilerplate />}/>*/}
      </Routes>
    </Router>
  );
}

export default App;
