package com.bank.domain.account;

import com.bank.domain.account.transaction.Transaction;

import java.util.ArrayList;
import java.util.List;

public class History {

    private final List<Transaction> transactions = new ArrayList<>();

    public void insert(Transaction transaction) {
        transactions.add(transaction);
    }

    public List<Transaction> getTransactions() {
        return transactions;
    }

    public int count() {
        return transactions.size();
    }

    public Transaction getLastTransaction() {
        if (count() == 0) {
            return null;
        }

        return transactions.get(count() - 1);
    }

}
