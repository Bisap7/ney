import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import BirthdayPage from './BirthdayPage';
import VirtualBirthday from './VirtualBirthday';
import RealPage from './RealPage';
import TheEnd from './TheEnd';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/birthday" element={<BirthdayPage />} />
        <Route path="/virtual-birthday" element={<VirtualBirthday />} />
        <Route path="/realpage" element={<RealPage />} />
        <Route path="/theend" element={<TheEnd />} />
        
        {/* Optional: 404 page for unmatched routes */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;