import 'source-map-support/register';

import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import products from '../../mocks/products';

const getProductList = async () => {
  return formatJSONResponse({ products });
}

export const main = middyfy(getProductList);
