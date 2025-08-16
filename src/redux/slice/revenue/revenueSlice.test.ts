import { configureStore } from "@reduxjs/toolkit";
import revenueReducer, { fetchRevenue } from "./revenueSlice";

// Mock API response
const mockRevenueData = [
  { name: "Jan", revenue: 5000 },
  { name: "Feb", revenue: 7000 },
];

// Mock the import that revenueSlice uses
jest.mock("@/data/revenueData", () => ({
  revenueData: [
    { name: "Jan", revenue: 5000 },
    { name: "Feb", revenue: 7000 },
  ],
}));

import { revenueData } from "@/data/revenueData";

describe("revenueSlice", () => {
  it("should handle loading and data on fetchRevenue", async () => {
    const store = configureStore({
      reducer: { revenue: revenueReducer },
    });

    // Initial state
    let state = store.getState().revenue;
    expect(state.loading).toBe(false);
    expect(state.data).toEqual([]);

    // Dispatch thunk
    const actionPromise = store.dispatch(fetchRevenue());

    // While pending
    state = store.getState().revenue;
    expect(state.loading).toBe(true);

    // Wait for thunk
    await actionPromise;

    // Final state
    state = store.getState().revenue;
    expect(state.loading).toBe(false);
    expect(state.data).toEqual(revenueData); // comes from our mocked data
    expect(state.error).toBeNull();
  });

  it("should handle rejected case manually", () => {
    const store = configureStore({
      reducer: { revenue: revenueReducer },
    });

    const rejectedAction = fetchRevenue.rejected(
      { message: "Failed to fetch" } as any,
      "req123"
    );

    store.dispatch(rejectedAction);

    const state = store.getState().revenue;
    expect(state.loading).toBe(false);
    expect(state.error).toBe("Failed to fetch");
  });
});
