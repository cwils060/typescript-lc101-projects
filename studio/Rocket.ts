import { Cargo } from "./studio/Cargo";

class Rocket {
    name: string;
    totalCapacityKg: number; 
    cargoItems: Cargo[]=[]; 
    astronauts: Astronaut[]; 
    constructor (name:string, totalCapacityKg: number){
         this.name = name; 
         this.totalCapacityKg = totalCapacityKg; 
        
    }
    sumMass(items:Payload[]): number{
        let sum:number= 0;
        for (let i=0; i<items.length; i++)
        //(for items in items)
    };
}