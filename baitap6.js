// Giỏ hàng  
const cart = [  
    { name: "Mèn mén", price: 30000, quantity: 2 },  
    { name: "Mì tôm", price: 5000, quantity: 1 },  
    { name: "Bánh bao", price: 15000, quantity: 3 }  
];  

// Hàm tính tổng tiền trong giỏ hàng  
function calculateTotal(cart) {  
    let total = 0; // Khởi tạo biến tổng tiền  

    // Duyệt qua từng sản phẩm trong giỏ hàng  
    cart.forEach(product => {  
        total += product.price * product.quantity; // Cộng tiền sản phẩm vào tổng  
    });  

    return total; // Trả về tổng tiền  
}  

// Gọi hàm để tính tổng và in ra kết quả  
const totalAmount = calculateTotal(cart);  
console.log("Tổng tiền trong giỏ hàng là:", totalAmount);  