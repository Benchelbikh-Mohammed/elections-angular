import { Roles, User } from "./user.model";

export default class Admin implements User {
    roles: Roles;
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
}