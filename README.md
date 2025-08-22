<h1>🛒 Micro-Store </h1>

<table>
  <tr>
    <th>📌 Proje Hakkında</th>
    <td>
      Bu proje <b>mikro-frontend mimarisi</b> ile geliştirilmiş basit bir e-ticaret uygulamasıdır.<br/>
      İki ayrı uygulama içerir:
      <ul>
        <li><b>Home App</b> → Ürün listeleme ve ürün detay sayfaları</li>
        <li><b>Cart App</b> → Kullanıcının sepete eklediği ürünleri gösterir</li>
      </ul>
      Veriler <a href="https://fakestoreapi.com/">Fake Store API</a> üzerinden çekilmektedir.
    </td>
  </tr>
</table>

<h2>🚀 Kullanılan Teknolojiler</h2>
<table>
  <tr><th>Teknoloji</th><th>Açıklama</th></tr>
  <tr><td><b>Next.js 15 (App Router)</b></td><td>Modern React framework, SSR/ISR desteği ile</td></tr>
  <tr><td><b>React 19</b></td><td>UI geliştirme</td></tr>
  <tr><td><b>Tailwind CSS 4</b></td><td>Responsive ve hızlı UI tasarımı</td></tr>
  <tr><td><b>Docker & Docker Compose</b></td><td>Mikro-frontend servislerini containerize edip orkestrasyon</td></tr>
  <tr><td><b>Mikro-Frontend Mimarisi (Multi-Zone)</b></td><td>Home App ve Cart App bağımsız servisler</td></tr>
  <tr><td><b>TypeScript</b></td><td>Tip güvenliği</td></tr>
  <tr><td><b>Jest + React Testing Library</b></td><td>(Opsiyonel) Unit & component testleri</td></tr>
</table>

<h2>📂 Proje Yapısı</h2>
<table>
  <tr><th>Klasör</th><th>Açıklama</th></tr>
  <tr><td><b>home-app</b></td><td>Ürün listeleme, detay ve "Add to Cart" butonları</td></tr>
  <tr><td><b>cart-app</b></td><td>Sepet uygulaması</td></tr>
  <tr><td><b>docker</b></td><td>Docker Compose konfigürasyonları</td></tr>
  <tr><td><b>README.md</b></td><td>Proje dokümantasyonu</td></tr>
</table>

<h2>⚙️ Kurulum ve Çalıştırma</h2>
<table>
  <tr><th>Adım</th><th>Komut</th></tr>
  <tr>
    <td>Projeyi klonla</td>
    <td><code>git clone &lt;repo-url&gt; && cd micro-store</code></td>
  </tr>
  <tr>
    <td>Bağımlılıkları yükle</td>
    <td>
      <code>cd home-app && npm install</code><br/>
      <code>cd ../cart-app && npm install</code>
    </td>
  </tr>
  <tr>
    <td>Dev modda çalıştır</td>
    <td>
      Home App → <a href="http://localhost:3001">http://localhost:3001</a><br/>
      Cart App → <a href="http://localhost:3002">http://localhost:3002</a><br/>
      <code>npm run dev</code>
    </td>
  </tr>
  <tr>
    <td>Docker ile çalıştır</td>
    <td>
      <code>cd docker</code><br/>
      <code>docker-compose up --build</code>
    </td>
  </tr>
</table>
<h2>✅ Özellikler</h2>
<table>
  <tr><th>Özellik</th><th>Açıklama</th></tr>
  <tr><td>Ürün Listeleme</td><td>API’den gelen ürünler listelenir</td></tr>
  <tr><td>Ürün Detayı</td><td>Ürün detay sayfası ve yönlendirme</td></tr>
  <tr><td>Sepet Yönetimi</td><td>Kullanıcı sepete ürün ekleyebilir</td></tr>
  <tr><td>Mikro-Frontend Yapısı</td><td>Ayrı servisler halinde bağımsız geliştirme</td></tr>
  <tr><td>Docker Desteği</td><td>Tek komutla tüm uygulamaları ayağa kaldırma</td></tr>
</table>

<h2>👨‍💻 Geliştirici</h2>
<table>
  <tr><th>İsim</th><td>✍️ Senin adın</td></tr>
  <tr>
    <th>Branch Yapısı</th>
    <td>
      <ul>
        <li><b>dev/v1.0.0</b> → Geliştirme branch’i</li>
        <li><b>prod/v1.0.0</b> → Yayın (production) branch’i</li>
      </ul>
    </td>
  </tr>
</table>
