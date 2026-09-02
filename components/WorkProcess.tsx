import { WORK_PROCESS } from "@/lib/constants";

export default function WorkProcess() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#FAFAFA] text-[#AC7B25] border border-[#AC7B25]/20 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Streamlined Execution
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E2125] tracking-tight">
            How We Secure Your Property in 4 Clear Steps
          </h2>
          <p className="mt-3 text-[#6C6C6E] max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            From initial measurement consultation to final tension-tested handover with absolute transparency.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-[#AC7B25]/20 via-[#C59740] to-[#AC7B25]/20 mx-32" aria-hidden="true" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {WORK_PROCESS.map((step) => (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                <div
                  className="relative z-10 w-20 h-20 rounded-full text-white font-extrabold text-2xl flex items-center justify-center shadow-lg shadow-[#AC7B25]/20 mb-5"
                  style={{
                    background: "linear-gradient(135deg, #AC7B25 0%, #C59740 100%)",
                  }}
                >
                  {step.step}
                </div>
                <h3 className="font-bold text-[#1E2125] text-lg mb-2">{step.title}</h3>
                <p className="text-[#6C6C6E] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
