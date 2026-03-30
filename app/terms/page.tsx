import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "ConverTools kullanım koşulları — siteyi kullanarak kabul ettiğiniz şartlar.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-white bg-gray-900 rounded-xl">
      <h1 className="text-3xl font-bold mb-2">Kullanım Koşulları</h1>
      <p className="text-gray-400 text-sm mb-10">
        Son güncelleme: Ocak 2026
      </p>

      <div className="space-y-8 text-gray-300 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Kabul</h2>
          <p>
            ConverTools (<strong>convertools.com.tr</strong>) sitesini kullanarak bu kullanım
            koşullarını kabul etmiş sayılırsınız. Koşulları kabul etmiyorsanız lütfen
            siteyi kullanmayınız.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Hizmet Açıklaması</h2>
          <p>
            ConverTools, birim dönüştürücü, kod düzenleyici ve encode/decode gibi ücretsiz
            online araçlar sunan bir web uygulamasıdır. Araçlarımız herhangi bir kayıt
            gerekmeksizin ücretsiz kullanılabilir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Kullanım Kuralları</h2>
          <p className="mb-3">Sitemizi kullanırken aşağıdakileri yapmamayı kabul edersiniz:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Siteye zarar verebilecek yazılım veya kod göndermek</li>
            <li>Siteyi yasadışı amaçlarla kullanmak</li>
            <li>Otomatik araçlarla siteye aşırı yük bindirmek</li>
            <li>Site içeriğini izinsiz kopyalamak veya dağıtmak</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Sorumluluk Reddi</h2>
          <p className="mb-3">
            Araçlarımız &quot;olduğu gibi&quot; sunulmaktadır. Aşağıdaki konularda sorumluluk
            kabul etmiyoruz:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Hesaplama veya dönüşüm sonuçlarının doğruluğu</li>
            <li>Hizmetin kesintisiz veya hatasız çalışması</li>
            <li>Araçların kullanımından doğabilecek zararlar</li>
          </ul>
          <p className="mt-3">
            <strong>Önemli:</strong> Kritik kararlar için (tıbbi, hukuki, finansal vb.)
            sonuçları profesyonel bir uzmanla doğrulamanızı öneririz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Fikri Mülkiyet</h2>
          <p>
            Sitedeki tüm içerik, tasarım ve kod ConverTools&apos;a aittir ve telif hukuku
            ile korunmaktadır. İzinsiz kopyalanamaz veya dağıtılamaz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Reklamlar</h2>
          <p>
            Sitemizde Google AdSense aracılığıyla reklamlar gösterilmektedir. Reklam
            tercihlerinizi Google&apos;ın{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              reklam ayarları
            </a>{" "}
            sayfasından yönetebilirsiniz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Geçerli Hukuk</h2>
          <p>
            Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Anlaşmazlıklarda
            Türk mahkemeleri yetkilidir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. İletişim</h2>
          <p>
            Sorularınız için{" "}
            <a href="/contact" className="text-blue-400 hover:underline">
              iletişim sayfamızdan
            </a>{" "}
            bize ulaşabilirsiniz.
          </p>
        </section>

      </div>
    </main>
  );
}