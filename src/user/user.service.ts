import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UserService {
  async register(dto: RegisterUserDto) {
    const { name, email } = dto;

    // Simulação: aqui vai o envio de e-mail no futuro
    console.log(`📩 Enviando e-mail de boas-vindas para ${email}...`);

    // Simulação: aqui vai o envio de log para S3 depois
    console.log(`🗂️ Gerando log de registro para ${name}`);

    return {
      message: `Usuário ${name} registrado com sucesso!`,
    };
  }
}
