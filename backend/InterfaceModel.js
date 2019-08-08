class InterfaceModel{
    constructor(interfaceName,interfaceState,ipAddress,ipMask,method){
       this.interfaceName=interfaceName;
       this.interfaceState=interfaceState;
       this.ipAddress=ipAddress;
       this.ipMask=ipMask;
       this.method=method;
    }
    
}

module.exports = {
    InterfaceModel
};


