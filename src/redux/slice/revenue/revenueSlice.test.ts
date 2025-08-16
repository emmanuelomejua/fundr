// import jest from 'jest'


// import { configureStore } from "@reduxjs/toolkit";
// import revenueReducer, { fetchRevenue } from "./revenueSlice";

// // Mock API response
// const mockRevenueData = [
//   { name: "Jan", revenue: 5000 },
//   { name: "Feb", revenue: 7000 },
// ];

// // Mock the API call inside fetchRevenue
// jest.mock("../api/revenueApi", () => ({
//   getRevenue: jest.fn(() => Promise.resolve(mockRevenueData)),
// }));

// describe("revenueSlice", () => {
//   it("should handle loading and data on fetchRevenue", async () => {
//     const store = configureStore({
//       reducer: { revenue: revenueReducer },
//     });

//     // Initially loading should be false
//     let state = store.getState().revenue;
//     expect(state.loading).toBe(false);
//     expect(state.data).toEqual([]);

//     // Dispatch async thunk
//     const actionPromise = store.dispatch(fetchRevenue());

//     // After dispatch but before it resolves — loading should be true
//     state = store.getState().revenue;
//     expect(state.loading).toBe(true);

//     // Wait for thunk to finish
//     await actionPromise;

//     // After resolution — loading should be false and data should be updated
//     state = store.getState().revenue;
//     expect(state.loading).toBe(false);
//     expect(state.data).toEqual(mockRevenueData);
//   });
// });
