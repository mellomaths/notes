package com.bank.domain.client;

import com.bank.domain.account.Account;

public class Client {

    private final String name;
    private final String cpf;
    private final String email;

    private final Account account;
    private final String key;

    public Client(String name, String cpf, String email) {
        this.name = name;
        this.cpf = cpf;
        this.email = email;

        this.key = "" + cpf.hashCode();
        this.account = new Account();
    }

    public String getName() {
        return name;
    }

    public String getCpf() {
        return cpf;
    }

    public String getEmail() {
        return email;
    }

    public String getKey() {
        return key;
    }

    public Account getAccount() {
        return account;
    }
}
