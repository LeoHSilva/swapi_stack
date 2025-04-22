import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from 'src/entities/log.entity';
import { StatisticsController } from './statistics.controller';
import { StatisticsService } from './statistics.service';
import { TopFiveView } from 'src/entities/topFiveView.entity';
import { AvgTimeView } from 'src/entities/avgTimeView.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Log, TopFiveView, AvgTimeView])],
  controllers: [StatisticsController],
  providers: [StatisticsService],
  exports: [StatisticsService],
})
export class StatisticsModule {}
