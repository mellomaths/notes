from diagrams import Cluster, Diagram
from diagrams.aws.compute import ECS
from diagrams.aws.database import ElastiCache, RDS
from diagrams.aws.network import ELB
from diagrams.onprem.database import PostgreSQL
from diagrams.onprem.queue import Kafka

with Diagram("Cinema - Services", show=False, direction="TB", outformat="jpg", filename="cinema_services"):
    lb = ELB("Load Balancer")

    with Cluster("Customers Services"):
        customers_services = [ECS("Instance 1")]
    
    with Cluster("Catalog Services"):
        catalog_services = [ECS("Instance 1")]

    with Cluster("Orders Services"):
        orders_services = [ECS("Instance 1")]

    with Cluster("Payments Services"):
        payments_services = [ECS("Instance 1")]

    with Cluster("Push Notifications Services"):
        push_notifications_services = [ECS("Instance 1")]

    with Cluster("Email Services"):
        email_services = [ECS("Instance 1")]

    with Cluster("DB Cluster"):
        db_primary = PostgreSQL("Postgres Instance")
        db_primary - [RDS("Customers Schema"),
                      RDS("Catalog Schema"),
                      RDS("Orders Schema"),
                      RDS("Payments Schema")]

    kafka = Kafka("Kafka")

    

    lb >> customers_services
    lb >> catalog_services
    lb >> orders_services
    lb >> payments_services
    lb >> push_notifications_services
    lb >> email_services

    customers_services >> db_primary
    catalog_services >> db_primary
    orders_services >> db_primary
    payments_services >> db_primary

    customers_services >> kafka
    catalog_services >> kafka
    orders_services >> kafka
    payments_services >> kafka
    push_notifications_services >> kafka
    email_services >> kafka
