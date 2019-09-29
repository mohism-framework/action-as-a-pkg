const ActionBase = require('@mohism/cliwrap/libs/action.class');

class ActionAsPkg extends ActionBase {
  options() {
    return {
      boom: {
        desc: '是否毁灭地球',
        default: true
      }
    };
  }

  description() {
    return '通过npm包的方式分享你的命令';
  }

  async run(argv) {
    const { boom } = argv;
    if (boom){
      this.err('成功毁灭地球');
    }else{
      this.info('饶你一命');
    }
  }
}

module.exports = new ActionAsPkg();