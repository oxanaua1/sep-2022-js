function userCard(number) {

    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = number;

    const createMessage = (operationType, credits) => ({operationType, credits, operationTime: Date()})

    return {
        getCardOptions: function (card) {
            return card = {balance, transactionLimit, historyLogs, key}

        },

        putCredits: function (money) {

            historyLogs.push(createMessage('Received Credits', money))
            return balance += money
        },
        takeCredits: function (money) {

            if (balance - money >= 0) {
                historyLogs.push(createMessage('Withdrawal of Credits', money))
                return balance -= money;

            } else {
                historyLogs.push(createMessage('No money at the account'))
                throw new Error('No money at the account')
            }

        },
        setTransactionLimit: function (limit) {
            historyLogs.push(createMessage('Transaction Limit changed', limit))
            return transactionLimit = limit;
        },
        transferCredits: function (moneyToTransfer, card) {
            let limit = this.setTransactionLimit(transactionLimit);
            console.log(limit);

            if (((balance - moneyToTransfer) >= 0) && (transactionLimit <= limit)) {
                return (card.balance = (balance - moneyToTransfer) * 0.95)
            }
        }

    }


}


const card1 = userCard(1);
console.log(card1.getCardOptions());
const card3 = userCard(3);
console.log(card3.getCardOptions());
console.log(card3.putCredits(150));
console.log(card3.takeCredits(100));
console.log(card3.setTransactionLimit(5000));
console.log(card3.transferCredits(50, card1));




