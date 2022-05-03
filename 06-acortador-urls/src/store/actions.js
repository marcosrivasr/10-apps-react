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
      console.log("URL exists");
      throw new Error("URl already exists");
    }
    const shortUrl = getrandom();
    const temp = [...state.items];
    temp.push({ url: url.toString(), shortUrl, views: 0 });
    console.log(temp);
    localStorage.setItem("urls", JSON.stringify(temp));
    return { items: [...temp] };
  } catch (e) {
    console.log("Not an URL", e);
    return state;
  }
}

export function load(state, action) {
  const data = localStorage.getItem("urls") ?? "[]";
  const temp = JSON.parse(data);
  return { items: [...temp] };
}

export function addView(state, action) {
  const temp = [...state.items];
  const item = temp.find((item) => item.shortUrl === action.data);
  item.views++;
  localStorage.setItem("urls", JSON.stringify(temp));
  return { items: [...temp] };
}

export function exists(state, url) {
  return !!state.items.find((item) => item.url === url);
}
