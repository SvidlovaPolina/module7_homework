function Appliance(name, power) {
  this.name = name,
  this.power = power 
}

Appliance.prototype.getPower = function() {
  console.log(`Потребляемая мощность ${this.power} Вт/час`)
}

Appliance.prototype.getConnect = function() {
  console.log(`Прибор ${this.name} включен в розетку`)
}

Appliance.prototype.getDisconnect = function() {
  console.log(`Прибор ${this.name} выключен из розетки`)
}

const lamp = new Appliance('лампа', 60)
const computer = new Appliance('компьютер', 900)
const fridge = new Appliance('холодильник', 570)
const printer = new Appliance('принтер', 25)

lamp.getPower()
computer.getPower()
fridge.getConnect()
printer.getDisconnect()


/////////////////////////////////////////////////

/*function Appliance(name, power) {
    this.name = name,
    this.power = power 
}
  
Appliance.prototype.getPower = function() {
    console.log(`Потребляемая мощность ${this.power} Вт/час`)
}
  
Appliance.prototype.getConnect = function() {
    console.log(`Прибор ${this.name} включен в розетку`)
}
  
Appliance.prototype.getDisconnect = function() {
    console.log(`Прибор ${this.name} выключен из розетки`)
}
  
function SizeAppliance(name, power, size) {
    this.name = name,
    this.power = power,
    this.size = size
}
  
SizeAppliance.prototype = new Appliance()
  
const lamp = new Appliance('лампа', 60)
const computer = new Appliance('компьютер', 900)
const fridge = new SizeAppliance('холодильник', 570, 170);
const printer = new SizeAppliance('принтер', 25, 16);
  
//lamp.getPower()
//computer.getPower()
fridge.getPower()
//printer.getPower()
console.log(fridge)
  
fridge.getConnect()
printer.getDisconnect()*/