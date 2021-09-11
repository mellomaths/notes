package com.bank.domain.account;

import static org.junit.jupiter.api.Assertions.*;

import com.bank.domain.account.transaction.Transaction;
import com.bank.domain.client.Client;
import com.bank.domain.exceptions.AccountWithNoBalanceException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

public class AccountTest {

    Account account;

    @BeforeEach
    public void setupAccount() {
        account = new Account();
    }

    @Test
    public void testNewAccount() {
        assertEquals(0, account.getBalance());
        assertEquals(0, account.getHistory().count());
    }

    @Test
    public void testDeposit() {
        account.deposit(50);
        assertEquals(50, account.getBalance());
        assertEquals(1, account.getHistory().count());
        Transaction transaction = account.getHistory().getLastTransaction();
        assertEquals("DEPOSIT", transaction.getType());
        assertEquals(50, transaction.getValue());
        assertNull(transaction.getDescription());
    }

    @Test
    public void testWithdraw() {
        account.deposit(50);
        account.withdraw(30);
        assertEquals(20, account.getBalance());
        assertEquals(2, account.getHistory().count());
        Transaction transaction = account.getHistory().getLastTransaction();
        assertEquals("WITHDRAW", transaction.getType());
        assertEquals(30, transaction.getValue());
        assertNull(transaction.getDescription());
    }

    @Test
    public void testWithdrawWithNoBalance() {
        assertThrows(AccountWithNoBalanceException.class, () -> account.withdraw(25));
        assertEquals(0, account.getHistory().count());
        assertNull(account.getHistory().getLastTransaction());
    }

    @Test
    public void testTransfer() {
        account.deposit(50);
        account.transfer(10, new Client("Carlos", "12345678911", "carlos@email.com"));
        assertEquals(40, account.getBalance());
        assertEquals(2, account.getHistory().count());
        Transaction transaction = account.getHistory().getLastTransaction();
        assertEquals("TRANSFERENCE", transaction.getType());
        assertEquals(10, transaction.getValue());
        assertNotNull(transaction.getDescription());
    }

    @Test
    public void testTransferWithNoBalance() {
        Client clientTo = new Client("Carlos", "12345678911", "carlos@email.com");
        assertThrows(AccountWithNoBalanceException.class, () -> account.transfer(10, clientTo));
        assertEquals(0, account.getHistory().count());
        assertNull(account.getHistory().getLastTransaction());
    }

    @Test
    public void testReceiveTransfer() {
        Client clientFrom = new Client("Carlos", "12345678911", "carlos@email.com");
        account.receiveTransfer(28, clientFrom);
        assertEquals(28, account.getBalance());
        assertEquals(1, account.getHistory().count());
        Transaction transaction = account.getHistory().getLastTransaction();
        assertEquals("TRANSFERENCE", transaction.getType());
        assertEquals(28, transaction.getValue());
        assertNotNull(transaction.getDescription());
    }

    @Test
    public void testMultipleTransactions() {
        Client client = new Client("Carlos", "12345678911", "carlos@email.com");
        account.deposit(50);
        account.withdraw(20);
        account.receiveTransfer(50, client);
        assertEquals(80, account.getBalance());
        assertEquals(3, account.getHistory().count());

        Transaction transaction = account.getHistory().getLastTransaction();
        assertEquals("TRANSFERENCE", transaction.getType());
        assertEquals(50, transaction.getValue());
        assertNotNull(transaction.getDescription());

        List<Transaction> transactions = account.getHistory().getTransactions();
        Transaction firstTransaction = transactions.get(0);
        assertEquals("DEPOSIT", firstTransaction.getType());
        assertEquals(50, firstTransaction.getValue());
        assertNull(firstTransaction.getDescription());

        Transaction secondTransaction = transactions.get(1);
        assertEquals("WITHDRAW", secondTransaction.getType());
        assertEquals(20, secondTransaction.getValue());
        assertNull(secondTransaction.getDescription());
    }

}
