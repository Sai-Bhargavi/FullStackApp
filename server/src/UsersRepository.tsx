import "reflect-metadata";
import { Users } from "./Users.js";
import { dataSource } from "./Connection.js";

export const UsersRepository = dataSource.getRepository(Users).extend({
    async findByName(name: string, password: string) {
        return this.createQueryBuilder("Users")
            .where("Users.name = :name", { name })
            .andWhere("Users.password = :password", { password })
            .getOne();
    }
});
