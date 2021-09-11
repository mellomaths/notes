package com.bank.application;

import com.bank.domain.client.Client;
import com.bank.domain.client.ClientRepository;
import com.bank.domain.client.Transfer;

public class ClientService {

    private final ClientRepository repository;

    public ClientService(ClientRepository repository) {
        this.repository = repository;
    }

    public Client createClient(String name, String cpf, String email) {
        Client client = new Client(name, cpf, email);
        this.repository.save(client);
        return client;
    }

    public Client getClient(String key) {
        return this.repository.getClient(key);
    }

    public void deposit(String clientKey, double value) {
        Client client = getClient(clientKey);
        client.getAccount().deposit(value);
        this.repository.save(client);
    }

    public void withdraw(String clientKey, double value) {
        Client client = getClient(clientKey);
        client.getAccount().withdraw(value);
        this.repository.save(client);
    }

    public void transfer(String clientKeyFrom, String clientKeyTo, double value) {
        Client clientFrom = getClient(clientKeyFrom);
        Client clientTo = getClient(clientKeyTo);
        Transfer transfer = new Transfer(clientFrom, clientTo, value);
        transfer.execute();
        this.repository.save(clientFrom);
        this.repository.save(clientTo);
    }

}
