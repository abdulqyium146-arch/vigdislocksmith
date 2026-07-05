import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  name: string;
  description: string;
  slug: string;
}

export default function ServiceCard({ icon, name, description, slug }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-red-300 hover:shadow-lg transition-all duration-200 flex flex-col gap-3"
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
        {name}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>
      <div className="flex items-center gap-1 text-red-600 text-sm font-semibold mt-2">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
