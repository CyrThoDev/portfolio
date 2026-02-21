import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value?: React.ReactNode;
}) {
  if (!value) return null;
  return (
    <div className="flex flex-col sm:flex-row sm:gap-6 py-1">
      <span className="font-medium sm:w-56">{label}</span>
      <span className="text-neutral-700">{value}</span>
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">
        Mentions légales
      </h1>

      <p className="mt-4 text-neutral-700">
        Conformément à la loi n°2004-575 du 21 juin 2004 pour la Confiance dans
        l’Économie Numérique (LCEN).
      </p>

      {/* 1. Éditeur */}
      <SectionTitle>1. Éditeur du site</SectionTitle>
      <div className="mt-6 rounded-2xl border border-neutral-200 p-6 space-y-2">
        <Row label="Nom" value="Cyrielle Thomas" />
        <Row label="Statut" value="Micro-entrepreneure" />
       
        <Row
          label="Email"
          value={
            <a href="mailto:contact@votredomaine.fr" className="underline">
              cyriellethomas.pro(@)gmail.com
            </a>
          }
        />
        <Row label="Directrice de la publication" value="Cyrielle Thomas" />
      </div>

      {/* 2. Hébergement */}
      <SectionTitle>2. Hébergement</SectionTitle>
      <div className="mt-6 rounded-2xl border border-neutral-200 p-6 space-y-2">
        <Row label="Hébergeur" value="Vercel Inc." />
        <Row
          label="Adresse"
          value="440 N Barranca Ave #4133, Covina, CA 91723, États-Unis"
        />
        <Row
          label="Site web"
          value={
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              https://vercel.com
            </a>
          }
        />
       
      </div>

      {/* 3. Propriété intellectuelle */}
      <SectionTitle>3. Propriété intellectuelle</SectionTitle>
      <div className="mt-6 rounded-2xl border border-neutral-200 p-6 text-neutral-700 space-y-4">
        <p>
          L’ensemble du contenu du site (textes, images, graphismes, logo,
          éléments visuels, code source) est protégé par le droit d’auteur et
          reste la propriété exclusive de l’éditrice, sauf mention contraire.
        </p>
        <p>
          Toute reproduction, représentation ou adaptation, totale ou partielle,
          est interdite sans autorisation écrite préalable.
        </p>
      </div>

      {/* 4. Responsabilité */}
      <SectionTitle>4. Responsabilité</SectionTitle>
      <div className="mt-6 rounded-2xl border border-neutral-200 p-6 text-neutral-700 space-y-4">
        <p>
          Les informations présentes sur le site sont fournies à titre indicatif.
          Malgré les mises à jour régulières, l’éditrice ne saurait garantir
          l’exactitude ou l’exhaustivité des contenus.
        </p>
        <p>
          L’éditrice ne pourra être tenue responsable des dommages directs ou
          indirects résultant de l’utilisation du site.
        </p>
      </div>


      {/* 6. Cookies */}
      <SectionTitle>6. Cookies</SectionTitle>
      <div className="mt-6 rounded-2xl border border-neutral-200 p-6 text-neutral-700">
        <p>
          Le site peut utiliser des cookies strictement nécessaires à son
          fonctionnement. Si des outils de mesure d’audience sont utilisés,
          un bandeau de consentement est mis en place.
        </p>
      </div>

      {/* 7. Droit applicable */}
      <SectionTitle>7. Droit applicable</SectionTitle>
      <div className="mt-6 rounded-2xl border border-neutral-200 p-6 text-neutral-700">
        <p>
          Le présent site est soumis au droit français. Tout litige relève de
          la compétence des juridictions françaises.
        </p>
      </div>

      <footer className="mt-16 text-sm text-neutral-500">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </footer>
    </main>
  );
}