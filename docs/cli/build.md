import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# sealos build

## Build calico image offline

### Directory structure

```
.
├── Kubefile
├── cni
│   ├── custom-resources.yaml
│   └── tigera-operator.yaml
├── images
│   └── shim
│       └── CalicoImageList
└── registry
    └── docker
        └── registry
```

### Dockerfile

We can build everything into a single image (`FROM labring/kubernetes`), or we can build multiple images where `FROM scratch` is used.

<Tabs groupId="imageNum">
  <TabItem value="single" label="Single image" default>

```dockerfile
FROM labring/kubernetes:v1.24.0-amd64
COPY cni ./cni
COPY images ./images
COPY registry ./registry
CMD ["kubectl apply -f cni/tigera-operator.yaml","kubectl apply -f cni/custom-resources.yaml"]
```

  </TabItem>
  <TabItem value="multiple" label="Multiple images">

```dockerfile
FROM scratch
COPY cni ./cni
COPY images ./images
COPY registry ./registry
COPY manifests ./manifests
CMD ["kubectl apply -f cni/tigera-operator.yaml","kubectl apply -f cni/custom-resources.yaml"]
```

  </TabItem>
</Tabs>

1. `CalicoImageList` is offline image list file.
2. `cni` contains kubectl apply config files.
3. `registry` is the registry data directory.
4. `buildah build -t kubernetes-calico:1.24.0-amd64 --arch amd64 --os linux -f Kubefile .` builds the oci image.
5. `manifests` parse yaml images to offline image list.

## Build calico image online

### Directory structure

```
.
├── Kubefile
├── cni
│   ├── custom-resources.yaml
│   └── tigera-operator.yaml
```

### Dockerfile

<Tabs groupId="imageNum">
  <TabItem value="single" label="Single image" default>

```dockerfile
FROM labring/kubernetes:v1.24.0-amd64
COPY cni ./cni
CMD ["kubectl apply -f cni/tigera-operator.yaml","kubectl apply -f cni/custom-resources.yaml"]
```

  </TabItem>
  <TabItem value="multiple" label="Multiple images">

```dockerfile
FROM scratch
COPY cni ./cni
CMD ["kubectl apply -f cni/tigera-operator.yaml","kubectl apply -f cni/custom-resources.yaml"]
```

  </TabItem>
</Tabs>

1. `cni` contains kubectl apply config files
2. `buildah build -t kubernetes-calico:1.24.0-amd64 --arch amd64 --os linux -f Kubefile .` builds the oci image.

## Build openebs image online

### Directory structure

```
.
├── Kubefile
├── cni
│   ├── custom-resources.yaml
│   └── tigera-operator.yaml
└── manifests
    └── openebs-operator.yaml
```

### Dockerfile

<Tabs groupId="imageNum">
  <TabItem value="single" label="Single image" default>

```dockerfile
FROM labring/oci-kubernetes-calico:1.24.0-amd64
COPY cni ./cni
COPY manifests ./manifests
CMD ["kubectl apply -f cni/tigera-operator.yaml","kubectl apply -f cni/custom-resources.yaml","kubectl apply -f manifests/openebs-operator.yaml"]
```

  </TabItem>
  <TabItem value="multiple" label="Multiple images">

```dockerfile
FROM scratch
COPY cni ./cni
COPY manifests ./manifests
CMD ["kubectl apply -f manifests/openebs-operator.yaml"]
```

  </TabItem>
</Tabs>

1. `cni` contains kubectl apply config files
2. `buildah build -t labring/kubernetes-calico-openebs:1.24.0-amd64 --arch amd64 --os linux -f Kubefile .` builds the oci image.

:::tip
You'll need to add calico cmd to openebs cmd layer, because dockerfile overrides the old layer.
:::

## Build multi-architecture images

```shell
$ buildah build -t $prefix/oci-kubernetes:$version-amd64 --arch amd64 --os linux -f Kubefile  .
$ buildah build -t $prefix/oci-kubernetes:$version-arm64 --arch arm64 --os linux -f Kubefile  .

$ buildah login --username $username --password $password $domain
$ buildah push $prefix/oci-kubernetes:$version-amd64
$ buildah push $prefix/oci-kubernetes:$version-arm64
$ buildah manifest create $prefix/oci-kubernetes:$version
$ buildah manifest add $prefix/oci-kubernetes:$version docker://$prefix/oci-kubernetes:$version-amd64
$ buildah manifest add $prefix/oci-kubernetes:$version docker://$prefix/oci-kubernetes:$version-arm64
$ buildah manifest push --all $prefix/oci-kubernetes:$version docker://$prefix/oci-kubernetes:$version
```
