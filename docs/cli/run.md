import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run a kubernetes cluster or applications

## Run calico

```shell
$ sealos run labring/kubernetes:v1.24.0 \
  labring/calico:v3.22.1 \
--masters 192.168.64.2,192.168.64.22,192.168.64.20 \
--nodes 192.168.64.21,192.168.64.19 -p your-ssh-passwd
```

## Run openebs

```shell
$ sealos run labring/kubernetes:v1.24.0 \
  --masters 192.168.64.2,192.168.64.22,192.168.64.20  \
  --nodes 192.168.64.21,192.168.64.19 -p your-ssh-passwd
$ sealos run labring/calico:v3.22.1
$ sealos run labring/openebs:3.1.0
```

## Overwrite application CMD

--cmd will overwrite the cmd in Kubefile(Dockerfile)

```shell script
sealos run labring/mysql-operator:8.0.23-14.1 --cmd "kubectl apply -f ."
```