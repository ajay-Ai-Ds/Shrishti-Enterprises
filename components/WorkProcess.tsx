import { WORK_PROCESS } from "@/lib/constants";

export default function WorkProcess() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Simple 4-Step Process</h2>
          <p className="mt-3 text-gray-500">From your first call to a fully installed, quality-checked safety net — it is that simple.</p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200 mx-32" aria-hidden="true" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {WORK_PROCESS.map((step) => (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                {/* Step circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-green-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-xl shadow-green-200 mb-5">
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
