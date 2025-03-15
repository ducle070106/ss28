// Tạo đối tượng rectangle với các thuộc tính và phương thức  
let rectangle = {  
    width: 10,  
    height: 5,  
    getArea: function() {  
        return this.width * this.height; // Tính diện tích hình chữ nhật  
    }  
};  

// Gọi phương thức getArea để tính diện tích  
let area = rectangle.getArea();  

// In kết quả ra màn hình  
console.log("Diện tích hình chữ nhật là:", area);  