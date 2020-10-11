export interface Flag {
  id: number;
  key: string;
  description?: string;
  enabled: boolean;
  tags?: Tag[];
  segments?: Segment[];
  variants?: Variant[];
  dataRecordsEnabled: boolean;
  entityType: string;
  notes: string;
  createdBy: string;
  updatedBy?: string;
  updatedAt: string;
}

interface Tag {
  id: number;
  value: string;
}

export interface Segment {
  id: number;
  description?: string;
  constraints?: Constraint[];
  distributions?: Distribution[];
  rank: number;
  rolloutPercent: number;
}

interface Constraint {
  id: number;
  property: string;
  operator: string;
  value: string;
}

interface Distribution {
  id: number;
  percent: number;
  variantKey: string;
  variantID: number;
}

export interface Variant {
  id: number;
  key: string;
  attachment: any;
}
