!(function(t, e) {
  for (var n in e) t[n] = e[n]
})(
  exports,
  (function(t) {
    var e = {}
    function n(r) {
      if (e[r]) return e[r].exports
      var o = (e[r] = { i: r, l: !1, exports: {} })
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
      }),
      (n.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t
        var r = Object.create(null)
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var o in t)
            n.d(
              r,
              o,
              function(e) {
                return t[e]
              }.bind(null, o)
            )
        return r
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return n.d(e, 'a', e), e
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (n.p = '/'),
      n((n.s = 13))
    )
  })([
    function(t, e) {
      t.exports = require('react')
    },
    function(t, e, n) {
      var r
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function() {
        'use strict'
        var n = {}.hasOwnProperty
        function o() {
          for (var t = [], e = 0; e < arguments.length; e++) {
            var r = arguments[e]
            if (r) {
              var i = typeof r
              if ('string' === i || 'number' === i) t.push(r)
              else if (Array.isArray(r) && r.length) {
                var a = o.apply(null, r)
                a && t.push(a)
              } else if ('object' === i) for (var c in r) n.call(r, c) && r[c] && t.push(c)
            }
          }
          return t.join(' ')
        }
        t.exports
          ? ((o.default = o), (t.exports = o))
          : void 0 ===
              (r = function() {
                return o
              }.apply(e, [])) || (t.exports = r)
      })()
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(26)
      e.Navigation = r.default
      var o = n(28)
      e.NavigationBrand = o.default
      var i = n(29)
      e.NavigationList = i.default
      var a = n(30)
      e.NavigationItem = a.default
      var c = n(31)
      e.NavigationLink = c.default
    },
    function(t, e, n) {
      t.exports = n(16)()
    },
    ,
    function(t, e) {
      t.exports = function(t, e) {
        ;(t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e)
      }
    },
    function(t, e, n) {
      var r = n(19)
      ;(t.exports = d),
        (t.exports.parse = i),
        (t.exports.compile = function(t, e) {
          return c(i(t, e))
        }),
        (t.exports.tokensToFunction = c),
        (t.exports.tokensToRegExp = p)
      var o = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
        ].join('|'),
        'g'
      )
      function i(t, e) {
        for (var n, r = [], i = 0, a = 0, c = '', l = (e && e.delimiter) || '/'; null != (n = o.exec(t)); ) {
          var f = n[0],
            p = n[1],
            d = n.index
          if (((c += t.slice(a, d)), (a = d + f.length), p)) c += p[1]
          else {
            var v = t[a],
              h = n[2],
              m = n[3],
              y = n[4],
              g = n[5],
              b = n[6],
              x = n[7]
            c && (r.push(c), (c = ''))
            var w = null != h && null != v && v !== h,
              P = '+' === b || '*' === b,
              _ = '?' === b || '*' === b,
              O = n[2] || l,
              E = y || g
            r.push({
              name: m || i++,
              prefix: h || '',
              delimiter: O,
              optional: _,
              repeat: P,
              partial: w,
              asterisk: !!x,
              pattern: E ? s(E) : x ? '.*' : '[^' + u(O) + ']+?'
            })
          }
        }
        return a < t.length && (c += t.substr(a)), c && r.push(c), r
      }
      function a(t) {
        return encodeURI(t).replace(/[\/?#]/g, function(t) {
          return (
            '%' +
            t
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          )
        })
      }
      function c(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++)
          'object' == typeof t[n] && (e[n] = new RegExp('^(?:' + t[n].pattern + ')$'))
        return function(n, o) {
          for (var i = '', c = n || {}, u = (o || {}).pretty ? a : encodeURIComponent, s = 0; s < t.length; s++) {
            var l = t[s]
            if ('string' != typeof l) {
              var f,
                p = c[l.name]
              if (null == p) {
                if (l.optional) {
                  l.partial && (i += l.prefix)
                  continue
                }
                throw new TypeError('Expected "' + l.name + '" to be defined')
              }
              if (r(p)) {
                if (!l.repeat)
                  throw new TypeError(
                    'Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(p) + '`'
                  )
                if (0 === p.length) {
                  if (l.optional) continue
                  throw new TypeError('Expected "' + l.name + '" to not be empty')
                }
                for (var d = 0; d < p.length; d++) {
                  if (((f = u(p[d])), !e[s].test(f)))
                    throw new TypeError(
                      'Expected all "' +
                        l.name +
                        '" to match "' +
                        l.pattern +
                        '", but received `' +
                        JSON.stringify(f) +
                        '`'
                    )
                  i += (0 === d ? l.prefix : l.delimiter) + f
                }
              } else {
                if (
                  ((f = l.asterisk
                    ? encodeURI(p).replace(/[?#]/g, function(t) {
                        return (
                          '%' +
                          t
                            .charCodeAt(0)
                            .toString(16)
                            .toUpperCase()
                        )
                      })
                    : u(p)),
                  !e[s].test(f))
                )
                  throw new TypeError(
                    'Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + f + '"'
                  )
                i += l.prefix + f
              }
            } else i += l
          }
          return i
        }
      }
      function u(t) {
        return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
      }
      function s(t) {
        return t.replace(/([=!:$\/()])/g, '\\$1')
      }
      function l(t, e) {
        return (t.keys = e), t
      }
      function f(t) {
        return t.sensitive ? '' : 'i'
      }
      function p(t, e, n) {
        r(e) || ((n = e || n), (e = []))
        for (var o = (n = n || {}).strict, i = !1 !== n.end, a = '', c = 0; c < t.length; c++) {
          var s = t[c]
          if ('string' == typeof s) a += u(s)
          else {
            var p = u(s.prefix),
              d = '(?:' + s.pattern + ')'
            e.push(s),
              s.repeat && (d += '(?:' + p + d + ')*'),
              (a += d = s.optional ? (s.partial ? p + '(' + d + ')?' : '(?:' + p + '(' + d + '))?') : p + '(' + d + ')')
          }
        }
        var v = u(n.delimiter || '/'),
          h = a.slice(-v.length) === v
        return (
          o || (a = (h ? a.slice(0, -v.length) : a) + '(?:' + v + '(?=$))?'),
          (a += i ? '$' : o && h ? '' : '(?=' + v + '|$)'),
          l(new RegExp('^' + a, f(n)), e)
        )
      }
      function d(t, e, n) {
        return (
          r(e) || ((n = e || n), (e = [])),
          (n = n || {}),
          t instanceof RegExp
            ? (function(t, e) {
                var n = t.source.match(/\((?!\?)/g)
                if (n)
                  for (var r = 0; r < n.length; r++)
                    e.push({
                      name: r,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null
                    })
                return l(t, e)
              })(t, e)
            : r(t)
            ? (function(t, e, n) {
                for (var r = [], o = 0; o < t.length; o++) r.push(d(t[o], e, n).source)
                return l(new RegExp('(?:' + r.join('|') + ')', f(n)), e)
              })(t, e, n)
            : (function(t, e, n) {
                return p(i(t, n), e, n)
              })(t, e, n)
        )
      }
    },
    function(t, e, n) {
      'use strict'
      t.exports = n(20)
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(21)
      e.Page = r.default
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(25)
      e.Header = r.default
    },
    function(t, e, n) {
      'use strict'
      function r(t, e) {
        ;(t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e)
      }
      n.r(e)
      var o = n(0),
        i = n.n(o),
        a = n(3),
        c = n.n(a)
      function u() {
        return (u =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
          }).apply(this, arguments)
      }
      function s(t) {
        return '/' === t.charAt(0)
      }
      function l(t, e) {
        for (var n = e, r = n + 1, o = t.length; r < o; n += 1, r += 1) t[n] = t[r]
        t.pop()
      }
      var f = function(t, e) {
        void 0 === e && (e = '')
        var n,
          r = (t && t.split('/')) || [],
          o = (e && e.split('/')) || [],
          i = t && s(t),
          a = e && s(e),
          c = i || a
        if ((t && s(t) ? (o = r) : r.length && (o.pop(), (o = o.concat(r))), !o.length)) return '/'
        if (o.length) {
          var u = o[o.length - 1]
          n = '.' === u || '..' === u || '' === u
        } else n = !1
        for (var f = 0, p = o.length; p >= 0; p--) {
          var d = o[p]
          '.' === d ? l(o, p) : '..' === d ? (l(o, p), f++) : f && (l(o, p), f--)
        }
        if (!c) for (; f--; f) o.unshift('..')
        !c || '' === o[0] || (o[0] && s(o[0])) || o.unshift('')
        var v = o.join('/')
        return n && '/' !== v.substr(-1) && (v += '/'), v
      }
      function p(t) {
        return t.valueOf ? t.valueOf() : Object.prototype.valueOf.call(t)
      }
      var d = function t(e, n) {
          if (e === n) return !0
          if (null == e || null == n) return !1
          if (Array.isArray(e))
            return (
              Array.isArray(n) &&
              e.length === n.length &&
              e.every(function(e, r) {
                return t(e, n[r])
              })
            )
          if ('object' == typeof e || 'object' == typeof n) {
            var r = p(e),
              o = p(n)
            return r !== e || o !== n
              ? t(r, o)
              : Object.keys(Object.assign({}, e, n)).every(function(r) {
                  return t(e[r], n[r])
                })
          }
          return !1
        },
        v = !0,
        h = 'Invariant failed'
      var m = function(t, e) {
        if (!t) throw v ? new Error(h) : new Error(h + ': ' + (e || ''))
      }
      function y(t) {
        return '/' === t.charAt(0) ? t : '/' + t
      }
      function g(t) {
        return '/' === t.charAt(0) ? t.substr(1) : t
      }
      function b(t, e) {
        return (function(t, e) {
          return 0 === t.toLowerCase().indexOf(e.toLowerCase()) && -1 !== '/?#'.indexOf(t.charAt(e.length))
        })(t, e)
          ? t.substr(e.length)
          : t
      }
      function x(t) {
        return '/' === t.charAt(t.length - 1) ? t.slice(0, -1) : t
      }
      function w(t) {
        var e = t.pathname,
          n = t.search,
          r = t.hash,
          o = e || '/'
        return (
          n && '?' !== n && (o += '?' === n.charAt(0) ? n : '?' + n),
          r && '#' !== r && (o += '#' === r.charAt(0) ? r : '#' + r),
          o
        )
      }
      function P(t, e, n, r) {
        var o
        'string' == typeof t
          ? ((o = (function(t) {
              var e = t || '/',
                n = '',
                r = '',
                o = e.indexOf('#')
              ;-1 !== o && ((r = e.substr(o)), (e = e.substr(0, o)))
              var i = e.indexOf('?')
              return (
                -1 !== i && ((n = e.substr(i)), (e = e.substr(0, i))),
                { pathname: e, search: '?' === n ? '' : n, hash: '#' === r ? '' : r }
              )
            })(t)).state = e)
          : (void 0 === (o = u({}, t)).pathname && (o.pathname = ''),
            o.search ? '?' !== o.search.charAt(0) && (o.search = '?' + o.search) : (o.search = ''),
            o.hash ? '#' !== o.hash.charAt(0) && (o.hash = '#' + o.hash) : (o.hash = ''),
            void 0 !== e && void 0 === o.state && (o.state = e))
        try {
          o.pathname = decodeURI(o.pathname)
        } catch (t) {
          throw t instanceof URIError
            ? new URIError(
                'Pathname "' +
                  o.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : t
        }
        return (
          n && (o.key = n),
          r
            ? o.pathname
              ? '/' !== o.pathname.charAt(0) && (o.pathname = f(o.pathname, r.pathname))
              : (o.pathname = r.pathname)
            : o.pathname || (o.pathname = '/'),
          o
        )
      }
      function _() {
        var t = null
        var e = []
        return {
          setPrompt: function(e) {
            return (
              (t = e),
              function() {
                t === e && (t = null)
              }
            )
          },
          confirmTransitionTo: function(e, n, r, o) {
            if (null != t) {
              var i = 'function' == typeof t ? t(e, n) : t
              'string' == typeof i ? ('function' == typeof r ? r(i, o) : o(!0)) : o(!1 !== i)
            } else o(!0)
          },
          appendListener: function(t) {
            var n = !0
            function r() {
              n && t.apply(void 0, arguments)
            }
            return (
              e.push(r),
              function() {
                ;(n = !1),
                  (e = e.filter(function(t) {
                    return t !== r
                  }))
              }
            )
          },
          notifyListeners: function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
            e.forEach(function(t) {
              return t.apply(void 0, n)
            })
          }
        }
      }
      var O = !('undefined' == typeof window || !window.document || !window.document.createElement)
      function E(t, e) {
        e(window.confirm(t))
      }
      var j = 'popstate',
        k = 'hashchange'
      function C() {
        try {
          return window.history.state || {}
        } catch (t) {
          return {}
        }
      }
      function S(t) {
        void 0 === t && (t = {}), O || m(!1)
        var e,
          n = window.history,
          r =
            ((-1 === (e = window.navigator.userAgent).indexOf('Android 2.') && -1 === e.indexOf('Android 4.0')) ||
              -1 === e.indexOf('Mobile Safari') ||
              -1 !== e.indexOf('Chrome') ||
              -1 !== e.indexOf('Windows Phone')) &&
            window.history &&
            'pushState' in window.history,
          o = !(-1 === window.navigator.userAgent.indexOf('Trident')),
          i = t,
          a = i.forceRefresh,
          c = void 0 !== a && a,
          s = i.getUserConfirmation,
          l = void 0 === s ? E : s,
          f = i.keyLength,
          p = void 0 === f ? 6 : f,
          d = t.basename ? x(y(t.basename)) : ''
        function v(t) {
          var e = t || {},
            n = e.key,
            r = e.state,
            o = window.location,
            i = o.pathname + o.search + o.hash
          return d && (i = b(i, d)), P(i, r, n)
        }
        function h() {
          return Math.random()
            .toString(36)
            .substr(2, p)
        }
        var g = _()
        function S(t) {
          u(H, t), (H.length = n.length), g.notifyListeners(H.location, H.action)
        }
        function M(t) {
          ;(function(t) {
            return void 0 === t.state && -1 === navigator.userAgent.indexOf('CriOS')
          })(t) || N(v(t.state))
        }
        function R() {
          N(v(C()))
        }
        var A = !1
        function N(t) {
          if (A) (A = !1), S()
          else {
            g.confirmTransitionTo(t, 'POP', l, function(e) {
              e
                ? S({ action: 'POP', location: t })
                : (function(t) {
                    var e = H.location,
                      n = L.indexOf(e.key)
                    ;-1 === n && (n = 0)
                    var r = L.indexOf(t.key)
                    ;-1 === r && (r = 0)
                    var o = n - r
                    o && ((A = !0), U(o))
                  })(t)
            })
          }
        }
        var T = v(C()),
          L = [T.key]
        function $(t) {
          return d + w(t)
        }
        function U(t) {
          n.go(t)
        }
        var B = 0
        function I(t) {
          1 === (B += t) && 1 === t
            ? (window.addEventListener(j, M), o && window.addEventListener(k, R))
            : 0 === B && (window.removeEventListener(j, M), o && window.removeEventListener(k, R))
        }
        var F = !1
        var H = {
          length: n.length,
          action: 'POP',
          location: T,
          createHref: $,
          push: function(t, e) {
            var o = P(t, e, h(), H.location)
            g.confirmTransitionTo(o, 'PUSH', l, function(t) {
              if (t) {
                var e = $(o),
                  i = o.key,
                  a = o.state
                if (r)
                  if ((n.pushState({ key: i, state: a }, null, e), c)) window.location.href = e
                  else {
                    var u = L.indexOf(H.location.key),
                      s = L.slice(0, u + 1)
                    s.push(o.key), (L = s), S({ action: 'PUSH', location: o })
                  }
                else window.location.href = e
              }
            })
          },
          replace: function(t, e) {
            var o = P(t, e, h(), H.location)
            g.confirmTransitionTo(o, 'REPLACE', l, function(t) {
              if (t) {
                var e = $(o),
                  i = o.key,
                  a = o.state
                if (r)
                  if ((n.replaceState({ key: i, state: a }, null, e), c)) window.location.replace(e)
                  else {
                    var u = L.indexOf(H.location.key)
                    ;-1 !== u && (L[u] = o.key), S({ action: 'REPLACE', location: o })
                  }
                else window.location.replace(e)
              }
            })
          },
          go: U,
          goBack: function() {
            U(-1)
          },
          goForward: function() {
            U(1)
          },
          block: function(t) {
            void 0 === t && (t = !1)
            var e = g.setPrompt(t)
            return (
              F || (I(1), (F = !0)),
              function() {
                return F && ((F = !1), I(-1)), e()
              }
            )
          },
          listen: function(t) {
            var e = g.appendListener(t)
            return (
              I(1),
              function() {
                I(-1), e()
              }
            )
          }
        }
        return H
      }
      var M = 'hashchange',
        R = {
          hashbang: {
            encodePath: function(t) {
              return '!' === t.charAt(0) ? t : '!/' + g(t)
            },
            decodePath: function(t) {
              return '!' === t.charAt(0) ? t.substr(1) : t
            }
          },
          noslash: { encodePath: g, decodePath: y },
          slash: { encodePath: y, decodePath: y }
        }
      function A(t) {
        var e = t.indexOf('#')
        return -1 === e ? t : t.slice(0, e)
      }
      function N() {
        var t = window.location.href,
          e = t.indexOf('#')
        return -1 === e ? '' : t.substring(e + 1)
      }
      function T(t) {
        window.location.replace(A(window.location.href) + '#' + t)
      }
      function L(t) {
        void 0 === t && (t = {}), O || m(!1)
        var e = window.history,
          n = (window.navigator.userAgent.indexOf('Firefox'), t),
          r = n.getUserConfirmation,
          o = void 0 === r ? E : r,
          i = n.hashType,
          a = void 0 === i ? 'slash' : i,
          c = t.basename ? x(y(t.basename)) : '',
          s = R[a],
          l = s.encodePath,
          f = s.decodePath
        function p() {
          var t = f(N())
          return c && (t = b(t, c)), P(t)
        }
        var d = _()
        function v(t) {
          u(F, t), (F.length = e.length), d.notifyListeners(F.location, F.action)
        }
        var h = !1,
          g = null
        function j() {
          var t,
            e,
            n = N(),
            r = l(n)
          if (n !== r) T(r)
          else {
            var i = p(),
              a = F.location
            if (!h && ((e = i), (t = a).pathname === e.pathname && t.search === e.search && t.hash === e.hash)) return
            if (g === w(i)) return
            ;(g = null),
              (function(t) {
                if (h) (h = !1), v()
                else {
                  d.confirmTransitionTo(t, 'POP', o, function(e) {
                    e
                      ? v({ action: 'POP', location: t })
                      : (function(t) {
                          var e = F.location,
                            n = L.lastIndexOf(w(e))
                          ;-1 === n && (n = 0)
                          var r = L.lastIndexOf(w(t))
                          ;-1 === r && (r = 0)
                          var o = n - r
                          o && ((h = !0), $(o))
                        })(t)
                  })
                }
              })(i)
          }
        }
        var k = N(),
          C = l(k)
        k !== C && T(C)
        var S = p(),
          L = [w(S)]
        function $(t) {
          e.go(t)
        }
        var U = 0
        function B(t) {
          1 === (U += t) && 1 === t ? window.addEventListener(M, j) : 0 === U && window.removeEventListener(M, j)
        }
        var I = !1
        var F = {
          length: e.length,
          action: 'POP',
          location: S,
          createHref: function(t) {
            var e = document.querySelector('base'),
              n = ''
            return e && e.getAttribute('href') && (n = A(window.location.href)), n + '#' + l(c + w(t))
          },
          push: function(t, e) {
            var n = P(t, void 0, void 0, F.location)
            d.confirmTransitionTo(n, 'PUSH', o, function(t) {
              if (t) {
                var e = w(n),
                  r = l(c + e)
                if (N() !== r) {
                  ;(g = e),
                    (function(t) {
                      window.location.hash = t
                    })(r)
                  var o = L.lastIndexOf(w(F.location)),
                    i = L.slice(0, o + 1)
                  i.push(e), (L = i), v({ action: 'PUSH', location: n })
                } else v()
              }
            })
          },
          replace: function(t, e) {
            var n = P(t, void 0, void 0, F.location)
            d.confirmTransitionTo(n, 'REPLACE', o, function(t) {
              if (t) {
                var e = w(n),
                  r = l(c + e)
                N() !== r && ((g = e), T(r))
                var o = L.indexOf(w(F.location))
                ;-1 !== o && (L[o] = e), v({ action: 'REPLACE', location: n })
              }
            })
          },
          go: $,
          goBack: function() {
            $(-1)
          },
          goForward: function() {
            $(1)
          },
          block: function(t) {
            void 0 === t && (t = !1)
            var e = d.setPrompt(t)
            return (
              I || (B(1), (I = !0)),
              function() {
                return I && ((I = !1), B(-1)), e()
              }
            )
          },
          listen: function(t) {
            var e = d.appendListener(t)
            return (
              B(1),
              function() {
                B(-1), e()
              }
            )
          }
        }
        return F
      }
      function $(t, e, n) {
        return Math.min(Math.max(t, e), n)
      }
      var U = n(5),
        B = n.n(U),
        I = n(11),
        F = n.n(I),
        H = 1073741823
      var W =
          i.a.createContext ||
          function(t, e) {
            var n,
              r,
              i = '__create-react-context-' + F()() + '__',
              a = (function(t) {
                function n() {
                  var e, n, r
                  return (
                    ((e = t.apply(this, arguments) || this).emitter =
                      ((n = e.props.value),
                      (r = []),
                      {
                        on: function(t) {
                          r.push(t)
                        },
                        off: function(t) {
                          r = r.filter(function(e) {
                            return e !== t
                          })
                        },
                        get: function() {
                          return n
                        },
                        set: function(t, e) {
                          ;(n = t),
                            r.forEach(function(t) {
                              return t(n, e)
                            })
                        }
                      })),
                    e
                  )
                }
                B()(n, t)
                var r = n.prototype
                return (
                  (r.getChildContext = function() {
                    var t
                    return ((t = {})[i] = this.emitter), t
                  }),
                  (r.componentWillReceiveProps = function(t) {
                    if (this.props.value !== t.value) {
                      var n,
                        r = this.props.value,
                        o = t.value
                      ;((i = r) === (a = o)
                      ? 0 !== i || 1 / i == 1 / a
                      : i != i && a != a)
                        ? (n = 0)
                        : ((n = 'function' == typeof e ? e(r, o) : H), 0 !== (n |= 0) && this.emitter.set(t.value, n))
                    }
                    var i, a
                  }),
                  (r.render = function() {
                    return this.props.children
                  }),
                  n
                )
              })(o.Component)
            a.childContextTypes = (((n = {})[i] = c.a.object.isRequired), n)
            var u = (function(e) {
              function n() {
                var t
                return (
                  ((t = e.apply(this, arguments) || this).state = { value: t.getValue() }),
                  (t.onUpdate = function(e, n) {
                    0 != ((0 | t.observedBits) & n) && t.setState({ value: t.getValue() })
                  }),
                  t
                )
              }
              B()(n, e)
              var r = n.prototype
              return (
                (r.componentWillReceiveProps = function(t) {
                  var e = t.observedBits
                  this.observedBits = null == e ? H : e
                }),
                (r.componentDidMount = function() {
                  this.context[i] && this.context[i].on(this.onUpdate)
                  var t = this.props.observedBits
                  this.observedBits = null == t ? H : t
                }),
                (r.componentWillUnmount = function() {
                  this.context[i] && this.context[i].off(this.onUpdate)
                }),
                (r.getValue = function() {
                  return this.context[i] ? this.context[i].get() : t
                }),
                (r.render = function() {
                  return ((t = this.props.children), Array.isArray(t) ? t[0] : t)(this.state.value)
                  var t
                }),
                n
              )
            })(o.Component)
            return (u.contextTypes = (((r = {})[i] = c.a.object), r)), { Provider: a, Consumer: u }
          },
        D = n(6),
        q = n.n(D)
      n(7)
      function V(t, e) {
        if (null == t) return {}
        var n,
          r,
          o = {},
          i = Object.keys(t)
        for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n])
        return o
      }
      var K = n(12),
        z = n.n(K),
        J = (function(t) {
          var e = W()
          return (e.displayName = t), e
        })('Router'),
        Y = (function(t) {
          function e(e) {
            var n
            return (
              ((n = t.call(this, e) || this).state = { location: e.history.location }),
              (n._isMounted = !1),
              (n._pendingLocation = null),
              e.staticContext ||
                (n.unlisten = e.history.listen(function(t) {
                  n._isMounted ? n.setState({ location: t }) : (n._pendingLocation = t)
                })),
              n
            )
          }
          r(e, t),
            (e.computeRootMatch = function(t) {
              return { path: '/', url: '/', params: {}, isExact: '/' === t }
            })
          var n = e.prototype
          return (
            (n.componentDidMount = function() {
              ;(this._isMounted = !0), this._pendingLocation && this.setState({ location: this._pendingLocation })
            }),
            (n.componentWillUnmount = function() {
              this.unlisten && this.unlisten()
            }),
            (n.render = function() {
              return i.a.createElement(J.Provider, {
                children: this.props.children || null,
                value: {
                  history: this.props.history,
                  location: this.state.location,
                  match: e.computeRootMatch(this.state.location.pathname),
                  staticContext: this.props.staticContext
                }
              })
            }),
            e
          )
        })(i.a.Component)
      var G = (function(t) {
        function e() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
          return (
            ((e = t.call.apply(t, [this].concat(r)) || this).history = (function(t) {
              void 0 === t && (t = {})
              var e = t,
                n = e.getUserConfirmation,
                r = e.initialEntries,
                o = void 0 === r ? ['/'] : r,
                i = e.initialIndex,
                a = void 0 === i ? 0 : i,
                c = e.keyLength,
                s = void 0 === c ? 6 : c,
                l = _()
              function f(t) {
                u(y, t), (y.length = y.entries.length), l.notifyListeners(y.location, y.action)
              }
              function p() {
                return Math.random()
                  .toString(36)
                  .substr(2, s)
              }
              var d = $(a, 0, o.length - 1),
                v = o.map(function(t) {
                  return P(t, void 0, 'string' == typeof t ? p() : t.key || p())
                }),
                h = w
              function m(t) {
                var e = $(y.index + t, 0, y.entries.length - 1),
                  r = y.entries[e]
                l.confirmTransitionTo(r, 'POP', n, function(t) {
                  t ? f({ action: 'POP', location: r, index: e }) : f()
                })
              }
              var y = {
                length: v.length,
                action: 'POP',
                location: v[d],
                index: d,
                entries: v,
                createHref: h,
                push: function(t, e) {
                  var r = P(t, e, p(), y.location)
                  l.confirmTransitionTo(r, 'PUSH', n, function(t) {
                    if (t) {
                      var e = y.index + 1,
                        n = y.entries.slice(0)
                      n.length > e ? n.splice(e, n.length - e, r) : n.push(r),
                        f({ action: 'PUSH', location: r, index: e, entries: n })
                    }
                  })
                },
                replace: function(t, e) {
                  var r = P(t, e, p(), y.location)
                  l.confirmTransitionTo(r, 'REPLACE', n, function(t) {
                    t && ((y.entries[y.index] = r), f({ action: 'REPLACE', location: r }))
                  })
                },
                go: m,
                goBack: function() {
                  m(-1)
                },
                goForward: function() {
                  m(1)
                },
                canGo: function(t) {
                  var e = y.index + t
                  return e >= 0 && e < y.entries.length
                },
                block: function(t) {
                  return void 0 === t && (t = !1), l.setPrompt(t)
                },
                listen: function(t) {
                  return l.appendListener(t)
                }
              }
              return y
            })(e.props)),
            e
          )
        }
        return (
          r(e, t),
          (e.prototype.render = function() {
            return i.a.createElement(Y, { history: this.history, children: this.props.children })
          }),
          e
        )
      })(i.a.Component)
      var X = (function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        r(e, t)
        var n = e.prototype
        return (
          (n.componentDidMount = function() {
            this.props.onMount && this.props.onMount.call(this, this)
          }),
          (n.componentDidUpdate = function(t) {
            this.props.onUpdate && this.props.onUpdate.call(this, this, t)
          }),
          (n.componentWillUnmount = function() {
            this.props.onUnmount && this.props.onUnmount.call(this, this)
          }),
          (n.render = function() {
            return null
          }),
          e
        )
      })(i.a.Component)
      function Q(t) {
        var e = t.message,
          n = t.when,
          r = void 0 === n || n
        return i.a.createElement(J.Consumer, null, function(t) {
          if ((t || m(!1), !r || t.staticContext)) return null
          var n = t.history.block
          return i.a.createElement(X, {
            onMount: function(t) {
              t.release = n(e)
            },
            onUpdate: function(t, r) {
              r.message !== e && (t.release(), (t.release = n(e)))
            },
            onUnmount: function(t) {
              t.release()
            },
            message: e
          })
        })
      }
      var Z = {},
        tt = 1e4,
        et = 0
      function nt(t, e) {
        return (
          void 0 === t && (t = '/'),
          void 0 === e && (e = {}),
          '/' === t
            ? t
            : (function(t) {
                if (Z[t]) return Z[t]
                var e = q.a.compile(t)
                return et < tt && ((Z[t] = e), et++), e
              })(t)(e, { pretty: !0 })
        )
      }
      function rt(t) {
        var e = t.computedMatch,
          n = t.to,
          r = t.push,
          o = void 0 !== r && r
        return i.a.createElement(J.Consumer, null, function(t) {
          t || m(!1)
          var r = t.history,
            a = t.staticContext,
            c = o ? r.push : r.replace,
            s = P(e ? ('string' == typeof n ? nt(n, e.params) : u({}, n, { pathname: nt(n.pathname, e.params) })) : n)
          return a
            ? (c(s), null)
            : i.a.createElement(X, {
                onMount: function() {
                  c(s)
                },
                onUpdate: function(t, e) {
                  var n,
                    r,
                    o = P(e.to)
                  ;(n = o),
                    (r = u({}, s, { key: o.key })),
                    (n.pathname === r.pathname &&
                      n.search === r.search &&
                      n.hash === r.hash &&
                      n.key === r.key &&
                      d(n.state, r.state)) ||
                      c(s)
                },
                to: n
              })
        })
      }
      var ot = {},
        it = 1e4,
        at = 0
      function ct(t, e) {
        void 0 === e && (e = {}), ('string' == typeof e || Array.isArray(e)) && (e = { path: e })
        var n = e,
          r = n.path,
          o = n.exact,
          i = void 0 !== o && o,
          a = n.strict,
          c = void 0 !== a && a,
          u = n.sensitive,
          s = void 0 !== u && u
        return [].concat(r).reduce(function(e, n) {
          if (!n && '' !== n) return null
          if (e) return e
          var r = (function(t, e) {
              var n = '' + e.end + e.strict + e.sensitive,
                r = ot[n] || (ot[n] = {})
              if (r[t]) return r[t]
              var o = [],
                i = { regexp: q()(t, o, e), keys: o }
              return at < it && ((r[t] = i), at++), i
            })(n, { end: i, strict: c, sensitive: s }),
            o = r.regexp,
            a = r.keys,
            u = o.exec(t)
          if (!u) return null
          var l = u[0],
            f = u.slice(1),
            p = t === l
          return i && !p
            ? null
            : {
                path: n,
                url: '/' === n && '' === l ? '/' : l,
                isExact: p,
                params: a.reduce(function(t, e, n) {
                  return (t[e.name] = f[n]), t
                }, {})
              }
        }, null)
      }
      var ut = (function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        return (
          r(e, t),
          (e.prototype.render = function() {
            var t = this
            return i.a.createElement(J.Consumer, null, function(e) {
              e || m(!1)
              var n = t.props.location || e.location,
                r = u({}, e, {
                  location: n,
                  match: t.props.computedMatch
                    ? t.props.computedMatch
                    : t.props.path
                    ? ct(n.pathname, t.props)
                    : e.match
                }),
                o = t.props,
                a = o.children,
                c = o.component,
                s = o.render
              return (
                Array.isArray(a) && 0 === a.length && (a = null),
                i.a.createElement(
                  J.Provider,
                  { value: r },
                  r.match
                    ? a
                      ? 'function' == typeof a
                        ? a(r)
                        : a
                      : c
                      ? i.a.createElement(c, r)
                      : s
                      ? s(r)
                      : null
                    : 'function' == typeof a
                    ? a(r)
                    : null
                )
              )
            })
          }),
          e
        )
      })(i.a.Component)
      function st(t) {
        return '/' === t.charAt(0) ? t : '/' + t
      }
      function lt(t, e) {
        if (!t) return e
        var n = st(t)
        return 0 !== e.pathname.indexOf(n) ? e : u({}, e, { pathname: e.pathname.substr(n.length) })
      }
      function ft(t) {
        return 'string' == typeof t ? t : w(t)
      }
      function pt(t) {
        return function() {
          m(!1)
        }
      }
      function dt() {}
      var vt = (function(t) {
        function e() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
          return (
            ((e = t.call.apply(t, [this].concat(r)) || this).handlePush = function(t) {
              return e.navigateTo(t, 'PUSH')
            }),
            (e.handleReplace = function(t) {
              return e.navigateTo(t, 'REPLACE')
            }),
            (e.handleListen = function() {
              return dt
            }),
            (e.handleBlock = function() {
              return dt
            }),
            e
          )
        }
        r(e, t)
        var n = e.prototype
        return (
          (n.navigateTo = function(t, e) {
            var n = this.props,
              r = n.basename,
              o = void 0 === r ? '' : r,
              i = n.context,
              a = void 0 === i ? {} : i
            ;(a.action = e),
              (a.location = (function(t, e) {
                return t ? u({}, e, { pathname: st(t) + e.pathname }) : e
              })(o, P(t))),
              (a.url = ft(a.location))
          }),
          (n.render = function() {
            var t = this.props,
              e = t.basename,
              n = void 0 === e ? '' : e,
              r = t.context,
              o = void 0 === r ? {} : r,
              a = t.location,
              c = void 0 === a ? '/' : a,
              s = V(t, ['basename', 'context', 'location']),
              l = {
                createHref: function(t) {
                  return st(n + ft(t))
                },
                action: 'POP',
                location: lt(n, P(c)),
                push: this.handlePush,
                replace: this.handleReplace,
                go: pt(),
                goBack: pt(),
                goForward: pt(),
                listen: this.handleListen,
                block: this.handleBlock
              }
            return i.a.createElement(Y, u({}, s, { history: l, staticContext: o }))
          }),
          e
        )
      })(i.a.Component)
      var ht = (function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        return (
          r(e, t),
          (e.prototype.render = function() {
            var t = this
            return i.a.createElement(J.Consumer, null, function(e) {
              e || m(!1)
              var n,
                r,
                o = t.props.location || e.location
              return (
                i.a.Children.forEach(t.props.children, function(t) {
                  if (null == r && i.a.isValidElement(t)) {
                    n = t
                    var a = t.props.path || t.props.from
                    r = a ? ct(o.pathname, u({}, t.props, { path: a })) : e.match
                  }
                }),
                r ? i.a.cloneElement(n, { location: o, computedMatch: r }) : null
              )
            })
          }),
          e
        )
      })(i.a.Component)
      function mt(t) {
        var e = 'withRouter(' + (t.displayName || t.name) + ')',
          n = function(e) {
            var n = e.wrappedComponentRef,
              r = V(e, ['wrappedComponentRef'])
            return i.a.createElement(J.Consumer, null, function(e) {
              return e || m(!1), i.a.createElement(t, u({}, r, e, { ref: n }))
            })
          }
        return (n.displayName = e), (n.WrappedComponent = t), z()(n, t)
      }
      var yt = i.a.useContext
      function gt() {
        return yt(J).history
      }
      function bt() {
        return yt(J).location
      }
      function xt() {
        var t = yt(J).match
        return t ? t.params : {}
      }
      function wt(t) {
        return t ? ct(bt().pathname, t) : yt(J).match
      }
      n.d(e, 'BrowserRouter', function() {
        return Pt
      }),
        n.d(e, 'HashRouter', function() {
          return _t
        }),
        n.d(e, 'Link', function() {
          return St
        }),
        n.d(e, 'NavLink', function() {
          return At
        }),
        n.d(e, 'MemoryRouter', function() {
          return G
        }),
        n.d(e, 'Prompt', function() {
          return Q
        }),
        n.d(e, 'Redirect', function() {
          return rt
        }),
        n.d(e, 'Route', function() {
          return ut
        }),
        n.d(e, 'Router', function() {
          return Y
        }),
        n.d(e, 'StaticRouter', function() {
          return vt
        }),
        n.d(e, 'Switch', function() {
          return ht
        }),
        n.d(e, '__RouterContext', function() {
          return J
        }),
        n.d(e, 'generatePath', function() {
          return nt
        }),
        n.d(e, 'matchPath', function() {
          return ct
        }),
        n.d(e, 'useHistory', function() {
          return gt
        }),
        n.d(e, 'useLocation', function() {
          return bt
        }),
        n.d(e, 'useParams', function() {
          return xt
        }),
        n.d(e, 'useRouteMatch', function() {
          return wt
        }),
        n.d(e, 'withRouter', function() {
          return mt
        })
      var Pt = (function(t) {
        function e() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
          return ((e = t.call.apply(t, [this].concat(r)) || this).history = S(e.props)), e
        }
        return (
          r(e, t),
          (e.prototype.render = function() {
            return i.a.createElement(Y, { history: this.history, children: this.props.children })
          }),
          e
        )
      })(i.a.Component)
      var _t = (function(t) {
        function e() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
          return ((e = t.call.apply(t, [this].concat(r)) || this).history = L(e.props)), e
        }
        return (
          r(e, t),
          (e.prototype.render = function() {
            return i.a.createElement(Y, { history: this.history, children: this.props.children })
          }),
          e
        )
      })(i.a.Component)
      var Ot = function(t, e) {
          return 'function' == typeof t ? t(e) : t
        },
        Et = function(t, e) {
          return 'string' == typeof t ? P(t, null, null, e) : t
        },
        jt = function(t) {
          return t
        },
        kt = i.a.forwardRef
      void 0 === kt && (kt = jt)
      var Ct = kt(function(t, e) {
        var n = t.innerRef,
          r = t.navigate,
          o = t.onClick,
          a = V(t, ['innerRef', 'navigate', 'onClick']),
          c = a.target,
          s = u({}, a, {
            onClick: function(t) {
              try {
                o && o(t)
              } catch (e) {
                throw (t.preventDefault(), e)
              }
              t.defaultPrevented ||
                0 !== t.button ||
                (c && '_self' !== c) ||
                (function(t) {
                  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
                })(t) ||
                (t.preventDefault(), r())
            }
          })
        return (s.ref = (jt !== kt && e) || n), i.a.createElement('a', s)
      })
      var St = kt(function(t, e) {
          var n = t.component,
            r = void 0 === n ? Ct : n,
            o = t.replace,
            a = t.to,
            c = t.innerRef,
            s = V(t, ['component', 'replace', 'to', 'innerRef'])
          return i.a.createElement(J.Consumer, null, function(t) {
            t || m(!1)
            var n = t.history,
              l = Et(Ot(a, t.location), t.location),
              f = l ? n.createHref(l) : '',
              p = u({}, s, {
                href: f,
                navigate: function() {
                  var e = Ot(a, t.location)
                  ;(o ? n.replace : n.push)(e)
                }
              })
            return jt !== kt ? (p.ref = e || c) : (p.innerRef = c), i.a.createElement(r, p)
          })
        }),
        Mt = function(t) {
          return t
        },
        Rt = i.a.forwardRef
      void 0 === Rt && (Rt = Mt)
      var At = Rt(function(t, e) {
        var n = t['aria-current'],
          r = void 0 === n ? 'page' : n,
          o = t.activeClassName,
          a = void 0 === o ? 'active' : o,
          c = t.activeStyle,
          s = t.className,
          l = t.exact,
          f = t.isActive,
          p = t.location,
          d = t.strict,
          v = t.style,
          h = t.to,
          y = t.innerRef,
          g = V(t, [
            'aria-current',
            'activeClassName',
            'activeStyle',
            'className',
            'exact',
            'isActive',
            'location',
            'strict',
            'style',
            'to',
            'innerRef'
          ])
        return i.a.createElement(J.Consumer, null, function(t) {
          t || m(!1)
          var n = p || t.location,
            o = Et(Ot(h, n), n),
            b = o.pathname,
            x = b && b.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1'),
            w = x ? ct(n.pathname, { path: x, exact: l, strict: d }) : null,
            P = !!(f ? f(w, n) : w),
            _ = P
              ? (function() {
                  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
                  return e
                    .filter(function(t) {
                      return t
                    })
                    .join(' ')
                })(s, a)
              : s,
            O = P ? u({}, v, {}, c) : v,
            E = u({ 'aria-current': (P && r) || null, className: _, style: O, to: o }, g)
          return Mt !== Rt ? (E.ref = e || y) : (E.innerRef = y), i.a.createElement(St, E)
        })
      })
    },
    function(t, e, n) {
      'use strict'
      ;(function(e) {
        var n = '__global_unique_id__'
        t.exports = function() {
          return (e[n] = (e[n] || 0) + 1)
        }
      }.call(this, n(18)))
    },
    function(t, e, n) {
      'use strict'
      var r = n(7),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
        a = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
        c = {}
      function u(t) {
        return r.isMemo(t) ? a : c[t.$$typeof] || o
      }
      c[r.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }
      var s = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        v = Object.prototype
      t.exports = function t(e, n, r) {
        if ('string' != typeof n) {
          if (v) {
            var o = d(n)
            o && o !== v && t(e, o, r)
          }
          var a = l(n)
          f && (a = a.concat(f(n)))
          for (var c = u(e), h = u(n), m = 0; m < a.length; ++m) {
            var y = a[m]
            if (!(i[y] || (r && r[y]) || (h && h[y]) || (c && c[y]))) {
              var g = p(n, y)
              try {
                s(e, y, g)
              } catch (t) {}
            }
          }
          return e
        }
        return e
      }
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(14)
      e.App = r.App
      var o = n(33)
      e.Button = o.Button
      var i = n(9)
      e.Header = i.Header
      var a = n(36)
      e.Link = a.Link
      var c = n(2)
      e.Navigation = c.Navigation
      var u = n(2)
      e.NavigationBrand = u.NavigationBrand
      var s = n(2)
      e.NavigationList = s.NavigationList
      var l = n(2)
      e.NavigationItem = l.NavigationItem
      var f = n(2)
      e.NavigationLink = f.NavigationLink
      var p = n(8)
      e.Page = p.Page
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(15)
      e.App = r.default
    },
    function(t, e, n) {
      'use strict'
      var r =
        (this && this.__assign) ||
        function() {
          return (r =
            Object.assign ||
            function(t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
              return t
            }).apply(this, arguments)
        }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(0),
        i = n(0),
        a = n(0),
        c = n(10)
      n(32)
      var u = n(8),
        s = n(9),
        l = n(2)
      e.default = function(t) {
        var e = t.navigation,
          n = t.pages,
          f = a.useState(null),
          p = f[0],
          d = f[1]
        return (
          a.useEffect(function() {
            window.addEventListener('mousemove', function(t) {
              return d({ x: t.clientX, y: t.clientY })
            })
          }, []),
          o.createElement(
            i.Fragment,
            null,
            o.createElement(
              c.BrowserRouter,
              null,
              o.createElement(s.Header, null, e && o.createElement(l.Navigation, r({}, e))),
              o.createElement(
                c.Switch,
                null,
                n.map(function(t, e) {
                  return o.createElement(c.Route, { key: 'route-' + e, path: t.path, exact: t.exact }, function(e) {
                    return o.createElement(u.Page, { router: e, config: t.config })
                  })
                })
              )
            ),
            p && o.createElement('span', { className: 'cursor', style: { left: p.x, top: p.y } })
          )
        )
      }
    },
    function(t, e, n) {
      'use strict'
      var r = n(17)
      function o() {}
      function i() {}
      ;(i.resetWarningCache = o),
        (t.exports = function() {
          function t(t, e, n, o, i, a) {
            if (a !== r) {
              var c = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              )
              throw ((c.name = 'Invariant Violation'), c)
            }
          }
          function e() {
            return t
          }
          t.isRequired = t
          var n = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: i,
            resetWarningCache: o
          }
          return (n.PropTypes = n), n
        })
    },
    function(t, e, n) {
      'use strict'
      t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    function(t, e) {
      var n
      n = (function() {
        return this
      })()
      try {
        n = n || new Function('return this')()
      } catch (t) {
        'object' == typeof window && (n = window)
      }
      t.exports = n
    },
    function(t, e) {
      t.exports =
        Array.isArray ||
        function(t) {
          return '[object Array]' == Object.prototype.toString.call(t)
        }
    },
    function(t, e, n) {
      'use strict'
      /** @license React v16.10.2
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ Object.defineProperty(e, '__esModule', { value: !0 })
      var r = 'function' == typeof Symbol && Symbol.for,
        o = r ? Symbol.for('react.element') : 60103,
        i = r ? Symbol.for('react.portal') : 60106,
        a = r ? Symbol.for('react.fragment') : 60107,
        c = r ? Symbol.for('react.strict_mode') : 60108,
        u = r ? Symbol.for('react.profiler') : 60114,
        s = r ? Symbol.for('react.provider') : 60109,
        l = r ? Symbol.for('react.context') : 60110,
        f = r ? Symbol.for('react.async_mode') : 60111,
        p = r ? Symbol.for('react.concurrent_mode') : 60111,
        d = r ? Symbol.for('react.forward_ref') : 60112,
        v = r ? Symbol.for('react.suspense') : 60113,
        h = r ? Symbol.for('react.suspense_list') : 60120,
        m = r ? Symbol.for('react.memo') : 60115,
        y = r ? Symbol.for('react.lazy') : 60116,
        g = r ? Symbol.for('react.fundamental') : 60117,
        b = r ? Symbol.for('react.responder') : 60118,
        x = r ? Symbol.for('react.scope') : 60119
      function w(t) {
        if ('object' == typeof t && null !== t) {
          var e = t.$$typeof
          switch (e) {
            case o:
              switch ((t = t.type)) {
                case f:
                case p:
                case a:
                case u:
                case c:
                case v:
                  return t
                default:
                  switch ((t = t && t.$$typeof)) {
                    case l:
                    case d:
                    case s:
                      return t
                    default:
                      return e
                  }
              }
            case y:
            case m:
            case i:
              return e
          }
        }
      }
      function P(t) {
        return w(t) === p
      }
      ;(e.typeOf = w),
        (e.AsyncMode = f),
        (e.ConcurrentMode = p),
        (e.ContextConsumer = l),
        (e.ContextProvider = s),
        (e.Element = o),
        (e.ForwardRef = d),
        (e.Fragment = a),
        (e.Lazy = y),
        (e.Memo = m),
        (e.Portal = i),
        (e.Profiler = u),
        (e.StrictMode = c),
        (e.Suspense = v),
        (e.isValidElementType = function(t) {
          return (
            'string' == typeof t ||
            'function' == typeof t ||
            t === a ||
            t === p ||
            t === u ||
            t === c ||
            t === v ||
            t === h ||
            ('object' == typeof t &&
              null !== t &&
              (t.$$typeof === y ||
                t.$$typeof === m ||
                t.$$typeof === s ||
                t.$$typeof === l ||
                t.$$typeof === d ||
                t.$$typeof === g ||
                t.$$typeof === b ||
                t.$$typeof === x))
          )
        }),
        (e.isAsyncMode = function(t) {
          return P(t) || w(t) === f
        }),
        (e.isConcurrentMode = P),
        (e.isContextConsumer = function(t) {
          return w(t) === l
        }),
        (e.isContextProvider = function(t) {
          return w(t) === s
        }),
        (e.isElement = function(t) {
          return 'object' == typeof t && null !== t && t.$$typeof === o
        }),
        (e.isForwardRef = function(t) {
          return w(t) === d
        }),
        (e.isFragment = function(t) {
          return w(t) === a
        }),
        (e.isLazy = function(t) {
          return w(t) === y
        }),
        (e.isMemo = function(t) {
          return w(t) === m
        }),
        (e.isPortal = function(t) {
          return w(t) === i
        }),
        (e.isProfiler = function(t) {
          return w(t) === u
        }),
        (e.isStrictMode = function(t) {
          return w(t) === c
        }),
        (e.isSuspense = function(t) {
          return w(t) === v
        })
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(0),
        o = n(22)
      n(24)
      e.default = function(t) {
        var e = t.router,
          n = t.config,
          i = t.data,
          a = n.view
        return r.createElement(
          'main',
          { className: 'page' },
          r.createElement(a, {
            router: e,
            config: o.excludeFromObj(n, ['view', 'content']),
            content: n.content,
            data: i
          })
        )
      }
    },
    function(t, e, n) {
      t.exports = n(23)
    },
    function(t, e) {
      !(function(t, e) {
        for (var n in e) t[n] = e[n]
      })(
        e,
        (function(t) {
          var e = {}
          function n(r) {
            if (e[r]) return e[r].exports
            var o = (e[r] = { i: r, l: !1, exports: {} })
            return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.d = function(t, e, r) {
              n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
            }),
            (n.r = function(t) {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(t, '__esModule', { value: !0 })
            }),
            (n.t = function(t, e) {
              if ((1 & e && (t = n(t)), 8 & e)) return t
              if (4 & e && 'object' == typeof t && t && t.__esModule) return t
              var r = Object.create(null)
              if (
                (n.r(r),
                Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
                2 & e && 'string' != typeof t)
              )
                for (var o in t)
                  n.d(
                    r,
                    o,
                    function(e) {
                      return t[e]
                    }.bind(null, o)
                  )
              return r
            }),
            (n.n = function(t) {
              var e =
                t && t.__esModule
                  ? function() {
                      return t.default
                    }
                  : function() {
                      return t
                    }
              return n.d(e, 'a', e), e
            }),
            (n.o = function(t, e) {
              return Object.prototype.hasOwnProperty.call(t, e)
            }),
            (n.p = '/'),
            n((n.s = 0))
          )
        })([
          function(t, e, n) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            var r = n(1)
            e.capitalise = r.capitalise
            var o = n(3)
            e.excludeFromObj = o.excludeFromObj
            var i = n(5)
            e.ignoreWhitespace = i.ignoreWhitespace
          },
          function(t, e, n) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            var r = n(2)
            e.capitalise = r.default
          },
          function(t, e, n) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.default = function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
              })
          },
          function(t, e, n) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            var r = n(4)
            e.excludeFromObj = r.default
          },
          function(t, e, n) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.default = function(t, e) {
                return Object.keys(t).reduce(function(n, r) {
                  return e.includes(r) ? n : ((n[r] = t[r]), n)
                }, {})
              })
          },
          function(t, e, n) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            var r = n(6)
            e.ignoreWhitespace = r.default
          },
          function(t, e, n) {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.default = function(t) {
                return t.replace(/\s+/g, '')
              })
          }
        ])
      )
    },
    function(t, e, n) {},
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(0),
        o = n(1)
      n(39)
      e.default = function(t) {
        var e = t.children
        return r.createElement('header', { className: o('header') }, e)
      }
    },
    function(t, e, n) {
      'use strict'
      var r =
        (this && this.__assign) ||
        function() {
          return (r =
            Object.assign ||
            function(t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
              return t
            }).apply(this, arguments)
        }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = n(0),
        i = n(0),
        a = n(10),
        c = n(1)
      n(27)
      var u,
        s = n(2)
      e.default =
        ((u = function(t) {
          var e = t.className,
            n = t.router,
            a = t.brand,
            u = t.links,
            l = i.useState('50%'),
            f = l[0],
            p = l[1],
            d = u.filter(function(t) {
              return 'left' === t.location
            }),
            v = u.filter(function(t) {
              return 'right' === t.location
            }),
            h = function(t) {
              return n.history.location.pathname === t
            }
          return (
            i.useEffect(function() {
              var t = u.find(function(t, e) {
                  return h(t.href)
                }),
                e = u.indexOf(t),
                n = 'calc(50% - ' + document.querySelector('.nav__item').clientWidth * e + 'px - 50px)'
              f !== n && p(n)
            }),
            o.createElement(
              'nav',
              { className: c.default(e, 'nav'), style: { left: f } },
              a && 'left' === a.location && o.createElement(s.NavigationBrand, r({}, a)),
              d.length > 0 &&
                o.createElement(
                  s.NavigationList,
                  null,
                  d.map(function(t) {
                    return o.createElement(
                      s.NavigationItem,
                      { key: 'navItem-' + t.text, active: h(t.href) },
                      o.createElement(s.NavigationLink, { href: t.href, active: h(t.href) }, t.text)
                    )
                  })
                ),
              a && 'center' === a.location && o.createElement(s.NavigationBrand, r({}, a)),
              v.length > 0 &&
                o.createElement(
                  s.NavigationList,
                  null,
                  v.map(function(t) {
                    return o.createElement(
                      s.NavigationItem,
                      { key: 'navItem-' + t.text, active: h(t.href) },
                      o.createElement(s.NavigationLink, { href: t.href, active: h(t.href) }, t.text)
                    )
                  })
                ),
              a && 'right' === a.location && o.createElement(s.NavigationBrand, r({}, a))
            )
          )
        }),
        a.withRouter(function(t) {
          return o.createElement(u, r({}, t, { router: { history: t.history, location: t.location } }))
        }))
    },
    function(t, e, n) {},
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(0),
        o = n(1)
      e.default = function(t) {
        t.className
        var e = t.img
        t.children
        return (
          console.log(e),
          r.createElement(
            'a',
            { className: o.default('nav__brand') },
            r.createElement('img', { className: o.default('nav__img'), src: e })
          )
        )
      }
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(0),
        o = n(1)
      e.default = function(t) {
        t.className
        var e = t.children
        return r.createElement('ul', { className: o.default('nav__list') }, e)
      }
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(0),
        o = n(1)
      e.default = function(t) {
        t.className
        var e = t.active,
          n = t.children
        return r.createElement('li', { className: o.default('nav__item', { 'nav__item--active': e }) }, n)
      }
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(0),
        o = n(1),
        i = n(10)
      e.default = function(t) {
        t.className
        var e = t.href,
          n = t.active,
          a = t.children,
          c = t.onClick
        return r.createElement(
          i.NavLink,
          { className: o.default('nav__link', { 'nav__link--active': n }), to: e, onClick: c },
          a
        )
      }
    },
    function(t, e, n) {},
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(34)
      e.Button = r.default
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(0),
        o = n(1)
      n(35)
      e.default = function(t) {
        var e = t.className,
          n = t.href,
          i = t.type,
          a = t.submit,
          c = t.children,
          u = t.onClick,
          s = n ? 'a' : 'button'
        return r.createElement(
          s,
          {
            className: o.default(
              e,
              'btn',
              {
                Primary: 'btn--primary',
                Secondary: 'btn--secondary',
                Tertiary: 'btn--tertiary',
                Action: 'btn--action'
              }[i]
            ),
            type: a ? 'submit' : 'button',
            onClick: u
          },
          c
        )
      }
    },
    function(t, e, n) {},
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(37)
      e.Link = r.default
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(0),
        o = n(1)
      n(38)
      e.default = function(t) {
        var e = t.className,
          n = t.type
        t.href
        return r.createElement(
          'a',
          {
            className: o.default(
              e,
              'link',
              { Primary: 'link--primary', Secondary: 'link--secondary', Tertiary: 'link--tertiary' }[n]
            )
          },
          'Link'
        )
      }
    },
    function(t, e, n) {},
    function(t, e, n) {}
  ])
)
