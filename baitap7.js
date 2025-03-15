let students = [  
    { name: "Lê Anh Đức", scores: { math: 9, english: 8, literature: 7 } },  
    { name: "Lưu Doãn Hải", scores: { math: 3, english: 2, literature: 5 } },  
    { name: "Lương Trọng Đạt", scores: { math: 9.5, english: 9, literature: 9 } }  
];  

function filterStudentsByAverageScore(students) {  
    return students.filter(student => {  
        const { math, english, literature } = student.scores;  
        const average = (math + english + literature) / 3; 
        return average >= 8;   
    });  
}  

const filteredStudents = filterStudentsByAverageScore(students);  

console.log("Danh sách sinh viên có điểm trung bình >= 8:");  
filteredStudents.forEach(student => {  
    console.log(student.name);  
});  