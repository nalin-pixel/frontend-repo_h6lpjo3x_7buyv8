import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
