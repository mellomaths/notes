package com.bank.domain.exceptions;

public class AccountWithNoBalanceException extends RuntimeException {
    public AccountWithNoBalanceException(String message) {
        super(message);
    }
}
