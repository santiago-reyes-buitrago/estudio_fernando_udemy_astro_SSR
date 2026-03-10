import { db, Clients } from 'astro:db';
import {eq} from "drizzle-orm";
import {createInsertSchema, createUpdateSchema} from 'drizzle-zod';

interface Client {
    id: number,
    name: string,
    isActive?: boolean,
}

class ClientRepository {
    findAllClient = async () => {
        return db.select().from(Clients);
    }

    findOneClient = async (id:number) => {
        return db.select().from(Clients).where(eq(Clients.id, id));
    }

    createClient = async (newClient: Client) => {
        const schema = createInsertSchema(Clients);
        return db.insert(Clients).values(schema.parse(newClient));
    }

    updateClient = async (newClient: Client,id:number) => {
        const schema = createUpdateSchema(Clients);
        return db.update(Clients).set(schema.parse(newClient)).where(eq(Clients.id, id));
    }

    deleteClient = async (id:number) => {
        const client = await db.delete(Clients).where(eq(Clients.id, id)).returning();
        return client.length > 0;
    }
}


export const clientRepository = new ClientRepository();