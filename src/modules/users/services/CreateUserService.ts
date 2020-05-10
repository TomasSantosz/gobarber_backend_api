import { hash } from 'bcryptjs';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../Repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}
@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  public async execute({ email, name, password }: IRequest): Promise<User> {
    const checkUserExsite = await this.usersRepository.findByEmail(email);

    if (checkUserExsite) {
      throw new AppError('Email address already used.', 400);
    }

    const hashedPassword = await hash(password, 8);
    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    return user;
  }
}

export default CreateUserService;
