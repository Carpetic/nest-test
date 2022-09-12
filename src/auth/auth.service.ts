import { Injectable } from "@nestjs/common";
import { User, Bookmark } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    login() {
        return {mesage: 'login'}
    }

    register() {
        return {mesage: 'register'}
    }
}
//     constructor(http) {
//         this.http = http;
//         this.baseUrl = 'http://localhost:8080/api/auth/';
//     }
//     login(credentials) {
//         return this.http.post(this.baseUrl + 'signin', {
//             username: credentials.username,
//             password: credentials.password
//         }, { observe: 'response' });
//     }
//     register(user) {
//         return this.http.post(this.baseUrl + 'signup', {
//             username: user.username,
//             email: user.email,
//             password: user.password
//         }, { observe: 'response' });
//     }
// }
