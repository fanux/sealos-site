# AthenaServing AI推理服务化框架

## 框架介绍


`AthenaServing` AI推理服务框架依托科大讯飞多年的AI算法引擎云服务化经验及云原生的不断探索实践,不仅可以满足引擎云服务化后,服务的稳定性,也可以通过`AthenaServing`享受到相关云原生组件的方便与快捷。AI算法引擎开发者可以专注于算法的演进与研究,无需分心进行硬件资源的管理及云服务化的诸多开发运维工作。

目前部署 `AthenaServing` 需要开发者掌握一定的K8s、helm 等相关知识，且安装部署依赖在线镜像仓库和 helm repo，在离线环境、各式各样的操作系统部署的需求面前有些乏力，sealos 以其`集群镜像`、`images-shim`等方案让应用可以让离线部署变得非常丝滑，无需任何额外操作，sealos 支持了 `AthenaServing` 集群镜像后，让任何人在任何场景、任何环境无障碍交付 `AthenaServing` , 仅需一条命令即可拉起一个 `AthenaServing` 环境。用户可以在 `AthenaServing`框架上集中部署自己的AI能力，对外提供HTTP API

## 框架架构


![img](https://github.com/iflytek/proposals/blob/main/athenaloader/athena.png?raw=true)


## 框架安装

### 前置条件

准备一台测试机(4c8G),硬盘>=20G即可


### 安装

1. 安装sealos.4.0

``` wget -c https://sealyun-home.oss-cn-beijing.aliyuncs.com/sealos-4.0/latest/sealos-amd64 -O sealos &&  chmod +x sealos && mv sealos /usr/bin```

  

2. 创建集群

* ```sealos run labring/kubernetes:v1.19.16 labring/calico:v3.22.1   --masters 192.168.64.2 -p <password>```

![img](imgs/sealos4-run-k8s.png)
![img2](imgs/sealos4-run-k8s-2.png)
![img2](imgs/sealos4-run-k8s-3.png)

* ```sealos run labring/helm:v3.8.2 # install helm```
* ```sealos run labring/openebs:v1.9.0 # install openebs```
* ```sealos run labring/athena_serving:v2.0.0rc1```
* ```sealos run labring/demo_mmocr:v3.1```

3. 调用AI demo能力 MMOCR能力


## 集成接入新AI能力

新的AI能力，需要您按照加载器规范，开发并构建出您的 AI能力镜像，之后即可部署到集群