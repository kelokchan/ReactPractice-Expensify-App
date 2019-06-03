import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default reducer values', () => {
  const state  = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const filterText = 'test';
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: filterText });
  expect(state.text).toBe(filterText);
});

test('should set startDate filter', () => {
  const startDate = moment(0).subtract(1, 'days');
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate });
  expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
  const endDate = moment(0).add(1, 'days');
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate });
  expect(state.endDate).toEqual(endDate);
});



