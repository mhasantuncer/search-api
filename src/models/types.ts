export interface GoogleSearchResponse {
  items?: GoogleSearchResult[];
  searchInformation?: SearchInformation;
}

export interface GoogleSearchResult {
  title: string;
  link: string;
  snippet: string;
  pagemap?: {
    cse_image?: Array<{ src: string }>;
  };
}

export interface SearchInformation {
  totalResults: string;
}

// Get example - GoogleSearchResponse
// https://www.googleapis.com/customsearch/v1?q=motorola%20edge&key=API_KEY&cx=CX&start=1&num=10

// {
//   "kind": "customsearch#search",
//   "url": {
//     "type": "application/json",
//     "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
//   },
//   "queries": {
//     "request": [
//       {
//         "title": "Google Custom Search - motorola edge",
//         "totalResults": "861",
//         "searchTerms": "motorola edge",
//         "count": 10,
//         "startIndex": 1,
//         "inputEncoding": "utf8",
//         "outputEncoding": "utf8",
//         "safe": "off",
//         "cx": "1268040dc6cf74020"
//       }
//     ],
//     "nextPage": [
//       {
//         "title": "Google Custom Search - motorola edge",
//         "totalResults": "861",
//         "searchTerms": "motorola edge",
//         "count": 10,
//         "startIndex": 11,
//         "inputEncoding": "utf8",
//         "outputEncoding": "utf8",
//         "safe": "off",
//         "cx": "1268040dc6cf74020"
//       }
//     ]
//   },
//   "context": {
//     "title": "webhallen"
//   },
//   "searchInformation": {
//     "searchTime": 0.32511,
//     "formattedSearchTime": "0.33",
//     "totalResults": "861",
//     "formattedTotalResults": "861"
//   },
//   "items": [
//     {
//       "kind": "customsearch#result",
//       "title": "Motorola Edge 40 8GB / 256GB - Eclipse Black - Mobiltelefon ...",
//       "htmlTitle": "\u003cb\u003eMotorola Edge\u003c/b\u003e 40 8GB / 256GB - Eclipse Black - Mobiltelefon ...",
//       "link": "https://www.webhallen.com/se/product/360909-Motorola-Edge-40-8GB-256GB-Eclipse-Black",
//       "displayLink": "www.webhallen.com",
//       "snippet": "Med en elegant, konturformad design med ändlösa kanter är den lika vacker som bekväm. Och den är konstruerad med IP68-skydd1, så den är säker även om den tar...",
//       "htmlSnippet": "Med en elegant, konturformad design med ändlösa kanter är den lika vacker som bekväm. Och den är konstruerad med IP68-skydd1, så den är säker även om den tar&nbsp;...",
//       "formattedUrl": "https://www.webhallen.com/.../360909-Motorola-Edge-40-8GB-256GB-Ecl...",
//       "htmlFormattedUrl": "https://www.webhallen.com/.../360909-\u003cb\u003eMotorola\u003c/b\u003e-\u003cb\u003eEdge\u003c/b\u003e-40-8GB-256GB-Ecl...",
//       "pagemap": {
//         "cse_thumbnail": [
//           {
//             "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqcK9gveocb097h4tTaYH_oXnM6qS_vPJbntSyprff5OmTkgVtGhQFmAw&s",
//             "width": "300",
//             "height": "168"
//           }
//         ],
//         "metatags": [
//           {
//             "og:image": "//cdn.webhallen.com/images/product/360909?trim",
//             "fb.app_id": "1670825789818570",
//             "theme-color": "#1A1A1D",
//             "og:type": "article",
//             "viewport": "width=device-width, initial-scale=1, user-scalable=1",
//             "msvalidate.01": "BC043379C1208EC1B405B5E3FDB2535F",
//             "og:title": "Motorola Edge 40 8GB / 256GB - Eclipse Black",
//             "og:url": "https://www.webhallen.com/se/product/360909-Motorola-Edge-40-8GB-256GB-Eclipse-Black",
//             "og:description": "Köp Motorola Edge 40 8GB / 256GB - Eclipse Black med fri frakt för medlemmar ✓ Låga priser  ✓ Öppet köp 30 dagar ✓ Snabba leveranser - Köp online eller i butik!"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "https://i.ytimg.com/vi/BiRMEYBL62I/maxresdefault.jpg"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "Motorola Edge 50 12GB / 512GB - Koala Grey - Mobiltelefon ...",
//       "htmlTitle": "\u003cb\u003eMotorola Edge\u003c/b\u003e 50 12GB / 512GB - Koala Grey - Mobiltelefon ...",
//       "link": "https://www.webhallen.com/se/product/375451-Motorola-Edge-50-12GB-512GB-Koala-Grey",
//       "displayLink": "www.webhallen.com",
//       "snippet": "Vi introducerar motorola edge 50, konstruerad för ett enkelt kreativt uttryck. Det är en telefon full av liv – och en telefon full av konst. Från premiumfinish...",
//       "htmlSnippet": "Vi introducerar \u003cb\u003emotorola edge\u003c/b\u003e 50, konstruerad för ett enkelt kreativt uttryck. Det är en telefon full av liv – och en telefon full av konst. Från premiumfinish&nbsp;...",
//       "formattedUrl": "https://www.webhallen.com/.../375451-Motorola-Edge-50-12GB-512GB-K...",
//       "htmlFormattedUrl": "https://www.webhallen.com/.../375451-\u003cb\u003eMotorola\u003c/b\u003e-\u003cb\u003eEdge\u003c/b\u003e-50-12GB-512GB-K...",
//       "pagemap": {
//         "metatags": [
//           {
//             "og:image": "//cdn.webhallen.com/images/product/375451?trim",
//             "fb.app_id": "1670825789818570",
//             "theme-color": "#1A1A1D",
//             "og:type": "article",
//             "viewport": "width=device-width, initial-scale=1, user-scalable=1",
//             "msvalidate.01": "BC043379C1208EC1B405B5E3FDB2535F",
//             "og:title": "Motorola Edge 50 12GB / 512GB - Koala Grey",
//             "og:url": "https://www.webhallen.com/se/product/375451-Motorola-Edge-50-12GB-512GB-Koala-Grey",
//             "og:description": "Köp Motorola Edge 50 12GB / 512GB - Koala Grey med fri frakt för medlemmar ✓ Låga priser  ✓ Öppet köp 30 dagar ✓ Snabba leveranser - Köp online eller i butik!"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "//cdn.webhallen.com/images/product/375451?trim"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "Motorola Edge 50 Pro 12GB / 512GB - Black Beauty - Mobiltelefon ...",
//       "htmlTitle": "\u003cb\u003eMotorola Edge\u003c/b\u003e 50 Pro 12GB / 512GB - Black Beauty - Mobiltelefon ...",
//       "link": "https://www.webhallen.com/se/product/371255-Motorola-Edge-50-Pro-12GB-512GB-Black-Beauty",
//       "displayLink": "www.webhallen.com",
//       "snippet": "Motorola Edge 50 Pro · Hello smartphone · Perfekt balanserad design. · AI-driven rörelseinspelning + 3x teleobjektiv. · 125W - Den snabbaste TurboPower™...",
//       "htmlSnippet": "\u003cb\u003eMotorola Edge\u003c/b\u003e 50 Pro &middot; Hello smartphone &middot; Perfekt balanserad design. &middot; AI-driven rörelseinspelning + 3x teleobjektiv. &middot; 125W - Den snabbaste TurboPower™&nbsp;...",
//       "formattedUrl": "https://www.webhallen.com/.../371255-Motorola-Edge-50-Pro-12GB-512G...",
//       "htmlFormattedUrl": "https://www.webhallen.com/.../371255-\u003cb\u003eMotorola\u003c/b\u003e-\u003cb\u003eEdge\u003c/b\u003e-50-Pro-12GB-512G...",
//       "pagemap": {
//         "cse_thumbnail": [
//           {
//             "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWiMMkTqE0RPV-nICNcyMBujNuexiMWgtECdXQMejICA8d8hyCrVj-LM&s",
//             "width": "300",
//             "height": "168"
//           }
//         ],
//         "metatags": [
//           {
//             "og:image": "//cdn.webhallen.com/images/product/371255?trim",
//             "fb.app_id": "1670825789818570",
//             "theme-color": "#1A1A1D",
//             "og:type": "article",
//             "viewport": "width=device-width, initial-scale=1, user-scalable=1",
//             "msvalidate.01": "BC043379C1208EC1B405B5E3FDB2535F",
//             "og:title": "Motorola Edge 50 Pro 12GB / 512GB - Black Beauty",
//             "og:url": "https://www.webhallen.com/se/product/371255-Motorola-Edge-50-Pro-12GB-512GB-Black-Beauty",
//             "og:description": "Köp Motorola Edge 50 Pro 12GB / 512GB - Black Beauty med fri frakt för medlemmar ✓ Låga priser  ✓ Öppet köp 30 dagar ✓ Snabba leveranser - Köp online eller i butik!"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "https://i.ytimg.com/vi/p_lprRLxVfY/maxresdefault.jpg"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "Motorola Edge 40 8GB / 256GB - Lunar Blue - Mobiltelefon ...",
//       "htmlTitle": "\u003cb\u003eMotorola Edge\u003c/b\u003e 40 8GB / 256GB - Lunar Blue - Mobiltelefon ...",
//       "link": "https://www.webhallen.com/se/product/360910-Motorola-Edge-40-8GB-256GB-Lunar-Blue",
//       "displayLink": "www.webhallen.com",
//       "snippet": "Med en elegant, konturformad design med ändlösa kanter är den lika vacker som bekväm. Och den är konstruerad med IP68-skydd1, så den är säker även om den tar...",
//       "htmlSnippet": "Med en elegant, konturformad design med ändlösa kanter är den lika vacker som bekväm. Och den är konstruerad med IP68-skydd1, så den är säker även om den tar&nbsp;...",
//       "formattedUrl": "https://www.webhallen.com/.../360910-Motorola-Edge-40-8GB-256GB-Lu...",
//       "htmlFormattedUrl": "https://www.webhallen.com/.../360910-\u003cb\u003eMotorola\u003c/b\u003e-\u003cb\u003eEdge\u003c/b\u003e-40-8GB-256GB-Lu...",
//       "pagemap": {
//         "cse_thumbnail": [
//           {
//             "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbtHsiIfQuqJ2JHTFMV2iBYosgtZ-2pVzilrfd8kXWWB7gJHT88PVcij9l&s",
//             "width": "211",
//             "height": "239"
//           }
//         ],
//         "metatags": [
//           {
//             "og:image": "//cdn.webhallen.com/images/product/360910?trim",
//             "fb.app_id": "1670825789818570",
//             "theme-color": "#1A1A1D",
//             "og:type": "article",
//             "viewport": "width=device-width, initial-scale=1, user-scalable=1",
//             "msvalidate.01": "BC043379C1208EC1B405B5E3FDB2535F",
//             "og:title": "Motorola Edge 40 8GB / 256GB - Lunar Blue",
//             "og:url": "https://www.webhallen.com/se/product/360910-Motorola-Edge-40-8GB-256GB-Lunar-Blue",
//             "og:description": "Köp Motorola Edge 40 8GB / 256GB - Lunar Blue med fri frakt för medlemmar ✓ Låga priser  ✓ Öppet köp 30 dagar ✓ Snabba leveranser - Köp online eller i butik!"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "https://cdn.webhallen.com/img/loading_light.svg"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "Motorola Edge 50 Ultra 16GB / 1TB - Nordic Wood - Mobiltelefon ...",
//       "htmlTitle": "\u003cb\u003eMotorola Edge\u003c/b\u003e 50 Ultra 16GB / 1TB - Nordic Wood - Mobiltelefon ...",
//       "link": "https://www.webhallen.com/se/product/371256-Motorola-Edge-50-Ultra-16GB-1TB-Nordic-Wood",
//       "displayLink": "www.webhallen.com",
//       "snippet": "Låter dig ladda upp snabbt så att du kan komma tillbaka till det som betyder något med 125W TurboPower™-laddning. Ger dig exklusiva Moto-upplevelser så att det...",
//       "htmlSnippet": "Låter dig ladda upp snabbt så att du kan komma tillbaka till det som betyder något med 125W TurboPower™-laddning. Ger dig exklusiva Moto-upplevelser så att det&nbsp;...",
//       "formattedUrl": "https://www.webhallen.com/.../371256-Motorola-Edge-50-Ultra-16GB-1T...",
//       "htmlFormattedUrl": "https://www.webhallen.com/.../371256-\u003cb\u003eMotorola\u003c/b\u003e-\u003cb\u003eEdge\u003c/b\u003e-50-Ultra-16GB-1T...",
//       "pagemap": {
//         "cse_thumbnail": [
//           {
//             "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWiMMkTqE0RPV-nICNcyMBujNuexiMWgtECdXQMejICA8d8hyCrVj-LM&s",
//             "width": "300",
//             "height": "168"
//           }
//         ],
//         "metatags": [
//           {
//             "og:image": "//cdn.webhallen.com/images/product/371256?trim",
//             "fb.app_id": "1670825789818570",
//             "theme-color": "#1A1A1D",
//             "og:type": "article",
//             "viewport": "width=device-width, initial-scale=1, user-scalable=1",
//             "msvalidate.01": "BC043379C1208EC1B405B5E3FDB2535F",
//             "og:title": "Motorola Edge 50 Ultra 16GB / 1TB - Nordic Wood",
//             "og:url": "https://www.webhallen.com/se/product/371256-Motorola-Edge-50-Ultra-16GB-1TB-Nordic-Wood",
//             "og:description": "Köp Motorola Edge 50 Ultra 16GB / 1TB - Nordic Wood med fri frakt för medlemmar ✓ Låga priser  ✓ Öppet köp 30 dagar ✓ Snabba leveranser - Köp online eller i butik!"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "https://i.ytimg.com/vi/p_lprRLxVfY/maxresdefault.jpg"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "Motorola Edge 30 Fusion 8GB / 128GB - Viva Magenta ...",
//       "htmlTitle": "\u003cb\u003eMotorola Edge\u003c/b\u003e 30 Fusion 8GB / 128GB - Viva Magenta ...",
//       "link": "https://www.webhallen.com/se/product/359037-Motorola-Edge-30-Fusion-8GB-128GB-Viva-Magenta",
//       "displayLink": "www.webhallen.com",
//       "snippet": "Motorola Moto Edge 30 Fusion. Känn skillnaden med Motorolas Edge 30 Fusion. Den tunna och perfekt balanserade designen gör mobilen en fröjd att hantera.",
//       "htmlSnippet": "\u003cb\u003eMotorola\u003c/b\u003e Moto \u003cb\u003eEdge\u003c/b\u003e 30 Fusion. Känn skillnaden med Motorolas \u003cb\u003eEdge\u003c/b\u003e 30 Fusion. Den tunna och perfekt balanserade designen gör mobilen en fröjd att hantera.",
//       "formattedUrl": "https://www.webhallen.com/.../359037-Motorola-Edge-30-Fusion-8GB-12...",
//       "htmlFormattedUrl": "https://www.webhallen.com/.../359037-\u003cb\u003eMotorola\u003c/b\u003e-\u003cb\u003eEdge\u003c/b\u003e-30-Fusion-8GB-12...",
//       "pagemap": {
//         "cse_thumbnail": [
//           {
//             "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbtHsiIfQuqJ2JHTFMV2iBYosgtZ-2pVzilrfd8kXWWB7gJHT88PVcij9l&s",
//             "width": "211",
//             "height": "239"
//           }
//         ],
//         "metatags": [
//           {
//             "og:image": "//cdn.webhallen.com/images/product/359037?trim",
//             "fb.app_id": "1670825789818570",
//             "theme-color": "#1A1A1D",
//             "og:type": "article",
//             "viewport": "width=device-width, initial-scale=1, user-scalable=1",
//             "msvalidate.01": "BC043379C1208EC1B405B5E3FDB2535F",
//             "og:title": "Motorola Edge 30 Fusion 8GB / 128GB - Viva Magenta",
//             "og:url": "https://www.webhallen.com/se/product/359037-Motorola-Edge-30-Fusion-8GB-128GB-Viva-Magenta",
//             "og:description": "Köp Motorola Edge 30 Fusion 8GB / 128GB - Viva Magenta med fri frakt för medlemmar ✓ Låga priser  ✓ Öppet köp 30 dagar ✓ Snabba leveranser - Köp online eller i butik!"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "https://cdn.webhallen.com/img/loading_light.svg"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "Motorola Edge 40 Neo 12GB / 256GB - Soothing Sea - Mobiltelefon ...",
//       "htmlTitle": "\u003cb\u003eMotorola Edge\u003c/b\u003e 40 Neo 12GB / 256GB - Soothing Sea - Mobiltelefon ...",
//       "link": "https://www.webhallen.com/se/product/371271-Motorola-Edge-40-Neo-12GB-256GB-Soothing-Sea",
//       "displayLink": "www.webhallen.com",
//       "snippet": "Motorola edge 40 Neo · IP68 undervattensskydd. Konstruerad för att tåla damm, smuts och sand, tillsammans med nedsänkning i 1,5 meter sötvatten i upp till 30...",
//       "htmlSnippet": "\u003cb\u003eMotorola edge\u003c/b\u003e 40 Neo &middot; IP68 undervattensskydd. Konstruerad för att tåla damm, smuts och sand, tillsammans med nedsänkning i 1,5 meter sötvatten i upp till 30&nbsp;...",
//       "formattedUrl": "https://www.webhallen.com/.../371271-Motorola-Edge-40-Neo-12GB-256...",
//       "htmlFormattedUrl": "https://www.webhallen.com/.../371271-\u003cb\u003eMotorola\u003c/b\u003e-\u003cb\u003eEdge\u003c/b\u003e-40-Neo-12GB-256...",
//       "pagemap": {
//         "cse_thumbnail": [
//           {
//             "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvAnRtgQ_RYSBRuAJBgyuuKqId9SGWB-Pj6hvYhl8AgUWVFEwMFtQdJ_fL&s",
//             "width": "300",
//             "height": "168"
//           }
//         ],
//         "metatags": [
//           {
//             "og:image": "//cdn.webhallen.com/images/product/371271?trim",
//             "fb.app_id": "1670825789818570",
//             "theme-color": "#1A1A1D",
//             "og:type": "article",
//             "viewport": "width=device-width, initial-scale=1, user-scalable=1",
//             "msvalidate.01": "BC043379C1208EC1B405B5E3FDB2535F",
//             "og:title": "Motorola Edge 40 Neo 12GB / 256GB - Soothing Sea",
//             "og:url": "https://www.webhallen.com/se/product/371271-Motorola-Edge-40-Neo-12GB-256GB-Soothing-Sea",
//             "og:description": "Köp Motorola Edge 40 Neo 12GB / 256GB - Soothing Sea med fri frakt för medlemmar ✓ Låga priser  ✓ Öppet köp 30 dagar ✓ Snabba leveranser - Köp online eller i butik!"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "https://i.ytimg.com/vi/6P7LvRnQFRc/maxresdefault.jpg"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "Motorola Edge 40 Pro / 12 GB / 256 GB - Lunar Blue - Mobiltelefon ...",
//       "htmlTitle": "\u003cb\u003eMotorola Edge\u003c/b\u003e 40 Pro / 12 GB / 256 GB - Lunar Blue - Mobiltelefon ...",
//       "link": "https://www.webhallen.com/se/product/360412-Motorola-Edge-40-Pro-12-GB-256-GB-Lunar-Blue",
//       "displayLink": "www.webhallen.com",
//       "snippet": "Köp Motorola Edge 40 Pro / 12 GB / 256 GB - Lunar Blue med fri frakt för medlemmar ✓ Låga priser ✓ Öppet köp 30 dagar ✓ Snabba leveranser - Köp online eller...",
//       "htmlSnippet": "Köp \u003cb\u003eMotorola Edge\u003c/b\u003e 40 Pro / 12 GB / 256 GB - Lunar Blue med fri frakt för medlemmar ✓ Låga priser ✓ Öppet köp 30 dagar ✓ Snabba leveranser - Köp online eller&nbsp;...",
//       "formattedUrl": "https://www.webhallen.com/.../360412-Motorola-Edge-40-Pro-12-GB-256-...",
//       "htmlFormattedUrl": "https://www.webhallen.com/.../360412-\u003cb\u003eMotorola\u003c/b\u003e-\u003cb\u003eEdge\u003c/b\u003e-40-Pro-12-GB-256-...",
//       "pagemap": {
//         "cse_thumbnail": [
//           {
//             "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbtHsiIfQuqJ2JHTFMV2iBYosgtZ-2pVzilrfd8kXWWB7gJHT88PVcij9l&s",
//             "width": "211",
//             "height": "239"
//           }
//         ],
//         "metatags": [
//           {
//             "og:image": "//cdn.webhallen.com/images/product/360412?trim",
//             "fb.app_id": "1670825789818570",
//             "theme-color": "#1A1A1D",
//             "og:type": "article",
//             "viewport": "width=device-width, initial-scale=1, user-scalable=1",
//             "msvalidate.01": "BC043379C1208EC1B405B5E3FDB2535F",
//             "og:title": "Motorola Edge 40 Pro / 12 GB / 256 GB - Lunar Blue",
//             "og:url": "https://www.webhallen.com/se/product/360412-Motorola-Edge-40-Pro-12-GB-256-GB-Lunar-Blue",
//             "og:description": "Köp Motorola Edge 40 Pro / 12 GB / 256 GB - Lunar Blue med fri frakt för medlemmar ✓ Låga priser  ✓ Öppet köp 30 dagar ✓ Snabba leveranser - Köp online eller i butik!"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "https://cdn.webhallen.com/img/loading_light.svg"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "Motorola Edge 20 Lite / 8GB / 128GB - Electric Graphite ...",
//       "htmlTitle": "\u003cb\u003eMotorola Edge\u003c/b\u003e 20 Lite / 8GB / 128GB - Electric Graphite ...",
//       "link": "https://www.webhallen.com/se/product/338985-Motorola-Edge-20-Lite-8GB-128GB-Electric-Graphite",
//       "displayLink": "www.webhallen.com",
//       "snippet": "Med över en miljard färgnyanser på en fantastisk 6,7” Max Vision HDR10 + OLED-skärm får du en mobil bildupplevelse på helt nya nivåer. Njut av snabb prestanda...",
//       "htmlSnippet": "Med över en miljard färgnyanser på en fantastisk 6,7” Max Vision HDR10 + OLED-skärm får du en mobil bildupplevelse på helt nya nivåer. Njut av snabb prestanda&nbsp;...",
//       "formattedUrl": "https://www.webhallen.com/.../338985-Motorola-Edge-20-Lite-8GB-128G...",
//       "htmlFormattedUrl": "https://www.webhallen.com/.../338985-\u003cb\u003eMotorola\u003c/b\u003e-\u003cb\u003eEdge\u003c/b\u003e-20-Lite-8GB-128G...",
//       "pagemap": {
//         "cse_thumbnail": [
//           {
//             "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbtHsiIfQuqJ2JHTFMV2iBYosgtZ-2pVzilrfd8kXWWB7gJHT88PVcij9l&s",
//             "width": "211",
//             "height": "239"
//           }
//         ],
//         "metatags": [
//           {
//             "og:image": "//cdn.webhallen.com/images/product/338985?trim",
//             "fb.app_id": "1670825789818570",
//             "theme-color": "#1A1A1D",
//             "og:type": "article",
//             "viewport": "width=device-width, initial-scale=1, user-scalable=1",
//             "msvalidate.01": "BC043379C1208EC1B405B5E3FDB2535F",
//             "og:title": "Motorola Edge 20 Lite / 8GB / 128GB - Electric Graphite",
//             "og:url": "https://www.webhallen.com/se/product/338985-Motorola-Edge-20-Lite-8GB-128GB-Electric-Graphite",
//             "og:description": "Köp Motorola Edge 20 Lite / 8GB / 128GB - Electric Graphite med fri frakt för medlemmar ✓ Låga priser  ✓ Öppet köp 30 dagar ✓ Snabba leveranser - Köp online eller i butik!"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "https://cdn.webhallen.com/img/loading_light.svg"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "Motorola Edge 40 Neo 12GB / 256GB - Caneel Bay - Mobiltelefon ...",
//       "htmlTitle": "\u003cb\u003eMotorola Edge\u003c/b\u003e 40 Neo 12GB / 256GB - Caneel Bay - Mobiltelefon ...",
//       "link": "https://www.webhallen.com/se/product/371270-Motorola-Edge-40-Neo-12GB-256GB-Caneel-Bay",
//       "displayLink": "www.webhallen.com",
//       "snippet": "Motorola edge 40 Neo · IP68 undervattensskydd. Konstruerad för att tåla damm, smuts och sand, tillsammans med nedsänkning i 1,5 meter sötvatten i upp till 30...",
//       "htmlSnippet": "\u003cb\u003eMotorola edge\u003c/b\u003e 40 Neo &middot; IP68 undervattensskydd. Konstruerad för att tåla damm, smuts och sand, tillsammans med nedsänkning i 1,5 meter sötvatten i upp till 30&nbsp;...",
//       "formattedUrl": "https://www.webhallen.com/.../371270-Motorola-Edge-40-Neo-12GB-256...",
//       "htmlFormattedUrl": "https://www.webhallen.com/.../371270-\u003cb\u003eMotorola\u003c/b\u003e-\u003cb\u003eEdge\u003c/b\u003e-40-Neo-12GB-256...",
//       "pagemap": {
//         "cse_thumbnail": [
//           {
//             "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvAnRtgQ_RYSBRuAJBgyuuKqId9SGWB-Pj6hvYhl8AgUWVFEwMFtQdJ_fL&s",
//             "width": "300",
//             "height": "168"
//           }
//         ],
//         "metatags": [
//           {
//             "og:image": "//cdn.webhallen.com/images/product/371270?trim",
//             "fb.app_id": "1670825789818570",
//             "theme-color": "#1A1A1D",
//             "og:type": "article",
//             "viewport": "width=device-width, initial-scale=1, user-scalable=1",
//             "msvalidate.01": "BC043379C1208EC1B405B5E3FDB2535F",
//             "og:title": "Motorola Edge 40 Neo 12GB / 256GB - Caneel Bay",
//             "og:url": "https://www.webhallen.com/se/product/371270-Motorola-Edge-40-Neo-12GB-256GB-Caneel-Bay",
//             "og:description": "Köp Motorola Edge 40 Neo 12GB / 256GB - Caneel Bay med fri frakt för medlemmar ✓ Låga priser  ✓ Öppet köp 30 dagar ✓ Snabba leveranser - Köp online eller i butik!"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "https://i.ytimg.com/vi/6P7LvRnQFRc/maxresdefault.jpg"
//           }
//         ]
//       }
//     }
//   ]
// }
