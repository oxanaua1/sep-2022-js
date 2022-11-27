function userCard(number) {

    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [{}];
    let key = number;

    return {
        getCardOptions: function (card) {
            return card = {
                balance, transactionLimit, historyLogs, key
            }

        },

        putCredits: function (balance) {
            return balance
        },
        takeCredits: function (addMoney) {

            if (balance - addMoney >= 0) {
                return balance - addMoney;
            } else {
                throw new Error('No money at the account')
            }

        },
        setTransactionLimit: function (limit) {
            return transactionLimit = limit;
        },
        tranferCredits: function (moneyToTransfer, card) {
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
console.log(card3.tranferCredits(50, card1));



