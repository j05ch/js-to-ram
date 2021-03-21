import { Components, ComponentsKey } from '../../../actions/components';
import { Groups } from '../../../actions/groups';

export type Variation = {
	variation: ComponentsKey;
	group: Groups;
};
type Variations = Array<Variation>;

export const variations: Variations = [
	{ variation: Components.LET_ARITHMETIC_VAR_VAR, group: Groups.A },
	{ variation: Components.LET_ARITHMETIC_NUM_NUM, group: Groups.A },
];
