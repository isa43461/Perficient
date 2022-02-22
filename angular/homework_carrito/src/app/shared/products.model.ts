export class Products{
    public name: string;
    public desc: string;
    public amount: number;
    public slug: string;

    constructor(name: string, desc: string, amount: number, slug: string){
        this.name = name;
        this.desc = desc;
        this.amount = amount;
        this.slug = slug;
    }
}