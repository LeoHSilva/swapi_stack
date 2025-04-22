import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AvgTimeView } from 'src/entities/avgTimeView.entity';
import { Log } from 'src/entities/log.entity';
import { TopFiveView } from 'src/entities/topFiveView.entity';
import { formatTimeInMilliseconds } from 'src/utils';
import { Repository } from 'typeorm';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectRepository(Log)
    private readonly logRepository: Repository<Log>,
    @InjectRepository(TopFiveView)
    private readonly topFiveRepository: Repository<TopFiveView>,
    @InjectRepository(AvgTimeView)
    private readonly avgTimeRepository: Repository<AvgTimeView>,
  ) {}

  async addLog(log: string) {
    const query = this.logRepository.create({
      search: log,
      created_on: new Date().toISOString(),
    });

    const response = await this.logRepository.save(query);

    return response;
  }

  async updateLog(id: number, log: Partial<Log>) {
    const response = await this.logRepository.update(id, { ...log });
    return response;
  }

  async getStatistics() {
    const topFive = await this.topFiveRepository
      .createQueryBuilder('topFiveView')
      .getMany();
    const avgTime = await this.avgTimeRepository
      .createQueryBuilder('avgTimeView')
      .getOne();

    return {
      topFive: topFive.map(({ search, count }) => ({
        search,
        count,
      })),
      avgTime: formatTimeInMilliseconds(avgTime?.avg),
    };
  }
}
