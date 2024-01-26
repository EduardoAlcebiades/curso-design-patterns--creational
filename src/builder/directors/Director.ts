import { IBuilder } from "../builders";
import { Engine, GPSEnum, TripComputer } from "../components";
import { Car, CarManual } from "../products";

export class Director {
  constructSportCar<T extends Car | CarManual>(builder: IBuilder<T>) {
    builder.reset();
    builder.setSeats(2);
    builder.setEngine(new Engine(2.6, 12));
    builder.setTripComputer(undefined);
    builder.setGPS(undefined);
  }

  constructSUV<T extends Car | CarManual>(builder: IBuilder<T>) {
    builder.reset();
    builder.setSeats(5);
    builder.setEngine(new Engine(1.6, 10));
    builder.setTripComputer(new TripComputer(8, 5.0));
    builder.setGPS(GPSEnum.BASIC);
  }
}
