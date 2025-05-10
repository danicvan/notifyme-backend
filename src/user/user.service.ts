import axios from 'axios';

import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UserService {
  async register(dto: RegisterUserDto) {
    const { name, email } = dto;
    console.log('🔐 API KEY:', process.env.RESEND_API_KEY);

    await axios.post(
        'https://api.resend.com/emails',
        {
          from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
          to: email,
          subject: 'Boas-vindas ao NotifyMe!',
          html: `<strong>Olá, ${name}!</strong><br/>Seja bem-vindo à plataforma de notificações inteligentes. 🚀`,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );      

    return {
      message: `Usuário ${name} registrado com sucesso!`,
    };
  }
}
