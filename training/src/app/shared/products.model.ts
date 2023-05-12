export class Products{
    public name: string;
    public src: string;
    public amount: number;
    public slug: string;
    public desc: string;
    public price: number;
    public discount: number;

    constructor(name: string, src: string, amount: number, slug: string, desc: string, price: number, discount: number){
        this.name = name;
        this.src = src;
        this.amount = amount;
        this.slug = slug;
        this.desc = desc;
        this.price = price;
        this.discount = discount;
    }
}