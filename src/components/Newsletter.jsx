export default function Newsletter() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-white/60 border border-white/40 backdrop-blur p-8 shadow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-800">Get 10% off your first custom order</h3>
              <p className="text-slate-600 mt-1">Join our studio list for drops, behind-the-scenes, and care tips.</p>
            </div>
            <form className="flex w-full sm:w-auto gap-2">
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 sm:w-72 px-4 py-3 rounded-xl bg-white/70 border border-white/40 outline-none placeholder:text-slate-400"
              />
              <button type="submit" className="px-5 py-3 rounded-xl bg-slate-900 text-white font-medium shadow hover:shadow-md transition">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
