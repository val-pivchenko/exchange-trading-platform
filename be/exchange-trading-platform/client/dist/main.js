(() => {
  var t = {
      209: (t, e, r) => {
        const o = {};
        (o.web = r(40)), r(134);
        const n = {};
        (n.exchange = r(484)),
          (n.exchange.ExchangeClient = function (t, e, r) {
            r || (r = {}),
              (r.format = "text"),
              (this.client_ = new o.web.GrpcWebClientBase(r)),
              (this.hostname_ = t.replace(/\/+$/, ""));
          }),
          (n.exchange.ExchangePromiseClient = function (t, e, r) {
            r || (r = {}),
              (r.format = "text"),
              (this.client_ = new o.web.GrpcWebClientBase(r)),
              (this.hostname_ = t.replace(/\/+$/, ""));
          });
        const i = new o.web.MethodDescriptor(
          "/exchange.Exchange/CreateOrder",
          o.web.MethodType.UNARY,
          n.exchange.CreateOrderRequest,
          n.exchange.CreateOrderResponse,
          function (t) {
            return t.serializeBinary();
          },
          n.exchange.CreateOrderResponse.deserializeBinary
        );
        (n.exchange.ExchangeClient.prototype.createOrder = function (t, e, r) {
          return this.client_.rpcCall(
            this.hostname_ + "/exchange.Exchange/CreateOrder",
            t,
            e || {},
            i,
            r
          );
        }),
          (n.exchange.ExchangePromiseClient.prototype.createOrder = function (
            t,
            e
          ) {
            return this.client_.unaryCall(
              this.hostname_ + "/exchange.Exchange/CreateOrder",
              t,
              e || {},
              i
            );
          });
        const a = new o.web.MethodDescriptor(
          "/exchange.Exchange/GetOrders",
          o.web.MethodType.UNARY,
          n.exchange.GetOrdersRequest,
          n.exchange.GetOrdersResponse,
          function (t) {
            return t.serializeBinary();
          },
          n.exchange.GetOrdersResponse.deserializeBinary
        );
        (n.exchange.ExchangeClient.prototype.getOrders = function (t, e, r) {
          return this.client_.rpcCall(
            this.hostname_ + "/exchange.Exchange/GetOrders",
            t,
            e || {},
            a,
            r
          );
        }),
          (n.exchange.ExchangePromiseClient.prototype.getOrders = function (
            t,
            e
          ) {
            return this.client_.unaryCall(
              this.hostname_ + "/exchange.Exchange/GetOrders",
              t,
              e || {},
              a
            );
          }),
          (t.exports = n.exchange);
      },
      484: (t, e, r) => {
        var o = r(19),
          n = o,
          i =
            ("undefined" != typeof globalThis && globalThis) ||
            ("undefined" != typeof window && window) ||
            (void 0 !== i && i) ||
            ("undefined" != typeof self && self) ||
            function () {
              return this;
            }.call(null) ||
            Function("return this")(),
          a = r(134);
        n.object.extend(proto, a),
          n.exportSymbol("proto.exchange.CreateOrderRequest", null, i),
          n.exportSymbol("proto.exchange.CreateOrderResponse", null, i),
          n.exportSymbol("proto.exchange.GetOrdersRequest", null, i),
          n.exportSymbol("proto.exchange.GetOrdersResponse", null, i),
          n.exportSymbol("proto.exchange.Order", null, i),
          n.exportSymbol("proto.exchange.Side", null, i),
          (proto.exchange.CreateOrderRequest = function (t) {
            o.Message.initialize(this, t, 0, -1, null, null);
          }),
          n.inherits(proto.exchange.CreateOrderRequest, o.Message),
          n.DEBUG &&
            !COMPILED &&
            (proto.exchange.CreateOrderRequest.displayName =
              "proto.exchange.CreateOrderRequest"),
          (proto.exchange.CreateOrderResponse = function (t) {
            o.Message.initialize(this, t, 0, -1, null, null);
          }),
          n.inherits(proto.exchange.CreateOrderResponse, o.Message),
          n.DEBUG &&
            !COMPILED &&
            (proto.exchange.CreateOrderResponse.displayName =
              "proto.exchange.CreateOrderResponse"),
          (proto.exchange.GetOrdersRequest = function (t) {
            o.Message.initialize(this, t, 0, -1, null, null);
          }),
          n.inherits(proto.exchange.GetOrdersRequest, o.Message),
          n.DEBUG &&
            !COMPILED &&
            (proto.exchange.GetOrdersRequest.displayName =
              "proto.exchange.GetOrdersRequest"),
          (proto.exchange.Order = function (t) {
            o.Message.initialize(this, t, 0, -1, null, null);
          }),
          n.inherits(proto.exchange.Order, o.Message),
          n.DEBUG &&
            !COMPILED &&
            (proto.exchange.Order.displayName = "proto.exchange.Order"),
          (proto.exchange.GetOrdersResponse = function (t) {
            o.Message.initialize(
              this,
              t,
              0,
              -1,
              proto.exchange.GetOrdersResponse.repeatedFields_,
              null
            );
          }),
          n.inherits(proto.exchange.GetOrdersResponse, o.Message),
          n.DEBUG &&
            !COMPILED &&
            (proto.exchange.GetOrdersResponse.displayName =
              "proto.exchange.GetOrdersResponse"),
          o.Message.GENERATE_TO_OBJECT &&
            ((proto.exchange.CreateOrderRequest.prototype.toObject = function (
              t
            ) {
              return proto.exchange.CreateOrderRequest.toObject(t, this);
            }),
            (proto.exchange.CreateOrderRequest.toObject = function (t, e) {
              var r = {
                price: o.Message.getFloatingPointFieldWithDefault(e, 1, 0),
                side: o.Message.getFieldWithDefault(e, 2, 0),
                quantity: o.Message.getFieldWithDefault(e, 3, 0),
              };
              return t && (r.$jspbMessageInstance = e), r;
            })),
          (proto.exchange.CreateOrderRequest.deserializeBinary = function (t) {
            var e = new o.BinaryReader(t),
              r = new proto.exchange.CreateOrderRequest();
            return proto.exchange.CreateOrderRequest.deserializeBinaryFromReader(
              r,
              e
            );
          }),
          (proto.exchange.CreateOrderRequest.deserializeBinaryFromReader =
            function (t, e) {
              for (; e.nextField() && !e.isEndGroup(); )
                switch (e.getFieldNumber()) {
                  case 1:
                    var r = e.readDouble();
                    t.setPrice(r);
                    break;
                  case 2:
                    (r = e.readEnum()), t.setSide(r);
                    break;
                  case 3:
                    (r = e.readInt32()), t.setQuantity(r);
                    break;
                  default:
                    e.skipField();
                }
              return t;
            }),
          (proto.exchange.CreateOrderRequest.prototype.serializeBinary =
            function () {
              var t = new o.BinaryWriter();
              return (
                proto.exchange.CreateOrderRequest.serializeBinaryToWriter(
                  this,
                  t
                ),
                t.getResultBuffer()
              );
            }),
          (proto.exchange.CreateOrderRequest.serializeBinaryToWriter =
            function (t, e) {
              var r = void 0;
              0 !== (r = t.getPrice()) && e.writeDouble(1, r),
                0 !== (r = t.getSide()) && e.writeEnum(2, r),
                0 !== (r = t.getQuantity()) && e.writeInt32(3, r);
            }),
          (proto.exchange.CreateOrderRequest.prototype.getPrice = function () {
            return o.Message.getFloatingPointFieldWithDefault(this, 1, 0);
          }),
          (proto.exchange.CreateOrderRequest.prototype.setPrice = function (t) {
            return o.Message.setProto3FloatField(this, 1, t);
          }),
          (proto.exchange.CreateOrderRequest.prototype.getSide = function () {
            return o.Message.getFieldWithDefault(this, 2, 0);
          }),
          (proto.exchange.CreateOrderRequest.prototype.setSide = function (t) {
            return o.Message.setProto3EnumField(this, 2, t);
          }),
          (proto.exchange.CreateOrderRequest.prototype.getQuantity =
            function () {
              return o.Message.getFieldWithDefault(this, 3, 0);
            }),
          (proto.exchange.CreateOrderRequest.prototype.setQuantity = function (
            t
          ) {
            return o.Message.setProto3IntField(this, 3, t);
          }),
          o.Message.GENERATE_TO_OBJECT &&
            ((proto.exchange.CreateOrderResponse.prototype.toObject = function (
              t
            ) {
              return proto.exchange.CreateOrderResponse.toObject(t, this);
            }),
            (proto.exchange.CreateOrderResponse.toObject = function (t, e) {
              var r = { id: o.Message.getFieldWithDefault(e, 1, "") };
              return t && (r.$jspbMessageInstance = e), r;
            })),
          (proto.exchange.CreateOrderResponse.deserializeBinary = function (t) {
            var e = new o.BinaryReader(t),
              r = new proto.exchange.CreateOrderResponse();
            return proto.exchange.CreateOrderResponse.deserializeBinaryFromReader(
              r,
              e
            );
          }),
          (proto.exchange.CreateOrderResponse.deserializeBinaryFromReader =
            function (t, e) {
              for (; e.nextField() && !e.isEndGroup(); )
                if (1 === e.getFieldNumber()) {
                  var r = e.readString();
                  t.setId(r);
                } else e.skipField();
              return t;
            }),
          (proto.exchange.CreateOrderResponse.prototype.serializeBinary =
            function () {
              var t = new o.BinaryWriter();
              return (
                proto.exchange.CreateOrderResponse.serializeBinaryToWriter(
                  this,
                  t
                ),
                t.getResultBuffer()
              );
            }),
          (proto.exchange.CreateOrderResponse.serializeBinaryToWriter =
            function (t, e) {
              var r;
              (r = t.getId()).length > 0 && e.writeString(1, r);
            }),
          (proto.exchange.CreateOrderResponse.prototype.getId = function () {
            return o.Message.getFieldWithDefault(this, 1, "");
          }),
          (proto.exchange.CreateOrderResponse.prototype.setId = function (t) {
            return o.Message.setProto3StringField(this, 1, t);
          }),
          o.Message.GENERATE_TO_OBJECT &&
            ((proto.exchange.GetOrdersRequest.prototype.toObject = function (
              t
            ) {
              return proto.exchange.GetOrdersRequest.toObject(t, this);
            }),
            (proto.exchange.GetOrdersRequest.toObject = function (t, e) {
              var r = {};
              return t && (r.$jspbMessageInstance = e), r;
            })),
          (proto.exchange.GetOrdersRequest.deserializeBinary = function (t) {
            var e = new o.BinaryReader(t),
              r = new proto.exchange.GetOrdersRequest();
            return proto.exchange.GetOrdersRequest.deserializeBinaryFromReader(
              r,
              e
            );
          }),
          (proto.exchange.GetOrdersRequest.deserializeBinaryFromReader =
            function (t, e) {
              for (; e.nextField() && !e.isEndGroup(); )
                e.getFieldNumber(), e.skipField();
              return t;
            }),
          (proto.exchange.GetOrdersRequest.prototype.serializeBinary =
            function () {
              var t = new o.BinaryWriter();
              return (
                proto.exchange.GetOrdersRequest.serializeBinaryToWriter(
                  this,
                  t
                ),
                t.getResultBuffer()
              );
            }),
          (proto.exchange.GetOrdersRequest.serializeBinaryToWriter = function (
            t,
            e
          ) {}),
          o.Message.GENERATE_TO_OBJECT &&
            ((proto.exchange.Order.prototype.toObject = function (t) {
              return proto.exchange.Order.toObject(t, this);
            }),
            (proto.exchange.Order.toObject = function (t, e) {
              var r,
                n = {
                  price: o.Message.getFloatingPointFieldWithDefault(e, 1, 0),
                  side: o.Message.getFieldWithDefault(e, 2, 0),
                  quantity: o.Message.getFieldWithDefault(e, 3, 0),
                  timestamp:
                    (r = e.getTimestamp()) && a.Timestamp.toObject(t, r),
                };
              return t && (n.$jspbMessageInstance = e), n;
            })),
          (proto.exchange.Order.deserializeBinary = function (t) {
            var e = new o.BinaryReader(t),
              r = new proto.exchange.Order();
            return proto.exchange.Order.deserializeBinaryFromReader(r, e);
          }),
          (proto.exchange.Order.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup(); )
              switch (e.getFieldNumber()) {
                case 1:
                  var r = e.readDouble();
                  t.setPrice(r);
                  break;
                case 2:
                  (r = e.readEnum()), t.setSide(r);
                  break;
                case 3:
                  (r = e.readInt32()), t.setQuantity(r);
                  break;
                case 4:
                  (r = new a.Timestamp()),
                    e.readMessage(r, a.Timestamp.deserializeBinaryFromReader),
                    t.setTimestamp(r);
                  break;
                default:
                  e.skipField();
              }
            return t;
          }),
          (proto.exchange.Order.prototype.serializeBinary = function () {
            var t = new o.BinaryWriter();
            return (
              proto.exchange.Order.serializeBinaryToWriter(this, t),
              t.getResultBuffer()
            );
          }),
          (proto.exchange.Order.serializeBinaryToWriter = function (t, e) {
            var r = void 0;
            0 !== (r = t.getPrice()) && e.writeDouble(1, r),
              0 !== (r = t.getSide()) && e.writeEnum(2, r),
              0 !== (r = t.getQuantity()) && e.writeInt32(3, r),
              null != (r = t.getTimestamp()) &&
                e.writeMessage(4, r, a.Timestamp.serializeBinaryToWriter);
          }),
          (proto.exchange.Order.prototype.getPrice = function () {
            return o.Message.getFloatingPointFieldWithDefault(this, 1, 0);
          }),
          (proto.exchange.Order.prototype.setPrice = function (t) {
            return o.Message.setProto3FloatField(this, 1, t);
          }),
          (proto.exchange.Order.prototype.getSide = function () {
            return o.Message.getFieldWithDefault(this, 2, 0);
          }),
          (proto.exchange.Order.prototype.setSide = function (t) {
            return o.Message.setProto3EnumField(this, 2, t);
          }),
          (proto.exchange.Order.prototype.getQuantity = function () {
            return o.Message.getFieldWithDefault(this, 3, 0);
          }),
          (proto.exchange.Order.prototype.setQuantity = function (t) {
            return o.Message.setProto3IntField(this, 3, t);
          }),
          (proto.exchange.Order.prototype.getTimestamp = function () {
            return o.Message.getWrapperField(this, a.Timestamp, 4);
          }),
          (proto.exchange.Order.prototype.setTimestamp = function (t) {
            return o.Message.setWrapperField(this, 4, t);
          }),
          (proto.exchange.Order.prototype.clearTimestamp = function () {
            return this.setTimestamp(void 0);
          }),
          (proto.exchange.Order.prototype.hasTimestamp = function () {
            return null != o.Message.getField(this, 4);
          }),
          (proto.exchange.GetOrdersResponse.repeatedFields_ = [1]),
          o.Message.GENERATE_TO_OBJECT &&
            ((proto.exchange.GetOrdersResponse.prototype.toObject = function (
              t
            ) {
              return proto.exchange.GetOrdersResponse.toObject(t, this);
            }),
            (proto.exchange.GetOrdersResponse.toObject = function (t, e) {
              var r = {
                ordersList: o.Message.toObjectList(
                  e.getOrdersList(),
                  proto.exchange.Order.toObject,
                  t
                ),
              };
              return t && (r.$jspbMessageInstance = e), r;
            })),
          (proto.exchange.GetOrdersResponse.deserializeBinary = function (t) {
            var e = new o.BinaryReader(t),
              r = new proto.exchange.GetOrdersResponse();
            return proto.exchange.GetOrdersResponse.deserializeBinaryFromReader(
              r,
              e
            );
          }),
          (proto.exchange.GetOrdersResponse.deserializeBinaryFromReader =
            function (t, e) {
              for (; e.nextField() && !e.isEndGroup(); )
                if (1 === e.getFieldNumber()) {
                  var r = new proto.exchange.Order();
                  e.readMessage(
                    r,
                    proto.exchange.Order.deserializeBinaryFromReader
                  ),
                    t.addOrders(r);
                } else e.skipField();
              return t;
            }),
          (proto.exchange.GetOrdersResponse.prototype.serializeBinary =
            function () {
              var t = new o.BinaryWriter();
              return (
                proto.exchange.GetOrdersResponse.serializeBinaryToWriter(
                  this,
                  t
                ),
                t.getResultBuffer()
              );
            }),
          (proto.exchange.GetOrdersResponse.serializeBinaryToWriter = function (
            t,
            e
          ) {
            var r;
            (r = t.getOrdersList()).length > 0 &&
              e.writeRepeatedMessage(
                1,
                r,
                proto.exchange.Order.serializeBinaryToWriter
              );
          }),
          (proto.exchange.GetOrdersResponse.prototype.getOrdersList =
            function () {
              return o.Message.getRepeatedWrapperField(
                this,
                proto.exchange.Order,
                1
              );
            }),
          (proto.exchange.GetOrdersResponse.prototype.setOrdersList = function (
            t
          ) {
            return o.Message.setRepeatedWrapperField(this, 1, t);
          }),
          (proto.exchange.GetOrdersResponse.prototype.addOrders = function (
            t,
            e
          ) {
            return o.Message.addToRepeatedWrapperField(
              this,
              1,
              t,
              proto.exchange.Order,
              e
            );
          }),
          (proto.exchange.GetOrdersResponse.prototype.clearOrdersList =
            function () {
              return this.setOrdersList([]);
            }),
          (proto.exchange.Side = { BUY: 0, SELL: 1 }),
          n.object.extend(e, proto.exchange);
      },
      19: function (t, e, r) {
        var o =
            "function" == typeof Object.defineProperties
              ? Object.defineProperty
              : function (t, e, r) {
                  t != Array.prototype &&
                    t != Object.prototype &&
                    (t[e] = r.value);
                },
          n =
            "undefined" != typeof window && window === this
              ? this
              : void 0 !== r.g && null != r.g
              ? r.g
              : this;
        function i() {
          (i = function () {}), n.Symbol || (n.Symbol = p);
        }
        function a(t, e) {
          (this.a = t),
            o(this, "description", {
              configurable: !0,
              writable: !0,
              value: e,
            });
        }
        a.prototype.toString = function () {
          return this.a;
        };
        var s,
          p =
            ((s = 0),
            function t(e) {
              if (this instanceof t)
                throw new TypeError("Symbol is not a constructor");
              return new a("jscomp_symbol_" + (e || "") + "_" + s++, e);
            });
        function u() {
          i();
          var t = n.Symbol.iterator;
          t || (t = n.Symbol.iterator = n.Symbol("Symbol.iterator")),
            "function" != typeof Array.prototype[t] &&
              o(Array.prototype, t, {
                configurable: !0,
                writable: !0,
                value: function () {
                  return (function (t) {
                    return (
                      u(),
                      ((t = { next: t })[n.Symbol.iterator] = function () {
                        return this;
                      }),
                      t
                    );
                  })(
                    (function (t) {
                      var e = 0;
                      return function () {
                        return e < t.length
                          ? { done: !1, value: t[e++] }
                          : { done: !0 };
                      };
                    })(this)
                  );
                },
              }),
            (u = function () {});
        }
        !(function (t, e) {
          if (e) {
            var r = n;
            t = t.split(".");
            for (var i = 0; i < t.length - 1; i++) {
              var a = t[i];
              a in r || (r[a] = {}), (r = r[a]);
            }
            (e = e((i = r[(t = t[t.length - 1])]))) != i &&
              null != e &&
              o(r, t, { configurable: !0, writable: !0, value: e });
          }
        })("Array.prototype.entries", function (t) {
          return (
            t ||
            function () {
              return (function (t, e) {
                u(), t instanceof String && (t += "");
                var r = 0,
                  o = {
                    next: function () {
                      if (r < t.length) {
                        var n = r++;
                        return { value: e(n, t[n]), done: !1 };
                      }
                      return (
                        (o.next = function () {
                          return { done: !0, value: void 0 };
                        }),
                        o.next()
                      );
                    },
                  };
                return (
                  (o[Symbol.iterator] = function () {
                    return o;
                  }),
                  o
                );
              })(this, function (t, e) {
                return [t, e];
              });
            }
          );
        });
        var h = this || self;
        function c(t, e, r) {
          (t = t.split(".")),
            (r = r || h),
            t[0] in r || void 0 === r.execScript || r.execScript("var " + t[0]);
          for (var o; t.length && (o = t.shift()); )
            t.length || void 0 === e
              ? (r = r[o] && r[o] !== Object.prototype[o] ? r[o] : (r[o] = {}))
              : (r[o] = e);
        }
        function l(t) {
          var e = typeof t;
          if ("object" == e) {
            if (!t) return "null";
            if (t instanceof Array) return "array";
            if (t instanceof Object) return e;
            var r = Object.prototype.toString.call(t);
            if ("[object Window]" == r) return "object";
            if (
              "[object Array]" == r ||
              ("number" == typeof t.length &&
                void 0 !== t.splice &&
                void 0 !== t.propertyIsEnumerable &&
                !t.propertyIsEnumerable("splice"))
            )
              return "array";
            if (
              "[object Function]" == r ||
              (void 0 !== t.call &&
                void 0 !== t.propertyIsEnumerable &&
                !t.propertyIsEnumerable("call"))
            )
              return "function";
          } else if ("function" == e && void 0 === t.call) return "object";
          return e;
        }
        function f(t) {
          var e = typeof t;
          return ("object" == e && null != t) || "function" == e;
        }
        var y =
            "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
              " "
            ),
          d = Array.prototype.forEach
            ? function (t, e) {
                Array.prototype.forEach.call(t, e, void 0);
              }
            : function (t, e) {
                for (
                  var r = t.length,
                    o = "string" == typeof t ? t.split("") : t,
                    n = 0;
                  n < r;
                  n++
                )
                  n in o && e.call(void 0, o[n], n, t);
              },
          g = Array.prototype.map
            ? function (t, e) {
                return Array.prototype.map.call(t, e, void 0);
              }
            : function (t, e) {
                for (
                  var r = t.length,
                    o = Array(r),
                    n = "string" == typeof t ? t.split("") : t,
                    i = 0;
                  i < r;
                  i++
                )
                  i in n && (o[i] = e.call(void 0, n[i], i, t));
                return o;
              };
        function v(t, e, r) {
          return 2 >= arguments.length
            ? Array.prototype.slice.call(t, e)
            : Array.prototype.slice.call(t, e, r);
        }
        function b(t, e, r, o) {
          var n = "Assertion failed";
          if (r) {
            n += ": " + r;
            var i = o;
          } else t && ((n += ": " + t), (i = e));
          throw Error(n, i || []);
        }
        function w(t, e, r) {
          for (var o = [], n = 2; n < arguments.length; ++n)
            o[n - 2] = arguments[n];
          return t || b("", null, e, o), t;
        }
        function m(t, e) {
          for (var r = [], o = 1; o < arguments.length; ++o)
            r[o - 1] = arguments[o];
          throw Error("Failure" + (t ? ": " + t : ""), r);
        }
        function x(t, e, r, o) {
          for (var n = [], i = 3; i < arguments.length; ++i)
            n[i - 3] = arguments[i];
          t instanceof e ||
            b("Expected instanceof %s but got %s.", [O(e), O(t)], r, n);
        }
        function O(t) {
          return t instanceof Function
            ? t.displayName || t.name || "unknown type name"
            : t instanceof Object
            ? t.constructor.displayName ||
              t.constructor.name ||
              Object.prototype.toString.call(t)
            : null === t
            ? "null"
            : typeof t;
        }
        function S(t, e) {
          if (
            ((this.c = t),
            (this.b = e),
            (this.a = {}),
            (this.arrClean = !0),
            0 < this.c.length)
          ) {
            for (t = 0; t < this.c.length; t++) {
              var r = (e = this.c[t])[0];
              this.a[r.toString()] = new F(r, e[1]);
            }
            this.arrClean = !0;
          }
        }
        function E(t) {
          (this.a = 0), (this.b = t);
        }
        function R(t, e) {
          return t.b ? (e.a || (e.a = new t.b(e.value)), e.a) : e.value;
        }
        function j(t) {
          t = t.a;
          var e,
            r = [];
          for (e in t) Object.prototype.hasOwnProperty.call(t, e) && r.push(e);
          return r;
        }
        function F(t, e) {
          (this.key = t), (this.value = e), (this.a = void 0);
        }
        function M(t) {
          if (8192 >= t.length) return String.fromCharCode.apply(null, t);
          for (var e = "", r = 0; r < t.length; r += 8192)
            e += String.fromCharCode.apply(null, v(t, r, r + 8192));
          return e;
        }
        c("jspb.Map", S, void 0),
          (S.prototype.g = function () {
            if (this.arrClean) {
              if (this.b) {
                var t,
                  e = this.a;
                for (t in e)
                  if (Object.prototype.hasOwnProperty.call(e, t)) {
                    var r = e[t].a;
                    r && r.g();
                  }
              }
            } else {
              for (
                this.c.length = 0, (e = j(this)).sort(), t = 0;
                t < e.length;
                t++
              ) {
                var o = this.a[e[t]];
                (r = o.a) && r.g(), this.c.push([o.key, o.value]);
              }
              this.arrClean = !0;
            }
            return this.c;
          }),
          (S.prototype.toArray = S.prototype.g),
          (S.prototype.Mc = function (t, e) {
            for (var r = this.g(), o = [], n = 0; n < r.length; n++) {
              var i = this.a[r[n][0].toString()];
              R(this, i);
              var a = i.a;
              a ? (w(e), o.push([i.key, e(t, a)])) : o.push([i.key, i.value]);
            }
            return o;
          }),
          (S.prototype.toObject = S.prototype.Mc),
          (S.fromObject = function (t, e, r) {
            e = new S([], e);
            for (var o = 0; o < t.length; o++) {
              var n = t[o][0],
                i = r(t[o][1]);
              e.set(n, i);
            }
            return e;
          }),
          (E.prototype.next = function () {
            return this.a < this.b.length
              ? { done: !1, value: this.b[this.a++] }
              : { done: !0, value: void 0 };
          }),
          "undefined" != typeof Symbol &&
            (E.prototype[Symbol.iterator] = function () {
              return this;
            }),
          (S.prototype.Jb = function () {
            return j(this).length;
          }),
          (S.prototype.getLength = S.prototype.Jb),
          (S.prototype.clear = function () {
            (this.a = {}), (this.arrClean = !1);
          }),
          (S.prototype.clear = S.prototype.clear),
          (S.prototype.Cb = function (t) {
            t = t.toString();
            var e = this.a.hasOwnProperty(t);
            return delete this.a[t], (this.arrClean = !1), e;
          }),
          (S.prototype.del = S.prototype.Cb),
          (S.prototype.Eb = function () {
            var t = [],
              e = j(this);
            e.sort();
            for (var r = 0; r < e.length; r++) {
              var o = this.a[e[r]];
              t.push([o.key, o.value]);
            }
            return t;
          }),
          (S.prototype.getEntryList = S.prototype.Eb),
          (S.prototype.entries = function () {
            var t = [],
              e = j(this);
            e.sort();
            for (var r = 0; r < e.length; r++) {
              var o = this.a[e[r]];
              t.push([o.key, R(this, o)]);
            }
            return new E(t);
          }),
          (S.prototype.entries = S.prototype.entries),
          (S.prototype.keys = function () {
            var t = [],
              e = j(this);
            e.sort();
            for (var r = 0; r < e.length; r++) t.push(this.a[e[r]].key);
            return new E(t);
          }),
          (S.prototype.keys = S.prototype.keys),
          (S.prototype.values = function () {
            var t = [],
              e = j(this);
            e.sort();
            for (var r = 0; r < e.length; r++) t.push(R(this, this.a[e[r]]));
            return new E(t);
          }),
          (S.prototype.values = S.prototype.values),
          (S.prototype.forEach = function (t, e) {
            var r = j(this);
            r.sort();
            for (var o = 0; o < r.length; o++) {
              var n = this.a[r[o]];
              t.call(e, R(this, n), n.key, this);
            }
          }),
          (S.prototype.forEach = S.prototype.forEach),
          (S.prototype.set = function (t, e) {
            var r = new F(t);
            return (
              this.b ? ((r.a = e), (r.value = e.g())) : (r.value = e),
              (this.a[t.toString()] = r),
              (this.arrClean = !1),
              this
            );
          }),
          (S.prototype.set = S.prototype.set),
          (S.prototype.get = function (t) {
            if ((t = this.a[t.toString()])) return R(this, t);
          }),
          (S.prototype.get = S.prototype.get),
          (S.prototype.has = function (t) {
            return t.toString() in this.a;
          }),
          (S.prototype.has = S.prototype.has),
          (S.prototype.Jc = function (t, e, r, o, n) {
            var i = j(this);
            i.sort();
            for (var a = 0; a < i.length; a++) {
              var s = this.a[i[a]];
              e.Va(t),
                r.call(e, 1, s.key),
                this.b ? o.call(e, 2, R(this, s), n) : o.call(e, 2, s.value),
                e.Ya();
            }
          }),
          (S.prototype.serializeBinary = S.prototype.Jc),
          (S.deserializeBinary = function (t, e, r, o, n, i, a) {
            for (; e.oa() && !e.bb(); ) {
              var s = e.c;
              1 == s
                ? (i = r.call(e))
                : 2 == s &&
                  (t.b
                    ? (w(n), a || (a = new t.b()), o.call(e, a, n))
                    : (a = o.call(e)));
            }
            w(null != i), w(null != a), t.set(i, a);
          });
        var T = {
            "\0": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C",
          },
          A = { "'": "\\'" },
          C = {},
          k = null;
        function I(t, e) {
          void 0 === e && (e = 0), P(), (e = C[e]);
          for (var r = [], o = 0; o < t.length; o += 3) {
            var n = t[o],
              i = o + 1 < t.length,
              a = i ? t[o + 1] : 0,
              s = o + 2 < t.length,
              p = s ? t[o + 2] : 0,
              u = n >> 2;
            (n = ((3 & n) << 4) | (a >> 4)),
              (a = ((15 & a) << 2) | (p >> 6)),
              (p &= 63),
              s || ((p = 64), i || (a = 64)),
              r.push(e[u], e[n], e[a] || "", e[p] || "");
          }
          return r.join("");
        }
        function B(t) {
          var e = t.length,
            r = (3 * e) / 4;
          r % 3
            ? (r = Math.floor(r))
            : -1 != "=.".indexOf(t[e - 1]) &&
              (r = -1 != "=.".indexOf(t[e - 2]) ? r - 2 : r - 1);
          var o = new Uint8Array(r),
            n = 0;
          return (
            (function (t, e) {
              function r(e) {
                for (; o < t.length; ) {
                  var r = t.charAt(o++),
                    n = k[r];
                  if (null != n) return n;
                  if (!/^[\s\xa0]*$/.test(r))
                    throw Error("Unknown base64 encoding at char: " + r);
                }
                return e;
              }
              P();
              for (var o = 0; ; ) {
                var n = r(-1),
                  i = r(0),
                  a = r(64),
                  s = r(64);
                if (64 === s && -1 === n) break;
                e((n << 2) | (i >> 4)),
                  64 != a &&
                    (e(((i << 4) & 240) | (a >> 2)),
                    64 != s && e(((a << 6) & 192) | s));
              }
            })(t, function (t) {
              o[n++] = t;
            }),
            o.subarray(0, n)
          );
        }
        function P() {
          if (!k) {
            k = {};
            for (
              var t =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                    ""
                  ),
                e = ["+/=", "+/", "-_=", "-_.", "-_"],
                r = 0;
              5 > r;
              r++
            ) {
              var o = t.concat(e[r].split(""));
              C[r] = o;
              for (var n = 0; n < o.length; n++) {
                var i = o[n];
                void 0 === k[i] && (k[i] = n);
              }
            }
          }
        }
        c("jspb.ConstBinaryMessage", function () {}, void 0),
          c("jspb.BinaryMessage", function () {}, void 0),
          c(
            "jspb.BinaryConstants.FieldType",
            {
              yb: -1,
              ee: 1,
              FLOAT: 2,
              ke: 3,
              te: 4,
              je: 5,
              xb: 6,
              wb: 7,
              BOOL: 8,
              re: 9,
              ie: 10,
              le: 11,
              ce: 12,
              se: 13,
              ge: 14,
              me: 15,
              ne: 16,
              oe: 17,
              pe: 18,
              he: 30,
              ve: 31,
            },
            void 0
          ),
          c(
            "jspb.BinaryConstants.WireType",
            { yb: -1, ue: 0, xb: 1, de: 2, qe: 3, fe: 4, wb: 5 },
            void 0
          ),
          c(
            "jspb.BinaryConstants.FieldTypeToWireType",
            function (t) {
              switch (t) {
                case 5:
                case 3:
                case 13:
                case 4:
                case 17:
                case 18:
                case 8:
                case 14:
                case 31:
                  return 0;
                case 1:
                case 6:
                case 16:
                case 30:
                  return 1;
                case 9:
                case 11:
                case 12:
                  return 2;
                case 2:
                case 7:
                case 15:
                  return 5;
                default:
                  return -1;
              }
            },
            void 0
          ),
          c("jspb.BinaryConstants.INVALID_FIELD_NUMBER", -1, void 0),
          c("jspb.BinaryConstants.FLOAT32_EPS", 1401298464324817e-60, void 0),
          c("jspb.BinaryConstants.FLOAT32_MIN", 11754943508222875e-54, void 0),
          c("jspb.BinaryConstants.FLOAT32_MAX", 34028234663852886e22, void 0),
          c("jspb.BinaryConstants.FLOAT64_EPS", 5e-324, void 0),
          c("jspb.BinaryConstants.FLOAT64_MIN", 22250738585072014e-324, void 0),
          c("jspb.BinaryConstants.FLOAT64_MAX", 17976931348623157e292, void 0),
          c("jspb.BinaryConstants.TWO_TO_20", 1048576, void 0),
          c("jspb.BinaryConstants.TWO_TO_23", 8388608, void 0),
          c("jspb.BinaryConstants.TWO_TO_31", 2147483648, void 0),
          c("jspb.BinaryConstants.TWO_TO_32", 4294967296, void 0),
          c("jspb.BinaryConstants.TWO_TO_52", 4503599627370496, void 0),
          c("jspb.BinaryConstants.TWO_TO_63", 0x8000000000000000, void 0),
          c("jspb.BinaryConstants.TWO_TO_64", 0x10000000000000000, void 0),
          c("jspb.BinaryConstants.ZERO_HASH", "\0\0\0\0\0\0\0\0", void 0);
        var N = 0,
          D = 0;
        function U(t) {
          var e = t >>> 0;
          (t = Math.floor((t - e) / 4294967296) >>> 0), (N = e), (D = t);
        }
        function L(t) {
          var e = 0 > t,
            r = (t = Math.abs(t)) >>> 0;
          (t = Math.floor((t - r) / 4294967296)),
            (t >>>= 0),
            e &&
              ((t = ~t >>> 0),
              4294967295 < (r = 1 + (~r >>> 0)) &&
                ((r = 0), 4294967295 < ++t && (t = 0))),
            (N = r),
            (D = t);
        }
        function _(t) {
          var e = 0 > t;
          U((t = 2 * Math.abs(t))), (t = N);
          var r = D;
          e &&
            (0 == t
              ? 0 == r
                ? (r = t = 4294967295)
                : (r--, (t = 4294967295))
              : t--),
            (N = t),
            (D = r);
        }
        function G(t) {
          var e = 0 > t ? 1 : 0;
          if (0 === (t = e ? -t : t))
            0 < 1 / t ? (N = D = 0) : ((D = 0), (N = 2147483648));
          else if (isNaN(t)) (D = 0), (N = 2147483647);
          else if (34028234663852886e22 < t)
            (D = 0), (N = ((e << 31) | 2139095040) >>> 0);
          else if (11754943508222875e-54 > t)
            (t = Math.round(t / Math.pow(2, -149))),
              (D = 0),
              (N = ((e << 31) | t) >>> 0);
          else {
            var r = Math.floor(Math.log(t) / Math.LN2);
            (t *= Math.pow(2, -r)),
              16777216 <= (t = Math.round(8388608 * t)) && ++r,
              (D = 0),
              (N = ((e << 31) | ((r + 127) << 23) | (8388607 & t)) >>> 0);
          }
        }
        function z(t) {
          var e = 0 > t ? 1 : 0;
          if (0 === (t = e ? -t : t)) (D = 0 < 1 / t ? 0 : 2147483648), (N = 0);
          else if (isNaN(t)) (D = 2147483647), (N = 4294967295);
          else if (17976931348623157e292 < t)
            (D = ((e << 31) | 2146435072) >>> 0), (N = 0);
          else if (22250738585072014e-324 > t)
            (t /= Math.pow(2, -1074)),
              (D = ((e << 31) | (t / 4294967296)) >>> 0),
              (N = t >>> 0);
          else {
            var r = t,
              o = 0;
            if (2 <= r) for (; 2 <= r && 1023 > o; ) o++, (r /= 2);
            else for (; 1 > r && -1022 < o; ) (r *= 2), o--;
            (t *= Math.pow(2, -o)),
              (D =
                ((e << 31) | ((o + 1023) << 20) | ((1048576 * t) & 1048575)) >>>
                0),
              (N = (4503599627370496 * t) >>> 0);
          }
        }
        function W(t) {
          var e = t.charCodeAt(4),
            r = t.charCodeAt(5),
            o = t.charCodeAt(6),
            n = t.charCodeAt(7);
          (N =
            (t.charCodeAt(0) +
              (t.charCodeAt(1) << 8) +
              (t.charCodeAt(2) << 16) +
              (t.charCodeAt(3) << 24)) >>>
            0),
            (D = (e + (r << 8) + (o << 16) + (n << 24)) >>> 0);
        }
        function V(t, e) {
          return 4294967296 * e + (t >>> 0);
        }
        function H(t, e) {
          var r = 2147483648 & e;
          return (
            r &&
              ((e = ~e >>> 0),
              0 == (t = (1 + ~t) >>> 0) && (e = (e + 1) >>> 0)),
            (t = V(t, e)),
            r ? -t : t
          );
        }
        function q(t, e, r) {
          var o = e >> 31;
          return r((t << 1) ^ o, ((e << 1) | (t >>> 31)) ^ o);
        }
        function X(t, e) {
          return K(t, e, H);
        }
        function K(t, e, r) {
          var o = -(1 & t);
          return r(((t >>> 1) | (e << 31)) ^ o, (e >>> 1) ^ o);
        }
        function Y(t) {
          var e = 2 * (t >> 31) + 1,
            r = (t >>> 23) & 255;
          return (
            (t &= 8388607),
            255 == r
              ? t
                ? NaN
                : (1 / 0) * e
              : 0 == r
              ? e * Math.pow(2, -149) * t
              : e * Math.pow(2, r - 150) * (t + Math.pow(2, 23))
          );
        }
        function Z(t, e) {
          var r = 2 * (e >> 31) + 1,
            o = (e >>> 20) & 2047;
          return (
            (t = 4294967296 * (1048575 & e) + t),
            2047 == o
              ? t
                ? NaN
                : (1 / 0) * r
              : 0 == o
              ? r * Math.pow(2, -1074) * t
              : r * Math.pow(2, o - 1075) * (t + 4503599627370496)
          );
        }
        function J(t, e) {
          return String.fromCharCode(
            (t >>> 0) & 255,
            (t >>> 8) & 255,
            (t >>> 16) & 255,
            (t >>> 24) & 255,
            (e >>> 0) & 255,
            (e >>> 8) & 255,
            (e >>> 16) & 255,
            (e >>> 24) & 255
          );
        }
        function $(t, e) {
          function r(t, e) {
            return (
              (t = t ? String(t) : ""), e ? "0000000".slice(t.length) + t : t
            );
          }
          if (2097151 >= e) return "" + V(t, e);
          var o = (((t >>> 24) | (e << 8)) >>> 0) & 16777215;
          return (
            (t =
              (16777215 & t) + 6777216 * o + 6710656 * (e = (e >> 16) & 65535)),
            (o += 8147497 * e),
            (e *= 2),
            1e7 <= t && ((o += Math.floor(t / 1e7)), (t %= 1e7)),
            1e7 <= o && ((e += Math.floor(o / 1e7)), (o %= 1e7)),
            r(e, 0) + r(o, e) + r(t, 1)
          );
        }
        function Q(t, e) {
          var r = 2147483648 & e;
          return (
            r && (e = (~e + (0 == (t = (1 + ~t) >>> 0) ? 1 : 0)) >>> 0),
            (t = $(t, e)),
            r ? "-" + t : t
          );
        }
        function tt(t, e) {
          W(t), (t = N);
          var r = D;
          return e ? Q(t, r) : $(t, r);
        }
        function et(t) {
          function e(t, e) {
            for (var r = 0; 8 > r && (1 !== t || 0 < e); r++)
              (e = t * o[r] + e), (o[r] = 255 & e), (e >>>= 8);
          }
          w(0 < t.length);
          var r = !1;
          "-" === t[0] && ((r = !0), (t = t.slice(1)));
          for (var o = [0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < t.length; n++)
            e(10, t.charCodeAt(n) - 48);
          return (
            r &&
              ((function () {
                for (var t = 0; 8 > t; t++) o[t] = 255 & ~o[t];
              })(),
              e(1, 1)),
            M(o)
          );
        }
        function rt(t) {
          return String.fromCharCode(10 > t ? 48 + t : 87 + t);
        }
        function ot(t) {
          return 97 <= t ? t - 97 + 10 : t - 48;
        }
        function nt(t, e, r, o, n) {
          var i = 0;
          if (128 > o) for (; e < r && t[e++] == o; ) i++, (e += n);
          else
            for (; e < r; ) {
              for (var a = o; 128 < a; ) {
                if (t[e++] != ((127 & a) | 128)) return i;
                a >>= 7;
              }
              if (t[e++] != a) break;
              i++, (e += n);
            }
          return i;
        }
        function it(t) {
          return t.constructor === Uint8Array
            ? t
            : t.constructor === ArrayBuffer || t.constructor === Array
            ? new Uint8Array(t)
            : t.constructor === String
            ? B(t)
            : t instanceof Uint8Array
            ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
            : (m("Type not convertible to Uint8Array."), new Uint8Array(0));
        }
        function at(t, e, r) {
          (this.b = null),
            (this.a = this.c = this.h = 0),
            (this.v = !1),
            t && this.H(t, e, r);
        }
        c(
          "jspb.utils.getSplit64Low",
          function () {
            return N;
          },
          void 0
        ),
          c(
            "jspb.utils.getSplit64High",
            function () {
              return D;
            },
            void 0
          ),
          c("jspb.utils.splitUint64", U, void 0),
          c("jspb.utils.splitInt64", L, void 0),
          c("jspb.utils.splitZigzag64", _, void 0),
          c("jspb.utils.splitFloat32", G, void 0),
          c("jspb.utils.splitFloat64", z, void 0),
          c("jspb.utils.splitHash64", W, void 0),
          c("jspb.utils.joinUint64", V, void 0),
          c("jspb.utils.joinInt64", H, void 0),
          c("jspb.utils.toZigzag64", q, void 0),
          c("jspb.utils.joinZigzag64", X, void 0),
          c("jspb.utils.fromZigzag64", K, void 0),
          c("jspb.utils.joinFloat32", Y, void 0),
          c("jspb.utils.joinFloat64", Z, void 0),
          c("jspb.utils.joinHash64", J, void 0),
          c("jspb.utils.DIGITS", "0123456789abcdef".split(""), void 0),
          c("jspb.utils.joinUnsignedDecimalString", $, void 0),
          c("jspb.utils.joinSignedDecimalString", Q, void 0),
          c("jspb.utils.hash64ToDecimalString", tt, void 0),
          c(
            "jspb.utils.hash64ArrayToDecimalStrings",
            function (t, e) {
              for (var r = Array(t.length), o = 0; o < t.length; o++)
                r[o] = tt(t[o], e);
              return r;
            },
            void 0
          ),
          c("jspb.utils.decimalStringToHash64", et, void 0),
          c(
            "jspb.utils.splitDecimalString",
            function (t) {
              W(et(t));
            },
            void 0
          ),
          c(
            "jspb.utils.hash64ToHexString",
            function (t) {
              var e = Array(18);
              (e[0] = "0"), (e[1] = "x");
              for (var r = 0; 8 > r; r++) {
                var o = t.charCodeAt(7 - r);
                (e[2 * r + 2] = rt(o >> 4)), (e[2 * r + 3] = rt(15 & o));
              }
              return e.join("");
            },
            void 0
          ),
          c(
            "jspb.utils.hexStringToHash64",
            function (t) {
              w(18 == (t = t.toLowerCase()).length),
                w("0" == t[0]),
                w("x" == t[1]);
              for (var e = "", r = 0; 8 > r; r++)
                e =
                  String.fromCharCode(
                    16 * ot(t.charCodeAt(2 * r + 2)) +
                      ot(t.charCodeAt(2 * r + 3))
                  ) + e;
              return e;
            },
            void 0
          ),
          c(
            "jspb.utils.hash64ToNumber",
            function (t, e) {
              W(t), (t = N);
              var r = D;
              return e ? H(t, r) : V(t, r);
            },
            void 0
          ),
          c(
            "jspb.utils.numberToHash64",
            function (t) {
              return L(t), J(N, D);
            },
            void 0
          ),
          c(
            "jspb.utils.countVarints",
            function (t, e, r) {
              for (var o = 0, n = e; n < r; n++) o += t[n] >> 7;
              return r - e - o;
            },
            void 0
          ),
          c(
            "jspb.utils.countVarintFields",
            function (t, e, r, o) {
              var n = 0;
              if (128 > (o *= 8))
                for (; e < r && t[e++] == o; )
                  for (n++; ; ) {
                    var i = t[e++];
                    if (!(128 & i)) break;
                  }
              else
                for (; e < r; ) {
                  for (i = o; 128 < i; ) {
                    if (t[e] != ((127 & i) | 128)) return n;
                    e++, (i >>= 7);
                  }
                  if (t[e++] != i) break;
                  for (n++; 128 & (i = t[e++]); );
                }
              return n;
            },
            void 0
          ),
          c(
            "jspb.utils.countFixed32Fields",
            function (t, e, r, o) {
              return nt(t, e, r, 8 * o + 5, 4);
            },
            void 0
          ),
          c(
            "jspb.utils.countFixed64Fields",
            function (t, e, r, o) {
              return nt(t, e, r, 8 * o + 1, 8);
            },
            void 0
          ),
          c(
            "jspb.utils.countDelimitedFields",
            function (t, e, r, o) {
              var n = 0;
              for (o = 8 * o + 2; e < r; ) {
                for (var i = o; 128 < i; ) {
                  if (t[e++] != ((127 & i) | 128)) return n;
                  i >>= 7;
                }
                if (t[e++] != i) break;
                n++;
                for (
                  var a = 0, s = 1;
                  (a += (127 & (i = t[e++])) * s), (s *= 128), 128 & i;

                );
                e += a;
              }
              return n;
            },
            void 0
          ),
          c(
            "jspb.utils.debugBytesToTextFormat",
            function (t) {
              var e = '"';
              if (t) {
                t = it(t);
                for (var r = 0; r < t.length; r++)
                  (e += "\\x"),
                    16 > t[r] && (e += "0"),
                    (e += t[r].toString(16));
              }
              return e + '"';
            },
            void 0
          ),
          c(
            "jspb.utils.debugScalarToTextFormat",
            function (t) {
              if ("string" == typeof t) {
                t = String(t);
                for (var e = ['"'], r = 0; r < t.length; r++) {
                  var o,
                    n = t.charAt(r),
                    i = n.charCodeAt(0),
                    a = r + 1;
                  (o = T[n]) ||
                    ((31 < i && 127 > i) ||
                      ((i = n) in A
                        ? (n = A[i])
                        : i in T
                        ? (n = A[i] = T[i])
                        : (31 < (o = i.charCodeAt(0)) && 127 > o
                            ? (n = i)
                            : (256 > o
                                ? ((n = "\\x"),
                                  (16 > o || 256 < o) && (n += "0"))
                                : ((n = "\\u"), 4096 > o && (n += "0")),
                              (n += o.toString(16).toUpperCase())),
                          (n = A[i] = n))),
                    (o = n)),
                    (e[a] = o);
                }
                e.push('"'), (t = e.join(""));
              } else t = t.toString();
              return t;
            },
            void 0
          ),
          c(
            "jspb.utils.stringToByteArray",
            function (t) {
              for (var e = new Uint8Array(t.length), r = 0; r < t.length; r++) {
                var o = t.charCodeAt(r);
                if (255 < o)
                  throw Error(
                    "Conversion error: string contains codepoint outside of byte range"
                  );
                e[r] = o;
              }
              return e;
            },
            void 0
          ),
          c("jspb.utils.byteSourceToUint8Array", it, void 0),
          c("jspb.BinaryDecoder", at, void 0);
        var st = [];
        function pt(t, e, r) {
          if (st.length) {
            var o = st.pop();
            return t && o.H(t, e, r), o;
          }
          return new at(t, e, r);
        }
        function ut(t, e, r) {
          (this.a = pt(t, e, r)),
            (this.O = this.a.B()),
            (this.b = this.c = -1),
            (this.h = !1),
            (this.v = null);
        }
        (at.getInstanceCacheLength = function () {
          return st.length;
        }),
          (at.alloc = pt),
          (at.prototype.Ca = function () {
            this.clear(), 100 > st.length && st.push(this);
          }),
          (at.prototype.free = at.prototype.Ca),
          (at.prototype.clone = function () {
            return pt(this.b, this.h, this.c - this.h);
          }),
          (at.prototype.clone = at.prototype.clone),
          (at.prototype.clear = function () {
            (this.b = null), (this.a = this.c = this.h = 0), (this.v = !1);
          }),
          (at.prototype.clear = at.prototype.clear),
          (at.prototype.Y = function () {
            return this.b;
          }),
          (at.prototype.getBuffer = at.prototype.Y),
          (at.prototype.H = function (t, e, r) {
            (this.b = it(t)),
              (this.h = void 0 !== e ? e : 0),
              (this.c = void 0 !== r ? this.h + r : this.b.length),
              (this.a = this.h);
          }),
          (at.prototype.setBlock = at.prototype.H),
          (at.prototype.Db = function () {
            return this.c;
          }),
          (at.prototype.getEnd = at.prototype.Db),
          (at.prototype.setEnd = function (t) {
            this.c = t;
          }),
          (at.prototype.setEnd = at.prototype.setEnd),
          (at.prototype.reset = function () {
            this.a = this.h;
          }),
          (at.prototype.reset = at.prototype.reset),
          (at.prototype.B = function () {
            return this.a;
          }),
          (at.prototype.getCursor = at.prototype.B),
          (at.prototype.Ma = function (t) {
            this.a = t;
          }),
          (at.prototype.setCursor = at.prototype.Ma),
          (at.prototype.advance = function (t) {
            (this.a += t), w(this.a <= this.c);
          }),
          (at.prototype.advance = at.prototype.advance),
          (at.prototype.ya = function () {
            return this.a == this.c;
          }),
          (at.prototype.atEnd = at.prototype.ya),
          (at.prototype.Qb = function () {
            return this.a > this.c;
          }),
          (at.prototype.pastEnd = at.prototype.Qb),
          (at.prototype.getError = function () {
            return this.v || 0 > this.a || this.a > this.c;
          }),
          (at.prototype.getError = at.prototype.getError),
          (at.prototype.w = function (t) {
            for (var e = 128, r = 0, o = 0, n = 0; 4 > n && 128 <= e; n++)
              r |= (127 & (e = this.b[this.a++])) << (7 * n);
            if (
              (128 <= e &&
                ((r |= (127 & (e = this.b[this.a++])) << 28),
                (o |= (127 & e) >> 4)),
              128 <= e)
            )
              for (n = 0; 5 > n && 128 <= e; n++)
                o |= (127 & (e = this.b[this.a++])) << (7 * n + 3);
            if (128 > e) return t(r >>> 0, o >>> 0);
            m("Failed to read varint, encoding is invalid."), (this.v = !0);
          }),
          (at.prototype.readSplitVarint64 = at.prototype.w),
          (at.prototype.ea = function (t) {
            return this.w(function (e, r) {
              return K(e, r, t);
            });
          }),
          (at.prototype.readSplitZigzagVarint64 = at.prototype.ea),
          (at.prototype.ta = function (t) {
            var e = this.b,
              r = this.a;
            this.a += 8;
            for (var o = 0, n = 0, i = r + 7; i >= r; i--)
              (o = (o << 8) | e[i]), (n = (n << 8) | e[i + 4]);
            return t(o, n);
          }),
          (at.prototype.readSplitFixed64 = at.prototype.ta),
          (at.prototype.kb = function () {
            for (; 128 & this.b[this.a]; ) this.a++;
            this.a++;
          }),
          (at.prototype.skipVarint = at.prototype.kb),
          (at.prototype.mb = function (t) {
            for (; 128 < t; ) this.a--, (t >>>= 7);
            this.a--;
          }),
          (at.prototype.unskipVarint = at.prototype.mb),
          (at.prototype.o = function () {
            var t = this.b,
              e = t[this.a],
              r = 127 & e;
            return 128 > e
              ? ((this.a += 1), w(this.a <= this.c), r)
              : ((r |= (127 & (e = t[this.a + 1])) << 7),
                128 > e
                  ? ((this.a += 2), w(this.a <= this.c), r)
                  : ((r |= (127 & (e = t[this.a + 2])) << 14),
                    128 > e
                      ? ((this.a += 3), w(this.a <= this.c), r)
                      : ((r |= (127 & (e = t[this.a + 3])) << 21),
                        128 > e
                          ? ((this.a += 4), w(this.a <= this.c), r)
                          : ((r |= (15 & (e = t[this.a + 4])) << 28),
                            128 > e
                              ? ((this.a += 5), w(this.a <= this.c), r >>> 0)
                              : ((this.a += 5),
                                128 <= t[this.a++] &&
                                  128 <= t[this.a++] &&
                                  128 <= t[this.a++] &&
                                  128 <= t[this.a++] &&
                                  128 <= t[this.a++] &&
                                  w(!1),
                                w(this.a <= this.c),
                                r)))));
          }),
          (at.prototype.readUnsignedVarint32 = at.prototype.o),
          (at.prototype.da = function () {
            return ~~this.o();
          }),
          (at.prototype.readSignedVarint32 = at.prototype.da),
          (at.prototype.O = function () {
            return this.o().toString();
          }),
          (at.prototype.Ea = function () {
            return this.da().toString();
          }),
          (at.prototype.readSignedVarint32String = at.prototype.Ea),
          (at.prototype.Ia = function () {
            var t = this.o();
            return (t >>> 1) ^ -(1 & t);
          }),
          (at.prototype.readZigzagVarint32 = at.prototype.Ia),
          (at.prototype.Ga = function () {
            return this.w(V);
          }),
          (at.prototype.readUnsignedVarint64 = at.prototype.Ga),
          (at.prototype.Ha = function () {
            return this.w($);
          }),
          (at.prototype.readUnsignedVarint64String = at.prototype.Ha),
          (at.prototype.sa = function () {
            return this.w(H);
          }),
          (at.prototype.readSignedVarint64 = at.prototype.sa),
          (at.prototype.Fa = function () {
            return this.w(Q);
          }),
          (at.prototype.readSignedVarint64String = at.prototype.Fa),
          (at.prototype.Ja = function () {
            return this.w(X);
          }),
          (at.prototype.readZigzagVarint64 = at.prototype.Ja),
          (at.prototype.fb = function () {
            return this.ea(J);
          }),
          (at.prototype.readZigzagVarintHash64 = at.prototype.fb),
          (at.prototype.Ka = function () {
            return this.ea(Q);
          }),
          (at.prototype.readZigzagVarint64String = at.prototype.Ka),
          (at.prototype.Gc = function () {
            var t = this.b[this.a];
            return (this.a += 1), w(this.a <= this.c), t;
          }),
          (at.prototype.readUint8 = at.prototype.Gc),
          (at.prototype.Ec = function () {
            var t = this.b[this.a],
              e = this.b[this.a + 1];
            return (this.a += 2), w(this.a <= this.c), t | (e << 8);
          }),
          (at.prototype.readUint16 = at.prototype.Ec),
          (at.prototype.m = function () {
            var t = this.b[this.a],
              e = this.b[this.a + 1],
              r = this.b[this.a + 2],
              o = this.b[this.a + 3];
            return (
              (this.a += 4),
              w(this.a <= this.c),
              (t | (e << 8) | (r << 16) | (o << 24)) >>> 0
            );
          }),
          (at.prototype.readUint32 = at.prototype.m),
          (at.prototype.ga = function () {
            return V(this.m(), this.m());
          }),
          (at.prototype.readUint64 = at.prototype.ga),
          (at.prototype.ha = function () {
            return $(this.m(), this.m());
          }),
          (at.prototype.readUint64String = at.prototype.ha),
          (at.prototype.Xb = function () {
            var t = this.b[this.a];
            return (this.a += 1), w(this.a <= this.c), (t << 24) >> 24;
          }),
          (at.prototype.readInt8 = at.prototype.Xb),
          (at.prototype.Vb = function () {
            var t = this.b[this.a],
              e = this.b[this.a + 1];
            return (
              (this.a += 2), w(this.a <= this.c), ((t | (e << 8)) << 16) >> 16
            );
          }),
          (at.prototype.readInt16 = at.prototype.Vb),
          (at.prototype.P = function () {
            var t = this.b[this.a],
              e = this.b[this.a + 1],
              r = this.b[this.a + 2],
              o = this.b[this.a + 3];
            return (
              (this.a += 4),
              w(this.a <= this.c),
              t | (e << 8) | (r << 16) | (o << 24)
            );
          }),
          (at.prototype.readInt32 = at.prototype.P),
          (at.prototype.ba = function () {
            return H(this.m(), this.m());
          }),
          (at.prototype.readInt64 = at.prototype.ba),
          (at.prototype.ca = function () {
            return Q(this.m(), this.m());
          }),
          (at.prototype.readInt64String = at.prototype.ca),
          (at.prototype.aa = function () {
            return Y(this.m());
          }),
          (at.prototype.readFloat = at.prototype.aa),
          (at.prototype.Z = function () {
            return Z(this.m(), this.m());
          }),
          (at.prototype.readDouble = at.prototype.Z),
          (at.prototype.pa = function () {
            return !!this.b[this.a++];
          }),
          (at.prototype.readBool = at.prototype.pa),
          (at.prototype.ra = function () {
            return this.da();
          }),
          (at.prototype.readEnum = at.prototype.ra),
          (at.prototype.fa = function (t) {
            var e = this.b,
              r = this.a;
            t = r + t;
            for (var o = [], n = ""; r < t; ) {
              var i = e[r++];
              if (128 > i) o.push(i);
              else {
                if (192 > i) continue;
                if (224 > i) {
                  var a = e[r++];
                  o.push(((31 & i) << 6) | (63 & a));
                } else if (240 > i) {
                  a = e[r++];
                  var s = e[r++];
                  o.push(((15 & i) << 12) | ((63 & a) << 6) | (63 & s));
                } else
                  248 > i &&
                    ((i =
                      ((7 & i) << 18) |
                      ((63 & (a = e[r++])) << 12) |
                      ((63 & (s = e[r++])) << 6) |
                      (63 & e[r++])),
                    (i -= 65536),
                    o.push(55296 + ((i >> 10) & 1023), 56320 + (1023 & i)));
              }
              8192 <= o.length &&
                ((n += String.fromCharCode.apply(null, o)), (o.length = 0));
            }
            return (n += M(o)), (this.a = r), n;
          }),
          (at.prototype.readString = at.prototype.fa),
          (at.prototype.Dc = function () {
            var t = this.o();
            return this.fa(t);
          }),
          (at.prototype.readStringWithLength = at.prototype.Dc),
          (at.prototype.qa = function (t) {
            if (0 > t || this.a + t > this.b.length)
              return (
                (this.v = !0), m("Invalid byte length!"), new Uint8Array(0)
              );
            var e = this.b.subarray(this.a, this.a + t);
            return (this.a += t), w(this.a <= this.c), e;
          }),
          (at.prototype.readBytes = at.prototype.qa),
          (at.prototype.ia = function () {
            return this.w(J);
          }),
          (at.prototype.readVarintHash64 = at.prototype.ia),
          (at.prototype.$ = function () {
            var t = this.b,
              e = this.a,
              r = t[e],
              o = t[e + 1],
              n = t[e + 2],
              i = t[e + 3],
              a = t[e + 4],
              s = t[e + 5],
              p = t[e + 6];
            return (
              (t = t[e + 7]),
              (this.a += 8),
              String.fromCharCode(r, o, n, i, a, s, p, t)
            );
          }),
          (at.prototype.readFixedHash64 = at.prototype.$),
          c("jspb.BinaryReader", ut, void 0);
        var ht = [];
        function ct(t, e, r) {
          if (ht.length) {
            var o = ht.pop();
            return t && o.a.H(t, e, r), o;
          }
          return new ut(t, e, r);
        }
        function lt(t, e) {
          w(2 == t.b);
          var r = t.a.o();
          r = t.a.B() + r;
          for (var o = []; t.a.B() < r; ) o.push(e.call(t.a));
          return o;
        }
        function ft(t, e, r, o, n) {
          (this.ma = t),
            (this.Ba = e),
            (this.la = r),
            (this.Na = o),
            (this.na = n);
        }
        function yt(t, e, r, o, n, i) {
          (this.Za = t),
            (this.za = e),
            (this.Aa = r),
            (this.Wa = o),
            (this.Ab = n),
            (this.Nb = i);
        }
        function dt() {}
        (ut.clearInstanceCache = function () {
          ht = [];
        }),
          (ut.getInstanceCacheLength = function () {
            return ht.length;
          }),
          (ut.alloc = ct),
          (ut.prototype.zb = ct),
          (ut.prototype.alloc = ut.prototype.zb),
          (ut.prototype.Ca = function () {
            this.a.clear(),
              (this.b = this.c = -1),
              (this.h = !1),
              (this.v = null),
              100 > ht.length && ht.push(this);
          }),
          (ut.prototype.free = ut.prototype.Ca),
          (ut.prototype.Fb = function () {
            return this.O;
          }),
          (ut.prototype.getFieldCursor = ut.prototype.Fb),
          (ut.prototype.B = function () {
            return this.a.B();
          }),
          (ut.prototype.getCursor = ut.prototype.B),
          (ut.prototype.Y = function () {
            return this.a.Y();
          }),
          (ut.prototype.getBuffer = ut.prototype.Y),
          (ut.prototype.Hb = function () {
            return this.c;
          }),
          (ut.prototype.getFieldNumber = ut.prototype.Hb),
          (ut.prototype.Lb = function () {
            return this.b;
          }),
          (ut.prototype.getWireType = ut.prototype.Lb),
          (ut.prototype.Mb = function () {
            return 2 == this.b;
          }),
          (ut.prototype.isDelimited = ut.prototype.Mb),
          (ut.prototype.bb = function () {
            return 4 == this.b;
          }),
          (ut.prototype.isEndGroup = ut.prototype.bb),
          (ut.prototype.getError = function () {
            return this.h || this.a.getError();
          }),
          (ut.prototype.getError = ut.prototype.getError),
          (ut.prototype.H = function (t, e, r) {
            this.a.H(t, e, r), (this.b = this.c = -1);
          }),
          (ut.prototype.setBlock = ut.prototype.H),
          (ut.prototype.reset = function () {
            this.a.reset(), (this.b = this.c = -1);
          }),
          (ut.prototype.reset = ut.prototype.reset),
          (ut.prototype.advance = function (t) {
            this.a.advance(t);
          }),
          (ut.prototype.advance = ut.prototype.advance),
          (ut.prototype.oa = function () {
            if (this.a.ya()) return !1;
            if (this.getError()) return m("Decoder hit an error"), !1;
            this.O = this.a.B();
            var t = this.a.o(),
              e = t >>> 3;
            return 0 != (t &= 7) &&
              5 != t &&
              1 != t &&
              2 != t &&
              3 != t &&
              4 != t
              ? (m("Invalid wire type: %s (at position %s)", t, this.O),
                (this.h = !0),
                !1)
              : ((this.c = e), (this.b = t), !0);
          }),
          (ut.prototype.nextField = ut.prototype.oa),
          (ut.prototype.Oa = function () {
            this.a.mb((this.c << 3) | this.b);
          }),
          (ut.prototype.unskipHeader = ut.prototype.Oa),
          (ut.prototype.Lc = function () {
            var t = this.c;
            for (this.Oa(); this.oa() && this.c == t; ) this.C();
            this.a.ya() || this.Oa();
          }),
          (ut.prototype.skipMatchingFields = ut.prototype.Lc),
          (ut.prototype.lb = function () {
            0 != this.b
              ? (m("Invalid wire type for skipVarintField"), this.C())
              : this.a.kb();
          }),
          (ut.prototype.skipVarintField = ut.prototype.lb),
          (ut.prototype.gb = function () {
            if (2 != this.b)
              m("Invalid wire type for skipDelimitedField"), this.C();
            else {
              var t = this.a.o();
              this.a.advance(t);
            }
          }),
          (ut.prototype.skipDelimitedField = ut.prototype.gb),
          (ut.prototype.hb = function () {
            5 != this.b
              ? (m("Invalid wire type for skipFixed32Field"), this.C())
              : this.a.advance(4);
          }),
          (ut.prototype.skipFixed32Field = ut.prototype.hb),
          (ut.prototype.ib = function () {
            1 != this.b
              ? (m("Invalid wire type for skipFixed64Field"), this.C())
              : this.a.advance(8);
          }),
          (ut.prototype.skipFixed64Field = ut.prototype.ib),
          (ut.prototype.jb = function () {
            for (var t = this.c; ; ) {
              if (!this.oa()) {
                m("Unmatched start-group tag: stream EOF"), (this.h = !0);
                break;
              }
              if (4 == this.b) {
                this.c != t && (m("Unmatched end-group tag"), (this.h = !0));
                break;
              }
              this.C();
            }
          }),
          (ut.prototype.skipGroup = ut.prototype.jb),
          (ut.prototype.C = function () {
            switch (this.b) {
              case 0:
                this.lb();
                break;
              case 1:
                this.ib();
                break;
              case 2:
                this.gb();
                break;
              case 5:
                this.hb();
                break;
              case 3:
                this.jb();
                break;
              default:
                m("Invalid wire encoding for field.");
            }
          }),
          (ut.prototype.skipField = ut.prototype.C),
          (ut.prototype.Hc = function (t, e) {
            null === this.v && (this.v = {}), w(!this.v[t]), (this.v[t] = e);
          }),
          (ut.prototype.registerReadCallback = ut.prototype.Hc),
          (ut.prototype.Ic = function (t) {
            return w(null !== this.v), w((t = this.v[t])), t(this);
          }),
          (ut.prototype.runReadCallback = ut.prototype.Ic),
          (ut.prototype.Yb = function (t, e) {
            w(2 == this.b);
            var r = this.a.c,
              o = this.a.o();
            (o = this.a.B() + o),
              this.a.setEnd(o),
              e(t, this),
              this.a.Ma(o),
              this.a.setEnd(r);
          }),
          (ut.prototype.readMessage = ut.prototype.Yb),
          (ut.prototype.Ub = function (t, e, r) {
            w(3 == this.b),
              w(this.c == t),
              r(e, this),
              this.h ||
                4 == this.b ||
                (m("Group submessage did not end with an END_GROUP tag"),
                (this.h = !0));
          }),
          (ut.prototype.readGroup = ut.prototype.Ub),
          (ut.prototype.Gb = function () {
            w(2 == this.b);
            var t = this.a.o(),
              e = this.a.B(),
              r = e + t;
            return (t = pt(this.a.Y(), e, t)), this.a.Ma(r), t;
          }),
          (ut.prototype.getFieldDecoder = ut.prototype.Gb),
          (ut.prototype.P = function () {
            return w(0 == this.b), this.a.da();
          }),
          (ut.prototype.readInt32 = ut.prototype.P),
          (ut.prototype.Wb = function () {
            return w(0 == this.b), this.a.Ea();
          }),
          (ut.prototype.readInt32String = ut.prototype.Wb),
          (ut.prototype.ba = function () {
            return w(0 == this.b), this.a.sa();
          }),
          (ut.prototype.readInt64 = ut.prototype.ba),
          (ut.prototype.ca = function () {
            return w(0 == this.b), this.a.Fa();
          }),
          (ut.prototype.readInt64String = ut.prototype.ca),
          (ut.prototype.m = function () {
            return w(0 == this.b), this.a.o();
          }),
          (ut.prototype.readUint32 = ut.prototype.m),
          (ut.prototype.Fc = function () {
            return w(0 == this.b), this.a.O();
          }),
          (ut.prototype.readUint32String = ut.prototype.Fc),
          (ut.prototype.ga = function () {
            return w(0 == this.b), this.a.Ga();
          }),
          (ut.prototype.readUint64 = ut.prototype.ga),
          (ut.prototype.ha = function () {
            return w(0 == this.b), this.a.Ha();
          }),
          (ut.prototype.readUint64String = ut.prototype.ha),
          (ut.prototype.zc = function () {
            return w(0 == this.b), this.a.Ia();
          }),
          (ut.prototype.readSint32 = ut.prototype.zc),
          (ut.prototype.Ac = function () {
            return w(0 == this.b), this.a.Ja();
          }),
          (ut.prototype.readSint64 = ut.prototype.Ac),
          (ut.prototype.Bc = function () {
            return w(0 == this.b), this.a.Ka();
          }),
          (ut.prototype.readSint64String = ut.prototype.Bc),
          (ut.prototype.Rb = function () {
            return w(5 == this.b), this.a.m();
          }),
          (ut.prototype.readFixed32 = ut.prototype.Rb),
          (ut.prototype.Sb = function () {
            return w(1 == this.b), this.a.ga();
          }),
          (ut.prototype.readFixed64 = ut.prototype.Sb),
          (ut.prototype.Tb = function () {
            return w(1 == this.b), this.a.ha();
          }),
          (ut.prototype.readFixed64String = ut.prototype.Tb),
          (ut.prototype.vc = function () {
            return w(5 == this.b), this.a.P();
          }),
          (ut.prototype.readSfixed32 = ut.prototype.vc),
          (ut.prototype.wc = function () {
            return w(5 == this.b), this.a.P().toString();
          }),
          (ut.prototype.readSfixed32String = ut.prototype.wc),
          (ut.prototype.xc = function () {
            return w(1 == this.b), this.a.ba();
          }),
          (ut.prototype.readSfixed64 = ut.prototype.xc),
          (ut.prototype.yc = function () {
            return w(1 == this.b), this.a.ca();
          }),
          (ut.prototype.readSfixed64String = ut.prototype.yc),
          (ut.prototype.aa = function () {
            return w(5 == this.b), this.a.aa();
          }),
          (ut.prototype.readFloat = ut.prototype.aa),
          (ut.prototype.Z = function () {
            return w(1 == this.b), this.a.Z();
          }),
          (ut.prototype.readDouble = ut.prototype.Z),
          (ut.prototype.pa = function () {
            return w(0 == this.b), !!this.a.o();
          }),
          (ut.prototype.readBool = ut.prototype.pa),
          (ut.prototype.ra = function () {
            return w(0 == this.b), this.a.sa();
          }),
          (ut.prototype.readEnum = ut.prototype.ra),
          (ut.prototype.fa = function () {
            w(2 == this.b);
            var t = this.a.o();
            return this.a.fa(t);
          }),
          (ut.prototype.readString = ut.prototype.fa),
          (ut.prototype.qa = function () {
            w(2 == this.b);
            var t = this.a.o();
            return this.a.qa(t);
          }),
          (ut.prototype.readBytes = ut.prototype.qa),
          (ut.prototype.ia = function () {
            return w(0 == this.b), this.a.ia();
          }),
          (ut.prototype.readVarintHash64 = ut.prototype.ia),
          (ut.prototype.Cc = function () {
            return w(0 == this.b), this.a.fb();
          }),
          (ut.prototype.readSintHash64 = ut.prototype.Cc),
          (ut.prototype.w = function (t) {
            return w(0 == this.b), this.a.w(t);
          }),
          (ut.prototype.readSplitVarint64 = ut.prototype.w),
          (ut.prototype.ea = function (t) {
            return (
              w(0 == this.b),
              this.a.w(function (e, r) {
                return K(e, r, t);
              })
            );
          }),
          (ut.prototype.readSplitZigzagVarint64 = ut.prototype.ea),
          (ut.prototype.$ = function () {
            return w(1 == this.b), this.a.$();
          }),
          (ut.prototype.readFixedHash64 = ut.prototype.$),
          (ut.prototype.ta = function (t) {
            return w(1 == this.b), this.a.ta(t);
          }),
          (ut.prototype.readSplitFixed64 = ut.prototype.ta),
          (ut.prototype.gc = function () {
            return lt(this, this.a.da);
          }),
          (ut.prototype.readPackedInt32 = ut.prototype.gc),
          (ut.prototype.hc = function () {
            return lt(this, this.a.Ea);
          }),
          (ut.prototype.readPackedInt32String = ut.prototype.hc),
          (ut.prototype.ic = function () {
            return lt(this, this.a.sa);
          }),
          (ut.prototype.readPackedInt64 = ut.prototype.ic),
          (ut.prototype.jc = function () {
            return lt(this, this.a.Fa);
          }),
          (ut.prototype.readPackedInt64String = ut.prototype.jc),
          (ut.prototype.qc = function () {
            return lt(this, this.a.o);
          }),
          (ut.prototype.readPackedUint32 = ut.prototype.qc),
          (ut.prototype.rc = function () {
            return lt(this, this.a.O);
          }),
          (ut.prototype.readPackedUint32String = ut.prototype.rc),
          (ut.prototype.sc = function () {
            return lt(this, this.a.Ga);
          }),
          (ut.prototype.readPackedUint64 = ut.prototype.sc),
          (ut.prototype.tc = function () {
            return lt(this, this.a.Ha);
          }),
          (ut.prototype.readPackedUint64String = ut.prototype.tc),
          (ut.prototype.nc = function () {
            return lt(this, this.a.Ia);
          }),
          (ut.prototype.readPackedSint32 = ut.prototype.nc),
          (ut.prototype.oc = function () {
            return lt(this, this.a.Ja);
          }),
          (ut.prototype.readPackedSint64 = ut.prototype.oc),
          (ut.prototype.pc = function () {
            return lt(this, this.a.Ka);
          }),
          (ut.prototype.readPackedSint64String = ut.prototype.pc),
          (ut.prototype.bc = function () {
            return lt(this, this.a.m);
          }),
          (ut.prototype.readPackedFixed32 = ut.prototype.bc),
          (ut.prototype.cc = function () {
            return lt(this, this.a.ga);
          }),
          (ut.prototype.readPackedFixed64 = ut.prototype.cc),
          (ut.prototype.dc = function () {
            return lt(this, this.a.ha);
          }),
          (ut.prototype.readPackedFixed64String = ut.prototype.dc),
          (ut.prototype.kc = function () {
            return lt(this, this.a.P);
          }),
          (ut.prototype.readPackedSfixed32 = ut.prototype.kc),
          (ut.prototype.lc = function () {
            return lt(this, this.a.ba);
          }),
          (ut.prototype.readPackedSfixed64 = ut.prototype.lc),
          (ut.prototype.mc = function () {
            return lt(this, this.a.ca);
          }),
          (ut.prototype.readPackedSfixed64String = ut.prototype.mc),
          (ut.prototype.fc = function () {
            return lt(this, this.a.aa);
          }),
          (ut.prototype.readPackedFloat = ut.prototype.fc),
          (ut.prototype.$b = function () {
            return lt(this, this.a.Z);
          }),
          (ut.prototype.readPackedDouble = ut.prototype.$b),
          (ut.prototype.Zb = function () {
            return lt(this, this.a.pa);
          }),
          (ut.prototype.readPackedBool = ut.prototype.Zb),
          (ut.prototype.ac = function () {
            return lt(this, this.a.ra);
          }),
          (ut.prototype.readPackedEnum = ut.prototype.ac),
          (ut.prototype.uc = function () {
            return lt(this, this.a.ia);
          }),
          (ut.prototype.readPackedVarintHash64 = ut.prototype.uc),
          (ut.prototype.ec = function () {
            return lt(this, this.a.$);
          }),
          (ut.prototype.readPackedFixedHash64 = ut.prototype.ec),
          c("jspb.ExtensionFieldInfo", ft, void 0),
          c("jspb.ExtensionFieldBinaryInfo", yt, void 0),
          (ft.prototype.F = function () {
            return !!this.la;
          }),
          (ft.prototype.isMessageType = ft.prototype.F),
          c("jspb.Message", dt, void 0),
          (dt.GENERATE_TO_OBJECT = !0),
          (dt.GENERATE_FROM_OBJECT = !0);
        var gt = "function" == typeof Uint8Array;
        (dt.prototype.Ib = function () {
          return this.b;
        }),
          (dt.prototype.getJsPbMessageId = dt.prototype.Ib),
          (dt.initialize = function (t, e, r, o, n, i) {
            if (
              ((t.f = null),
              e || (e = r ? [r] : []),
              (t.b = r ? String(r) : void 0),
              (t.D = 0 === r ? -1 : 0),
              (t.u = e),
              (e = -1),
              !(r = t.u.length) ||
              ((e = r - 1),
              null === (r = t.u[e]) ||
                "object" != typeof r ||
                Array.isArray(r) ||
                (gt && r instanceof Uint8Array))
                ? -1 < o
                  ? ((t.G = Math.max(o, e + 1 - t.D)), (t.i = null))
                  : (t.G = Number.MAX_VALUE)
                : ((t.G = e - t.D), (t.i = r)),
              (t.a = {}),
              n)
            )
              for (o = 0; o < n.length; o++)
                (e = n[o]) < t.G
                  ? ((e += t.D), (t.u[e] = t.u[e] || vt))
                  : (bt(t), (t.i[e] = t.i[e] || vt));
            if (i && i.length) for (o = 0; o < i.length; o++) At(t, i[o]);
          });
        var vt = Object.freeze ? Object.freeze([]) : [];
        function bt(t) {
          var e = t.G + t.D;
          t.u[e] || (t.i = t.u[e] = {});
        }
        function wt(t, e, r) {
          for (var o = [], n = 0; n < t.length; n++)
            o[n] = e.call(t[n], r, t[n]);
          return o;
        }
        function mt(t, e) {
          if (e < t.G) {
            e += t.D;
            var r = t.u[e];
            return r === vt ? (t.u[e] = []) : r;
          }
          if (t.i) return (r = t.i[e]) === vt ? (t.i[e] = []) : r;
        }
        function xt(t, e) {
          return null == (t = mt(t, e)) ? t : +t;
        }
        function Ot(t, e) {
          return null == (t = mt(t, e)) ? t : !!t;
        }
        function St(t) {
          return null == t || "string" == typeof t
            ? t
            : gt && t instanceof Uint8Array
            ? I(t)
            : (m("Cannot coerce to b64 string: " + l(t)), null);
        }
        function Et(t) {
          return null == t || t instanceof Uint8Array
            ? t
            : "string" == typeof t
            ? B(t)
            : (m("Cannot coerce to Uint8Array: " + l(t)), null);
        }
        function Rt(t) {
          if (t && 1 < t.length) {
            var e = l(t[0]);
            d(t, function (t) {
              l(t) != e &&
                m(
                  "Inconsistent type in JSPB repeated field array. Got " +
                    l(t) +
                    " expected " +
                    e
                );
            });
          }
        }
        function jt(t, e, r) {
          return null == (t = mt(t, e)) ? r : t;
        }
        function Ft(t, e, r) {
          return (
            x(t, dt), e < t.G ? (t.u[e + t.D] = r) : (bt(t), (t.i[e] = r)), t
          );
        }
        function Mt(t, e, r, o) {
          return (
            x(t, dt),
            r !== o
              ? Ft(t, e, r)
              : e < t.G
              ? (t.u[e + t.D] = null)
              : (bt(t), delete t.i[e]),
            t
          );
        }
        function Tt(t, e, r, o) {
          return (
            x(t, dt),
            (r = At(t, r)) &&
              r !== e &&
              void 0 !== o &&
              (t.f && r in t.f && (t.f[r] = void 0), Ft(t, r, void 0)),
            Ft(t, e, o)
          );
        }
        function At(t, e) {
          for (var r, o, n = 0; n < e.length; n++) {
            var i = e[n],
              a = mt(t, i);
            null != a && ((r = i), (o = a), Ft(t, i, void 0));
          }
          return r ? (Ft(t, r, o), r) : 0;
        }
        function Ct(t, e, r) {
          if ((t.f || (t.f = {}), !t.f[r])) {
            for (var o = mt(t, r), n = [], i = 0; i < o.length; i++)
              n[i] = new e(o[i]);
            t.f[r] = n;
          }
        }
        function kt(t) {
          if (t.f)
            for (var e in t.f) {
              var r = t.f[e];
              if (Array.isArray(r))
                for (var o = 0; o < r.length; o++) r[o] && r[o].g();
              else r && r.g();
            }
        }
        function It(t, e) {
          (t = t || {}), (e = e || {});
          var r,
            o = {};
          for (r in t) o[r] = 0;
          for (r in e) o[r] = 0;
          for (r in o) if (!Bt(t[r], e[r])) return !1;
          return !0;
        }
        function Bt(t, e) {
          if (t == e) return !0;
          if (!f(t) || !f(e))
            return (
              !!(
                ("number" == typeof t && isNaN(t)) ||
                ("number" == typeof e && isNaN(e))
              ) && String(t) == String(e)
            );
          if (t.constructor != e.constructor) return !1;
          if (gt && t.constructor === Uint8Array) {
            if (t.length != e.length) return !1;
            for (var r = 0; r < t.length; r++) if (t[r] != e[r]) return !1;
            return !0;
          }
          if (t.constructor === Array) {
            var o = void 0,
              n = void 0,
              i = Math.max(t.length, e.length);
            for (r = 0; r < i; r++) {
              var a = t[r],
                s = e[r];
              if (
                (a &&
                  a.constructor == Object &&
                  (w(void 0 === o),
                  w(r === t.length - 1),
                  (o = a),
                  (a = void 0)),
                s &&
                  s.constructor == Object &&
                  (w(void 0 === n),
                  w(r === e.length - 1),
                  (n = s),
                  (s = void 0)),
                !Bt(a, s))
              )
                return !1;
            }
            return (!o && !n) || It((o = o || {}), (n = n || {}));
          }
          if (t.constructor === Object) return It(t, e);
          throw Error("Invalid type in JSPB array");
        }
        function Pt(t) {
          return new t.constructor(Nt(t.g()));
        }
        function Nt(t) {
          if (Array.isArray(t)) {
            for (var e = Array(t.length), r = 0; r < t.length; r++) {
              var o = t[r];
              null != o && (e[r] = "object" == typeof o ? Nt(w(o)) : o);
            }
            return e;
          }
          if (gt && t instanceof Uint8Array) return new Uint8Array(t);
          for (r in ((e = {}), t))
            null != (o = t[r]) && (e[r] = "object" == typeof o ? Nt(w(o)) : o);
          return e;
        }
        (dt.toObjectList = wt),
          (dt.toObjectExtension = function (t, e, r, o, n) {
            for (var i in r) {
              var a = r[i],
                s = o.call(t, a);
              if (null != s) {
                for (var p in a.Ba) if (a.Ba.hasOwnProperty(p)) break;
                e[p] = a.Na ? (a.na ? wt(s, a.Na, n) : a.Na(n, s)) : s;
              }
            }
          }),
          (dt.serializeBinaryExtensions = function (t, e, r, o) {
            for (var n in r) {
              var i = r[n],
                a = i.Za;
              if (!i.Aa)
                throw Error(
                  "Message extension present that was generated without binary serialization support"
                );
              var s = o.call(t, a);
              if (null != s)
                if (a.F()) {
                  if (!i.Wa)
                    throw Error(
                      "Message extension present holding submessage without binary support enabled, and message is being serialized to binary format"
                    );
                  i.Aa.call(e, a.ma, s, i.Wa);
                } else i.Aa.call(e, a.ma, s);
            }
          }),
          (dt.readBinaryExtension = function (t, e, r, o, n) {
            var i = r[e.c];
            if (i) {
              if (((r = i.Za), !i.za))
                throw Error(
                  "Deserializing extension whose generated code does not support binary format"
                );
              if (r.F()) {
                var a = new r.la();
                i.za.call(e, a, i.Ab);
              } else a = i.za.call(e);
              r.na && !i.Nb
                ? (e = o.call(t, r))
                  ? e.push(a)
                  : n.call(t, r, [a])
                : n.call(t, r, a);
            } else e.C();
          }),
          (dt.getField = mt),
          (dt.getRepeatedField = function (t, e) {
            return mt(t, e);
          }),
          (dt.getOptionalFloatingPointField = xt),
          (dt.getBooleanField = Ot),
          (dt.getRepeatedFloatingPointField = function (t, e) {
            var r = mt(t, e);
            if ((t.a || (t.a = {}), !t.a[e])) {
              for (var o = 0; o < r.length; o++) r[o] = +r[o];
              t.a[e] = !0;
            }
            return r;
          }),
          (dt.getRepeatedBooleanField = function (t, e) {
            var r = mt(t, e);
            if ((t.a || (t.a = {}), !t.a[e])) {
              for (var o = 0; o < r.length; o++) r[o] = !!r[o];
              t.a[e] = !0;
            }
            return r;
          }),
          (dt.bytesAsB64 = St),
          (dt.bytesAsU8 = Et),
          (dt.bytesListAsB64 = function (t) {
            return Rt(t), t.length && "string" != typeof t[0] ? g(t, St) : t;
          }),
          (dt.bytesListAsU8 = function (t) {
            return (
              Rt(t), !t.length || t[0] instanceof Uint8Array ? t : g(t, Et)
            );
          }),
          (dt.getFieldWithDefault = jt),
          (dt.getBooleanFieldWithDefault = function (t, e, r) {
            return null == (t = Ot(t, e)) ? r : t;
          }),
          (dt.getFloatingPointFieldWithDefault = function (t, e, r) {
            return null == (t = xt(t, e)) ? r : t;
          }),
          (dt.getFieldProto3 = jt),
          (dt.getMapField = function (t, e, r, o) {
            if ((t.f || (t.f = {}), e in t.f)) return t.f[e];
            var n = mt(t, e);
            if (!n) {
              if (r) return;
              Ft(t, e, (n = []));
            }
            return (t.f[e] = new S(n, o));
          }),
          (dt.setField = Ft),
          (dt.setProto3IntField = function (t, e, r) {
            return Mt(t, e, r, 0);
          }),
          (dt.setProto3FloatField = function (t, e, r) {
            return Mt(t, e, r, 0);
          }),
          (dt.setProto3BooleanField = function (t, e, r) {
            return Mt(t, e, r, !1);
          }),
          (dt.setProto3StringField = function (t, e, r) {
            return Mt(t, e, r, "");
          }),
          (dt.setProto3BytesField = function (t, e, r) {
            return Mt(t, e, r, "");
          }),
          (dt.setProto3EnumField = function (t, e, r) {
            return Mt(t, e, r, 0);
          }),
          (dt.setProto3StringIntField = function (t, e, r) {
            return Mt(t, e, r, "0");
          }),
          (dt.addToRepeatedField = function (t, e, r, o) {
            return (
              x(t, dt),
              (e = mt(t, e)),
              null != o ? e.splice(o, 0, r) : e.push(r),
              t
            );
          }),
          (dt.setOneofField = Tt),
          (dt.computeOneofCase = At),
          (dt.getWrapperField = function (t, e, r, o) {
            if ((t.f || (t.f = {}), !t.f[r])) {
              var n = mt(t, r);
              (o || n) && (t.f[r] = new e(n));
            }
            return t.f[r];
          }),
          (dt.getRepeatedWrapperField = function (t, e, r) {
            return Ct(t, e, r), (e = t.f[r]) == vt && (e = t.f[r] = []), e;
          }),
          (dt.setWrapperField = function (t, e, r) {
            x(t, dt), t.f || (t.f = {});
            var o = r ? r.g() : r;
            return (t.f[e] = r), Ft(t, e, o);
          }),
          (dt.setOneofWrapperField = function (t, e, r, o) {
            x(t, dt), t.f || (t.f = {});
            var n = o ? o.g() : o;
            return (t.f[e] = o), Tt(t, e, r, n);
          }),
          (dt.setRepeatedWrapperField = function (t, e, r) {
            x(t, dt), t.f || (t.f = {}), (r = r || []);
            for (var o = [], n = 0; n < r.length; n++) o[n] = r[n].g();
            return (t.f[e] = r), Ft(t, e, o);
          }),
          (dt.addToRepeatedWrapperField = function (t, e, r, o, n) {
            Ct(t, o, e);
            var i = t.f[e];
            return (
              i || (i = t.f[e] = []),
              (r = r || new o()),
              (t = mt(t, e)),
              null != n
                ? (i.splice(n, 0, r), t.splice(n, 0, r.g()))
                : (i.push(r), t.push(r.g())),
              r
            );
          }),
          (dt.toMap = function (t, e, r, o) {
            for (var n = {}, i = 0; i < t.length; i++)
              n[e.call(t[i])] = r ? r.call(t[i], o, t[i]) : t[i];
            return n;
          }),
          (dt.prototype.g = function () {
            return kt(this), this.u;
          }),
          (dt.prototype.toArray = dt.prototype.g),
          (dt.prototype.toString = function () {
            return kt(this), this.u.toString();
          }),
          (dt.prototype.getExtension = function (t) {
            if (this.i) {
              this.f || (this.f = {});
              var e = t.ma;
              if (t.na) {
                if (t.F())
                  return (
                    this.f[e] ||
                      (this.f[e] = g(this.i[e] || [], function (e) {
                        return new t.la(e);
                      })),
                    this.f[e]
                  );
              } else if (t.F())
                return (
                  !this.f[e] && this.i[e] && (this.f[e] = new t.la(this.i[e])),
                  this.f[e]
                );
              return this.i[e];
            }
          }),
          (dt.prototype.getExtension = dt.prototype.getExtension),
          (dt.prototype.Kc = function (t, e) {
            this.f || (this.f = {}), bt(this);
            var r = t.ma;
            return (
              t.na
                ? ((e = e || []),
                  t.F()
                    ? ((this.f[r] = e),
                      (this.i[r] = g(e, function (t) {
                        return t.g();
                      })))
                    : (this.i[r] = e))
                : t.F()
                ? ((this.f[r] = e), (this.i[r] = e ? e.g() : e))
                : (this.i[r] = e),
              this
            );
          }),
          (dt.prototype.setExtension = dt.prototype.Kc),
          (dt.difference = function (t, e) {
            if (!(t instanceof e.constructor))
              throw Error("Messages have different types.");
            var r = t.g();
            e = e.g();
            var o = [],
              n = 0,
              i = r.length > e.length ? r.length : e.length;
            for (t.b && ((o[0] = t.b), (n = 1)); n < i; n++)
              Bt(r[n], e[n]) || (o[n] = e[n]);
            return new t.constructor(o);
          }),
          (dt.equals = function (t, e) {
            return (
              t == e ||
              (!(!t || !e) && t instanceof e.constructor && Bt(t.g(), e.g()))
            );
          }),
          (dt.compareExtensions = It),
          (dt.compareFields = Bt),
          (dt.prototype.Bb = function () {
            return Pt(this);
          }),
          (dt.prototype.cloneMessage = dt.prototype.Bb),
          (dt.prototype.clone = function () {
            return Pt(this);
          }),
          (dt.prototype.clone = dt.prototype.clone),
          (dt.clone = function (t) {
            return Pt(t);
          }),
          (dt.copyInto = function (t, e) {
            x(t, dt),
              x(e, dt),
              w(
                t.constructor == e.constructor,
                "Copy source and target message should have the same type."
              ),
              (t = Pt(t));
            for (
              var r = e.g(), o = t.g(), n = (r.length = 0);
              n < o.length;
              n++
            )
              r[n] = o[n];
            (e.f = t.f), (e.i = t.i);
          }),
          (dt.registerMessageType = function (t, e) {
            e.we = t;
          });
        var Dt = {
          dump: function (t) {
            return (
              x(t, dt, "jspb.Message instance expected"),
              w(
                t.getExtension,
                "Only unobfuscated and unoptimized compilation modes supported."
              ),
              Dt.X(t)
            );
          },
        };
        function Ut() {
          this.a = [];
        }
        function Lt(t, e) {
          (this.lo = t), (this.hi = e);
        }
        function _t(t, e) {
          var r = 65535 & t,
            o = 65535 & e,
            n = e >>> 16;
          for (
            e =
              r * o +
              65536 * ((r * n) & 65535) +
              65536 * (((t >>>= 16) * o) & 65535),
              r = t * n + ((r * n) >>> 16) + ((t * o) >>> 16);
            4294967296 <= e;

          )
            (e -= 4294967296), (r += 1);
          return new Lt(e >>> 0, r >>> 0);
        }
        function Gt(t) {
          for (
            var e = new Lt(0, 0), r = new Lt(0, 0), o = 0;
            o < t.length;
            o++
          ) {
            if ("0" > t[o] || "9" < t[o]) return null;
            (r.lo = parseInt(t[o], 10)), (e = e.eb(10).add(r));
          }
          return e;
        }
        function zt(t, e) {
          (this.lo = t), (this.hi = e);
        }
        function Wt(t) {
          var e = 0 < t.length && "-" == t[0];
          return (
            e && (t = t.substring(1)),
            null === (t = Gt(t))
              ? null
              : (e && (t = new Lt(0, 0).sub(t)), new zt(t.lo, t.hi))
          );
        }
        function Vt() {
          (this.c = []), (this.b = 0), (this.a = new Ut()), (this.h = []);
        }
        function Ht(t, e) {
          var r = t.a.end();
          t.c.push(r), t.c.push(e), (t.b += r.length + e.length);
        }
        function qt(t, e) {
          return (
            Kt(t, e, 2),
            (e = t.a.end()),
            t.c.push(e),
            (t.b += e.length),
            e.push(t.b),
            e
          );
        }
        function Xt(t, e) {
          var r = e.pop();
          for (w(0 <= (r = t.b + t.a.length() - r)); 127 < r; )
            e.push((127 & r) | 128), (r >>>= 7), t.b++;
          e.push(r), t.b++;
        }
        function Kt(t, e, r) {
          w(1 <= e && e == Math.floor(e)), t.a.j(8 * e + r);
        }
        function Yt(t, e, r) {
          null != r && (Kt(t, e, 0), t.a.j(r));
        }
        function Zt(t, e, r) {
          null != r && (Kt(t, e, 0), t.a.M(r));
        }
        c("jspb.debug.dump", Dt.dump, void 0),
          (Dt.X = function (t) {
            var e = l(t);
            if (
              "number" == e ||
              "string" == e ||
              "boolean" == e ||
              "null" == e ||
              "undefined" == e ||
              ("undefined" != typeof Uint8Array && t instanceof Uint8Array)
            )
              return t;
            if ("array" == e)
              return (
                (function (t, e, r) {
                  for (var o = [], n = 2; n < arguments.length; ++n)
                    o[n - 2] = arguments[n];
                  Array.isArray(t) ||
                    b("Expected array but got %s: %s.", [l(t), t], e, o);
                })(t),
                g(t, Dt.X)
              );
            if (t instanceof S) {
              for (
                var r = {}, o = (t = t.entries()).next();
                !o.done;
                o = t.next()
              )
                r[o.value[0]] = Dt.X(o.value[1]);
              return r;
            }
            x(t, dt, "Only messages expected: " + t);
            var n = { $name: (e = t.constructor).name || e.displayName };
            for (s in e.prototype) {
              var i = /^get([A-Z]\w*)/.exec(s);
              if (i && "getExtension" != s && "getJsPbMessageId" != s) {
                var a = "has" + i[1];
                (t[a] && !t[a]()) || ((a = t[s]()), (n[Dt.$a(i[1])] = Dt.X(a)));
              }
            }
            if (t.extensionObject_)
              return (
                (n.$extensions =
                  "Recursive dumping of extensions not supported in compiled code. Switch to uncompiled or dump extension object directly"),
                n
              );
            for (o in e.extensions)
              if (/^\d+$/.test(o)) {
                a = e.extensions[o];
                var s = t.getExtension(a);
                (i = void 0), (a = a.Ba);
                var p = [],
                  u = 0;
                for (i in a) p[u++] = i;
                (i = p[0]),
                  null != s &&
                    (r || (r = n.$extensions = {}), (r[Dt.$a(i)] = Dt.X(s)));
              }
            return n;
          }),
          (Dt.$a = function (t) {
            return t.replace(/^[A-Z]/, function (t) {
              return t.toLowerCase();
            });
          }),
          c("jspb.BinaryEncoder", Ut, void 0),
          (Ut.prototype.length = function () {
            return this.a.length;
          }),
          (Ut.prototype.length = Ut.prototype.length),
          (Ut.prototype.end = function () {
            var t = this.a;
            return (this.a = []), t;
          }),
          (Ut.prototype.end = Ut.prototype.end),
          (Ut.prototype.l = function (t, e) {
            for (
              w(t == Math.floor(t)),
                w(e == Math.floor(e)),
                w(0 <= t && 4294967296 > t),
                w(0 <= e && 4294967296 > e);
              0 < e || 127 < t;

            )
              this.a.push((127 & t) | 128),
                (t = ((t >>> 7) | (e << 25)) >>> 0),
                (e >>>= 7);
            this.a.push(t);
          }),
          (Ut.prototype.writeSplitVarint64 = Ut.prototype.l),
          (Ut.prototype.A = function (t, e) {
            w(t == Math.floor(t)),
              w(e == Math.floor(e)),
              w(0 <= t && 4294967296 > t),
              w(0 <= e && 4294967296 > e),
              this.s(t),
              this.s(e);
          }),
          (Ut.prototype.writeSplitFixed64 = Ut.prototype.A),
          (Ut.prototype.j = function (t) {
            for (w(t == Math.floor(t)), w(0 <= t && 4294967296 > t); 127 < t; )
              this.a.push((127 & t) | 128), (t >>>= 7);
            this.a.push(t);
          }),
          (Ut.prototype.writeUnsignedVarint32 = Ut.prototype.j),
          (Ut.prototype.M = function (t) {
            if (
              (w(t == Math.floor(t)),
              w(-2147483648 <= t && 2147483648 > t),
              0 <= t)
            )
              this.j(t);
            else {
              for (var e = 0; 9 > e; e++)
                this.a.push((127 & t) | 128), (t >>= 7);
              this.a.push(1);
            }
          }),
          (Ut.prototype.writeSignedVarint32 = Ut.prototype.M),
          (Ut.prototype.va = function (t) {
            w(t == Math.floor(t)),
              w(0 <= t && 0x10000000000000000 > t),
              L(t),
              this.l(N, D);
          }),
          (Ut.prototype.writeUnsignedVarint64 = Ut.prototype.va),
          (Ut.prototype.ua = function (t) {
            w(t == Math.floor(t)),
              w(-0x8000000000000000 <= t && 0x8000000000000000 > t),
              L(t),
              this.l(N, D);
          }),
          (Ut.prototype.writeSignedVarint64 = Ut.prototype.ua),
          (Ut.prototype.wa = function (t) {
            w(t == Math.floor(t)),
              w(-2147483648 <= t && 2147483648 > t),
              this.j(((t << 1) ^ (t >> 31)) >>> 0);
          }),
          (Ut.prototype.writeZigzagVarint32 = Ut.prototype.wa),
          (Ut.prototype.xa = function (t) {
            w(t == Math.floor(t)),
              w(-0x8000000000000000 <= t && 0x8000000000000000 > t),
              _(t),
              this.l(N, D);
          }),
          (Ut.prototype.writeZigzagVarint64 = Ut.prototype.xa),
          (Ut.prototype.Ta = function (t) {
            this.W(et(t));
          }),
          (Ut.prototype.writeZigzagVarint64String = Ut.prototype.Ta),
          (Ut.prototype.W = function (t) {
            var e = this;
            W(t),
              q(N, D, function (t, r) {
                e.l(t >>> 0, r >>> 0);
              });
          }),
          (Ut.prototype.writeZigzagVarintHash64 = Ut.prototype.W),
          (Ut.prototype.be = function (t) {
            w(t == Math.floor(t)),
              w(0 <= t && 256 > t),
              this.a.push((t >>> 0) & 255);
          }),
          (Ut.prototype.writeUint8 = Ut.prototype.be),
          (Ut.prototype.ae = function (t) {
            w(t == Math.floor(t)),
              w(0 <= t && 65536 > t),
              this.a.push((t >>> 0) & 255),
              this.a.push((t >>> 8) & 255);
          }),
          (Ut.prototype.writeUint16 = Ut.prototype.ae),
          (Ut.prototype.s = function (t) {
            w(t == Math.floor(t)),
              w(0 <= t && 4294967296 > t),
              this.a.push((t >>> 0) & 255),
              this.a.push((t >>> 8) & 255),
              this.a.push((t >>> 16) & 255),
              this.a.push((t >>> 24) & 255);
          }),
          (Ut.prototype.writeUint32 = Ut.prototype.s),
          (Ut.prototype.V = function (t) {
            w(t == Math.floor(t)),
              w(0 <= t && 0x10000000000000000 > t),
              U(t),
              this.s(N),
              this.s(D);
          }),
          (Ut.prototype.writeUint64 = Ut.prototype.V),
          (Ut.prototype.Qc = function (t) {
            w(t == Math.floor(t)),
              w(-128 <= t && 128 > t),
              this.a.push((t >>> 0) & 255);
          }),
          (Ut.prototype.writeInt8 = Ut.prototype.Qc),
          (Ut.prototype.Pc = function (t) {
            w(t == Math.floor(t)),
              w(-32768 <= t && 32768 > t),
              this.a.push((t >>> 0) & 255),
              this.a.push((t >>> 8) & 255);
          }),
          (Ut.prototype.writeInt16 = Ut.prototype.Pc),
          (Ut.prototype.S = function (t) {
            w(t == Math.floor(t)),
              w(-2147483648 <= t && 2147483648 > t),
              this.a.push((t >>> 0) & 255),
              this.a.push((t >>> 8) & 255),
              this.a.push((t >>> 16) & 255),
              this.a.push((t >>> 24) & 255);
          }),
          (Ut.prototype.writeInt32 = Ut.prototype.S),
          (Ut.prototype.T = function (t) {
            w(t == Math.floor(t)),
              w(-0x8000000000000000 <= t && 0x8000000000000000 > t),
              L(t),
              this.A(N, D);
          }),
          (Ut.prototype.writeInt64 = Ut.prototype.T),
          (Ut.prototype.ka = function (t) {
            w(t == Math.floor(t)),
              w(-0x8000000000000000 <= +t && 0x8000000000000000 > +t),
              W(et(t)),
              this.A(N, D);
          }),
          (Ut.prototype.writeInt64String = Ut.prototype.ka),
          (Ut.prototype.L = function (t) {
            w(
              1 / 0 === t ||
                -1 / 0 === t ||
                isNaN(t) ||
                (-34028234663852886e22 <= t && 34028234663852886e22 >= t)
            ),
              G(t),
              this.s(N);
          }),
          (Ut.prototype.writeFloat = Ut.prototype.L),
          (Ut.prototype.J = function (t) {
            w(
              1 / 0 === t ||
                -1 / 0 === t ||
                isNaN(t) ||
                (-17976931348623157e292 <= t && 17976931348623157e292 >= t)
            ),
              z(t),
              this.s(N),
              this.s(D);
          }),
          (Ut.prototype.writeDouble = Ut.prototype.J),
          (Ut.prototype.I = function (t) {
            w("boolean" == typeof t || "number" == typeof t),
              this.a.push(t ? 1 : 0);
          }),
          (Ut.prototype.writeBool = Ut.prototype.I),
          (Ut.prototype.R = function (t) {
            w(t == Math.floor(t)),
              w(-2147483648 <= t && 2147483648 > t),
              this.M(t);
          }),
          (Ut.prototype.writeEnum = Ut.prototype.R),
          (Ut.prototype.ja = function (t) {
            this.a.push.apply(this.a, t);
          }),
          (Ut.prototype.writeBytes = Ut.prototype.ja),
          (Ut.prototype.N = function (t) {
            W(t), this.l(N, D);
          }),
          (Ut.prototype.writeVarintHash64 = Ut.prototype.N),
          (Ut.prototype.K = function (t) {
            W(t), this.s(N), this.s(D);
          }),
          (Ut.prototype.writeFixedHash64 = Ut.prototype.K),
          (Ut.prototype.U = function (t) {
            var e = this.a.length;
            !(function (t, e, r) {
              for (var o = [], n = 2; n < arguments.length; ++n)
                o[n - 2] = arguments[n];
              "string" != typeof t &&
                b("Expected string but got %s: %s.", [l(t), t], e, o);
            })(t);
            for (var r = 0; r < t.length; r++) {
              var o = t.charCodeAt(r);
              if (128 > o) this.a.push(o);
              else if (2048 > o)
                this.a.push((o >> 6) | 192), this.a.push((63 & o) | 128);
              else if (65536 > o)
                if (55296 <= o && 56319 >= o && r + 1 < t.length) {
                  var n = t.charCodeAt(r + 1);
                  56320 <= n &&
                    57343 >= n &&
                    ((o = 1024 * (o - 55296) + n - 56320 + 65536),
                    this.a.push((o >> 18) | 240),
                    this.a.push(((o >> 12) & 63) | 128),
                    this.a.push(((o >> 6) & 63) | 128),
                    this.a.push((63 & o) | 128),
                    r++);
                } else
                  this.a.push((o >> 12) | 224),
                    this.a.push(((o >> 6) & 63) | 128),
                    this.a.push((63 & o) | 128);
            }
            return this.a.length - e;
          }),
          (Ut.prototype.writeString = Ut.prototype.U),
          c("jspb.arith.UInt64", Lt, void 0),
          (Lt.prototype.cmp = function (t) {
            return this.hi < t.hi || (this.hi == t.hi && this.lo < t.lo)
              ? -1
              : this.hi == t.hi && this.lo == t.lo
              ? 0
              : 1;
          }),
          (Lt.prototype.cmp = Lt.prototype.cmp),
          (Lt.prototype.La = function () {
            return new Lt(
              ((this.lo >>> 1) | ((1 & this.hi) << 31)) >>> 0,
              (this.hi >>> 1) >>> 0
            );
          }),
          (Lt.prototype.rightShift = Lt.prototype.La),
          (Lt.prototype.Da = function () {
            return new Lt(
              (this.lo << 1) >>> 0,
              ((this.hi << 1) | (this.lo >>> 31)) >>> 0
            );
          }),
          (Lt.prototype.leftShift = Lt.prototype.Da),
          (Lt.prototype.cb = function () {
            return !!(2147483648 & this.hi);
          }),
          (Lt.prototype.msb = Lt.prototype.cb),
          (Lt.prototype.Ob = function () {
            return !!(1 & this.lo);
          }),
          (Lt.prototype.lsb = Lt.prototype.Ob),
          (Lt.prototype.Ua = function () {
            return 0 == this.lo && 0 == this.hi;
          }),
          (Lt.prototype.zero = Lt.prototype.Ua),
          (Lt.prototype.add = function (t) {
            return new Lt(
              (((this.lo + t.lo) & 4294967295) >>> 0) >>> 0,
              ((((this.hi + t.hi) & 4294967295) >>> 0) +
                (4294967296 <= this.lo + t.lo ? 1 : 0)) >>>
                0
            );
          }),
          (Lt.prototype.add = Lt.prototype.add),
          (Lt.prototype.sub = function (t) {
            return new Lt(
              (((this.lo - t.lo) & 4294967295) >>> 0) >>> 0,
              ((((this.hi - t.hi) & 4294967295) >>> 0) -
                (0 > this.lo - t.lo ? 1 : 0)) >>>
                0
            );
          }),
          (Lt.prototype.sub = Lt.prototype.sub),
          (Lt.mul32x32 = _t),
          (Lt.prototype.eb = function (t) {
            var e = _t(this.lo, t);
            return ((t = _t(this.hi, t)).hi = t.lo), (t.lo = 0), e.add(t);
          }),
          (Lt.prototype.mul = Lt.prototype.eb),
          (Lt.prototype.Xa = function (t) {
            if (0 == t) return [];
            var e = new Lt(0, 0),
              r = new Lt(this.lo, this.hi);
            t = new Lt(t, 0);
            for (var o = new Lt(1, 0); !t.cb(); ) (t = t.Da()), (o = o.Da());
            for (; !o.Ua(); )
              0 >= t.cmp(r) && ((e = e.add(o)), (r = r.sub(t))),
                (t = t.La()),
                (o = o.La());
            return [e, r];
          }),
          (Lt.prototype.div = Lt.prototype.Xa),
          (Lt.prototype.toString = function () {
            for (var t = "", e = this; !e.Ua(); ) {
              var r = (e = e.Xa(10))[0];
              (t = e[1].lo + t), (e = r);
            }
            return "" == t && (t = "0"), t;
          }),
          (Lt.prototype.toString = Lt.prototype.toString),
          (Lt.fromString = Gt),
          (Lt.prototype.clone = function () {
            return new Lt(this.lo, this.hi);
          }),
          (Lt.prototype.clone = Lt.prototype.clone),
          c("jspb.arith.Int64", zt, void 0),
          (zt.prototype.add = function (t) {
            return new zt(
              (((this.lo + t.lo) & 4294967295) >>> 0) >>> 0,
              ((((this.hi + t.hi) & 4294967295) >>> 0) +
                (4294967296 <= this.lo + t.lo ? 1 : 0)) >>>
                0
            );
          }),
          (zt.prototype.add = zt.prototype.add),
          (zt.prototype.sub = function (t) {
            return new zt(
              (((this.lo - t.lo) & 4294967295) >>> 0) >>> 0,
              ((((this.hi - t.hi) & 4294967295) >>> 0) -
                (0 > this.lo - t.lo ? 1 : 0)) >>>
                0
            );
          }),
          (zt.prototype.sub = zt.prototype.sub),
          (zt.prototype.clone = function () {
            return new zt(this.lo, this.hi);
          }),
          (zt.prototype.clone = zt.prototype.clone),
          (zt.prototype.toString = function () {
            var t = !!(2147483648 & this.hi),
              e = new Lt(this.lo, this.hi);
            return (
              t && (e = new Lt(0, 0).sub(e)), (t ? "-" : "") + e.toString()
            );
          }),
          (zt.prototype.toString = zt.prototype.toString),
          (zt.fromString = Wt),
          c("jspb.BinaryWriter", Vt, void 0),
          (Vt.prototype.pb = function (t, e, r) {
            Ht(this, t.subarray(e, r));
          }),
          (Vt.prototype.writeSerializedMessage = Vt.prototype.pb),
          (Vt.prototype.Pb = function (t, e, r) {
            null != t && null != e && null != r && this.pb(t, e, r);
          }),
          (Vt.prototype.maybeWriteSerializedMessage = Vt.prototype.Pb),
          (Vt.prototype.reset = function () {
            (this.c = []), this.a.end(), (this.b = 0), (this.h = []);
          }),
          (Vt.prototype.reset = Vt.prototype.reset),
          (Vt.prototype.ab = function () {
            w(0 == this.h.length);
            for (
              var t = new Uint8Array(this.b + this.a.length()),
                e = this.c,
                r = e.length,
                o = 0,
                n = 0;
              n < r;
              n++
            ) {
              var i = e[n];
              t.set(i, o), (o += i.length);
            }
            return (
              (e = this.a.end()),
              t.set(e, o),
              w((o += e.length) == t.length),
              (this.c = [t]),
              t
            );
          }),
          (Vt.prototype.getResultBuffer = Vt.prototype.ab),
          (Vt.prototype.Kb = function (t) {
            return I(this.ab(), t);
          }),
          (Vt.prototype.getResultBase64String = Vt.prototype.Kb),
          (Vt.prototype.Va = function (t) {
            this.h.push(qt(this, t));
          }),
          (Vt.prototype.beginSubMessage = Vt.prototype.Va),
          (Vt.prototype.Ya = function () {
            w(0 <= this.h.length), Xt(this, this.h.pop());
          }),
          (Vt.prototype.endSubMessage = Vt.prototype.Ya),
          (Vt.prototype.Nc = function (t, e, r) {
            switch (t) {
              case 1:
                this.J(e, r);
                break;
              case 2:
                this.L(e, r);
                break;
              case 3:
                this.T(e, r);
                break;
              case 4:
                this.V(e, r);
                break;
              case 5:
                this.S(e, r);
                break;
              case 6:
                this.Qa(e, r);
                break;
              case 7:
                this.Pa(e, r);
                break;
              case 8:
                this.I(e, r);
                break;
              case 9:
                this.U(e, r);
                break;
              case 10:
                m("Group field type not supported in writeAny()");
                break;
              case 11:
                m("Message field type not supported in writeAny()");
                break;
              case 12:
                this.ja(e, r);
                break;
              case 13:
                this.s(e, r);
                break;
              case 14:
                this.R(e, r);
                break;
              case 15:
                this.Ra(e, r);
                break;
              case 16:
                this.Sa(e, r);
                break;
              case 17:
                this.rb(e, r);
                break;
              case 18:
                this.sb(e, r);
                break;
              case 30:
                this.K(e, r);
                break;
              case 31:
                this.N(e, r);
                break;
              default:
                m("Invalid field type in writeAny()");
            }
          }),
          (Vt.prototype.writeAny = Vt.prototype.Nc),
          (Vt.prototype.S = function (t, e) {
            null != e &&
              (w(-2147483648 <= e && 2147483648 > e), Zt(this, t, e));
          }),
          (Vt.prototype.writeInt32 = Vt.prototype.S),
          (Vt.prototype.ob = function (t, e) {
            null != e &&
              (w(-2147483648 <= (e = parseInt(e, 10)) && 2147483648 > e),
              Zt(this, t, e));
          }),
          (Vt.prototype.writeInt32String = Vt.prototype.ob),
          (Vt.prototype.T = function (t, e) {
            null != e &&
              (w(-0x8000000000000000 <= e && 0x8000000000000000 > e),
              null != e && (Kt(this, t, 0), this.a.ua(e)));
          }),
          (Vt.prototype.writeInt64 = Vt.prototype.T),
          (Vt.prototype.ka = function (t, e) {
            null != e && ((e = Wt(e)), Kt(this, t, 0), this.a.l(e.lo, e.hi));
          }),
          (Vt.prototype.writeInt64String = Vt.prototype.ka),
          (Vt.prototype.s = function (t, e) {
            null != e && (w(0 <= e && 4294967296 > e), Yt(this, t, e));
          }),
          (Vt.prototype.writeUint32 = Vt.prototype.s),
          (Vt.prototype.ub = function (t, e) {
            null != e &&
              (w(0 <= (e = parseInt(e, 10)) && 4294967296 > e), Yt(this, t, e));
          }),
          (Vt.prototype.writeUint32String = Vt.prototype.ub),
          (Vt.prototype.V = function (t, e) {
            null != e &&
              (w(0 <= e && 0x10000000000000000 > e),
              null != e && (Kt(this, t, 0), this.a.va(e)));
          }),
          (Vt.prototype.writeUint64 = Vt.prototype.V),
          (Vt.prototype.vb = function (t, e) {
            null != e && ((e = Gt(e)), Kt(this, t, 0), this.a.l(e.lo, e.hi));
          }),
          (Vt.prototype.writeUint64String = Vt.prototype.vb),
          (Vt.prototype.rb = function (t, e) {
            null != e &&
              (w(-2147483648 <= e && 2147483648 > e),
              null != e && (Kt(this, t, 0), this.a.wa(e)));
          }),
          (Vt.prototype.writeSint32 = Vt.prototype.rb),
          (Vt.prototype.sb = function (t, e) {
            null != e &&
              (w(-0x8000000000000000 <= e && 0x8000000000000000 > e),
              null != e && (Kt(this, t, 0), this.a.xa(e)));
          }),
          (Vt.prototype.writeSint64 = Vt.prototype.sb),
          (Vt.prototype.$d = function (t, e) {
            null != e && null != e && (Kt(this, t, 0), this.a.W(e));
          }),
          (Vt.prototype.writeSintHash64 = Vt.prototype.$d),
          (Vt.prototype.Zd = function (t, e) {
            null != e && null != e && (Kt(this, t, 0), this.a.Ta(e));
          }),
          (Vt.prototype.writeSint64String = Vt.prototype.Zd),
          (Vt.prototype.Pa = function (t, e) {
            null != e &&
              (w(0 <= e && 4294967296 > e), Kt(this, t, 5), this.a.s(e));
          }),
          (Vt.prototype.writeFixed32 = Vt.prototype.Pa),
          (Vt.prototype.Qa = function (t, e) {
            null != e &&
              (w(0 <= e && 0x10000000000000000 > e),
              Kt(this, t, 1),
              this.a.V(e));
          }),
          (Vt.prototype.writeFixed64 = Vt.prototype.Qa),
          (Vt.prototype.nb = function (t, e) {
            null != e && ((e = Gt(e)), Kt(this, t, 1), this.a.A(e.lo, e.hi));
          }),
          (Vt.prototype.writeFixed64String = Vt.prototype.nb),
          (Vt.prototype.Ra = function (t, e) {
            null != e &&
              (w(-2147483648 <= e && 2147483648 > e),
              Kt(this, t, 5),
              this.a.S(e));
          }),
          (Vt.prototype.writeSfixed32 = Vt.prototype.Ra),
          (Vt.prototype.Sa = function (t, e) {
            null != e &&
              (w(-0x8000000000000000 <= e && 0x8000000000000000 > e),
              Kt(this, t, 1),
              this.a.T(e));
          }),
          (Vt.prototype.writeSfixed64 = Vt.prototype.Sa),
          (Vt.prototype.qb = function (t, e) {
            null != e && ((e = Wt(e)), Kt(this, t, 1), this.a.A(e.lo, e.hi));
          }),
          (Vt.prototype.writeSfixed64String = Vt.prototype.qb),
          (Vt.prototype.L = function (t, e) {
            null != e && (Kt(this, t, 5), this.a.L(e));
          }),
          (Vt.prototype.writeFloat = Vt.prototype.L),
          (Vt.prototype.J = function (t, e) {
            null != e && (Kt(this, t, 1), this.a.J(e));
          }),
          (Vt.prototype.writeDouble = Vt.prototype.J),
          (Vt.prototype.I = function (t, e) {
            null != e &&
              (w("boolean" == typeof e || "number" == typeof e),
              Kt(this, t, 0),
              this.a.I(e));
          }),
          (Vt.prototype.writeBool = Vt.prototype.I),
          (Vt.prototype.R = function (t, e) {
            null != e &&
              (w(-2147483648 <= e && 2147483648 > e),
              Kt(this, t, 0),
              this.a.M(e));
          }),
          (Vt.prototype.writeEnum = Vt.prototype.R),
          (Vt.prototype.U = function (t, e) {
            null != e && ((t = qt(this, t)), this.a.U(e), Xt(this, t));
          }),
          (Vt.prototype.writeString = Vt.prototype.U),
          (Vt.prototype.ja = function (t, e) {
            null != e &&
              ((e = it(e)), Kt(this, t, 2), this.a.j(e.length), Ht(this, e));
          }),
          (Vt.prototype.writeBytes = Vt.prototype.ja),
          (Vt.prototype.Rc = function (t, e, r) {
            null != e && ((t = qt(this, t)), r(e, this), Xt(this, t));
          }),
          (Vt.prototype.writeMessage = Vt.prototype.Rc),
          (Vt.prototype.Sc = function (t, e, r) {
            null != e &&
              (Kt(this, 1, 3),
              Kt(this, 2, 0),
              this.a.M(t),
              (t = qt(this, 3)),
              r(e, this),
              Xt(this, t),
              Kt(this, 1, 4));
          }),
          (Vt.prototype.writeMessageSet = Vt.prototype.Sc),
          (Vt.prototype.Oc = function (t, e, r) {
            null != e && (Kt(this, t, 3), r(e, this), Kt(this, t, 4));
          }),
          (Vt.prototype.writeGroup = Vt.prototype.Oc),
          (Vt.prototype.K = function (t, e) {
            null != e && (w(8 == e.length), Kt(this, t, 1), this.a.K(e));
          }),
          (Vt.prototype.writeFixedHash64 = Vt.prototype.K),
          (Vt.prototype.N = function (t, e) {
            null != e && (w(8 == e.length), Kt(this, t, 0), this.a.N(e));
          }),
          (Vt.prototype.writeVarintHash64 = Vt.prototype.N),
          (Vt.prototype.A = function (t, e, r) {
            Kt(this, t, 1), this.a.A(e, r);
          }),
          (Vt.prototype.writeSplitFixed64 = Vt.prototype.A),
          (Vt.prototype.l = function (t, e, r) {
            Kt(this, t, 0), this.a.l(e, r);
          }),
          (Vt.prototype.writeSplitVarint64 = Vt.prototype.l),
          (Vt.prototype.tb = function (t, e, r) {
            Kt(this, t, 0);
            var o = this.a;
            q(e, r, function (t, e) {
              o.l(t >>> 0, e >>> 0);
            });
          }),
          (Vt.prototype.writeSplitZigzagVarint64 = Vt.prototype.tb),
          (Vt.prototype.Ed = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) Zt(this, t, e[r]);
          }),
          (Vt.prototype.writeRepeatedInt32 = Vt.prototype.Ed),
          (Vt.prototype.Fd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.ob(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedInt32String = Vt.prototype.Fd),
          (Vt.prototype.Gd = function (t, e) {
            if (null != e)
              for (var r = 0; r < e.length; r++) {
                var o = e[r];
                null != o && (Kt(this, t, 0), this.a.ua(o));
              }
          }),
          (Vt.prototype.writeRepeatedInt64 = Vt.prototype.Gd),
          (Vt.prototype.Qd = function (t, e, r, o) {
            if (null != e)
              for (var n = 0; n < e.length; n++) this.A(t, r(e[n]), o(e[n]));
          }),
          (Vt.prototype.writeRepeatedSplitFixed64 = Vt.prototype.Qd),
          (Vt.prototype.Rd = function (t, e, r, o) {
            if (null != e)
              for (var n = 0; n < e.length; n++) this.l(t, r(e[n]), o(e[n]));
          }),
          (Vt.prototype.writeRepeatedSplitVarint64 = Vt.prototype.Rd),
          (Vt.prototype.Sd = function (t, e, r, o) {
            if (null != e)
              for (var n = 0; n < e.length; n++) this.tb(t, r(e[n]), o(e[n]));
          }),
          (Vt.prototype.writeRepeatedSplitZigzagVarint64 = Vt.prototype.Sd),
          (Vt.prototype.Hd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.ka(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedInt64String = Vt.prototype.Hd),
          (Vt.prototype.Ud = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) Yt(this, t, e[r]);
          }),
          (Vt.prototype.writeRepeatedUint32 = Vt.prototype.Ud),
          (Vt.prototype.Vd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.ub(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedUint32String = Vt.prototype.Vd),
          (Vt.prototype.Wd = function (t, e) {
            if (null != e)
              for (var r = 0; r < e.length; r++) {
                var o = e[r];
                null != o && (Kt(this, t, 0), this.a.va(o));
              }
          }),
          (Vt.prototype.writeRepeatedUint64 = Vt.prototype.Wd),
          (Vt.prototype.Xd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.vb(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedUint64String = Vt.prototype.Xd),
          (Vt.prototype.Md = function (t, e) {
            if (null != e)
              for (var r = 0; r < e.length; r++) {
                var o = e[r];
                null != o && (Kt(this, t, 0), this.a.wa(o));
              }
          }),
          (Vt.prototype.writeRepeatedSint32 = Vt.prototype.Md),
          (Vt.prototype.Nd = function (t, e) {
            if (null != e)
              for (var r = 0; r < e.length; r++) {
                var o = e[r];
                null != o && (Kt(this, t, 0), this.a.xa(o));
              }
          }),
          (Vt.prototype.writeRepeatedSint64 = Vt.prototype.Nd),
          (Vt.prototype.Od = function (t, e) {
            if (null != e)
              for (var r = 0; r < e.length; r++) {
                var o = e[r];
                null != o && (Kt(this, t, 0), this.a.Ta(o));
              }
          }),
          (Vt.prototype.writeRepeatedSint64String = Vt.prototype.Od),
          (Vt.prototype.Pd = function (t, e) {
            if (null != e)
              for (var r = 0; r < e.length; r++) {
                var o = e[r];
                null != o && (Kt(this, t, 0), this.a.W(o));
              }
          }),
          (Vt.prototype.writeRepeatedSintHash64 = Vt.prototype.Pd),
          (Vt.prototype.yd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.Pa(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedFixed32 = Vt.prototype.yd),
          (Vt.prototype.zd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.Qa(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedFixed64 = Vt.prototype.zd),
          (Vt.prototype.Ad = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.nb(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedFixed64String = Vt.prototype.Ad),
          (Vt.prototype.Jd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.Ra(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedSfixed32 = Vt.prototype.Jd),
          (Vt.prototype.Kd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.Sa(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedSfixed64 = Vt.prototype.Kd),
          (Vt.prototype.Ld = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.qb(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedSfixed64String = Vt.prototype.Ld),
          (Vt.prototype.Cd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.L(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedFloat = Vt.prototype.Cd),
          (Vt.prototype.wd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.J(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedDouble = Vt.prototype.wd),
          (Vt.prototype.ud = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.I(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedBool = Vt.prototype.ud),
          (Vt.prototype.xd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.R(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedEnum = Vt.prototype.xd),
          (Vt.prototype.Td = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.U(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedString = Vt.prototype.Td),
          (Vt.prototype.vd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.ja(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedBytes = Vt.prototype.vd),
          (Vt.prototype.Id = function (t, e, r) {
            if (null != e)
              for (var o = 0; o < e.length; o++) {
                var n = qt(this, t);
                r(e[o], this), Xt(this, n);
              }
          }),
          (Vt.prototype.writeRepeatedMessage = Vt.prototype.Id),
          (Vt.prototype.Dd = function (t, e, r) {
            if (null != e)
              for (var o = 0; o < e.length; o++)
                Kt(this, t, 3), r(e[o], this), Kt(this, t, 4);
          }),
          (Vt.prototype.writeRepeatedGroup = Vt.prototype.Dd),
          (Vt.prototype.Bd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.K(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedFixedHash64 = Vt.prototype.Bd),
          (Vt.prototype.Yd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.N(t, e[r]);
          }),
          (Vt.prototype.writeRepeatedVarintHash64 = Vt.prototype.Yd),
          (Vt.prototype.ad = function (t, e) {
            if (null != e && e.length) {
              t = qt(this, t);
              for (var r = 0; r < e.length; r++) this.a.M(e[r]);
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedInt32 = Vt.prototype.ad),
          (Vt.prototype.bd = function (t, e) {
            if (null != e && e.length) {
              t = qt(this, t);
              for (var r = 0; r < e.length; r++) this.a.M(parseInt(e[r], 10));
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedInt32String = Vt.prototype.bd),
          (Vt.prototype.cd = function (t, e) {
            if (null != e && e.length) {
              t = qt(this, t);
              for (var r = 0; r < e.length; r++) this.a.ua(e[r]);
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedInt64 = Vt.prototype.cd),
          (Vt.prototype.md = function (t, e, r, o) {
            if (null != e) {
              t = qt(this, t);
              for (var n = 0; n < e.length; n++) this.a.A(r(e[n]), o(e[n]));
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedSplitFixed64 = Vt.prototype.md),
          (Vt.prototype.nd = function (t, e, r, o) {
            if (null != e) {
              t = qt(this, t);
              for (var n = 0; n < e.length; n++) this.a.l(r(e[n]), o(e[n]));
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedSplitVarint64 = Vt.prototype.nd),
          (Vt.prototype.od = function (t, e, r, o) {
            if (null != e) {
              t = qt(this, t);
              for (var n = this.a, i = 0; i < e.length; i++)
                q(r(e[i]), o(e[i]), function (t, e) {
                  n.l(t >>> 0, e >>> 0);
                });
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedSplitZigzagVarint64 = Vt.prototype.od),
          (Vt.prototype.dd = function (t, e) {
            if (null != e && e.length) {
              t = qt(this, t);
              for (var r = 0; r < e.length; r++) {
                var o = Wt(e[r]);
                this.a.l(o.lo, o.hi);
              }
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedInt64String = Vt.prototype.dd),
          (Vt.prototype.pd = function (t, e) {
            if (null != e && e.length) {
              t = qt(this, t);
              for (var r = 0; r < e.length; r++) this.a.j(e[r]);
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedUint32 = Vt.prototype.pd),
          (Vt.prototype.qd = function (t, e) {
            if (null != e && e.length) {
              t = qt(this, t);
              for (var r = 0; r < e.length; r++) this.a.j(parseInt(e[r], 10));
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedUint32String = Vt.prototype.qd),
          (Vt.prototype.rd = function (t, e) {
            if (null != e && e.length) {
              t = qt(this, t);
              for (var r = 0; r < e.length; r++) this.a.va(e[r]);
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedUint64 = Vt.prototype.rd),
          (Vt.prototype.sd = function (t, e) {
            if (null != e && e.length) {
              t = qt(this, t);
              for (var r = 0; r < e.length; r++) {
                var o = Gt(e[r]);
                this.a.l(o.lo, o.hi);
              }
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedUint64String = Vt.prototype.sd),
          (Vt.prototype.hd = function (t, e) {
            if (null != e && e.length) {
              t = qt(this, t);
              for (var r = 0; r < e.length; r++) this.a.wa(e[r]);
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedSint32 = Vt.prototype.hd),
          (Vt.prototype.jd = function (t, e) {
            if (null != e && e.length) {
              t = qt(this, t);
              for (var r = 0; r < e.length; r++) this.a.xa(e[r]);
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedSint64 = Vt.prototype.jd),
          (Vt.prototype.kd = function (t, e) {
            if (null != e && e.length) {
              t = qt(this, t);
              for (var r = 0; r < e.length; r++) this.a.W(et(e[r]));
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedSint64String = Vt.prototype.kd),
          (Vt.prototype.ld = function (t, e) {
            if (null != e && e.length) {
              t = qt(this, t);
              for (var r = 0; r < e.length; r++) this.a.W(e[r]);
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedSintHash64 = Vt.prototype.ld),
          (Vt.prototype.Wc = function (t, e) {
            if (null != e && e.length)
              for (
                Kt(this, t, 2), this.a.j(4 * e.length), t = 0;
                t < e.length;
                t++
              )
                this.a.s(e[t]);
          }),
          (Vt.prototype.writePackedFixed32 = Vt.prototype.Wc),
          (Vt.prototype.Xc = function (t, e) {
            if (null != e && e.length)
              for (
                Kt(this, t, 2), this.a.j(8 * e.length), t = 0;
                t < e.length;
                t++
              )
                this.a.V(e[t]);
          }),
          (Vt.prototype.writePackedFixed64 = Vt.prototype.Xc),
          (Vt.prototype.Yc = function (t, e) {
            if (null != e && e.length)
              for (
                Kt(this, t, 2), this.a.j(8 * e.length), t = 0;
                t < e.length;
                t++
              ) {
                var r = Gt(e[t]);
                this.a.A(r.lo, r.hi);
              }
          }),
          (Vt.prototype.writePackedFixed64String = Vt.prototype.Yc),
          (Vt.prototype.ed = function (t, e) {
            if (null != e && e.length)
              for (
                Kt(this, t, 2), this.a.j(4 * e.length), t = 0;
                t < e.length;
                t++
              )
                this.a.S(e[t]);
          }),
          (Vt.prototype.writePackedSfixed32 = Vt.prototype.ed),
          (Vt.prototype.fd = function (t, e) {
            if (null != e && e.length)
              for (
                Kt(this, t, 2), this.a.j(8 * e.length), t = 0;
                t < e.length;
                t++
              )
                this.a.T(e[t]);
          }),
          (Vt.prototype.writePackedSfixed64 = Vt.prototype.fd),
          (Vt.prototype.gd = function (t, e) {
            if (null != e && e.length)
              for (
                Kt(this, t, 2), this.a.j(8 * e.length), t = 0;
                t < e.length;
                t++
              )
                this.a.ka(e[t]);
          }),
          (Vt.prototype.writePackedSfixed64String = Vt.prototype.gd),
          (Vt.prototype.$c = function (t, e) {
            if (null != e && e.length)
              for (
                Kt(this, t, 2), this.a.j(4 * e.length), t = 0;
                t < e.length;
                t++
              )
                this.a.L(e[t]);
          }),
          (Vt.prototype.writePackedFloat = Vt.prototype.$c),
          (Vt.prototype.Uc = function (t, e) {
            if (null != e && e.length)
              for (
                Kt(this, t, 2), this.a.j(8 * e.length), t = 0;
                t < e.length;
                t++
              )
                this.a.J(e[t]);
          }),
          (Vt.prototype.writePackedDouble = Vt.prototype.Uc),
          (Vt.prototype.Tc = function (t, e) {
            if (null != e && e.length)
              for (Kt(this, t, 2), this.a.j(e.length), t = 0; t < e.length; t++)
                this.a.I(e[t]);
          }),
          (Vt.prototype.writePackedBool = Vt.prototype.Tc),
          (Vt.prototype.Vc = function (t, e) {
            if (null != e && e.length) {
              t = qt(this, t);
              for (var r = 0; r < e.length; r++) this.a.R(e[r]);
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedEnum = Vt.prototype.Vc),
          (Vt.prototype.Zc = function (t, e) {
            if (null != e && e.length)
              for (
                Kt(this, t, 2), this.a.j(8 * e.length), t = 0;
                t < e.length;
                t++
              )
                this.a.K(e[t]);
          }),
          (Vt.prototype.writePackedFixedHash64 = Vt.prototype.Zc),
          (Vt.prototype.td = function (t, e) {
            if (null != e && e.length) {
              t = qt(this, t);
              for (var r = 0; r < e.length; r++) this.a.N(e[r]);
              Xt(this, t);
            }
          }),
          (Vt.prototype.writePackedVarintHash64 = Vt.prototype.td),
          (e.debug = Dt),
          (e.Map = S),
          (e.Message = dt),
          (e.BinaryReader = ut),
          (e.BinaryWriter = Vt),
          (e.ExtensionFieldInfo = ft),
          (e.ExtensionFieldBinaryInfo = yt),
          (e.exportSymbol = function (t, e, r) {
            c(t, e, r);
          }),
          (e.inherits = function (t, e) {
            function r() {}
            (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t);
          }),
          (e.object = {
            extend: function (t, e) {
              for (var r, o, n = 1; n < arguments.length; n++) {
                for (r in (o = arguments[n])) t[r] = o[r];
                for (var i = 0; i < y.length; i++)
                  (r = y[i]),
                    Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
              }
            },
          }),
          (e.typeOf = l);
      },
      134: (t, e, r) => {
        var o = r(19),
          n = o,
          i =
            ("undefined" != typeof globalThis && globalThis) ||
            ("undefined" != typeof window && window) ||
            (void 0 !== i && i) ||
            ("undefined" != typeof self && self) ||
            function () {
              return this;
            }.call(null) ||
            Function("return this")();
        n.exportSymbol("proto.google.protobuf.Timestamp", null, i),
          (proto.google.protobuf.Timestamp = function (t) {
            o.Message.initialize(this, t, 0, -1, null, null);
          }),
          n.inherits(proto.google.protobuf.Timestamp, o.Message),
          n.DEBUG &&
            !COMPILED &&
            (proto.google.protobuf.Timestamp.displayName =
              "proto.google.protobuf.Timestamp"),
          o.Message.GENERATE_TO_OBJECT &&
            ((proto.google.protobuf.Timestamp.prototype.toObject = function (
              t
            ) {
              return proto.google.protobuf.Timestamp.toObject(t, this);
            }),
            (proto.google.protobuf.Timestamp.toObject = function (t, e) {
              var r = {
                seconds: o.Message.getFieldWithDefault(e, 1, 0),
                nanos: o.Message.getFieldWithDefault(e, 2, 0),
              };
              return t && (r.$jspbMessageInstance = e), r;
            })),
          (proto.google.protobuf.Timestamp.deserializeBinary = function (t) {
            var e = new o.BinaryReader(t),
              r = new proto.google.protobuf.Timestamp();
            return proto.google.protobuf.Timestamp.deserializeBinaryFromReader(
              r,
              e
            );
          }),
          (proto.google.protobuf.Timestamp.deserializeBinaryFromReader =
            function (t, e) {
              for (; e.nextField() && !e.isEndGroup(); )
                switch (e.getFieldNumber()) {
                  case 1:
                    var r = e.readInt64();
                    t.setSeconds(r);
                    break;
                  case 2:
                    (r = e.readInt32()), t.setNanos(r);
                    break;
                  default:
                    e.skipField();
                }
              return t;
            }),
          (proto.google.protobuf.Timestamp.prototype.serializeBinary =
            function () {
              var t = new o.BinaryWriter();
              return (
                proto.google.protobuf.Timestamp.serializeBinaryToWriter(
                  this,
                  t
                ),
                t.getResultBuffer()
              );
            }),
          (proto.google.protobuf.Timestamp.serializeBinaryToWriter = function (
            t,
            e
          ) {
            var r = void 0;
            0 !== (r = t.getSeconds()) && e.writeInt64(1, r),
              0 !== (r = t.getNanos()) && e.writeInt32(2, r);
          }),
          (proto.google.protobuf.Timestamp.prototype.getSeconds = function () {
            return o.Message.getFieldWithDefault(this, 1, 0);
          }),
          (proto.google.protobuf.Timestamp.prototype.setSeconds = function (t) {
            return o.Message.setProto3IntField(this, 1, t);
          }),
          (proto.google.protobuf.Timestamp.prototype.getNanos = function () {
            return o.Message.getFieldWithDefault(this, 2, 0);
          }),
          (proto.google.protobuf.Timestamp.prototype.setNanos = function (t) {
            return o.Message.setProto3IntField(this, 2, t);
          }),
          n.object.extend(e, proto.google.protobuf),
          (proto.google.protobuf.Timestamp.prototype.toDate = function () {
            var t = this.getSeconds(),
              e = this.getNanos();
            return new Date(1e3 * t + e / 1e6);
          }),
          (proto.google.protobuf.Timestamp.prototype.fromDate = function (t) {
            this.setSeconds(Math.floor(t.getTime() / 1e3)),
              this.setNanos(1e6 * t.getMilliseconds());
          }),
          (proto.google.protobuf.Timestamp.fromDate = function (t) {
            var e = new proto.google.protobuf.Timestamp();
            return e.fromDate(t), e;
          });
      },
      40: function (t, e, r) {
        var o;
        function n(t) {
          var e = 0;
          return function () {
            return e < t.length ? { done: !1, value: t[e++] } : { done: !0 };
          };
        }
        var i =
            "function" == typeof Object.defineProperties
              ? Object.defineProperty
              : function (t, e, r) {
                  t != Array.prototype &&
                    t != Object.prototype &&
                    (t[e] = r.value);
                },
          a = (function (t) {
            t = [
              "object" == typeof window && window,
              "object" == typeof self && self,
              "object" == typeof r.g && r.g,
              t,
            ];
            for (var e = 0; e < t.length; ++e) {
              var o = t[e];
              if (o && o.Math == Math) return o;
            }
            throw Error("Cannot find global object");
          })(this);
        function s() {
          (s = function () {}), a.Symbol || (a.Symbol = h);
        }
        function p(t, e) {
          (this.a = t),
            i(this, "description", {
              configurable: !0,
              writable: !0,
              value: e,
            });
        }
        p.prototype.toString = function () {
          return this.a;
        };
        var u,
          h =
            ((u = 0),
            function t(e) {
              if (this instanceof t)
                throw new TypeError("Symbol is not a constructor");
              return new p("jscomp_symbol_" + (e || "") + "_" + u++, e);
            });
        function c() {
          s();
          var t = a.Symbol.iterator;
          t || (t = a.Symbol.iterator = a.Symbol("Symbol.iterator")),
            "function" != typeof Array.prototype[t] &&
              i(Array.prototype, t, {
                configurable: !0,
                writable: !0,
                value: function () {
                  return (function (t) {
                    return (
                      c(),
                      ((t = { next: t })[a.Symbol.iterator] = function () {
                        return this;
                      }),
                      t
                    );
                  })(n(this));
                },
              }),
            (c = function () {});
        }
        function l(t) {
          var e =
            "undefined" != typeof Symbol &&
            Symbol.iterator &&
            t[Symbol.iterator];
          return e ? e.call(t) : { next: n(t) };
        }
        var f,
          y =
            "function" == typeof Object.create
              ? Object.create
              : function (t) {
                  function e() {}
                  return (e.prototype = t), new e();
                };
        if ("function" == typeof Object.setPrototypeOf)
          f = Object.setPrototypeOf;
        else {
          var d;
          t: {
            var g = {};
            try {
              (g.__proto__ = { V: !0 }), (d = g.V);
              break t;
            } catch (it) {}
            d = !1;
          }
          f = d
            ? function (t, e) {
                if (((t.__proto__ = e), t.__proto__ !== e))
                  throw new TypeError(t + " is not extensible");
                return t;
              }
            : null;
        }
        var v = f;
        function b(t, e) {
          if (
            ((t.prototype = y(e.prototype)), (t.prototype.constructor = t), v)
          )
            v(t, e);
          else
            for (var r in e)
              if ("prototype" != r)
                if (Object.defineProperties) {
                  var o = Object.getOwnPropertyDescriptor(e, r);
                  o && Object.defineProperty(t, r, o);
                } else t[r] = e[r];
          t.O = e.prototype;
        }
        function w(t, e) {
          if (e) {
            var r = a;
            t = t.split(".");
            for (var o = 0; o < t.length - 1; o++) {
              var n = t[o];
              n in r || (r[n] = {}), (r = r[n]);
            }
            (e = e((o = r[(t = t[t.length - 1])]))) != o &&
              null != e &&
              i(r, t, { configurable: !0, writable: !0, value: e });
          }
        }
        w("Array.prototype.keys", function (t) {
          return (
            t ||
            function () {
              return (function (t, e) {
                c(), t instanceof String && (t += "");
                var r = 0,
                  o = {
                    next: function () {
                      if (r < t.length) {
                        var n = r++;
                        return { value: e(n, t[n]), done: !1 };
                      }
                      return (
                        (o.next = function () {
                          return { done: !0, value: void 0 };
                        }),
                        o.next()
                      );
                    },
                  };
                return (
                  (o[Symbol.iterator] = function () {
                    return o;
                  }),
                  o
                );
              })(this, function (t) {
                return t;
              });
            }
          );
        }),
          w("Array.prototype.find", function (t) {
            return (
              t ||
              function (t, e) {
                t: {
                  var r = this;
                  r instanceof String && (r = String(r));
                  for (var o = r.length, n = 0; n < o; n++) {
                    var i = r[n];
                    if (t.call(e, i, n, r)) {
                      t = i;
                      break t;
                    }
                  }
                  t = void 0;
                }
                return t;
              }
            );
          }),
          w("Object.is", function (t) {
            return (
              t ||
              function (t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
              }
            );
          }),
          w("Array.prototype.includes", function (t) {
            return (
              t ||
              function (t, e) {
                var r = this;
                r instanceof String && (r = String(r));
                var o = r.length;
                for (0 > (e = e || 0) && (e = Math.max(e + o, 0)); e < o; e++) {
                  var n = r[e];
                  if (n === t || Object.is(n, t)) return !0;
                }
                return !1;
              }
            );
          }),
          w("Promise", function (t) {
            function e(t) {
              (this.b = 0), (this.c = void 0), (this.a = []);
              var e = this.f();
              try {
                t(e.resolve, e.reject);
              } catch (t) {
                e.reject(t);
              }
            }
            function r() {
              this.a = null;
            }
            function o(t) {
              return t instanceof e
                ? t
                : new e(function (e) {
                    e(t);
                  });
            }
            if (t) return t;
            r.prototype.b = function (t) {
              if (null == this.a) {
                this.a = [];
                var e = this;
                this.c(function () {
                  e.g();
                });
              }
              this.a.push(t);
            };
            var n = a.setTimeout;
            (r.prototype.c = function (t) {
              n(t, 0);
            }),
              (r.prototype.g = function () {
                for (; this.a && this.a.length; ) {
                  var t = this.a;
                  this.a = [];
                  for (var e = 0; e < t.length; ++e) {
                    var r = t[e];
                    t[e] = null;
                    try {
                      r();
                    } catch (t) {
                      this.f(t);
                    }
                  }
                }
                this.a = null;
              }),
              (r.prototype.f = function (t) {
                this.c(function () {
                  throw t;
                });
              }),
              (e.prototype.f = function () {
                function t(t) {
                  return function (o) {
                    r || ((r = !0), t.call(e, o));
                  };
                }
                var e = this,
                  r = !1;
                return { resolve: t(this.s), reject: t(this.g) };
              }),
              (e.prototype.s = function (t) {
                if (t === this)
                  this.g(new TypeError("A Promise cannot resolve to itself"));
                else if (t instanceof e) this.v(t);
                else {
                  t: switch (typeof t) {
                    case "object":
                      var r = null != t;
                      break t;
                    case "function":
                      r = !0;
                      break t;
                    default:
                      r = !1;
                  }
                  r ? this.m(t) : this.h(t);
                }
              }),
              (e.prototype.m = function (t) {
                var e = void 0;
                try {
                  e = t.then;
                } catch (t) {
                  return void this.g(t);
                }
                "function" == typeof e ? this.w(e, t) : this.h(t);
              }),
              (e.prototype.g = function (t) {
                this.i(2, t);
              }),
              (e.prototype.h = function (t) {
                this.i(1, t);
              }),
              (e.prototype.i = function (t, e) {
                if (0 != this.b)
                  throw Error(
                    "Cannot settle(" +
                      t +
                      ", " +
                      e +
                      "): Promise already settled in state" +
                      this.b
                  );
                (this.b = t), (this.c = e), this.l();
              }),
              (e.prototype.l = function () {
                if (null != this.a) {
                  for (var t = 0; t < this.a.length; ++t) i.b(this.a[t]);
                  this.a = null;
                }
              });
            var i = new r();
            return (
              (e.prototype.v = function (t) {
                var e = this.f();
                t.F(e.resolve, e.reject);
              }),
              (e.prototype.w = function (t, e) {
                var r = this.f();
                try {
                  t.call(e, r.resolve, r.reject);
                } catch (t) {
                  r.reject(t);
                }
              }),
              (e.prototype.then = function (t, r) {
                function o(t, e) {
                  return "function" == typeof t
                    ? function (e) {
                        try {
                          n(t(e));
                        } catch (t) {
                          i(t);
                        }
                      }
                    : e;
                }
                var n,
                  i,
                  a = new e(function (t, e) {
                    (n = t), (i = e);
                  });
                return this.F(o(t, n), o(r, i)), a;
              }),
              (e.prototype.catch = function (t) {
                return this.then(void 0, t);
              }),
              (e.prototype.F = function (t, e) {
                function r() {
                  switch (o.b) {
                    case 1:
                      t(o.c);
                      break;
                    case 2:
                      e(o.c);
                      break;
                    default:
                      throw Error("Unexpected state: " + o.b);
                  }
                }
                var o = this;
                null == this.a ? i.b(r) : this.a.push(r);
              }),
              (e.resolve = o),
              (e.reject = function (t) {
                return new e(function (e, r) {
                  r(t);
                });
              }),
              (e.race = function (t) {
                return new e(function (e, r) {
                  for (var n = l(t), i = n.next(); !i.done; i = n.next())
                    o(i.value).F(e, r);
                });
              }),
              (e.all = function (t) {
                var r = l(t),
                  n = r.next();
                return n.done
                  ? o([])
                  : new e(function (t, e) {
                      function i(e) {
                        return function (r) {
                          (a[e] = r), 0 == --s && t(a);
                        };
                      }
                      var a = [],
                        s = 0;
                      do {
                        a.push(void 0),
                          s++,
                          o(n.value).F(i(a.length - 1), e),
                          (n = r.next());
                      } while (!n.done);
                    });
              }),
              e
            );
          });
        var m = m || {},
          x = this || self;
        function O(t, e) {
          (t = t.split(".")), (e = e || x);
          for (var r = 0; r < t.length; r++)
            if (null == (e = e[t[r]])) return null;
          return e;
        }
        function S() {}
        function E(t) {
          var e = typeof t;
          return ("object" == e && null != t) || "function" == e;
        }
        var R = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
          j = 0;
        function F(t, e, r) {
          return t.call.apply(t.bind, arguments);
        }
        function M(t, e, r) {
          if (!t) throw Error();
          if (2 < arguments.length) {
            var o = Array.prototype.slice.call(arguments, 2);
            return function () {
              var r = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(r, o), t.apply(e, r);
            };
          }
          return function () {
            return t.apply(e, arguments);
          };
        }
        function T(t, e, r) {
          return (T =
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf("native code")
              ? F
              : M).apply(null, arguments);
        }
        function A(t, e) {
          function r() {}
          (r.prototype = e.prototype),
            (t.O = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function C(t) {
          this.a = t || {};
        }
        function k(t, e, r, o) {
          (this.f = t), (this.c = e), (this.b = r), (this.a = o);
        }
        function I(t, e, r, o) {
          (r = void 0 === r ? {} : r),
            (this.c = t),
            (this.a = r),
            (this.b = e),
            (this.f = void 0 === o ? null : o);
        }
        function B(t, e, r, o, n, i) {
          (this.name = t), (this.a = n), (this.b = i);
        }
        function P(t, e, r) {
          r = void 0 === r ? {} : r;
          var o = void 0 === o ? new C() : o;
          return new k(e, t, r, o);
        }
        function N(t, e, r) {
          (r = void 0 === r ? {} : r),
            (e = Error.call(this, e)),
            (this.message = e.message),
            "stack" in e && (this.stack = e.stack),
            (this.code = t),
            (this.metadata = r);
        }
        function D(t) {
          this.a = t;
        }
        function U(t) {
          if (Error.captureStackTrace) Error.captureStackTrace(this, U);
          else {
            var e = Error().stack;
            e && (this.stack = e);
          }
          t && (this.message = String(t));
        }
        function L(t, e) {
          for (
            var r = "", o = (t = t.split("%s")).length - 1, n = 0;
            n < o;
            n++
          )
            r += t[n] + (n < e.length ? e[n] : "%s");
          U.call(this, r + t[o]);
        }
        function _() {
          (this.l = null),
            (this.i = []),
            (this.m = 0),
            (this.b = G),
            (this.f = this.a = this.h = 0),
            (this.c = null),
            (this.g = 0);
        }
        (C.prototype.get = function (t) {
          return this.a[t];
        }),
          (C.prototype.G = function () {
            return Object.keys(this.a);
          }),
          (k.prototype.getRequestMessage = function () {
            return this.f;
          }),
          (k.prototype.getMethodDescriptor = function () {
            return this.c;
          }),
          (k.prototype.getMetadata = function () {
            return this.b;
          }),
          (k.prototype.getCallOptions = function () {
            return this.a;
          }),
          (I.prototype.getResponseMessage = function () {
            return this.c;
          }),
          (I.prototype.getMetadata = function () {
            return this.a;
          }),
          (I.prototype.getMethodDescriptor = function () {
            return this.b;
          }),
          (I.prototype.getStatus = function () {
            return this.f;
          }),
          (B.prototype.getName = function () {
            return this.name;
          }),
          (B.prototype.getName = B.prototype.getName),
          b(N, Error),
          (N.prototype.toString = function () {
            var t =
              "RpcError(" +
              ((function (t) {
                switch (t) {
                  case 0:
                    return "OK";
                  case 1:
                    return "CANCELLED";
                  case 2:
                    return "UNKNOWN";
                  case 3:
                    return "INVALID_ARGUMENT";
                  case 4:
                    return "DEADLINE_EXCEEDED";
                  case 5:
                    return "NOT_FOUND";
                  case 6:
                    return "ALREADY_EXISTS";
                  case 7:
                    return "PERMISSION_DENIED";
                  case 16:
                    return "UNAUTHENTICATED";
                  case 8:
                    return "RESOURCE_EXHAUSTED";
                  case 9:
                    return "FAILED_PRECONDITION";
                  case 10:
                    return "ABORTED";
                  case 11:
                    return "OUT_OF_RANGE";
                  case 12:
                    return "UNIMPLEMENTED";
                  case 13:
                    return "INTERNAL";
                  case 14:
                    return "UNAVAILABLE";
                  case 15:
                    return "DATA_LOSS";
                  default:
                    return "";
                }
              })(this.code) || String(this.code)) +
              ")";
            return this.message && (t += ": " + this.message), t;
          }),
          (N.prototype.name = "RpcError"),
          (D.prototype.on = function (t, e) {
            return "data" == t || "error" == t ? this : this.a.on(t, e);
          }),
          (D.prototype.removeListener = function (t, e) {
            return this.a.removeListener(t, e);
          }),
          (D.prototype.cancel = function () {
            this.a.cancel();
          }),
          A(U, Error),
          (U.prototype.name = "CustomError"),
          A(L, U),
          (L.prototype.name = "AssertionError");
        var G = 0,
          z = 1,
          W = 2,
          V = 3,
          H = 0,
          q = 128;
        function X(t, e, r, o) {
          throw (
            ((t.b = V),
            (t.l =
              "The stream is broken @" +
              t.m +
              "/" +
              r +
              ". Error: " +
              o +
              ". With input:\n" +
              e),
            Error(t.l))
          );
        }
        var K,
          Y = Array.prototype.indexOf
            ? function (t, e) {
                return Array.prototype.indexOf.call(t, e, void 0);
              }
            : function (t, e) {
                if ("string" == typeof t)
                  return "string" != typeof e || 1 != e.length
                    ? -1
                    : t.indexOf(e, 0);
                for (var r = 0; r < t.length; r++)
                  if (r in t && t[r] === e) return r;
                return -1;
              },
          Z = String.prototype.trim
            ? function (t) {
                return t.trim();
              }
            : function (t) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
              };
        function J(t, e) {
          return -1 != t.indexOf(e);
        }
        function $(t, e) {
          return t < e ? -1 : t > e ? 1 : 0;
        }
        t: {
          var Q = x.navigator;
          if (Q) {
            var tt = Q.userAgent;
            if (tt) {
              K = tt;
              break t;
            }
          }
          K = "";
        }
        var et =
          "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
            " "
          );
        function rt(t) {
          var e = 1;
          t = t.split(":");
          for (var r = []; 0 < e && t.length; ) r.push(t.shift()), e--;
          return t.length && r.push(t.join(":")), r;
        }
        function ot(t) {
          return ot[" "](t), t;
        }
        ot[" "] = S;
        var nt,
          it,
          at = J(K, "Opera"),
          st = J(K, "Trident") || J(K, "MSIE"),
          pt = J(K, "Edge"),
          ut =
            J(K, "Gecko") &&
            !(J(K.toLowerCase(), "webkit") && !J(K, "Edge")) &&
            !(J(K, "Trident") || J(K, "MSIE")) &&
            !J(K, "Edge"),
          ht = J(K.toLowerCase(), "webkit") && !J(K, "Edge");
        t: {
          var ct = "",
            lt =
              ((it = K),
              ut
                ? /rv:([^\);]+)(\)|;)/.exec(it)
                : pt
                ? /Edge\/([\d\.]+)/.exec(it)
                : st
                ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(it)
                : ht
                ? /WebKit\/(\S+)/.exec(it)
                : at
                ? /(?:Version)[ \/]?(\S+)/.exec(it)
                : void 0);
          if ((lt && (ct = lt ? lt[1] : ""), st)) {
            var ft,
              yt = x.document;
            if (
              null != (ft = yt ? yt.documentMode : void 0) &&
              ft > parseFloat(ct)
            ) {
              nt = String(ft);
              break t;
            }
          }
          nt = ct;
        }
        var dt = {};
        function gt() {
          return (function () {
            var t = dt;
            return Object.prototype.hasOwnProperty.call(t, 9)
              ? t[9]
              : (t[9] = (function () {
                  for (
                    var t = 0,
                      e = Z(String(nt)).split("."),
                      r = Z("9").split("."),
                      o = Math.max(e.length, r.length),
                      n = 0;
                    0 == t && n < o;
                    n++
                  ) {
                    var i = e[n] || "",
                      a = r[n] || "";
                    do {
                      if (
                        ((i = /(\d*)(\D*)(.*)/.exec(i) || ["", "", "", ""]),
                        (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""]),
                        0 == i[0].length && 0 == a[0].length)
                      )
                        break;
                      (t =
                        $(
                          0 == i[1].length ? 0 : parseInt(i[1], 10),
                          0 == a[1].length ? 0 : parseInt(a[1], 10)
                        ) ||
                        $(0 == i[2].length, 0 == a[2].length) ||
                        $(i[2], a[2])),
                        (i = i[3]),
                        (a = a[3]);
                    } while (0 == t);
                  }
                  return 0 <= t;
                })());
          })();
        }
        function vt() {
          0 != bt &&
            ((Object.prototype.hasOwnProperty.call(this, R) && this[R]) ||
              (this[R] = ++j)),
            (this.K = this.K);
        }
        var bt = 0;
        vt.prototype.K = !1;
        var wt =
          Object.freeze ||
          function (t) {
            return t;
          };
        function mt(t, e) {
          (this.type = t),
            (this.a = this.target = e),
            (this.defaultPrevented = !1);
        }
        mt.prototype.b = function () {
          this.defaultPrevented = !0;
        };
        var xt = (function () {
          if (!x.addEventListener || !Object.defineProperty) return !1;
          var t = !1,
            e = Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              },
            });
          try {
            x.addEventListener("test", S, e),
              x.removeEventListener("test", S, e);
          } catch (t) {}
          return t;
        })();
        function Ot(t, e) {
          if (
            (mt.call(this, t ? t.type : ""),
            (this.relatedTarget = this.a = this.target = null),
            (this.button =
              this.screenY =
              this.screenX =
              this.clientY =
              this.clientX =
                0),
            (this.key = ""),
            (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
            (this.pointerId = 0),
            (this.pointerType = ""),
            (this.c = null),
            t)
          ) {
            var r = (this.type = t.type),
              o =
                t.changedTouches && t.changedTouches.length
                  ? t.changedTouches[0]
                  : null;
            if (
              ((this.target = t.target || t.srcElement),
              (this.a = e),
              (e = t.relatedTarget))
            ) {
              if (ut) {
                t: {
                  try {
                    ot(e.nodeName);
                    var n = !0;
                    break t;
                  } catch (t) {}
                  n = !1;
                }
                n || (e = null);
              }
            } else
              "mouseover" == r
                ? (e = t.fromElement)
                : "mouseout" == r && (e = t.toElement);
            (this.relatedTarget = e),
              o
                ? ((this.clientX = void 0 !== o.clientX ? o.clientX : o.pageX),
                  (this.clientY = void 0 !== o.clientY ? o.clientY : o.pageY),
                  (this.screenX = o.screenX || 0),
                  (this.screenY = o.screenY || 0))
                : ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
                  (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
                  (this.screenX = t.screenX || 0),
                  (this.screenY = t.screenY || 0)),
              (this.button = t.button),
              (this.key = t.key || ""),
              (this.ctrlKey = t.ctrlKey),
              (this.altKey = t.altKey),
              (this.shiftKey = t.shiftKey),
              (this.metaKey = t.metaKey),
              (this.pointerId = t.pointerId || 0),
              (this.pointerType =
                "string" == typeof t.pointerType
                  ? t.pointerType
                  : St[t.pointerType] || ""),
              (this.c = t),
              t.defaultPrevented && Ot.O.b.call(this);
          }
        }
        A(Ot, mt);
        var St = wt({ 2: "touch", 3: "pen", 4: "mouse" });
        Ot.prototype.b = function () {
          Ot.O.b.call(this);
          var t = this.c;
          t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
        };
        var Et = "closure_listenable_" + ((1e6 * Math.random()) | 0),
          Rt = 0;
        function jt(t, e, r, o, n) {
          (this.listener = t),
            (this.proxy = null),
            (this.src = e),
            (this.type = r),
            (this.capture = !!o),
            (this.H = n),
            (this.key = ++Rt),
            (this.A = this.D = !1);
        }
        function Ft(t) {
          (t.A = !0),
            (t.listener = null),
            (t.proxy = null),
            (t.src = null),
            (t.H = null);
        }
        function Mt(t) {
          (this.src = t), (this.a = {}), (this.b = 0);
        }
        function Tt(t, e) {
          var r = e.type;
          if (r in t.a) {
            var o,
              n = t.a[r],
              i = Y(n, e);
            (o = 0 <= i) && Array.prototype.splice.call(n, i, 1),
              o && (Ft(e), 0 == t.a[r].length && (delete t.a[r], t.b--));
          }
        }
        function At(t, e, r, o) {
          for (var n = 0; n < t.length; ++n) {
            var i = t[n];
            if (!i.A && i.listener == e && i.capture == !!r && i.H == o)
              return n;
          }
          return -1;
        }
        (Mt.prototype.add = function (t, e, r, o, n) {
          var i = t.toString();
          (t = this.a[i]) || ((t = this.a[i] = []), this.b++);
          var a = At(t, e, o, n);
          return (
            -1 < a
              ? ((e = t[a]), r || (e.D = !1))
              : (((e = new jt(e, this.src, i, !!o, n)).D = r), t.push(e)),
            e
          );
        }),
          (Mt.prototype.remove = function (t, e, r, o) {
            if (!((t = t.toString()) in this.a)) return !1;
            var n = this.a[t];
            return (
              -1 < (e = At(n, e, r, o)) &&
              (Ft(n[e]),
              Array.prototype.splice.call(n, e, 1),
              0 == n.length && (delete this.a[t], this.b--),
              !0)
            );
          });
        var Ct = "closure_lm_" + ((1e6 * Math.random()) | 0),
          kt = {};
        function It(t, e, r, o, n) {
          if (o && o.once) Pt(t, e, r, o, n);
          else if (Array.isArray(e))
            for (var i = 0; i < e.length; i++) It(t, e[i], r, o, n);
          else
            (r = zt(r)),
              t && t[Et]
                ? t.f.add(String(e), r, !1, E(o) ? !!o.capture : !!o, n)
                : Bt(t, e, r, !1, o, n);
        }
        function Bt(t, e, r, o, n, i) {
          if (!e) throw Error("Invalid event type");
          var a = E(n) ? !!n.capture : !!n,
            s = _t(t);
          if ((s || (t[Ct] = s = new Mt(t)), !(r = s.add(e, r, o, a, i)).proxy))
            if (
              ((o = (function () {
                var t = Lt;
                return function e(r) {
                  return t.call(e.src, e.listener, r);
                };
              })()),
              (r.proxy = o),
              (o.src = t),
              (o.listener = r),
              t.addEventListener)
            )
              xt || (n = a),
                void 0 === n && (n = !1),
                t.addEventListener(e.toString(), o, n);
            else if (t.attachEvent) t.attachEvent(Ut(e.toString()), o);
            else {
              if (!t.addListener || !t.removeListener)
                throw Error(
                  "addEventListener and attachEvent are unavailable."
                );
              t.addListener(o);
            }
        }
        function Pt(t, e, r, o, n) {
          if (Array.isArray(e))
            for (var i = 0; i < e.length; i++) Pt(t, e[i], r, o, n);
          else
            (r = zt(r)),
              t && t[Et]
                ? t.f.add(String(e), r, !0, E(o) ? !!o.capture : !!o, n)
                : Bt(t, e, r, !0, o, n);
        }
        function Nt(t, e, r, o, n) {
          if (Array.isArray(e))
            for (var i = 0; i < e.length; i++) Nt(t, e[i], r, o, n);
          else
            (o = E(o) ? !!o.capture : !!o),
              (r = zt(r)),
              t && t[Et]
                ? t.f.remove(String(e), r, o, n)
                : t &&
                  (t = _t(t)) &&
                  ((e = t.a[e.toString()]),
                  (t = -1),
                  e && (t = At(e, r, o, n)),
                  (r = -1 < t ? e[t] : null) && Dt(r));
        }
        function Dt(t) {
          if ("number" != typeof t && t && !t.A) {
            var e = t.src;
            if (e && e[Et]) Tt(e.f, t);
            else {
              var r = t.type,
                o = t.proxy;
              e.removeEventListener
                ? e.removeEventListener(r, o, t.capture)
                : e.detachEvent
                ? e.detachEvent(Ut(r), o)
                : e.addListener && e.removeListener && e.removeListener(o),
                (r = _t(e))
                  ? (Tt(r, t), 0 == r.b && ((r.src = null), (e[Ct] = null)))
                  : Ft(t);
            }
          }
        }
        function Ut(t) {
          return t in kt ? kt[t] : (kt[t] = "on" + t);
        }
        function Lt(t, e) {
          if (t.A) t = !0;
          else {
            e = new Ot(e, this);
            var r = t.listener,
              o = t.H || t.src;
            t.D && Dt(t), (t = r.call(o, e));
          }
          return t;
        }
        function _t(t) {
          return (t = t[Ct]) instanceof Mt ? t : null;
        }
        var Gt = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
        function zt(t) {
          return "function" == typeof t
            ? t
            : (t[Gt] ||
                (t[Gt] = function (e) {
                  return t.handleEvent(e);
                }),
              t[Gt]);
        }
        function Wt() {
          vt.call(this), (this.f = new Mt(this)), (this.U = this);
        }
        function Vt(t, e) {
          t = t.U;
          var r = e.type || e;
          if ("string" == typeof e) e = new mt(e, t);
          else if (e instanceof mt) e.target = e.target || t;
          else {
            var o = e;
            !(function (t, e) {
              for (var r, o, n = 1; n < arguments.length; n++) {
                for (r in (o = arguments[n])) t[r] = o[r];
                for (var i = 0; i < et.length; i++)
                  (r = et[i]),
                    Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
              }
            })((e = new mt(r, t)), o);
          }
          Ht((t = e.a = t), r, !0, e), Ht(t, r, !1, e);
        }
        function Ht(t, e, r, o) {
          if ((e = t.f.a[String(e)])) {
            e = e.concat();
            for (var n = !0, i = 0; i < e.length; ++i) {
              var a = e[i];
              if (a && !a.A && a.capture == r) {
                var s = a.listener,
                  p = a.H || a.src;
                a.D && Tt(t.f, a), (n = !1 !== s.call(p, o) && n);
              }
            }
          }
        }
        A(Wt, vt),
          (Wt.prototype[Et] = !0),
          (Wt.prototype.addEventListener = function (t, e, r, o) {
            It(this, t, e, r, o);
          }),
          (Wt.prototype.removeEventListener = function (t, e, r, o) {
            Nt(this, t, e, r, o);
          });
        var qt = x;
        function Xt(t, e, r) {
          if ("function" == typeof t) r && (t = T(t, r));
          else {
            if (!t || "function" != typeof t.handleEvent)
              throw Error("Invalid listener argument");
            t = T(t.handleEvent, t);
          }
          return 2147483647 < Number(e) ? -1 : qt.setTimeout(t, e || 0);
        }
        function Kt(t, e) {
          (this.name = t), (this.value = e);
        }
        Kt.prototype.toString = function () {
          return this.name;
        };
        var Yt,
          Zt,
          Jt,
          $t = new Kt("OFF", 1 / 0),
          Qt = new Kt("SEVERE", 1e3),
          te = new Kt("CONFIG", 700),
          ee = new Kt("FINE", 500);
        function re() {
          this.clear();
        }
        function oe(t, e, r) {
          this.reset(t || $t, e, r, void 0, void 0);
        }
        function ne(t, e) {
          (this.a = null),
            (this.f = []),
            (this.b = (void 0 === e ? null : e) || null),
            (this.c = []),
            (this.g = {
              getName: function () {
                return t;
              },
            });
        }
        function ie(t) {
          return t.a
            ? t.a
            : t.b
            ? ie(t.b)
            : ((function (t, e) {
                throw new L(
                  "Failure" + (t ? ": " + t : ""),
                  Array.prototype.slice.call(arguments, 1)
                );
              })("Root logger has no level set."),
              $t);
        }
        function ae() {
          this.entries = {};
          var t = new ne("");
          (t.a = te), (this.entries[""] = t);
        }
        function se(t, e, r) {
          var o = t.entries[e];
          if (o) return void 0 !== r && (o.a = r), o;
          o = se(t, e.substr(0, e.lastIndexOf(".")));
          var n = new ne(e, o);
          return (t.entries[e] = n), o.c.push(n), void 0 !== r && (n.a = r), n;
        }
        function pe() {
          return Zt || (Zt = new ae()), Zt;
        }
        function ue(t, e, r) {
          var o;
          (o = t) &&
            (o = t && e) &&
            (o = (o = e.value) >= (t ? ie(se(pe(), t.getName())) : $t).value),
            o &&
              ((e = e || $t),
              (o = se(pe(), t.getName())),
              "function" == typeof r && (r = r()),
              Yt || (Yt = new re()),
              (function (t, e) {
                for (; t; )
                  t.f.forEach(function (t) {
                    t(e);
                  }),
                    (t = t.b);
              })(o, (t = new oe(e, r, (t = t.getName())))));
        }
        function he(t, e) {
          t && ue(t, ee, e);
        }
        function ce() {}
        function le(t) {
          var e;
          return (
            (e = t.a) ||
              ((e = {}), de(t) && ((e[0] = !0), (e[1] = !0)), (e = t.a = e)),
            e
          );
        }
        function fe() {}
        function ye(t) {
          return (t = de(t)) ? new ActiveXObject(t) : new XMLHttpRequest();
        }
        function de(t) {
          if (
            !t.b &&
            "undefined" == typeof XMLHttpRequest &&
            "undefined" != typeof ActiveXObject
          ) {
            for (
              var e = [
                  "MSXML2.XMLHTTP.6.0",
                  "MSXML2.XMLHTTP.3.0",
                  "MSXML2.XMLHTTP",
                  "Microsoft.XMLHTTP",
                ],
                r = 0;
              r < e.length;
              r++
            ) {
              var o = e[r];
              try {
                return new ActiveXObject(o), (t.b = o);
              } catch (t) {}
            }
            throw Error(
              "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
            );
          }
          return t.b;
        }
        function ge(t, e) {
          (this.b = t[x.Symbol.iterator]()), (this.c = e), (this.f = 0);
        }
        (re.prototype.clear = function () {}),
          (oe.prototype.reset = function () {}),
          (ce.prototype.a = null),
          A(fe, ce),
          (Jt = new fe()),
          s(),
          c(),
          (ge.prototype[Symbol.iterator] = function () {
            return this;
          }),
          (ge.prototype.next = function () {
            var t = this.b.next();
            return {
              value: t.done ? void 0 : this.c.call(void 0, t.value, this.f++),
              done: t.done,
            };
          }),
          s(),
          c(),
          s(),
          c();
        var ve =
          "StopIteration" in x
            ? x.StopIteration
            : { message: "StopIteration", stack: "" };
        function be() {}
        function we(t) {
          if (t instanceof xe || t instanceof Oe || t instanceof Se) return t;
          if ("function" == typeof t.next)
            return new xe(function () {
              return me(t);
            });
          if ((s(), c(), "function" == typeof t[Symbol.iterator]))
            return (
              s(),
              c(),
              new xe(function () {
                return t[Symbol.iterator]();
              })
            );
          if ("function" == typeof t.u)
            return new xe(function () {
              return me(t.u());
            });
          throw Error("Not an iterator or iterable.");
        }
        function me(t) {
          if (!(t instanceof be)) return t;
          var e = !1;
          return {
            next: function () {
              for (var r; !e; )
                try {
                  r = t.a();
                  break;
                } catch (t) {
                  if (t !== ve) throw t;
                  e = !0;
                }
              return { value: r, done: e };
            },
          };
        }
        function xe(t) {
          this.b = t;
        }
        function Oe(t) {
          this.b = t;
        }
        function Se(t) {
          xe.call(this, function () {
            return t;
          }),
            (this.f = t);
        }
        function Ee(t, e) {
          (this.o = {}), (this.j = []), (this.B = this.size = 0);
          var r = arguments.length;
          if (1 < r) {
            if (r % 2) throw Error("Uneven number of arguments");
            for (var o = 0; o < r; o += 2)
              this.set(arguments[o], arguments[o + 1]);
          } else t && this.addAll(t);
        }
        function Re(t) {
          if (t.size != t.j.length) {
            for (var e = 0, r = 0; e < t.j.length; ) {
              var o = t.j[e];
              je(t.o, o) && (t.j[r++] = o), e++;
            }
            t.j.length = r;
          }
          if (t.size != t.j.length) {
            var n = {};
            for (r = e = 0; e < t.j.length; )
              je(n, (o = t.j[e])) || ((t.j[r++] = o), (n[o] = 1)), e++;
            t.j.length = r;
          }
        }
        function je(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        (be.prototype.next = function () {
          return be.prototype.a.call(this);
        }),
          (be.prototype.a = function () {
            throw ve;
          }),
          (be.prototype.u = function () {
            return this;
          }),
          s(),
          c(),
          (xe.prototype.u = function () {
            return new Oe(this.b());
          }),
          (xe.prototype[Symbol.iterator] = function () {
            return new Se(this.b());
          }),
          (xe.prototype.c = function () {
            return new Se(this.b());
          }),
          s(),
          c(),
          b(Oe, be),
          (Oe.prototype.a = function () {
            var t = this.b.next();
            if (t.done) throw ve;
            return t.value;
          }),
          (Oe.prototype.next = function () {
            return Oe.prototype.a.call(this);
          }),
          (Oe.prototype[Symbol.iterator] = function () {
            return new Se(this.b);
          }),
          (Oe.prototype.c = function () {
            return new Se(this.b);
          }),
          b(Se, xe),
          (Se.prototype.next = function () {
            return this.f.next();
          }),
          ((o = Ee.prototype).G = function () {
            return Re(this), this.j.concat();
          }),
          (o.has = function (t) {
            return je(this.o, t);
          }),
          (o.clear = function () {
            (this.o = {}), (this.B = this.size = this.j.length = 0);
          }),
          (o.remove = function (t) {
            return this.delete(t);
          }),
          (o.delete = function (t) {
            return (
              !!je(this.o, t) &&
              (delete this.o[t],
              --this.size,
              this.B++,
              this.j.length > 2 * this.size && Re(this),
              !0)
            );
          }),
          (o.get = function (t, e) {
            return je(this.o, t) ? this.o[t] : e;
          }),
          (o.set = function (t, e) {
            je(this.o, t) || ((this.size += 1), this.j.push(t), this.B++),
              (this.o[t] = e);
          }),
          (o.addAll = function (t) {
            if (t instanceof Ee)
              for (var e = t.G(), r = 0; r < e.length; r++)
                this.set(e[r], t.get(e[r]));
            else for (e in t) this.set(e, t[e]);
          }),
          (o.forEach = function (t, e) {
            for (var r = this.G(), o = 0; o < r.length; o++) {
              var n = r[o],
                i = this.get(n);
              t.call(e, i, n, this);
            }
          }),
          (o.clone = function () {
            return new Ee(this);
          }),
          (o.keys = function () {
            return we(this.u(!0)).c();
          }),
          (o.values = function () {
            return we(this.u(!1)).c();
          }),
          (o.entries = function () {
            var t = this;
            return (function (t, e) {
              return new ge(t, e);
            })(this.keys(), function (e) {
              return [e, t.get(e)];
            });
          }),
          (o.u = function (t) {
            Re(this);
            var e = 0,
              r = this.B,
              o = this,
              n = new be();
            return (
              (n.a = function () {
                if (r != o.B)
                  throw Error(
                    "The map has changed since the iterator was created"
                  );
                if (e >= o.j.length) throw ve;
                var n = o.j[e++];
                return t ? n : o.o[n];
              }),
              (n.next = n.a.bind(n)),
              n
            );
          });
        var Fe =
          /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
        function Me(t) {
          Wt.call(this),
            (this.headers = new Ee()),
            (this.C = t || null),
            (this.c = !1),
            (this.J = this.a = null),
            (this.P = this.v = ""),
            (this.g = 0),
            (this.l = ""),
            (this.i = this.N = this.s = this.L = !1),
            (this.h = 0),
            (this.w = null),
            (this.m = Te),
            (this.I = this.M = !1);
        }
        A(Me, Wt);
        var Te = "";
        Me.prototype.b = se(pe(), "goog.net.XhrIo", void 0).g;
        var Ae = /^https?$/i,
          Ce = ["POST", "PUT"];
        function ke(t, e) {
          (t.c = !1),
            t.a && ((t.i = !0), t.a.abort(), (t.i = !1)),
            (t.l = e),
            (t.g = 5),
            Ie(t),
            Pe(t);
        }
        function Ie(t) {
          t.L || ((t.L = !0), Vt(t, "complete"), Vt(t, "error"));
        }
        function Be(t) {
          if (t.c && void 0 !== m)
            if (t.J[1] && 4 == De(t) && 2 == t.getStatus())
              he(t.b, Ue(t, "Local request error detected and ignored"));
            else if (t.s && 4 == De(t)) Xt(t.R, 0, t);
            else if ((Vt(t, "readystatechange"), 4 == De(t))) {
              he(t.b, Ue(t, "Request complete")), (t.c = !1);
              try {
                var e,
                  r = t.getStatus();
                t: switch (r) {
                  case 200:
                  case 201:
                  case 202:
                  case 204:
                  case 206:
                  case 304:
                  case 1223:
                    var o = !0;
                    break t;
                  default:
                    o = !1;
                }
                if (!(e = o)) {
                  var n;
                  if ((n = 0 === r)) {
                    var i = String(t.v).match(Fe)[1] || null;
                    if (!i && x.self && x.self.location) {
                      var a = x.self.location.protocol;
                      i = a.substr(0, a.length - 1);
                    }
                    n = !Ae.test(i ? i.toLowerCase() : "");
                  }
                  e = n;
                }
                if (e) Vt(t, "complete"), Vt(t, "success");
                else {
                  t.g = 6;
                  try {
                    var s = 2 < De(t) ? t.a.statusText : "";
                  } catch (e) {
                    he(t.b, "Can not get status: " + e.message), (s = "");
                  }
                  (t.l = s + " [" + t.getStatus() + "]"), Ie(t);
                }
              } finally {
                Pe(t);
              }
            }
        }
        function Pe(t) {
          if (t.a) {
            Ne(t);
            var e = t.a,
              r = t.J[0] ? S : null;
            (t.a = null), (t.J = null), Vt(t, "ready");
            try {
              e.onreadystatechange = r;
            } catch (e) {
              (t = t.b) &&
                ue(
                  t,
                  Qt,
                  "Problem encountered resetting onreadystatechange: " +
                    e.message
                );
            }
          }
        }
        function Ne(t) {
          t.a && t.I && (t.a.ontimeout = null),
            t.w && (qt.clearTimeout(t.w), (t.w = null));
        }
        function De(t) {
          return t.a ? t.a.readyState : 0;
        }
        function Ue(t, e) {
          return e + " [" + t.P + " " + t.v + " " + t.getStatus() + "]";
        }
        ((o = Me.prototype).T = function () {
          void 0 !== m &&
            this.a &&
            ((this.l = "Timed out after " + this.h + "ms, aborting"),
            (this.g = 8),
            he(this.b, Ue(this, this.l)),
            Vt(this, "timeout"),
            this.abort(8));
        }),
          (o.abort = function (t) {
            this.a &&
              this.c &&
              (he(this.b, Ue(this, "Aborting")),
              (this.c = !1),
              (this.i = !0),
              this.a.abort(),
              (this.i = !1),
              (this.g = t || 7),
              Vt(this, "complete"),
              Vt(this, "abort"),
              Pe(this));
          }),
          (o.R = function () {
            this.K || (this.N || this.s || this.i ? Be(this) : this.W());
          }),
          (o.W = function () {
            Be(this);
          }),
          (o.getStatus = function () {
            try {
              return 2 < De(this) ? this.a.status : -1;
            } catch (t) {
              return -1;
            }
          });
        var Le = {},
          _e = null;
        function Ge() {
          if (!_e) {
            _e = {};
            for (
              var t =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                    ""
                  ),
                e = ["+/=", "+/", "-_=", "-_.", "-_"],
                r = 0;
              5 > r;
              r++
            ) {
              var o = t.concat(e[r].split(""));
              Le[r] = o;
              for (var n = 0; n < o.length; n++) {
                var i = o[n];
                void 0 === _e[i] && (_e[i] = n);
              }
            }
          }
        }
        var ze = ["content-type", "grpc-status", "grpc-message"];
        function We(t) {
          (this.a = t.Z),
            (this.m = null),
            (this.b = []),
            (this.h = []),
            (this.g = []),
            (this.f = []),
            (this.c = []),
            (this.l = !1),
            (this.i = 0),
            (this.s = new _());
          var e = this;
          It(this.a, "readystatechange", function () {
            var t = e.a;
            if ((t = t.a ? t.a.getResponseHeader("Content-Type") : null)) {
              if (
                0 ==
                (t = t.toLowerCase()).lastIndexOf(
                  "application/grpc-web-text",
                  0
                )
              ) {
                t = e.a;
                try {
                  var r = t.a ? t.a.responseText : "";
                } catch (e) {
                  he(t.b, "Can not get responseText: " + e.message), (r = "");
                }
                if (
                  ((r = (t = r || "").length - (t.length % 4)),
                  0 == (t = t.substr(e.i, r - e.i)).length)
                )
                  return;
                (e.i = r),
                  (t = (function (t) {
                    var e = t.length,
                      r = (3 * e) / 4;
                    r % 3
                      ? (r = Math.floor(r))
                      : J("=.", t[e - 1]) &&
                        (r = J("=.", t[e - 2]) ? r - 2 : r - 1);
                    var o = new Uint8Array(r),
                      n = 0;
                    return (
                      (function (t, e) {
                        function r(e) {
                          for (; o < t.length; ) {
                            var r = t.charAt(o++),
                              n = _e[r];
                            if (null != n) return n;
                            if (!/^[\s\xa0]*$/.test(r))
                              throw Error(
                                "Unknown base64 encoding at char: " + r
                              );
                          }
                          return e;
                        }
                        Ge();
                        for (var o = 0; ; ) {
                          var n = r(-1),
                            i = r(0),
                            a = r(64),
                            s = r(64);
                          if (64 === s && -1 === n) break;
                          e((n << 2) | (i >> 4)),
                            64 != a &&
                              (e(((i << 4) & 240) | (a >> 2)),
                              64 != s && e(((a << 6) & 192) | s));
                        }
                      })(t, function (t) {
                        o[n++] = t;
                      }),
                      o.subarray(0, n)
                    );
                  })(t));
              } else {
                if (0 != t.lastIndexOf("application/grpc", 0))
                  return void He(e, new N(2, "Unknown Content-type received."));
                t = new Uint8Array(
                  (function (t) {
                    try {
                      if (!t.a) return null;
                      if ("response" in t.a) return t.a.response;
                      switch (t.m) {
                        case Te:
                        case "text":
                          return t.a.responseText;
                        case "arraybuffer":
                          if ("mozResponseArrayBuffer" in t.a)
                            return t.a.mozResponseArrayBuffer;
                      }
                      var e = t.b;
                      return (
                        e &&
                          ue(
                            e,
                            Qt,
                            "Response type " +
                              t.m +
                              " is not supported on this browser"
                          ),
                        null
                      );
                    } catch (e) {
                      return (
                        he(t.b, "Can not get response: " + e.message), null
                      );
                    }
                  })(e.a)
                );
              }
              r = null;
              try {
                r = (function (t, e) {
                  function r(t) {
                    s.f++,
                      (s.a = (s.a << 8) + t),
                      4 == s.f &&
                        ((s.b = W),
                        (s.g = 0),
                        "undefined" != typeof Uint8Array
                          ? (s.c = new Uint8Array(s.a))
                          : (s.c = Array(s.a)),
                        0 == s.a && n());
                  }
                  function o(t) {
                    (s.c[s.g++] = t), s.g == s.a && n();
                  }
                  function n() {
                    var t = {};
                    (t[s.h] = s.c), s.i.push(t), (s.b = G);
                  }
                  var i,
                    a,
                    s = t,
                    p = 0;
                  for (
                    i =
                      e instanceof Uint8Array || e instanceof Array
                        ? e
                        : new Uint8Array(e);
                    p < i.length;

                  ) {
                    switch (s.b) {
                      case V:
                        X(s, i, p, "stream already broken");
                        break;
                      case G:
                        (a = i[p]) == H || a == q
                          ? (s.h = a)
                          : X(s, i, p, "invalid frame byte"),
                          (s.b = z),
                          (s.a = 0),
                          (s.f = 0);
                        break;
                      case z:
                        r(i[p]);
                        break;
                      case W:
                        o(i[p]);
                        break;
                      default:
                        throw Error("unexpected parser state: " + s.b);
                    }
                    s.m++, p++;
                  }
                  return (t = s.i), (s.i = []), 0 < t.length ? t : null;
                })(e.s, t);
              } catch (t) {
                He(e, new N(2, "Error in parsing response body"));
              }
              if (r)
                for (t = 0; t < r.length; t++) {
                  if (H in r[t]) {
                    var o = r[t][H];
                    if (o) {
                      var n = !1,
                        i = void 0;
                      try {
                        (i = e.m(o)), (n = !0);
                      } catch (t) {
                        He(
                          e,
                          new N(
                            13,
                            "Error when deserializing response data; error: " +
                              t +
                              ", response: " +
                              i
                          )
                        );
                      }
                      if (n) for (o = i, n = 0; n < e.b.length; n++) e.b[n](o);
                    }
                  }
                  if (q in r[t] && 0 < r[t][q].length) {
                    for (o = "", n = 0; n < r[t][q].length; n++)
                      o += String.fromCharCode(r[t][q][n]);
                    for (
                      o = o.trim().split("\r\n"), n = {}, i = 0;
                      i < o.length;
                      i++
                    ) {
                      var a = o[i].indexOf(":");
                      n[o[i].substring(0, a).trim()] = o[i]
                        .substring(a + 1)
                        .trim();
                    }
                    (o = n),
                      (n = 0),
                      (i = ""),
                      "grpc-status" in o &&
                        ((n = Number(o["grpc-status"])),
                        delete o["grpc-status"]),
                      "grpc-message" in o &&
                        ((i = o["grpc-message"]), delete o["grpc-message"]),
                      He(e, new N(n, i, o));
                  }
                }
            }
          }),
            It(this.a, "complete", function () {
              var t = e.a.g,
                r = 2,
                o = "",
                n = {};
              r = (function (t) {
                var e = {};
                t = (
                  (t.a && 4 == De(t) && t.a.getAllResponseHeaders()) ||
                  ""
                ).split("\r\n");
                for (var r = 0; r < t.length; r++)
                  if (!/^[\s\xa0]*$/.test(t[r])) {
                    var o = rt(t[r]),
                      n = o[0];
                    if ("string" == typeof (o = o[1])) {
                      o = o.trim();
                      var i = e[n] || [];
                      (e[n] = i), i.push(o);
                    }
                  }
                return (function (t, e) {
                  var r,
                    o = {};
                  for (r in t) o[r] = e.call(void 0, t[r], r, t);
                  return o;
                })(e, function (t) {
                  return t.join(", ");
                });
              })(e.a);
              var i = {};
              for (a in r) r.hasOwnProperty(a) && (i[a.toLowerCase()] = r[a]);
              Object.keys(i).forEach(function (t) {
                ze.includes(t) || (n[t] = i[t]);
              }),
                (function (t, e) {
                  for (var r = 0; r < t.g.length; r++) t.g[r](e);
                })(e, n);
              var a = -1;
              if (0 != t) {
                switch (t) {
                  case 7:
                    r = 10;
                    break;
                  case 8:
                    r = 4;
                    break;
                  case 6:
                    r = (function (t) {
                      switch (t) {
                        case 200:
                          return 0;
                        case 400:
                          return 3;
                        case 401:
                          return 16;
                        case 403:
                          return 7;
                        case 404:
                          return 5;
                        case 409:
                          return 10;
                        case 412:
                          return 9;
                        case 429:
                          return 8;
                        case 499:
                          return 1;
                        case 500:
                        default:
                          return 2;
                        case 501:
                          return 12;
                        case 503:
                          return 14;
                        case 504:
                          return 4;
                      }
                    })((a = e.a.getStatus()));
                    break;
                  default:
                    r = 14;
                }
                (10 == r && e.l) ||
                  ((o = (function (t) {
                    switch (t) {
                      case 0:
                        return "No Error";
                      case 1:
                        return "Access denied to content document";
                      case 2:
                        return "File not found";
                      case 3:
                        return "Firefox silently errored";
                      case 4:
                        return "Application custom error";
                      case 5:
                        return "An exception occurred";
                      case 6:
                        return "Http response at 400 or 500 level";
                      case 7:
                        return "Request was aborted";
                      case 8:
                        return "Request timed out";
                      case 9:
                        return "The resource is not available offline";
                      default:
                        return "Unrecognized error code";
                    }
                  })(t)),
                  -1 != a && (o += ", http status code: " + a),
                  He(e, new N(r, o)));
              } else
                (t = !1),
                  "grpc-status" in i &&
                    ((r = Number(i["grpc-status"])),
                    "grpc-message" in i && (o = i["grpc-message"]),
                    0 != r && (He(e, new N(r, o || "", i)), (t = !0))),
                  t ||
                    (function (t) {
                      for (var e = 0; e < t.c.length; e++) t.c[e]();
                    })(e);
            });
        }
        function Ve(t, e) {
          -1 < (e = t.indexOf(e)) && t.splice(e, 1);
        }
        function He(t, e) {
          if (0 != e.code)
            for (
              var r = new N(
                  e.code,
                  decodeURIComponent(e.message || ""),
                  e.metadata
                ),
                o = 0;
              o < t.f.length;
              o++
            )
              t.f[o](r);
          for (
            e = {
              code: e.code,
              details: decodeURIComponent(e.message || ""),
              metadata: e.metadata,
            },
              r = 0;
            r < t.h.length;
            r++
          )
            t.h[r](e);
        }
        function qe(t, e) {
          (t = void 0 === t ? {} : t),
            (this.a = t.format || O("format", t) || "text"),
            (this.g = t.aa || O("suppressCorsPreflight", t) || !1),
            (this.f = t.withCredentials || O("withCredentials", t) || !1),
            (this.b = t.$ || O("streamInterceptors", t) || []),
            (this.h = t.ba || O("unaryInterceptors", t) || []),
            (this.c = e || null);
        }
        function Xe(t, e, r) {
          var o = e.getMethodDescriptor(),
            n = r + o.getName();
          (r = t.c ? t.c : new Me()).M = t.f;
          var i = new We({ Z: r });
          i.m = o.b;
          var a = e.getMetadata();
          for (s in a) r.headers.set(s, a[s]);
          if (
            ("text" == t.a
              ? (r.headers.set("Content-Type", "application/grpc-web-text"),
                r.headers.set("Accept", "application/grpc-web-text"))
              : r.headers.set("Content-Type", "application/grpc-web+proto"),
            r.headers.set("X-User-Agent", "grpc-web-javascript/0.1"),
            r.headers.set("X-Grpc-Web", "1"),
            r.headers.has("deadline"))
          ) {
            var s = Number(r.headers.get("deadline"));
            (s = Math.ceil(s - new Date().getTime())),
              r.headers.delete("deadline"),
              1 / 0 === s && (s = 0),
              0 < s &&
                (r.headers.set("grpc-timeout", s + "m"),
                (r.h = Math.max(0, Math.max(1e3, Math.ceil(1.1 * s)))));
          }
          if (t.g) {
            s = {};
            for (
              var p = l((a = r.headers).keys()), u = p.next();
              !u.done;
              u = p.next()
            )
              s[(u = u.value)] = a.get(u);
            r.headers.clear();
            t: {
              for (h in s) {
                var h = !1;
                break t;
              }
              h = !0;
            }
            h ||
              ((s = (function (t) {
                var e = "";
                return (
                  (function (t, e) {
                    for (var r in t) e.call(void 0, t[r], r, t);
                  })(t, function (t, r) {
                    (e += r), (e += ":"), (e += t), (e += "\r\n");
                  }),
                  e
                );
              })(s)),
              "string" == typeof n
                ? ((h = encodeURIComponent("$httpHeaders")),
                  (h += s =
                    null != s ? "=" + encodeURIComponent(String(s)) : "") &&
                    (0 > (s = n.indexOf("#")) && (s = n.length),
                    0 > (a = n.indexOf("?")) || a > s
                      ? ((a = s), (p = ""))
                      : (p = n.substring(a + 1, s)),
                    (s = (n = [n.substr(0, a), p, n.substr(s)])[1]),
                    (n[1] = h ? (s ? s + "&" + h : h) : s),
                    (n = n[0] + (n[1] ? "?" + n[1] : "") + n[2])))
                : n.a("$httpHeaders", s));
          }
          for (
            o = (e = (0, o.a)(e.getRequestMessage())).length,
              h = [0, 0, 0, 0],
              s = new Uint8Array(5 + o),
              a = 3;
            0 <= a;
            a--
          )
            (h[a] = o % 256), (o >>>= 8);
          if (
            (s.set(new Uint8Array(h), 1), s.set(e, 5), (e = s), "text" == t.a)
          ) {
            var c;
            for (
              t = e,
                void 0 === c && (c = 0),
                Ge(),
                c = Le[c],
                e = Array(Math.floor(t.length / 3)),
                o = c[64] || "",
                h = s = 0;
              s < t.length - 2;
              s += 3
            ) {
              u = t[s];
              var f = t[s + 1];
              (p = t[s + 2]),
                (a = c[u >> 2]),
                (u = c[((3 & u) << 4) | (f >> 4)]),
                (f = c[((15 & f) << 2) | (p >> 6)]),
                (p = c[63 & p]),
                (e[h++] = a + u + f + p);
            }
            switch (((a = 0), (p = o), t.length - s)) {
              case 2:
                p = c[(15 & (a = t[s + 1])) << 2] || o;
              case 1:
                (t = t[s]),
                  (e[h] = c[t >> 2] + c[((3 & t) << 4) | (a >> 4)] + p + o);
            }
            e = e.join("");
          } else "binary" == t.a && (r.m = "arraybuffer");
          return (
            (function (t, e, r) {
              if (t.a)
                throw Error(
                  "[goog.net.XhrIo] Object is active with another request=" +
                    t.v +
                    "; newUri=" +
                    e
                );
              (t.v = e),
                (t.l = ""),
                (t.g = 0),
                (t.P = "POST"),
                (t.L = !1),
                (t.c = !0),
                (t.a = t.C ? ye(t.C) : ye(Jt)),
                (t.J = t.C ? le(t.C) : le(Jt)),
                (t.a.onreadystatechange = T(t.R, t));
              try {
                he(t.b, Ue(t, "Opening Xhr")),
                  (t.N = !0),
                  t.a.open("POST", String(e), !0),
                  (t.N = !1);
              } catch (e) {
                return (
                  he(t.b, Ue(t, "Error opening Xhr: " + e.message)),
                  void ke(t, e)
                );
              }
              e = r || "";
              var o = (r = t.headers.clone()).G().find(function (t) {
                  return "content-type" == t.toLowerCase();
                }),
                n = x.FormData && e instanceof x.FormData;
              !(0 <= Y(Ce, "POST")) ||
                o ||
                n ||
                r.set(
                  "Content-Type",
                  "application/x-www-form-urlencoded;charset=utf-8"
                ),
                r.forEach(function (t, e) {
                  this.a.setRequestHeader(e, t);
                }, t),
                t.m && (t.a.responseType = t.m),
                "withCredentials" in t.a &&
                  t.a.withCredentials !== t.M &&
                  (t.a.withCredentials = t.M);
              try {
                Ne(t),
                  0 < t.h &&
                    ((t.I = (function (t) {
                      return (
                        st &&
                        gt() &&
                        "number" == typeof t.timeout &&
                        void 0 !== t.ontimeout
                      );
                    })(t.a)),
                    he(
                      t.b,
                      Ue(
                        t,
                        "Will abort after " +
                          t.h +
                          "ms if incomplete, xhr2 " +
                          t.I
                      )
                    ),
                    t.I
                      ? ((t.a.timeout = t.h), (t.a.ontimeout = T(t.T, t)))
                      : (t.w = Xt(t.T, t.h, t))),
                  he(t.b, Ue(t, "Sending request")),
                  (t.s = !0),
                  t.a.send(e),
                  (t.s = !1);
              } catch (e) {
                he(t.b, Ue(t, "Send error: " + e.message)), ke(t, e);
              }
            })(r, n, e),
            i
          );
        }
        function Ke(t, e, r) {
          var o = !1,
            n = null,
            i = !1;
          t.on("data", function (t) {
            (o = !0), (n = t);
          }),
            t.on("error", function (t) {
              0 == t.code || i || ((i = !0), e(t, null));
            }),
            t.on("status", function (t) {
              0 == t.code || i
                ? r && e(null, null, t)
                : ((i = !0),
                  e(
                    { code: t.code, message: t.details, metadata: t.metadata },
                    null
                  ));
            }),
            r &&
              t.on("metadata", function (t) {
                e(null, null, null, t);
              }),
            t.on("end", function () {
              i ||
                (o
                  ? r
                    ? e(null, n, null, null, !0)
                    : e(null, n)
                  : e({ code: 2, message: "Incomplete response" })),
                r && e(null, null);
            });
        }
        function Ye(t, e) {
          var r = t;
          return (
            e.forEach(function (t) {
              var e = r;
              r = function (r) {
                return t.intercept(r, e);
              };
            }),
            r
          );
        }
        (We.prototype.on = function (t, e) {
          return (
            "data" == t
              ? this.b.push(e)
              : "status" == t
              ? this.h.push(e)
              : "metadata" == t
              ? this.g.push(e)
              : "end" == t
              ? this.c.push(e)
              : "error" == t && this.f.push(e),
            this
          );
        }),
          (We.prototype.removeListener = function (t, e) {
            return (
              "data" == t
                ? Ve(this.b, e)
                : "status" == t
                ? Ve(this.h, e)
                : "metadata" == t
                ? Ve(this.g, e)
                : "end" == t
                ? Ve(this.c, e)
                : "error" == t && Ve(this.f, e),
              this
            );
          }),
          (We.prototype.cancel = function () {
            (this.l = !0), this.a.abort();
          }),
          (We.prototype.cancel = We.prototype.cancel),
          (We.prototype.removeListener = We.prototype.removeListener),
          (We.prototype.on = We.prototype.on),
          (qe.prototype.X = function (t, e, r, o, n) {
            var i = this,
              a = t.substr(0, t.length - o.name.length);
            return (
              Ke(
                (t = Ye(function (t) {
                  return Xe(i, t, a);
                }, this.b).call(this, P(o, e, r))),
                n,
                !1
              ),
              new D(t)
            );
          }),
          (qe.prototype.S = function (t, e, r, o) {
            var n = this,
              i = t.substr(0, t.length - o.name.length);
            return Ye(function (t) {
              return new Promise(function (e, r) {
                var o, a, s;
                Ke(
                  Xe(n, t, i),
                  function (n, i, p, u, h) {
                    n
                      ? r(n)
                      : h
                      ? (s = i)
                      : p
                      ? (a = p)
                      : u
                      ? (o = u)
                      : ((n = t.getMethodDescriptor()),
                        e(
                          new I(
                            s,
                            n,
                            (i = void 0 === (i = o) ? {} : i),
                            void 0 === a ? null : a
                          )
                        ));
                  },
                  !0
                );
              });
            }, this.h)
              .call(this, P(o, e, r))
              .then(function (t) {
                return t.getResponseMessage();
              });
          }),
          (qe.prototype.unaryCall = function (t, e, r, o) {
            return this.S(t, e, r, o);
          }),
          (qe.prototype.Y = function (t, e, r, o) {
            var n = this,
              i = t.substr(0, t.length - o.name.length);
            return Ye(function (t) {
              return Xe(n, t, i);
            }, this.b).call(this, P(o, e, r));
          }),
          (qe.prototype.serverStreaming = qe.prototype.Y),
          (qe.prototype.unaryCall = qe.prototype.unaryCall),
          (qe.prototype.thenableCall = qe.prototype.S),
          (qe.prototype.rpcCall = qe.prototype.X),
          (t.exports.CallOptions = C),
          (t.exports.MethodDescriptor = B),
          (t.exports.GrpcWebClientBase = qe),
          (t.exports.RpcError = N),
          (t.exports.StatusCode = {
            OK: 0,
            CANCELLED: 1,
            UNKNOWN: 2,
            INVALID_ARGUMENT: 3,
            DEADLINE_EXCEEDED: 4,
            NOT_FOUND: 5,
            ALREADY_EXISTS: 6,
            PERMISSION_DENIED: 7,
            UNAUTHENTICATED: 16,
            RESOURCE_EXHAUSTED: 8,
            FAILED_PRECONDITION: 9,
            ABORTED: 10,
            OUT_OF_RANGE: 11,
            UNIMPLEMENTED: 12,
            INTERNAL: 13,
            UNAVAILABLE: 14,
            DATA_LOSS: 15,
          }),
          (t.exports.MethodType = {
            UNARY: "unary",
            SERVER_STREAMING: "server_streaming",
            BIDI_STREAMING: "bidi_streaming",
          }),
          (qt = ("undefined" != typeof globalThis && globalThis) || self);
      },
    },
    e = {};
  function r(o) {
    var n = e[o];
    if (void 0 !== n) return n.exports;
    var i = (e[o] = { exports: {} });
    return t[o].call(i.exports, i, i.exports, r), i.exports;
  }
  (r.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  })()),
    (() => {
      const {
          CreateOrderRequest: t,
          CreateOrderResponse: e,
          GetOrdersRequest: o,
          GetOrdersResponse: n,
        } = r(484),
        { ExchangeClient: i } = r(209);
      var a = new i("http://localhost:8080"),
        s = new t();
      s.setMessage("Hello World!"),
        a.createOrder(s, {}, function (t, e) {}),
        a.getOrders(s, {}, function (t, e) {});
    })();
})();
