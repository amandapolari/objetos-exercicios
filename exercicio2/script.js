const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

// respostas aqui ⬇️
//a)
const primeiroAtor = filme.elenco[0];
console.log(primeiroAtor);

// b)
const tamanhoArrayElenco = filme.elenco.length;
const ultimoAtor = filme.elenco[tamanhoArrayElenco-1]
console.log(ultimoAtor);

// c)
const listaDeTransmissao = filme.transmissoesHoje;
console.log(listaDeTransmissao);

// d)
const horarioTransmissaoCanalBrasil = filme.transmissoesHoje[1].horario;
console.log(horarioTransmissaoCanalBrasil);