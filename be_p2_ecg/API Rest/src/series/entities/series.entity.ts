import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Series {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column('varchar',{ length: 250 })
    titulo: string;

    @Column('varchar',{ length: 5000 })
    sipnosis: string;

    @Column('varchar',{ length: 100 })
    director: string;
    
    @Column('varchar')
    temporadas: number;

    @Column('date',)
    fecha_estreno: Date;
}
