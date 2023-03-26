const { ApolloServer, gql } = require('apollo-server-cloud-functions');
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');
const mongoose = require('mongoose');

// Get the schema and resolvers
const typeDefs = require('./src/typeDefs');
const resolvers = require('./src/resolvers');

const MONGODB = process.env.MONGODB

mongoose.connect(MONGODB, {useNewUrlParser: true}).then(() => {
  console.log("Connected to MongoDB");
});

// Create the server
const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true,
	cache: 'bounded',
	plugins: [
	  ApolloServerPluginLandingPageLocalDefault({ embed: true }),
	],
});
  
// Export the server
exports.handler = server.createHandler();