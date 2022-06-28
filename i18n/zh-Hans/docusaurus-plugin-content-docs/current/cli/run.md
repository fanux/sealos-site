import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# sealos run

## 运行 calico

<Tabs groupId="imageNum">
  <TabItem value="single" label="单个镜像" default>

```shell
$ sealos run labring/oci-kubernetes-calico:1.24.0-amd64  \
 --masters 192.168.64.2,192.168.64.22,192.168.64.20 \
 --nodes 192.168.64.21,192.168.64.19
```

  </TabItem>
  <TabItem value="multiple" label="多个镜像">

```shell
$ sealos run labring/kubernetes:v1.24.0 \
  labring/calico:v3.22.1 \
--masters 192.168.64.2,192.168.64.22,192.168.64.20 \
--nodes 192.168.64.21,192.168.64.19
```

  </TabItem>
</Tabs>

## 运行 openebs

<Tabs groupId="imageNum">
  <TabItem value="single" label="单个镜像" default>

```shell
$ sealos run labring/oci-kubernetes-calico-openebs:1.24.0-amd64  \
 --masters 192.168.64.2,192.168.64.22,192.168.64.20 \
 --nodes 192.168.64.21,192.168.64.19
```

  </TabItem>
  <TabItem value="multiple" label="多个镜像">

```shell
$ sealos run labring/kubernetes:v1.24.0 \
  --masters 192.168.64.2,192.168.64.22,192.168.64.20  \
  --nodes 192.168.64.21,192.168.64.19
$ sealos run labring/calico:v3.22.1
$ sealos run labring/openebs:3.1.0
```

  </TabItem>
</Tabs>
