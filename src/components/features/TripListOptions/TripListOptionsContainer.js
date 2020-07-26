import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {
  getAllFilters,
  changeSearchPhrase,
  changeDurationFrom,
  changeDurationTo,
  changeRemoveTag, changeAddTag,
} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeDurationFrom: (value) => dispatch(changeDurationFrom(value)),
  changeDurationTo: (value) => dispatch(changeDurationTo(value)),
  changeAddTag:(tag) => dispatch(changeAddTag(tag)),
  changeRemoveTag:(tag) => dispatch(changeRemoveTag(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
