import { db,Clients } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
    await db.insert(Clients).values([
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'Kasina'},
        {id: 3, name: 'Dolores'},
        {id: 4, name: 'Fajardo'},
    ])
    console.log('SEED EXECUTING...');
}
