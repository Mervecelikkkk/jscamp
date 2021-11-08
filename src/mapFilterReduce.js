let cart = [
    { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
    { id: 2, productName: "Kupa", quantity: 5, unitPrice: 70 },
    { id: 3, productName: "Mouse", quantity: 10, unitPrice: 250 },
    { id: 4, productName: "Kulaklık", quantity: 15, unitPrice: 300 },
    { id: 5, productName: "Masa", quantity: 2, unitPrice: 1000 },
    { id: 6, productName: "Şarj Cihazı", quantity: 4, unitPrice: 150 },
]
console.log("<ul>")
cart.map(product => {
    console.log("<li>" + product.productName + ":" + product.unitPrice * product.quantity + "</li>")
})

console.log("</ul>")

let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)

console.log(total)

let quantityOver2 = cart.filter(product => product.quantity > 2)
console.log(quantityOver2)

function addToCArt(sepet) {
    cart.push({ id: 7, productNamme: "Hırka", quantity: 1, unitPrice: 500 })
}
addToCArt(cart)
console.log(cart)

let sayi = 10
function sayiTopla(number) {
    number += 1

}
sayiTopla(sayi)
console.log(sayi)