import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';

class MockLogService {
  saveLog = jest.fn().mockResolvedValue(undefined);
}

jest.mock('axios', () => ({
  post: jest.fn().mockResolvedValue({ data: { id: 'mocked-email-id' } }),
}));

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: 'LogService', useClass: MockLogService },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should register user and return success message', async () => {
    const dto: RegisterUserDto = {
      name: 'John Doe',
      email: 'john@example.com',
    };

    const result = await service.register(dto);

    expect(result).toEqual({
      message: 'Usuário John Doe registrado com sucesso!',
    });
  });
});
