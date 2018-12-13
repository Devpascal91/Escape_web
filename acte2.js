var dataLayer = [{
  "appConfig": {
    "subContainers": ["GTM-52XVVVZ"],
    "ua": "UA-108958-4",
  },
  "application": "Jeux-Gratuits",
  "site": "www.jeux-gratuits.com",
  "environnement": "prod",
  "userStatus": "Anonyme",
  "sessionType": "Non connect\u00e9e",
  "pageType": "classique",
  "level2": "Jeux de cartes",
  "theme": "Jeux de cartes",
  "pageCategory": "Jeux",
  "level1": "Jeux reflexion",
  "level3": "Wild West Solitaire",
  "idArticle": "1244",
}];
!function (e) {
  "use strict";

  var t = function () {},
    n = function () {
      return {
        log: t,
        error: t,
        warn: t,
        info: t,
        group: t,
        groupEnd: t,
        time: t,
        timeEnd: t,
      }
    },
    o = e.console;
  if ("object" == typeof e.JSON && "function" == typeof e.JSON.parse && "object" == typeof e.console && "function" == typeof Object.keys) {
    var r = !/Edge|Trident/.test(navigator.userAgent),
      a = {
        available: ["others.catch", "others.show"],
        broadcasted: [],
      },
      i = function () {
        var e = 9,
          t = 242,
          n = 220,
          o = /^\s+(.*)\s+$/g,
          r = function (e) {
            e = e.replace(o, "$1");
            for (var t = [
                0,
                0,
                0,
              ], n = 0, r = 0; n < e.length; n++) r = parseInt(n / t.length), t[n % 3] += parseInt(s(e[n]) / i(r));
            for (n = 0; n < t.length; n++) t[n] > 255 && (t[n] = 255);
            return t
          },
          a = function (e) {
            return "rgb(" + e.join(",") + ")"
          },
          i = function (t) {
            return Math.pow(e, t)
          },
          s = function (n) {
            return parseInt((n.charCodeAt() << e) % t)
          };
        return {
          get: r,
          toRGB: a,
          visible: function (e) {
            return e[0] > n || e[1] > n || e[2] > n ? [
              0,
              0,
              0,
            ] : [
              255,
              255,
              255,
            ]
          },
        }
      }(),
      s = function (e, t, n, a) {
        return o[t] ? function () {
          var i = Array.prototype.slice.call(arguments);
          r && i.unshift("background-color:" + a + ";color:" + n + ";border-radius:2px;"), i.unshift((r ? "%c" : "") + [
            " ",
            e,
            " ",
          ].join("")), o[t].apply(console, i)
        } : function () {}
      },
      c = function () {
        try {
          var e = localStorage.getItem("getConsole");
          e = null === e ? [] : JSON.parse(e)
        } catch (t) {
          e = []
        }
        return e
      },
      u = function (e) {
        a.available.push(e);
        var t = document.createEvent("CustomEvent");
        t.initCustomEvent("getConsole.tag.available", !1, !1, e), document.dispatchEvent(t)
      };
    e.getConsole = function (e) {
      if ("string" != typeof e) throw "getConsole need a tag name (string)";
      if (-1 === a.available.indexOf(e) && u(e), -1 !== a.broadcasted.indexOf(e)) {
        var t = i.get(e),
          r = i.toRGB(i.visible(t)),
          c = i.toRGB(t),
          d = {
            log: s(e, "log", r, c),
            warn: s(e, "warn", r, c),
            error: s(e, "error", r, c),
            info: s(e, "info", r, c),
          };
        return Object.keys(o).forEach(function (e) {
          "undefined" == typeof d[e] && (d[e] = o[e])
        }), d
      }
      return n()
    }, e.getConsole.tags = a, a.broadcasted = c(), -1 !== a.broadcasted.indexOf("others.catch") && (e.console = e.getConsole("others.show"))
  } else e.getConsole = n
}(window), _logmatic = [], logmatic = {
  log: function () {
    "use strict";

    _logmatic.push(Array.prototype.slice.call(arguments))
  },
},
function (e) {
  "use strict";

  var t = {
      domains: [
        "hpphmfubhnbobhfs",
        "bnb{po.betztufn",
        "beoyt",
        "epvcmfdmjdl",
        "hpphmftzoejdbujpo",
        "wjefptufq",
        "s77ofu",
        "ufbet",
        "vosvmznfejb",
        "tnbsubetfswfs",
        "tljnsftpvsdft",
        "{fcftupg",
        "uumce",
        "hpphmfbqjt",
        "wjefpqmb{b",
        "hpphmfbetfswjdft",
        "fggfdujwfnfbtvsf",
        "pvucsbjo",
        "ubcppmb",
      ],
      classes: "ufyuBe!BeCpy!qvc`411y361!qvc`411y361n!qvc`839y:1!ufyu.be!ufyuBe!Mjhbuvt!ufyu`be!ufyu`bet!ufyu.bet!ufyu.be.mjolt",
      event: {
        category: "pbt`mpbefe",
        action: "gbjm",
      },
    },
    n = e.getConsole("inObs"),
    o = function (e) {
      if ("undefined" == typeof MutationObserver) return void e.call(!1, !1);
      var o = document.getElementsByTagName("html")[0],
        a = {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        },
        i = !1,
        s = new MutationObserver(function (o) {
          o.forEach(function (o) {
            try {
              var a,
                c = "",
                u = new Date,
                d = function () {};
              "childList" === o.type && o.addedNodes.length && (a = o.addedNodes[0], "undefined" != typeof a.src &&
             (c = a.nodeName, "SCRIPT" === c || "IFRAME" === c)) && (d = o.addedNodes[0].onerror, o.addedNodes[0].onerror = function () {
                n.warn("Missing script", a.src), !i && -1 !== t.domains.indexOf(r(new URL(a.src).host.split(/\./).slice(-2).shift()))
                && (new Date).getTime() - u.getTime() < 1500 && (n.warn("Integrity violation on ", a.src, " not observing anymore !"),
                s.disconnect(), i = !0, e(!0)), "function" == typeof d && d.apply(this, Array.prototype.slice.call(arguments))
              })
            } catch (f) {
              n.error(f)
            }
          })
        });
      s.observe(o, a)
    },
    r = function (e, t) {
      return t = t || 1, e.split("").map(function (e) {
        return String.fromCharCode(e.charCodeAt() + t)
      }).join("")
    },
    a = function (e) {
      if ("undefined" == typeof MutationObserver) return void e.call(!1, !1);
      var o = document.createElement("div"),
        a = document.getElementsByTagName("html")[0],
        i = {},
        s = {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        },
        c = !1,
        u = new MutationObserver(function (t) {
          t.forEach(function (t) {
            "style" === t.attributeName && (u.disconnect(), "none" === t.target.style.display && !e.called && (e.called = !0) && e.call(i, !0))
          })
        }),
        d = new MutationObserver(function (t) {
          t.forEach(function (t) {
            try {
              if ("childList" === t.type && "HTML" === t.target.nodeName && t.addedNodes.length && "BODY" === t.addedNodes[0].nodeName && !c) {
                c = !0, t.addedNodes[0].appendChild(o);
                var r = getComputedStyle(o);
                if (i = t.addedNodes[0], d.disconnect(), /Trident/.test(navigator.userAgent)) {
                  return void setTimeout(function () {
                    !e.called && (e.called = !0) && e.call(i, !1)
                  }, 50);
                }
                setTimeout(function () {
                  t.addedNodes[0].removeChild(o)
                }, 60), u.disconnect(), e.call(t.addedNodes[0], "none" === r.getPropertyValue("display") || /url\("about:abp/.test(r.getPropertyValue("-moz-binding")))
              }
            } catch (a) {
              n.error(a)
            }
          })
        });
      o.className = r(t.classes, -1), o.style.display = "block", d.observe(a, s), u.observe(o, s)
    },
    i = [];
  e.integrityObserver = {
    state: {
      network: null,
      dom: null,
    },
    corrupted: !1,
    listen: function (e) {
      this.corrupted ? e(this.state) : i.push(e)
    },
    sendToListeners: function () {
      i.forEach(function (e) {
        e(this.state)
      }.bind(this))
    },
    reportCorruption: function () {
      var e = function () {
        "undefined" != typeof ga ? ga("send", {
          hitType: "event",
          eventCategory: r(t.event.category, -1),
          eventAction: r(t.event.action, -1),
          nonInteraction: !0,
        }) : setTimeout(e, 100)
      };
      e()
    },
    reportChange: function () {
      this.sendToListeners(), this.reportCorruption()
    },
    init: function () {
      var e = function (e) {
        return function (t) {
          this.state[e] = t, t && (!this.corrupted && this.reportChange(), this.corrupted = !0)
        }.bind(this)
      };
      a(e.call(this, "dom")), o(e.call(this, "net"))
    },
  }, "function" == typeof Object.bind && e.integrityObserver.init()
}(window),
function (e, t, n, o, r) {
  "use strict";

  "undefined" == typeof e._gtm && (e._gtm = {
    events: {
      on: [],
      ready: [],
      readyAll: [],
    },
    versions: {},
  }), "undefined" == typeof e._gtm.versions && (e._gtm.versions = {}), e._gtm.versions.staticheader = 1, e._gtm.state = "loading";
  var a = dataLayer[0].appConfig,
    i = [r],
    s = a.subContainers || [],
    c = e.getConsole("GTM").log,
    u = function (e) {
      if ("undefined" != typeof t.dispatchEvent) {
        var n = null;
        "function" == typeof Event ? n = new Event(e) : (n = t.createEvent("Event"), n.initEvent(e, !1, !1)), t.dispatchEvent(n)
      }
    },
    d = function () {
      d.state++, d.state === i.length && (e._gtm.state = "loaded", u("gtm.loaded"))
    },
    f = function () {
      e._gtm.state = "error", u("gtm.error")
    };
  d.state = 0, i = i.concat(s), c("Loading sub containers:", s);
  for (var l = 0, g = i.length; g > l; ++l) {
    e[o] = e[o] || [], e[o].push({
      "gtm.start": (new Date).getTime(),
      event: "gtm.js",
    });
    var p = t.getElementsByTagName(n)[0],
      m = t.createElement(n),
      h = "dataLayer" !== o ? "&l=" + o : "";
    m.async = !0, m.onload = d, m.onerror = f, m.src = "https://www.googletagmanager.com/gtm.js?id=" + i[l] + h, p.parentNode.insertBefore(m, p)
  }
}(window, document, "script", "dataLayer", "GTM-N4SNZN"), OAS_AD_BUFFER = [], OAS_AD = function () {
  OAS_AD_BUFFER.push(Array.prototype.slice.call(arguments))
},
function (e) {
  "use strict";

  e._gtm = e._gtm || {}, e._gtm.errors = [], window.addEventListener("error", function (t) {
    null !== t.error && e._gtm.errors.push({
      message: t.error.message,
      stack: t.error.stack,
      name: t.error.name,
      filename: t.filename,
      line: t.lineno,
      column: t.colno,
    })
  })
}(window);
dataLayer.push({
  event: "app.config",
  appConfig: {
    asl: {
      screens: {
        "mobile": {
          "max": 480,
          "invcode": "mobile",
          "client": "appnexus",
        },
        "tablet": {
          "min": 480,
          "max": 1024,
          "invcode": "tablet",
          "client": "appnexus",
        },
        "desktop": {
          "min": 1024,
          "invcode": "desktop",
          "client": "appnexus",
        },
      },
      positions: {
        "x01": {
          "insve": false,
          "mapping": [],
        },
        "Top": {
          "insve": false,
          "mapping": {
            "mobile": {
              "name": "mban_atf",
              "sizes": [
                [320, 50],
                [1600, 451],
              ],
            },
            "tablet": {
              "name": "mban_atf",
              "sizes": [
                [728, 90],
                [1000, 90],
                [1000, 250],
                [1000, 300],
                [970, 250],
                [960, 90],
                [960, 200],
                [970, 90],
                [970, 200],
                [970, 250],
                [728, 91],
                [1000, 91],
                [1000, 251],
                [1000, 301],
                [970, 251],
                [960, 91],
                [960, 201],
                [970, 91],
                [970, 201],
                [970, 251],
                [1000, 260],
                [1000, 261],
                [1600, 451],
              ],
            },
            "desktop": {
              "name": "mban_atf",
              "sizes": [
                [728, 90],
                [1000, 90],
                [1000, 250],
                [1000, 300],
                [970, 250],
                [960, 90],
                [960, 200],
                [970, 90],
                [970, 200],
                [970, 250],
                [728, 91],
                [1000, 91],
                [1000, 251],
                [1000, 301],
                [970, 251],
                [960, 91],
                [960, 201],
                [970, 91],
                [970, 201],
                [970, 251],
                [1000, 260],
                [1000, 261],
                [1600, 451],
              ],
            },
          },
        },
        "Right": {
          "insve": false,
          "mapping": {
            "desktop": {
              "name": "pave_atf",
              "sizes": [
                [300, 250],
                [300, 600],
                [300, 900],
                [300, 1050],
                [300, 251],
                [300, 601],
                [300, 901],
                [300, 1051],
              ],
            },
          },
        },
        "Right2": {
          "insve": false,
          "mapping": {
            "desktop": {
              "name": "pave_btf",
              "sizes": [
                [300, 250],
                [300, 254],
              ],
            },
          },
        },
        "Position3": {
          "insve": false,
          "mapping": {
            "desktop": {
              "name": "pave_btf",
              "sizes": [
                [300, 250],
                [300, 254],
              ],
            },
          },
        },
      },
      clients: {
        "appnexus": {
          "partners": true,
          "loaded": 2,
        },
      },
      sitepage: 'fr_jeuxgratuits_reflexion',
      keywords: [
        "wild-west-solitaire",
        "keyword-jeux-classiques",
        "keyword-jeux-de-patience",
        "keyword-jeux-de-plateau",
        "keyword-jeux-mobile-gratuit",
        "keyword-jeux-de-cartes",
        "keyword-jeux-de-solitaire",
        "keyword-jeux-de-cowboy",
        "keyword-jeux-html-5",
        "keyword-jeux-de-cartes-html5",
        "keyword-jeux-de-reflexion",
      ],
    },
  },
});
var _v,
  settings = {
    game: "Wild West Solitaire",
    publisherId: 74653737,
    lang: "fr",
    gametitle: "Solutions Wild West Solitaire",
    onVideoFound: function () {
      $(".veedi").css({
        'display': 'block',
      });
    },
    onVideoNotFound: function () {
      console.log('veedi not found');
    },
  };
(function (settings) {
  var vScript = document.createElement('script');
  vScript.type = 'text/javascript';
  vScript.async = false;
  vScript.src = 'https://www.veedi.com/player/embed/veediEmbed.js';
  vScript.onload = function () {
    _v = new VeediEmbed(settings);
  };
  var veedi = document.getElementById('veediInit');
  veedi.parentNode.insertBefore(vScript, veedi);
}(settings))
// params(settings)

var rdads = new String(Math.random()).substring(2, 11);
// document.write('<sc' + 'ript type="text/javascript" src="https://cpm1.affiz.net/tracking/ads_display.php?nodiv=1&n=315f315f313938_44198c5ec1&ref=jeuxroll2&rdads=' + rdads + '"></sc' + 'ript>');
$(document).trigger('start', [{
  services: {
    inputDefault: {
      start: false,
    },
    tipsy: {
      start: false,
    },
    goTop: {
      start: false,
    },
    chartseek: {
      start: false,
    },
    cabestanRetargeting: {
      start: true,
    },
  },
}]);
var rdads = new String(Math.random()).substring(2, 11);
// document.write('<sc' + 'ript type="text/javascript" src="https://cpm1.affiz.net/tracking/ads_display.php?nodiv=1&n=315f315f313938_44198c5ec1&ref=jeuxroll2&rdads=' + rdads + '"></sc' + 'ript>')
