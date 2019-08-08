const express = require('express');
var interfaceModelClass = require("./InterfaceModel");
var vlanModelClass = require("./VlanModel");
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.text());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


let areaWords;
app.post('/interface', (req, res) => 
{
  parseInterface(req.body);
  return res.status(201).send
  ({
    responseList
  })
});
function parseInterface(inputWorld)
{
  var interfaces = [];

  this.searchWorld = inputWorld.split('----------   -----   --------------- --------------- -------')[1];
  this.interfaceList = this.searchWorld.split('\n');
  for(let i = 1; i < Object.keys(this.interfaceList).length - 2; i++) 
  {
    let rowWorld=""
    rowWorld= this.interfaceList[i]+"";
    areaWords=rowWorld.split(/\b\s+/);
    var interfaceObject=new interfaceModelClass.InterfaceModel(areaWords[0],areaWords[1],areaWords[2],areaWords[3],areaWords[4]);
    interfaces.push(interfaceObject);
  }
  responseList=interfaces; 
}


app.post('/vlan', (req, res) =>
 {
  parseVlan(req.body);
  return res.status(201).send
  ({
    responseList
  })
});


function parseVlan(inputWorld)
{
  var vlans = [];
  this.searchWorld = inputWorld.split('---- -------------------------------- --------- -------------------------------')[1];
  this.vlanList = this.searchWorld.split('\n');
  let vlanObject = new vlanModelClass.VlanModel();
  
  
  for(let i = 1; i < Object.keys(this.vlanList).length - 1; i++) 
  {    
    let rowWorld=""
    rowWorld= this.vlanList[i]+"";
    
    if(rowWorld[0]!=' ')
    {
        areaWords=rowWorld.split(/\b\s+/);
        vlanObject.vlanNo=areaWords[0];
        vlanObject.vlanName=areaWords[1];
        vlanObject.vlanStatus=areaWords[2];
        var t=areaWords[3].split(',');

        for(var a=0;a<t.length;a++)
        {
          vlanObject.vlanPorts.push(t[a].trim());
        }
    }
    else
    {
      let g=(rowWorld.trim().split(','));
      for(var b=0;b<g.length;b++){
        vlanObject.vlanPorts.push(g[b].trim());
      }
    }
    if(rowWorld[rowWorld-1]!=' ' && this.vlanList[i+1][0]!=' ')
    {
      vlans.push(vlanObject); 
      vlanObject=new vlanModelClass.VlanModel();   
    }
  }
  responseList=vlans; 
}
app.listen(3000);