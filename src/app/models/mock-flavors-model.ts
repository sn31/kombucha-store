import { Flavor } from './flavors-model';

export class FlavorList {
    flavorList: Flavor[] = [
        new Flavor('Flavor 1', 'OhTown', 30,5),
        new Flavor('Flavor 2', 'RyanTown', 25,7),
        new Flavor('Flavor 3', 'BrianTown', 20,6),
        new Flavor('Flavor 4', 'MeriaTown', 300,8),
        new Flavor('Flavor 5', 'SleepyMelTown', 35,4)
    ];
    constructor() { };
    addFlavor(flavor: Flavor): void
    {
        this.flavorList.push(flavor);
    }
} 
