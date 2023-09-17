export interface BusinessMarkerData {
  id: number;
  name: string;
  offers_mugs: boolean;
  wifi: boolean;
  work_friendly: boolean;
  lat: number;
  lng: number;
}

export type Address = {
  street1: string;
  street2: string;
  country: string;
  city: string;
  state: string;
  zip: string;
};

export interface BusinessData {
  name: string;
  address: Address;
  website: string;
  phone: string;
  email: string;
  instagram: string;
  x: string;
  facebook: string;
}
