import { Engine, GPSEnum, TripComputer } from "../../components";

export interface IBuilder<T extends object = {}> {
  reset(): void;
  getResult(): T;
  setSeats(seats: number): void;
  setEngine(engine: Engine): void;
  setTripComputer(tripComputer: TripComputer | undefined): void;
  setGPS(GPS: GPSEnum | undefined): void;
}
