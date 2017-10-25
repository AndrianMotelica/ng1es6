function CurrencyCtrl() {

}
module.exports = {
  template: require('./closing-currency.html'),
  controller: CurrencyCtrl,
  bindings: {
    coins: '<'
  }
};