import { ActionBase, ArgvOption } from '@mohism/sloty';
import { Dict } from '@mohism/utils';
declare class ActionAsPkg extends ActionBase {
    constructor();
    options(): Dict<ArgvOption>;
    description(): string;
    run(options: Dict<any>): Promise<any>;
}
declare const _default: ActionAsPkg;
export default _default;
