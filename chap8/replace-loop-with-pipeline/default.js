function acquireData(input) {
    const lines = input.split('\n');
    let firstLine = true;
    const result = [];
  

    // 파이프 라인 사용 for -> map, if -> filter 사용
    for (const line of lines) {
      if (firstLine) {
        firstLine = false;
        continue;
      }

      if (line.trim() === '') continue;
  
      const record = line.split(',');
  
      if (record[1].trim() === 'India') {
        result.push({ city: record[0].trim(), phone: record[2].trim });
      }
    }
    return result;
  }