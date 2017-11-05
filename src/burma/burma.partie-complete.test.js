import { burma } from "./burma";
import { inscrireJoueur, demarrerPartie, voleeChiffree } from "./burma.actions";

it("déroule une partie complète", () => {
  const burma1joueur = burma(undefined, inscrireJoueur("J1"));
  const burma2joueurs = burma(burma1joueur, inscrireJoueur("J2"));
  const burmaEnCours = burma(burma2joueurs, demarrerPartie());

  derouler(partie).depuis(burmaEnCours);
});

// TODO: gérer les doubles, triples et bull
const partie = [
  voleeChiffree("J1", 15, 0),
  voleeChiffree("J2", 15, 2),
  voleeChiffree("J1", 16, 1),
  voleeChiffree("J2", 16, 4)
];

const derouler = partie => ({
  depuis: etatInitial => {
    let etat = etatInitial;
    partie.forEach(volee => {
      etat = burma(etat, volee);
      expect(etat).toMatchSnapshot();
    });
  }
});