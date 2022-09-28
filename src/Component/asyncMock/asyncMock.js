const products = [
            {
            "id":1,
            "brand":"Epson",
            "title": "Impresora Epson FX 5000",
            "name":"Impresora color chorro de tinta 400 dp",
            "price": 25000,
            "stock": 5,
            "image":"./images/impresora.jpeg",
            "altimage":"impresora epson"
        },
        {
            "id":3,
            "brand":"Asus",
            "title": "Notebook asus",
            "name":"Notebook i7 de alto rendimiento pantalla 15,6 pulgadas ",
            "price": 185000,
            "stock": 3,
            "image":"./images/asus.jpeg",
            "altimage":"notebook-asus"
        },
        {
            "id":2,
            "brand":"Philips",
            "title": "Auricular H-200",
            "name":"Impresionante auriculas estereo con microfono incorporado",
            "price": 14000,
            "stock": 15,
            "image":"./images/auricular.jpeg",
            "altimage":"auricular"
        }
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}