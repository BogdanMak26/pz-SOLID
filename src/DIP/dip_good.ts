interface PaymentMethod {
    pay(): void;
}

class CreditCardPayment implements PaymentMethod {
    public pay(): void {
        console.log('Paying with credit card');
    }
}

class PayPalPayment implements PaymentMethod {
    public pay(): void {
        console.log('Paying with paypal');
    }
}

class Cart {
    public constructor() {
    }
    public pay(payment: PaymentMethod): void {
        payment.pay();
    }
}

const cart = new Cart();
cart.pay(new CreditCardPayment());

cart.pay(new PayPalPayment());
