import { PartialType } from '@nestjs/mapped-types';
import { CreateSeriesDto } from './create-series.dto';

export class UpdateSeriesDto extends PartialType(CreateSeriesDto) {
    titulo: string;
    sipnosis: string;
    director: string;
    temporadas: number;
    fecha_estreno: Date;
}
