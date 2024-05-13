// A function getStudentIdsSum that returns the sum of all the student ids.
export default function getTotalStudentIDsSum(listOfStudents) {
  return listOfStudents.reduce((totalSum, currentStudent) => totalSum + currentStudent.id, 0);
}
