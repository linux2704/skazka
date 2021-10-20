import { getDay, getExactDay, getDayTitle } from "../helpers/helpers";

export const spektakl = [
  { id: 0, name: "kolobok", title: "Спектакль “Колобок”", availableDates: [0, 1, 2] },
  { id: 1, name: "aldar", title: "Спектакль “Алдар-Косе”", availableDates: [10, 11] },
  { id: 2, name: "travel", title: "Спектакль “Путешествие по сказкам”", availableDates: [0, 1, 2, 3, 4, 10, 11] },
  { id: 3, name: "polyana", title: "Сказочная поляна", availableDates: [0, 1, 2, 3, 4, 10, 11] },
];

export const dates = [
  { id: 0, name: "mon" },
  { id: 10, name: "tue" },
  { id: 1, name: "wedn" },
  { id: 11, name: "thu" },
  { id: 2, name: "fri" },
  { id: 3, name: "sat" },
  { id: 4, name: "sun" },
]
  .map(({ id, name }) => ({ id, name, date: getExactDay(name), title: getDayTitle(name), forSort: getDay(name) }))
  .sort((a: any, b: any) => a.forSort - b.forSort);

export const time = {
  0: [
    { id: 0, slot: "12:00" },
    { id: 1, slot: "15:00" },
  ],
  1: [
    { id: 0, slot: "12:00" },
    { id: 1, slot: "15:00" },
  ],
  2: [
    { id: 0, slot: "11:00" },
    { id: 1, slot: "17:00" },
  ],
  3: [
    { id: 0, slot: "12:00" },
    { id: 1, slot: "15:00" },
  ],
  4: [
    { id: 0, slot: "13:00" },
    { id: 1, slot: "15:00" },
  ],
  10: [
    { id: 0, slot: "12:00" },
    { id: 1, slot: "15:00" },
  ],
  11: [
    { id: 0, slot: "12:00" },
    { id: 1, slot: "15:00" },
  ],
};

export interface SProps {
  id: string;
  title: string;
  availableDates?: number[];
}
