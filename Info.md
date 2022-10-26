A Powerful open source query language dev by facebook.
----for reading and mutating data in apis.
----gives clients the power to ask for exactly what they need and nothing more

----------------------------------
A QUERY LANGUAGE FOR APIS
----------------------------------

### Provides 
---Type system for descrbing a schema for data.
---Sngle entry point
---works with any progrmming lang
---avoids unnecessary data being fetched

--> Good , intutive well designed APIS. (Great for different data sources)

GraphQl 
We place graphQl server between client and backend which uses a schema to clearly defined
what information is available. client can use this schema to construct a request asking only 
for the information that is required.

Apollo Server

GrapjQL apollo server makes really easy for creating API's.


Types:

type Creater {

id:ID! //required
Stirng
Int


Query

Entry Point to read data
