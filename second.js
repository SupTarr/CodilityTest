function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const lists = S.split("\n");
  const listName = [];
  const listSize = [];
  lists.forEach((list) => {
    const temp = list.split(" ");
    listName.push(temp[0]);
    listSize.push(temp[1]);
  });
  const resultType = [];
  const resultSize = [];
  for (let i = 0; i < listName.length; i++) {
    let type = listName[i].split(".");
    type = type[type.length - 1];
    let size = listSize[i].split("b");
    resultSize.push(size[0]);
    if (type === "mp3" || type === "aac" || type === "flac") {
      resultType.push("music");
    } else if (type === "jpg" || type === "bmp" || type === "gif") {
      resultType.push("images");
    } else if (type === "mp4" || type === "avi" || type === "mkv") {
      resultType.push("movies");
    } else {
      resultType.push("other");
    }
  }
  let musicSize = 0;
  let imagesSize = 0;
  let moviesSize = 0;
  let otherSize = 0;
  for (let i = 0; i < listName.length; i++) {
    if (resultType[i] === "music") {
      musicSize += parseInt(listSize[i]);
    } else if (resultType[i] === "images") {
      imagesSize += parseInt(listSize[i]);
    } else if (resultType[i] === "movies") {
      moviesSize += parseInt(listSize[i]);
    } else {
      otherSize += parseInt(listSize[i]);
    }
  }
  let result = "";
  result += `music ${musicSize}b\n`;
  result += `images ${imagesSize}b\n`;
  result += `movies ${moviesSize}b\n`;
  result += `other ${otherSize}b`;
  return result;
}
