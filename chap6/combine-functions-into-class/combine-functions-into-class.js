class Reading{
    constructor(data){
        this._customer = data.customer;
        this._quantity=data.quantity;
        this._month=data.month;
        this._year=data.year;
    }

    get customer(){return this._customer;}
    get month(){return this._month;}
    get quantity(){return this._quantity;}
    get year(){return this._year;}


    get baseCharge(){
        return baseRate(this.month, this.year) * this.quantity;
    }

    get taxableCharge(){
        return Math.max(0, this.baseChage - taxThreshold(this.year));
    }
}