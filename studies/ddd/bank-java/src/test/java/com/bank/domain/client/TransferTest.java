package com.bank.domain.client;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class TransferTest {

    Client clientFrom;
    Client clientTo;

    @BeforeEach
    public void setupClients() {
        clientFrom = new Client("Carlos", "12345678911", "carlos@email.com");
        clientTo = new Client("Jose", "78945612399", "jose@email.com");
    }

    @Test
    public void testNewTransfer() {
        clientFrom.getAccount().deposit(75);
        Transfer transfer = new Transfer(clientFrom, clientTo, 50);
        transfer.execute();
        assertEquals(25, clientFrom.getAccount().getBalance());
        assertEquals(50, clientTo.getAccount().getBalance());
    }

}
