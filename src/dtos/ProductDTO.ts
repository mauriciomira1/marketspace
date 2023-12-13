export type ProductDTO = {
  name: string;
  description: string;
  new: boolean;
  acceptChanges: boolean;
  paymentsAccepted: string[];
  price: string;
  photos: string[];
};
