export interface Attempt {
  status: AttemptStatus[];
  word: string;
}

export enum AttemptStatus {
  GRAY, YELLOW, GREEN
}
