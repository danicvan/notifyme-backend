import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

// Mock do UserService
class MockUserService {
  register = jest.fn().mockResolvedValue({
    message: 'Usuário John Doe registrado com sucesso!',
  });
}

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [{ provide: UserService, useClass: MockUserService }],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should register user and return success message', async () => {
    const dto = { name: 'John Doe', email: 'john@example.com' };
    const result = await controller.register(dto);
    expect(result).toEqual({
      message: 'User John Doe registered successfully!',
    });
  });
});
