export default function Footer() {
    return (
        <footer className="relative bg-cover bg-center text-white overflow-hidden" style={{ backgroundImage: "url('/main-images/cta-bg.jpg')" }}>
            <div className="absolute inset-0 bg-slate-950/85 z-0"></div>
            
            <div className="relative z-10 max-w-6xl mx-auto py-20 px-4 text-center">
                <h3 className="text-3xl font-bold mb-6">Ready to Build Smarter & Safer?</h3>
                <a href="#pricing" className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-95 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg mb-16">
                    Start Your Free Trail
                </a>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
                    <div className="text-left">
                        <h4 className="text-xl font-bold mb-1">BuildPro</h4>
                        <p className="text-slate-400 text-xs">&copy; 2026 BuildPro. All rights reserved. | Privacy Policy | Terms</p>
                    </div>
                    {/* Social Media Image Icons from public/social-icons/ */}
                    <div className="flex gap-4 items-center">
                        <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center p-2.5 hover:bg-amber-600 transition-colors">
                            <img src="/social-icons/icon-facebook.png" alt="Facebook" className="w-full h-full object-contain filter brightness-200" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center p-2.5 hover:bg-amber-600 transition-colors">
                            <img src="/social-icons/icon-instagram.png" alt="Instagram" className="w-full h-full object-contain filter brightness-200" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center p-2.5 hover:bg-amber-600 transition-colors">
                            <img src="/social-icons/icon-twitter.png" alt="Twitter" className="w-full h-full object-contain filter brightness-200" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center p-2.5 hover:bg-amber-600 transition-colors">
                            <img src="/social-icons/icon-youtube.png" alt="YouTube" className="w-full h-full object-contain filter brightness-200" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}