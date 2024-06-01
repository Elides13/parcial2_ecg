import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { Repository } from 'typeorm';
import { Series } from './entities/series.entity';
export declare class SeriesService {
    private seriesRepository;
    constructor(seriesRepository: Repository<Series>);
    create(createSeriesDto: CreateSeriesDto): Promise<CreateSeriesDto & Series>;
    findAll(): Promise<Series[]>;
    findOne(id: number): Promise<Series>;
    update(id: number, updateSeriesDto: UpdateSeriesDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
