import { Components, ComponentsKey } from '../actions/components';
import { Groups } from '../actions/groups';

export type Variation = {
	variation: ComponentsKey;
	group: Array<Groups>;
};

type Variations = Array<Variation>;

export const variations: Variations = [
	{
		variation: Components.LET_ARITHMETIC_VAR_VAR,
		group: [Groups.A, Groups.B],
	},
	{
		variation: Components.LET_ARITHMETIC_VAR_NUM,
		group: [Groups.A, Groups.B],
	},
	{
		variation: Components.LET_ARITHMETIC_NUM_VAR,
		group: [Groups.A, Groups.B],
	},
	{
		variation: Components.LET_ARITHMETIC_NUM_NUM,
		group: [Groups.A, Groups.B],
	},
	{ variation: Components.ARITHMETIC_VAR_VAR, group: [Groups.A, Groups.B] },
	{ variation: Components.ARITHMETIC_VAR_NUM, group: [Groups.A, Groups.B] },
	{ variation: Components.ARITHMETIC_NUM_VAR, group: [Groups.A, Groups.B] },
	{ variation: Components.ARITHMETIC_NUM_NUM, group: [Groups.A, Groups.B] },
	{ variation: Components.LET, group: [Groups.A, Groups.B] },
	{ variation: Components.LET_VAR, group: [Groups.A, Groups.B] },
	{ variation: Components.VAR_NUM, group: [Groups.A, Groups.B] },
	{ variation: Components.VAR_VAR, group: [Groups.A, Groups.B] },
	{ variation: Components.IF, group: [Groups.A] },
	{ variation: Components.ELSE, group: [Groups.A] },
	{ variation: Components.FOR, group: [Groups.A] },
	{ variation: Components.LOG, group: [Groups.A, Groups.B] },
];
