const NS = SUB;

const base = ".example.com";
const wrapper = 20;

addEventListener("fetch", (event) => event.respondWith(handleRequest()));

async function handleRequest() {
  // await NS.put("a", "apple");

  const list = await NS.list();
  const keys = list.keys;

  if (!keys) {
    return new Response("List is empty", { status: 404 });
  }

  const length = keys.length;

  for (let i = 0; i < length; i++) {
    const name = keys[i].name
    const value = await NS.get(name)
    keys[i].value = value;
  }
  return new Response(JSON.stringify(keys, undefined, 2), { status: 200 });
}
