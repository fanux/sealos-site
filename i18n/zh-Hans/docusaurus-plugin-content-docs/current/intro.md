---
sidebar_position: 1
---

# 介绍

## sealos 是什么

**sealos 是以 Kubernetes 为内核的云操作系统发行版**

早期单机操作系统也是分层架构，后来才演变成 linux windows 这种内核架构，云操作系统从容器诞生之日起分层架构被击穿，未来也会朝着高内聚的"云内核"架构迁移

![](https://user-images.githubusercontent.com/8912557/162092037-82b1fc5b-cf55-4224-8266-c1c6a989a602.png)

- 从现在开始，把你数据中心所有机器想象成一台"抽象"的超级计算机，sealos 就是用来管理这台超级计算机的操作系统，Kubernetes 就是这个操作系统的内核！
- 云计算从此刻起再无 IaaS PaaS SaaS 之分，只有云操作系统驱动(CSI CNI CRI 实现) 云操作系统内核(Kubernetes) 和 分布式应用组成

### 核心能力

- 集群镜像 - 实现整个集群的 Build Ship Run，把 docker 的理念衍生到集群纬度，实现任意分布式软件的自由定义一键运行
- hub.sealos - 集群镜像仓库，这里你可以找到绝大多数已经制作好的分布式应用如 Kubernetes 基础集群镜像，pgsql 高可用集群镜像，minio 高可用集群镜像等
- desktop.sealos - 云操作系统的桌面，并非传统意义上的云桌面，它长得像 macOS 但是管理的集群和分布式应用
- 分布式应用矩阵 - 也就是各种你需要用的存储/网络/高可用数据库/消息队列/监控等，所有这些只需要点下鼠标或者 sealos run 即可获得

## sealos 愿景

- 让所有企业使用基于 Kubernetes 的云操作系统像使用 macOS 一样简单
- 让任何人都可以用一条命令或动动鼠标即可构建复杂的云服务
- 让所有企业只需要雇佣一个实习生即可维护整个云
- 让所有企业能拥有更开放的 AWS, 公有云与私有云可以有完全一致性的体验
- 让任何分布式软件都可以一键在系统中运行并实现自运维

## sealos 能干啥

- 对集群生命周期进行管理，一键安装高可用 Kubernetes 集群，增删节点清理集群自恢复等
- 通过 sealos hub 下载和使用完全兼容 OCI 标准的各种分布式软件如 openebs,minio,ingress,pgsql,mysql,redis 等
- 通过 sealos desktop 像使用 macOS 一样管理整个集群，以及管理系统上跑的分布式应用
- sealos 可以管理 Kubernetes 但并不是一个 Kubernetes 管理器, 而是一个抽象的云操作系统。要管理 Kubernetes 下载一个对应管理应用即可。
- sealos 可以安装 Kubernetes 但是并不是一个安装工具，安装只是 sealos 的一个 boot 的最基本的能力。

## sealos 适合谁用

- 小白用户 - 针对小白连 Kubernetes 单词也不会拼写的人也可以通过命令或者图形界面完全无障碍使用 sealos，获取一些需要的软件，如点击一下即可获得一个高可用数据库。
- SaaS 应用开发者 - 你可能需要的也是一个数据库,一个高可用消息队列或者一个开发环境，一条命令即可让你获得所需要的服务。你也不想关心底层如何实现，你只要结果。
- 集群维护者 - 你可能很懂 Kubernetes，sealos 市场里提供各种管理应用如 lens 官方 dashboard 等等，针对极客还提供 webterminal, 各种云原生生态软件监控系统也是信手拈来。
- 云操作系统开发者 - 你可能很擅长 operator 开发，那么恭喜你可以编写 sealos 的应用，并提交到 sealos hub 上供其他所有用户使用你的产品。
- 私有云交付人员 - sealos 集群镜像机制可以保证在离线环境中的高度一致性，是私有云交付之王，也能极好的封装 SaaS 应用，实现一键交付到客户环境中。
- 企业用户 - 你可以直接使用 sealos 公有云服务，也可以分钟级在自己的机房中运行出一个一模一样的私有云为整个企业提供服务, 还可以把 sealos 运行到各大公有云 IaaS 上，再也不用受厂商绑定之苦，想切就切。

## sealos 为什么不一样

### Kubernetes 是手段不是目的

对于大众用户来说 Kubernetes 并不重要，重要的是 Kubernetes 上面跑了什么东西，这些东西才是用户最终关心的，中间过程并不关心。
当然熟悉 Kubernetes 的极客不用担心，你同样会有非常好的使用体验。

### 化整为零，不同的应用，不同的形态

sealos 最简单的版本几乎不包含任何东西，除了最最基本的集群镜像的能力，其它能力几乎都是通过应用云扩展的，最基础的 sealos 除了一个很"裸"的 kuberentes 不包含其他任何东西。
这使得 sealos 可以很简单，也可以很强大，可以个人使用，也可以服务公有云这种庞大的多租户应用场景，可以在一台机器上玩，也可以在数千台服务器上大规模运行。

### 包容性

意味着不管你是什么样的喜好都可以在 sealos 上得到完美使用体验，比如以 CI/CD 场景为例，有些用户喜欢 drone 有些喜欢 argo，这两类用户只需要自己安装不同应用即可，sealos 不会深度集成某一款 CI/CD 工具
用户自由的安装卸载。

sealos 不会追求系统上分布式应用风格的统一，就像 macOS 上的 office 软件和 Email 软件不可能一致一样，这样的好处是给不同的分布式软件最大发挥空间，不然 sealos 会花非常大的代价让他们统一，一旦某个技术
被淘汰意味着极大的替换成本。

sealos 也不会追求各种软件账户信息的统一，因为不同的分布式软件有不同账户管理方式，这些管理方式对其应用自身的适配性是最强的。

### 不同的用户不同的使用方式

和 macOS 很类似，普通大众用户用图形界面，开发者终端敲敲命令，系统应用开发者调用 system API
sealos 的大众用户用 GUI 或者简单的一键使用，云原生从业者 kubectl 各种 dashboard 所有 apiserver, 开发者直接基于 Kubernetes 开发 operator

### 简单不失强大

sealos 提供的是最基础的系统框架，其强大的能力都由上层应用提供，sealos 的职责是管理好这些应用，所以系统复杂度不会随着功能的增加而变复杂。

## sealos 实践案例

Boss：我司需要紧跟云原生浪潮，需要构建一个基于 Kubernetes 云平台，要有存储，要有 paas，要有 ci/cd，还要有云开发，还要有数据库，还要有。。。xx 总监你来评估一下成本

CTO(掰掰手指头): Kubernetes 3 人，存储专家 1 人，开发 1 人，paas 3 人， ci/cd 3 人， 云开发 5 人， 运维 3 人。。。 老板我仅需要 15 人 给我半年就做出来！

众人议论纷纷，此时角落传来一个声音：

小张(默默举手): 我了解一个开源软件，貌似一键就可以搞定，小张共享了一下屏幕，默默敲下：

```shell script
sealos run labring/kubernetes:v1.24.0 labring/openebs:v1.9.0 labring/mysql:v8.0 labring/minio:v4.4.16 labring/ingress:v4.1.0 labring/laf:v0.8.0
       -m 192.168.0.2 -n 192.168.0.3 -p 123456
```

会没结束，任务完成。。。

后面的故事大家都知道了，除了小张 CTO 往下都被裁了。。。

## 其他链接

- [贡献指南](developers/contributing.md)
- [开发指南](developers/developguide.md)
- [sealos 3.0（旧版）](https://github.com/labring/sealos/tree/release-v3.3.9#readme) 老版本用户访问这里，4.0 全面掉打老版本，请尽快升级。
- [buildah](https://github.com/containers/buildah) 本着不重复造轮子，sealos 4.0 中使用了大量 buildah 的构建能力，使集群镜像完全兼容容器镜像和 docker registry。
- [sealer](https://github.com/sealerio/sealer) sealos 4.0 中使用了大量 sealer 的能力，使得 Clusterfile 与 sealer 兼容。部分模块中 fork 了 sealer 的代码。
