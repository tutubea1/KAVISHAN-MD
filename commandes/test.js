"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "repo", reaction: "⚔", nomFichier: __filename }, async (dest, zk, commandeOptions) => {


const githubRepo = 'https://github.com/Kavishan0/KAVISHAN-MD';
const img = 'https://telegra.ph/file/cf24b099f90b5e6ed146b.mp4';


    const response = await fetch(githubRepo); 
        const data = await response.json(); 

        if (data) {
            const repoInfo = {
                stars: data.stargazers_count,
                forks: data.forks_count,
                lastUpdate: data.updated_at,
                owner: data.owner.login
            };
const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
            const lastUpdateDate = new Date(repoInfo.lastUpdate).toLocaleDateString('en-GB');

const gitdata = `Hello 👋 
This is *KAVISHAN-MD.* The following is *KAVISHAN-MD's*
*REPOSITORY:* ${data.html_url}
✨ *STARS:* ${repoInfo.stars}
🧧 *FORKS:* ${repoInfo.forks}
📅 *RELEASED:* ${releaseDate}
🕐 *LAST UPDATED:* ${lastUpdateDate}
👨‍💻 *OWNER:* *KAVISHAN📌*`;


await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });

} else {
console.log("Could not fetch data")

}


});

   /* let z = 'Hello This is  *KAVISHAN-MD* \n\n ' + "The Following is *KAVISHAN-MD Repo.*";
    let d = ' https://github.com/Kavishan0/KAVISHAN-MD';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/cf24b099f90b5e6ed146b.mp4';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");*/
