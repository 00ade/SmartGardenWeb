const api_url = 
        "http://192.168.1.11:8080/api/inputData";
const api_url2 = "http://localhost:8080/api/garden";
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
    }
    if(url == api_url){
        show(data);
    } else {
        show2(data);
    }
}

// Calling that async function
getapi(api_url);
getapi(api_url2);
// Function to hide the loader

// Function to define innerHTML for HTML table
function show(data) {
    $(".temp").text(data[0]["temp"]);
    $(".lum").text(data[0]["lum"]);
}
function show2(data) {
    $(".lamp1").text(data["onOffValues"][0]["state"]);
    $(".lamp2").text(data["onOffValues"][1]["state"]);
    $(".lamp3").text(data["intensityValues"][0]["intensity"]);
    $(".lamp4").text(data["intensityValues"][1]["intensity"]);
    $(".motor").text(data["motor"]["intensity"]);
    $(".status").text(data["state"]);
}