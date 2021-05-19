sleep '25'
echo "Login: $COUCHDB_USER:$COUCHDB_PASSWORD"
echo "Host: http://couchdb:$COUCHDB_PORT/"
echo "Database: $COUCHDB_DATABASE"
curl -u $COUCHDB_USER:$COUCHDB_PASSWORD -X PUT http://couchdb:$COUCHDB_PORT/_users
curl -u $COUCHDB_USER:$COUCHDB_PASSWORD -X PUT http://couchdb:$COUCHDB_PORT/$COUCHDB_DATABASE
