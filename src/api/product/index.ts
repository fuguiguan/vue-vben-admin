import { defHttp } from '@/utils/http/axios';
import { ProductParams } from './model/productModel';

enum Api {
  PRODUCT_LIST = '/product/list',
}

/**
 * @description: Get sample list value
 */

export const getProductList = (params: ProductParams) =>
  defHttp.post<ProductParams>({
    url: Api.PRODUCT_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });
