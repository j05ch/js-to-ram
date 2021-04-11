import { Components, ComponentsKey } from '../actions/components';
import { Groups } from '../actions/groups';

export type Variation = {
	variation: ComponentsKey;
	group: Groups;
};

type Variations = Array<Variation>;

export const variations: Variations = [
	{ variation: Components.LET_ARITHMETIC_VAR_VAR, group: Groups.A },
	{ variation: Components.LET_ARITHMETIC_NUM_NUM, group: Groups.A },
	{ variation: Components.LET_ARITHMETIC_VAR_NUM, group: Groups.A },
	{ variation: Components.LET_ARITHMETIC_NUM_VAR, group: Groups.A },
	{ variation: Components.IF, group: Groups.A },
	{ variation: Components.FOR, group: Groups.A },
	{ variation: Components.LET, group: Groups.A },
	{ variation: Components.LET_VAR, group: Groups.A },
	{ variation: Components.VAR_VAR, group: Groups.A },
];
