var a = {
    "name" : "Person 1",
    "age" : 5
};
var b = {
    "age" :5,
    "name" : "Person 1"
}
if(JSON.stringify(a) === JSON.stringify(b)){
    console.log("false");
}
else{
    console.log("true");
}

//output
//false