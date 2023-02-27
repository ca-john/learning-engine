import { gql } from 'graphql-tag';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import mongoose, { ConnectOptions } from 'mongoose';

import {
	startServerAndCreateLambdaHandler,
	handlers,
  } from '@as-integrations/aws-lambda';

// Construct a schema, using GraphQL schema language
import typeDefs from './src/typeDefs';

// Provide resolver functions for the schema fields
import resolvers from './src/resolvers';

const MONGODB :string = process.env.MONGODB!;


mongoose.connect(MONGODB, { useNewUrlParser: true } as ConnectOptions).then(() => {
	console.log("mongodb connection successful.");
});


const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true,
	cache: 'bounded',
	plugins: [
		ApolloServerPluginLandingPageLocalDefault({ embed: true }),
	],
});


// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });

// console.log(`🚀  Server ready at: ${url}`);



// Passing an ApolloServer instance to the `startServerAndCreateLambdaHandler` function:
exports.handler = server.createHandler();