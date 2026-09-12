'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import Image from 'next/image';

export default function Home() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to Top Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "How does the real-time hazard alert work?", a: "Our system uses connected site sensors and mobile reporting to instantly notify all workers and managers of potential hazards in real-time, preventing accidents before they happen." },
    { q: "Can I use BuildPro on my mobile device?", a: "Absolutely! BuildPro is fully responsive and has a dedicated, easy-to-use mobile interface designed specifically for field workers on the go." },
    { q: "Is there a limit to how many workers I can add?", a: "The Starter plan includes up to 10 workers, Pro includes up to 50, and our Enterprise plan allows for unlimited workers based on your needs." }
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full min-h-[650px] h-screen bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: "url('/main-images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/60 z-0 transition-opacity duration-300"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Empowering the <br /> 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">Modern Builder</span>
            </h1>
            <p className="text-base md:text-lg opacity-90 mb-8 leading-relaxed max-w-xl mx-auto">
                Advanced site management and safety tools designed specifically for the hardworking teams on the ground.
            </p>
            <a href="#features" className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-95 text-white px-8 py-3.5 rounded-full font-bold transform transition-all duration-300 hover:scale-105 shadow-lg">
                Learn more
            </a>
        </div>
      </header>

      {/* Trusted By Firms */}
      <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-slate-400 mb-10">TRUSTED BY TOP CONSTRUCTION FIRMS</p>
            <div className="flex flex-wrap justify-center items-center gap-14 md:gap-28 opacity-80">
                <Image src="/company-logos/trusted-1.png" alt="Firm 1" width={144} height={80} className="w-24 md:w-36 h-auto object-contain filter dark:invert transform transition-all duration-300 hover:scale-110 cursor-pointer" />
                <Image src="/company-logos/trusted-2.png" alt="Firm 2" width={144} height={80} className="w-24 md:w-36 h-auto object-contain filter dark:invert transform transition-all duration-300 hover:scale-110 cursor-pointer" />
                <Image src="/company-logos/trusted-3.png" alt="Firm 3" width={144} height={80} className="w-24 md:w-36 h-auto object-contain filter dark:invert transform transition-all duration-300 hover:scale-110 cursor-pointer" />
                <Image src="/company-logos/trusted-4.png" alt="Firm 4" width={144} height={80} className="w-24 md:w-36 h-auto object-contain filter dark:invert transform transition-all duration-300 hover:scale-110 cursor-pointer" />
            </div>
        </div>
      </section>

      {/* Core Features (Reused Component with Correct Icons) */}
      <section id="features" className="max-w-6xl mx-auto py-24 px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-800 dark:text-white transition-colors">
                Core Features for <br/> <span className="text-amber-600">Modern</span> Construction
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <FeatureCard 
                title="Real-Time Safety" 
                description="Monitor worker safety standards and prevent site hazards instantly." 
                iconSrc="/work-icons/icon-safety.png" 
            />
            <FeatureCard 
                title="Task Management" 
                description="Assign daily tasks to laborers and track project progress effortlessly." 
                iconSrc="/work-icons/icon-task.png" 
            />
            <FeatureCard 
                title="Resource Optimization" 
                description="Efficiently manage building materials and labor hours in one dashboard." 
                iconSrc="/work-icons/icon-team.png" 
            />
        </div>

        {/* Laptop Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-100 dark:bg-slate-900 p-8 md:p-12 rounded-3xl transition-colors duration-300">
            <div>
                <h3 className="text-2xl md:text-4xl font-bold mb-4">
                    Built for the site. <br />
                    <span className="text-amber-600">Designed</span> for the workers.
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm md:text-base leading-relaxed">
                    We believe in empowering the hardworking hands that build our world. Our platform simplifies daily workflows so your crew can focus on what they do best—building safely and efficiently.
                </p>
                <ul className="space-y-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2">● Intuitive dashboard for site managers</li>
                    <li className="flex items-center gap-2">● Real-time hazard and safety alerts</li>
                    <li className="flex items-center gap-2">● Easy progress tracking from the field</li>
                    <li className="flex items-center gap-2">● Mobile-friendly for everyday laborers</li>
                </ul>
            </div>
            <div className="relative flex justify-center transform transition-transform duration-500 hover:scale-105">
                <Image src="/main-images/dashboard-mockup.png" alt="Dashboard Mockup" width={600} height={400} className="w-full max-w-lg rounded-2xl shadow-2xl object-cover" />
            </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-200/60 dark:bg-slate-900/50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">How It Works</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-12 text-sm">How BuildPro Simplifies Your Site</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md text-center transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer group">
                    <div className="w-14 h-14 mx-auto mb-4 relative transition-transform duration-300 group-hover:scale-110">
                        <Image src="/work-icons/icon-team.png" alt="Connect" fill className="object-contain opacity-80 group-hover:opacity-100 filter dark:invert" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Connect Your Team</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Bring managers and site workers together instantly.</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md text-center transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer group">
                    <div className="w-14 h-14 mx-auto mb-4 relative transition-transform duration-300 group-hover:scale-110">
                        <Image src="/work-icons/icon-task.png" alt="Tasks" fill className="object-contain opacity-80 group-hover:opacity-100 filter dark:invert" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Assign Tasks & Track</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Easily assign daily jobs and track progress.</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md text-center transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer group">
                    <div className="w-14 h-14 mx-auto mb-4 relative transition-transform duration-300 group-hover:scale-110">
                        <Image src="/work-icons/icon-safety.png" alt="Hazards" fill className="object-contain opacity-80 group-hover:opacity-100 filter dark:invert" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Prevent Hazards</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Prevent site hazards and finish projects safely.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Dynamic Pricing Section */}
      <section id="pricing" className="max-w-6xl mx-auto py-24 px-4 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Pricing</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">Choose the Right <span className="text-amber-600 font-bold">Plan</span> for Your Site</p>
            
            <div className="flex justify-center items-center gap-4 mb-16">
                <span className={`font-bold transition-colors ${!isYearly ? 'text-slate-800 dark:text-white' : 'text-slate-400'}`}>Monthly</span>
                <button 
                    onClick={() => setIsYearly(!isYearly)} 
                    className="w-16 h-8 bg-slate-300 dark:bg-slate-700 rounded-full relative transition-colors duration-300 focus:outline-none flex items-center px-1 cursor-pointer"
                >
                    <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? 'translate-x-8' : 'translate-x-0'}`}></div>
                </button>
                <span className={`font-bold transition-colors ${isYearly ? 'text-slate-800 dark:text-white' : 'text-slate-400'}`}>
                    Yearly <span className="text-amber-600 text-sm ml-1">(Save 20%)</span>
                </span>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 transform transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="text-3xl font-bold mb-6 text-amber-600">
                    ${isYearly ? '23' : '29'} <span className="text-xs font-normal text-slate-500">/ month</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm opacity-80">
                    <li>✓ Up to 10 active workers</li>
                    <li>✓ Basic task management</li>
                    <li>✓ Standard safety checklists</li>
                    <li>✓ Email support</li>
                </ul>
                <button className="w-full py-3 border border-amber-600 text-amber-600 rounded-full font-bold hover:bg-amber-600 hover:text-white transition-colors text-sm">Get Started →</button>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-8 rounded-3xl shadow-2xl transform md:-translate-y-4 transition-all duration-300 hover:-translate-y-8 hover:shadow-orange-500/50">
                <span className="bg-white/20 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full">Most Popular</span>
                <h3 className="text-xl font-bold mt-4 mb-2">Pro</h3>
                <div className="text-3xl font-bold mb-6">
                    ${isYearly ? '63' : '79'} <span className="text-xs font-normal opacity-90">/ month</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm opacity-90">
                    <li>✓ Up to 50 active workers</li>
                    <li>✓ Real-time hazard alerts</li>
                    <li>✓ Advanced progress tracking</li>
                    <li>✓ 24/7 priority support</li>
                </ul>
                <button className="w-full py-3 bg-white text-amber-600 rounded-full font-bold hover:bg-slate-100 transition-colors text-sm">Get Started →</button>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 transform transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold mb-6 text-amber-600">Custom</div>
                <ul className="space-y-3 mb-8 text-sm opacity-80">
                    <li>✓ Unlimited workers & projects</li>
                    <li>✓ Custom safety reports</li>
                    <li>✓ Dedicated account manager</li>
                    <li>✓ API & software integration</li>
                </ul>
                <button className="w-full py-3 border border-amber-600 text-amber-600 rounded-full font-bold hover:bg-amber-600 hover:text-white transition-colors text-sm">Get Started →</button>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-200/50 dark:bg-slate-900/40 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">What Our <span className="text-amber-600">Partners</span> Say</h2>
            <p className="text-slate-500 text-sm mb-12">Real feedback from the hardworking teams on the ground.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl text-left cursor-pointer border border-transparent hover:border-amber-500/30">
                    <p className="text-xs text-amber-500 mb-3">⭐⭐⭐⭐⭐</p>
                    <p className="text-xs italic mb-4 text-slate-600 dark:text-slate-300">&quot;Finally, a tool that prioritizes worker safety as much as we do. The instant hazard reporting feature is absolutely brilliant.&quot;</p>
                    <div className="flex items-center gap-3">
                        <Image src="/avatars/avatar-1.jpg" alt="Emily" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <h5 className="font-bold text-sm">Emily Rodriguez</h5>
                            <p className="text-[11px] text-slate-400">Safety Coordinator</p>
                        </div>
                    </div>
                </div>
                {/* 2 to 6 Testimonials follow the exact same structure... */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl text-left cursor-pointer border border-transparent hover:border-amber-500/30">
                    <p className="text-xs text-amber-500 mb-3">⭐⭐⭐⭐⭐</p>
                    <p className="text-xs italic mb-4 text-slate-600 dark:text-slate-300">&quot;This platform transformed how we manage daily safety and coordinate field teams. It&apos;s a lifesaving tool!&quot;</p>
                    <div className="flex items-center gap-3">
                        <Image src="/avatars/avatar-2.jpg" alt="James" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <h5 className="font-bold text-sm">James Carter</h5>
                            <p className="text-[11px] text-slate-400">Chief Contractor</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl text-left cursor-pointer border border-transparent hover:border-amber-500/30">
                    <p className="text-xs text-amber-500 mb-3">⭐⭐⭐⭐⭐</p>
                    <p className="text-xs italic mb-4 text-slate-600 dark:text-slate-300">&quot;Tracking labor hours and resource allocation has never been easier. A true game-changer!&quot;</p>
                    <div className="flex items-center gap-3">
                        <Image src="/avatars/avatar-3.jpg" alt="Robert" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <h5 className="font-bold text-sm">Robert Chen</h5>
                            <p className="text-[11px] text-slate-400">Operations Director</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl text-left cursor-pointer border border-transparent hover:border-amber-500/30">
                    <p className="text-xs text-amber-500 mb-3">⭐⭐⭐⭐⭐</p>
                    <p className="text-xs italic mb-4 text-slate-600 dark:text-slate-300">&quot;The mobile dashboard is incredibly intuitive. Even our older laborers learned how to use the task tracker within minutes.&quot;</p>
                    <div className="flex items-center gap-3">
                        <Image src="/avatars/avatar-4.jpg" alt="Sarah" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <h5 className="font-bold text-sm">Sarah Jenkins</h5>
                            <p className="text-[11px] text-slate-400">Site Manager</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl text-left cursor-pointer border border-transparent hover:border-amber-500/30">
                    <p className="text-xs text-amber-500 mb-3">⭐⭐⭐⭐⭐</p>
                    <p className="text-xs italic mb-4 text-slate-600 dark:text-slate-300">&quot;I&apos;ve been in construction for 20 years. This is the first app that actually feels like it was made with the workers in mind.&quot;</p>
                    <div className="flex items-center gap-3">
                        <Image src="/avatars/avatar-5.jpg" alt="Michael" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <h5 className="font-bold text-sm">Michael O&apos;Connor</h5>
                            <p className="text-[11px] text-slate-400">Foreman</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl text-left cursor-pointer border border-transparent hover:border-amber-500/30">
                    <p className="text-xs text-amber-500 mb-3">⭐⭐⭐⭐⭐</p>
                    <p className="text-xs italic mb-4 text-slate-600 dark:text-slate-300">&quot;The seamless communication between the design team and the on-ground laborers has cut our delay times in half.&quot;</p>
                    <div className="flex items-center gap-3">
                        <Image src="/avatars/avatar-6.jpg" alt="David" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <h5 className="font-bold text-sm">David Kim</h5>
                            <p className="text-[11px] text-slate-400">Structural Engineer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto py-24 px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-sm">Everything you need to know about BuildPro.</p>
        </div>
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div 
                    key={index} 
                    onClick={() => toggleFaq(index)}
                    className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 cursor-pointer transform transition-all duration-300 hover:border-amber-500 overflow-hidden"
                >
                    <div className="flex justify-between items-center">
                        <h4 className="font-bold text-sm md:text-base">{faq.q}</h4>
                        <span className={`text-amber-500 font-bold text-xl transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                    </div>
                    <div className={`mt-4 text-sm text-slate-600 dark:text-slate-400 transition-all duration-500 ${openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        {faq.a}
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-100 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-2xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">Get in Touch with Us</h2>
                <p className="text-slate-500 text-sm">Have questions about our site management tools? Send us a message below.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
                <form className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">Full Name</label>
                        <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">Email Address</label>
                        <input type="email" placeholder="Enter your email address" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">Subject</label>
                        <input type="text" placeholder="What is this about?" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">Message</label>
                        <textarea rows={4} placeholder="Write your message here (at least 10 characters)..." className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:border-amber-500 transition-colors"></textarea>
                    </div>
                    <button type="button" className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-95 text-white rounded-xl font-bold text-sm transform transition-all duration-300 hover:scale-[1.02] shadow-lg">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
      </section>

      <Footer />

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-orange-600 text-white w-12 h-12 rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all duration-500 z-50 hover:-translate-y-2 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        ↑
      </button>

    </main>
  );
}