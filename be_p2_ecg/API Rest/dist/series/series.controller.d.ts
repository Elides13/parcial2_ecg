import { SeriesService } from './series.service';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
export declare class SeriesController {
    private readonly seriesService;
    constructor(seriesService: SeriesService);
    create(createSeriesDto: CreateSeriesDto): Promise<CreateSeriesDto & import("./entities/series.entity").Series>;
    findAll(): Promise<import("./entities/series.entity").Series[]>;
    findOne(id: string): Promise<import("./entities/series.entity").Series>;
    update(id: string, updateSeriesDto: UpdateSeriesDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
