import type {APIRoute} from "astro";
import {getCollection} from "astro:content";

export const prerender =  false;

export const GET: APIRoute = async ({params,request}) => {
    const posts = (await getCollection('blog')).map(item => item)

    const url = new URL(request.url);

    const searchParams = url.searchParams;

    console.log('ID:', searchParams.get('id'));

    return new Response(JSON.stringify(posts),
        {
            status: 200,
            headers: {'Content-Type': 'application/json'}
        }
    )
}