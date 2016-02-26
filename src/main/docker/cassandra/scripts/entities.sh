#!/bin/bash

echo "USE WebOauthClient;" > create-entities.cql
cat /cql/*_added_entity_*.cql >> create-entities.cql

cqlsh -f create-entities.cql
