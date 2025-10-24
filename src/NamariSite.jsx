import { useEffect } from "react";
import { motion } from "framer-motion";
import { TreePine, Code2, Phone, Mail, MapPin, ShieldCheck, Leaf } from "lucide-react";

export default function NamariSite() {
  useEffect(() => {
    const onClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="min-h-screen bg-emerald-50/40 text-slate-900">
      <header className="sticky top-0 z-30 backdrop-blur bg-emerald-50/70 border-b border-emerald-100">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={new URL("/logo.png", import.meta.env.BASE_URL).href}
              alt="Namari logotyp"
              className="h-9 w-auto drop-shadow-sm"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <span className="font-extrabold tracking-wide text-xl">NAMARI</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a className="hover:text-emerald-700" href="#tjanster">Tjänster</a>
            <a className="hover:text-emerald-700" href="#om">Om</a>
            <a className="hover:text-emerald-700" href="#kontakt">Kontakt</a>
          </div>
          <a href="#kontakt" className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 text-white px-4 py-2 shadow-sm hover:bg-emerald-800 transition md:ml-6">
            <Phone className="h-4 w-4" />
            <span>Ring / maila</span>
          </a>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-emerald-100/60 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 items-center gap-10">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Natur & Kod <span className="text-emerald-700">—</span> hållbart hantverk
              </h1>
              <p className="mt-5 text-lg text-slate-700 max-w-prose">
                Jag heter <span className="font-semibold">Fredrik Wästerberg</span> och driver <span className="font-semibold">Namari</span>.
                Jag hjälper både i skogen med manuell huggning/röjning och på webben med stilrena, snabba hemsidor för mindre företag.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#tjanster" className="rounded-xl bg-emerald-700 text-white px-5 py-3 hover:bg-emerald-800 transition shadow">Se tjänster</a>
                <a href="#kontakt" className="rounded-xl border border-emerald-300 px-5 py-3 hover:border-emerald-500 hover:bg-white/60 transition">Få offert</a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
                <ShieldCheck className="h-5 w-5 text-emerald-700" />
                <span>F-skattsedel • Försäkrad • Punktlig</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.05 }} className="relative">
              <div className="aspect-square rounded-3xl bg-white/80 border border-emerald-100 shadow-lg p-8 flex items-center justify-center">
                <img src={new URL("/logo.png", import.meta.env.BASE_URL).href} alt="Namari logotyp" className="w-3/4 h-auto" />
              </div>
              <div className="absolute -z-10 -top-6 -right-6 w-40 h-40 rounded-full bg-emerald-200/60 blur-2xl" />
              <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 rounded-full bg-emerald-300/40 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="tjanster" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">Tjänster</h2>
          <p className="mt-3 text-slate-700 max-w-prose">Två ben – samma kvalitetskänsla. Välj det du behöver nedan.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <motion.article whileHover={{ y: -3 }} className="rounded-3xl bg-white border border-emerald-100 p-7 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="rounded-2xl p-3 bg-emerald-700/10 text-emerald-700"><TreePine className="h-6 w-6" /></span>
                <div>
                  <h3 className="text-xl font-bold">Naturarbete</h3>
                  <p className="mt-1 text-slate-700">Manuell huggning, röjning och selektiv trädfällning med fokus på säkerhet och naturvård.</p>
                  <ul className="mt-4 space-y-2 text-slate-700">
                    <li className="flex items-center gap-2"><Leaf className="h-4 w-4" /> Röjning av sly och stigar</li>
                    <li className="flex items-center gap-2"><Leaf className="h-4 w-4" /> Vindfällen & riskträd</li>
                    <li className="flex items-center gap-2"><Leaf className="h-4 w-4" /> Gårdar, torp & stengärdsgårdar</li>
                  </ul>
                  <div className="mt-5">
                    <a href="#kontakt" className="inline-flex rounded-xl bg-emerald-700 text-white px-5 py-2.5 hover:bg-emerald-800 transition">Begär platsbesök</a>
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.article whileHover={{ y: -3 }} className="rounded-3xl bg-white border border-emerald-100 p-7 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="rounded-2xl p-3 bg-emerald-700/10 text-emerald-700"><Code2 className="h-6 w-6" /></span>
                <div>
                  <h3 className="text-xl font-bold">Webb & Design</h3>
                  <p className="mt-1 text-slate-700">Snabba, tillgängliga hemsidor med tydlig varumärkesprofil. Hosting, domän & support ingår vid behov.</p>
                  <ul className="mt-4 space-y-2 text-slate-700">
                    <li className="flex items-center gap-2"><Leaf className="h-4 w-4" /> One-pager eller liten sajt</li>
                    <li className="flex items-center gap-2"><Leaf className="h-4 w-4" /> Logotyp & brand-manual</li>
                    <li className="flex items-center gap-2"><Leaf className="h-4 w-4" /> SEO-grund & analys</li>
                  </ul>
                  <div className="mt-5">
                    <a href="#kontakt" className="inline-flex rounded-xl border border-emerald-300 px-5 py-2.5 hover:border-emerald-500 hover:bg-white/60 transition">Be om offert</a>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section id="om" className="py-20 bg-white/70 border-y border-emerald-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-extrabold">Om Namari</h2>
              <p className="mt-4 text-slate-700 max-w-prose">
                Namari står för balans mellan natur och teknik. Jag tar samma noggrannhet med mig ut i skogen som när jag designar en hemsida – ordning, säkerhet och ett lugnt tempo som ger ett snyggt resultat.
              </p>
              <dl className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4"><dt className="font-semibold">Område</dt><dd className="text-slate-700">Västmanland med omnejd</dd></div>
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4"><dt className="font-semibold">Uppdrag</dt><dd className="text-slate-700">Fast pris eller löpande</dd></div>
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4"><dt className="font-semibold">Trygghet</dt><dd className="text-slate-700">Försäkrad & F-skatt</dd></div>
              </dl>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-6">
                <h3 className="font-bold">Snabbt om mig</h3>
                <p className="mt-2 text-slate-700">Fredrik Wästerberg – lugn, strukturerad och lösningsorienterad. Jag trivs bäst när jag får skapa nytta – i naturen eller på webben.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-extrabold">Kontakta mig</h2>
              <p className="mt-3 text-slate-700">Beskriv kort vad du behöver hjälp med så återkommer jag normalt samma dag.</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid sm:grid-cols-2 gap-4">
                <input placeholder="Ditt namn" className="rounded-xl border border-emerald-200 bg-white/90 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" />
                <input placeholder="E-post" type="email" className="rounded-xl border border-emerald-200 bg-white/90 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" />
                <input placeholder="Telefon" className="rounded-xl border border-emerald-200 bg-white/90 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" />
                <select className="rounded-xl border border-emerald-200 bg-white/90 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Ämne</option>
                  <option>Naturarbete</option>
                  <option>Webb & Design</option>
                  <option>Annat</option>
                </select>
                <textarea placeholder="Meddelande" rows={5} className="sm:col-span-2 rounded-xl border border-emerald-200 bg-white/90 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" />
                <button className="sm:col-span-2 rounded-xl bg-emerald-700 text-white px-6 py-3 font-medium hover:bg-emerald-800 transition shadow">
                  Skicka förfrågan
                </button>
              </form>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-3xl bg-white border border-emerald-100 p-6 shadow-sm">
                <h3 className="font-bold">Direktkontakt</h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-emerald-700" /><a href="tel:+46761390199" className="hover:underline">0761-390199</a></li>
                  <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-emerald-700" /><a href="mailto:fredrik@namari.se" className="hover:underline">fredrik@namari.se</a></li>
                  <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-emerald-700" /><span>Västmanland, Sverige</span></li>
                </ul>
                <div className="mt-6 rounded-2xl bg-emerald-50/70 border border-emerald-100 p-4 text-sm">
                  <p className="font-medium">Offert & platsbesök</p>
                  <p className="text-slate-700">Jag kommer gärna ut och tittar innan jag lämnar ett pris. Kostnadsfritt runt Västmanland.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-emerald-100 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Namari – Fredrik Wästerberg</p>
          <div className="flex items-center gap-6 text-sm">
            <a className="hover:text-emerald-700" href="#tjanster">Tjänster</a>
            <a className="hover:text-emerald-700" href="#om">Om</a>
            <a className="hover:text-emerald-700" href="#kontakt">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
