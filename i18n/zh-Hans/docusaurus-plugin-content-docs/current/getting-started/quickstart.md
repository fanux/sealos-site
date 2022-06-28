---
sidebar_position: 1
---

# 快速开始

## 安装一个高可用的 Kubernetes 集群，并用 calico 作为网络插件

这里的 `kubernetes:v1.24.0` 和 `calico:v3.22.1` 就是存在 registry 里的集群镜像，完全兼容 OCI 标准, 当然聪明同学立马想到是不是可以用 flannel，答案是当然！

```shell
# 下载并安装sealos, sealos是个golang的二进制工具，直接下载拷贝到bin目录即可, release页面也可下载
$ wget -c https://sealyun-home.oss-cn-beijing.aliyuncs.com/sealos-4.0/latest/sealos-amd64 -O sealos && \
    chmod +x sealos && mv sealos /usr/bin
# 创建一个集群
$ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1 \
     --masters 192.168.64.2,192.168.64.22,192.168.64.20 \
     --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]
```

## 构建一个自定义集群镜像

见 [构建一个 Ingress 集群镜像](./build-example-cloudimage.md)。

## 存储/消息/数据库等

接下来请不要震惊：

```shell
$ sealos run labring/helm:v3.8.2 # 安装helm
$ sealos run labring/openebs:v1.9.0 # 安装openebs
$ sealos run labring/minio-operator:v4.4.16 labring/ingress-nginx:4.1.0 \
   labring/mysql-operator:8.0.23-14.1 labring/redis-operator:3.1.4 # 喜欢的话可以把它们写一起
```

然后你就啥都有了。
