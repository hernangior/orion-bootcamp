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
function getCommitHistory(owner, repo) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`https://api.github.com/repos/${owner}/${repo}/commits`);
            //console.log(response);
            if (response.status === 200) {
                return response.data.map((commit) => ({
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
let list = getCommitHistory('joaomarcus13', 'curso-angular');
/*
list.then(data => {
  console.log(data);
}).catch(error => {
  console.error(error);
});
*/
function printAttributes() {
    return __awaiter(this, void 0, void 0, function* () {
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
printAttributes();
