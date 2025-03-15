// Đối tượng company  
const company = {  
    name: "RikkeiSoft",  
    location: "Hà Nội",  
    employees: [  
        { name: "Nguyễn Văn Luận", position: "Developer" },  
        { name: "Nguyễn Văn Hoàng", position: "Tester" },  
        { name: "Hoàng Nam Cao", position: "Manager" }  
    ]  
};  

// Hiển thị tên công ty  
console.log("Tên công ty:", company.name);  

// Hiển thị tên của từng nhân viên  
console.log("Danh sách nhân viên:");  
company.employees.forEach(employee => {  
    console.log("- Tên nhân viên:", employee.name);  
});  