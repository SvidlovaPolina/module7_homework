// 1 вариант

class Appliance { 
    constructor(name) { // конструтор родительского класса
      this.name = name // зададим свойство (поле) 'name'
    } 
  
    getInfo() { 
      return 'Я - ' + this.name; // можем вывести только имя
    } 
} 
   
class SizeAppliance extends Appliance { 
    constructor(IsChild, name, ownSize) { // конструтор дочернего класса                       
      super(name); // Вызовем родительский конструктор с параметром 'name'
      this.ownSize = ownSize;
      this.IsChild = IsChild;
    }
     
    getInfo() { 
      if(this.IsChild)
          return 'Я - ' + this.name + ', мой размер ' + this.ownSize; // можем вывести имя и размер
      else
          return super.getInfo();
    } 
} 
  
const printer = new SizeAppliance(true, 'принтер', '5x5x15'); 
console.log(printer.getInfo());
  
const fridge = new SizeAppliance(false, 'холодильник', '20x20x40'); 
console.log(fridge.getInfo());

// 2 вариант

/*class Appliance {
    constructor(ownSize) {
      this.ownSize = ownSize || 16;
      this.smallSize = true;
    }
    
    getInfo() {
    return 'Я - принтер, мой размер ' + this.ownSize;
    }
}
  
class SizeAppliance extends Appliance {
    constructor(isFridge, name, ownSize){
      super(ownSize);
      this.isFridge = isFridge;
      this.name = isFridge ? name : ownSize;
    }	
    
    getInfo() {
       if (this.isFridge) {
         return 'Я - ' + this.name
       } else {
         return super.getInfo();
       }
    }
}
  
const fridge = new SizeAppliance(true, 'холодильник') // не должен относиться к родителю
console.log(fridge.getInfo())
  
const printer = new SizeAppliance(false, 'чайник') // должен относиться к родителю
console.log(printer.getInfo())*/