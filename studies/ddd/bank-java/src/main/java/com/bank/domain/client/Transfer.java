package com.bank.domain.client;

public class Transfer {

    private final Client from;
    private final Client to;
    private final double value;

    public Transfer(Client from, Client to, double value) {
        this.from = from;
        this.to = to;
        this.value = value;
    }

    public void execute() {
        from.getAccount().transfer(value, to);
        to.getAccount().receiveTransfer(value, from);
    }
}
