import conf from "../conf/conf";
import { Client, ID, Query, TablesDB } from "appwrite";


export class Service {
    client = new Client()
    tablesDB
    bucket

    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId);


        this.tablesDB = new TablesDB(this.client)
        this.bucket = new Storage(this.client)
    }

    async createpost({ title, slug, content, featuredimage, status, userid }) {
        try {
            return await this.tablesDB.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: {
                    "title": title,
                    "content": content,
                    "featuredimage": featuredimage,
                    "status": status,
                    "userid": userid
                },

            });


        } catch (error) {
            console.log("Appwrite serive :: createpost :: error", error)
        }

    }

    async updatepost(slug, { title, content, featuredimage, status }) {
        try {
            return await this.tablesDB.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,

                data: {
                    "title": title,
                    "content": content,
                    "featuredimage": featuredimage,
                    "status": status,

                },

            });


        } catch (error) {
            console.log("Appwrite serive :: updatepost :: error", error)

        }
    }

    async deletepost(slug) {
        try {
            await this.tablesDB.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,


            });
            return True

        } catch (error) {
            console.log("Appwrite serive :: deletepost :: error", error)
            return false

        }
    }

    async getpost(slug) {
        try {
            return await this.tablesDB.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug

            })
        } catch (error) {
            console.log("Appwrite serive :: getpost :: error", error)

        }
    }

    async getposts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.tablesDB.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                queries

            })

        } catch (error) {
            console.log("Appwrite serive :: getposts :: error", error)
        }
    }

    //file upload services

    async uploadfile(file) {
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file
            });


        } catch (error) {
            console.log("Appwrite serive :: uploadfile :: error", error)
            return false

        }
    }

    async deletefile(fileId) {
        try {
            await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId: fileId
            });

            return true


        } catch (error) {
            console.log("Appwrite serive :: deletefile :: error", error)
            return false
        }
    }

    getfilepreview(fileId){
    return this.bucketstorage.getFilePreview({
     bucketId: conf.appwriteBucketId,
    fileId: fileId
    })
  }

  

}




const service = new Service()

export default service