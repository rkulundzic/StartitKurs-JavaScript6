var testObjekat = {
	naziv: "Startit Kurs pravljenja sajtova",
	trajanjeNedelja: 33,
	predavac: {
		ime: "Petar",
		prezime: "Popovic"
	},
	ocenePolaznika: [3, 2, 7, 4, 8, 1, 9, 2, 10, 10, 3, 6, 3, 1, 7, 3, 5, 4, 10, 9, 1, 9],
	organizacija: "Startit",
	kursJosTraje: true
};

function noviNiz(object) {
	var nizOcene = object['ocenePolaznika'];

	console.log(nizOcene);

	for (var i = 0; i < nizOcene.length; i++) {
		nizOcene[i]=nizOcene[i]+"/10";
	}

	console.log(nizOcene);
}

noviNiz(testObjekat);
