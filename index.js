const NS = SUB;
const STORE = OCE;

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
    const name = keys[i].name;
    const value = await NS.get(name);
    keys[i].value = value;
  }

  const content = JSON.stringify(keys);
  await STORE.put("sub-list", content);
  // const storeContent = await STORE.get("sub-list");
  return new Response(content, { status: 200 });
}
