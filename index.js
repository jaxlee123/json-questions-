import data from './rawBooks.json' assert { type: 'json' };
console.log(data);
console.log(data[121].author)
var pages = 0;
var average = 0;
var time = 0; 

for(let i=0;i<data.length;i++){
    pages = parseInt(pages) + data[i]['# Pages'];
}

average = parseInt(pages)/data.length;
console.log(average);
let genre = new Array;
let genreCount = new Array;
// genre.push(data[0].category);
// genreCount.push(1);
console.log(genre);
console.log(genreCount);
for(let i=0;i<data.length;i++){
    if(genre.includes(data[i].category) == false){
        genre.push(data[i].category);
        genreCount.push(1);
    }
    else{ //if includes category
        // console.log(parseInt(genre.findIndex(ele => ele == data[i].category)) + "blarp"); //lol it's giving the -1st index
        // console.log("usdhgouwheguwb")
        genreCount[parseInt(genre.findIndex(ele => ele == data[i].category))]++;
        // console.log("yasssss");
    }
}
var largest= 0;
for (let i=0; i<=largest;i++){
    if (genreCount[i]>largest) {
    largest=genreCount[i];
    }
}
console.log(largest)
console.log(genre[genreCount.findIndex(ele => ele == largest)])


// console.log(genre);
// console.log(genreCount);
var counter = 0;
var avgTime = 0;
let timeArr = new Array; 

function isEmpty(value) {
    return (value == null || (typeof value === "string" && value.trim().length === 0));
  }
  
for (let i=0; i<data.length;i++){
    if((data[i]['Date Bought']).includes('') ==false && data[i]['Date Read'].includes('') ==false){
    avgTime = parseInt(avgTime) + data[i]['Time on TBR (days)'];
    counter++;
    }
   
}
console.log("time" + parseInt(avgTime))
console.log("avg time on TBR" + parseInt(avgTime)/parseInt(counter))
// console.log(avgTime + "aaaaaaa")
// console.log(counter + "baofjeijfid")
// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

let author = new Array;
let authorCount = new Array;
// genre.push(data[0].category);
// genreCount.push(1);
// console.log(author);
// console.log(authorCount);
for(let i=0;i<data.length;i++){
    if(author.includes(data[i].author) == false){
        author.push(data[i].author);
        authorCount.push(1);
    }
    else{ //if includes category
        // console.log(parseInt(genre.findIndex(ele => ele == data[i].category)) + "blarp"); //lol it's giving the -1st index
        // console.log("usdhgouwheguwb")
        authorCount[parseInt(author.findIndex(ele => ele == data[i].author))]++;
        // console.log("yasssss");
    }
}
var largestAuth= 0;
for (let i=0; i<=largest;i++){
    if (authorCount[i]>largestAuth) {
    largestAuth=authorCount[i];
    }
}
console.log(largestAuth)
console.log(author[authorCount.findIndex(ele => ele == largestAuth)])
var read = 0;
var noRead = 0;
for (let i=0; i<data.length;i++){
    // console.log(data[i]['read?'] )
    if("Yes" === data[i]["read?"]){
        read++;
    }
    else if(data[i]['read?'] === "No"){
        noRead++;
    }
}
console.log(read/(read+noRead)*100)

console.log(genre)

for (let i=0; i<data.length;i++){
    // console.log(data[i]['read?'])
    if("Yes" === data[i]["read?"]){
        read++;
    }
    else if(data[i]['read?'] === "No"){
        noRead++;
    }
}
