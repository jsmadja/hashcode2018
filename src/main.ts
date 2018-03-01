module.exports = {
  calcSolution: (input: AlgoInput): AlgoOutput => {
    let vehicles: Vehicle[] = Array.from({ length: input.vehicles }).map((x, i) => ({
      id: i + 1,
      x: 0,
      y: 0,
      availableTime: 0,
    }));
    let T = 0;
    let rides = input.rides;
    rides.sort((r1, r2) => {
      return r1.finish.time - r2.finish.time;
    });
    console.log(rides);
    let result: AlgoOutput = [];

    while (vehicles.length > 0 && T < input.steps) {
      const vehicle = selectNextVehicle(vehicles);
      if (vehicle === null) {
        break;
      }
      const [foundRide, ride] = findNextRide(vehicle, rides);
      if (!foundRide) {
        const vehicleIndex = vehicles.findIndex(v => v.id === vehicle.id);
        vehicles.splice(vehicleIndex, 1);
        continue;
      }
      // console.log('found ride')
      // console.log(ride)

      addResult(result, vehicle, <Ride> ride);
      T++;
    }

    return result;
    // [{vehicle: 1, rides: [0]}, {vehicle: 2, rides: [2, 1]}];
  },
};

function addResult(currentResult: AlgoOutput, vehicle: Vehicle, ride: Ride): AlgoOutput {
  vehicle.availableTime = Math.max(ride.start.time, distanceFromRide(vehicle, ride)) + distanceFromStartToFinish(ride);
  const vehicleInSolution = currentResult.find(v => v.vehicle === vehicle.id);
  if (vehicleInSolution) {
    vehicleInSolution.rides.push(ride.id);
  } else {
    currentResult.push({
      vehicle: vehicle.id,
      rides: [ride.id],
    })
  }
  return currentResult;
}

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

function findNextRide(vehicle: Vehicle, rides: Ride[]): [boolean, Ride | null] {
  const index = rides.findIndex((ride) => isRideFinishable(vehicle, ride));
  if (index >= 0) {
    // console.log('ok')
    const ride = rides.splice(index, 1)
    return [true, ride[0]];
  }
  return [false, null];
}

function distanceFromRide(vehicle: Vehicle, ride: Ride): number {
  return Math.abs(vehicle.x - ride.start.x) + Math.abs(vehicle.y - ride.start.y);
}

function distanceFromStartToFinish(ride: Ride) {
  return Math.abs(ride.finish.x - ride.start.x) + Math.abs(ride.finish.y - ride.start.y)
}

function timeToFinishRide(vehicle: Vehicle, ride: Ride): number {
  return distanceFromRide(vehicle, ride) + distanceFromStartToFinish(ride);
}

function isRideFinishable(vehicle: Vehicle, ride: Ride): boolean {
  return timeToFinishRide(vehicle, ride) <= ride.finish.time;
}
