function fn() {
    let youngest = people[0] ? people[0].age : Infinity;
    let totalSalary = 0;
  
    for (const p of people) {
      if (p.age < youngest) youngest = p.age;  // 로직 1
      totalSalary += p.salary;                  // 로직 2
    }
  
    return `최연소: ${youngest}, 총급여: ${totalSalary}`;
  }