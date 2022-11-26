var request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data)
    for(var obj of result){
        console.log(`countriesname : ${obj.name.common},region : ${obj.region},subregion : ${obj.subregion},population : ${obj.population}`)
    }
    
}