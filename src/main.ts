module.exports = {
  calcSolution: (input: AlgoInput): AlgoOutput => {

    let vehicles: Vehicle[] = Array.from({ length: input.vehicles }).map((x, i) => ({
      id: i,
      x: 0,
      y: 0,
      availableTime: 0,
    }));
    let T = 0;
    let rides = input.rides;
    let result = [];

    while (vehicles.length > 0 && T < input.steps) {
      const vehicle = selectNextVehicle(vehicles);
      if (vehicle === null) {
        break;
      }
      const [foundRide, ride, newRides] = findNextRide(vehicle, rides);
      if (!foundRide) {
        const vehicleIndex = vehicles.findIndex(v => v.id === vehicle.id);
        vehicles = vehicles.splice(vehicleIndex, 1);
        continue;
      }
      

      T++;
    }

    return [{vehicle: 1, rides: [0]}, {vehicle: 2, rides: [2, 1]}];
  },
};

type Vehicle = {
  id: number,
  x: number,
  y: number,
  availableTime: number, // at T=availableTime it can be used again
}

function selectNextVehicle(vehicles: Vehicle[]): Vehicle | null {
  return vehicles.reduce((bestV: Vehicle | null, currV: Vehicle) => {
    if (bestV === null) {
      return currV;
    }
    if (currV.availableTime < bestV.availableTime) {
      return currV
    }
    return bestV;
  }, null);
}

function findNextRide(vehicle: Vehicle, rides: Ride[]): [boolean, Ride | null, Ride[]] {
  const index = rides.findIndex((ride) => isRideFinishable(vehicle, ride));
  if (index >= 0) {
    return [true, rides[index], rides.splice(index, 1)];
  }
  return [false, null, rides];
}

function distanceFromRide(vehicle: Vehicle, ride: Ride): number {
  return Math.abs(vehicle.x - ride.start.x) + Math.abs(vehicle.y - ride.start.y);
}

function timeToFinishRide(vehicle: Vehicle, ride: Ride): number {
  return distanceFromRide(vehicle, ride) + Math.abs(ride.finish.x - ride.start.x) + Math.abs(ride.finish.y - ride.start.y);
}

function isRideFinishable(vehicle: Vehicle, ride: Ride): boolean {
  return timeToFinishRide(vehicle, ride) <= ride.finish.time;
}
