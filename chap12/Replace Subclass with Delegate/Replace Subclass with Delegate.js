class Booking {
    constructor(show, date){
        this._show=show;
        this._date=date;
    }
    get hasTalkback(){
        return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }

    get basePrice(){
        let result = this._show.price;
        if(this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }
  }
  
class PremiumBooking extends  Booking {
    constructor(show, date, extras){
        super(show, date);
        this._extras=extras;
    }
    get hasTalkback(){
        return this._show.hasOwnProperty('talkback');
    }

    get basePrice(){
       return Math.round(super.basePrice + this._extras.premiumFee)
    }

    get hasDinner(){
        return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
    }
}

// ----------------------------------------------------------------
 

function createPremiumBooking(show, date, extras){
    const result = new Booking(show, date, extras);
    result._bePremium(extras);
    return result;
}

class Booking {
    constructor(show, date){
        this._show=show;
        this._date=date;
    }
    get hasTalkback(){
        return (this._premiumDelegate)
        ? this._premiumDelegate.hasDinner
        :  this._show.hasOwnProperty('talkback') && !this.isPeakDay;
        
       
    }

    get basePrice(){
        return (this._premiumDelegate)
        ? this._premiumDelegate.basePrice
        :  this._privateBasePrice
    }

    get _privateBasePrice(){
        let result = this._show.price;
        if(this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }
  }
  
// class PremiumBooking extends  Booking {
//     constructor(show, date, extras){
//         super(show, date);
//         this._extras=extras;
//     }
//     get hasTalkback(){
//         return this._show.hasOwnProperty('talkback');
//     }

//     get basePrice(){
//        return Math.round(super.basePrice + this._extras.premiumFee)
//     }

//     get hasDinner(){
//         return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
//     }
// }


class PremiumBookingDelegate{

    get hasTalkback(){
        return this._host_show.hasOwnProperty('talkback')
    }

    extendBasePrice(base){
        return Math.round(base + this._extras.premiumFee)
    }
}