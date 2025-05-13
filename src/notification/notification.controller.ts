import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationDto } from './dto/notification.dto';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Notification')
@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  @ApiBody({
    type: NotificationDto,
    examples: {
      example1: {
        summary: 'Exemplo de notificação',
        value: {
          subject: 'Bem-vindo!',
          message: 'Sua conta foi criada com sucesso.',
          email: 'usuario@exemplo.com',
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Notificação enviada com sucesso.' })
  sendNotification(@Body() dto: NotificationDto) {
    return this.notificationService.send(dto);
  }
}