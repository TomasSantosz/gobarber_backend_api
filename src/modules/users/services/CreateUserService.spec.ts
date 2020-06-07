import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../Repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });
  it('should be able to create a new User', async () => {
    const appointment = await createUser.execute({
      email: 'johndoe@example.com',
      name: 'John Doe',
      password: '123456',
    });

    expect(appointment).toHaveProperty('id');
  });

  it('should not be able to create a new User with email from another', async () => {
    await createUser.execute({
      email: 'johndoe@example.com',
      name: 'John Doe',
      password: '123456',
    });

    await expect(
      createUser.execute({
        email: 'johndoe@example.com',
        name: 'John Doe',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
