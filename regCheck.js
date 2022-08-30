export default function regCheck(vehReg, regLoc) {
    return vehReg.endsWith(regLoc);
}
console.log(regCheck("FGT 123 EC", "EC"));
console.log(regCheck("FGT 123 EE", "EC"));
console.log(regCheck("FGT 123 L", "L"))
console.log(regCheck("ND 123-456", "ND"))
console.log(regCheck("CY 678-453", "CY"))