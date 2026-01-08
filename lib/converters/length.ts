export type LengthUnit =
    | 'mm'
    | 'cm'
    | 'm'
    | 'km'
    | 'inch'
    | 'foot'
    | 'yard'
    | 'mile'
// Tüm birimleri metre cinsinden dönüşüm faktörleri
const factors: Record<LengthUnit, number> = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.344,
};
/**
 * Uzunluk birimlerini dönüştürme fonksiyonu
 * @param value - dönüştürülecek değer
 * @param from - hangi birimden
 * @param to - hangi birime
 * @returns dönüştürülmüş değer
 */
export function convertLength(
    value: number,
    from: LengthUnit,
    to: LengthUnit
): number {
    if (isNaN(value)) return 0;

    // Önce metreye çevir
    const valueInMeters = value * factors[from];

    // Ardından hedef birime çevir
    const result = valueInMeters / factors[to];
    // Maksimum 6 basamak hassasiyet
    return Number(result.toFixed(6));
}

