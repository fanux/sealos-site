import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# sealos create

## Create a cluster

<Tabs groupId="imageNum">
  <TabItem value="single" label="Example" default>

```shell
$ create a mysql cluster:
	sealos create mysql:8.0
with custom cluster name:
	sealos create mysql:8.0 -c mysql
```
  </TabItem>
  </Tabs>