/*
Vezba 4
Dobili smo sirove podatke i zaduženje da izvučemo određenu statistiku.
Izračunati koliko godina iskustva imaju svi ljudi ukupno.
*/

var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  }
];

function godineIskustva(array) {
	var suma = 0;

	for (var i = 0; i < array.length; i++) {
		suma += array[i].yearsExperience;
	}

	console.log(suma);
}

godineIskustva(people);