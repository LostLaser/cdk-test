"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkStarterStack = void 0;
const aws_lambda_1 = require("@aws-cdk/aws-lambda");
const core_1 = require("@aws-cdk/core");
class CdkStarterStack extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        new aws_lambda_1.Function(this, 'my-function', {
            code: aws_lambda_1.Code.fromAsset('lambda'),
            memorySize: 128,
            timeout: core_1.Duration.seconds(5),
            runtime: aws_lambda_1.Runtime.NODEJS_14_X,
            handler: 'hello.handler',
        });
    }
}
exports.CdkStarterStack = CdkStarterStack;
//# sourceMappingURL=cdk-test-stack.js.map