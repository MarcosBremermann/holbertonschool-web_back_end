// A function updateStudentGradeByCity that returns an array of students for a specific city
export default function updateStudentGradeByCity(records, city, grades) {
  return records
    .filter((r) => r.city === city)
    .map((r) => {
      let grade = 'N/A';
      const match = grades.find((g) => g.sId === r.id);
      if (match) {
        grade = match.grade;
      }
      return { ...r, grade };
    });
}
