// Tạo đối tượng book với các thuộc tính ban đầu  
let book = {  
    title: "JavaScript Basics",  
    author: "John Smith",  
    page: 200  
};  

// Xóa thuộc tính page khỏi đối tượng  
delete book.page;  

// In ra đối tượng book sau khi đã xóa thuộc tính  
console.log("Đối tượng book sau khi xóa thuộc tính page:");  
console.log(book);  