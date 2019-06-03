import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate ? moment(createdAtMoment).isSameOrAfter(startDate, 'day') : true;
      const endDateMatch = endDate ? moment(createdAtMoment).isSameOrBefore(endDate, 'day') : true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1; // whichever comes first have < 1 index
      }
    });
};

export default getVisibleExpenses;
