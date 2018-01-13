# Usage example

```typescript
let type = new JsonResource();
let url = new URL("http://localhost:3090/");

let agent = new Request(url, type );
agent.fetch()
    .then((response) => {
        assert.equal(response[0].test, "test");
        done();
    })
    .catch((reason) => {
        done(reason);
    });
```