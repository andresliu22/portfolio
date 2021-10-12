$(document).ready(function (){
    getRepos();
});

function getRepos() {
    var apiUrl = 'https://api.github.com/users/andresliu22/repos?type=public&sort=created';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
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

 
