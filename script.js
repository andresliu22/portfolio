let workRepos = $('#work-repos');
let workSkills = $('#work-skills');


$(document).ready(function (){
    getRepos();
    displaySkills();
});

function getRepos() {
    var apiUrl = 'https://api.github.com/users/andresliu22/repos?type=public&sort=created';
  
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
              console.log(data);
            displayFeaturedRepos(data);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to GitHub');
      });
  };

 
function displayFeaturedRepos(repos) {
    for (let i = 0 ; i < repos.length ; i++) {
        if (repos[i].stargazers_count > 0) {
            let projectDiv = $('<div class="project">');
            let header = $('<header>');
            let repoName = repos[i].name.replaceAll("-", " ");

            let aRepo = $('<a target="_blank">');
            aRepo.attr("href", repos[i].html_url);
            aRepo.text(repoName[0].toUpperCase() + repoName.slice(1));
            
            let aLive = $('<a target="_blank">');
            aLive.attr("href",`https://andresliu22.github.io/${repos[i].name}`);

            let imageDiv = $('<div class="image-div">');
            let img = $('<img>');
            img.attr("src", `./assets/images/${repos[i].name}-img.PNG`);
            img.attr("alt", `${repos[i].name}`);

            projectDiv.append(header);
            header.append(aRepo);
            projectDiv.append(aLive);
            aLive.append(imageDiv);
            imageDiv.append(img);

            workRepos.append(projectDiv);
        }
    }
}

function displaySkills() {
    let skills = ["html", "css", "javascript", "angular", "react", "xcode", "swift", "sql"];

    skills.forEach(skill => {
        let skillDiv = $('<div class="skill">');
        let img = $('<img>');
        img.attr("src", `./assets/images/${skill}-logo.png`);
        img.attr("alt", `${skill}-logo`);

        workSkills.append(skillDiv);
        skillDiv.append(img);
    });
}