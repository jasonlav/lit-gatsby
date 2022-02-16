export default function KabobToCamel(s) {
  return s.replace(/-./g, x=>x[1].toUpperCase());
}
