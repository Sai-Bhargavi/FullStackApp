import { createConnection } from "typeorm";
import { PlantGarden } from "./Plants.js";
import { PlantRepository } from "./PlantRepository.js";
export const dbconn = (async () => {
    // Initialize a connection pool against the database.
    const connection = await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "amartyakummaragunta",
        password: "",
        database: "postgres",
        entities: [PlantGarden],
        synchronize: true,
    });
    const plantRepository = connection.getCustomRepository(PlantRepository);
    // const newPlant = new PlantGarden();
    // newPlant.name = "Mango";
    // newPlant.category = 2;
    // newPlant.status = PlantStatus.Sold;
    // await plantRepository.save(newPlant);
    console.log("Hi Babyyy...");
    // Find the person we just saved to the database using the custom query
    // method we wrote in the person repository.
    const existingPlant = await plantRepository.findByName("Mango");
    if (!existingPlant) {
        throw Error("Unable to find the plant.");
    }
    console.log(existingPlant);
    console.log("here is the data ....................");
    // // // Change the person's full name.
    // await petRepository.updateName(existingPet.id, "Jane Johnson");
    // // // Remove the person from the database.
    // await petRepository.remove(existingPet);
    // Clean up our connection pool so we can exit.
    //await connection.close();
    return connection;
})();
