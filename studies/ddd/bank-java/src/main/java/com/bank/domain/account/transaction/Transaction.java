package com.bank.domain.account.transaction;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Transaction {

    protected TransactionType type;
    protected double value;
    protected String description;
    protected String date;

    public Transaction(TransactionType type, double value, String description) {
        this.type = type;
        this.value = value;
        this.description = description;
        Date date = Calendar.getInstance().getTime();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        this.date = dateFormat.format(date);
    }

    public Transaction(TransactionType type, double value, String description, String date) {
        this.type = type;
        this.value = value;
        this.description = description;
        this.date = date;
    }

    public static Transaction createDeposit(double value) {
        return new Transaction(TransactionType.DEPOSIT, value, null);
    }

    public static Transaction createWithdraw(double value) {
        return new Transaction(TransactionType.WITHDRAW, value, null);
    }

    public static Transaction createTransference(double value, String description) {
        return new Transaction(TransactionType.TRANSFERENCE, value, description);
    }

    public String getType() {
        return type.toString();
    }

    public double getValue() {
        return value;
    }

    public String getDescription() {
        return description;
    }

    public String getDate() {
        return date;
    }

}
