import { render, screen } from "@testing-library/react";
import Main from './Main';
import { initializeTimes, updateTimes } from './Main';

// Test for initializeTimes function
test('initializeTimes returns the correct expected value', () => {
  const expectedTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});
test('updateTimes returns the same value provided in state', () => {
  const state = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
  const action = { type: 'UPDATE_TIMES', date: '2024-07-15' };
  const result = updateTimes(state, action);
  const expectedTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
  expect(result).toEqual(expectedTimes);
});
test('updateTimes returns same state for unknown action type', () => {
  const state = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
  const action = { type: 'UNKNOWN_ACTION' };
  const result = updateTimes(state, action);
  expect(result).toEqual(state);
});