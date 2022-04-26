function getrandom() {
  const random_string =
    Math.random().toString(32).substring(2, 5) +
    Math.random().toString(32).substring(2, 5);
  return random_string;
}

export function add(state, action) {
  try {
    const url = new URL(action.data);
    if (exists(state, url.toString())) {
      throw new Error("URl already exists");
    }
    const shortUrl = getrandom();
    const temp = [...state];
    temp.push({ url: url.toString(), shortUrl, views: 0 });

    localStorage.setItem("urls", JSON.stringify(temp));
    return [...temp];
  } catch (e) {
    return [...state];
  }
}

export function load(state, action) {
  const data = localStorage.getItem("urls") ?? "[]";
  const temp = JSON.parse(data);
  console.log(temp);
  return [...temp];
}

export function addView(state, action) {
  const item = state.find((item) => item.shortUrl === action.data);
  item.views++;
  localStorage.setItem("urls", JSON.stringify(state));
  return [...state];
}

export function exists(state, url) {
  return !!state.find((item) => item.url === url);
}
