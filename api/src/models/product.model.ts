import { prismaClient } from './prisma';
import { NewProductRequestArgs } from '../types/request';

/*
  Usage: new product
  Implementation: adding new product to `Product` table
*/
export const newProduct = (data: NewProductRequestArgs, userId: number) => {
  return new Promise((resolve, reject) => {
    prismaClient.product
      .create({
        data: {
          ...data,
          ownerId: userId,
        },
        include: {
          owner: {
            select: {
              id: true,
              email: true,
              name: true,
              profile: true,
            },
          },
        },
      })
      .then(resolve)
      .catch(reject);
  });
};

/*
  Usage: get all products
  Implementation: getting products according to `createdAt` field in table
*/
export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    prismaClient.product
      .findMany({
        orderBy: [
          {
            createdAt: 'desc',
          },
        ],
        include: {
          owner: {
            select: {
              id: true,
              email: true,
              name: true,
              profile: true,
            },
          },
        },
      })
      .then(resolve)
      .catch(reject);
  });
};
