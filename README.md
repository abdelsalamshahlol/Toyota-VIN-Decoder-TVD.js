# TVD (Toyota VIN Decoder)
[![vanilla JS](http://vanilla-js.com/assets/button.png)](http://vanilla-js.com/)

TVD is a JavaScript library that can be used to decode VIN numbers for Toyota vehicles.

The library provides the following information:
  - World Manufacturer Identifier **WMI**.
  - Vehicle Descriptor Section **VDS**.
  - Vehicle Indicator Section **VIS**.
  - Country of origin.
  - Manufacturer
  - Vehicle type (Truck, SUV, etc.)
  - Body (Sport Van, 4DR Wagon 2WD, etc.)
  - Age in years
  - Engine
  - Series (Applicable for Land Cruisers only)
  - Restraint (Safety equipments in the vehicle)
  - Model/Platform
  - Year
  - Plant
### Installation

To use TVD, just add the script tag in your HTML file.

```sh
    <script src="vindecoder.min.js" charset="utf-8"></script>
```

For production environments...

```sh
    vinDecoder.report("JTEHT05J542053195")
```

### Example

```sh
    var myVinReport = vinDecoder.report("4T1B11HK7JU026537")
    console.log(myVinReport)
    /**
        {
      "vin": "4T1B11HK7JU026537",
      "breakdown": {
        "WMI": "4T1",
        "VDS": "B11HK7",
        "VIS": "JU026537"
      },
      "origin": "USA",
      "manufacturer": "Toyota",
      "type": "Passenger Car",
      "body": "4DR Sedan 2WD / Standard Cab Truck, 4WD, Standard Bed, Full-Size Frame",
      "engine": "Unknown engine",
      "series": "N/A",
      "restraint": "Unknown",
      "model": "Camry / Aurion (TRD)",
      "year": "2018",
      "plant": "Georgetown, KY, US",
      "age": 0
    }
    **/
```

### Development

Want to contribute? Great!

#### Todos

 - Add support for all Toyota VIN schemes
 - Get more info from the VIN

License
----

GNU GPL v3
