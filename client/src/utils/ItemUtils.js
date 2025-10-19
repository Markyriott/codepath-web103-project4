import shoeData from '../data/shoe';

export function calculateShoePrice(shoe) {
    let total = 0;
    shoe.color && (total += shoeData.Color.find(c => c.name === shoe.color)?.price || 0);
    shoe.style !== undefined && (total += shoeData.Style[shoe.style]?.price || 0);
    shoe.logo !== undefined && (total += shoeData.Logo[shoe.logo]?.price || 0);
    shoe.sole !== undefined && (total += shoeData.Sole[shoe.sole]?.price || 0);
    shoe.texture !== undefined && (total += shoeData.Texture[shoe.texture]?.price || 0);
    return total;
}

export function getShoeImage(shoe) {
    if (shoe.style !== undefined) {
        return shoeData.Style[shoe.style]?.image || '';
    }
}

export function getColorName(colorIndex) {
    return shoeData.Color[colorIndex]?.name || '';
}

export default {
    calculateShoePrice,
    getShoeImage
};