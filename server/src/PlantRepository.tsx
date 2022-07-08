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