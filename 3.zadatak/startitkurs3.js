/*
3. Stigli su nam podaci sa servera. 
Podaci su u vidu objekta koji čuva informacije o kursu i između ostalog niz ocena
polaznika. 
Želimo da izračunamo prosečnu ocenu. 
Napisati funkciju koja će kao jedini parametar da prima objekat sa rezultatima.
Funkcija treba da vrati prosečnu ocenu
*/

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
	var suma = 0;

	console.log(nizOcene);

	for (var i = 0; i < nizOcene.length; i++) {
		suma += nizOcene[i];
	}

	console.log(suma / nizOcene.length);
}

noviNiz(testObjekat);