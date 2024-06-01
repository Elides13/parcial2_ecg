import { Injectable } from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Series } from './entities/series.entity';

@Injectable()
export class SeriesService {
  constructor(@InjectRepository(Series) private seriesRepository: Repository<Series>) {}

  async create(createSeriesDto: CreateSeriesDto) {
    return await this.seriesRepository.save(createSeriesDto);
  }

  async findAll() {
    return await this.seriesRepository.find();
  }

  async findOne(id: number) {
    return await this.seriesRepository.findOne({ where: { id } });
  }

  async update(id: number, updateSeriesDto: UpdateSeriesDto) {
    return await this.seriesRepository.update(id, updateSeriesDto);
  }

  async remove(id: number) {
    return await this.seriesRepository.delete(id);
  }
}
