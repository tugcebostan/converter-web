/**
 * Saf JavaScript ile yazılmış MD5 implementasyonu.
 * Hiçbir dış bağımlılık gerektirmez.
 * Kaynak: RFC 1321 tabanlı, yaygın kullanılan referans implementasyon.
 */

function md5(input: string): string {
  // UTF-8 byte dizisine çevir
  const msgBytes = encodeUtf8(input);
  return computeMd5(msgBytes);
}

function encodeUtf8(str: string): number[] {
  const bytes: number[] = [];
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code < 0x80) {
      bytes.push(code);
    } else if (code < 0x800) {
      bytes.push(0xc0 | (code >> 6), 0x80 | (code & 0x3f));
    } else if (code >= 0xd800 && code <= 0xdbff) {
      // surrogate pair
      const next = str.charCodeAt(++i);
      code = 0x10000 + ((code - 0xd800) << 10) + (next - 0xdc00);
      bytes.push(
        0xf0 | (code >> 18),
        0x80 | ((code >> 12) & 0x3f),
        0x80 | ((code >> 6) & 0x3f),
        0x80 | (code & 0x3f),
      );
    } else {
      bytes.push(0xe0 | (code >> 12), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
    }
  }
  return bytes;
}

// MD5 sabitleri (T tablosu) — sin fonksiyonundan türetilir
const T = Array.from({ length: 64 }, (_, i) =>
  Math.floor(Math.abs(Math.sin(i + 1)) * 2 ** 32) >>> 0
);

// Her turda kaç bit sola döndürüleceği
const S = [
  7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
  5,  9, 14, 20, 5,  9, 14, 20, 5,  9, 14, 20, 5,  9, 14, 20,
  4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
  6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21,
];

function computeMd5(msg: number[]): string {
  // Padding: 1 bit ekle, 64 byte'a hizala, sonuna mesaj uzunluğunu yaz
  const bitLen = msg.length * 8;
  msg.push(0x80);
  while (msg.length % 64 !== 56) msg.push(0);

  // Uzunluğu little-endian 64-bit olarak ekle
  for (let i = 0; i < 8; i++) {
    msg.push((bitLen / 2 ** (i * 8)) & 0xff);
  }

  // Başlangıç hash değerleri
  let a0 = 0x67452301;
  let b0 = 0xefcdab89;
  let c0 = 0x98badcfe;
  let d0 = 0x10325476;

  // Her 64-byte bloğu işle
  for (let offset = 0; offset < msg.length; offset += 64) {
    // Bloğu 16 adet 32-bit little-endian sayıya böl
    const M: number[] = [];
    for (let j = 0; j < 16; j++) {
      M[j] =
        msg[offset + j * 4] |
        (msg[offset + j * 4 + 1] << 8) |
        (msg[offset + j * 4 + 2] << 16) |
        (msg[offset + j * 4 + 3] << 24);
    }

    let A = a0, B = b0, C = c0, D = d0;

    for (let i = 0; i < 64; i++) {
      let F: number, g: number;

      if (i < 16) {
        F = (B & C) | (~B & D);
        g = i;
      } else if (i < 32) {
        F = (D & B) | (~D & C);
        g = (5 * i + 1) % 16;
      } else if (i < 48) {
        F = B ^ C ^ D;
        g = (3 * i + 5) % 16;
      } else {
        F = C ^ (B | ~D);
        g = (7 * i) % 16;
      }

      F = (F + A + T[i] + M[g]) >>> 0;
      A = D;
      D = C;
      C = B;
      // sol döndürme
      B = ((F << S[i]) | (F >>> (32 - S[i]))) >>> 0;
      B = (B + C) >>> 0;
    }

    a0 = (a0 + A) >>> 0;
    b0 = (b0 + B) >>> 0;
    c0 = (c0 + C) >>> 0;
    d0 = (d0 + D) >>> 0;
  }

  // little-endian hex'e çevir
  return [a0, b0, c0, d0]
    .map((x) =>
      // Her 4 byte'ı ters sırayla hex yaz
      Array.from({ length: 4 }, (_, i) => ((x >>> (i * 8)) & 0xff).toString(16).padStart(2, "0")).join("")
    )
    .join("");
}

export default md5;