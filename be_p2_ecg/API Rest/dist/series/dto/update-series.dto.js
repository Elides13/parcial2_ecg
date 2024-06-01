"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSeriesDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_series_dto_1 = require("./create-series.dto");
class UpdateSeriesDto extends (0, mapped_types_1.PartialType)(create_series_dto_1.CreateSeriesDto) {
}
exports.UpdateSeriesDto = UpdateSeriesDto;
//# sourceMappingURL=update-series.dto.js.map