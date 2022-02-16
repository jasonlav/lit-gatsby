import KabobToCamel from "./kabob-to-camel";

export default function FindStyles(Styles, names = []) {
  if(Array.isArray(names)) {
    return names.map((name) => {
      return Styles[KabobToCamel(name)];
    });
  } else if(typeof names === 'string') {
    return Styles[KabobToCamel(names)];
  }

  throw new Error("Names argument must be an array or string");
}
