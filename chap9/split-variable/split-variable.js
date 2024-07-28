

function distanceTraveled(scenario, time) {
    let result;
    const primaryAcceleration = scenario.primaryForce / scenario.mass;  // const를 통해 변수를 불변으로 만든다.
    const primaryTime = Math.min(time, scenario.delay);
  
    result = 0.5 * primaryAcceleration * primaryTime * primaryTime;
    const secondaryTime = time - scenario.delay;
  
    if (secondaryTime > 0) {
      const primaryVelocity = primaryAcceleration * scenario.delay;
      const secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass; // const를 통해 변수를 불변으로 만든다.
  
      result += primaryVelocity * secondaryTime + 0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
    }
  
    return result;
  }