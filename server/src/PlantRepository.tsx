import "reflect-metadata";
import { Plant } from "./Plant.js";
import { dataSource } from "./Connection.js";

export const PlantRepository = dataSource.getRepository(Plant).extend({
    async findByName(name: string) {
        return this.createQueryBuilder("Plant")
            .where("Plant.name = :name", { name })
            .getOne();
    }
});


export const PlantRepositorySave = dataSource.getRepository(Plant).extend({
    async savetoDb(name: String, category: number, status: String, image_url: string) {
        return this.createQueryBuilder("Plant")
            .insert().into("Plant")
            .values([{ name: name, category: category, status: status, image_url: image_url }]).execute();
    }
})

export const PlantrepositoryGetAll = dataSource.getRepository(Plant).extend({
    async getFromDB(name: String, category: number, status: String) {
        return this.createQueryBuilder("Plant")
            .leftJoinAndSelect("Plant.category", "category")
            .getMany();
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