/*
Stigli su nam podaci sa servera. Podaci su u vidu objekta koji čuva informacije o kursu i između ostalog niz ocena polaznika. Želimo da izvučemo statistiku koliko ima koje ocene. Npr 5 osoba je dalo ocenu 3, 7 osoba je dalo ocenu 6, itd.
Napisati funkciju koja će kao jedini parametar da prima objekat sa rezultatima. Funkcija treba da vrati NOVI NIZ čiji će elementi da budu novi objekti za svaku ocenu 1-10 zasebno. Primer strukture i podataka:
var rates_count = [
    { rate_1: 4 }, // "rate_1" predstavlja ocenu "1", a 4 predstavlja
    { rate_2: 2 }, // koliko puta se pojavljuje u ulaznom nizu
    { rate_3: 3 },
    { rate_4: 8 },
    { rate_5: 9 },
    { rate_6: 10 },
    { rate_7: 3 },
    { rate_8: 11 },
    { rate_9: 3 },
    { rate_10: 2 }
  ];
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

function brojacOcena(object) {
	var nizOcene = object['ocenePolaznika'];
	var brojOcene;
	var ratesCount = [];

	console.log(nizOcene);

	for (var i = 1; i <=10; i++) {
		brojOcene = 0;
		for (var j = 0; j < nizOcene.length; j++) {
			if (i == nizOcene[j]){
				brojOcene ++;
			}			
		}

	ratesCount.push({["rate_" + i] : brojOcene});
	
	}

	console.log(ratesCount);
}

brojacOcena(testObjekat);