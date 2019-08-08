export class InterfaceModel{
  interfaceName: string;
  state: string;
  ipAddress: string;
  ipMask: string;
  method: string;
  constructor(interfaceName: string, state: string, ipAddress: string, ipMask: string, method: string) {
    this.interfaceName = interfaceName;
    this.state = state;
    this.ipAddress = ipAddress;
    this.ipMask = ipMask;
    this.method = method;
  }
}
