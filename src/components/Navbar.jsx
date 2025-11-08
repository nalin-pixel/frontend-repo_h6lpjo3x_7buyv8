import { ShoppingCart, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 shadow-inner" />
          <span className="text-xl font-semibold tracking-tight text-slate-800">Resin Reverie</span>
        </div>

        <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-8">
          <div className="flex items-center gap-2 w-full px-3 py-2 rounded-xl bg-white/60 border border-white/40 shadow-sm backdrop-blur">
            <Search className="w-4 h-4 text-slate-500" />
            <input
              className="w-full bg-transparent outline-none text-sm placeholder:text-slate-400"
              placeholder="Search resin art, trays, coasters…"
              aria-label="Search"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/70 border border-white/40 shadow-sm hover:shadow transition">
            <ShoppingCart className="w-5 h-5 text-slate-700" />
            <span className="hidden sm:inline text-sm font-medium text-slate-800">Cart</span>
            <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow">2</span>
          </button>
        </div>
      </div>
    </header>
  );
}
