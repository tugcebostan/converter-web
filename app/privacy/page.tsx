import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "ConverTools gizlilik politikası — kişisel verilerinizi nasıl işlediğimiz hakkında bilgi.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-white bg-gray-900 rounded-xl">
      <h1 className="text-3xl font-bold mb-2">Gizlilik Politikası</h1>
      <p className="text-gray-400 text-sm mb-10">
        Son güncelleme: Ocak 2025
      </p>

      <div className="space-y-8 text-gray-300 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Giriş</h2>
          <p>
            ConverTools (<strong>convertools.com.tr</strong>) olarak gizliliğinize saygı duyuyoruz.
            Bu politika, sitemizi kullandığınızda hangi verilerin toplandığını ve nasıl
            kullanıldığını açıklar.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Topladığımız Veriler</h2>
          <p className="mb-3">
            Araçlarımızın büyük çoğunluğu <strong>tamamen tarayıcınızda (client-side)</strong> çalışır.
            Girdiğiniz veriler sunucularımıza gönderilmez.
          </p>
          <p>Otomatik olarak toplanabilecek veriler:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>IP adresi (anonim, log amaçlı)</li>
            <li>Tarayıcı türü ve versiyonu</li>
            <li>Ziyaret edilen sayfalar ve süre</li>
            <li>Yönlendirici URL</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Çerezler (Cookies)</h2>
          <p className="mb-3">Sitemiz aşağıdaki amaçlarla çerez kullanabilir:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              <strong>Google AdSense:</strong> Ziyaretçilere ilgili reklamlar göstermek için
              Google çerezleri kullanır. Google&apos;ın gizlilik politikasına{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                buradan
              </a>{" "}
              ulaşabilirsiniz.
            </li>
            <li>
              <strong>Tercihler:</strong> Dil ve tema gibi kullanıcı tercihlerini kaydetmek için.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Üçüncü Taraf Hizmetler</h2>
          <p>Sitemiz aşağıdaki üçüncü taraf hizmetleri kullanmaktadır:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>
              <strong>Google AdSense:</strong> Reklam gösterimi için. Google, kullanıcıların
              ilgi alanlarına göre kişiselleştirilmiş reklamlar gösterebilir.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Veri Güvenliği</h2>
          <p>
            Verilerinizi korumak için endüstri standardı güvenlik önlemleri alıyoruz.
            Ancak internet üzerinden hiçbir veri iletiminin %100 güvenli olmadığını
            belirtmek isteriz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. KVKK Kapsamında Haklarınız</h2>
          <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Kişisel verilerinize erişim hakkı</li>
            <li>Verilerinizin düzeltilmesini talep etme hakkı</li>
            <li>Verilerinizin silinmesini talep etme hakkı</li>
            <li>Veri işlemeye itiraz etme hakkı</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. İletişim</h2>
          <p>
            Gizlilik politikamızla ilgili sorularınız için{" "}
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