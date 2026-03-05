export type WeightUnit=
| "mg"
| "g"
| "kg"
| "ton"
| "oz"
| "lb"
| "stone"

// Tüm birimlere gram cinsinden dönüşm faktörleri
const factors: Record<WeightUnit,number>={
    mg: 0.001,
    g: 1,
    kg: 1000,
    ton: 1000000,
    oz: 28.3495,
    lb: 453.592,
    stone: 6350.29
};
export function convertWeight(
    value: number,
    from: WeightUnit,
    to: WeightUnit
):number{
    if(isNaN(value)) return 0;

    //Önce grama çevir, sonra hedef birimine
    const valueInGrams = value *factors[from];
    const result = valueInGrams/factors[to];
    return Number(result.toFixed(6))
}