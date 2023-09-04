import User from '@/app/models/User';
import connect from '@/utils/db'
import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcrypt"
import CredentialsProvider from 'next-auth/providers/credentials';

const handler =  NextAuth ({
    providers: [
        
        CredentialsProvider({
            id:"credentials",
            name:"credentials",
            async authorize(credentials){
                await connect();
                try {
                    const user = await User.findOne({ email: credentials.email})
                    if(user) {
                        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
                        if(isPasswordCorrect){
                            return user
                        }else{
                            throw new Error("Wrong credentials!")
                        }
                    } /* else {
                        throw new Error("User not found")
                    } */
                } catch (error) {
                    throw new Error(error)
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ]
})
export { handler as GET, handler as POST}