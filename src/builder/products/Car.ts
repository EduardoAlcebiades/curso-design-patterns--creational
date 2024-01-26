import { Engine, GPSEnum, TripComputer } from "../components";

export class Car {
  seats!: number;
  engine!: Engine;
  tripComputer: TripComputer | undefined;
  GPS: GPSEnum | undefined;
}
