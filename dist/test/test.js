import { JsonResource } from '../lib/resource/format/JsonResource';
import { assert } from "chai";
import { RssResource } from '../lib/resource/format/RssResource';
import { XmlResource } from '../lib/resource/format/XmlResource';
const jsonStringMock = '[{"test": "test"}]';
const xmlStringMock = `<?xml version="2.0" encoding="utf-8"?>
<base field="test">
    <entry attribute="mock">entryValue</entry>
</base>`;
const rssStringMock = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
  <channel>
    <title>Titel des Feeds</title>
    <link>URL der Webpräsenz</link>
    <description>Kurze Beschreibung des Feeds</description>
    <language>Sprache des Feeds (z. B. "de-de")</language>
    <copyright>Autor des Feeds</copyright>
    <pubDate>Erstellungsdatum("Tue, 8 Jul 2008 2:43:19")</pubDate>
    <image>
      <url>URL einer einzubindenden Grafik</url>
      <title>Bildtitel</title>
      <link>URL, mit der das Bild verknüpft ist</link>
    </image>
    <item>
      <title>Titel des Eintrags</title>
      <description>Kurze Zusammenfassung des Eintrags</description>
      <link>Link zum vollständigen Eintrag</link>
      <author>Autor des Artikels, E-Mail-Adresse</author>
      <guid>Eindeutige Identifikation des Eintrages</guid>
      <pubDate>Datum des Items</pubDate>
    </item>
  </channel>
</rss>
`;
describe('RequestResource module', function () {
    describe('#JSON format resource test', function () {
        it('should parse valid JSON data', function (done) {
            let type = new JsonResource();
            type.convertToJson(jsonStringMock)
                .then(response => {
                assert.equal(response[0].test, "test");
                done();
            })
                .catch(reason => done(reason));
        });
    });
    describe('#RSS format resource test', function () {
        it('should parse valid RSS data', function (done) {
            let type = new RssResource();
            type.convertToJson(rssStringMock)
                .then(response => {
                assert.equal(response.rss.version, "2.0");
                done();
            })
                .catch(reason => done(reason));
        });
        /*
        it('should request localhost server', function (done) {
            let res = new Request("http://localhost:3090/", ResourceFormat.XML);
            res.fetch()
            .then(response => {
                assert.equal(response.rss.version, "2.0");
                done();
            })
            .catch(reason => done(reason));
        });
        */
    });
    describe('#XML format resource test', function () {
        it('should parse valid XML data', function (done) {
            let type = new XmlResource();
            type.convertToJson(xmlStringMock)
                .then(response => {
                assert.equal(response.base.field, "test");
                done();
            })
                .catch(reason => done(reason));
        });
    });
});
//# sourceMappingURL=test.js.map