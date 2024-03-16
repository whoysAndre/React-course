import { BcryptAdapter, JwtAdapter } from "../../config";
import { UserModel } from "../../database/mongo/models/user.model";
import { CustomError, LoginUserDto, RegisterUserDto } from "../../domain";
import { UserEntity } from "../../domain/entities/user.entity";






export class AuthService {


  public async registerService(registerUserDto: RegisterUserDto) {

    const { email } = registerUserDto;

    const userFind = await UserModel.findOne({ email });

    if (userFind) throw CustomError.badRequest('Email already exist');


    try {
      const user = new UserModel(registerUserDto);
      user.password = BcryptAdapter.hash(registerUserDto.password);

      await user.save();

      const { password, ...restUser } = UserEntity.fromObject(user);

      //TODO:GENERATE TOKEN
      const token = await JwtAdapter.generateToken({ email: user.email });

      if (!token) throw CustomError.internalServer('Error while creating token');

      return {
        user: restUser,
        token: token
      }

    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    };

  };

  public async loginService(loginUserDto: LoginUserDto) {

    const user = await UserModel.findOne({ email: loginUserDto.email });
    if (!user) throw CustomError.badRequest('Email not exist');

    const isMatch = BcryptAdapter.compare(loginUserDto.password, user.password);

    if (!isMatch) throw CustomError.badRequest('Password is not valid');

    const { password, ...userEntity } = UserEntity.fromObject(user);

    //TODO:GENERATE TOKEN
    const token = await JwtAdapter.generateToken({ id: user.id });
    if (!token) throw CustomError.internalServer('Error while creating token');

    return {
      user: userEntity,
      token: token,
    };

  };

};

