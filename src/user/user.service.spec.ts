import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { LogService } from '../log/log.service';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

class MockLogService {
  saveLog = jest.fn();
}

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: LogService, useClass: MockLogService },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should register user and return success message', async () => {
    const dto = { name: 'John Doe', email: 'john@example.com' };

    // Mockando o envio de e-mail
    mockedAxios.post.mockResolvedValue({
      data: { id: 'mocked-id' },
    });

    const result = await service.register(dto);

    expect(result).toEqual({
      message: 'Usuário John Doe registrado com sucesso!',
    });

    expect(mockedAxios.post).toHaveBeenCalled(); // opcional
  });
});
