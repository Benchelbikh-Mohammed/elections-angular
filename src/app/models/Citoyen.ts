

export default class Citoyen {
    private _cin: string;
    private _nom: string;
    private _prenom: string;

    public get cin(): string {
        return this._cin;
    }

    public set cin(v: string) {
        this._cin = v;
    }


    public get nom(): string {
        return this._nom;
    }


    public set nom(v: string) {
        this._nom = v;
    }


    public get prenom(): string {
        return this._prenom;
    }


    public set prenom(v: string) {
        this._prenom = v;
    }



    constructor(cin = "", nom = "", prenom = "") {
        this.cin = cin;
        this.nom = nom;
        this.prenom = prenom;
    }

}