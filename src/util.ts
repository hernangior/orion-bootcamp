import axios, { AxiosResponse } from 'axios';

async function getCommitHistory(owner: string, repo: string): Promise<any[]> {
    try {
      const response: AxiosResponse = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/commits`
      );
      //console.log(response);
      if (response.status === 200) {
        return response.data.map((commit: any) => ({
          sha    : commit.sha,
          message: commit.commit.message,
          author : commit.commit.author.name,
          date   : commit.commit.author.date,
        }));
      } else {
        throw new Error(
          `Failed to fetch commit history. Status code: ${response.status}`
        );
      }
    } catch (error) {
      throw new Error(`Error fetching commit history: ${(error as any).message}`);
    }
  }

  let list = getCommitHistory('joaomarcus13', 'curso-angular');
  /*
  list.then(data => {
    console.log(data);
  }).catch(error => {
    console.error(error);
  });
  */


  async function printAttributes() {
    try {
      const items = await list;
      for (const item of items) {
        const { sha, message, author, date } = item;
        console.log('SHA:', sha);
        console.log('Message:', message);
        console.log('Author:', author);
        console.log('Date:', date);
        console.log('---');
      }
    } catch (error) {
      console.error(error);
    }
  }

  printAttributes();
  

