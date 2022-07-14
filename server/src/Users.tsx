import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity()
@Unique(["name", "password"])
export class Users {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'text',
        nullable: false
    })
    name!: string;

    @Column({
        type: 'text',
        nullable: false
    })
    password!: string;
}