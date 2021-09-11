package com.bank.domain.account.transaction;

public enum TransactionType {
    DEPOSIT("DEPOSIT"),
    WITHDRAW("WITHDRAW"),
    TRANSFERENCE("TRANSFERENCE");

    private final String value;

    TransactionType(final String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return value;
    }
}
