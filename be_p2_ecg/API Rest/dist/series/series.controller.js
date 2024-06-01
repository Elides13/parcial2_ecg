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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeriesController = void 0;
const common_1 = require("@nestjs/common");
const series_service_1 = require("./series.service");
const create_series_dto_1 = require("./dto/create-series.dto");
const update_series_dto_1 = require("./dto/update-series.dto");
const swagger_1 = require("@nestjs/swagger");
let SeriesController = class SeriesController {
    constructor(seriesService) {
        this.seriesService = seriesService;
    }
    async create(createSeriesDto) {
        return await this.seriesService.create(createSeriesDto);
    }
    async findAll() {
        return await this.seriesService.findAll();
    }
    async findOne(id) {
        return await this.seriesService.findOne(+id);
    }
    async update(id, updateSeriesDto) {
        return await this.seriesService.update(+id, updateSeriesDto);
    }
    async remove(id) {
        return await this.seriesService.remove(+id);
    }
};
exports.SeriesController = SeriesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva serie' }),
    (0, swagger_1.ApiBody)({ type: create_series_dto_1.CreateSeriesDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_series_dto_1.CreateSeriesDto]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las series' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una serie por su ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la serie' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una serie por su ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la serie' }),
    (0, swagger_1.ApiBody)({ type: update_series_dto_1.UpdateSeriesDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_series_dto_1.UpdateSeriesDto]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una serie por su ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la serie' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "remove", null);
exports.SeriesController = SeriesController = __decorate([
    (0, common_1.Controller)('/api/series'),
    (0, swagger_1.ApiTags)('series'),
    __metadata("design:paramtypes", [series_service_1.SeriesService])
], SeriesController);
//# sourceMappingURL=series.controller.js.map