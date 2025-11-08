import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-pink-200/70 via-purple-200/60 to-blue-200/60 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-amber-200/60 via-rose-200/60 to-fuchsia-200/60 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-800"
            >
              Handcrafted Resin Art that Captures Light
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-slate-600 text-lg"
            >
              Explore trays, coasters, jewelry dishes, and bespoke pieces—each poured with colors that shimmer and textures that feel like glass.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 flex items-center gap-3"
            >
              <button className="px-5 py-3 rounded-xl bg-slate-900 text-white font-medium shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 transition">
                Shop Collection
              </button>
              <button className="px-5 py-3 rounded-xl bg-white/70 border border-white/50 backdrop-blur font-medium text-slate-800 shadow-sm hover:shadow transition">
                Custom Orders
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-white/60 border border-white/40 backdrop-blur p-2 shadow-xl">
              <div className="h-full w-full rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617196905108-0748f7df1ea0?q=80&w=1887&auto=format&fit=crop"
                  alt="Resin art hero"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
