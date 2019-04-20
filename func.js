var _fNumber=0;
var _sNumber=0;

function Add(fNumber,sNumber)
{
 this._fNumber = fNumber;
 this.sNumber = sNumber;
var result = _fNumber + sNumber;
return result;
}

var MyResult = Add(60,40);

Alert(Add(60,40));
