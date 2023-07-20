import { AddressType } from './AddressType';

export interface UserType {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  address?: AddressType[];
}
