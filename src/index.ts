import { ActionBase, ArgvOption } from '@mohism/sloty';
import { Dict } from '@mohism/utils';

class ActionAsPkg extends ActionBase {
  constructor() {
    super();
  }
  options(): Dict<ArgvOption> {
    return {
      boom: {
        desc: '是否毁灭地球',
        default: true
      }
    };
  }

  description(): string {
    return '通过npm包的方式分享你的命令';
  }

  async run(options: Dict<any>): Promise<any> {
    const { boom } = options;
    if (boom) {
      this.err('成功毁灭地球');
    } else {
      this.info('饶你一命');
    }
  }
}

export default new ActionAsPkg();