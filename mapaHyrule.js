const grass = { name: 'grass', value: 10 }
const florest = { name: 'florest', value: 100 }
const sand = { name: 'sand', value: 20 }
const mountain = { name: 'mountain', value: 150 }
const water = { name: 'water', value: 180 }

const line0 = [
    florest, florest, florest, florest, florest, florest,
    florest, florest, florest, florest, florest, florest,
    florest, florest, florest, mountain, mountain, mountain,
    mountain, mountain, mountain, mountain, mountain, mountain,
    mountain, mountain, mountain, mountain, mountain, mountain,
    mountain, mountain, mountain, mountain, mountain, mountain,
    mountain, mountain, mountain, mountain, mountain, mountain,
];


const line1 = [
    florest, grass, grass, florest, grass, florest,
    grass, florest, grass, grass, grass, grass,
    grass, grass, grass, mountain, mountain, mountain,
    mountain, mountain, mountain, mountain, sand, sand,
    sand, sand, sand, mountain, mountain, mountain,
    mountain, mountain, mountain, sand, sand, sand,
    sand, mountain, mountain, mountain, mountain, mountain,
];


const line2 = [
    florest, grass, grass, florest, grass, grass,
    grass, florest, grass, florest, grass, grass,
    grass, grass, grass, grass, mountain, mountain,
    mountain, mountain, mountain, sand, sand, sand,
    sand, sand, sand, sand, mountain, mountain,
    mountain, mountain, sand, sand, sand, sand,
    sand, sand, mountain, mountain, mountain, mountain,
];


const line3 = [
    florest, grass, florest, florest, grass, florest,
    grass, florest, grass, florest, grass, grass,
    florest, grass, grass, grass, grass, mountain,
    sand, sand, sand, sand, sand, sand,
    sand, sand, sand, sand, sand, sand,
    sand, sand, sand, sand, sand, sand,
    sand, sand, sand, sand, mountain, mountain,
];


const line4 = [
    florest, grass, grass, grass, grass, florest,
    grass, florest, grass, florest, grass, grass,
    florest, grass, grass, grass, grass, mountain,
    sand, mountain, mountain, sand, sand, sand,
    sand, sand, sand, sand, mountain, mountain,
    mountain, mountain, sand, sand, sand, sand,
    sand, sand, mountain, mountain, mountain, mountain,
];


const line5 = [
    florest, grass, florest, florest, grass, florest,
    grass, florest, grass, florest, grass, florest,
    florest, florest, grass, grass, grass, mountain,
    sand, mountain, mountain, mountain, sand, sand,
    sand, sand, sand, mountain, mountain, mountain,
    mountain, water, mountain, sand, sand, sand,
    sand, mountain, water, mountain, mountain, mountain,
];


const line6 = [
    florest, grass, florest, florest, grass, florest,
    grass, grass, grass, florest, grass, grass,
    grass, grass, grass, grass, grass, mountain,
    sand, mountain, mountain, mountain, mountain, mountain,
    mountain, mountain, mountain, mountain, mountain, mountain,
    mountain, water, mountain, mountain, mountain, mountain,
    mountain, mountain, water, mountain, mountain, mountain,
];


const line7 = [
    florest, grass, florest, florest, florest, florest,
    grass, florest, florest, florest, grass, grass,
    grass, grass, grass, grass, grass, mountain,
    sand, mountain, mountain, mountain, mountain, mountain,
    mountain, mountain, mountain, mountain, mountain, mountain,
    mountain, water, mountain, mountain, mountain, mountain,
    mountain, mountain, water, mountain, grass, mountain,
];


const line8 = [
    florest, grass, grass, florest, grass, grass,
    grass, grass, grass, florest, grass, grass,
    water, grass, grass, grass, grass, mountain,
    sand, sand, sand, sand, sand, sand,
    sand, sand, sand, sand, sand, mountain,
    mountain, water, mountain, mountain, mountain, mountain,
    mountain, mountain, water, mountain, grass, mountain,
];


const line9 = [
    florest, florest, florest, florest, grass, florest,
    florest, florest, grass, grass, grass, water,
    water, water, grass, grass, grass, mountain,
    sand, mountain, mountain, mountain, mountain, mountain,
    sand, mountain, mountain, mountain, sand, mountain,
    mountain, water, mountain, mountain, mountain, mountain,
    mountain, mountain, water, mountain, grass, mountain,
];



const line10 = [
    florest, grass, grass, florest, grass, grass,
    grass, grass, grass, grass, water, water,
    water, water, water, grass, grass, mountain,
    mountain, mountain, florest, florest, florest, mountain,
    mountain, mountain, florest, florest, florest, florest,
    florest, water, grass, grass, mountain, mountain,
    grass, grass, water, grass, grass, mountain,
];


const line11 = [
    florest, grass, grass, florest, grass, grass,
    florest, grass, grass, grass, grass, water,
    water, water, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    water, water, water, water, water, water,
    water, water, water, grass, grass, mountain,
];


const line12 = [
    florest, grass, grass, florest, grass, grass,
    florest, grass, grass, grass, grass, grass,
    water, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    water, grass, grass, florest, grass, grass,
    grass, grass, grass, florest, grass, mountain,
];


const line13 = [
    florest, grass, grass, florest, grass, grass,
    florest, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, florest,
    florest, florest, grass, grass, grass, florest,
    florest, florest, florest, grass, grass, grass,
    water, grass, grass, grass, grass, grass,
    grass, florest, grass, florest, grass, mountain,
];


const line14 = [
    florest, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    water, grass, florest, grass, florest, grass,
    florest, florest, grass, florest, grass, mountain,
];


const line15 = [
    florest, grass, florest, florest, florest, florest,
    florest, grass, florest, florest, florest, grass,
    grass, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    water, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, mountain,
];


const line16 = [
    florest, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, water,
    water, water, water, water, water, water,
    water, water, water, grass, grass, grass,
    grass, grass, mountain, mountain, mountain, mountain,
    mountain, mountain, mountain, mountain, mountain, mountain,
];


const line17 = [
    florest, grass, grass, grass, grass, grass,
    grass, grass, grass, water, grass, grass,
    florest, grass, florest, grass, grass, water,
    grass, grass, grass, grass, grass, grass,
    grass, grass, water, grass, grass, grass,
    water, grass, mountain, sand, sand, sand,
    sand, sand, sand, sand, sand, mountain,
];



const line18 = [
    florest, grass, florest, grass, grass, florest,
    grass, grass, grass, water, grass, grass,
    grass, grass, grass, grass, grass, water,
    grass, florest, grass, grass, grass, grass,
    florest, grass, water, water, water, water,
    water, grass, mountain, sand, mountain, sand,
    sand, mountain, sand, sand, sand, mountain,
];


const line19 = [
    florest, grass, florest, grass, grass, florest,
    grass, grass, grass, water, grass, grass,
    florest, grass, florest, grass, grass, grass,
    grass, florest, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    grass, grass, mountain, sand, mountain, mountain,
    mountain, mountain, mountain, mountain, mountain, mountain,
];



const line20 = [
    florest, grass, florest, grass, grass, florest,
    grass, grass, grass, water, grass, grass,
    grass, grass, grass, grass, grass, water,
    grass, grass, grass, water, grass, grass,
    grass, grass, water, grass, grass, grass,
    mountain, grass, mountain, sand, sand, sand,
    sand, sand, sand, sand, sand, mountain,
];


const line21 = [
    florest, grass, florest, grass, grass, florest,
    grass, grass, grass, water, grass, florest,
    florest, florest, florest, grass, grass, water,
    grass, florest, grass, grass, grass, grass,
    florest, grass, grass, grass, grass, grass,
    mountain, grass, mountain, sand, mountain, mountain,
    mountain, mountain, sand, mountain, mountain, mountain,
];


const line22 = [
    florest, grass, grass, grass, grass, grass,
    grass, grass, grass, water, grass, grass,
    grass, grass, grass, grass, grass, water,
    grass, grass, grass, grass, grass, grass,
    grass, grass, water, grass, mountain, grass,
    mountain, grass, mountain, sand, sand, sand,
    sand, sand, sand, sand, sand, mountain,
];


const line23 = [
    florest, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, florest,
    florest, florest, florest, grass, grass, water,
    water, water, water, grass, grass, water,
    water, water, water, grass, mountain, grass,
    mountain, grass, mountain, mountain, mountain, sand,
    sand, mountain, mountain, mountain, mountain, mountain,
];


const line24 = [
    florest, florest, florest, florest, florest, florest,
    florest, grass, grass, florest, florest, florest,
    florest, florest, florest, florest, florest, florest,
    grass, grass, grass, grass, grass, grass,
    grass, grass, water, grass, mountain, grass,
    mountain, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, mountain,
];


const line25 = [
    florest, florest, florest, florest, florest, florest,
    grass, grass, florest, florest, florest, florest,
    florest, grass, florest, florest, florest, florest,
    florest, grass, florest, florest, florest, grass,
    grass, grass, water, grass, mountain, grass,
    grass, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, mountain,
];


const line26 = [
    florest, grass, florest, grass, florest, grass,
    grass, grass, florest, florest, florest, florest,
    grass, grass, grass, florest, florest, florest,
    florest, grass, florest, florest, florest, grass,
    grass, grass, water, grass, mountain, grass,
    grass, grass, mountain, mountain, mountain, mountain,
    mountain, mountain, mountain, mountain, mountain, mountain,
];


const line27 = [
    mountain, grass, grass, grass, florest, grass,
    grass, grass, florest, florest, florest, grass,
    grass, grass, grass, grass, florest, florest,
    florest, grass, grass, grass, grass, grass,
    grass, grass, water, grass, grass, grass,
    grass, grass, grass, grass, grass, mountain,
    grass, grass, grass, grass, grass, mountain,
];


const line28 = [
    mountain, grass, grass, grass, florest, grass,
    grass, grass, florest, florest, florest, florest,
    grass, grass, grass, florest, florest, florest,
    florest, grass, florest, grass, grass, grass,
    grass, grass, water, grass, grass, grass,
    grass, grass, grass, grass, grass, mountain,
    grass, grass, grass, grass, grass, mountain,
];


const line29 = [
    mountain, grass, grass, grass, grass, grass,
    grass, grass, grass, florest, florest, florest,
    florest, grass, florest, florest, florest, florest,
    grass, grass, florest, grass, grass, grass,
    grass, grass, water, water, water, grass,
    water, water, water, water, grass, mountain,
    grass, mountain, mountain, mountain, mountain, mountain,
];


const line30 = [
    mountain, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    grass, grass, grass, water, grass, grass,
    grass, grass, grass, grass, grass, mountain,
];


const line31 = [
    mountain, mountain, mountain, mountain, mountain, mountain,
    mountain, mountain, mountain, grass, grass, grass,
    grass, mountain, mountain, mountain, mountain, mountain,
    mountain, mountain, grass, grass, mountain, mountain,
    mountain, mountain, grass, grass, grass, grass,
    grass, grass, grass, water, mountain, mountain,
    mountain, mountain, mountain, mountain, grass, mountain,
];


const line32 = [
    mountain, sand, sand, sand, sand, sand,
    sand, sand, mountain, grass, grass, grass,
    grass, mountain, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    grass, mountain, grass, grass, grass, grass,
    grass, grass, grass, water, mountain, mountain,
    mountain, mountain, mountain, mountain, mountain, mountain,
];


const line33 = [
    mountain, sand, mountain, mountain, sand, sand,
    sand, sand, mountain, grass, grass, grass,
    grass, mountain, grass, grass, grass, grass,
    grass, grass, grass, grass, florest, grass,
    grass, mountain, grass, grass, water, water,
    water, water, water, water, water, water,
    mountain, mountain, water, water, mountain, mountain,
];


const line34 = [
    mountain, sand, mountain, mountain, sand, sand,
    sand, sand, mountain, grass, grass, grass,
    grass, mountain, grass, florest, grass, grass,
    water, water, grass, grass, florest, grass,
    grass, mountain, grass, grass, water, water,
    mountain, water, water, water, water, water,
    mountain, mountain, water, water, mountain, mountain,
];


const line35 = [
    mountain, sand, sand, sand, sand, sand,
    sand, sand, mountain, grass, grass, mountain,
    grass, mountain, grass, grass, grass, grass,
    water, water, grass, grass, florest, grass,
    grass, mountain, grass, grass, water, water,
    water, water, mountain, mountain, water, water,
    mountain, mountain, water, water, mountain, mountain,
];

const line36 = [
    mountain, sand, sand, sand, sand, sand,
    sand, sand, mountain, grass, grass, mountain,
    grass, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    grass, mountain, grass, grass, water, water,
    water, water, mountain, mountain, water, water,
    mountain, mountain, water, water, mountain, mountain,
];

const line37 = [
    mountain, sand, sand, sand, sand, sand,
    sand, mountain, mountain, mountain, mountain, mountain,
    grass, grass, florest, grass, grass, grass,
    grass, grass, florest, florest, florest, grass,
    grass, mountain, grass, grass, water, water,
    water, water, water, water, water, water,
    mountain, mountain, water, water, mountain, mountain,
];

const line38 = [
    mountain, sand, sand, sand, sand, sand,
    sand, sand, sand, mountain, mountain, mountain,
    grass, grass, florest, grass, water, water,
    water, grass, grass, florest, grass, grass,
    grass, mountain, grass, grass, water, water,
    water, water, water, water, water, water,
    mountain, mountain, water, water, mountain, mountain,
];

const line39 = [
    mountain, sand, sand, sand, sand, sand,
    sand, sand, sand, mountain, mountain, mountain,
    grass, grass, florest, grass, grass, grass,
    grass, grass, grass, florest, grass, grass,
    grass, mountain, grass, grass, water, water,
    water, water, water, water, water, water,
    water, water, water, water, mountain, mountain,
];

const line40 = [
    mountain, sand, sand, sand, sand, sand,
    sand, sand, sand, sand, grass, grass,
    grass, grass, grass, grass, grass, grass,
    grass, grass, grass, grass, grass, grass,
    grass, mountain, mountain, mountain, water, water,
    water, water, water, water, water, water,
    water, water, water, water, mountain, mountain,
];


const line41 = [
    mountain, mountain, mountain, mountain, mountain, mountain,
    mountain, mountain, mountain, mountain, mountain, mountain,
    mountain, mountain, mountain, mountain, mountain, mountain,
    mountain, mountain, mountain, mountain, mountain, mountain,
    mountain, mountain, mountain, mountain, mountain, mountain,
    mountain, mountain, mountain, mountain, mountain, mountain,
    mountain, mountain, mountain, mountain, mountain, mountain,
];


export const mapaHyrule = Array.from([
    line0,
    line1,
    line2,
    line3,
    line4,
    line5,
    line6,
    line7,
    line8,
    line9,
    line10,
    line11,
    line12,
    line13,
    line14,
    line15,
    line16,
    line17,
    line18,
    line19,
    line20,
    line21,
    line22,
    line23,
    line24,
    line25,
    line26,
    line27,
    line28,
    line29,
    line30,
    line31,
    line32,
    line33,
    line34,
    line35,
    line36,
    line37,
    line38,
    line39,
    line40,
    line41
]);

let matriz = [];


for (let i = 0; i < mapaHyrule.length; i++) {
    matriz[i] = [];
    for (let j = 0; j < mapaHyrule.length; j++) {
        matriz[i][j] = {value: mapaHyrule[i][j].value, position_i: i, position_j: j}
    }
}
export const matrix = matriz;
