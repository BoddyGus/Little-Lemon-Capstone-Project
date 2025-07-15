import { initializeTimes, updateTimes } from '../../Main/Main';

describe('BookingForm reducer functions', () => {
  test('initializeTimes returns expected array of times', () => {
    const result = initializeTimes();
    const expected = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    expect(result).toEqual(expected);
  });

  test('updateTimes returns same state for valid action', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UPDATE_TIMES', date: '2024-07-15' };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });

  test('updateTimes returns current state for unknown action', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });
});