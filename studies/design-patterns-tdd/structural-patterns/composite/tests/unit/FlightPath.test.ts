import { InvalidStopOverFlight } from "../../src/Exceptions/InvalidStopOverFlight";
import { ConnectionFlight } from "../../src/Flight/ConnectionFlight";
import { SimpleFlight } from "../../src/Flight/SimpleFlight";
import { StopOverFlight } from "../../src/Flight/StopOverFlight";

describe("ComposedFlightPath", () => {
  it("should create a stop-over flight", () => {
    const firstFlight = new SimpleFlight("GRU", "FOR", 200, 400);
    const secondFlight = new SimpleFlight("FOR", "NAT", 150, 200);
    const stopOver = new StopOverFlight(firstFlight, secondFlight);
    expect(stopOver.origin()).toEqual("GRU");
    expect(stopOver.destiny()).toEqual("NAT");
    expect(stopOver.cost()).toEqual(350);
    expect(stopOver.distance()).toEqual(600);
  });

  it("should throw exception when trying to create a stop-over flight with different airports", () => {
    const firstFlight = new SimpleFlight("GRU", "BSB", 200, 400);
    const secondFlight = new SimpleFlight("FOR", "NAT", 150, 200);
    const t = () => {
      new StopOverFlight(firstFlight, secondFlight);
    };
    expect(t).toThrow(InvalidStopOverFlight);
    expect(t).toThrow(
      "First flight destiny should be equal to second flight origin"
    );
  });

  it("should create a connection flight", () => {
    const firstFlight = new SimpleFlight("GRU", "FOR", 200, 400);
    const secondFlight = new SimpleFlight("FOR", "NAT", 150, 200);
    const connection = new ConnectionFlight(firstFlight, secondFlight, 80);
    expect(connection.origin()).toEqual("GRU");
    expect(connection.destiny()).toEqual("NAT");
    expect(connection.cost()).toEqual(430);
    expect(connection.distance()).toEqual(600);
  });

  it("should create a composed stop-ove and connection flight", () => {
    const firstFlight = new SimpleFlight("GRU", "FOR", 200, 400);
    const secondFlight = new SimpleFlight("FOR", "NAT", 150, 200);
    const stopOver = new StopOverFlight(firstFlight, secondFlight);
    const thirdFlight = new SimpleFlight("NAT", "BSB", 250, 300);
    const connection = new ConnectionFlight(stopOver, thirdFlight, 50);
    expect(connection.origin()).toEqual("GRU");
    expect(connection.destiny()).toEqual("BSB");
    expect(connection.cost()).toEqual(650);
    expect(connection.distance()).toEqual(900);
  });
});
