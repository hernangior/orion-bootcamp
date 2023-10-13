// import axios, { AxiosResponse } from 'axios';

declare var $: any;

// import axios, { AxiosResponse } from 'axios';

declare var $: any;

async function loadCommits(branch: string) {

  const owner = 'hernangior';
  const repo = 'orion-bootcamp';

  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}`
    );
    const commits = await response.json();

    let commitInfo = '';

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
          <td>${date}</td>
          <td>${name}</td>
          <td>${message}</td>
          <td>${sha}</td>
          <tr>
        `;

    });

    console.log(commitInfo);
    const divElement = document.getElementById('table-body-task-01');
    if (divElement) {
        divElement.innerHTML = commitInfo;
         $('#test').modal('show');
    }

  } catch (error) {
    console.error('Erro ao carregar os commits:', error);
  }
  
}

// loadCommits();