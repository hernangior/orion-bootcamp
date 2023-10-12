import axios, { AxiosResponse } from 'axios';

declare var $: any;

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

  async function printAttributes() {
    let list = getCommitHistory('joaomarcus13', 'curso-angular');
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

  //printAttributes();

  async function test(){

    let list = getCommitHistory('joaomarcus13', 'curso-angular');

    let table = '';
    let linha = '';
    try {
      const items = await list;
      for (const item of items) {
        linha = linha + '<tr>';
        const { sha, message, author, date } = item;
        console.log('SHA:'    , sha     ); linha = '<td>'+sha    +'</td>';
        console.log('Message:', message ); linha = '<td>'+message+'</td>';
        console.log('Author:' , author  ); linha = '<td>'+author +'</td>';
        console.log('Date:'   , date    ); linha = '<td>'+date   +'</td>';
        console.log('---'               );
        linha = linha + '</tr>';
        table = table + linha;
        linha = '';
      }
    } catch (error) {
      console.error(error);
    }

    console.log('# ROTINA DE TESTE EXECUTANDO 18:50');
    const divElement = document.getElementById('div-commits');
    if (divElement) {
      divElement.innerHTML = table;
    }
    
    $('#test').modal('show');

  }
  

