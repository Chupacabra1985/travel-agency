/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  //filter by duration
  if(filters.duration) {
    output = output.filter(trip => trip.days <= filters.duration.to && trip.days >= filters.duration.from);
  }

  //filter by tags
  if(filters.tags) {
    const allTags = filters.tags;
    let tripList = [];
    for(const trip of output) {
      const tripTags = trip.tags;
      if (allTags.sort().toString() === tripTags.sort().toString()) {
        tripList.push(trip);
      }
    }
    if (allTags.length > 0) {
      output = tripList;
    }
  }


  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => trip.id == tripId);
  console.log('filtering trips by tripId:', tripId, filtered[0]);
  return filtered[0];
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => trip.country.code == countryCode);
  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered;
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
