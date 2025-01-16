export function Footer() {
    return (
        <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white sm:p-1 dark:bg-gray-800">
            <div className="flex items-center justify-center space-x-6">
                <p>Encuéntranos en nuestras redes</p>
                <a href="https://www.youtube.com/@ComunidadLATAMAI" className="text-gray-500 hover:text-gray-900">
                    {/* Icon SVG */}
                </a>
                <a href="https://chat.whatsapp.com/Ev9odVGVeoHEuFX9dLkGUF" className="text-gray-500 hover:text-gray-900">
                    {/* Icon SVG */}
                </a>
                <a href="https://www.linkedin.com/company/comunidad-latam-ai" className="text-gray-500 hover:text-gray-900">
                    {/* Icon SVG */}
                </a>
                <a href="mailto:contacto@latamai.org" className="text-gray-500 hover:text-gray-900">
                    {/* Icon SVG */}
                </a>
            </div>
        </footer>
    );
}