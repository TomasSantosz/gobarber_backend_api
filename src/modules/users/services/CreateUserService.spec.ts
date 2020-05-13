import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../Repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new User', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const appointment = await createUser.execute({
      email: 'johndoe@example.com',
      name: 'John Doe',
      password: '123456',
    });

    expect(appointment).toHaveProperty('id');
  });

  it('should not be able to create a new User with email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    await createUser.execute({
      email: 'johndoe@example.com',
      name: 'John Doe',
      password: '123456',
    });

    expect(
      createUser.execute({
        email: 'johndoe@example.com',
        name: 'John Doe',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
