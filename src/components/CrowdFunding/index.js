import React, { Component } from "react";
import Utils from "../../utils";
import "./CrowdFunding.scss";
import contractAddress from "../Contract";

export default class EarnTron extends Component {
  constructor(props) {
    super(props);

    this.deposit = this.deposit.bind(this);
  }

  async componentDidMount() {
    await Utils.setContract(window.tronWeb, contractAddress);
  };


  async deposit() {

    const balanceInSun = await window.tronWeb.trx.getBalance(); //number
    var balanceInTRX = window.tronWeb.fromSun(balanceInSun); //string
    balanceInTRX = parseFloat(balanceInTRX);//number

    var amount = document.getElementById("amount").value;

    amount = parseFloat(amount);

    console.log(balanceInTRX);
    console.log(amount+40);

    if ( balanceInTRX >= amount+40 ){

      var loc = document.location.href;
      if(loc.indexOf('?')>0){
          var getString = loc.split('?')[1];
          var GET = getString.split('&');
          var get = {};
          for(var i = 0, l = GET.length; i < l; i++){
              var tmp = GET[i].split('=');
              get[tmp[0]] = unescape(decodeURI(tmp[1]));
          }
          var inversors = await Utils.contract.investors(get['ref']).call();

          //console.log(inversors);

          if ( inversors.registered ) {
            document.getElementById('sponsor').value = get['ref']; 
          }else{
            document.getElementById('sponsor').value = 'TXkyzBxJqjYj18Kg48rLv7ZEmx8ayptPoF';         
          }
          
          
      }else{

          document.getElementById('sponsor').value = 'TXkyzBxJqjYj18Kg48rLv7ZEmx8ayptPoF'; 
      }

      let tarifa = 0;

      var sponsor = document.getElementById("sponsor").value;

      const account =  await window.tronWeb.trx.getAccount();
      var accountAddress = account.address;
      accountAddress = window.tronWeb.address.fromHex(accountAddress);

      var investors = await Utils.contract.investors(accountAddress).call();

      if (investors.registered) {
        
        sponsor = investors.sponsor;
        
      }

      document.getElementById("amount").value = "";

      if ( amount >= 200){

        return Utils.contract.deposit(tarifa, sponsor).send({
          shouldPollResponse: true,
          callValue: amount * 1000000 // converted to SUN
        });

      }else{
        window.alert("El minimo de inversión es 200 TRX");
        document.getElementById("amount").value = 200;
      }
    
      

    }else{

      window.alert("Debes dejar 40 TRX libres en tu cuenta para hacer la transacción");

      document.getElementById("amount").value = amount-40;

    }
    
  };

  render() {
    
    return (
      
      <div className="card wow bounceInUp">
          <i className="fa fa-diamond"></i>
        <div className="card-body">
          <h5 className="card-title">Gold Premium</h5>
          <h6 className="card-text">
            Return: <strong>200%</strong><br></br>
            <strong>2%</strong> per day<br></br>
          </h6>
            <form>
              <div className="form-group">
                <input type="number" className="form-control" id="amount" placeholder="Min. 200 TRX"></input>
                <p className="card-text">Debes tener ~40 TRX para hacer la transacción</p>
              </div>
            </form>
          <button type="button" class="btn btn-light" onClick={() => this.deposit()}>Invertir</button>
          
        </div>
      </div>
        



    );
  }
}
