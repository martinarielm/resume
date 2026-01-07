import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mockedJobs from "./data/jobs.js";

const typeDefs = `#graphql
  type Job {
    id: Int
    company: String
    position: String
    dates: [String]
    features: [String]
    skills: [String]
  }

  type Query {
    jobs: [Job]
    health: String
  }
`;

const resolvers = {
  Query: {
    jobs: () => mockedJobs,
    health: () => "ok",
  },
};

async function start() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 5000 },
  });
  // eslint-disable-next-line no-console
  console.log(`GraphQL server running at ${url}`);
}

start();
