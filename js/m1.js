fetch('https://api.github.com/users/pinnertw')
  .then(response => response.json())
  .then(githubUser => {
      console.log(githubUser);
      let img = document.createElement('img');
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.append(img);
      let name = document.createElement('h1');
      name.append(githubUser.login);
      document.body.append(name);
  });
