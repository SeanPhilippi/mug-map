export interface BusinessMarkerData {
  id: number;
  name: string;
  offers_mugs: boolean;
  wifi: boolean;
  sufficient_outlets: boolean;
  accepts_personal_mug: boolean;
  lat: number;
  lng: number;
}

export interface BusinessData {
  name: string;
  address: string;
  phone: string;
  email: string;
  instagram: string;
  facebook: string;
  x: string;
  website: string;
  offers_mugs: boolean;
  accepts_personal_mug: boolean;
  wifi: boolean;
  sufficient_outlets: boolean;
  description: string;
  submitter_name: string;
  submitter_email: string;
  message_to_admin: string;
}
