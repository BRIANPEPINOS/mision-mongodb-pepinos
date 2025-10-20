use('bestiario');

const criaturas = db.criaturas;
criaturas.insertOne({
    nombre: 'Dragón',
    tipo: 'Reptil',
    habitat: 'Montañas',
    nivelPeligro: 9,
    habilidades: ['Volar', 'Escupir fuego', 'Regeneración'],
    fechaDescubrimiento: new Date('2024-03-15'),
    descripcion: 'Una criatura mítica conocida por su gran tamaño y poderosas habilidades.'
});
criaturas.insertOne({
    nombre: "Leviatán de Abismo",
    habitat: "Océano Profundo",
    nivel_peligro: 9,
    dieta: ["cetáceos", "barcos"],
    habilidades: ["torbellino", "mordisco abisal"],
    descubierto_por: "Capitán Thorne",
    estadisticas: { ataque: 88, defensa: 92, velocidad: 40 },
    dimensiones: { longitud_m: 60, masa_ton: 120 }
});
