export default function getListStudentIds(student, loc) {
	if (!Array.isArray(student)) {
		return [];
	}
	if (typeof(loc) !== "string") {
		return [];
	}

	return student.filter(x => x.location === loc);
}
