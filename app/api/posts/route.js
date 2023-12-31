import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/app/models/Post"

export const GET = async(request) => {
    try {
        await connect()
        const posts = await Post.find()
        return new NextResponse(JSON.stringify(posts), { status: 200})
    } catch (error) {
        return new NextResponse("database error", { status: 500})
    }
    
}