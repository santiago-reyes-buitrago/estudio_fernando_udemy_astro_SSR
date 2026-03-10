import type {APIRoute} from "astro";
import {clientRepository} from "../../../repositories/client.repository.ts";

export const prerender = false;

export const GET: APIRoute = async ({params, request}) => {
    if (!params.id) return new Response(JSON.stringify({message: "id not provided"}), {
        status: 400,
        headers: {'Content-Type': 'application/json'}
    })
    const client = await clientRepository.findOneClient(Number(params.id))
    if (!client) {
        return new Response(JSON.stringify({message: "'Not Found'"}), {
            status: 404,
            headers: {'Content-Type': 'application/json'}
        })
    }

    return new Response(JSON.stringify(client),
        {
            status: 200,
            headers: {'Content-Type': 'application/json'}
        }
    )
}

export const PATCH: APIRoute = async ({params, request}) => {
    if (!params.id) return new Response(JSON.stringify({message: "id not provided"}), {
        status: 400,
        headers: {'Content-Type': 'application/json'}
    })
    const form = await request.json();

    const client = await clientRepository.updateClient(form,Number(params.id))

    return new Response(JSON.stringify(client),
        {
            status: 200,
            headers: {'Content-Type': 'application/json'}
        }
    )
}

export const DELETE: APIRoute = async ({params}) => {

    const isClientDelete = await clientRepository.deleteClient(Number(params.id))
    if (!isClientDelete) return new Response(JSON.stringify({
        msg: "Client",

    }), { status: 400, headers: {'Content-Type': 'application/json'}});
    return new Response(null, { status: 204 });

}