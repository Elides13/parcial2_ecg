import { CreateSeriesDto } from './create-series.dto';
declare const UpdateSeriesDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSeriesDto>>;
export declare class UpdateSeriesDto extends UpdateSeriesDto_base {
    titulo: string;
    sipnosis: string;
    director: string;
    temporadas: number;
    fecha_estreno: Date;
}
export {};
