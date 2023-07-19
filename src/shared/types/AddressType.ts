import { CityType } from './CutyType';

export interface AddressType {
  id: number;
  complement: string;
  numberAddress: number;
  cep: string;
  city?: CityType;
}
