import { Runtime, Function, Code } from '@aws-cdk/aws-lambda';
import { Stack, App, StackProps, Duration } from '@aws-cdk/core';

export class CdkStarterStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new Function(this, 'my-function', {
      code: Code.fromAsset('lambda'),
      memorySize: 128,
      timeout: Duration.seconds(5),
      runtime: Runtime.NODEJS_14_X,
      handler: 'hello.handler',
    });
  }
}
