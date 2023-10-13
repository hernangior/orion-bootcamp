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
function loadCommits() {
    return __awaiter(this, void 0, void 0, function* () {
        const owner = 'hernangior';
        const repo = 'orion-bootcamp';
        const branch = 'develop';
        try {
            const response = yield fetch(`https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}`);
            const commits = yield response.json();
            commits.forEach((commit) => {
                const { sha, commit: { message, author: { name, email }, }, } = commit;
                const commitInfo = `
          <p><strong>SHA:</strong> ${sha}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Author:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr>
        `;
                console.log(commitInfo);
            });
        }
        catch (error) {
            console.error('Erro ao carregar os commits:', error);
        }
    });
}
// loadCommits();
