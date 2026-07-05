import { Clock, Star, Zap, Shield, PhoneCall } from "lucide-react";

const badges = [
  { icon: Clock, label: "24/7 Available", color: "text-blue-600" },
  { icon: Star, label: "5★ Rated (247 reviews)", color: "text-yellow-500" },
  { icon: Zap, label: "15-30 Min Response", color: "text-green-600" },
  { icon: Shield, label: "Insured & Certified", color: "text-purple-600" },
  { icon: PhoneCall, label: "No Call-Out Fee", color: "text-red-600" },
];

interface TrustBadgesProps {
  dark?: boolean;
}

export default function TrustBadges({ dark = false }: TrustBadgesProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <div
            key={badge.label}
            className={`flex items-center gap-2 text-sm font-medium ${dark ? "text-white" : "text-gray-700"}`}
          >
            <Icon className={`w-4 h-4 flex-shrink-0 ${badge.color}`} />
            <span>{badge.label}</span>
          </div>
        );
      })}
    </div>
  );
}
