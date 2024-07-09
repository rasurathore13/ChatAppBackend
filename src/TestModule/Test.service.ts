import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { User, UserSchema } from '../Schemas/User.schema'
import { Model } from 'mongoose';

@Injectable()
export class TestService {

    constructor(@InjectModel('User') private userModel: Model<User> ) {

    }

    getUserNameAndEmail(): Promise<User[]> {
        return this.userModel.find().exec();
    }

}