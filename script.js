const apiPromise = fetch(
  "https://grandcircusco.github.io/demo-apis/donuts.json"
).then((res) => res.json());

//step 1
apiPromise.then((data) => console.log(data));
// step 2
apiPromise.then((data) => console.log(data.count));
// step 3
const countPromise = apiPromise.then((res) => res.count);
countPromise.then((data) => console.log(data));
// step 4
const top4Promise = apiPromise.then((data) => data.results.slice(0, 4));
top4Promise.then((data) => console.log(data));
// step 5
const namesPromise = apiPromise.then((data) =>
  data.results.map((data) => data.name)
);
namesPromise.then((data) => console.log(data));
// step 6
const capNamesPromise = namesPromise.then((data) =>
  data.map((name) => name.toUpperCase())
);
capNamesPromise.then((data) => console.log(data));
// step 7
let badPromise = fetch(
  "https://grandcircusco.github.io/demo-apis/wrong.json"
).then((res) => res.json());
badPromise.catch((error) => console.log("Failed", error));
// step 8
