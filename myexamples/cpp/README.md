# GRPC My Test examples

## Hello World!

Goto `rules_proto_grpc`
```sh
bazel build myexamples/cpp/example/helloworld/...
```

Run Server
```sh
bazel run myexamples/cpp/example/helloworld:greeter_server
```

[In a new terminal]
Run Client
```sh
bazel run myexamples/cpp/example/helloworld:greeter_client
```

