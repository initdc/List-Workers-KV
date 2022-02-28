const NS = SUB;

const base = ".example.com";
const wrapper = 20;

addEventListener("fetch", (event) => event.respondWith(handleRequest()));

String.prototype.rjust = function (length, char) {
  var fill = [];
  while (fill.length + this.length < length) {
    fill[fill.length] = char;
  }
  return fill.join("") + this;
};

String.prototype.ljust = function (length, char) {
  var fill = [];
  while (fill.length + this.length < length) {
    fill[fill.length] = char;
  }
  return this + fill.join("");
};

async function handleRequest() {
  // await NS.put("a", "apple");

  const list = await NS.list();
  const keys = list.keys;

  if (!keys) {
    return new Response("List is empty", { status: 404 });
  }

  let content = new String();
  for (const key of keys) {
    const name = key.name;
    const value = (await NS.get(name)) || "Value not found";
    content += (name + base).ljust(wrapper, " ") + value + "\n\n";
  }
  return new Response(content, { status: 200 });
}
