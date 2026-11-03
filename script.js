// Jeu : devine le nombre entre 1 et 100, joué dans la console
let secret = Math.floor(Math.random() * 100) + 1;
let essais = 0;

console.log("🎯 Devine le nombre entre 1 et 100");
console.log("Tape : jouer(50)   |   Recommencer : rejouer()");

function jouer(n) {
  essais++;
  if (n < secret) return "📈 Plus grand";
  if (n > secret) return "📉 Plus petit";
  return `🎉 Gagné en ${essais} essai${essais > 1 ? "s" : ""} ! Tape rejouer()`;
}

function rejouer() {
  secret = Math.floor(Math.random() * 100) + 1;
  essais = 0;
  return "🔄 Nouveau nombre choisi, à toi !";
}