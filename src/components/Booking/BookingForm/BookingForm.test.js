
const mockFetchAPI = jest.fn();
const mockSubmitAPI = jest.fn();

beforeAll(() => {
  global.window.fetchAPI = mockFetchAPI;
  global.window.submitAPI = mockSubmitAPI;
});

afterAll(() => {
  delete global.window.fetchAPI;
  delete global.window.submitAPI;
});

beforeEach(() => {
  mockFetchAPI.mockClear();
  mockSubmitAPI.mockClear();
});

function initializeTimes() {
  const today = new Date();
  if (typeof window !== 'undefined' && window.fetchAPI) {
    return window.fetchAPI(today);
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      if (typeof window !== 'undefined' && window.fetchAPI && action.date) {
        const dateObject = new Date(action.date);
        return window.fetchAPI(dateObject);
      }
      return state;
    default:
      return state;
  }
}

describe('BookingForm reducer functions', () => {
  describe('initializeTimes', () => {
    test('returns expected array of times when fetchAPI is available', () => {

      const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      mockFetchAPI.mockReturnValue(mockTimes);

      const result = initializeTimes();


      expect(mockFetchAPI).toHaveBeenCalledWith(expect.any(Date));
      expect(result).toEqual(mockTimes);
    });

    test('returns default times when fetchAPI is not available', () => {

      const originalFetchAPI = global.window.fetchAPI;
      delete global.window.fetchAPI;

      const expected = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      const result = initializeTimes();

      expect(result).toEqual(expected);

      global.window.fetchAPI = originalFetchAPI;
    });
  });

  describe('updateTimes', () => {
    test('returns new times for valid date action', () => {
      const mockTimes = ['17:30', '18:30', '19:30', '20:30'];
      mockFetchAPI.mockReturnValue(mockTimes);

      const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      const action = { type: 'UPDATE_TIMES', date: '2024-07-15' };

      const result = updateTimes(initialState, action);

      expect(mockFetchAPI).toHaveBeenCalledWith(new Date('2024-07-15'));
      expect(result).toEqual(mockTimes);
    });

    test('returns current state when no date is provided', () => {
      const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      const action = { type: 'UPDATE_TIMES' }; // No date

      const result = updateTimes(initialState, action);

      expect(mockFetchAPI).not.toHaveBeenCalled();
      expect(result).toEqual(initialState);
    });

    test('returns current state for unknown action', () => {
      const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      const action = { type: 'UNKNOWN_ACTION' };
      const result = updateTimes(initialState, action);

      expect(mockFetchAPI).not.toHaveBeenCalled();
      expect(result).toEqual(initialState);
    });

    test('returns current state when fetchAPI is not available', () => {
      const originalFetchAPI = global.window.fetchAPI;
      delete global.window.fetchAPI;

      const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      const action = { type: 'UPDATE_TIMES', date: '2024-07-15' };

      const result = updateTimes(initialState, action);

      expect(result).toEqual(initialState);

      global.window.fetchAPI = originalFetchAPI;
    });
  });
});