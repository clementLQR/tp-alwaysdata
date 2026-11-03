// Jeu : devine le nombre entre 1 et 100
// Lancer avec : node devine.js
const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const secret = Math.floor(Math.random() * 100) + 1;
let essais = 0;

console.log("🎯 Devine le nombre entre 1 et 100 !");

function demander() {
  rl.question("> Ton essai : ", (rep) => {
    const n = parseInt(rep, 10);
    if (isNaN(n)) {
      console.log("Entre un nombre valide.");
      return demander();
    }
    essais++;
    if (n < secret) console.log("📈 Plus grand");
    else if (n > secret) console.log("📉 Plus petit");
    else {
      console.log(`🎉 Gagné en ${essais} essai${essais > 1 ? "s" : ""} !`);
      return rl.close();
    }
    demander();
  });
}

demander();