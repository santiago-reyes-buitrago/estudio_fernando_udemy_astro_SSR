import { defineDb,defineTable,column } from 'astro:db';

// https://astro.build/db/config
const Clients = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    name: column.text(),
    isActive: column.boolean({default: false}),
  }
})

export default defineDb({
  tables: {Clients}
});
