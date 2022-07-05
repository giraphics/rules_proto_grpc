# GRPC My Test examples

## Hello World!

Goto `rules_proto_grpc`
```sh
bazel build myexamples/cpp/example/helloworld/...
```

Run C++ Server
```sh
bazel run myexamples/cpp/example/helloworld:greeter_server
```

[In a new terminal]
Run C++ Client
```sh
bazel run myexamples/cpp/example/helloworld:greeter_client
```

Run JS Server
```sh
npm install
node server.js
```

[In a new terminal]
Run JS Client
```sh
node client.js
```

