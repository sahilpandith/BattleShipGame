import Ship from './Ship.js'


describe('Ship tests',() => {
    let ship;
     
    function hitShip(times){
        while(times > 0){
            ship.hit();
            times--;
        }
    }
    beforeEach(() => {
        const length =4;
        ship = new Ship(length);
     });


    it('check length',()=> {
        expect(ship.getShipLength()).toBe(4);
    })

    it('default hits to be 0', () => {
        expect(ship.getHitCount()).toBe(0);
    })

    it('hit two ship containers', () => {
        hitShip(2);
        expect(ship.getHitCount()).toBe(2);
    })
    
    it('check if ship is sunk',() => {
        expect(ship.isSunk()).toBe(false);
    })
    it('check if ship is sunk after 4 hits',() => {
        hitShip(4);
        expect(ship.isSunk()).toBe(true);
    })
})