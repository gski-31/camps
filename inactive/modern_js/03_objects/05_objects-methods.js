let restaurant = {
    name: 'chronic',
    capacity: 88,
    guests: 0,
    seatParty: function (partySize) {
        this.guests += partySize
    },
    removeParty: function (partySize) {
        this.guests -= partySize
    },
    checkSpace: function (partySize) {
        let seatsLeft = this.capacity - this.guests
        return partySize <= seatsLeft
    }
}

/* CHALLENGE:
// seat party
// remove party
*/

restaurant.seatParty(88);
restaurant.checkSpace(56);
restaurant.removeParty(72);
restaurant.checkSpace(56);