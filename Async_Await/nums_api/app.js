// Numbers API 
const baseURL = "http://numbersapi.com";

//1
const favNum = 19;

async function getFavNum(num){
    const res = await axios.get(`${baseURL}/${num}?json`);
    console.log(res.data);
}

getFavNum(favNum);


//2
let favNums = [4,7,19];

async function getMultNums(nums){
    const res = await axios.get(`${baseURL}/${nums}?json`)
    console.log(res.data)
}

getMultNums(favNums);

//3


async function getFavNumFacts(num){

    const favNumFacts = [];
    for (let i = 1; i < 5; i++) {
        favNumFacts.push(axios.get(`${baseURL}/${num}?json`)
        );
    }

    const facts = await Promise.all(favNumFacts);
    console.log(facts);
    for (const fact of facts) {
        $("body").append(`<p>${fact.data.text}</p>`)
    }
}

getFavNumFacts(favNum);




