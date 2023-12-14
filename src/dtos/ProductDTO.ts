type paymentMethodsProps =
  | "boleto"
  | "pix"
  | "dinheiro"
  | "credito"
  | "deposito";

export type ProductDTO = {
  name: string;
  description: string;
  isNew: boolean;
  acceptTrade: boolean;
  paymentMethods: paymentMethodsProps[];
  price: number;
  productImages: string[];
};
