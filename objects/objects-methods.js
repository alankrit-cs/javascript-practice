let restaurant = {
    name: 'ABS',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailibility: function(seatCount){
        return this.guestCount+seatCount<= this.guestCapacity;
    },
    seatParty: function(seatCount){
        if(this.checkAvailibility(seatCount)){
            this.guestCount = this.guestCount+seatCount;
        }
    },
    removeParty: function(seatCount){
        this.guestCount = this.guestCount - seatCount;
    }
}

restaurant.seatParty(72);
console.log(restaurant.checkAvailibility(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailibility(4));