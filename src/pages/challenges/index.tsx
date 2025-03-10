import React from 'react';
import Layout from '../../components/shared/Layout';
import ChallengesClient from '../../components/challenges/ChallengesClient';

export default function Challenges(): React.ReactNode {
  return (
    <Layout>
      <main className="container margin-vert--lg">
        <h1>Desafíos del INCLUTON 2025</h1>
        <p className="mb-8">
          Explora los desafíos que hemos preparado para esta edición del hackathon.
          Cada desafío está diseñado para abordar problemas reales de inclusión y accesibilidad.
        </p>
        <ChallengesClient />
      </main>
    </Layout>
  );
} 