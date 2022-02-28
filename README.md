# List-Workers-KV

> List key and value of Cloudflare Workers KV NAMESPACE

## Notice

The Workers includes limited KV Usage. Listing value will cause a lot of read usage and list usage.

You should ensure that you are aware of this, and it might be a good idea to add validation before the operation.

## Deploy

1. create a worker

2. paste the code from `index.js`

3. set KV database binding

4. create records in KV database

5. set route for `*.example.com`

6. create DNS record for `*.example.com`

## Reference

[Workers KV API reference](https://developers.cloudflare.com/workers/runtime-apis/kv)

## Powered by

[Cloudflare Workers](https://workers.dev/)

## License

MIT
