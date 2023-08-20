import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Categories from './pages/Categories';
import Home from './pages/Home';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
