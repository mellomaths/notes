package com.bank.domain.client;

public interface ClientRepository {

    void save(Client client);

    Client getClient(String key);

}
