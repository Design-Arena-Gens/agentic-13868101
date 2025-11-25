"use client";

import { useMemo } from "react";

type Metric = {
  label: string;
  before: string;
  after: string;
  gain: string;
};

const metrics: Metric[] = [
  {
    label: "Consommation électrique",
    before: "15 000 DZD / mois",
    after: "-40 %",
    gain: "Économies substantielles"
  },
  {
    label: "Isolation acoustique",
    before: "70 % de bruit perçu",
    after: "90 % d'atténuation",
    gain: "Confort sonore"
  },
  {
    label: "Poussière & propreté",
    before: "Nettoyage quotidien",
    after: "Protection totale",
    gain: "Intérieur impeccable"
  }
];

export default function Page() {
  const timeline = useMemo(
    () => [
      {
        tag: "Avant",
        title: "Fenêtre vieillissante",
        points: [
          "Facture électricité : 15 000 DZD / mois",
          "Bruit extérieur gênant à 70 %",
          "Poussière qui s'infiltre chaque jour",
          "Ambiance terne et peu lumineuse"
        ]
      },
      {
        tag: "Après",
        title: "Fenêtre aluminium moderne",
        points: [
          "40 % d'économies sur l'énergie",
          "Isolation acoustique premium : 90 %",
          "Étanchéité complète à la poussière",
          "Intérieur lumineux, propre et valorisé"
        ],
        highlight: true
      }
    ],
    []
  );

  return (
    <main className="page">
      <header className="header">
        <span className="card-tag">Étude de cas</span>
        <h1 className="title">Fenêtre Aluminium Premium</h1>
        <p className="subtitle">
          Modernisez votre espace avec une menuiserie aluminium de précision : confort thermique,
          silence, lumière naturelle et économies annuelles tangibles.
        </p>
      </header>

      <section className="grid">
        {timeline.map((item) => (
          <article key={item.tag} className={`card${item.highlight ? " dark" : ""}`}>
            <span className="card-tag">{item.tag}</span>
            <h2 className="card-title">{item.title}</h2>
            <ul className="card-list">
              {item.points.map((point) => (
                <li key={point}>
                  <span className="icon-circle">{item.highlight ? "★" : "•"}</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="metrics">
        {metrics.map((metric) => (
          <div key={metric.label} className="metric">
            <strong>{metric.label}</strong>
            <span>Avant : {metric.before}</span>
            <span>Après : {metric.after}</span>
            <span>{metric.gain}</span>
          </div>
        ))}
      </section>

      <section className="testimony">
        <p className="testimony-quote">
          « Investir dans la qualité m&apos;a permis d&apos;économiser des milliers de dinars par an. »
        </p>
        <div className="badge-stack">
          <span className="chip">
            <span className="icon-circle">Δ</span>
            Résultats durables
          </span>
          <span className="chip">
            <span className="icon-circle">◎</span>
            Isolation totale
          </span>
          <span className="chip">
            <span className="icon-circle">✦</span>
            Design lumineux
          </span>
        </div>
        <span className="testimony-author">Client résidentiel - Alger</span>
      </section>
    </main>
  );
}
