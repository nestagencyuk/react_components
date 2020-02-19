!(function(e, t) {
  for (var n in t) e[n] = t[n]
})(
  exports,
  (function(e) {
    var t = {}
    function n(r) {
      if (t[r]) return t[r].exports
      var a = (t[r] = { i: r, l: !1, exports: {} })
      return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var r = Object.create(null)
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var a in e)
            n.d(
              r,
              a,
              function(t) {
                return e[t]
              }.bind(null, a)
            )
        return r
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = '/'),
      n((n.s = 6))
    )
  })([
    function(e, t) {
      e.exports = require('react')
    },
    function(e, t, n) {
      var r
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function() {
        'use strict'
        var n = {}.hasOwnProperty
        function a() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t]
            if (r) {
              var i = typeof r
              if ('string' === i || 'number' === i) e.push(r)
              else if (Array.isArray(r) && r.length) {
                var u = a.apply(null, r)
                u && e.push(u)
              } else if ('object' === i) for (var l in r) n.call(r, l) && r[l] && e.push(l)
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((a.default = a), (e.exports = a))
          : void 0 ===
              (r = function() {
                return a
              }.apply(t, [])) || (e.exports = r)
      })()
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(27)
      t.Navigation = r.default
      var a = n(29)
      t.NavigationBrand = a.default
      var i = n(30)
      t.NavigationList = i.default
      var u = n(31)
      t.NavigationItem = u.default
      var l = n(32)
      t.NavigationLink = l.default
    },
    function(e, t) {
      e.exports = require('react-router-dom')
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(13)
      t.Grid = r.default
      var a = n(15)
      t.GridItem = a.default
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(19)
      t.Text = r.default
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(7)
      t.Block = r.Block
      var a = n(10)
      t.Button = a.Button
      var i = n(4)
      t.Grid = i.Grid
      var u = n(4)
      t.GridItem = u.GridItem
      var l = n(16)
      t.Header = l.Header
      var c = n(21)
      t.Input = c.Input
      var o = n(24)
      t.Link = o.Link
      var s = n(2)
      t.Navigation = s.Navigation
      var f = n(2)
      t.NavigationBrand = f.NavigationBrand
      var d = n(2)
      t.NavigationList = d.NavigationList
      var v = n(2)
      t.NavigationItem = v.NavigationItem
      var p = n(2)
      t.NavigationLink = p.NavigationLink
      var _ = n(33)
      t.Page = _.Page
      var m = n(37)
      t.Select = m.Select
      var y = n(5)
      t.Text = y.Text
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(8)
      t.Block = r.default
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(0),
        a = n(1)
      n(9)
      var i = { Fill: 'block--fill' }
      t.default = function(e) {
        var t = e.className,
          n = e.type,
          u = e.children
        return r.createElement('div', { className: a.default(t, 'block', i[n]) }, u)
      }
    },
    function(e, t, n) {},
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(11)
      t.Button = r.default
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(0),
        a = n(1)
      n(12)
      var i = n(3),
        u = { Primary: 'btn--primary', Secondary: 'btn--secondary', Tertiary: 'btn--tertiary', Action: 'btn--action' }
      t.default = function(e) {
        var t = e.className,
          n = e.href,
          l = e.type,
          c = e.submit,
          o = e.children,
          s = e.onClick,
          f = n ? i.Link : 'button',
          d = c ? 'submit' : n ? void 0 : 'button'
        return r.createElement(f, { className: a.default(t, 'btn', u[l]), type: d, to: n, onClick: s }, o)
      }
    },
    function(e, t, n) {},
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(0),
        a = n(1)
      n(14)
      t.default = function(e) {
        var t = e.className,
          n = e.gutter,
          i = e.children
        return r.createElement('div', { className: a.default(t, 'grid', { 'grid--gutter': n }) }, i)
      }
    },
    function(e, t, n) {},
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(0),
        a = n(1),
        i = { Left: 'grid__item--left', Right: 'grid__item--right', Center: 'grid__item--center-x' },
        u = { Top: 'grid__item--top', Bottom: 'grid__item--bottom', Center: 'grid__item--center-y' }
      t.default = function(e) {
        var t = e.className,
          n = e.span,
          l = e.align,
          c = e.children
        return r.createElement(
          'div',
          { className: a.default(t, 'grid__item', n && 'grid__item--' + n, i[l && l.x], u[l && l.y]) },
          c
        )
      }
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(17)
      t.Header = r.default
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(0),
        a = n(1)
      n(18)
      var i = n(5),
        u = { Fixed: 'header--fixed' }
      t.default = function(e) {
        var t = e.className,
          n = e.type,
          l = e.heading,
          c = e.subheading,
          o = e.children
        return r.createElement(
          'header',
          { className: a(t, 'header', u[n]) },
          l && r.createElement(i.Text, { tag: 'h1', type: 'Alpha' }, l),
          c && r.createElement(i.Text, { tag: 'h2', type: 'Beta' }, c),
          o
        )
      }
    },
    function(e, t, n) {},
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(0),
        a = n(1)
      n(20)
      t.default = function(e) {
        var t = e.className,
          n = e.type,
          i = e.tag,
          u = void 0 === i ? 'p' : i,
          l = e.children,
          c = 'p' !== u || n ? n : 'p',
          o = u
        return r.createElement(o, { className: a.default(t, c && c.toLowerCase()) }, l)
      }
    },
    function(e, t, n) {},
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(22)
      t.Input = r.default
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(0),
        a = n(1)
      n(23)
      t.default = function(e) {
        var t = e.className,
          n = e.type
        return r.createElement('input', { className: a.default(t, 'input'), type: n })
      }
    },
    function(e, t, n) {},
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(25)
      t.Link = r.default
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(0),
        a = n(1)
      n(26)
      var i = n(3),
        u = { Primary: 'link--primary', Secondary: 'link--secondary', Tertiary: 'link--tertiary' }
      t.default = function(e) {
        var t = e.className,
          n = e.type,
          l = e.href,
          c = e.children
        return r.createElement(i.Link, { className: a.default(t, 'link', u[n]), to: l }, c)
      }
    },
    function(e, t, n) {},
    function(e, t, n) {
      'use strict'
      var r =
        (this && this.__assign) ||
        function() {
          return (r =
            Object.assign ||
            function(e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
              return e
            }).apply(this, arguments)
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = n(0),
        i = n(1)
      n(28)
      var u = n(2),
        l = { Start: 'nav--b-s', Center: 'nav--b-c', End: 'nav--b-e' },
        c = function() {
          return a.createElement('button', { className: i.default('nav__toggle') }, 'X')
        }
      t.default = function(e) {
        var t = e.className,
          n = e.style,
          o = e.brand,
          s = void 0 === o ? {} : o,
          f = e.links,
          d = void 0 === f ? [] : f,
          v = e.children,
          p = d.filter(function(e) {
            return 'Start' === e.align
          }),
          _ = d.filter(function(e) {
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
                    a.createElement(u.NavigationLink, r({}, e), e.text)
                  )
                })
              )
            )
          }
        return a.createElement(
          'nav',
          { className: i.default(t, 'nav', l[s.align]), style: n },
          m && a.createElement(u.NavigationBrand, r({}, s)),
          b && a.createElement(c, null),
          g(p, 'Start'),
          y && a.createElement(u.NavigationBrand, r({}, s)),
          g(_, 'End'),
          b && a.createElement(u.NavigationBrand, r({}, s)),
          (m || y) && a.createElement(c, null),
          v
        )
      }
    },
    function(e, t, n) {},
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(0),
        a = n(1),
        i = n(3)
      t.default = function(e) {
        var t = e.className,
          n = e.img,
          u = void 0 === n ? {} : n,
          l = e.href,
          c = void 0 === l ? '/' : l
        return r.createElement(
          i.Link,
          { className: a.default(t, 'nav__brand'), to: c },
          r.createElement('img', { className: a.default('nav__img'), src: u.src })
        )
      }
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(0),
        a = n(1),
        i = { Start: 'nav__list--start', Center: 'nav__list--center', End: 'nav__list--end' }
      t.default = function(e) {
        var t = e.className,
          n = e.align,
          u = e.children
        return r.createElement('ul', { className: a.default(t, 'nav__list', i[n]) }, u)
      }
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(0),
        a = n(1)
      t.default = function(e) {
        var t = e.className,
          n = e.active,
          i = e.children
        return r.createElement('li', { className: a.default(t, 'nav__item', { 'nav__item--active': n }) }, i)
      }
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(0),
        a = n(1),
        i = n(3)
      t.default = function(e) {
        var t = e.className,
          n = e.component,
          u = e.href,
          l = e.active,
          c = e.children,
          o = e.onClick,
          s = n || i.Link
        return r.createElement(s, { className: a.default(t, 'nav__link', { 'nav__link--active': l }), to: u, onClick: o }, c)
      }
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(34)
      t.Page = r.default
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(0),
        a = n(0),
        i = n(35)
      n(36)
      t.default = function(e) {
        e.className
        var t = e.config,
          n = e.data,
          u = e.children,
          l = t.view
        return r.createElement(
          a.Fragment,
          null,
          r.createElement(l, { config: i.excludeFromObj(t, ['view', 'content']), content: t.content, data: n }),
          u
        )
      }
    },
    function(e, t) {
      !(function(e, t) {
        for (var n in t) e[n] = t[n]
      })(
        t,
        (function(e) {
          var t = {}
          function n(r) {
            if (t[r]) return t[r].exports
            var a = (t[r] = { i: r, l: !1, exports: {} })
            return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
            }),
            (n.r = function(e) {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 })
            }),
            (n.t = function(e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e
              if (4 & t && 'object' == typeof e && e && e.__esModule) return e
              var r = Object.create(null)
              if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
                for (var a in e)
                  n.d(
                    r,
                    a,
                    function(t) {
                      return e[t]
                    }.bind(null, a)
                  )
              return r
            }),
            (n.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default
                    }
                  : function() {
                      return e
                    }
              return n.d(t, 'a', t), t
            }),
            (n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
            }),
            (n.p = '/'),
            n((n.s = 0))
          )
        })([
          function(e, t, n) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 })
            var r = n(1)
            t.capitalise = r.capitalise
            var a = n(3)
            t.excludeFromObj = a.excludeFromObj
            var i = n(5)
            t.ignoreWhitespace = i.ignoreWhitespace
          },
          function(e, t, n) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 })
            var r = n(2)
            t.capitalise = r.default
          },
          function(e, t, n) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
              })
          },
          function(e, t, n) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 })
            var r = n(4)
            t.excludeFromObj = r.default
          },
          function(e, t, n) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e, t) {
                return Object.keys(e).reduce(function(n, r) {
                  return t.includes(r) ? n : ((n[r] = e[r]), n)
                }, {})
              })
          },
          function(e, t, n) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 })
            var r = n(6)
            t.ignoreWhitespace = r.default
          },
          function(e, t, n) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e) {
                return e.replace(/\s+/g, '')
              })
          }
        ])
      )
    },
    function(e, t, n) {},
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(38)
      t.Select = r.default
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(0),
        a = n(1)
      n(39)
      t.default = function(e) {
        var t = e.className,
          n = e.placeholder,
          i = void 0 === n ? '-- Select --' : n,
          u = e.options,
          l = void 0 === u ? [] : u
        return r.createElement(
          'span',
          { className: a.default(t, 'select') },
          r.createElement(
            'select',
            { className: a.default(t, 'select__input') },
            r.createElement('option', null, i),
            l.map(function(e) {
              return r.createElement('option', null, e.label)
            })
          ),
          r.createElement(
            'span',
            { className: 'select__icn' },
            r.createElement(
              'svg',
              { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 12 12' },
              r.createElement('title', null, 'chevron-down'),
              r.createElement('path', {
                d:
                  'M6,8.72.51,5.06A.87.87,0,0,1,.27,3.85a.88.88,0,0,1,1.22-.24L6,6.61l4.51-3a.88.88,0,0,1,1.22.24.87.87,0,0,1-.24,1.21Z'
              })
            )
          )
        )
      }
    },
    function(e, t, n) {}
  ])
)
