import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ekd-black border-t border-ekd-ocean/20 mt-0.05">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-ekd-pearl/80">

        <div>
          <h4 className="text-ekd-pink font-semibold mb-4">E-Marketing</h4>
          <p>
            Divisão oficial de Marketing & Campaigns da EdenKingDom Corporation.
          </p>
        </div>

        <div>
          <h4 className="text-ekd-yellow font-semibold mb-4">Institucional</h4>
          <ul className="space-y-2">
            <li><Link href="/about">Sobre Nós</Link></li>
            <li><Link href="/about/ethics">Construindo Confiança</Link></li>
            <li><Link href="/careers">Carreiras</Link></li>
            <li><Link href="/press">Imprensa</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-ekd-ocean font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link href="/legal">Jurídico</Link></li>
            <li><Link href="/terms">Termos</Link></li>
            <li><Link href="/privacy">Privacidade</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Comunidade</h4>
          <ul className="space-y-2">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/community">Comunidade</Link></li>
            <li><Link href="/announcements">Anúncios</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
