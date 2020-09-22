export type FileWorkType = 'SZUOJ-Log' | 'Customize';
export type CheckSchemaType = 'Simple(C++)';
export interface SettingType {
  fileWork: FileWorkType;
  checkSchema: CheckSchemaType;
  rate: number;
  fileWorkCode?: string;
}
export type StringnifySettingType = Omit<SettingType, 'rate'> & {
  rate: string;
} 