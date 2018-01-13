# Usage example

```typescript
let format = ResourceFormat.RSS;
let agent = new Request("http://localhost:3090/", format );
agent.fetch()
    .then((response) => {
        assert.equal(response[0].test, "test");
        done();
    })
    .catch((reason) => {
        done(reason);
    });
```