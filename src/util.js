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
function getCommitHistory(owner, repo) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://api.github.com/repos/${owner}/${repo}/commits`);
            const data = yield response.json();
            if (response.status === 200) {
                return data.map((commit) => ({
                    sha: commit.sha,
                    message: commit.commit.message,
                    author: commit.commit.author.name,
                    date: commit.commit.author.date,
                }));
            }
            else {
                throw new Error(`Failed to fetch commit history. Status code: ${response.status}`);
            }
        }
        catch (error) {
            throw new Error(`Error fetching commit history: ${error.message}`);
        }
    });
}
function printAttributes() {
    return __awaiter(this, void 0, void 0, function* () {
        let list = getCommitHistory('joaomarcus13', 'curso-angular');
        try {
            const items = yield list;
            for (const item of items) {
                const { sha, message, author, date } = item;
                console.log('SHA:', sha);
                console.log('Message:', message);
                console.log('Author:', author);
                console.log('Date:', date);
                console.log('---');
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
//printAttributes();
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        let list = getCommitHistory('joaomarcus13', 'curso-angular');
        let table = '';
        let linha = '';
        try {
            const items = yield list;
            for (const item of items) {
                linha = linha + '<tr>';
                const { sha, message, author, date } = item;
                console.log('SHA:', sha);
                linha = '<td>' + sha + '</td>';
                console.log('Message:', message);
                linha = '<td>' + message + '</td>';
                console.log('Author:', author);
                linha = '<td>' + author + '</td>';
                console.log('Date:', date);
                linha = '<td>' + date + '</td>';
                console.log('---');
                linha = linha + '</tr>';
                table = table + linha;
                linha = '';
            }
        }
        catch (error) {
            console.error(error);
        }
        console.log('# ROTINA DE TESTE EXECUTANDO 18:50');
        const divElement = document.getElementById('div-commits');
        if (divElement) {
            divElement.innerHTML = table;
        }
        $('#test').modal('show');
    });
}
function loadCommitsFromBranch(owner, repo, branch) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}`);
            const data = yield response.json();
            const commits = data;
            // Mostra os commits no console
            commits.forEach((commit) => {
                const { sha, commit: { message, author: { name, email }, }, } = commit;
                console.log('SHA:', sha);
                console.log('Message:', message);
                console.log('Author:', name);
                console.log('Email:', email);
                console.log('---');
            });
        }
        catch (error) {
            console.error('Error loading commits:', error);
        }
    });
}
//loadCommitsFromBranch('joaomarcus13', 'curso-angular','main');
// Função para carregar commits e exibir na div HTML
// Função para carregar commits e exibir na div HTML
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
