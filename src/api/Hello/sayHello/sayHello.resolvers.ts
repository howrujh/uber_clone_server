import { SayHelloResponse} from './../../../types/graph.d';
const resolvers = {
    Query: {
        sayHello: (_, args):SayHelloResponse=> {
            return {
                text: `Hey hello ${args.name}`,
                error: false
            }
        }
    }
};

export default resolvers;