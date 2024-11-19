
async function getData() {
    // 1 endpoint - API?
   // const domain = getDomain()
   const endpoint = "http://localhost:3000/api/posts"
   // const endpoint = `${domain}/api/posts` // -> third party api request??
    // const res = await fetch(endpoint, {next: {revalidate: 10 }}) // HTTP GET
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
    const items = data && data.items ? [...data.items] : []

    return <main>
        <h1>Posts:</h1>
    {items && items.map((item, idx) => {
        return <li key={`post-${idx}`}>{item.title}</li>
    }) }
    </main>
}