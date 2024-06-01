"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Series = void 0;
const typeorm_1 = require("typeorm");
let Series = class Series {
};
exports.Series = Series;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], Series.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 250 }),
    __metadata("design:type", String)
], Series.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 5000 }),
    __metadata("design:type", String)
], Series.prototype, "sipnosis", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    __metadata("design:type", String)
], Series.prototype, "director", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", Number)
], Series.prototype, "temporadas", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Series.prototype, "fecha_estreno", void 0);
exports.Series = Series = __decorate([
    (0, typeorm_1.Entity)()
], Series);
//# sourceMappingURL=series.entity.js.map