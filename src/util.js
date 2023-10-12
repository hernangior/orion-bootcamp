"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Função para carregar commits e exibir na div HTML
function loadCommits() {
    return __awaiter(this, void 0, void 0, function* () {
        const owner = 'joaomarcus13';
        const repo = 'curso-angular';
        const branch = 'main';
        try {
            const response = yield axios_1.default.get(`https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}`);
            const commits = response.data;
            const commitsDiv = document.getElementById('commitsDiv');
            if (commitsDiv) {
                commitsDiv.innerHTML = ''; // Limpa o conteúdo atual da div
                commits.forEach((commit) => {
                    const { sha, commit: { message, author: { name, email } } } = commit;
                    const commitInfo = `
          <p><strong>SHA:</strong> ${sha}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Author:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr>
        `;
                    commitsDiv.innerHTML += commitInfo; // Adiciona as informações do commit à div
                });
            }
        }
        catch (error) {
            console.error('Erro ao carregar os commits:', error);
        }
    });
}
