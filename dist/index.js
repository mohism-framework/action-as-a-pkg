"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const action_class_1 = __importDefault(require("@mohism/cli-wrapper/dist/libs/action.class"));
class ActionAsPkg extends action_class_1.default {
    constructor() {
        super();
    }
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
    run(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { boom } = options;
            if (boom) {
                this.err('成功毁灭地球');
            }
            else {
                this.info('饶你一命');
            }
        });
    }
}
exports.default = new ActionAsPkg();
