import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type PropertyFilterProps = {
  checkIn: Date;
  checkOut: Date;
  guests: number;
  rooms: number;
  setFilter: (filter: Partial<PropertyFilterProps>) => void;
  resetFilter: () => void;
  getFilter: () => Partial<PropertyFilterProps>;
};

export const usePropertyFilter = create(
  persist<PropertyFilterProps>(
    (set, get) => ({
      checkIn: new Date(),
      checkOut: new Date(),
      guests: 1,
      rooms: 1,
      getFilter: () => ({
        checkIn: get().checkIn,
        checkOut: get().checkOut,
        guests: get().guests,
        rooms: get().rooms,
      }),
      setFilter: (filter) => set(() => ({ ...filter })),
      resetFilter: () =>
        set(() => ({
          checkIn: new Date(),
          checkOut: new Date(),
          guests: 1,
          rooms: 1,
        })),
    }),
    { name: "propertyFilter", storage: createJSONStorage(() => sessionStorage) }
  )
);
