import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Category } from "./Category.js";

export enum PlantStatus {
    Available = "available",
    Pending = "pending",
    Sold = "sold"
}

@Entity()
export class Plant {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('text')
    name!: string;

    @Column('int2')
    @ManyToOne(() => Category, (category) => category.plant)
    category!: Category;

    @Column({
        type: "enum",
        enum: PlantStatus,
        default: PlantStatus.Available,
    })
    status!: PlantStatus;

    @Column({
        type: "text",
        default: "/images/PlantImage.jpeg"
    })
    image_url!: string;

}