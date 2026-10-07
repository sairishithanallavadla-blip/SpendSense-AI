function displayTransactions() {

    transactionList.innerHTML = "";

    if (transactions.length === 0) {
        transactionList.innerHTML =
            '<div class="empty">No transactions yet.</div>';
        return;
    }

    const reversedTransactions = [...transactions].reverse();

    reversedTransactions.forEach(function (transaction) {

        const item = document.createElement("div");

        item.className = "transaction " + transaction.type;

        const sign =
            transaction.type === "income" ? "+" : "-";

        const amountClass =
            transaction.type === "income"
                ? "income-text"
                : "expense-text";

        const info = document.createElement("div");
        info.className = "transaction-info";

        const icon = document.createElement("div");
        icon.className = "transaction-icon";
        icon.textContent = getIcon(transaction.category);

        const details = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = transaction.description;

        const categoryText = document.createElement("p");
        categoryText.textContent = transaction.category;

        details.appendChild(title);
        details.appendChild(categoryText);

        info.appendChild(icon);
        info.appendChild(details);


        const right = document.createElement("div");
        right.className = "transaction-right";

        const amountText = document.createElement("span");
        amountText.className =
            "transaction-amount " + amountClass;

        amountText.textContent =
            sign + " " + formatMoney(transaction.amount);


        const deleteButton =
            document.createElement("button");

        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener(
            "click",
            function () {
                deleteTransaction(transaction.id);
            }
        );

        right.appendChild(amountText);
        right.appendChild(deleteButton);

        item.appendChild(info);
        item.appendChild(right);

        transactionList.appendChild(item);
    });
}