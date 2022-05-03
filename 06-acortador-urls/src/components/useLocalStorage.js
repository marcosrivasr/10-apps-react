export default function useLocalStorage() {
  return localStorage.getItem("urls") ?? [];
}
