
        class BankAccount {
            constructor(accountHolder, accountType) {
                this.accountHolder = accountHolder;
                this.accountType = accountType;
                this.balance = 0;
            }

            deposit(amount) {
                amount = parseFloat(amount);
                if (!isNaN(amount) && amount > 0) {
                    this.balance += amount;
                    return true;
                }
                return false;
            }

            withdraw(amount) {
                amount = parseFloat(amount);
                if (!isNaN(amount) && amount > 0 && this.balance >= amount) {
                    this.balance -= amount;
                    return true;
                }
                return false;
            }

            getBalance() {
                return this.balance;
            }
        }

        const account = new BankAccount("John Doe", "Savings");

        function deposit() {
            const amount = document.getElementById("amount").value;
            if (account.deposit(amount)) {
                updateBalance();
                alert(`Deposited $${amount}`);
            } else {
                alert("Invalid deposit amount.");
            }
        }

        function withdraw() {
            const amount = document.getElementById("amount").value;
            if (account.withdraw(amount)) {
                updateBalance();
                alert(`Withdrawn $${amount}`);
            } else {
                alert("Invalid withdrawal amount or insufficient funds.");
            }
        }

        function checkBalance() {
            updateBalance();
            document.getElementById("balance").style="display:block;";
        }

        function updateBalance() {
            const balanceElement = document.getElementById("balance");
            balanceElement.textContent = `Balance: $${account.getBalance().toFixed(2)}`;
        }