export {};

declare global {
  interface Window {
    gtag: (
      event: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}
