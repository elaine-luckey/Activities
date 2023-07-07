var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (var i = 0; i < data.length; i++){
        const user = users[i];
        const userDIv = document.createElement('div');
        const loginLink = document.createElement('a');
        loginLink.href = user.html_url;
        loginLink.textContent = user.login;

        userDiv.appendChild(loginLink);
        container.appendChild(userDiv);
      }
    });
}
fetchButton.addEventListener('click', getApi);
