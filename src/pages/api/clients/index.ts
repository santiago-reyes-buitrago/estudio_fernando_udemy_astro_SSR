import type {APIRoute} from "astro";
import {clientRepository} from "../../../repositories/client.repository.ts";

export const prerender = false;

export const GET: APIRoute = async ({params,request}) => {
    const clients = await clientRepository.findAllClient();
    return new Response(JSON.stringify(clients),
        {
            status: 200,
            headers: {'Content-Type': 'application/json'}
        }
    )
}

export const POST: APIRoute = async ({params,request}) => {
    const form = await request.json();
    const client =  await clientRepository.createClient(form);
    return new Response(JSON.stringify(client),
        {
            status: 200,
            headers: {'Content-Type': 'application/json'}
        }
    )
}