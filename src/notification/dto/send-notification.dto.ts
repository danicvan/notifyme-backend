import { ApiProperty } from '@nestjs/swagger';

export class SendNotificationDto {
  @ApiProperty({
    example: 'john@example.com',
    description: 'Recipient email address',
  })
  to: string;

  @ApiProperty({
    example: 'Hello from NotifyMe!',
    description: 'The content/message of the notification',
  })
  message: string;
}
