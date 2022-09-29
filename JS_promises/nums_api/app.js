// Numbers API 

//1
const favNum = 19;
const baseURL = "http://numbersapi.com";

const firstPromise = axios.get(`${baseURL}/${favNum}?json`)
.then(res => {console.log(res.data);})
.catch(err => {console.log("Rejected", err);});

//2
let favNums = [4,7,19];

const secondPromise = axios.get(`${baseURL}/${favNums}?json`)
.then(res => {console.log(res.data);})
.catch(err => {console.log("Rejected", err);});

//3
const favNumFacts = [];
for (let i = 1; i < 5; i++) {
    favNumFacts.push(
        axios.get(`${baseURL}/${favNum}?json`)
        );
}

Promise.all(favNumFacts)
.then(factsArr => {
    for (const fact of factsArr) {
        $("body").append(`<p>${fact.data.text}</p>`)
    }
})
.catch(err => {console.log("Rejected", err);});

