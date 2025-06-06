import { DataTable } from '../../../../../datatables';
import { ToolMeta } from '@tools/defineTool';

export interface AlternativeVarInfo {
  title: string;
  unit: string;
  defaultPrefix?: string;
  formula: string;
}

export interface GenericCalcType extends Omit<ToolMeta, 'component'> {
  formula: string;
  extraOutputs?: {
    title: string;
    formula: string;
    unit: string;
    // Si prefix default
    defaultPrefix?: string;
  }[];
  presets?: {
    title: string;
    source: DataTable;
    default: string;
    bind: {
      [key: string]: string;
    };
  }[];
  variables: {
    name: string;
    title: string;
    unit: string;
    defaultPrefix?: string;
    // If absence, assume it's the default target var
    default?: number;

    // If present and false,  don't allow user to select this as output
    solvable?: boolean;

    // Alternate rearrangement of the formula, to be used when calculating this.
    // If missing, the main formula is used with auto derivation.
    formula?: string;

    // Alternates are alternate ways of entering the exact same thing,
    // like the diameter or radius.  The formula for an alternate
    // can use only one variable, always called v, which is the main
    // variable it's an alternate of
    alternates?: AlternativeVarInfo[];
  }[];
}
