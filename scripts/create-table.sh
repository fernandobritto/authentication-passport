aws dynamodb delete-table \
  --table-name Customers \
  --endpoint-url http://localhost:4566

aws dynamodb create-table \
  --table-name Customers \
  --endpoint-url http://localhost:4566 \
  --attribute-definitions AttributeName=id,AttributeType=S AttributeName=name,AttributeType=S \
  --key-schema AttributeName=id,KeyType=HASH AttributeName=name,KeyType=RANGE \
  --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

aws dynamodb list-tables \
  --endpoint-url http://localhost:4566
