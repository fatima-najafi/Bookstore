import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Categories from './pages/Categories';
import Books from './pages/Books';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/bookstore-cms/" element={<Books />} />
          <Route path="/bookstore-cms/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
