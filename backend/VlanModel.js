class VlanModel{
    
    constructor(vlanNo,vlanName,vlanStatus,vlanPorts){
        this.vlanNo=vlanNo;
        this.vlanName=vlanName;
        this.vlanStatus=vlanStatus;
        this.vlanPorts=[];
    }
}

module.exports = {
    VlanModel
};