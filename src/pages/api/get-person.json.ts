import type {APIRoute} from "astro";


export const GET: APIRoute = async ({params,request}) => {
    const person = {
        name: 'Santiago Reyes',
        age: 24
    }

    return new Response(JSON.stringify(person),
        {status: 200,
            headers: {
            'content-type': 'application/json'
            }
        })
}