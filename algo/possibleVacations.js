/*
'''
Possible Vacations

We want to take a vacation and are looking at tables of flight schedules and comparing them against our list of desired destinations.

The schedule displays the flight tables as a map of city names as keys and a list of city names reachable via a direct flight as the values. For example:

{
  'Phoenix': [], // dead-end
  'Seattle': ['Phoenix', 'Boston'], // can fly to 'Phoenix' and 'Boston'
  'Boston': ['Phoenix']  // can only fly to 'Phoenix'
}

Given a flight table, a home city, and a list (array) of destinations, return a new map indicating the minimum number of flights needed for each destination. If a destination is not reachable, do not include it in the output.
 

EXAMPLE(S)
possibleVacations(
  {'Phoenix': ['Seattle'], 'Seattle':[]},
  'Phoenix', 
  ['Seattle']
)
returns {'Seattle': 1}

possibleVacations(
  {'Phoenix': [], 'Seattle':[]},
  'Phoenix',
  ['Seattle']
)
returns {}

possibleVacations(
  {'Phoenix': ['Seattle'], 'Seattle':['Boston', 'Phoenix'], 'Boston': ['Phoenix']},
  'Phoenix',
  ['Seattle', 'Boston']
)
returns {'Seattle': 1, 'Boston': 2}
 

FUNCTION SIGNATURE
function possibleVacations(flightTable, homeCity, destinationList) {
def possibleVacations(flightTable: dict, homeCity: str, destinationList: list[str]) -> dict:
'''
*/

// {flights: a -> b, b -> [c,d], b->d}
// 'Providence'
// [where we want to go]
function possibleVacations(flight, homecity, destinations) {
    const destinationSet = new Set(destinations);
    const visited = new Set();
    // iterate over this - tracks the flights
    const queue = [ [homecity, 0] ]
    // need to return output
    const result = {}

    while(queue.length > 0) {

        //1. add city to destinations
        
        //2. visit neighbors
    }

    return result;
}


