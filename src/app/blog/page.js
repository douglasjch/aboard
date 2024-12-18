import getDomain from "@/app/lib/getDomain"
import BlogCard from './card'
import { helloWorld } from "@/app/lib/db"


async function getData() {
            // 1 endpoint - API?
    const domain = getDomain()
    const endpoint = `${domain}/api/posts` // -> third party api request??
            // const res = await fetch(endpoint, {next: {revalidate: 10 }}) // HTTP GET     
            //    const res = await fetch(endpoint, {method: 'GET'}) // HTTP GET
            //    const res = await fetch(endpoint, {cache: 'force-cache' }) // HTTP GET
    const res = await fetch(endpoint, {cache: 'no-store' }) // HTTP GET

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    if (res.headers.get("content-type") !== "application/json") {
        return {items: []}
    }
    return res.json()
}


export default async function BlogPage() {
    const data = await getData()
    const dbHello = await helloWorld()
    console.log('dbHello', dbHello)
 
 //   const [dbResponse] = dbResponse && dbResponse.now ? dbResponse.now : ""
 //   return dbNow
     
   const items = data && data.items ? [...data.items] : []
   
    return <main>

        <h1>Hello Worldly</h1>
            <p>DB Response: {JSON.stringify(dbHello)}</p>
        <p>Posts:</p>
        {items && items.map((item, idx)=>{
            return <BlogCard title={item.title} key={`post-${idx}`} />
        })}
    </main>
}

// export const runtime = 'edge' // disable to use nodejs - edge could be faster -- this faults on vercel
// export const preferredRegion = "pdx1"  HAD THIS REMOVED DUe TO A "COULD NOT REDUCE ERROR"