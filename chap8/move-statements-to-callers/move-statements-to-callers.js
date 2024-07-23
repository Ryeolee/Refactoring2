function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
    outStream.write(`<p>제목: ${person.photo.location}</p>`);  // 추출한 문장을 추가한다.
  }
  
  function listRecentPhotos(outStream, photos) {
    photos
      .filter((p) => p.date > recentDateCutoff())
      .forEach((p) => {
        outStream.write('<div>\n');
        emitPhotoData(outStream, p);
        outStream.write(`<p>제목: ${p.location}</p>`); // 추출한 문장을 추가한다.
        outStream.write('</div>\n');
      });
  }
  
  function emitPhotoData(outStream, photo) {
    outStream.write(`<p>제목: ${p.title}</p>`);
    outStream.write(`<p>제목: ${photo.date.toString()}</p>`);  // 추출 문장을 뺸다.
  }

