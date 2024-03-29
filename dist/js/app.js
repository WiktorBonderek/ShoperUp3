!(function () {
  "use strict";
  function e(t) {
    return (
      (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      e(t)
    );
  }
  function t(e, t) {
    for (var o = 0; o < t.length; o++) {
      var r = t[o];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, n(r.key), r);
    }
  }
  function o(e, t, o) {
    return (
      (t = n(t)) in e
        ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = o),
      e
    );
  }
  function n(t) {
    var o = (function (t, o) {
      if ("object" !== e(t) || null === t) return t;
      var n = t[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(t, "string");
        if ("object" !== e(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t);
    })(t);
    return "symbol" === e(o) ? o : String(o);
  }
  var r = new WeakSet();
  new ((function () {
    function e(t, n) {
      var i, a;
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        (function (e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object"
            );
        })((i = this), (a = r)),
        a.add(i),
        o(this, "$bodyElement", document.querySelector("body")),
        o(this, "bodyOverlayClassName", "overlay"),
        o(this, "hideClassName", "hide"),
        o(this, "modalHeight", ""),
        (this.modal = document.querySelector("#".concat(t))),
        (this.options = null != n ? n : {}),
        (this.closeButton = this.modal.querySelector("button"));
    }
    var n, i;
    return (
      (n = e),
      (i = [
        {
          key: "handleCloseButton",
          value: function () {
            var e = this;
            this.closeButton.addEventListener("click", function () {
              e.options.onCloseShowInfo
                ? alert("CLOSE!")
                : (e.modal.classList.add(e.hideClassName),
                  e.$bodyElement.classList.remove(e.bodyOverlayClassName));
            }),
              (this.modalHeight = "1000px;");
          },
        },
        {
          key: "init",
          value: function () {
            this.$bodyElement.classList.add(this.bodyOverlayClassName),
              this.handleCloseButton();
          },
        },
      ]) && t(n.prototype, i),
      Object.defineProperty(n, "prototype", { writable: !1 }),
      e
    );
  })())("modal-welcome", { onCloseShowInfo: !0 }).init(),
    localStorage.setItem("user", "Wiktor"),
    sessionStorage.setItem("user", "Wiktor2"),
    console.log(localStorage.getItem("user")),
    console.log(sessionStorage.getItem("user"));
})();
//# sourceMappingURL=app.js.map
