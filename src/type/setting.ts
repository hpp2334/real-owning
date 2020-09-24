export type FileWorkType = 'SZUOJ-Log' | 'vjudge.net' | 'Customize';
export type CheckSchemaType = 'Simple(C++)';
export interface SettingType {
  fileWork: FileWorkType;
  checkSchema: CheckSchemaType;
  fileWorkCode?: string;
}
export type StringnifySettingType = SettingType;
