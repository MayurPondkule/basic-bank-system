function sendMoney() {
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
 
   if (enterAmount > 8000) {
     alert("Insufficient Balance.");
   } else {
     var findUserBankAccount = enterName + "Balance";
     var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
     var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);
     myAccountBalance -= enterAmount;
     document.getElementById(findUserBankAccount).innerHTML = finalAmount;
     document.getElementById("myAccountBalance").innerText = myAccountBalance;
     alert(`Successful Transaction !!  
     $${enterAmount} is sent to ${enterName}@email.com.`);
 
     // transaction history
     var createPTag = document.createElement("li");
     var textNode = document.createTextNode(
       `$${enterAmount} is sent to recipient with Email-id ${enterName}@email.com on ${Date()}.`
     );
     createPTag.appendChild(textNode);
     var element = document.getElementById("transaction-history-body");
     element.insertBefore(createPTag, element.firstChild);
   }
 }
 