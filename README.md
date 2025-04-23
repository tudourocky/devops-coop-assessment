## Requirements

Docker
Docker Compose
Nginx
No service running on port 3000

## Commands

Command to run is as follows

docker compose up --build -d

And you can bring down the instances by running

docker compose down

## Expensive endpoint

The expensive endpoint is the /get-number endpoint as it computes the largest number within the list