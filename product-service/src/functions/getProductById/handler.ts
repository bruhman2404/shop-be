import 'source-map-support/register';

import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import products from '../../mocks/products';

const getProductById = async (event) => {
  const productId = Number.parseInt(event.pathParameters.id, 10);
  const product = products.find(({ id }) => id === productId);

  return formatJSONResponse({ product });
}

export const main = middyfy(getProductById);
