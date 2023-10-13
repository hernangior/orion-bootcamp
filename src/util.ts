// import axios, { AxiosResponse } from 'axios';

declare var $: any;

// import axios, { AxiosResponse } from 'axios';

declare var $: any;

async function loadCommits(branch: string) {

  const owner   = 'hernangior';
  const repo    = 'orion-bootcamp';
  const perPage = 1000;

  try {

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&per_page=${perPage}`);

    let commits = await response.json();
    commits = commits.reverse();

    let commitInfo = '';
    let order = 1;

    commits.forEach((commit: any) => {
      const {
        sha,
        commit: {
          message,
          author: { name, email,date }
        },
      } = commit;
        commitInfo += `
          <tr>
          <td>${order}</td>
          <td>${date}</td>
          <td>${name}</td>
          <td>${message}</td>
          <td>${sha}</td>
          <tr>
        `;
        order ++;
    });

    console.log(commitInfo);
    const divElement    = document.getElementById('table-body-task-01');
    const divBranchName = document.getElementById('div-banch-name');
    const divBranchCount = document.getElementById('div-banch-count');
    if (divElement && divBranchName && divBranchCount) {
        divElement.innerHTML    = commitInfo;
        divBranchName.innerHTML = `
        <i class="fas fa-code-branch fa-lg"></i>&nbsp&nbspHistórico de commits - <b>branch [${branch}]</b>
        `;
        divBranchCount.innerHTML = `
        <i class="fas fa-list-ol fa-lg"></i>&nbsp&nbspQuantidade de commits realizados - <b>[${commits.length}]</b>
        `;
         $('#test').modal('show');
    }

  } catch (error) {
    console.error('Erro ao carregar os commits:', error);
  }
  
}

function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}