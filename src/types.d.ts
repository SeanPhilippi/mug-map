export type Coords = {
  lat: number;
  lng: number;
}

export interface BusinessMarkerData {
  name: string;
  has_mugs: boolean;
  wifi: boolean;
  work_friendly: boolean;
  coords: Coords;
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
