'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-950 to-slate-950 dark:from-amber-600/20 dark:via-slate-950 dark:to-slate-950 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Building the Future with <span className="text-amber-500">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Welcome to BuildPro. We are a premier engineering and construction company dedicated to transforming visionary ideas into structural realities. Safety, precision, and innovation are at the core of everything we do.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-black text-amber-500">15+</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Years Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-black text-amber-500">350+</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-black text-amber-500">1.2k</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Active Workers</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-black text-amber-500">100%</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Safety Record</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Normal clean shadow */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          <div className="group bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800/30 hover:border-slate-200 dark:hover:border-slate-700 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl dark:hover:shadow-black/50 transition-all duration-500 ease-out cursor-default">
            <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To deliver high-quality, cost-effective projects on schedule by employing and supporting motivated, flexible, and focused teams. We value the importance of our relationships and will continue to remain fair and true in our dealings with all employees, clients, vendors, and partners.
            </p>
          </div>

          <div className="group bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800/30 hover:border-slate-200 dark:hover:border-slate-700 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl dark:hover:shadow-black/50 transition-all duration-500 ease-out cursor-default">
            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To be the most respected and trusted construction company globally, known for our commitment to excellence, innovation, and sustainable building practices. We aim to shape skylines and build infrastructures that leave a lasting positive impact on communities.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us - Normal clean shadow */}
      <section className="py-24 bg-slate-100 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16">Why Choose <span className="text-amber-500">BuildPro?</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="group bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-50 dark:border-slate-800/30 hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-2xl dark:hover:shadow-black/50 hover:-translate-y-2.5 hover:scale-[1.02] transition-all duration-500 ease-out cursor-default">
              <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center mb-8 shadow-md group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 ease-out">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white group-hover:text-amber-500 transition-colors duration-300">Unmatched Safety</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">We provide top-tier safety gears and follow strict international protocols for all site workers to ensure zero hazard environments.</p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-50 dark:border-slate-800/30 hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-2xl dark:hover:shadow-black/50 hover:-translate-y-2.5 hover:scale-[1.02] transition-all duration-500 ease-out cursor-default">
              <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center mb-8 shadow-md group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 ease-out">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white group-hover:text-amber-500 transition-colors duration-300">Premium Materials</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Our live inventory ensures only the best, certified equipment is used in your projects. We never compromise on structural integrity.</p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-50 dark:border-slate-800/30 hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-2xl dark:hover:shadow-black/50 hover:-translate-y-2.5 hover:scale-[1.02] transition-all duration-500 ease-out cursor-default">
              <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center mb-8 shadow-md group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 ease-out">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white group-hover:text-amber-500 transition-colors duration-300">Expert Engineering</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Backed by a team of professional engineers and architects with decades of experience creating sustainable megastructures.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Build Your Next Project?</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
          Equip your team with the best safety gear and start managing your site like a pro.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/materials" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-amber-600/30 w-full sm:w-auto hover:scale-105">
            Explore Materials
          </Link>
          <Link href="/#contact" className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all w-full sm:w-auto hover:scale-105">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}