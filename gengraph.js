function randoGraphAdjMat(numOfNodes) {
  let array = [];

  for (let i = 0; i < numOfNodes; i++) {
    array.push([]);
    for (let j = 0; j < numOfNodes; j++) {

      if ((Math.random() * 10) < 3) {

        array[i].push(1);
      } else {
        array[i].push(0);
      }


    }
  }



  console.log(array);


}


function randoGraphAdjList(numOfNodes) {
  let alphabet = ['a','b','c','d','e','f','g','h','i','j'];
  let array = [];
  for (let i = 0; i < numOfNodes; i++) {
    array.push({
      name: alphabet[i],
      nodes: []
    });
  }
  for (let i = 0; i < numOfNodes; i++) {

    for (let j = 0; j < numOfNodes; j++) {

      if ((Math.random() * 10) < 3) {

        array[i].nodes.push(alphabet[j]);

      }

    }
  }
  return array;
}

console.log(randoGraphAdjList(4));
