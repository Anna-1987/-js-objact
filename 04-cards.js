// Работаем с колекцией товаров в карзине
    // - getItems()
    // - add(product)
    // - removeEventListener(productName)
    // - clearInterval()
    // - countTotalPrice()
    // - increaseQuantity(productName)
    // - decreaseQuantity(productName)

// { name: 'apple', price: 50 }
// { name: 'lemon', price: 70 }
// { name: 'banana', price: 60 }
// { name: 'charry', price: 110 }

const cart = {
    items: [],
    getItems() { 
        return this.items;
    },
    add(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
    }
        const newProduct = {
            ...product,
            quantity:1,
        }
        this.items.push(newProduct);
    },
    remove(productName) { 

        for (let i = 0; i < this.items.length; i += 1){
            const item = this.items[i];

           if (productName === item.name) {
               console.log('Нашли продукт', productName);
               
               this.items.splice(i, 1);
            } 
        }
    },
    clear() {
        this.items = [];
     },
    countTotalPrice() { 
        let total = 0;
        for (const {price, quantity} of this.items) {
            total += price*quantity; 
        }
        return total;
    },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
    
};

// console.table(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 70 });
cart.add({ name: 'banana', price: 60 });
cart.add({ name: 'banana', price: 60 });
cart.add({ name: 'banana', price: 60 });
cart.add({ name: 'charry', price: 110 });

// cart.remove('apple');
console.table(cart.getItems());
console.log("TOTAL", cart.countTotalPrice());

cart.clear();
// console.log(cart.getItems());
// console.log("TOTAL", cart.countTotalPrice());

