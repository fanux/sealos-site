import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Delete masters or nodes

## Delete node

<Tabs groupId="imageNum">
  <TabItem value="single" label="Node" default>

```shell
$ sealos delete --nodes x.x.x.x
```

  </TabItem>

  <TabItem value="multiple" label="Master" default>

```shell
$ sealos delete --masters x.x.x.x
```

  </TabItem>

  <TabItem value="both" label="Node && Master" default>

```shell
$ sealos delete --masters x.x.x.x --nodes x.x.x.x
$ sealos delete --masters x.x.x.x-x.x.x.y --nodes x.x.x.x-x.x.x.y
```

  </TabItem>

</Tabs>
