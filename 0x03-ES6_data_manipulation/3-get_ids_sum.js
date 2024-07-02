export default function getListStudentIds(student) {
	if (!Array.isArray(student)) {
		return [];
	}
	const initial = 0;
	return student.reduce((accum, curr) => accum + curr.id, initial);
}
