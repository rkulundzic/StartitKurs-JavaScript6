/*
2.2 Dobili smo sirove podatke i zaduženje da izvučemo određenu statistiku.
  Naš zadatak: Napraviti novi objekat koji će da sadrži zbir godina iskustva 
  po departmentima, dakle:
  {
    Engineering: 20,
    IT: 10,
    Management: 11
  }
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


function filterStruka(array) {
	var engineering = 0;
	var it = 0;
	var management = 0;
	var struka = {engineering, it, management};

	for (var i = 0; i < array.length; i++) {
		if (array[i].department == 'IT') {
			it += array[i].yearsExperience;
		}
		else if (array[i].department == 'Engineering'){
			engineering += array[i].yearsExperience;
		}
		else if (array[i].department == 'Management'){
			management += array[i].yearsExperience;
		}
	}

	var struka = {Engineering: engineering, IT: it, Management: management};

	console.log(struka);
}

filterStruka(people);