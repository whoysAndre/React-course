import { CustomError } from "../errors/custom.errors";


export class UserEntity {

  private constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,

  ) { }

  static fromObject(object: { [key: string]: any }) {

    const { id, _id, name, email, emailValidated, password} = object;

    if (!id && !_id) throw CustomError.badRequest('Missing id');
    if (!name) throw CustomError.badRequest('Missing name');
    if (!email) throw CustomError.badRequest('Missing email');
    if (!password) throw CustomError.badRequest('Missing password');



    return new UserEntity(id || _id, name, email, password);
  };

};