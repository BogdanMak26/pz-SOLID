class CreditCardPayment {
    public pay(): void {
        console.log('Paying with credit card');
    }
}

class Cart {
    private payment: CreditCardPayment;
    public constructor() {
        this.payment = new CreditCardPayment();
    }

    public checkout(): void {
        this.payment.pay();
    }
}

const cart = new Cart();
cart.checkout();