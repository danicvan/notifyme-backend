import { Injectable } from '@nestjs/common';
import { NotificationDto } from './dto/notification.dto';

@Injectable()
export class NotificationService {
  async send(dto: NotificationDto): Promise<{ message: string }> {
    return { message: `Notification sent to ${dto.email}` };
  }
}