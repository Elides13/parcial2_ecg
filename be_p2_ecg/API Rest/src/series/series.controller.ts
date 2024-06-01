import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeriesService } from './series.service';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger'; // Importa los decoradores de Swagger

@Controller('/api/series')
@ApiTags('series') // Agrega una etiqueta para organizar los endpoints relacionados con series
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva serie' }) // Documenta la operación del endpoint
  @ApiBody({ type: CreateSeriesDto }) // Documenta el cuerpo de la solicitud
  async create(@Body() createSeriesDto: CreateSeriesDto) {
    return await this.seriesService.create(createSeriesDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las series' }) // Documenta la operación del endpoint
  async findAll() {
    return await this.seriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una serie por su ID' }) // Documenta la operación del endpoint
  @ApiParam({ name: 'id', description: 'ID de la serie' }) // Documenta el parámetro de ruta
  async findOne(@Param('id') id: string) {
    return await this.seriesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una serie por su ID' }) // Documenta la operación del endpoint
  @ApiParam({ name: 'id', description: 'ID de la serie' }) // Documenta el parámetro de ruta
  @ApiBody({ type: UpdateSeriesDto }) // Documenta el cuerpo de la solicitud
  async update(@Param('id') id: string, @Body() updateSeriesDto: UpdateSeriesDto) {
    return await this.seriesService.update(+id, updateSeriesDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una serie por su ID' }) // Documenta la operación del endpoint
  @ApiParam({ name: 'id', description: 'ID de la serie' }) // Documenta el parámetro de ruta
  async remove(@Param('id') id: string) {
    return await this.seriesService.remove(+id);
  }
}
