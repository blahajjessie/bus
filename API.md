- GET [`https://cruzmetro.com/Regions`](https://cruzmetro.com/Regions)
	```json
	[
		{
			"ID": 137,
			"Name": "Santa Cruz Metro"
		},
		{
			"ID": 138,
			"Name": "UCSC"
		}
	]
	```
- GET [`https://cruzmetro.com/Region/<RegionID>/Routes`](https://cruzmetro.com/Region/137/Routes)
	```json
	[
		{
			"ID": 4354,
			"ArrivalsEnabled": true,
			"DisplayName": "10 - UCSC via Main Gate - High",
			"CustomerID": 169,
			"DirectionStops": null,
			"Points": null,
			"Color": "#3368B6",
			"TextColor": "#FFFFFF",
			"ArrivalsShowVehicleNames": true,
			"IsHeadway": false,
			"ShowLine": true,
			"Name": "10 - UCSC via Main Gate - High",
			"ShortName": "10",
			"RegionIDs": [
				137
			],
			"ForwardDirectionName": null,
			"BackwardDirectionName": null,
			"NumberOfVehicles": 0,
			"Patterns": [
				{
					"ID": 16772,
					"Name": "10-02-8-UCSC/Beach via High",
					"Direction": "Outbound",
					"Directionality": "Outbound"
				},
				{
					"ID": 16147,
					"Name": "10-00-7-UCSC via High",
					"Direction": "Outbound",
					"Directionality": "Outbound"
				},
				{
					"ID": 18069,
					"Name": "10-00-9-UCSC via High",
					"Direction": "Outbound",
					"Directionality": "Outbound"
				}
			]
		}
	]
	```
- GET [`https://cruzmetro.com/Route/<RouteID>/Directions`](https://cruzmetro.com/Route/4354/Directions)
	```json
	[
		{
			"IsSegment": true,
			"RouteID": 16147,
			"ID": 4354,
			"Name": "10-00-7-UCSC via High",
			"Directionality": "Outbound",
			"Stops": [
				{
					"ID": 4747903,
					"Image": "stop_sign.gif",
					"Latitude": 36.971077,
					"Longitude": -122.024574,
					"Name": "Santa Cruz Metro Center - Lane 1",
					"RtpiNumber": 2701,
					"ShowLabel": false,
					"ShowStopRtpiNumberLabel": false,
					"ShowVehicleName": true
				}
			]
		}
	]
	```
	- stop id number here isn't used anywhere else; RTPI number is used for arrivals
- GET `https://cruzmetro.com/Route/<RouteID>/Direction/<DirectionID>/Stops`
	- useless since the previous one already includes a list of stops for each direction
- GET `https://cruzmetro.com/Route/<RouteID>/Waypoints`
- GET [`https://cruzmetro.com/Stop/<StopID>/Arrivals`](https://cruzmetro.com/Stop/2700/Arrivals)
	```json
	[
		{
			"RouteID": 16773,
			"Arrivals": [
				{
					"RouteID": 16773,
					"StopID": 4747902,
					"VehicleID": 5290,
					"StopId": 4747902,
					"VehicleId": 5290,
					"ArriveTime": "1:01 AM",
					"RouteId": 16773,
					"Direction": 0,
					"SchedulePrediction": false,
					"IsLayover": false,
					"Rules": [],
					"ScheduledTime": null,
					"SecondsToArrival": 181.0581896,
					"IsLastStop": true,
					"OnBreak": false,
					"ScheduledArriveTime": null,
					"ScheduledMinutes": 0,
					"TripId": 2973614,
					"BusName": "1610",
					"VehicleName": "1610",
					"RouteName": "18-00-1-UCSC via Mission",
					"Minutes": 3,
					"Time": "3"
				}
			]
		}
	]
	```

RTPI number = stop number that's displayed on sign (different from stop ID)
