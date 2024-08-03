if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {  // if 문의 줄이 너무 길다.
    charge = quantity * plan.summerRate;
  } else {
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
  }