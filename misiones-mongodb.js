use('bestiario');

const criaturas = db.criaturas;
criaturas.insertOne({
    nombre: 'Dragón',
    tipo: 'Reptil',
    habitat: 'Montañas',
    nivelPeligro: 9,
    habilidades: ['Volar', 'Escupir fuego', 'Regeneración'],
    descubierto_por: "Robin hood",
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

// === Inserciones múltiples adicionales con insertMany() ===
criaturas.insertMany([
  {
    nombre: "Licántropo Alfa",
    habitat: "Bosques del Norte",
    nivel_peligro: 7,
    dieta: ["carne fresca"],
    habilidades: ["transformación", "olfato agudo", "fuerza aumentada"],
    descubierto_por: "Cazador Rurik",
    fases_lunares: ["llena", "nueva"]
  },
  {
    nombre: "Ave del Trueno",
    habitat: "Cordillera del Cielo",
    nivel_peligro: 9,
    dieta: ["serpientes gigantes", "cabras salvajes"],
    habilidades: ["rayos", "vuelo a gran altitud"],
    descubierto_por: "Exploradora Kaela",
    tamaño: { envergadura_m: 25, masa_kg: 700 },
    simbolismo: "protección celestial"
  },
  {
    nombre: "Troll de Caverna",
    habitat: "Montañas",
    nivel_peligro: 6,
    dieta: ["carne", "hongos cavernosos"],
    habilidades: ["regeneración lenta", "golpe pesado"],
    descubierto_por: "Mineros del Reino Gris",
    debilidades: ["luz solar"],
    comportamiento: "solitario"
  }
]);

// Consulta para mostrar todas las criaturas insertadas
db.criaturas.find();

// Consulta para encontrar criaturas de un habitat determinado
db.criaturas.find({ habitat: "Montañas"});

// Consulta para encontrar criaturas con nivel de peligro mayor a 8
db.criaturas.find({ nivel_peligro: { $gt: 8 } });


// Actualización para agregar una nueva habilidad a una criatura específica
db.criaturas.updateOne(
  { nombre: "Troll de Caverna" },          // Filtro: qué criatura queremos actualizar
  { $addToSet: { habilidades: "rugido ensordecedor" } }  // Acción: agregar al array sin duplicar
);