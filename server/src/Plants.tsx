import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum PlantStatus {
    Available = "available",
    Pending = "pending",
    Sold = "sold"
}

@Entity({ name: "Plant" })
export class PlantGarden {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('text')
    name!: string;

    @Column('int2')
    category!: number;

    @Column({
        type: "enum",
        enum: PlantStatus,
        default: PlantStatus.Available
    })
    status!: PlantStatus;

}