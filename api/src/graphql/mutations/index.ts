import { GraphQLObjectType } from 'graphql';
import { NEW_PRODUCT } from './product.mutation';
import { LOGIN, REGISTER, UPDATE_USER } from './user.mutation';

export const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: () => ({
    register: REGISTER,
    login: LOGIN,
    updateUser: UPDATE_USER,
    newProduct: NEW_PRODUCT,
  }),
});
