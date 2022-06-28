---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 安装

## 安装 buildah

<Tabs groupId="arch">
  <TabItem value="amd64" label="amd64" default>

```shell
$ wget https://sealyun-home.oss-accelerate.aliyuncs.com/images/buildah.linux.amd64 --no-check-certificate -O buildah
$ chmod a+x buildah && mv buildah /usr/bin
```

  </TabItem>
  <TabItem value="arm64" label="arm64">

```shell
$ wget https://sealyun-home.oss-accelerate.aliyuncs.com/images/buildah.linux.arm64 --no-check-certificate -O buildah
$ chmod a+x buildah && mv buildah /usr/bin
```

  </TabItem>
</Tabs>

## 安装 sealos

<Tabs groupId="arch">
  <TabItem value="amd64" label="amd64" default>

```shell
$ wget -c https://sealyun.oss-cn-beijing.aliyuncs.com/sealos-4.0/latest/sealos-amd64 -O sealos && \
chmod +x sealos && mv sealos /usr/bin
```

  </TabItem>
  <TabItem value="arm64" label="arm64">

```shell
$ wget -c https://sealyun.oss-cn-beijing.aliyuncs.com/sealos-4.0/latest/sealos-arm64 -O sealos && \
chmod +x sealos && mv sealos /usr/bin
```

  </TabItem>
</Tabs>
