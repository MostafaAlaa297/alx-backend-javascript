interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
};

interface Directors extends Teacher {
	numberOfReports: number;
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher: printTeacherFunction(firstName: string, lastName: string): string {
	return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
};

interface StudentClass {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework(): string { 
		return "Currently working";
	}
	
	displayName(): string { 
		return this.firstName;
	}
};
