import Link from "next/link";
import type { Offer } from "./OfferCard";

export default function OfferDetailCard({
  offer,
  reverse,
  bgColor,
}: {
  offer: Offer;
  reverse?: boolean;
  bgColor: string;
}) {
  return (
    <div className={`p-6 ${bgColor} flex flex-col h-full`}>
      <div
        className={`grid gap-8 h-full items-stretch ${
          reverse ? "md:[&>*:first-child]:order-last" : ""
        }`}
      >
        {/* Colonne texte */}
        <div className="flex flex-col h-full min-h-0">
          {/* ✅ Tout le contenu prend la place dispo */}
          <div className="flex-1 min-h-0">
            <h2 className="text-3xl font-bold mb-4">{offer.title}</h2>
            <p className="mb-6 leading-relaxed text-lg">{offer.description}</p>

            {/* Pour qui */}
            {offer.title.includes("Landing") && (
              <p className="mb-4 text-sm">
                <strong>Pour qui :</strong> Indépendants, artisans, thérapeutes
                ou événements ponctuels (salons, stages...).
              </p>
            )}
            {offer.title.includes("vitrine") && (
              <p className="mb-4 text-sm">
                <strong>Pour qui :</strong> Professions libérales, commerçants,
                TPE, artistes ou associations.
              </p>
            )}
            {offer.title.includes("e-commerce") && (
              <p className="mb-4 text-sm">
                <strong>Pour qui :</strong> Vous voulez vendre des produits ou
                prestations en ligne et automatiser le tout.
              </p>
            )}
            {offer.title.includes("Application") && (
              <p className="mb-4 text-sm">
                <strong>Pour qui :</strong> Services numériques interactifs sur
                mobile (communautés, réservations…).
              </p>
            )}

            {/* Liste des points forts */}
            <ul className="list-disc list-inside mb-6 text-gray-700">
              {offer.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            {/* Modules supplémentaires */}
            {offer.title.includes("vitrine") && (
              <div className="mb-6">
                <h3 className="font-semibold text-base mb-2">
                  🔧 Modules disponibles :
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Blog ou actualités</li>
                  <li>Newsletter</li>
                  <li>Agenda d’événements</li>
                  <li>Annuaire</li>
                  <li>Galerie photos/vidéos</li>
                  <li>Carte interactive</li>
                  <li>Prise de rendez-vous</li>
                </ul>
              </div>
            )}
          </div>

          {/* ✅ CTA collé en bas */}
          <div className="pt-6">
            <Link
              href="https://calendly.com/cyriellethomas-siteweb/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#D16565] text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-[#b65353] transition"
            >
              {offer.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}