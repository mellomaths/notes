package com.bank.domain.client;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class ClientTest {

    Client client;

    @BeforeEach
    public void setupClient() {
        client = new Client("Carlos", "12345678911", "carlos@email.com");
    }

    @Test
    public void testNewClient() {
        assertNotNull(client.getAccount());
        assertEquals("" + "12345678911".hashCode(), client.getKey());
    }

}
