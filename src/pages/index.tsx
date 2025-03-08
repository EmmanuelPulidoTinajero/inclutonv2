import React from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import Link from '@docusaurus/core/lib/client/exports/Link';

function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FF6B2B] to-[#2B7BFF]">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">INCLUTON 2025</h1>
          <p className="text-xl mb-8">Hackathon por la inclusión y la accesibilidad digital</p>
          <Link
            className="inline-block bg-white text-[#FF6B2B] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90"
            to="/docs/intro">
            ¡Inscríbete ahora!
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre INCLUTON</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Innovación</h3>
            <p>Desarrolla soluciones tecnológicas que mejoren la vida de personas con discapacidad</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Inclusión</h3>
            <p>Crea tecnología accesible para todos, sin importar sus capacidades</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Impacto</h3>
            <p>Genera un cambio real en la sociedad a través de la tecnología</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChallengesSection() {
  const challenges = [
    {
      title: "Accesibilidad Visual",
      color: "#FF6B2B",
      description: "Soluciones para personas con discapacidad visual"
    },
    {
      title: "Accesibilidad Auditiva",
      color: "#2B7BFF",
      description: "Herramientas para personas con discapacidad auditiva"
    },
    {
      title: "Accesibilidad Motriz",
      color: "#4CAF50",
      description: "Tecnología para personas con discapacidad motriz"
    },
    {
      title: "Accesibilidad Cognitiva",
      color: "#FFD700",
      description: "Apoyo para personas con discapacidad cognitiva"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Desafíos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge) => (
            <div key={challenge.title} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full mb-4" style={{backgroundColor: challenge.color}}></div>
              <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegistrationSection() {
  return (
    <section className="py-16 bg-[#2B7BFF] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Listo para participar?</h2>
        <p className="text-xl mb-8">Únete a INCLUTON 2025 y sé parte del cambio</p>
        <Link
          className="inline-block bg-white text-[#2B7BFF] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90"
          to="/registro">
          Registrar equipo
        </Link>
      </div>
    </section>
  );
}

function SponsorsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Patrocinadores</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {/* Aquí irían los logos de los patrocinadores */}
          <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
          <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
          <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
          <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <p className="text-xl mb-8">¿Tienes alguna pregunta? ¡Contáctanos!</p>
        <a
          href="mailto:contacto@incluton.org"
          className="inline-block bg-[#FF6B2B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90">
          Enviar mensaje
        </a>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="INCLUTON 2025"
      description="Hackathon por la inclusión">
      <main>
        <HeroSection />
        <AboutSection />
        <ChallengesSection />
        <RegistrationSection />
        <SponsorsSection />
        <ContactSection />
      </main>
    </Layout>
  );
} 