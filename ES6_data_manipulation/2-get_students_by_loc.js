// A function getStudentsByLocation that returns an array of objects in a specific city.
export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.filter(({ location }) => location === city);
}
