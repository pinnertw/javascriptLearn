async function fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;

  while (url) {
    const response = await fetch(url, { // (1)
      headers: {'User-Agent': 'Our script'}, // github 需要任意的 user-agent header
    });

    const body = await response.json(); // (2) 响应的是 JSON（array of commits）

    for(let commit of body) { // (4) 一个接一个地 yield commit，直到最后一页
        console.log(commit);
      //yield commit;
    }
  }
}

(async() => {
    await fetchCommits("pinnertw/foundry-assembly");
})();
