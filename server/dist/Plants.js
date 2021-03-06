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
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { CategoriesEntity } from "./Category.js";
export var PlantStatus;
(function (PlantStatus) {
    PlantStatus["Available"] = "available";
    PlantStatus["Pending"] = "pending";
    PlantStatus["Sold"] = "sold";
})(PlantStatus || (PlantStatus = {}));
let PlantGarden = class PlantGarden {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PlantGarden.prototype, "id", void 0);
__decorate([
    Column('text'),
    __metadata("design:type", String)
], PlantGarden.prototype, "name", void 0);
__decorate([
    Column('int2'),
    ManyToOne(() => CategoriesEntity, (Category) => Category.types),
    __metadata("design:type", CategoriesEntity)
], PlantGarden.prototype, "category", void 0);
__decorate([
    Column({
        type: "enum",
        enum: PlantStatus,
        default: PlantStatus.Available,
    }),
    __metadata("design:type", String)
], PlantGarden.prototype, "status", void 0);
__decorate([
    Column({
        type: "text",
        default: "/images/PlantImage.jpeg"
    }),
    __metadata("design:type", String)
], PlantGarden.prototype, "image_url", void 0);
PlantGarden = __decorate([
    Entity({ name: "Plant" })
], PlantGarden);
export { PlantGarden };
