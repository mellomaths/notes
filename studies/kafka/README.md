# Kafka 

## Introduction 

Apache Kafka is a framework implementation of a software bus using stream-processing. It is an open-source software platform developed by the Apache Software Foundation written in Scala and Java.

Based on the commit log, Kafka allows users to subscribe to it and publish data to any number of systems or real-time applications. Example applications include managing passenger and driver matching at Uber, providing real-time analytics and predictive maintenance for British Gas smart home, and performing numerous real-time services across all of LinkedIn.

## Architecture

Kafka stores key-value messages that come from arbitrarily many processes called producers. The data can be partitioned into different "partitions" within different "topics". Within a partition, messages are strictly ordered by their offsets (the position of a message within a partition), and indexed and stored together with a timestamp. Other processes called "consumers" can read messages from partitions.

![Kafka's Architecture](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Overview_of_Apache_Kafka.svg/1280px-Overview_of_Apache_Kafka.svg.png)

Kafka runs on a cluster of one or more servers (called brokers), and the partitions of all topics are distributed across the cluster nodes. Additionally, partitions are replicated to multiple brokers. This architecture allows Kafka to deliver massive streams of messages in a fault-tolerant fashion and has allowed it to replace some of the conventional messaging systems like Java Message Service (JMS), Advanced Message Queuing Protocol (AMQP), etc.

### Types of Topics

#### Regular

Regular topics can be configured with a retention time or a space bound. If there are records that are older than the specified retention time or if the space bound is exceeded for a partition, Kafka is allowed to delete old data to free storage space. By default, topics are configured with a retention time of 7 days, but it's also possible to store data indefinitely. 

#### Compacted

For compacted topics, records don't expire based on time or space bounds. Instead, Kafka treats later messages as updates to older message with the same key and guarantees never to delete the latest message per key. Users can delete messages entirely by writing a so-called tombstone message with null-value for a specific key.

### Kafka APIs

There are five major APIs in Kafka:

- Producer API: Permits an application to publish streams of records.
- Consumer API: Permits an application to subscribe to topics and processes streams of records.
- Connector API: Executes the reusable producer and consumer APIs that can link - the topics to the existing applications.
- Streams API: This API converts the input streams to output and produces the result.
- Admin API: used to manage Kafka topics, brokers and other Kafka objects.

### Zookeeper's role in Kafka's Architecture

Zookeeper acts as a centralized service and used for maintaining configuration information, naming , providing distributed synchronization and providing group services. Coordination services are notoriously hard to get right. They are especially prone to errors such as race conditions and deadlock. The motivation behind ZooKeeper is to relieve distributed applications the responsibility of implementing coordination services from scratch. The service itself is distributed and highly reliable.

![Zookeeper role in Kafka's Architecture](https://miro.medium.com/max/700/1*c-NitozGuevoN-rYY8Jwew.png)


Here are the list of some responsibilities of Zookeeper in the Architecture:
- Choose a single broker to serve as the active controller.
- Configurate topics, including the list of existing topics, the number of partitions for each topic, the location of all the replicas, list of configuration overrides for all topics and which node is the preferred leader, etc.
- Maintain the access control lists or ACLs for all the topics.
- Keep track of the list of all the brokers that are functioning at any given moment and are a part of the cluster.

Observation: The active controller is responsible for state management of partitions and replicas. For example if there are 10 brokers, there will be one broker which acts as a controller. Controller has the responsibility to maintain the leader-follower relationship across all the partitions. If a node is about to fail, message will be given (by controller) to other partition replicas in other brokers to be as a partition leaders to fulfill the responsibility of the partitions in the node that is about to fail. So when a node shuts down, new controller can be elected at any time to fulfill the duties.

## Commands 

### Starting Zookeeper

*Default port: 2181*

```
bin/zookeeper-server-start.sh config/zookeeper.properties
```

### Starting Kafka

*Default port: 9092*

```
bin/kafka-server-start.sh config/server.properties
```

### Creating a new topic

```
bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test
```

### Changing the number of partitions of a topic

```
bin/kafka-topics.sh --alter --bootstrap-server localhost:9092 --topic test --partitions 3
```

### Listing all existing topics

```
bin/kafka-topics.sh --list --bootstrap-server localhost:9092
```

### Describing details of all existing topics

```
bin/kafka-topics.sh --describe --bootstrap-server localhost:9092
```

### Producing a new message into a topic

```
bin/kafka-console-producer.sh --broker-list --bootstrap-server localhost:9092 --topic test
```

### Consuming a topic

```
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test
```

### Consuming a topic from beginning

```
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning
```

### Describing all consumer groups

```
bin/kafka-consumer-groups.sh --all-groups --bootstrap-server localhost:9092 --describe
```
