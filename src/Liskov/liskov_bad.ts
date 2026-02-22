class Order {
    id: number;
    items: string[];
    payed: boolean;

    // constructor

    markAsPaid(): void {
        this.payed = true;
    }
}

class DraftOrder extends Order {
    markAsPaid(): void {
        throw new Error("Draft orders can't be payed");
    }
}


const order = new Order();
const order1 = new Order();
const order2 = new Order();
const draftorder = new DraftOrder();

const mas: Order[] = [order,draftorder, order2, order1];
mas.forEach(o=> {o.markAsPaid();
    console.log(o.payed)})