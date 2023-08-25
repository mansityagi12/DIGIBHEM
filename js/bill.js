document.addEventListener('DOMContentLoaded', function() {
    const submitPaymentButton = document.getElementById('submitPayment');
    
    submitPaymentButton.addEventListener('click', function() {
      const billType = document.getElementById('billType').value;
      const accountNumber = document.getElementById('accountNumber').value;
      const amount = parseFloat(document.getElementById('amount').value);
 
      simulatePaymentProcessing(billType, accountNumber, amount);
    });
    
    function simulatePaymentProcessing(billType, accountNumber, amount) {

      console.log('Processing payment...');

      setTimeout(function() {
        console.log(`Payment of $${amount.toFixed(2)} for ${billType} bill (${accountNumber}) was successful.`);
        alert(`Payment of $${amount.toFixed(2)} for ${billType} bill (${accountNumber}) was successful.`);
      }, 2000); 
    }
  });
  