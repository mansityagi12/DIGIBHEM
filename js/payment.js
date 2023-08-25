document.addEventListener('DOMContentLoaded', function() {
    const submitPaymentButton = document.getElementById('submitPayment');
    
    submitPaymentButton.addEventListener('click', function() {
      const cardNumber = document.getElementById('cardNumber').value;
      const expiryDate = document.getElementById('expiryDate').value;
      const cvv = document.getElementById('cvv').value;
      const amount = parseFloat(document.getElementById('amount').value);
      
      simulatePaymentProcessing(cardNumber, expiryDate, cvv, amount);
    });
    
    function simulatePaymentProcessing(cardNumber, expiryDate, cvv, amount) {
      console.log('Processing payment...');
      setTimeout(function() {
        console.log(`Payment of $${amount.toFixed(2)} was successful.`);
        alert(`Payment of $${amount.toFixed(2)} was successful.`);
      }, 2000); 
    }
  });
  