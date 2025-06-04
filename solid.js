
class OrderSaver {
    save(orderData) {
        throw new Error("Not implemented");
    }
}

class Notifier {
    send(message) {
        throw new Error("Not implemented");
    }
}


class FileOrderSaver extends OrderSaver {
    save(orderData) {
        const fs = require('fs');
        fs.writeFileSync('order.json', JSON.stringify(orderData));
    }
}


class EmailNotifier extends Notifier {
    send(message) {
        console.log(`Sending email: ${message}`);
    }
}

class SMSNotifier extends Notifier {
    send(message) {
        console.log(`Sending SMS: ${message}`);
    }
}

class OrderProcessor {
    constructor(orderData, saver, notifier) {
        this.orderData = orderData;
        this.saver = saver;
        this.notifier = notifier;
    }

    validOrder() {
        if (!this.orderData.items || this.orderData.items.length === 0) {
            throw new Error('Order must have at least one item');
        }
    }

    calculateTotal() {
        return this.orderData.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    process() {
        this.validOrder();
        const total = this.calculateTotal();
        this.saver.save(this.orderData);
        this.notifier.send(`${orderData.customerEmail} Gracias por su compra vuelva pronto!.`);
        return total;
    }
}

const orderData = {
    customerEmail: 'emaildeprueba@ejemplo.com',
    items: [
        { name: 'Laptop', price: 1200, quantity: 1 },
        { name: 'Mouse', price: 25, quantity: 2 }
    ]
};

const saver = new FileOrderSaver();
const notifier = new EmailNotifier();

const processor = new OrderProcessor(orderData, saver, notifier);
console.log('Total: $', processor.process());