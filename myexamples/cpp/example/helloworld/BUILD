load("@rules_cc//cc:defs.bzl", "cc_binary", "cc_library", "cc_test")
load("//cpp:defs.bzl", "cpp_grpc_library")

package(default_visibility = ["//visibility:public"])

cpp_grpc_library(
    name = "helloworld",
    protos = ["//myexamples/cpp/example/helloworldjs/proto:helloworld_proto"],
)

cc_binary(
    name = "greeter_client",
    srcs = ["greeter_client.cc"],
    deps = [":helloworld"],
)

cc_binary(
    name = "greeter_server",
    srcs = ["greeter_server.cc"],
    deps = [":helloworld"],
)
