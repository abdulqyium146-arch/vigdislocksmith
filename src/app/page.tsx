const PHONE = "+44 7984 547185";
const PHONE_HREF = "tel:+447984547185";

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 font-bold text-black transition-colors hover:bg-yellow-300 ${className}`}
    >
      📞 {PHONE}
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col font-sans">

      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-8 bg-white dark:bg-zinc-900 py-28 px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-black dark:text-white">
          Fast &amp; Reliable Locksmith Services
        </h1>
        <p className="max-w-xl text-xl text-zinc-600 dark:text-zinc-400">
          Locked out? Lost your keys? We respond in 30 minutes or less — 24 hours a day, 7 days a week.
        </p>
        <CallButton className="px-10 py-4 text-xl" />
        <p className="text-sm text-zinc-500">No call-out fee · Free quote · Always on time</p>
      </section>

      {/* Emergency strip */}
      <div className="w-full bg-red-600 py-4 px-6 text-center text-white font-semibold text-lg">
        Emergency locksmith available now —{" "}
        <a href={PHONE_HREF} className="underline font-bold hover:text-red-200">
          call {PHONE}
        </a>
      </div>

      {/* Services */}
      <section className="bg-zinc-50 dark:bg-zinc-800 py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">Our Services</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🔓", title: "Lockout Service", desc: "Locked out of your home, office or car? We get you back in fast." },
              { icon: "🔐", title: "Lock Replacement", desc: "Upgrade to high-security locks and deadbolts for better protection." },
              { icon: "🗝️", title: "Key Cutting", desc: "Spare keys cut on the spot for all lock types." },
              { icon: "🚗", title: "Auto Locksmith", desc: "Vehicle lockouts and transponder key programming." },
              { icon: "🏢", title: "Commercial", desc: "Access control, master key systems and office security." },
              { icon: "🛡️", title: "Security Upgrade", desc: "Full home or business security assessments and upgrades." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-white dark:bg-zinc-700 p-6 shadow-sm flex flex-col gap-3">
                <span className="text-4xl">{icon}</span>
                <h3 className="text-lg font-bold text-black dark:text-white">{title}</h3>
                <p className="text-zinc-500 dark:text-zinc-300 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-yellow-400 py-16 px-6 text-center">
        <div className="mx-auto max-w-3xl flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-black">Why Choose Vigdis Locksmith?</h2>
          <ul className="grid sm:grid-cols-3 gap-6 text-black text-sm font-medium">
            {["30-min response time", "DBS checked engineers", "Fully insured", "No hidden charges", "5★ rated service", "24/7 availability"].map((item) => (
              <li key={item} className="bg-yellow-300 rounded-xl py-4 px-3 font-semibold">✔ {item}</li>
            ))}
          </ul>
          <CallButton className="px-10 py-4 text-xl bg-black text-yellow-400 hover:bg-zinc-800 self-center" />
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="bg-white dark:bg-zinc-900 py-20 px-6 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold text-black dark:text-white">Get in Touch</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
          Call us any time — day or night. We&apos;re always ready to help.
        </p>
        <CallButton className="px-10 py-4 text-2xl" />
        <p className="text-zinc-500 text-sm">
          Prefer to text? Send a message to{" "}
          <a href={PHONE_HREF} className="text-yellow-500 font-semibold hover:underline">
            {PHONE}
          </a>
        </p>
      </section>

    </div>
  );
}
