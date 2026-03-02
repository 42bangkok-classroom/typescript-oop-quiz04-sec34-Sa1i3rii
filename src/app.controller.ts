import { Controller, Delete, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

import { MissionService } from './mission/mission.service'; 

@Controller()
export class AppController {
  
  constructor(
    private readonly appService: AppService,
    private readonly missionService: MissionService 
  ) {}

  @Get()
  getLove(): string {
    return this.appService.getLove();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.missionService.remove(id);
  }
}