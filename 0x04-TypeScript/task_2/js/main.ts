interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
};

interface TeacherInterface {
        workFromHome(): string;
        getCoffeeBreak(): string;
        workDirectorTasks(): string;
};

class Director extends DirectorInterface {
	workFromHome() {
		return "Working from home";
	}

	getToWork() {
		return "Getting a coffee break";
	}

	workDirectorTasks() {
		return "Getting to director tasks";
	}
}

class Teacher extends TeacherInterface {
	workFromHome() {
		return "Cannot work from home";	
	}
        getCoffeeBreak() {
		return "Cannot have a break";
	}
        workTeacherTasks() {
		return "Getting to work";
	}
}

function createEmployee(salary: : number | string): Director | Teacher  {
	if (typeof salary === "number" && salary < 500) {
		return new Teacher;
	}
	return new Director;
}

function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    } else {
        return 'Invalid subject';
    }
}

function isDirector(employee: Director | Teacher): employee is Director {
	return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee) {
	if (isDirector(employee)) {
		employee.workDirectorTasks();
	} else {
		employee.workTeacherTasks();
	}
}
