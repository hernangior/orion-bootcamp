// import axios, { AxiosResponse } from 'axios';

declare var $: any;

async function loadCommits() {
  
  const owner = 'hernangior';
  const repo = 'orion-bootcamp';
  const branch = 'develop';

  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}`
    );
    const commits = await response.json();

    commits.forEach((commit: any) => {
      const {
        sha,
        commit: {
          message,
          author: { name, email },
        },
      } = commit;
      const commitInfo = `
          <p><strong>SHA:</strong> ${sha}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Author:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr>
        `;

      console.log(commitInfo);
    });
  } catch (error) {
    console.error('Erro ao carregar os commits:', error);
  }
}

// loadCommits();