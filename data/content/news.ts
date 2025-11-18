/**
 * News and announcements data for SPZOZ Parczew
 * Contains the latest hospital news and updates
 */

export interface NewsItem {
  /** Display date for the news item */
  date: string;
  /** ISO date format for sorting and machine reading */
  dateTime: string;
  /** Title of the news item */
  title: string;
  /** Brief description or content */
  content: string;
  /** Optional badge for special items */
  badge?: string;
}

/**
 * News items for SPZOZ Parczew
 * Ordered by date (newest first)
 */
export const newsItems: NewsItem[] = [
  {
    date: "Marzec 2025",
    dateTime: "2025-03",
    title: "Nowy ortopeda w zespole",
    content: "Dr Jacek Ławnicki przyjmuje we wtorki 8:00-16:00",
    badge: "Nowe",
  },
  {
    date: "Luty 2025",
    dateTime: "2025-02",
    title: "Szpital Przyjazny Wojsku",
    content: "Dołączyliśmy do programu współpracy z MON",
  },
  {
    date: "Styczeń 2025",
    dateTime: "2025-01",
    title: "Nowa Poradnia Gastroenterologiczna",
    content: "Otwarcie poradni z pełnym zapleczem diagnostycznym",
  },
];
