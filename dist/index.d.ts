import ActionBase from '@mohism/cli-wrapper/dist/libs/action.class';
import { Dict, ArgvOption } from '@mohism/cli-wrapper/dist/libs/utils/type';
declare class ActionAsPkg extends ActionBase {
    constructor();
    options(): Dict<ArgvOption>;
    description(): string;
    run(options: Dict<any>): Promise<any>;
}
declare const _default: ActionAsPkg;
export default _default;
