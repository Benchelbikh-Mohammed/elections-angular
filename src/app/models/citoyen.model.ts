import { Roles, User } from "./user.model";


export default class Citoyen implements User {
    roles: Roles;
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    cin?: string;

}