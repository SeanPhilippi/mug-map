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
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  phone: string;
  email: string;
  instagram: string;
  facebook: string;
  x: string;
  website: string;
  offers_mugs: boolean;
  wifi: boolean;
  work_friendly: boolean;
  description: string;
  submitter_name: string;
  submitter_email: string;
  message_to_admin: string;
}
