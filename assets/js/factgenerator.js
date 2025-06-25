const key = "GvkRAWk3ukd0SMciXmXxQA==baocEbGiZyv3JO9F";

const button = document.getElementById("fact-button");

button.addEventListener("click", factsAPI);

function factsAPI() {
    document.getElementById("fact-display").innerHTML = "loading...";
    fetch("https://api.api-ninjas.com/v1/facts", {
        headers: {
            'X-Api-Key': key
        }
    })
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Response was not ok, Error Code: " + response.status);
    })
    .then(function (data) {
        const fact = data[0].fact;
        document.getElementById("fact-display").innerHTML = fact;
    })
    .catch(function (error) {
        document.getElementById("fact-display").innerHTML = error;
    });
}