---
sidebar_position: 1
---
# Vehicle Routing Problem Service

## Introduction
Vehicle Routing Problem Service

## Installation
```shell script
$ sealos run luanshaotong/vrp:v0.1.1
```

## API
### Address
[http://116.204.64.253:7001/avatarsolver-portal/vrp/dvrpSolve](http://116.204.64.253:7002/avatarsolver-portal/route/navigate)<br />Request Type：POST<br />Content-Type：application/json

### Parameters

1. request
| name |  | description |
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


2. return
| name | description |
| --- | --- |




### Examples

1. request
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

2. return
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

## Support