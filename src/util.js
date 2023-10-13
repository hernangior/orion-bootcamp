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
        try {
            const response = yield fetch(`https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}`);
            let commits = yield response.json();
            commits = commits.reverse();
            let commitInfo = '';
            let order = 1;
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
            console.log(commitInfo);
            const divElement = document.getElementById('table-body-task-01');
            const divBranchName = document.getElementById('div-banch-name');
            const divBranchCount = document.getElementById('div-banch-count');
            if (divElement && divBranchName && divBranchCount) {
                divElement.innerHTML = commitInfo;
                divBranchName.innerHTML = `
        <i class="fas fa-code-branch fa-lg"></i>&nbsp&nbspHistórico de commits - <b>branch [${branch}]</b>
        `;
                divBranchCount.innerHTML = `
        <i class="fas fa-list-ol fa-lg"></i>&nbsp&nbspQuantidade de commits realizados - <b>[${commits.length}]</b>
        `;
                $('#test').modal('show');
            }
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
