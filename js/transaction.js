document.addEventListener('DOMContentLoaded', function() {
  const amountInput = document.getElementById('amount');
  const transactionTypeInput = document.getElementById('transactionType');
  const submitButton = document.getElementById('submitTransaction');
  const currentBalanceElement = document.getElementById('currentBalance');

  let balance = 1000; // Initial balance
  
  submitButton.addEventListener('click', function() {
    const transactionAmount = parseFloat(amountInput.value);
    const transactionType = transactionTypeInput.value;

    if (isNaN(transactionAmount) || transactionAmount <= 0) {
      alert('Please enter a valid transaction amount.');
      return;
    }

    if (transactionType === 'deposit') {
      balance += transactionAmount;
    } else if (transactionType === 'withdrawal') {
      if (transactionAmount > balance) {
        alert('Insufficient balance for withdrawal.');
        return;
      }
      balance -= transactionAmount;
    }

    currentBalanceElement.textContent = balance.toFixed(2);
    amountInput.value = ''; // Clear input field
  });
});

