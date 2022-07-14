var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Plant } from "./Plant.js";
export var CategoryNames;
(function (CategoryNames) {
    CategoryNames["Herbs"] = "herbs";
    CategoryNames["Shrubs"] = "shrubs";
    CategoryNames["Trees"] = "trees";
    CategoryNames["Climbers"] = "climbers";
    CategoryNames["Creepers"] = "creepers";
})(CategoryNames || (CategoryNames = {}));
let Category = class Category {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    Column({
        type: "enum",
        enum: CategoryNames,
        default: CategoryNames.Trees,
    }),
    OneToMany(() => Plant, (plant) => plant.category),
    __metadata("design:type", Array)
], Category.prototype, "plant", void 0);
Category = __decorate([
    Entity()
], Category);
export { Category };
