package com.bank.infrastructure.storage.memory;

import com.bank.domain.client.Client;
import com.bank.domain.client.ClientRepository;

import java.util.HashMap;
import java.util.Map;

public class ClientMemoryRepository implements ClientRepository {

    private final Map<String, Client> clients = new HashMap<String, Client>();

    @Override
    public void save(Client client) {
        this.clients.put(client.getKey(), client);
    }

    @Override
    public Client getClient(String key) {
        return this.clients.get(key);
    }
}
