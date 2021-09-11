package com.bank.application;

import static org.junit.jupiter.api.Assertions.*;

import com.bank.domain.client.Client;
import com.bank.infrastructure.storage.memory.ClientMemoryRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class ClientServiceTest {

    ClientService service;

    @BeforeEach
    public void setupClientService() {
        service = new ClientService(new ClientMemoryRepository());
    }

    @Test
    public void testCreateClient() {
        Client client = service.createClient("Carlos", "12345678911", "carlos@email.com");
        assertEquals(0, client.getAccount().getBalance());
    }

    @Test
    public void testGetClient() {
        Client client = service.createClient("Carlos", "12345678911", "carlos@email.com");
        Client existingClient = service.getClient(client.getKey());
        assertEquals(client.getName(), existingClient.getName());
        assertEquals(client.getCpf(), existingClient.getCpf());
        assertEquals(client.getEmail(), existingClient.getEmail());
        assertEquals(client.getAccount().getBalance(), existingClient.getAccount().getBalance());
    }

    @Test
    public void testDeposit() {
        Client client = service.createClient("Carlos", "12345678911", "carlos@email.com");
        service.deposit(client.getKey(), 50);
        assertEquals(50, client.getAccount().getBalance());
    }

    @Test
    public void testWithdraw() {
        Client client = service.createClient("Carlos", "12345678911", "carlos@email.com");
        service.deposit(client.getKey(), 50);
        service.withdraw(client.getKey(), 28);
        assertEquals(22, client.getAccount().getBalance());
    }

    @Test
    public void testTransfer() {
        Client clientFrom = service.createClient("Carlos", "12345678911", "carlos@email.com");
        Client clientTo = service.createClient("Jose", "78945612399", "jose@email.com");
        service.deposit(clientFrom.getKey(), 100);
        service.transfer(clientFrom.getKey(), clientTo.getKey(), 75);
        assertEquals(25, clientFrom.getAccount().getBalance());
        assertEquals(75, clientTo.getAccount().getBalance());
    }

}
