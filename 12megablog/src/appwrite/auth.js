import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class Authservice {
    client = new Client()
    account;

    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)

    }

    async createAccount({ email, password, name }) {
        try {

            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if (userAccount) {
                //call another method
                return this.login({ email, password })
            }
            else {
                return userAccount
            }


        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        try {

            return await this.account.createEmailPasswordSession(email, password);



        } catch (error) {
            throw error

        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            // Logged in
        } catch (error) {
            // Not logged in
            console.log("Appwrite serive :: getCurrentUser :: error", error)
        }

        return null

    }

    async logout(){
        try {
            await this.account.deleteSession()
            
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error)
        }
    }
}

const authservice = new Authservice()

export default authservice



