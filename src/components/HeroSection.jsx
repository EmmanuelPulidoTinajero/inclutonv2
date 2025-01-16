export function HeroSection() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <div className="w-full md:w-1/3 bg-blue-100 p-8 flex items-center justify-center">
                <div className="text-center md:text-left">
                    <h1 className="text-6xl font-bold text-[#2A449A] mb-4">Incluton 2025</h1>
                    <p className="text-gray-600 leading-relaxed">
                        Evento pionero que combina innovación, inclusión y colaboración para transformar vidas a través de la
                        accesibilidad a la tecnología. Esta edición, totalmente online, se enfoca en la inclusión digital de
                        personas con discapacidad.
                    </p>
                </div>
            </div>
            <div className="w-full md:w-2/3">
                <img src="/img/pexels2.jpg" alt="Responsive Layout Showcase" className="rounded-l-lg w-full h-full object-cover" />
            </div>
        </div>
    );
}