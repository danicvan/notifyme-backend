import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import axios from 'axios';

// Mock do LogService
class MockLogService {
  saveLog = jest.fn();
}

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

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
    const dto = { name: 'John Doe', email: 'john@example.com' };
    mockedAxios.post.mockResolvedValueOnce({ data: {} });

    const result = await service.register(dto);

    expect(result.message).toContain('Usuário John Doe registrado com sucesso!');
  });
});
