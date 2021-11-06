# A list of SC Metro api names and their sane equivalents

<details >
<summary>BusName</summary>
<br>
The Name of the bus route, which cointains the bus number and the start and end points. This is usually spoken as the bus is boarded, and is sometimes printed on the physical sign
(example: 10 - UCSC via Main Gate - High)
</details>

<details >
<summary>BusNumber</summary>
<br>
The number displayed on the bus. This is a general idea of the route of the bus
(example: 10)
</details>

<details >
<summary>RouteNumber</summary>
<br>
This number directly corresponds to the bus number and bus name
It is only used internally (as far as we can tell)
Each route number can contain one or many patterns, which can also have their own names
(example: 4354)
</details>

<details >
<summary>Pattern</summary>
<br>
This number defines the exact route that the bus will take
Every pattern has one Route number, but there can be multiple patterns to a route number
Inbound/outbound busses have different patters when available, and if a bus goes an extra leg on certain times, thats a separate pattern
(example: 16772)

</details>

<details >
<summary>StopID</summary>
<br>
For all purposes in this code, the stop ID will refer to the code printed on the bus stop sign
this stop id is also available for view in google maps and other public information access points
(there is another "stop id" but it seems useless so it will not be used)
(example: )

</details>

<details >
<summary>VehicleID</summary>
<br>
This number denotes the vehicle that is currently on the route.
This number is sometimes called the bus id but is being renamed to avoid confusion
It will probably not be used very often in the program
(example: 1610)

</details>
