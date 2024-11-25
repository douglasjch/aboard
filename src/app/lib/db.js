// "use server";
import { neon } from "@neondatabase/serverless";

const sql = neon('postgresql://neondb_owner:WStihon7k3MK@ep-black-bush-a66ies8e.us-west-2.aws.neon.tech/neondb?sslmode=require')
// const sql = neon(process.env.DATABASE_URL)
// const sql = neon(process.env.SECRET_KEY)
export async function helloWorld() {
    
    const start = new Date()
    const dbResponse = await sql`SELECT NOW();`
    const dbNow = dbResponse && dbResponse.now ? dbResponse.now : ""
    const end = new Date()
    return {dbNow: dbNow, latency: Math.abs(end-start)}
}