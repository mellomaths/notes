package com.bank.domain.account;

import com.bank.domain.account.transaction.Transaction;
import com.bank.domain.client.Client;
import com.bank.domain.exceptions.AccountWithNoBalanceException;

public class Account {

    private double balance;
    private final History history;

    public Account() {
        balance = 0;
        this.history = new History();
    }

    public double getBalance() {
        return balance;
    }

    public History getHistory() {
        return history;
    }

    private void addToBalance(double value) {
        balance += value;
    }

    private void removeFromBalance(double value) {
        if (balance <= 0) {
            throw new AccountWithNoBalanceException("It's not possible to withdraw the account");
        }

        balance -= value;
    }

    public void deposit(double value) {
        addToBalance(value);
        history.insert(Transaction.createDeposit(value));
    }

    public void withdraw(double value) {
        removeFromBalance(value);
        history.insert(Transaction.createWithdraw(value));
    }

    public void transfer(double value, Client client) {
        removeFromBalance(value);
        history.insert(Transaction.createTransference(value, "Transfer to " + client.getName() + ". CPF: " + client.getCpf()));
    }

    public void receiveTransfer(double value, Client client) {
        addToBalance(value);
        history.insert(Transaction.createTransference(value, "Received transfer from " + client.getName() + ". CPF: " + client.getCpf()));
    }
}
