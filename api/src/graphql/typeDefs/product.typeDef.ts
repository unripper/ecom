import { GraphQLFieldConfigArgumentMap, GraphQLObjectType } from 'graphql';
import { GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import { GraphQLUserType } from './user.typeDef';

export const GraphQLProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    images: { type: new GraphQLList(GraphQLString) },
    ownerId: { type: GraphQLID },
    owner: { type: GraphQLUserType },
  }),
});

export const GraphQLNewProductArgsType: GraphQLFieldConfigArgumentMap = {
  title: { type: GraphQLString },
  description: { type: GraphQLString },
  images: { type: new GraphQLList(GraphQLString) },
};