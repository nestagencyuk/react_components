!(function(e, t) {
  for (var r in t) e[r] = t[r]
})(
  exports,
  (function(e) {
    var t = {}
    function r(n) {
      if (t[n]) return t[n].exports
      var a = (t[n] = { i: n, l: !1, exports: {} })
      return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
      }),
      (r.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (r.t = function(e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var n = Object.create(null)
        if ((r.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var a in e)
            r.d(
              n,
              a,
              function(t) {
                return e[t]
              }.bind(null, a)
            )
        return n
      }),
      (r.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return r.d(t, 'a', t), t
      }),
      (r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (r.p = '/'),
      r((r.s = 6))
    )
  })([
    function(e, t) {
      e.exports = require('react')
    },
    function(e, t, r) {
      var n
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function() {
        'use strict'
        var r = {}.hasOwnProperty
        function a() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t]
            if (n) {
              var i = typeof n
              if ('string' === i || 'number' === i) e.push(n)
              else if (Array.isArray(n) && n.length) {
                var u = a.apply(null, n)
                u && e.push(u)
              } else if ('object' === i) for (var o in n) r.call(n, o) && n[o] && e.push(o)
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((a.default = a), (e.exports = a))
          : void 0 ===
              (n = function() {
                return a
              }.apply(t, [])) || (e.exports = n)
      })()
    },
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(24)
      t.Navigation = n.default
      var a = r(26)
      t.NavigationBrand = a.default
      var i = r(27)
      t.NavigationList = i.default
      var u = r(28)
      t.NavigationItem = u.default
      var o = r(29)
      t.NavigationLink = o.default
    },
    function(e, t) {
      e.exports = require('react-router-dom')
    },
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(13)
      t.Grid = n.default
      var a = r(15)
      t.GridItem = a.default
    },
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(19)
      t.Text = n.default
    },
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(7)
      t.Block = n.Block
      var a = r(10)
      t.Button = a.Button
      var i = r(4)
      t.Grid = i.Grid
      var u = r(4)
      t.GridItem = u.GridItem
      var o = r(16)
      t.Header = o.Header
      var c = r(21)
      t.Link = c.Link
      var l = r(2)
      t.Navigation = l.Navigation
      var s = r(2)
      t.NavigationBrand = s.NavigationBrand
      var f = r(2)
      t.NavigationList = f.NavigationList
      var d = r(2)
      t.NavigationItem = d.NavigationItem
      var v = r(2)
      t.NavigationLink = v.NavigationLink
      var _ = r(30)
      t.Page = _.Page
      var p = r(5)
      t.Text = p.Text
    },
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(8)
      t.Block = n.default
    },
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(0),
        a = r(1)
      r(9)
      var i = { Fill: 'block--fill' }
      t.default = function(e) {
        var t = e.className,
          r = e.type,
          u = e.children
        return n.createElement('div', { className: a.default(t, 'block', i[r]) }, u)
      }
    },
    function(e, t, r) {},
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(11)
      t.Button = n.default
    },
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(0),
        a = r(1)
      r(12)
      var i = r(3),
        u = {
          Primary: 'btn--primary',
          Secondary: 'btn--secondary',
          Tertiary: 'btn--tertiary',
          Action: 'btn--action'
        }
      t.default = function(e) {
        var t = e.className,
          r = e.href,
          o = e.type,
          c = e.submit,
          l = e.children,
          s = e.onClick,
          f = r ? i.Link : 'button',
          d = c ? 'submit' : r ? void 0 : 'button'
        return n.createElement(f, { className: a.default(t, 'btn', u[o]), type: d, to: r, onClick: s }, l)
      }
    },
    function(e, t, r) {},
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(0),
        a = r(1)
      r(14)
      t.default = function(e) {
        var t = e.className,
          r = e.gutter,
          i = e.children
        return n.createElement('div', { className: a.default(t, 'grid', { 'grid--gutter': r }) }, i)
      }
    },
    function(e, t, r) {},
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(0),
        a = r(1),
        i = {
          Left: 'grid__item--left',
          Right: 'grid__item--right',
          Center: 'grid__item--center-x'
        },
        u = { Top: 'grid__item--top', Bottom: 'grid__item--bottom', Center: 'grid__item--center-y' }
      t.default = function(e) {
        var t = e.className,
          r = e.span,
          o = e.align,
          c = e.children
        return n.createElement(
          'div',
          {
            className: a.default(t, 'grid__item', r && 'grid__item--' + r, i[o && o.x], u[o && o.y])
          },
          c
        )
      }
    },
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(17)
      t.Header = n.default
    },
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(0),
        a = r(1)
      r(18)
      var i = r(5),
        u = { Fixed: 'header--fixed' }
      t.default = function(e) {
        var t = e.className,
          r = e.type,
          o = e.heading,
          c = e.subheading,
          l = e.children
        return n.createElement(
          'header',
          { className: a(t, 'header', u[r]) },
          o && n.createElement(i.Text, { tag: 'h1', type: 'Alpha' }, o),
          c && n.createElement(i.Text, { tag: 'h2', type: 'Beta' }, c),
          l
        )
      }
    },
    function(e, t, r) {},
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(0),
        a = r(1)
      r(20)
      t.default = function(e) {
        var t = e.className,
          r = e.type,
          i = e.tag,
          u = void 0 === i ? 'p' : i,
          o = e.children,
          c = 'p' !== u || r ? r : 'p',
          l = u
        return n.createElement(l, { className: a.default(t, c && c.toLowerCase()) }, o)
      }
    },
    function(e, t, r) {},
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(22)
      t.Link = n.default
    },
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(0),
        a = r(1)
      r(23)
      var i = r(3),
        u = { Primary: 'link--primary', Secondary: 'link--secondary', Tertiary: 'link--tertiary' }
      t.default = function(e) {
        var t = e.className,
          r = e.type,
          o = e.href,
          c = e.children
        return n.createElement(i.Link, { className: a.default(t, 'link', u[r]), to: o }, c)
      }
    },
    function(e, t, r) {},
    function(e, t, r) {
      'use strict'
      var n =
        (this && this.__assign) ||
        function() {
          return (n =
            Object.assign ||
            function(e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
              return e
            }).apply(this, arguments)
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(0),
        i = r(1)
      r(25)
      var u = r(2),
        o = { Start: 'nav--b-s', Center: 'nav--b-c', End: 'nav--b-e' },
        c = function() {
          return a.createElement('button', { className: i.default('nav__toggle') }, 'X')
        }
      t.default = function(e) {
        var t = e.className,
          r = e.style,
          l = e.brand,
          s = void 0 === l ? {} : l,
          f = e.links,
          d = void 0 === f ? [] : f,
          v = e.children,
          _ = d.filter(function(e) {
            return 'Start' === e.align
          }),
          p = d.filter(function(e) {
            return 'End' === e.align
          }),
          m = 'Start' === s.align,
          y = 'Center' === s.align,
          b = 'End' === s.align,
          g = function(e, t) {
            return (
              e.length > 0 &&
              a.createElement(
                u.NavigationList,
                { align: t },
                e.map(function(e) {
                  return a.createElement(
                    u.NavigationItem,
                    { key: 'navItem-' + e.text, active: e.active },
                    a.createElement(u.NavigationLink, n({}, e), e.text)
                  )
                })
              )
            )
          }
        return a.createElement(
          'nav',
          { className: i.default(t, 'nav', o[s.align]), style: r },
          m && a.createElement(u.NavigationBrand, n({}, s)),
          b && a.createElement(c, null),
          g(_, 'Start'),
          y && a.createElement(u.NavigationBrand, n({}, s)),
          g(p, 'End'),
          b && a.createElement(u.NavigationBrand, n({}, s)),
          (m || y) && a.createElement(c, null),
          v
        )
      }
    },
    function(e, t, r) {},
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(0),
        a = r(1),
        i = r(3)
      t.default = function(e) {
        var t = e.className,
          r = e.img,
          u = void 0 === r ? {} : r,
          o = e.href,
          c = void 0 === o ? '/' : o
        return n.createElement(
          i.Link,
          { className: a.default(t, 'nav__brand'), to: c },
          n.createElement('img', { className: a.default('nav__img'), src: u.src })
        )
      }
    },
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(0),
        a = r(1),
        i = { Start: 'nav__list--start', Center: 'nav__list--center', End: 'nav__list--end' }
      t.default = function(e) {
        var t = e.className,
          r = e.align,
          u = e.children
        return n.createElement('ul', { className: a.default(t, 'nav__list', i[r]) }, u)
      }
    },
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(0),
        a = r(1)
      t.default = function(e) {
        var t = e.className,
          r = e.active,
          i = e.children
        return n.createElement('li', { className: a.default(t, 'nav__item', { 'nav__item--active': r }) }, i)
      }
    },
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(0),
        a = r(1),
        i = r(3)
      t.default = function(e) {
        var t = e.className,
          r = e.component,
          u = e.href,
          o = e.active,
          c = e.children,
          l = e.onClick,
          s = r || i.Link
        return n.createElement(s, { className: a.default(t, 'nav__link', { 'nav__link--active': o }), to: u, onClick: l }, c)
      }
    },
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(31)
      t.Page = n.default
    },
    function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(0),
        a = r(0),
        i = r(32)
      r(33)
      t.default = function(e) {
        e.className
        var t = e.config,
          r = e.data,
          u = e.children,
          o = t.view
        return n.createElement(
          a.Fragment,
          null,
          n.createElement(o, {
            config: i.excludeFromObj(t, ['view', 'content']),
            content: t.content,
            data: r
          }),
          u
        )
      }
    },
    function(e, t) {
      !(function(e, t) {
        for (var r in t) e[r] = t[r]
      })(
        t,
        (function(e) {
          var t = {}
          function r(n) {
            if (t[n]) return t[n].exports
            var a = (t[n] = { i: n, l: !1, exports: {} })
            return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports
          }
          return (
            (r.m = e),
            (r.c = t),
            (r.d = function(e, t, n) {
              r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
            }),
            (r.r = function(e) {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 })
            }),
            (r.t = function(e, t) {
              if ((1 & t && (e = r(e)), 8 & t)) return e
              if (4 & t && 'object' == typeof e && e && e.__esModule) return e
              var n = Object.create(null)
              if ((r.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
                for (var a in e)
                  r.d(
                    n,
                    a,
                    function(t) {
                      return e[t]
                    }.bind(null, a)
                  )
              return n
            }),
            (r.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default
                    }
                  : function() {
                      return e
                    }
              return r.d(t, 'a', t), t
            }),
            (r.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
            }),
            (r.p = '/'),
            r((r.s = 0))
          )
        })([
          function(e, t, r) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 })
            var n = r(1)
            t.capitalise = n.capitalise
            var a = r(3)
            t.excludeFromObj = a.excludeFromObj
            var i = r(5)
            t.ignoreWhitespace = i.ignoreWhitespace
          },
          function(e, t, r) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 })
            var n = r(2)
            t.capitalise = n.default
          },
          function(e, t, r) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
              })
          },
          function(e, t, r) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 })
            var n = r(4)
            t.excludeFromObj = n.default
          },
          function(e, t, r) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e, t) {
                return Object.keys(e).reduce(function(r, n) {
                  return t.includes(n) ? r : ((r[n] = e[n]), r)
                }, {})
              })
          },
          function(e, t, r) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 })
            var n = r(6)
            t.ignoreWhitespace = n.default
          },
          function(e, t, r) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e) {
                return e.replace(/\s+/g, '')
              })
          }
        ])
      )
    },
    function(e, t, r) {}
  ])
)
