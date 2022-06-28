---
sidebar_position: 1
---

# Quickstart

## Installing an HA kubernetes cluster with calico as CNI

Here `kubernetes:v1.24.0` and `calico:v3.22.1` are the cluster images in the registry which are fully compatible with OCI standard. Wonder if we can use flannel instead? Of course!

```shell
# Download and install sealos. sealos is a golang binary so you can just download and copy to bin. You may also download it from release page.
$ wget -c https://sealyun-home.oss-cn-beijing.aliyuncs.com/sealos-4.0/latest/sealos-amd64 -O sealos && \
    chmod +x sealos && mv sealos /usr/bin
# Create a cluster
$ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1 \
     --masters 192.168.64.2,192.168.64.22,192.168.64.20 \
     --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]
```

## Building a custom cluster image

See [Building an Example CloudImage](./build-example-cloudimage.md).

## Storage, message queue, database, etc.

Don't be shocked by the following:

```shell
$ sealos run labring/helm:v3.8.2 # install helm
$ sealos run labring/openebs:v1.9.0 # install openebs
$ sealos run labring/minio-operator:v4.4.16 labring/ingress-nginx:4.1.0 \
   labring/mysql-operator:8.0.23-14.1 labring/redis-operator:3.1.4 # oneliner
```

And now everything is ready.
