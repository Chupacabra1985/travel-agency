/* SELECTORS */
export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_DURATION_FROM = createActionName('CHANGE_DURATION_FROM');
export const CHANGE_DURATION_TO= createActionName('CHANGE_DURATION_TO');
export const CHANGE_ADD_TAG = createActionName('CHANGE_ADD_TAG');
export const CHANGE_REMOVE_TAG = createActionName('CHANGE_REMOVE_TAG');

// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeDurationFrom = payload => ({ payload, type: CHANGE_DURATION_FROM });
export const changeDurationTo = payload => ({ payload, type: CHANGE_DURATION_TO });
export const changeAddTag = payload => ({ payload, type: CHANGE_ADD_TAG });
export const changeRemoveTag = payload => ({ payload, type: CHANGE_REMOVE_TAG });

// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  let allTags = statePart.tags;
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_DURATION_FROM:
      return {
        ...statePart,
        duration: {
          to: statePart.duration.to,
          from: action.payload,
        },
      };
    case CHANGE_DURATION_TO:
      return {
        ...statePart,
        duration: {
          to: action.payload,
          from: statePart.duration.from,
        },
      };
    case CHANGE_ADD_TAG:
      allTags.push(action.payload);
      return {
        ...statePart,
        tags: allTags,
      };
    case CHANGE_REMOVE_TAG:
      // eslint-disable-next-line no-case-declarations
      const tagIndex = allTags.indexOf(action.payload);
      allTags.splice(tagIndex, 1);
      return {
        ...statePart,
        tags: allTags,
      };
    // TODO - handle other action types
    default:
      return statePart;
  }
}
