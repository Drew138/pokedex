#!/bin/bash

# initial node
sudo docker swarm init

sudo docker service create --name pokedex --replicas 10 -p 80:80 drew138/express-pokedex

sudo docker swarm join-token manager


# check service
sudo docker service ps pokedex
