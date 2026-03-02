import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
import { IMission } from './mission.interface';

@Injectable()
export class MissionService {
  private readonly missions = [
    { id: 1, codename: 'OPERATION_STORM', status: 'ACTIVE' },
    { id: 2, codename: 'SILENT_SNAKE', status: 'COMPLETED' },
    { id: 3, codename: 'RED_DAWN', status: 'FAILED' },
    { id: 4, codename: 'BLACKOUT', status: 'ACTIVE' },
    { id: 5, codename: 'ECHO_FALLS', status: 'COMPLETED' },
    { id: 6, codename: 'GHOST_RIDER', status: 'COMPLETED' },
  ];

  getSummary(): Record<string, number> {
    return this.missions.reduce((acc: Record<string, number>, mission) => {
      const status = mission.status;
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});
  }

  findAll(): IMission[] {
    const filePath = join(process.cwd(), 'data', 'missions.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8')) as IMission[];

    return data.map((m: IMission) => {
      let durationDays = -1;

      if (m.endDate) {
        const start = new Date(m.startDate).getTime();
        const end = new Date(m.endDate).getTime();
        durationDays = Math.floor((end - start) / (1000 * 60 * 60 * 24));
      }

     
      return { ...m, durationDays };
    });
  }
}