"use strict";
// import axios, { AxiosResponse } from 'axios';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadCommits(branch) {
    return __awaiter(this, void 0, void 0, function* () {
        const owner = 'hernangior';
        const repo = 'orion-bootcamp';
        const perPage = 100;
        try {
            const response = yield fetch(`https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&per_page=${perPage}&page=${1}`);
            let commits = yield response.json();
            //if (commits.length <= 100){
            commits = commits.reverse();
            //}
            //
            let commitInfo = '';
            let order = 1;
            if (commits.length == 100) {
                console.log("commits 1 == 100");
                const responseTemp = yield fetch(`https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&per_page=${perPage}&page=${2}`);
                let countCommitsTemp = (yield responseTemp.json()).length;
                order = countCommitsTemp + 1;
            }
            commits.forEach((commit) => {
                const { sha, commit: { message, author: { name, email, date } }, } = commit;
                commitInfo += `
          <tr>
          <td>${order}</td>
          <td>${date}</td>
          <td>${name}</td>
          <td>${message}</td>
          <td>${sha}</td>
          <tr>
        `;
                order++;
            });
            console.log("# valor do commits: ");
            console.log(commitInfo);
            const divElement = document.getElementById('table-body-task-01');
            const divBranchName = document.getElementById('div-banch-name');
            const divBranchCount = document.getElementById('div-banch-count');
            if (commits.length < 100) {
                console.log("commits < 100");
                if (divElement && divBranchName && divBranchCount) {
                    divElement.innerHTML = commitInfo;
                    divBranchName.innerHTML = `
        <i class="fas fa-code-branch fa-lg"></i>&nbsp&nbspHistórico de commits - <b>branch [${branch}]</b>
        `;
                    divBranchCount.innerHTML = `
        <i class="fas fa-list-ol fa-lg"></i>&nbsp&nbspQuantidade de commits realizados - <b>[${commits.length}]</b>
        `;
                }
            }
            else {
                const response2 = yield fetch(`https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&per_page=${perPage}&page=${2}`);
                let commits2 = (yield response2.json()).reverse();
                let commitInfo2 = '';
                order = 1;
                //console.log(`A pagina 2 tem tamanho de [${commits2.length}] elementos`);
                commits2.forEach((commit) => {
                    const { sha, commit: { message, author: { name, email, date } }, } = commit;
                    commitInfo2 += `
            <tr>
            <td>${order}</td>
            <td>${date}</td>
            <td>${name}</td>
            <td>${message}</td>
            <td>${sha}</td>
            <tr>
          `;
                    order++;
                });
                console.log("# valor do commits 2: ");
                console.log(commitInfo2);
                commitInfo2 = commitInfo2 + commitInfo;
                console.log("# valor dda quantidade [commits]: ");
                console.log(commits.length);
                console.log("# valor dda quantidade [commits 2]: ");
                console.log(commits2.length);
                if (divElement && divBranchName && divBranchCount) {
                    divElement.innerHTML = commitInfo2;
                    divBranchName.innerHTML = `
        <i class="fas fa-code-branch fa-lg"></i>&nbsp&nbspHistórico de commits - <b>branch [${branch}]</b>
        `;
                    divBranchCount.innerHTML = `
        <i class="fas fa-list-ol fa-lg"></i>&nbsp&nbspQuantidade de commits realizados - <b>[${commits.length + commits2.length}]</b>
        `;
                }
            }
            $('#test').modal('show');
        }
        catch (error) {
            console.error('Erro ao carregar os commits:', error);
        }
    });
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
