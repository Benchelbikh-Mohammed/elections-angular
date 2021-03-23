import Citoyen from "./citoyen.model";

export default class PartiePol {
    private _nom: string;
    private _description: string;
    private _date_creation: number;
    private _citoyens: Array<Citoyen>;



    public get nom(): string {
        return this._nom;
    }


    public set nom(v: string) {
        this._nom = v;
    }


    public get description(): string {
        return this._description;
    }


    public set description(v: string) {
        this._description = v;
    }


    public get date_creation(): number {
        return this._date_creation
    }


    public set date_creation(v: number) {
        this._date_creation = v;
    }


    public get citoyens(): Array<Citoyen> {
        return this._citoyens;
    }


    public set citoyens(v: Array<Citoyen>) {
        this._citoyens = v;
    }


    constructor(nom = "", description = "") {
        this.nom = nom;
        this.description = description;
        this.date_creation = Date.now();
    }
}