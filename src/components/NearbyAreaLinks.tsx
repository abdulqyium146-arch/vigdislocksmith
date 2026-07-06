import Link from "next/link";
import { MapPin } from "lucide-react";

const NEARBY: Record<string, { name: string; slug: string }[]> = {
  mayfair:      [{ name:"Westminster",slug:"westminster" },{ name:"Belgravia",slug:"belgravia" },{ name:"Knightsbridge",slug:"knightsbridge" },{ name:"Soho",slug:"soho" }],
  westminster:  [{ name:"Mayfair",slug:"mayfair" },{ name:"Belgravia",slug:"belgravia" },{ name:"Victoria",slug:"victoria" },{ name:"Soho",slug:"soho" }],
  belgravia:    [{ name:"Westminster",slug:"westminster" },{ name:"Knightsbridge",slug:"knightsbridge" },{ name:"Chelsea",slug:"chelsea" },{ name:"Victoria",slug:"victoria" }],
  knightsbridge:[{ name:"Belgravia",slug:"belgravia" },{ name:"Chelsea",slug:"chelsea" },{ name:"Kensington",slug:"kensington" },{ name:"Westminster",slug:"westminster" }],
  soho:         [{ name:"Mayfair",slug:"mayfair" },{ name:"Marylebone",slug:"marylebone" },{ name:"Westminster",slug:"westminster" }],
  marylebone:   [{ name:"Soho",slug:"soho" },{ name:"Mayfair",slug:"mayfair" },{ name:"Paddington",slug:"paddington" }],
  victoria:     [{ name:"Westminster",slug:"westminster" },{ name:"Belgravia",slug:"belgravia" },{ name:"Chelsea",slug:"chelsea" }],
  paddington:   [{ name:"Marylebone",slug:"marylebone" },{ name:"Kensington",slug:"kensington" }],
  chelsea:      [{ name:"Knightsbridge",slug:"knightsbridge" },{ name:"Kensington",slug:"kensington" },{ name:"Belgravia",slug:"belgravia" }],
  kensington:   [{ name:"Chelsea",slug:"chelsea" },{ name:"Knightsbridge",slug:"knightsbridge" },{ name:"Paddington",slug:"paddington" }],
};

export default function NearbyAreaLinks({ currentArea }: { currentArea: string }) {
  const nearby = NEARBY[currentArea];
  if (!nearby?.length) return null;
  return (
    <section className="py-10 bg-slate-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Also serving nearby
        </p>
        <div className="flex flex-wrap gap-3">
          {nearby.map(({ name, slug }) => (
            <Link
              key={slug}
              href={`/service-areas/${slug}`}
              className="flex items-center gap-2 bg-white border border-gray-200 hover:border-red-300 hover:shadow-sm text-gray-700 hover:text-red-600 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
              Locksmith in {name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
