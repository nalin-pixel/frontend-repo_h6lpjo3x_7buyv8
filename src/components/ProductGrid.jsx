import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Aurora Coaster Set',
    price: 38,
    image:
      'https://images.unsplash.com/photo-1617196034796-ae6e5a0e0a0b?q=80&w=1935&auto=format&fit=crop',
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'Opaline Trinket Tray',
    price: 46,
    image:
      'https://images.unsplash.com/photo-1608571424415-b3f96ce26d1f?q=80&w=1887&auto=format&fit=crop',
    tag: 'New',
  },
  {
    id: 3,
    name: 'Galactic Wall Art',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1559334416-97393aa0cbd3?q=80&w=1887&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Iridescent Jewelry Dish',
    price: 32,
    image:
      'https://images.unsplash.com/photo-1605559424843-9e4c0b3de558?q=80&w=1887&auto=format&fit=crop',
  },
];

export default function ProductGrid() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-16 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-200/60 via-sky-200/60 to-indigo-200/60 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">Featured Pieces</h2>
            <p className="text-slate-600 mt-1">One-of-a-kind creations poured in small batches.</p>
          </div>
          <button className="px-4 py-2 rounded-xl bg-white/70 border border-white/40 shadow-sm font-medium text-slate-800">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-2xl bg-white/60 border border-white/40 backdrop-blur p-3 shadow hover:shadow-lg transition"
            >
              <div className="relative overflow-hidden rounded-xl">
                {p.tag && (
                  <span className="absolute left-3 top-3 z-10 text-xs px-2 py-1 rounded-full bg-slate-900/80 text-white shadow">
                    {p.tag}
                  </span>
                )}
                <img src={p.image} alt={p.name} className="h-56 w-full object-cover rounded-xl" />
              </div>
              <div className="mt-3 flex items-start justify-between">
                <div>
                  <h3 className="text-slate-800 font-medium leading-tight">{p.name}</h3>
                  <p className="text-slate-600 text-sm mt-0.5">Resin + pigment, hand-poured</p>
                </div>
                <span className="text-slate-900 font-semibold">${p.price}</span>
              </div>
              <button className="mt-3 w-full px-3 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium shadow hover:shadow-md transition opacity-0 group-hover:opacity-100">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
