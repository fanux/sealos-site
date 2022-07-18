# 基于OSM的路径规划服务
## 服务介绍

![Picture1.png](https://cdn.nlark.com/yuque/0/2022/png/2813039/1657941063949-3380bbfb-6306-4c09-b816-1429ea207265.png#clientId=u59fadec3-4c52-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=476&id=u1e363123&margin=%5Bobject%20Object%5D&name=Picture1.png&originHeight=1316&originWidth=1412&originalType=binary&ratio=1&rotation=0&showTitle=false&size=262687&status=done&style=none&taskId=u4586f949-d384-4d9f-9ff2-a8df3c08c70&title=&width=511)

车辆智能调度问题（Vehicle Routing Problem），在学术上是网络优化问题中的最基本同时也是最具挑战性的问题之一，在物流领域也是最为广泛的应用场景之一，其覆盖了从干线、末端、到仓内的各个环节。对于效率的提升和成本的节省提到重大作用。随着物流行业向智能化发展，作为物流核心智能算法之一的车辆路径规划的应用场景也越来越丰富。<br />车辆智能调度服务由scienson算法团队的独立研发，可以以时效最优为目标，支持多种路径优化问题类型的求解。结合云计算超强的大数据计算能力，在短时间内规划出运输成本最低的配送方案的服务。适用于多种类型的运输配送业务，能够有效提高运营效率，降低人为误差，减少运输成本。

### 服务优势
#### 多维度的输入参数
能力约束：车的载方、载重；<br />时间窗口：货物的最早/晚送货或取货的时间窗口；<br />时长约束：取货/送货的装卸货时间及作业等待时间；<br />运输限制：不同车型在实际运输中的速度限制，行驶半径，以及满足不同运输模式下成本计算要求。结合OSM，综合考量每个仓库和送货点的地址并获得当前的路况等；<br />优化目标：最少车辆，最短距离或者是最小成本；

#### 多样化的调用方式

1. 可以支持通过SaaS服务免费调用智能调度服务；
1. 可以使用Sealos私有化部署镜像服务；

#### 直观的优化结果展示

1. 可视化展示已完成的调度计划，如调度计划的总成本、总车次、总行驶里程、路顺等；
1. 方便快捷地介入人工调整，实时可得人工干预后的成本、里程数据；

#### 灵活多变的约束和目标组合
我们不仅仅解决一种VRP问题，我们解决的是车辆调度等一整类问题。基于客户实际业务场景的不同，算法的约束和目标往往不能完全复用，三笙算法团队提供一对一的个性化定制服务。我们精心设计了强大灵活的算法架构，可以插件化具体约束和目标，从而能够以极低的成本为您提供服务。

## API调用

### 调用地址
[http://116.204.64.253:7001/avatarsolver-portal/vrp/dvrpSolve](http://116.204.64.253:7002/avatarsolver-portal/route/navigate)<br />请求类型：POST<br />Content-Type：application/json

### 详细参数说明

1. 请求参数
| 字段名 |  | 字段说明 |
| --- | --- | --- |
| key |  | API调用秘钥<br />1. 一般用户请填写："91cb09e7-72b7-4094-839e-166bdc279e01"<br />1. 私人定制用户请联系客服获取秘钥<br /> |
| depotParam |  |  |
|  | depotId |  |
|  | positionInfo |  |
| vehicleParams |  |  |
|  | plate |  |
|  | capacity |  |
|  | startLocation |  |
|  | earliestDeparture |  |
|  | timeWindowInfo |  |
| orderParams |  |  |
|  | orderId |  |
|  | positionInfo |  |
|  | timeWindowInfo |  |
|  | serviceTime |  |
|  | demand |  |
| relationParam |  |  |
|  |  |  |
| dvrpConfigParam |  |  |
|  | needBackToDepot |  |
|  | globalVelocity |  |
|  | distanceCalculateType |  |
|  | timeType |  |


2. 返回参数
| 字段名 | 字段说明 |
| --- | --- |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |



### 调用示例

1. 调用请求
```json
{
    "key":"91cb09e7-72b7-4094-839e-166bdc279e01",
    "depotParam":{
        "depotId":"depot",
        "positionInfo":{
            "lon":0,
            "lat":0
        }
    },
    "vehicleParams":[
        {
            "plate":"vehicleA",
            "capacity":{
                "maxVolume":10,
                "minVolume":0,
                "maxWeight":100,
                "minWeight":0,
                "maxDistance":0,
                "amount":0
            },
            "startLocation":{
                "lon":1,
                "lat":0
            },
            "earliestDeparture":0,
            "timeWindowInfo":{
                "beginTime":0,
                "beginTimeDisplay":null,
                "endTime":1000,
                "endTimeDisplay":null
            }
        },
        {
            "plate":"vehicleB",
            "capacity":{
                "maxVolume":10,
                "minVolume":0,
                "maxWeight":100,
                "minWeight":0,
                "maxDistance":0,
                "amount":0
            },
            "startLocation":{
                "lon":4,
                "lat":0
            },
            "earliestDeparture":0,
            "timeWindowInfo":{
                "beginTime":0,
                "beginTimeDisplay":null,
                "endTime":1000,
                "endTimeDisplay":null
            }
        }
    ],
    "orderParams":[
        {
            "orderId":"order1",
            "positionInfo":{
                "lon":1,
                "lat":1
            },
            "timeWindowInfo":{
                "beginTime":0,
                "beginTimeDisplay":null,
                "endTime":1000,
                "endTimeDisplay":null
            },
            "serviceTime":1,
            "demand":{
                "itemNum":0,
                "weight":5,
                "volume":0,
                "worth":0
            }
        },
        {
            "orderId":"order2",
            "positionInfo":{
                "lon":3,
                "lat":2
            },
            "timeWindowInfo":{
                "beginTime":0,
                "beginTimeDisplay":null,
                "endTime":1000,
                "endTimeDisplay":null
            },
            "serviceTime":1,
            "demand":{
                "itemNum":0,
                "weight":1,
                "volume":0,
                "worth":0
            }
        },
        {
            "orderId":"order3",
            "positionInfo":{
                "lon":5,
                "lat":5
            },
            "timeWindowInfo":{
                "beginTime":0,
                "beginTimeDisplay":null,
                "endTime":1000,
                "endTimeDisplay":null
            },
            "serviceTime":1,
            "demand":{
                "itemNum":0,
                "weight":2,
                "volume":0,
                "worth":0
            }
        },
        {
            "orderId":"order4",
            "positionInfo":{
                "lon":10,
                "lat":10
            },
            "timeWindowInfo":{
                "beginTime":0,
                "beginTimeDisplay":null,
                "endTime":1000,
                "endTimeDisplay":null
            },
            "serviceTime":1,
            "demand":{
                "itemNum":0,
                "weight":4,
                "volume":0,
                "worth":0
            }
        },
        {
            "orderId":"order5",
            "positionInfo":{
                "lon":6,
                "lat":2
            },
            "timeWindowInfo":{
                "beginTime":0,
                "beginTimeDisplay":null,
                "endTime":1000,
                "endTimeDisplay":null
            },
            "serviceTime":1,
            "demand":{
                "itemNum":0,
                "weight":3,
                "volume":0,
                "worth":0
            }
        },
        {
            "orderId":"order6",
            "positionInfo":{
                "lon":8,
                "lat":2
            },
            "timeWindowInfo":{
                "beginTime":0,
                "beginTimeDisplay":null,
                "endTime":1000,
                "endTimeDisplay":null
            },
            "serviceTime":1,
            "demand":{
                "itemNum":0,
                "weight":1,
                "volume":0,
                "worth":0
            }
        },
        {
            "orderId":"order7",
            "positionInfo":{
                "lon":9,
                "lat":1
            },
            "timeWindowInfo":{
                "beginTime":0,
                "beginTimeDisplay":null,
                "endTime":1000,
                "endTimeDisplay":null
            },
            "serviceTime":1,
            "demand":{
                "itemNum":0,
                "weight":3,
                "volume":0,
                "worth":0
            }
        },
        {
            "orderId":"order8",
            "positionInfo":{
                "lon":2,
                "lat":7
            },
            "timeWindowInfo":{
                "beginTime":0,
                "beginTimeDisplay":null,
                "endTime":1000,
                "endTimeDisplay":null
            },
            "serviceTime":1,
            "demand":{
                "itemNum":0,
                "weight":2,
                "volume":0,
                "worth":0
            }
        }
    ],
    "relationParam":null,
    "dvrpConfigParam":{
        "needBackToDepot":false,
        "globalVelocity":3.6,
        "distanceCalculateType":"euclidean",
        "timeType":null
    }
}
```

2. 调用返回结果
```json
{
    "success": true,
    "data": {
        "dvrpRouteInfos": [
            {
                "vehicleId": "vehicleB",
                "assignedJobList": [
                    {
                        "id": "depot",
                        "jobType": "DEPOT",
                        "weight": 0.0,
                        "arriveTime": "4.0",
                        "deptTime": "4.0",
                        "aggrDistance": 4.0,
                        "overTime": 0.0
                    },
                    {
                        "id": "order8",
                        "jobType": "ORDER",
                        "weight": 2.0,
                        "arriveTime": "11.280109889280517",
                        "deptTime": "12.280109889280517",
                        "aggrDistance": 11.280109889280517,
                        "overTime": 0.0
                    },
                    {
                        "id": "order4",
                        "jobType": "ORDER",
                        "weight": 4.0,
                        "arriveTime": "20.82411363459805",
                        "deptTime": "21.82411363459805",
                        "aggrDistance": 19.82411363459805,
                        "overTime": 0.0
                    }
                ],
                "routeDistance": 19.82411363459805,
                "routeTotalWeight": 6.0,
                "routeTotalOrderNum": 2,
                "routeOverTime": 0.0
            },
            {
                "vehicleId": "vehicleA",
                "assignedJobList": [
                    {
                        "id": "depot",
                        "jobType": "DEPOT",
                        "weight": 0.0,
                        "arriveTime": "1.0",
                        "deptTime": "1.0",
                        "aggrDistance": 1.0,
                        "overTime": 0.0
                    },
                    {
                        "id": "order1",
                        "jobType": "ORDER",
                        "weight": 5.0,
                        "arriveTime": "2.414213562373095",
                        "deptTime": "3.414213562373095",
                        "aggrDistance": 2.414213562373095,
                        "overTime": 0.0
                    },
                    {
                        "id": "order2",
                        "jobType": "ORDER",
                        "weight": 1.0,
                        "arriveTime": "5.650281539872885",
                        "deptTime": "6.650281539872885",
                        "aggrDistance": 4.650281539872885,
                        "overTime": 0.0
                    },
                    {
                        "id": "order3",
                        "jobType": "ORDER",
                        "weight": 2.0,
                        "arriveTime": "10.255832815336873",
                        "deptTime": "11.255832815336873",
                        "aggrDistance": 8.255832815336873,
                        "overTime": 0.0
                    },
                    {
                        "id": "order5",
                        "jobType": "ORDER",
                        "weight": 3.0,
                        "arriveTime": "14.418110475505253",
                        "deptTime": "15.418110475505253",
                        "aggrDistance": 11.418110475505253,
                        "overTime": 0.0
                    },
                    {
                        "id": "order6",
                        "jobType": "ORDER",
                        "weight": 1.0,
                        "arriveTime": "17.41811047550525",
                        "deptTime": "18.41811047550525",
                        "aggrDistance": 13.418110475505253,
                        "overTime": 0.0
                    },
                    {
                        "id": "order7",
                        "jobType": "ORDER",
                        "weight": 3.0,
                        "arriveTime": "19.832324037878347",
                        "deptTime": "20.832324037878347",
                        "aggrDistance": 14.83232403787835,
                        "overTime": 0.0
                    }
                ],
                "routeDistance": 14.83232403787835,
                "routeTotalWeight": 15.0,
                "routeTotalOrderNum": 6,
                "routeOverTime": 0.0
            }
        ],
        "unAssignedJobList": [
        ],
        "totalOverTime": 0.0,
        "totalDistance": 34.6564376724764,
        "unAssignedOrderNum": 0
    },
    "errorCode": null,
    "errorMsg": null,
    "appendMsg": null
}
```

3. 示例方案展示

![image.png](https://cdn.nlark.com/yuque/0/2022/png/2813039/1658070769565-8e56a3e9-759c-434c-8aed-72ce1957aa87.png#clientId=u059a07b5-342e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=659&id=ub15136a3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1318&originWidth=1842&originalType=binary&ratio=1&rotation=0&showTitle=false&size=175210&status=done&style=none&taskId=u2065039a-7ac0-4e48-ad9d-1eeabe0e2d3&title=&width=921)

## 安装
```shell script
$ sealos run luanshaotong/vrp:v0.1.1
```

## 服务支持

### 团队介绍
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2813039/1658042347966-a1d9ccdb-43bc-4ca8-80d7-b58b3a0e02af.png#clientId=u48da3fba-cca9-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=258&id=u4ae44c3a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=515&originWidth=1500&originalType=binary&ratio=1&rotation=0&showTitle=false&size=165437&status=done&style=none&taskId=u9238b133-627d-4e50-a855-e04268e1a47&title=&width=750)<br />团队网址：[https://www.scienson.com/](https://www.scienson.com/)


### 服务说明

1. 私有化部署支持；
1. 基于实际业务场景，可提供定制化的业务约束和目标，能够为您提供定制化的调度算法服务，欢迎随时联系我们；
1. 可提供该服务的7 * 24小时在线答疑

客服微信：<br />![weixin.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/2813039/1658043023234-3da763b8-db35-43a7-8576-62c39e86da95.jpeg#clientId=u48da3fba-cca9-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=186&id=u78dea387&margin=%5Bobject%20Object%5D&name=weixin.jpg&originHeight=909&originWidth=869&originalType=binary&ratio=1&rotation=0&showTitle=false&size=43323&status=done&style=none&taskId=ub7c1c9f4-fdb2-4b9a-9fec-f0a77233edb&title=&width=177.5)
