import knex from "knex";

const config = {
  client: "sqlite3",
  connection: {
    filename: "./rats.sqlite",
  },
};

const knexInstance = knex(config);

// Create a table in the database called "rats"
knexInstance.schema
  // Make sure no "rats" table exists
  // before trying to create new
  .hasTable("rats")
  .then((exists) => {
    if (!exists) {
      // use "id" as a primary identification
      // and increment "id" with every new record (book)
      return knexInstance.schema
        .createTable("rats", (table) => {
          table.increments("id").primary();
          table.string("picLink");
          table.string("user");
        })
        .then(() => {
          // Log success message
          console.log("Table 'Rats' created");
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
    }
  })
  .then(() => {
    // Log success message
    console.log("All done wit the schema shit");
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`);
  });

// Just for debugging purposes:
// Log all data in "rats" table
knexInstance
  .select("*")
  .from("rats")
  .then((data) => console.log("data:", data))
  .catch((err) => console.log(err));

// Export the database
export { knexInstance as knex };
