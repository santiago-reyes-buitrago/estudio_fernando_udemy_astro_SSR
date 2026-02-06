import type {APIRoute} from "astro";
import {getCollection} from "astro:content";

export const prerender = false;

export const GET: APIRoute = async ({params,request}) => {

    const posts = (await getCollection('blog'))
        .map(item => item)
        .find(item => item.id === params.id);
    if (!posts) {
        return new Response('Not Found',{
            status: 404,
            headers: {'Content-Type': 'application/json'}
        })
    }

    return new Response(JSON.stringify(posts),
        {
            status: 200,
            headers: {'Content-Type': 'application/json'}
        }
    )
}