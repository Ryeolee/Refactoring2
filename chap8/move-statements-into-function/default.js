function renderPerson(outStream, person) {
    const result = [];
  
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(`<p>제목: ${person.photo.title}</p>`);   // 제목 출력 중복
    result.push(emitPhotoData(person.photo));
    return result.join('\n');
  }
  
  function photoDiv(p) {
    return ['<div>', `<p>제목: ${p.title}</p>`, emitPhotoData(p), '</div>'].join('\n'); // 제목 출력 중복
  }
  
  function emitPhotoData(aPhoto) {
    const result = [];
    result.push(`<p>제목: ${aPhoto.location}</p>`);
    result.push(`<p>제목: ${aPhoto.date.toString()}</p>`);
    return result.join('\n');
  }