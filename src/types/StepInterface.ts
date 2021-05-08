import { ComponentsKey } from '../actions/components';

export interface StepInterface {
	[index: string]: number | ComponentsKey | boolean | string | undefined;
	lineNo: number;
	type: ComponentsKey;
	varField?: string;
	varLeft?: string;
	varRight?: string;
	operandLeft?: string;
	operator?: string;
	operandRight?: string;
	numRight?: string;
	numLeft?: string;
	value?: string;
	varValue?: string;
	mark1?: boolean;
	mark2?: boolean;
	mark3?: boolean;
	mark4?: boolean;
	code1?: string;
	code2?: string;
	code3?: string;
	code4?: string;
	jumpTarget?: number;
	lastStep: boolean;
	insideBlock: boolean;
}
