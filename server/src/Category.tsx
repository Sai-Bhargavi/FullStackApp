import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Plant } from "./Plant.js";

export enum CategoryNames {
    Herbs = "herbs",
    Shrubs = "shrubs",
    Trees = "trees",
    Climbers = "climbers",
    Creepers = "creepers"
}

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: "enum",
        enum: CategoryNames,
        default: CategoryNames.Trees,
    })
    @OneToMany(() => Plant, (plant) => plant.category)
    plant!: Plant[];

}