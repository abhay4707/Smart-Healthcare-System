export default function HealthcareResearchWebsite() {
  const sections = [
    {
      title: 'Cloud-Based Healthcare Data Management',
      desc: 'A scalable and AI-powered healthcare infrastructure for secure medical data storage, analysis, and disaster recovery.',
    },
    {
      title: 'AI Integration',
      desc: 'Machine learning algorithms improve diagnostic accuracy and optimize patient data retrieval efficiency.',
    },
    {
      title: 'Security & Compliance',
      desc: 'End-to-end encryption, role-based access control, and secure cloud architecture reduce security risks.',
    },
  ];

  const performanceData = [
    {
      metric: 'Retrieval Time',
      value: '44% Faster',
    },
    {
      metric: 'Cost Reduction',
      value: '30–35% Lower',
    },
    {
      metric: 'Disaster Recovery',
      value: '85% Faster',
    },
    {
      metric: 'AI Accuracy',
      value: '17% Higher',
    },
    {
      metric: 'Security Exposure',
      value: '35% Lower Risk',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* <p className="uppercase tracking-[0.25em] text-cyan-400 mb-4 text-sm">
                Research Project
              </p> */}

              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                Smart Healthcare Cloud System
              </h1>

              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
                A modern healthcare data management platform leveraging cloud
                computing, AI, IoMT, and scalable infrastructure to improve
                medical data processing, security, and disaster recovery.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-400 transition-all px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-cyan-500/30">
                  Explore Research
                </button>

                <button className="border border-slate-600 hover:border-cyan-400 hover:text-cyan-300 transition-all px-6 py-3 rounded-2xl font-semibold">
                  View Results
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-slate-800 rounded-2xl p-6">
                    <h3 className="text-cyan-400 text-3xl font-bold">44%</h3>
                    <p className="text-slate-300 mt-2">Faster Data Retrieval</p>
                  </div>

                  <div className="bg-slate-800 rounded-2xl p-6">
                    <h3 className="text-cyan-400 text-3xl font-bold">85%</h3>
                    <p className="text-slate-300 mt-2">Disaster Recovery Boost</p>
                  </div>

                  <div className="bg-slate-800 rounded-2xl p-6">
                    <h3 className="text-cyan-400 text-3xl font-bold">35%</h3>
                    <p className="text-slate-300 mt-2">Lower Security Exposure</p>
                  </div>

                  <div className="bg-slate-800 rounded-2xl p-6">
                    <h3 className="text-cyan-400 text-3xl font-bold">17%</h3>
                    <p className="text-slate-300 mt-2">Higher AI Accuracy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Project Overview</h2>
          <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
            This research focuses on integrating cloud computing with modern
            healthcare systems to efficiently manage electronic health records,
            IoMT devices, AI diagnostics, and scalable infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                {item.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-slate-900/60 border-y border-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">System Architecture</h2>
            <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
              The proposed architecture combines cloud servers, AI modules,
              secure APIs, and IoMT devices for real-time healthcare data
              management.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {[
              'IoMT Devices',
              'Cloud Storage',
              'AI Processing Engine',
              'Hospital Dashboard',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-3xl p-8 text-center shadow-xl"
              >
                <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                  <div className="w-10 h-10 rounded-full bg-cyan-400"></div>
                </div>

                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Performance Improvements</h2>
          <p className="text-slate-400 mt-4">
            Comparative analysis between traditional healthcare systems and the
            proposed cloud-based architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {performanceData.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 text-center hover:scale-105 transition-all"
            >
              <h3 className="text-3xl font-black text-cyan-400">
                {item.value}
              </h3>

              <p className="mt-4 text-slate-300">{item.metric}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Future Scope */}
      <section className="bg-slate-900/60 border-y border-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Future Scope</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {[
              'Blockchain-based healthcare security',
              'AI-powered predictive analytics',
              'Real-time nationwide medical cloud integration',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-3xl p-8"
              >
                <h3 className="text-xl font-semibold text-cyan-400">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-slate-500 border-t border-slate-800">
        <p>
          © 2026 Smart Healthcare Cloud Research Project | Developed by Abhay
          Kumar
        </p>
      </footer>
    </div>
  );
}
