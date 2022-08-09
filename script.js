function CoffeMake(){}
CoffeMake.prototype.on = function(){
    console.log('Making coffee');
}
CoffeMake.prototype.off = function(){
    console.log('Stop making coffee');
}
function DripCoffeeMaker(seconds=1000){
    CoffeMake.call(this);
    temperature = Math.round(Math.random()*100);
    this.seconds = seconds;

}
DripCoffeeMaker.prototype = Object.create(CoffeMake.prototype);
DripCoffeeMaker.prototype.constructor = DripCoffeeMaker;

DripCoffeeMaker.prototype.showTemperature = function(){
    console.log(`Temperature is: ${temperature}`);
    if(temperature==100){
        this.off();
    }
}
DripCoffeeMaker.prototype.timer = function(){
    console.log(`Coffee preparation will start in ${this.seconds/1000} seconds`);
    setTimeout(this.on, this.timer);
   
}

function HornCoffeeMaker(whip=false){
    CoffeMake.call(this);
    this.whip=whip;

}
HornCoffeeMaker.prototype = Object.create(CoffeMake.prototype);
HornCoffeeMaker.prototype.constructor = HornCoffeeMaker;

HornCoffeeMaker.prototype.whipMilk = function(){
    if(this.whip){
        console.log('You chose coffee with whipped milk');
    }
}



function CoffeMachine(drinkChoice = 'Espresso'){
    CoffeMake.call(this);
    coffeeDrinks = ["Espresso", "Americano", "Latte", "Cappuccino", "Dopio"];
    this.drinkChoice = drinkChoice;

}
CoffeMachine.prototype = Object.create(CoffeMake.prototype);
CoffeMachine.prototype.constructor = CoffeMachine;

CoffeMachine.prototype.coffeeChoice = function(){
    if(coffeeDrinks.includes( this.drinkChoice)){
        console.log(`You chose: ${this.drinkChoice}`);
    }
    else{
        console.log(`You chose: Espresso`);
    }
}


let drip_coffee = new DripCoffeeMaker(3000);
drip_coffee.showTemperature();
drip_coffee.timer();
drip_coffee.off();

console.log('\n\n');
let horn_coffee = new HornCoffeeMaker(true);
horn_coffee.whipMilk();
horn_coffee.on();
horn_coffee.off();

console.log('\n\n');
let machine =  new CoffeMachine("Latte");
machine.coffeeChoice();
machine.on();
machine.off();
