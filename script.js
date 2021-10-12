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
            let a = $('<a target="_blank">');
            a.attr("href",`https://andresliu22.github.io/${repos[i].name}`);
            
            let projectDiv = $('<div class="project">');
            let header = $('<header>');
            let repoName = repos[i].name.replaceAll("-", " ");
            header.text(repoName[0].toUpperCase() + repoName.slice(1));
            
            let imageDiv = $('<div class="image-div">');
            let img = $('<img>');
            img.attr("src", `./assets/images/${repos[i].name}-img.png`);
            img.attr("alt", `${repos[i].name}`);

            a.append(projectDiv);
            projectDiv.append(header);
            projectDiv.append(imageDiv);
            imageDiv.append(img);

            workRepos.append(a);
        }
    }
}

