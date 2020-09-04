// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    response.json().then(function(json) {
        json.sort((a,b) => (a.hoursInSpace < b.hoursInSpace) ? 1 : -1)

        let astronaut = document.getElementById("container");
        for (person in json) {
        console.log(json[person])
        astronaut.innerHTML += `
        <div class="astronaut">
            <div class="bio">
                <h3>${json[person].firstName} ${json[person].lastName}</h3>
                <ul>
                    <li>Hours in space: ${json[person].hoursInSpace}</li>
                    <li>Active: ${json[person].active}</li>
                    <li>Skills: ${json[person].skills}</li>
                </ul>
            </div>
            <img class="avatar" src=${json[person].picture}>
        </div>
        `;
        }

        });
    });
    });
