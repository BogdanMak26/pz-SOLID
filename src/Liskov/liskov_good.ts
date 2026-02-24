class Order {
    id: number;
    items: string[];
}
class ConfirmedOrder extends Order {
    payed: boolean;
    markAsPaid(): void {
        this.payed = true;
    }
}
class DraftOrder extends Order {
}

const order = new ConfirmedOrder();
const order1 = new Order();
const order2 = new Order();
const draftorder = new DraftOrder();

//ми не можемо засунути в масив ніякі об'єкти окрім ConfirmedOrder
const mas: ConfirmedOrder[] = [order,draftorder, order2, order1];
mas.forEach(o=> {o.markAsPaid();
    console.log(o.payed)})


