import { Engine, GPSEnum, TripComputer } from "../components";
import { Car } from "../products";
import { IBuilder } from "./interfaces/IBuilder";

export class CarBuilder implements IBuilder {
  private car = new Car();

  reset(): void {
    this.car = new Car();
  }

  getResult(): Car {
    const result = this.car;
    this.reset();

    return result;
  }

  setSeats(seats: number): void {
    this.car.seats = seats;
  }

  setEngine(engine: Engine): void {
    this.car.engine = engine;
  }

  setTripComputer(tripComputer: TripComputer | undefined): void {
    this.car.tripComputer = tripComputer;
  }

  setGPS(GPS: GPSEnum | undefined): void {
    this.car.GPS = GPS;
  }
}
