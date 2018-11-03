vinDecoder = window.vinDecoder || {};

vinDecoder = function() {
  var data = {
    "1": {
      "1": "USA",
      "2": "Canada",
      "3": "Mexico",
      "4": "USA",
      "5": "USA",
      "6": "Australia",
      "8": "Argentina",
      "9": "Brazil",
      "J": "Japan",
      "K": "Korea",
      "M": "Thailand",
      "N": "Turkey",
      "S": "Great Britain",
      "V": "France/Austria",
      "W": "Germany"
    },
    "2": {
      "N": "NUMMI",
      "F": "Fuji Heavy Industries LTD",
      "T": "Toyota",
      "M": "Mazda ( Scion iA, iM )",
      "Y": "Toyota (Mississippi, USA)"
    },
    "3": {
      "1": "Passenger Car",
      "2": "Passenger Car",
      "3": "Multipurpose Passenger Vehicle (SUV)",
      "4": "Truck",
      "5": "Incomplete Vehicle (typically a convertible)",
      "7": "Passenger Car",
      "D": "Passenger Car",
      "G": "Passenger Car",
      "K": "Passenger Car",
      "X": "Passenger Car",
      "N": "Passenger Car",
      "A": "Truck",
      "B": "Truck",
      "F": "Truck",
      "M": "Truck",
      "E": "Multipurpose Passenger Vehicle (SUV)",
      "L": "Multipurpose Passenger Vehicle (SUV)"
    },
    "4": {
      "A": "2DR Sedan 2WD",
      "B": "4DR Sedan 2WD / Standard Cab Truck, 4WD, Standard Bed, Full-Size Frame",
      "C": "2DR Coupe 2WD",
      "D": "3/5DR Liftback, Double Cab Truck, 4WD, Extra Long Bed, Full-Size Frame",
      "E": "Station Wagon, MPV, Double Cab Truck, 2WD, Extra Long Bed, Full-Size Frame",
      "F": "2DR Convertible 2WD",
      "G": "4DR Wagon 2WD",
      "H": "4DR Wagon 4WD",
      "J": "5DR Van AWD / Double Cab Truck, 2WD, Long Bed, Small Frame",
      "K": "5DR Wagon 2WD / Double Cab Truck, 2WD, Extra Long Bed, Small Frame",
      "L": "5DR Wagon 4WD / Double Cab Truck, 4WD, Long Bed, Small Frame",
      "M": "5DR Door Van 2WD / Double Cab Truck, 4WD, Extra Long Bed, Small Frame",
      "N": "Standard Cab 1/2 Ton Truck, 2WD, Short Bed, Full-Size Frame",
      "P": "Standard Cab 1/2 Ton Truck, 4WD, Short Bed, Full-Size Frame",
      "R": "Standard Cab Truck, 4WD, Standard Bed, Full-Size Frame",
      "S": "3DR Liftback 4WD",
      "T": "Extra Cab/Access Pickup, 2WD, Long Bed Small Frame",
      "U": "Extra Cab/Access Pickup, 4WD, Long Bed Small Frame",
      "W": "Extra Cab/Access Pickup, 4WD, Long Bed Small Frame TRD",
      "X": "5DR Sport Utility Wagon",
      "Y": "Sport Van",
      "Z": "5DR Wagon 2WD"
    },
    '4old': {
      "4": "7A-FE Lean Burn",
      "A": "3MZ-FE",
      "B": "1NZ-FXE or 2AZ-FXE",
      "D": "2AZ-FE",
      "E": "2AZ-FE",
      "F": "1MZ-FE",
      "G": "5S-FE",
      "H": "1AZ-FE",
      "K": "2GR-FE",
      "L": "2RZ-FE",
      "M": "3RZ-FE",
      "N": "5VZ-FE",
      "P": "3S-FE",
      "R": "1ZZ-FE",
      "S": "1BM",
      "T": "2UZ-FE or 1NZ-FE or 3S-GTE",
      "U": "1GR-FE",
      "Y": "2ZZ-GE"
    },
    '5': {
      "A": "4A-FE, 7A-FE, 2AD-FTV (2005+)",
      "B": "1HZ, 2AD-FHV (2005+)",
      "C": "2C, 2CT, 2CT-E",
      "E": "2JZ-GT, 2JZ-GTE, 2AZ-FE",
      "F": "1MZ-FE, 2AR-FE",
      "H": "1AZ-FE, 1NR-FE",
      "J": "1FZ-FE, 1AZ-FSE",
      "N": "5VZ-FE, 2ZR-FXE",
      "P": "2AZ-FSE",
      "R": "1ZZ-FE",
      "S": "3S-FE or Electric -- RAV4 EV only",
      "T": "2UZ-FE",
      "U": "2ZR-FE (Corolla Conquest 2010)",
      "V": "1NR-FE or 1VD-FTV",
      "W": "2NZ-FE, 1CD-FTV",
      "X": "2TR-FE",
      "Y": "2ZZ-GE, 3UR-FE",
      "Z": "3.5L 2GR-FKS V6 (278 hp), 2JZ-FE, 1ZZ-FE, 3ZZ-FE"
    },
    "6": {
      "0": "Toyota Land Cruiser J100/J105",
      "2": "Toyota Land Cruiser Prado J120"
    },
    "7": {
      "0": "Manual Belts w/2 Airbags and Side Curtain Airbags",
      "1": "Manual Belt / 1 STD (North America), No Airbags (International)",
      "2": "Manual Belts w/2 Airbags (North America), 1 Airbag (Driver Seat) (International)",
      "3": "Manual Belts w/2 Airbags (North America), 2 Front Airbags (International)",
      "6": "Manual Belts w/2 Airbags, Side Airbags, Side Curtain Shield Airbags, and Knee Airbag (Driver Seat)",
      "7": "Manual Belts w/2 Airbags and Knee Airbag (Driver Seat)",
      "8": "Manual Belts w/2 Airbags and Side Airbags",
      "9": "Manual Belts w/2 Airbags, Side Airbags, and Front Curtain Airbags.",
      "D": "Manual Belts w/2 Airbags, Side Airbags, Three-Row Curtain Shield Airbags, and Knee Airbag",
      "F": "Manual Belts w/2 Airbags, Side Airbags, and Knee Airbag"
    },
    "8": {
      "0": "MR2 / MR2 Spyder",
      "1": "Tundra",
      "3": "Echo / Yaris Verso",
      "4": "Yaris / Scion xA / Scion xB / Scion xD / Urban Cruiser",
      "6": "Hilux",
      "7": "Scion tC",
      "A": "Highlander / Sequoia / Celica RWD / Supra",
      "B": "Avalon / Avensis Verso / Ipsum",
      "C": "Sienna / Previa / Aygo",
      "D": "T100",
      "E": "Corolla / Matrix / Auris",
      "F": "FJ Cruiser",
      "G": "Hilux / Fortuner",
      "H": "Highlander",
      "J": "Land Cruiser / Land Cruiser Prado",
      "K": "Camry / Aurion (TRD)",
      "L": "Tercel / Paseo / Avensis",
      "M": "Previa",
      "N": "Tacoma and older trucks as well",
      "P": "Camry Solara",
      "R": "4Runner / Corolla Verso",
      "S": "Fortuner",
      "T": "Celica",
      "U": "Prius",
      "V": "RAV4",
      "W": "MR2 (non-spyder models)",
      "X": "Cressida"
    },
    "9": {
      "1": "2001",
      "2": "2002",
      "3": "2003",
      "4": "2004",
      "5": "2005",
      "6": "2006",
      "7": "2007",
      "8": "2008",
      "9": "2009",
      "V": "1997",
      "W": "1998",
      "X": "1999",
      "Y": "2000",
      "A": "2010",
      "B": "2011",
      "C": "2012",
      "D": "2013",
      "E": "2014",
      "F": "2015",
      "G": "2016",
      "H": "2017",
      "J": "2018",
      "K": "2019"
    },
    "11": {
      "0": "Japan",
      "1": "Japan",
      "2": "Japan",
      "3": "Japan",
      "4": "Japan",
      "5": "Japan",
      "6": "Japan",
      "7": "Japan",
      "8": "Japan",
      "9": "Japan",
      "A": "Onnaing-Valenciennes, France (TMMF)",
      "C": "Cambridge, ON, CA (TMMC)",
      "D": "Japan",
      "E": "United Kingdom",
      "K": "Japan",
      "J": "Japan",
      "M": "Baja CA, Mexico (TMMBC)",
      "N": "Kolín, Czech Republic (TPCA)",
      "R": "Lafayette, IN, US (Subaru of Indiana Automotive)",
      "S": "Princeton, IN, US",
      "U": "Georgetown, KY, US",
      "W": "Woodstock, ON, CA (TMMC)",
      "X": "San Antonio, TX, US",
      "Z": "Fremont, CA, US (NUMMI)"
    }

  }

  vinDetails = function(vin) {
    var result = {}
    if (lengthCheck(vin)) {
      result.vin = vin
      result.breakdown = getBreakdown(vin)
      result.origin = originCheck(vin[0])
      result.manufacturer = manufactorCheck(vin[1])
      result.type = typeCheck(vin[2])
      result.body = bodyCheck(vin[3])
      result.engine = engineCheck(vin[4], result.year)
      result.series = seriesCheck(vin[5])
      result.restraint = restraintCheck(vin[6])
      result.model = modelCheck(vin[7])
      result.year = yearCheck(vin[9])
      result.plant = plantCheck(vin[10])
      if(result.year !== 'Unknown'){
        result.age = age(result.year)
      }
      return result
    } else {
      return 'Incorrect VIN number'
    }
  };

  //check if the VIN Length is correct
  lengthCheck = function(vin) {
    return (vin.length == 17 ? true : false)
  };

  originCheck = function(x) {
    return ((typeof data["1"][x] !== 'undefined') ? data["1"][x] : 'Unknown origin')
  };

  manufactorCheck = function(x) {
    return ((typeof data["2"][x] !== 'undefined') ? data["2"][x] : 'Unknown manufacturer')
  };

  typeCheck = function(x) {
    return ((typeof data["3"][x] !== 'undefined') ? data["3"][x] : 'Unknown type')
  }

  bodyCheck = function(x) {
    return ((typeof data["4"][x] !== 'undefined') ? data["4"][x] : 'Unknown body')

  }

  engineCheck = function(x, year) {
    //if the car is <1996 then check position 4 else 5
    if (year < 1996) {
      return ((typeof data["4old"][x] !== 'undefined') ? data["4old"][x] : 'Unknown engine')
    } else {
      return ((typeof data["5"][x] !== 'undefined') ? data["5"][x] : 'Unknown engine')
    }
  }


  seriesCheck = function(x) {
    return ((typeof data["6"][x] !== 'undefined') ? data["6"][x] : 'N/A')
  }

  restraintCheck = function(x) {
    return ((typeof data["7"][x] !== 'undefined') ? data["7"][x] : 'Unknown')
  }

  modelCheck = function(x) {
    return ((typeof data["8"][x] !== 'undefined') ? data["8"][x] : 'Unknown')
  }

  yearCheck = function(x) {
    return ((typeof data["9"][x] !== 'undefined') ? data["9"][x] : 'Unknown')
  }

  plantCheck = function(x) {
    return ((typeof data["11"][x] !== 'undefined') ? data["11"][x] : 'Unknown')
  }

  age = function(x) {
    try {
      var thisYr = new Date().getFullYear()
      return (thisYr - x)
    } catch (e) {

    }
  }

  getBreakdown = function(vin) {
    var breakdown={}
    breakdown.WMI=vin.substr(0,3)
    breakdown.VDS=vin.substr(3,6)
    breakdown.VIS=vin.substr(9)
    return breakdown
  }

  return {
    "report": vinDetails
  }

}();
