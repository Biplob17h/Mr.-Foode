const countTotalPrice = (orders) =>{
    let totalPrice = 0;
    orders.forEach(order => {
        const price = order.price;
        totalPrice = totalPrice + parseInt(price)
    });
    return totalPrice
}



export default countTotalPrice;