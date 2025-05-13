import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  async send(dto: any): Promise<{ message: string }> {
    return { message: `Notification sent to ${dto.email}` };
  }
}
