import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MissionController } from './missions/mission.controller';
import { MissionService } from './missions/mission.service';

@Module({
  imports: [],
  controllers: [AppController, MissionController],
  providers: [AppService, MissionService],
})
export class AppModule {}
