class Vehicle{
    #capacity=0;
    constructor(x,y){

        this.name=x;
        this.#capacity=y;
    }

    startEngine(){
        console.log(`the name is ${this.name} can start and has capacity of ${this.#capacity}`)
    }

    stopEngine(){
        console.log(`the name is ${this.name} can stop and has capacity of ${this.#capacity}`)
    }

    run(){
        console.log(`the name is ${this.name} `)
    }


    set setCapacity(capacity)
    {
        this.#capacity=capacity;
    }

    get getCapacity(){
        return this.#capacity;
    }
    static brake(){
        console.log(`we are calling a static method`)
    }

    callCapacity(){
        console.log(`the name is ${this.name} has capacity is ${this.#capacity}`)
    }




}

class W2 extends Vehicle{
    constructor(name,capacity,engine){
        super(name,capacity);
        this.tyre=2;
        this.engine=engine;

    }
    printDetails(){
        console.log(this.name);
        console.log(this.getCapacity);
        console.log(this.tyre);
        console.log(this.engine);
    }
}



class W3 extends Vehicle{
    constructor(name,capacity,engine){
        super(name,capacity);
        this.tyre=3;
        this.engine=engine;

    }
    printDetails(){
        console.log(this.name);
        console.log(this.getCapacity);
        console.log(this.tyre);
        console.log(this.engine);
    }
}


twow=new W2('xyx','40000w','3000cc');
twow.printDetails();
twow.startEngine();
twow.stopEngine();
twow.callCapacity();


threew=new W2('abc','40000w','6000cc');
threew.printDetails();
threew.startEngine();
threew.stopEngine();
threew.callCapacity();