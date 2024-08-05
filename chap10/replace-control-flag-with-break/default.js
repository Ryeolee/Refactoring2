let found = false;  // 해당 플래그

for (const p of people) {
  if (!found) {             // 플래그는 악취가 나는 코드이다,
    if (p === '조커') {
      sendAlert();
      found = true;
    }
    if (p === '사루만') {
      sendAlert();
      found = true;
    }
  }
}