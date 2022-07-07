import "reflect-metadata";
import { EntityRepository, Repository } from "typeorm";
import { PlantGarden } from "./Plants.js";

@EntityRepository(PlantGarden)
export class PlantRepository extends Repository<PlantGarden> {
    findByName(name: string) {
        return this.createQueryBuilder("Plant")
            .where("Plant.name = :name", { name })
            .getOne();
    }

    // updateName(id: number, name: string) {
    //     return this.createQueryBuilder("Pet")
    //         .update()
    //         .set({ name: name })
    //         .where("Pet.id = :id", { id })
    //         .execute();
    // }
}