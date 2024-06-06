/**
 * 商品
 */
export interface ProductParams {
  /**
   * 商品类别
   */
  category: string;
  /**
   * 胸围
   */
  chestCircumference: string;
  /**
   * 衣长
   */
  clotheLength: string;
  /**
   * 颜色
   */
  color: string;
  /**
   * 商品描述
   */
  description: string;
  /**
   * 商品id
   */
  id: string;
  /**
   * 商品材质
   */
  material: string;
  /**
   * 商品名称
   */
  name: string;
  /**
   * 裤长
   */
  pantLength: string;
  /**
   * 商品主图
   */
  picture: string;
  /**
   * 成本价
   */
  purchasePrice: string;
  /**
   * 出售价
   */
  sellingPrice: string;
  /**
   * 肩宽
   */
  shoulderWidth: string;
  /**
   * 尺码大小
   */
  size: string;
  /**
   * 袖长
   */
  sleeveLength: string;
  /**
   * 库存
   */
  stock: string;
  [property: string]: any;
}
