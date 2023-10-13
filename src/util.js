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
            const commits = yield response.json();
            let commitInfo = '';
            commits.forEach((commit) => {
                const { sha, commit: { message, author: { name, email, date } }, } = commit;
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
        }
        catch (error) {
            console.error('Erro ao carregar os commits:', error);
        }
    });
}
// loadCommits();
