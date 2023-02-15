const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

// a)
const pokemon1Copia = {
    ...pokemon1,
    nome: 'Squirtle',
    tipo: 'Água'
}
console.log('CÓPIA:',pokemon1Copia);

// b)
pokemon1.ataques = [];
console.log('ORIGINAL:', pokemon1);

// c)
const ataque = {
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100,
}

pokemon1.ataques.push(ataque)
console.log('ORIGINAL', pokemon1);

// d)
const pokemon1CopiaDaCopia = {
    ...pokemon1Copia,
    ataques: []
}
console.log('CÓPIA DA CÓPIA:',pokemon1CopiaDaCopia);

// e)
pokemon1.ataques.nome = 'Folha Navalha';
pokemon1.ataques.dano = 40;
pokemon1.ataques.precisao = 100;
pokemon1.ataques.tipo = 'Grama';

// f)
pokemon1CopiaDaCopia.ataques.nome = 'Jato de Água';
pokemon1CopiaDaCopia.ataques.dano = 45;
pokemon1CopiaDaCopia.ataques.precisao = 100;
pokemon1CopiaDaCopia.ataques.tipo = 'Água';

// g)
console.log('FINAL - CÓPIA DA CÓPIA:',pokemon1CopiaDaCopia);
console.log('FINAL - ORGINAL:',pokemon1);
