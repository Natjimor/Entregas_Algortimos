function computeGrades (studentGrades) {
    if (studentGrades<60) {
        console.log("F")
    }
    if (studentGrades>=60 & studentGrades<=69) {
        console.log("D")
    }
    if (studentGrades>=70 & studentGrades<=79) {
        console.log("C")
    } if (studentGrades>=80 & studentGrades<=89) {
        console.log("B")
    }
    if (studentGrades>=90 & studentGrades=100) {
        console.log("A")
    }
}
computeGrades(98)
