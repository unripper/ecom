import { GraphQLObjectType } from 'graphql';
import {
  GET_ALL_PRODUCTS,
  GET_ALL_USER_PRODUCTS,
  GET_ONE_PRODUCT,
} from './product.query';
import { GET_USER_DETAILS } from './user.query';

export const Queries = new GraphQLObjectType({
  name: 'Queries',
  fields: () => ({
    // USER
    getUserDetails: GET_USER_DETAILS,

    // PRODUCT
    getAllProducts: GET_ALL_PRODUCTS,
    getOneProduct: GET_ONE_PRODUCT,
    getAllUserProducts: GET_ALL_USER_PRODUCTS,
  }),
});
