import { Controller, Get, Param } from '@nestjs/common';
import { LogService } from './log.service';

@Controller('logs')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Get()
  async listLogs() {
    return this.logService.listLogs();
  }

  @Get(':key')
  async getLog(@Param('key') key: string) {
    return this.logService.getLog(decodeURIComponent(key));
  }
}