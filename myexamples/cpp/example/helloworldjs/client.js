const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("proto/helloworld.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const helloworld = grpcObject.helloworld;

const text = process.argv[2];

const client = new helloworld.Greeter("localhost:50051", 
grpc.credentials.createInsecure())
console.log(text)

client.SayHello({
    "name": text
}, (err, response) => {

    console.log("Revied SayHelo from Server")
    console.log(response.message);
})