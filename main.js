class productManager {
    constructor() {
        this.products = [];
    }

    addProduct(product){
        const existingProduct = this.products.find(p => p.code === product.code);
        if (existingProduct) {
            console.log("Error ya existe el codigo del producto");
            return;
        }
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(productID){
        const product = this.products.find(p => p.code === productID);
        if (product) {
            
            return product;
        } else {
            console.log("no encontrado");
    }
  }
}

class Product {
    constructor(titulo, descripcion, precio, img, codigo, stock){
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.img = img;
    this.codigo = codigo;
    this.stock = stock;
    }
}

// aca creo la instancia para ser llamados

const manager = new productManager();

const producto1 = new Product("MOTO", "YAMAHA 150 CC", 100, "imagen1.jpg", "01", 30);
const producto2 = new Product("AUTO", "BMW", 30000, "imagen2.jpg", "02", 15);

manager.addProduct(producto1)
manager.addProduct(producto2)

const productos = manager.getProducts()
console.log("todos los productos", productos)

const productoEncontrado = manager.getProductById("01")
console.log("producto encontrado", productoEncontrado)