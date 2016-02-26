CREATE KEYSPACE IF NOT EXISTS WebOauthClient
    WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 }
    AND DURABLE_WRITES = true;
