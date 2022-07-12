import "reflect-metadata";
import { PlantGarden } from "./Plants.js";
import { dataSource } from "./Connection.js";

export const PlantRepository = dataSource.getRepository(PlantGarden).extend({
    async findByName(name: string) {
        return this.createQueryBuilder("Plant")
            .where("Plant.name = :name", { name })
            .getOne();
    }
});


export const PlantRepositorySave = dataSource.getRepository(PlantGarden).extend({
    async savetoDb(name: String, category: number, status: String) {
        return this.createQueryBuilder("Plant")
            .insert().into("Plant")
            .values([{ name: name, category: category, status: status }]).execute();
    }
})

// @EntityRepository(PlantGarden)
// export class PlantRepository extends Repository<PlantGarden> {
//     findByName(name: string) {
//         return this.createQueryBuilder("Plant")
//             .where("Plant.name = :name", { name })
//             .getOne();
//     }

//     // updateName(id: number, name: string) {
//     //     return this.createQueryBuilder("Pet")
//     //         .update()
//     //         .set({ name: name })
//     //         .where("Pet.id = :id", { id })
//     //         .execute();
//     // }
// }