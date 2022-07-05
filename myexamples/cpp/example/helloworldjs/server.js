const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("proto/helloworld.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const helloworld = grpcObject.helloworld;

const server = new grpc.Server();
server.bind("0.0.0.0:50051",
 grpc.ServerCredentials.createInsecure());

server.addService(helloworld.Greeter.service,
    {
        "SayHello": SayHello,
    });
server.start();

const prefix = "From JS Server: Hello ";
function SayHello (call, callback) {
    const msgRly = {
        "message": prefix + call.request.name
    }
    // console.log("From Server SayHello " + call.request.name)

    callback(null, msgRly);
}

