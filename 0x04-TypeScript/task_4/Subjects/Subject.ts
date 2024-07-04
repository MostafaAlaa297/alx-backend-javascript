/// <reference path="Teacher.ts" />

namespace Subjects {
	export class Subject: Teacher {
		teacher: Teacher;
		
		setTeacher(teacher: Teacher) {
                	this.teacher = teacher;
        	}
	}
}
