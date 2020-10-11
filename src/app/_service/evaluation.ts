export interface EvaluationRequest {
  entityID?: string;
  entityType: string;
  entityContext: any;
  enableDebug: boolean;
  flagID: number;
  flagKey: string;
  flagTags?: string[];
};

export interface EvaluationResponse {
  flagID: number;
  flagKey: string;
  flagSnapshotID?: number;
  segmentID?: number;
  variantID?: number;
  variantKey?: string;
  variantAttachment?: any;
  evalContext: EvalContext;
  timestamp: string;
  evalDebugLog: EvalDebugLog;
};

interface EvalContext {
  entityID: string;
  entityType: string;
  entityContext: any;
  enableDebug: boolean;
  flagID: number;
  flagKey: string;
  flagTags?: string[];
};

interface EvalDebugLog {
  segmentDebugLogs: DebugLogs[];
  msg: string;
};

interface DebugLogs {
  segmentId: number;
  msg: string;
};
