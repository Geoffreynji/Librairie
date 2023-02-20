// un livre
export default class Livre {
  constructor(id, titre, qtestock,prix) {
    this._titre = titre;
    this._qtestock = qtestock;
    this._prix = prix;
    this._id = id;
  }
  get titre() {
    return this._titre;
  }
  get id() {
    return this._id;
  }

  get fait() {
    return this._fait;
  }
  get qtestock() {
    return this._qtestock;
  }
  get prix() {
    return this._prix;
  }

  // modifier le titre
  set titre(titre) {
    this._titre = titre;
  }

  faire()
  {
    this._qtestock = _qtestock+1;
  }
  afficherTitre() {
    return `Titre: ${this._titre} |`;
  }

  afficherQtestock() {
    return `Quantité : ${this._qtestock} |`;
  }
  afficherPrix() {
    return ` Prix: ${this._prix} |`;
  }
}
