// Note: Edit "decorator-tests.ts" instead of this file
// Polyfill this in case it's missing
if (!('metadata' in Symbol)) {
    Symbol.metadata = Symbol('Symbol.metadata');
}
if (!(Symbol.metadata in Function)) {
    Object.defineProperty(Function.prototype, Symbol.metadata, { value: null });
}
const tests = {
    // Class decorators
    'Class decorators: Basic statement': () => {
        let old;
        const dec = (name) => (cls, ctx) => {
            assertEq(() => typeof cls, 'function');
            assertEq(() => cls.name, name);
            assertEq(() => ctx.kind, 'class');
            assertEq(() => ctx.name, name);
            assertEq(() => 'static' in ctx, false);
            assertEq(() => 'private' in ctx, false);
            assertEq(() => 'access' in ctx, false);
            old = cls;
        };
        @dec('Foo')
        class Foo {
        }
        assertEq(() => Foo, old);
    },
    'Class decorators: Basic expression: Anonymous': () => {
        let old;
        const dec = (name) => (cls, ctx) => {
            assertEq(() => typeof cls, 'function');
            assertEq(() => cls.name, name);
            assertEq(() => ctx.kind, 'class');
            assertEq(() => ctx.name, name);
            assertEq(() => 'static' in ctx, false);
            assertEq(() => 'private' in ctx, false);
            assertEq(() => 'access' in ctx, false);
            old = cls;
        };
        const Foo = (x => x)(
        @dec('')
        class {
        });
        assertEq(() => Foo, old);
        const Bar = (x => x)(
        @dec('Baz')
        class Baz {
        });
        assertEq(() => Bar, old);
    },
    'Class decorators: Basic expression: Property value': () => {
        let old;
        const dec = (name) => (cls, ctx) => {
            assertEq(() => typeof cls, 'function');
            assertEq(() => cls.name, name);
            assertEq(() => ctx.kind, 'class');
            assertEq(() => ctx.name, name);
            assertEq(() => 'static' in ctx, false);
            assertEq(() => 'private' in ctx, false);
            assertEq(() => 'access' in ctx, false);
            old = cls;
        };
        const obj = {
            Foo: 
            @dec('Foo')
            class {
            },
        };
        assertEq(() => obj.Foo, old);
        const obj2 = {
            Bar: 
            @dec('Baz')
            class Baz {
            },
        };
        assertEq(() => obj2.Bar, old);
    },
    'Class decorators: Basic expression: Variable initializer': () => {
        let old;
        const dec = (name) => (cls, ctx) => {
            assertEq(() => typeof cls, 'function');
            assertEq(() => cls.name, name);
            assertEq(() => ctx.kind, 'class');
            assertEq(() => ctx.name, name);
            assertEq(() => 'static' in ctx, false);
            assertEq(() => 'private' in ctx, false);
            assertEq(() => 'access' in ctx, false);
            old = cls;
        };
        const Foo = 
        @dec('Foo')
        class {
        };
        assertEq(() => Foo, old);
        const Bar = 
        @dec('Baz')
        class Baz {
        };
        assertEq(() => Bar, old);
    },
    'Class decorators: Basic expression: Array binding': () => {
        let old;
        const dec = (name) => (cls, ctx) => {
            assertEq(() => typeof cls, 'function');
            assertEq(() => cls.name, name);
            assertEq(() => ctx.kind, 'class');
            assertEq(() => ctx.name, name);
            assertEq(() => 'static' in ctx, false);
            assertEq(() => 'private' in ctx, false);
            assertEq(() => 'access' in ctx, false);
            old = cls;
        };
        const [Foo = 
        @dec('Foo')
        class {
        }] = [];
        assertEq(() => Foo, old);
        const [Bar = 
        @dec('Baz')
        class Baz {
        }] = [];
        assertEq(() => Bar, old);
    },
    'Class decorators: Basic expression: Object binding': () => {
        let old;
        const dec = (name) => (cls, ctx) => {
            assertEq(() => typeof cls, 'function');
            assertEq(() => cls.name, name);
            assertEq(() => ctx.kind, 'class');
            assertEq(() => ctx.name, name);
            assertEq(() => 'static' in ctx, false);
            assertEq(() => 'private' in ctx, false);
            assertEq(() => 'access' in ctx, false);
            old = cls;
        };
        const { Foo = 
        @dec('Foo')
        class {
        } } = {};
        assertEq(() => Foo, old);
        const { Bar = 
        @dec('Baz')
        class Baz {
        } } = {};
        assertEq(() => Bar, old);
    },
    'Class decorators: Basic expression: Assignment initializer': () => {
        let old;
        const dec = (name) => (cls, ctx) => {
            assertEq(() => typeof cls, 'function');
            assertEq(() => cls.name, name);
            assertEq(() => ctx.kind, 'class');
            assertEq(() => ctx.name, name);
            assertEq(() => 'static' in ctx, false);
            assertEq(() => 'private' in ctx, false);
            assertEq(() => 'access' in ctx, false);
            old = cls;
        };
        let Foo;
        Foo = 
        @dec('Foo')
        class {
        };
        assertEq(() => Foo, old);
        let Bar;
        Bar = 
        @dec('Baz')
        class Baz {
        };
        assertEq(() => Bar, old);
    },
    'Class decorators: Basic expression: Assignment array binding': () => {
        let old;
        const dec = (name) => (cls, ctx) => {
            assertEq(() => typeof cls, 'function');
            assertEq(() => cls.name, name);
            assertEq(() => ctx.kind, 'class');
            assertEq(() => ctx.name, name);
            assertEq(() => 'static' in ctx, false);
            assertEq(() => 'private' in ctx, false);
            assertEq(() => 'access' in ctx, false);
            old = cls;
        };
        let Foo;
        [Foo = 
            @dec('Foo')
            class {
            }] = [];
        assertEq(() => Foo, old);
        let Bar;
        [Bar = 
            @dec('Baz')
            class Baz {
            }] = [];
        assertEq(() => Bar, old);
    },
    'Class decorators: Basic expression: Assignment object binding': () => {
        let old;
        const dec = (name) => (cls, ctx) => {
            assertEq(() => typeof cls, 'function');
            assertEq(() => cls.name, name);
            assertEq(() => ctx.kind, 'class');
            assertEq(() => ctx.name, name);
            assertEq(() => 'static' in ctx, false);
            assertEq(() => 'private' in ctx, false);
            assertEq(() => 'access' in ctx, false);
            old = cls;
        };
        let Foo;
        ({ Foo = 
            @dec('Foo')
            class {
            } } = {});
        assertEq(() => Foo, old);
        let Bar;
        ({ Bar = 
            @dec('Baz')
            class Baz {
            } } = {});
        assertEq(() => Bar, old);
    },
    'Class decorators: Basic expression: Instance field initializer': () => {
        let old;
        const dec = (name) => (cls, ctx) => {
            assertEq(() => typeof cls, 'function');
            assertEq(() => cls.name, name);
            assertEq(() => ctx.kind, 'class');
            assertEq(() => ctx.name, name);
            assertEq(() => 'static' in ctx, false);
            assertEq(() => 'private' in ctx, false);
            assertEq(() => 'access' in ctx, false);
            old = cls;
        };
        class Class {
            Foo = 
            @dec('Foo')
            class {
            };
        }
        const Foo = new Class().Foo;
        assertEq(() => Foo, old);
        class Class2 {
            Bar = 
            @dec('Baz')
            class Baz {
            };
        }
        const Bar = new Class2().Bar;
        assertEq(() => Bar, old);
    },
    'Class decorators: Basic expression: Static field initializer': () => {
        let old;
        const dec = (name) => (cls, ctx) => {
            assertEq(() => typeof cls, 'function');
            assertEq(() => cls.name, name);
            assertEq(() => ctx.kind, 'class');
            assertEq(() => ctx.name, name);
            assertEq(() => 'static' in ctx, false);
            assertEq(() => 'private' in ctx, false);
            assertEq(() => 'access' in ctx, false);
            old = cls;
        };
        class Class {
            static Foo = 
            @dec('Foo')
            class {
            };
        }
        assertEq(() => Class.Foo, old);
        class Class2 {
            static Bar = 
            @dec('Baz')
            class Baz {
            };
        }
        assertEq(() => Class2.Bar, old);
    },
    'Class decorators: Basic expression: Instance auto-accessor initializer': () => {
        let old;
        const dec = (name) => (cls, ctx) => {
            assertEq(() => typeof cls, 'function');
            assertEq(() => cls.name, name);
            assertEq(() => ctx.kind, 'class');
            assertEq(() => ctx.name, name);
            assertEq(() => 'static' in ctx, false);
            assertEq(() => 'private' in ctx, false);
            assertEq(() => 'access' in ctx, false);
            old = cls;
        };
        class Class {
            accessor Foo = 
            @dec('Foo')
            class {
            };
        }
        const Foo = new Class().Foo;
        assertEq(() => Foo, old);
        class Class2 {
            accessor Bar = 
            @dec('Baz')
            class Baz {
            };
        }
        const Bar = new Class2().Bar;
        assertEq(() => Bar, old);
    },
    'Class decorators: Basic expression: Static auto-accessor initializer': () => {
        let old;
        const dec = (name) => (cls, ctx) => {
            assertEq(() => typeof cls, 'function');
            assertEq(() => cls.name, name);
            assertEq(() => ctx.kind, 'class');
            assertEq(() => ctx.name, name);
            assertEq(() => 'static' in ctx, false);
            assertEq(() => 'private' in ctx, false);
            assertEq(() => 'access' in ctx, false);
            old = cls;
        };
        class Class {
            static accessor Foo = 
            @dec('Foo')
            class {
            };
        }
        assertEq(() => Class.Foo, old);
        class Class2 {
            static accessor Bar = 
            @dec('Baz')
            class Baz {
            };
        }
        assertEq(() => Class2.Bar, old);
    },
    'Class decorators: Order': () => {
        const log = [];
        let Bar;
        let Baz;
        const dec1 = (cls, ctx) => {
            log.push(2);
            Bar = function () {
                log.push(4);
                return new cls;
            };
            return Bar;
        };
        const dec2 = (cls, ctx) => {
            log.push(1);
            Baz = function () {
                log.push(5);
                return new cls;
            };
            return Baz;
        };
        log.push(0);
        @dec1
        @dec2
        class Foo {
            constructor() { log.push(6); }
        }
        log.push(3);
        new Foo;
        log.push(7);
        assertEq(() => Foo, Bar);
        assertEq(() => log + '', '0,1,2,3,4,5,6,7');
    },
    'Class decorators: Return null': () => {
        assertThrows(() => {
            const dec = (cls, ctx) => {
                return null;
            };
            @dec
            class Foo {
            }
        }, TypeError);
    },
    'Class decorators: Return object': () => {
        assertThrows(() => {
            const dec = (cls, ctx) => {
                return {};
            };
            @dec
            class Foo {
            }
        }, TypeError);
    },
    'Class decorators: Extra initializer': () => {
        let oldAddInitializer;
        let got;
        const dec = (cls, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        @dec
        @dec
        class Foo {
        }
        assertEq(() => got.this, Foo);
        assertEq(() => got.args.length, 0);
    },
    'Class decorators: Binding initialization (class statement)': () => {
        let old;
        let block;
        class Bar {
        }
        const dec = (cls, ctx) => {
            old = cls;
            return Bar;
        };
        @dec
        class Foo {
            static { block = Foo; }
            method() { return Foo; }
            static method() { return Foo; }
            field = Foo;
            static field = Foo;
            get getter() { return Foo; }
            static get getter() { return Foo; }
            set setter(x) { x.foo = Foo; }
            static set setter(x) { x.foo = Foo; }
            accessor accessor = Foo;
            static accessor accessor = Foo;
        }
        const foo = new old;
        let obj;
        assertEq(() => Foo !== old, true);
        assertEq(() => Foo, Bar);
        assertEq(() => block, Bar);
        assertEq(() => Foo.field, Bar);
        assertEq(() => foo.field, Bar);
        assertEq(() => old.getter, Bar);
        assertEq(() => foo.getter, Bar);
        assertEq(() => (obj = { foo: null }, old.setter = obj, obj.foo), Bar);
        assertEq(() => (obj = { foo: null }, foo.setter = obj, obj.foo), Bar);
        // The specification for accessors is potentially wrong at the moment: https://github.com/tc39/proposal-decorators/issues/529
        // assertEq(() => old.accessor, Bar)
        // assertEq(() => foo.accessor, Bar)
    },
    'Class decorators: Binding initialization (class expression)': () => {
        let old;
        let block;
        class Bar {
        }
        const dec = (cls, ctx) => {
            old = cls;
            return Bar;
        };
        const Foo = 
        @dec
        class Foo {
            static { block = Foo; }
            method() { return Foo; }
            static method() { return Foo; }
            field = Foo;
            static field = Foo;
            get getter() { return Foo; }
            static get getter() { return Foo; }
            set setter(x) { x.foo = Foo; }
            static set setter(x) { x.foo = Foo; }
            accessor accessor = Foo;
            static accessor accessor = Foo;
        };
        const foo = new old;
        let obj;
        assertEq(() => Foo !== old, true);
        assertEq(() => Foo, Bar);
        assertEq(() => block, Bar);
        assertEq(() => Foo.field, Bar);
        assertEq(() => foo.field, Bar);
        assertEq(() => old.getter, Bar);
        assertEq(() => foo.getter, Bar);
        assertEq(() => (obj = { foo: null }, old.setter = obj, obj.foo), Bar);
        assertEq(() => (obj = { foo: null }, foo.setter = obj, obj.foo), Bar);
        // The specification for accessors is potentially wrong at the moment: https://github.com/tc39/proposal-decorators/issues/529
        // assertEq(() => old.accessor, Bar)
        // assertEq(() => foo.accessor, Bar)
    },
    // Method decorators
    'Method decorators: Basic (instance method)': () => {
        const old = {};
        const dec = (key, name) => (fn, ctx) => {
            assertEq(() => typeof fn, 'function');
            assertEq(() => fn.name, name);
            assertEq(() => ctx.kind, 'method');
            assertEq(() => ctx.name, key);
            assertEq(() => ctx.static, false);
            assertEq(() => ctx.private, false);
            assertEq(() => ctx.access.has({ [key]: false }), true);
            assertEq(() => ctx.access.has({ bar: true }), false);
            assertEq(() => ctx.access.get({ [key]: 123 }), 123);
            assertEq(() => 'set' in ctx.access, false);
            old[key] = fn;
        };
        const bar = Symbol('bar');
        const baz = Symbol();
        class Foo {
            @dec('foo', 'foo')
            foo() { }
            @dec(bar, '[bar]')
            [bar]() { }
            @dec(baz, '')
            [baz]() { }
        }
        assertEq(() => Foo.prototype.foo, old['foo']);
        assertEq(() => Foo.prototype[bar], old[bar]);
        assertEq(() => Foo.prototype[baz], old[baz]);
    },
    'Method decorators: Basic (static method)': () => {
        const old = {};
        const dec = (key, name) => (fn, ctx) => {
            assertEq(() => typeof fn, 'function');
            assertEq(() => fn.name, name);
            assertEq(() => ctx.kind, 'method');
            assertEq(() => ctx.name, key);
            assertEq(() => ctx.static, true);
            assertEq(() => ctx.private, false);
            assertEq(() => ctx.access.has({ [key]: false }), true);
            assertEq(() => ctx.access.has({ bar: true }), false);
            assertEq(() => ctx.access.get({ [key]: 123 }), 123);
            assertEq(() => 'set' in ctx.access, false);
            old[key] = fn;
        };
        const bar = Symbol('bar');
        const baz = Symbol();
        class Foo {
            @dec('foo', 'foo')
            static foo() { }
            @dec(bar, '[bar]')
            static [bar]() { }
            @dec(baz, '')
            static [baz]() { }
        }
        assertEq(() => Foo.foo, old['foo']);
        assertEq(() => Foo[bar], old[bar]);
        assertEq(() => Foo[baz], old[baz]);
    },
    'Method decorators: Basic (private instance method)': () => {
        let old;
        let lateAsserts;
        const dec = (fn, ctx) => {
            assertEq(() => typeof fn, 'function');
            assertEq(() => fn.name, '#foo');
            assertEq(() => ctx.kind, 'method');
            assertEq(() => ctx.name, '#foo');
            assertEq(() => ctx.static, false);
            assertEq(() => ctx.private, true);
            lateAsserts = () => {
                assertEq(() => ctx.access.has(new Foo), true);
                assertEq(() => ctx.access.has({}), false);
                assertEq(() => ctx.access.get(new Foo), $foo);
                assertEq(() => 'set' in ctx.access, false);
            };
            old = fn;
        };
        let $foo;
        class Foo {
            @dec
            #foo() { }
            static { $foo = new Foo().#foo; }
        }
        assertEq(() => $foo, old);
        lateAsserts();
    },
    'Method decorators: Basic (private static method)': () => {
        let old;
        let lateAsserts;
        const dec = (fn, ctx) => {
            assertEq(() => typeof fn, 'function');
            assertEq(() => fn.name, '#foo');
            assertEq(() => ctx.kind, 'method');
            assertEq(() => ctx.name, '#foo');
            assertEq(() => ctx.static, true);
            assertEq(() => ctx.private, true);
            lateAsserts = () => {
                assertEq(() => ctx.access.has(Foo), true);
                assertEq(() => ctx.access.has({}), false);
                assertEq(() => ctx.access.get(Foo), $foo);
                assertEq(() => 'set' in ctx.access, false);
            };
            old = fn;
        };
        let $foo;
        class Foo {
            @dec
            static #foo() { }
            static { $foo = this.#foo; }
        }
        assertEq(() => $foo, old);
        lateAsserts();
    },
    'Method decorators: Shim (instance method)': () => {
        let bar;
        const dec = (fn, ctx) => {
            bar = function () { return fn.call(this) + 1; };
            return bar;
        };
        class Foo {
            bar = 123;
            @dec
            foo() { return this.bar; }
        }
        assertEq(() => Foo.prototype.foo, bar);
        assertEq(() => new Foo().foo(), 124);
    },
    'Method decorators: Shim (static method)': () => {
        let bar;
        const dec = (fn, ctx) => {
            bar = function () { return fn.call(this) + 1; };
            return bar;
        };
        class Foo {
            static bar = 123;
            @dec
            static foo() { return this.bar; }
        }
        assertEq(() => Foo.foo, bar);
        assertEq(() => Foo.foo(), 124);
    },
    'Method decorators: Shim (private instance method)': () => {
        let bar;
        const dec = (fn, ctx) => {
            bar = function () { return fn.call(this) + 1; };
            return bar;
        };
        let $foo;
        class Foo {
            bar = 123;
            @dec
            #foo() { return this.bar; }
            static { $foo = new Foo().#foo; }
        }
        assertEq(() => $foo, bar);
        assertEq(() => bar.call(new Foo), 124);
    },
    'Method decorators: Shim (private static method)': () => {
        let bar;
        const dec = (fn, ctx) => {
            bar = function () { return fn.call(this) + 1; };
            return bar;
        };
        let $foo;
        class Foo {
            static bar = 123;
            @dec
            static #foo() { return this.bar; }
            static { $foo = this.#foo; }
        }
        assertEq(() => $foo, bar);
        assertEq(() => bar.call(Foo), 124);
    },
    'Method decorators: Order (instance method)': () => {
        const log = [];
        let bar;
        let baz;
        const dec1 = (fn, ctx) => {
            log.push(2);
            bar = function () {
                log.push(4);
                return fn.call(this);
            };
            return bar;
        };
        const dec2 = (fn, ctx) => {
            log.push(1);
            baz = function () {
                log.push(5);
                return fn.call(this);
            };
            return baz;
        };
        log.push(0);
        class Foo {
            @dec1
            @dec2
            foo() { return log.push(6); }
        }
        log.push(3);
        new Foo().foo();
        log.push(7);
        assertEq(() => Foo.prototype.foo, bar);
        assertEq(() => log + '', '0,1,2,3,4,5,6,7');
    },
    'Method decorators: Order (static method)': () => {
        const log = [];
        let bar;
        let baz;
        const dec1 = (fn, ctx) => {
            log.push(2);
            bar = function () {
                log.push(4);
                return fn.call(this);
            };
            return bar;
        };
        const dec2 = (fn, ctx) => {
            log.push(1);
            baz = function () {
                log.push(5);
                return fn.call(this);
            };
            return baz;
        };
        log.push(0);
        class Foo {
            @dec1
            @dec2
            static foo() { return log.push(6); }
        }
        log.push(3);
        Foo.foo();
        log.push(7);
        assertEq(() => Foo.foo, bar);
        assertEq(() => log + '', '0,1,2,3,4,5,6,7');
    },
    'Method decorators: Order (private instance method)': () => {
        const log = [];
        let bar;
        let baz;
        const dec1 = (fn, ctx) => {
            log.push(2);
            bar = function () {
                log.push(4);
                return fn.call(this);
            };
            return bar;
        };
        const dec2 = (fn, ctx) => {
            log.push(1);
            baz = function () {
                log.push(5);
                return fn.call(this);
            };
            return baz;
        };
        log.push(0);
        let $foo;
        class Foo {
            @dec1
            @dec2
            #foo() { return log.push(6); }
            static { $foo = new Foo().#foo; }
        }
        log.push(3);
        $foo.call(new Foo);
        log.push(7);
        assertEq(() => $foo, bar);
        assertEq(() => log + '', '0,1,2,3,4,5,6,7');
    },
    'Method decorators: Order (private static method)': () => {
        const log = [];
        let bar;
        let baz;
        const dec1 = (fn, ctx) => {
            log.push(2);
            bar = function () {
                log.push(4);
                return fn.call(this);
            };
            return bar;
        };
        const dec2 = (fn, ctx) => {
            log.push(1);
            baz = function () {
                log.push(5);
                return fn.call(this);
            };
            return baz;
        };
        log.push(0);
        let $foo;
        class Foo {
            @dec1
            @dec2
            static #foo() { return log.push(6); }
            static { $foo = Foo.#foo; }
        }
        log.push(3);
        $foo.call(Foo);
        log.push(7);
        assertEq(() => $foo, bar);
        assertEq(() => log + '', '0,1,2,3,4,5,6,7');
    },
    'Method decorators: Return null (instance method)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return null;
            };
            class Foo {
                @dec
                foo() { }
            }
        }, TypeError);
    },
    'Method decorators: Return null (static method)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return null;
            };
            class Foo {
                @dec
                static foo() { }
            }
        }, TypeError);
    },
    'Method decorators: Return null (private instance method)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return null;
            };
            class Foo {
                @dec
                #foo() { }
            }
        }, TypeError);
    },
    'Method decorators: Return null (private static method)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return null;
            };
            class Foo {
                @dec
                static #foo() { }
            }
        }, TypeError);
    },
    'Method decorators: Return object (instance method)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return {};
            };
            class Foo {
                @dec
                foo() { }
            }
        }, TypeError);
    },
    'Method decorators: Return object (static method)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return {};
            };
            class Foo {
                @dec
                static foo() { }
            }
        }, TypeError);
    },
    'Method decorators: Return object (private instance method)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return {};
            };
            class Foo {
                @dec
                #foo() { }
            }
        }, TypeError);
    },
    'Method decorators: Return object (private static method)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return {};
            };
            class Foo {
                @dec
                static #foo() { }
            }
        }, TypeError);
    },
    'Method decorators: Extra initializer (instance method)': () => {
        let oldAddInitializer;
        let got;
        const dec = (fn, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            foo() { }
        }
        assertEq(() => got, undefined);
        const instance = new Foo;
        assertEq(() => got.this, instance);
        assertEq(() => got.args.length, 0);
    },
    'Method decorators: Extra initializer (static method)': () => {
        let oldAddInitializer;
        let got;
        const dec = (fn, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            static foo() { }
        }
        assertEq(() => got.this, Foo);
        assertEq(() => got.args.length, 0);
    },
    'Method decorators: Extra initializer (private instance method)': () => {
        let oldAddInitializer;
        let got;
        const dec = (fn, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            #foo() { }
        }
        assertEq(() => got, undefined);
        const instance = new Foo;
        assertEq(() => got.this, instance);
        assertEq(() => got.args.length, 0);
    },
    'Method decorators: Extra initializer (private static method)': () => {
        let oldAddInitializer;
        let got;
        const dec = (fn, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            static #foo() { }
        }
        assertEq(() => got.this, Foo);
        assertEq(() => got.args.length, 0);
    },
    // Field decorators
    'Field decorators: Basic (instance field)': () => {
        const dec = (key) => (value, ctx) => {
            assertEq(() => value, undefined);
            assertEq(() => ctx.kind, 'field');
            assertEq(() => ctx.name, key);
            assertEq(() => ctx.static, false);
            assertEq(() => ctx.private, false);
            assertEq(() => ctx.access.has({ [key]: false }), true);
            assertEq(() => ctx.access.has({ bar: true }), false);
            assertEq(() => ctx.access.get({ [key]: 123 }), 123);
            assertEq(() => {
                const obj = {};
                ctx.access.set(obj, 321);
                return obj[key];
            }, 321);
        };
        const bar = Symbol('bar');
        const baz = Symbol();
        class Foo {
            @dec('foo')
            foo = 123;
            @dec(bar)
            [bar] = 123;
            @dec(baz)
            [baz] = 123;
        }
        assertEq(() => new Foo().foo, 123);
        assertEq(() => new Foo()[bar], 123);
        assertEq(() => new Foo()[baz], 123);
    },
    'Field decorators: Basic (static field)': () => {
        const dec = (key) => (value, ctx) => {
            assertEq(() => value, undefined);
            assertEq(() => ctx.kind, 'field');
            assertEq(() => ctx.name, key);
            assertEq(() => ctx.static, true);
            assertEq(() => ctx.private, false);
            assertEq(() => ctx.access.has({ [key]: false }), true);
            assertEq(() => ctx.access.has({ bar: true }), false);
            assertEq(() => ctx.access.get({ [key]: 123 }), 123);
            assertEq(() => {
                const obj = {};
                ctx.access.set(obj, 321);
                return obj[key];
            }, 321);
        };
        const bar = Symbol('bar');
        const baz = Symbol();
        class Foo {
            @dec('foo')
            static foo = 123;
            @dec(bar)
            static [bar] = 123;
            @dec(baz)
            static [baz] = 123;
        }
        assertEq(() => Foo.foo, 123);
        assertEq(() => Foo[bar], 123);
        assertEq(() => Foo[baz], 123);
    },
    'Field decorators: Basic (private instance field)': () => {
        let lateAsserts;
        const dec = (value, ctx) => {
            assertEq(() => value, undefined);
            assertEq(() => ctx.kind, 'field');
            assertEq(() => ctx.name, '#foo');
            assertEq(() => ctx.static, false);
            assertEq(() => ctx.private, true);
            lateAsserts = () => {
                assertEq(() => ctx.access.has(new Foo), true);
                assertEq(() => ctx.access.has({}), false);
                assertEq(() => ctx.access.get(new Foo), 123);
                assertEq(() => {
                    const obj = new Foo;
                    ctx.access.set(obj, 321);
                    return get$foo(obj);
                }, 321);
            };
        };
        let get$foo;
        class Foo {
            @dec
            #foo = 123;
            static { get$foo = x => x.#foo; }
        }
        assertEq(() => get$foo(new Foo()), 123);
        lateAsserts();
    },
    'Field decorators: Basic (private static field)': () => {
        let lateAsserts;
        const dec = (value, ctx) => {
            assertEq(() => value, undefined);
            assertEq(() => ctx.kind, 'field');
            assertEq(() => ctx.name, '#foo');
            assertEq(() => ctx.static, true);
            assertEq(() => ctx.private, true);
            lateAsserts = () => {
                assertEq(() => ctx.access.has(Foo), true);
                assertEq(() => ctx.access.has({}), false);
                assertEq(() => ctx.access.get(Foo), 123);
                assertEq(() => {
                    ctx.access.set(Foo, 321);
                    return get$foo(Foo);
                }, 321);
            };
        };
        let get$foo;
        class Foo {
            @dec
            static #foo = 123;
            static { get$foo = x => x.#foo; }
        }
        assertEq(() => get$foo(Foo), 123);
        lateAsserts();
    },
    'Field decorators: Shim (instance field)': () => {
        let log = [];
        const dec = (value, ctx) => {
            return function (x) {
                assertEq(() => this instanceof Foo, true);
                return log.push('foo' in this, 'bar' in this, x);
            };
        };
        class Foo {
            @dec
            foo = 123;
            @dec
            bar;
        }
        assertEq(() => log + '', '');
        var obj = new Foo;
        assertEq(() => obj.foo, 3);
        assertEq(() => obj.bar, 6);
        assertEq(() => log + '', 'false,false,123,true,false,');
    },
    'Field decorators: Shim (static field)': () => {
        let foo;
        let log = [];
        const dec = (value, ctx) => {
            return function (x) {
                assertEq(() => this, foo);
                return log.push('foo' in this, 'bar' in this, x);
            };
        };
        assertEq(() => log + '', '');
        class Foo {
            static {
                foo = Foo;
            }
            @dec
            static foo = 123;
            @dec
            static bar;
        }
        assertEq(() => Foo.foo, 3);
        assertEq(() => Foo.bar, 6);
        assertEq(() => log + '', 'false,false,123,true,false,');
    },
    'Field decorators: Shim (private instance field)': () => {
        let log = [];
        const dec = (value, ctx) => {
            return function (x) {
                assertEq(() => this instanceof Foo, true);
                return log.push(has$foo(this), has$bar(this), x);
            };
        };
        let has$foo;
        let has$bar;
        let get$foo;
        let get$bar;
        class Foo {
            @dec
            #foo = 123;
            @dec
            #bar;
            static {
                has$foo = x => #foo in x;
                has$bar = x => #bar in x;
                get$foo = x => x.#foo;
                get$bar = x => x.#bar;
            }
        }
        assertEq(() => log + '', '');
        var obj = new Foo;
        assertEq(() => get$foo(obj), 3);
        assertEq(() => get$bar(obj), 6);
        assertEq(() => log + '', 'false,false,123,true,false,');
    },
    'Field decorators: Shim (private static field)': () => {
        let foo;
        let log = [];
        const dec = (value, ctx) => {
            return function (x) {
                assertEq(() => this, foo);
                return log.push(has$foo(this), has$bar(this), x);
            };
        };
        assertEq(() => log + '', '');
        let has$foo;
        let has$bar;
        let get$foo;
        let get$bar;
        class Foo {
            static {
                foo = Foo;
                has$foo = x => #foo in x;
                has$bar = x => #bar in x;
                get$foo = x => x.#foo;
                get$bar = x => x.#bar;
            }
            @dec
            static #foo = 123;
            @dec
            static #bar;
        }
        assertEq(() => get$foo(Foo), 3);
        assertEq(() => get$bar(Foo), 6);
        assertEq(() => log + '', 'false,false,123,true,false,');
    },
    'Field decorators: Order (instance field)': () => {
        const log = [];
        const dec1 = (value, ctx) => {
            log.push(2);
            return () => log.push(4);
        };
        const dec2 = (value, ctx) => {
            log.push(1);
            return () => log.push(5);
        };
        log.push(0);
        class Foo {
            @dec1
            @dec2
            foo = 123;
        }
        log.push(3);
        var obj = new Foo();
        log.push(6);
        assertEq(() => obj.foo, 6);
        assertEq(() => log + '', '0,1,2,3,4,5,6');
    },
    'Field decorators: Order (static field)': () => {
        const log = [];
        const dec1 = (value, ctx) => {
            log.push(2);
            return () => log.push(3);
        };
        const dec2 = (value, ctx) => {
            log.push(1);
            return () => log.push(4);
        };
        log.push(0);
        class Foo {
            @dec1
            @dec2
            static foo = 123;
        }
        log.push(5);
        assertEq(() => Foo.foo, 5);
        assertEq(() => log + '', '0,1,2,3,4,5');
    },
    'Field decorators: Order (private instance field)': () => {
        const log = [];
        const dec1 = (value, ctx) => {
            log.push(2);
            return () => log.push(4);
        };
        const dec2 = (value, ctx) => {
            log.push(1);
            return () => log.push(5);
        };
        log.push(0);
        let get$foo;
        class Foo {
            @dec1
            @dec2
            #foo = 123;
            static { get$foo = x => x.#foo; }
        }
        log.push(3);
        var obj = new Foo();
        log.push(6);
        assertEq(() => get$foo(obj), 6);
        assertEq(() => log + '', '0,1,2,3,4,5,6');
    },
    'Field decorators: Order (private static field)': () => {
        const log = [];
        const dec1 = (value, ctx) => {
            log.push(2);
            return () => log.push(3);
        };
        const dec2 = (value, ctx) => {
            log.push(1);
            return () => log.push(4);
        };
        log.push(0);
        let get$foo;
        class Foo {
            @dec1
            @dec2
            static #foo = 123;
            static { get$foo = x => x.#foo; }
        }
        log.push(5);
        assertEq(() => get$foo(Foo), 5);
        assertEq(() => log + '', '0,1,2,3,4,5');
    },
    'Field decorators: Return null (instance field)': () => {
        assertThrows(() => {
            const dec = (value, ctx) => {
                return null;
            };
            class Foo {
                @dec
                foo;
            }
        }, TypeError);
    },
    'Field decorators: Return null (static field)': () => {
        assertThrows(() => {
            const dec = (value, ctx) => {
                return null;
            };
            class Foo {
                @dec
                static foo;
            }
        }, TypeError);
    },
    'Field decorators: Return null (private instance field)': () => {
        assertThrows(() => {
            const dec = (value, ctx) => {
                return null;
            };
            class Foo {
                @dec
                #foo;
            }
        }, TypeError);
    },
    'Field decorators: Return null (private static field)': () => {
        assertThrows(() => {
            const dec = (value, ctx) => {
                return null;
            };
            class Foo {
                @dec
                static #foo;
            }
        }, TypeError);
    },
    'Field decorators: Return object (instance field)': () => {
        assertThrows(() => {
            const dec = (value, ctx) => {
                return {};
            };
            class Foo {
                @dec
                foo;
            }
        }, TypeError);
    },
    'Field decorators: Return object (static field)': () => {
        assertThrows(() => {
            const dec = (value, ctx) => {
                return {};
            };
            class Foo {
                @dec
                static foo;
            }
        }, TypeError);
    },
    'Field decorators: Return object (private instance field)': () => {
        assertThrows(() => {
            const dec = (value, ctx) => {
                return {};
            };
            class Foo {
                @dec
                #foo;
            }
        }, TypeError);
    },
    'Field decorators: Return object (private static field)': () => {
        assertThrows(() => {
            const dec = (value, ctx) => {
                return {};
            };
            class Foo {
                @dec
                static #foo;
            }
        }, TypeError);
    },
    'Field decorators: Extra initializer (instance field)': () => {
        let oldAddInitializer;
        let got;
        const dec = (value, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            foo;
        }
        assertEq(() => got, undefined);
        const instance = new Foo;
        assertEq(() => got.this, instance);
        assertEq(() => got.args.length, 0);
    },
    'Field decorators: Extra initializer (static field)': () => {
        let oldAddInitializer;
        let got;
        const dec = (value, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            static foo;
        }
        assertEq(() => got.this, Foo);
        assertEq(() => got.args.length, 0);
    },
    'Field decorators: Extra initializer (private instance field)': () => {
        let oldAddInitializer;
        let got;
        const dec = (value, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            #foo;
        }
        assertEq(() => got, undefined);
        const instance = new Foo;
        assertEq(() => got.this, instance);
        assertEq(() => got.args.length, 0);
    },
    'Field decorators: Extra initializer (private static field)': () => {
        let oldAddInitializer;
        let got;
        const dec = (value, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            static #foo;
        }
        assertEq(() => got.this, Foo);
        assertEq(() => got.args.length, 0);
    },
    // Getter decorators
    'Getter decorators: Basic (instance getter)': () => {
        const dec = (key, name) => (fn, ctx) => {
            assertEq(() => typeof fn, 'function');
            assertEq(() => fn.name, name);
            assertEq(() => ctx.kind, 'getter');
            assertEq(() => ctx.name, key);
            assertEq(() => ctx.static, false);
            assertEq(() => ctx.private, false);
            assertEq(() => ctx.access.has({ [key]: false }), true);
            assertEq(() => ctx.access.has({ bar: true }), false);
            assertEq(() => ctx.access.get({ [key]: 123 }), 123);
            assertEq(() => 'set' in ctx.access, false);
        };
        const bar = Symbol('bar');
        const baz = Symbol();
        class Foo {
            bar = 123;
            @dec('foo', 'get foo')
            get foo() { return this.bar; }
            @dec(bar, 'get [bar]')
            get [bar]() { return this.bar; }
            @dec(baz, 'get ')
            get [baz]() { return this.bar; }
        }
        assertEq(() => new Foo().foo, 123);
        assertEq(() => new Foo()[bar], 123);
        assertEq(() => new Foo()[baz], 123);
    },
    'Getter decorators: Basic (static getter)': () => {
        const dec = (key, name) => (fn, ctx) => {
            assertEq(() => typeof fn, 'function');
            assertEq(() => fn.name, name);
            assertEq(() => ctx.kind, 'getter');
            assertEq(() => ctx.name, key);
            assertEq(() => ctx.static, true);
            assertEq(() => ctx.private, false);
            assertEq(() => ctx.access.has({ [key]: false }), true);
            assertEq(() => ctx.access.has({ bar: true }), false);
            assertEq(() => ctx.access.get({ [key]: 123 }), 123);
            assertEq(() => 'set' in ctx.access, false);
        };
        const bar = Symbol('bar');
        const baz = Symbol();
        class Foo {
            static bar = 123;
            @dec('foo', 'get foo')
            static get foo() { return this.bar; }
            @dec(bar, 'get [bar]')
            static get [bar]() { return this.bar; }
            @dec(baz, 'get ')
            static get [baz]() { return this.bar; }
        }
        assertEq(() => Foo.foo, 123);
        assertEq(() => Foo[bar], 123);
        assertEq(() => Foo[baz], 123);
    },
    'Getter decorators: Basic (private instance getter)': () => {
        let lateAsserts;
        const dec = (fn, ctx) => {
            assertEq(() => typeof fn, 'function');
            assertEq(() => fn.name, 'get #foo');
            assertEq(() => ctx.kind, 'getter');
            assertEq(() => ctx.name, '#foo');
            assertEq(() => ctx.static, false);
            assertEq(() => ctx.private, true);
            lateAsserts = () => {
                assertEq(() => ctx.access.has(new Foo), true);
                assertEq(() => ctx.access.has({}), false);
                assertEq(() => ctx.access.get(new Foo), 123);
                assertEq(() => 'set' in ctx.access, false);
            };
        };
        let get$foo;
        class Foo {
            #bar = 123;
            @dec
            get #foo() { return this.#bar; }
            static { get$foo = x => x.#foo; }
        }
        assertEq(() => get$foo(new Foo), 123);
        lateAsserts();
    },
    'Getter decorators: Basic (private static getter)': () => {
        let lateAsserts;
        const dec = (fn, ctx) => {
            assertEq(() => typeof fn, 'function');
            assertEq(() => fn.name, 'get #foo');
            assertEq(() => ctx.kind, 'getter');
            assertEq(() => ctx.name, '#foo');
            assertEq(() => ctx.static, true);
            assertEq(() => ctx.private, true);
            lateAsserts = () => {
                assertEq(() => ctx.access.has(Foo), true);
                assertEq(() => ctx.access.has({}), false);
                assertEq(() => ctx.access.get(Foo), 123);
                assertEq(() => 'set' in ctx.access, false);
            };
        };
        let get$foo;
        class Foo {
            static #bar = 123;
            @dec
            static get #foo() { return this.#bar; }
            static { get$foo = x => x.#foo; }
        }
        assertEq(() => get$foo(Foo), 123);
        lateAsserts();
    },
    'Getter decorators: Shim (instance getter)': () => {
        let bar;
        const dec = (fn, ctx) => {
            bar = function () { return fn.call(this) + 1; };
            return bar;
        };
        class Foo {
            bar = 123;
            @dec
            get foo() { return this.bar; }
        }
        assertEq(() => Object.getOwnPropertyDescriptor(Foo.prototype, 'foo').get, bar);
        assertEq(() => new Foo().foo, 124);
    },
    'Getter decorators: Shim (static getter)': () => {
        let bar;
        const dec = (fn, ctx) => {
            bar = function () { return fn.call(this) + 1; };
            return bar;
        };
        class Foo {
            static bar = 123;
            @dec
            static get foo() { return this.bar; }
        }
        assertEq(() => Object.getOwnPropertyDescriptor(Foo, 'foo').get, bar);
        assertEq(() => Foo.foo, 124);
    },
    'Getter decorators: Shim (private instance getter)': () => {
        let bar;
        const dec = (fn, ctx) => {
            bar = function () { return fn.call(this) + 1; };
            return bar;
        };
        let get$foo;
        class Foo {
            #bar = 123;
            @dec
            get #foo() { return this.#bar; }
            static { get$foo = x => x.#foo; }
        }
        assertEq(() => get$foo(new Foo), 124);
    },
    'Getter decorators: Shim (private static getter)': () => {
        let bar;
        const dec = (fn, ctx) => {
            bar = function () { return fn.call(this) + 1; };
            return bar;
        };
        let get$foo;
        class Foo {
            static #bar = 123;
            @dec
            static get #foo() { return this.#bar; }
            static { get$foo = x => x.#foo; }
        }
        assertEq(() => get$foo(Foo), 124);
    },
    'Getter decorators: Order (instance getter)': () => {
        const log = [];
        let bar;
        let baz;
        const dec1 = (fn, ctx) => {
            log.push(2);
            bar = function () {
                log.push(4);
                return fn.call(this);
            };
            return bar;
        };
        const dec2 = (fn, ctx) => {
            log.push(1);
            baz = function () {
                log.push(5);
                return fn.call(this);
            };
            return baz;
        };
        log.push(0);
        class Foo {
            @dec1
            @dec2
            get foo() { return log.push(6); }
        }
        log.push(3);
        new Foo().foo;
        log.push(7);
        assertEq(() => Object.getOwnPropertyDescriptor(Foo.prototype, 'foo').get, bar);
        assertEq(() => log + '', '0,1,2,3,4,5,6,7');
    },
    'Getter decorators: Order (static getter)': () => {
        const log = [];
        let bar;
        let baz;
        const dec1 = (fn, ctx) => {
            log.push(2);
            bar = function () {
                log.push(4);
                return fn.call(this);
            };
            return bar;
        };
        const dec2 = (fn, ctx) => {
            log.push(1);
            baz = function () {
                log.push(5);
                return fn.call(this);
            };
            return baz;
        };
        log.push(0);
        class Foo {
            @dec1
            @dec2
            static get foo() { return log.push(6); }
        }
        log.push(3);
        Foo.foo;
        log.push(7);
        assertEq(() => Object.getOwnPropertyDescriptor(Foo, 'foo').get, bar);
        assertEq(() => log + '', '0,1,2,3,4,5,6,7');
    },
    'Getter decorators: Order (private instance getter)': () => {
        const log = [];
        let bar;
        let baz;
        const dec1 = (fn, ctx) => {
            log.push(2);
            bar = function () {
                log.push(4);
                return fn.call(this);
            };
            return bar;
        };
        const dec2 = (fn, ctx) => {
            log.push(1);
            baz = function () {
                log.push(5);
                return fn.call(this);
            };
            return baz;
        };
        log.push(0);
        let get$foo;
        class Foo {
            @dec1
            @dec2
            get #foo() { return log.push(6); }
            static { get$foo = x => x.#foo; }
        }
        log.push(3);
        assertEq(() => get$foo(new Foo), 7);
        log.push(7);
        assertEq(() => log + '', '0,1,2,3,4,5,6,7');
    },
    'Getter decorators: Order (private static getter)': () => {
        const log = [];
        let bar;
        let baz;
        const dec1 = (fn, ctx) => {
            log.push(2);
            bar = function () {
                log.push(4);
                return fn.call(this);
            };
            return bar;
        };
        const dec2 = (fn, ctx) => {
            log.push(1);
            baz = function () {
                log.push(5);
                return fn.call(this);
            };
            return baz;
        };
        log.push(0);
        let get$foo;
        class Foo {
            @dec1
            @dec2
            static get #foo() { return log.push(6); }
            static { get$foo = x => x.#foo; }
        }
        log.push(3);
        assertEq(() => get$foo(Foo), 7);
        log.push(7);
        assertEq(() => log + '', '0,1,2,3,4,5,6,7');
    },
    'Getter decorators: Return null (instance getter)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return null;
            };
            class Foo {
                @dec
                get foo() { return; }
            }
        }, TypeError);
    },
    'Getter decorators: Return null (static getter)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return null;
            };
            class Foo {
                @dec
                static get foo() { return; }
            }
        }, TypeError);
    },
    'Getter decorators: Return null (private instance getter)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return null;
            };
            class Foo {
                @dec
                get #foo() { return; }
            }
        }, TypeError);
    },
    'Getter decorators: Return null (private static getter)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return null;
            };
            class Foo {
                @dec
                static get #foo() { return; }
            }
        }, TypeError);
    },
    'Getter decorators: Return object (instance getter)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return {};
            };
            class Foo {
                @dec
                get foo() { return; }
            }
        }, TypeError);
    },
    'Getter decorators: Return object (static getter)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return {};
            };
            class Foo {
                @dec
                static get foo() { return; }
            }
        }, TypeError);
    },
    'Getter decorators: Return object (private instance getter)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return {};
            };
            class Foo {
                @dec
                get #foo() { return; }
            }
        }, TypeError);
    },
    'Getter decorators: Return object (private static getter)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return {};
            };
            class Foo {
                @dec
                static get #foo() { return; }
            }
        }, TypeError);
    },
    'Getter decorators: Extra initializer (instance getter)': () => {
        let oldAddInitializer;
        let got;
        const dec = (fn, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            get foo() { return; }
        }
        assertEq(() => got, undefined);
        const instance = new Foo;
        assertEq(() => got.this, instance);
        assertEq(() => got.args.length, 0);
    },
    'Getter decorators: Extra initializer (static getter)': () => {
        let oldAddInitializer;
        let got;
        const dec = (fn, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            static get foo() { return; }
        }
        assertEq(() => got.this, Foo);
        assertEq(() => got.args.length, 0);
    },
    'Getter decorators: Extra initializer (private instance getter)': () => {
        let oldAddInitializer;
        let got;
        const dec = (fn, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            get #foo() { return; }
        }
        assertEq(() => got, undefined);
        const instance = new Foo;
        assertEq(() => got.this, instance);
        assertEq(() => got.args.length, 0);
    },
    'Getter decorators: Extra initializer (private static getter)': () => {
        let oldAddInitializer;
        let got;
        const dec = (fn, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            static get #foo() { return; }
        }
        assertEq(() => got.this, Foo);
        assertEq(() => got.args.length, 0);
    },
    // Setter decorators
    'Setter decorators: Basic (instance setter)': () => {
        const dec = (key, name) => (fn, ctx) => {
            assertEq(() => typeof fn, 'function');
            assertEq(() => fn.name, name);
            assertEq(() => ctx.kind, 'setter');
            assertEq(() => ctx.name, key);
            assertEq(() => ctx.static, false);
            assertEq(() => ctx.private, false);
            assertEq(() => ctx.access.has({ [key]: false }), true);
            assertEq(() => ctx.access.has({ bar: true }), false);
            assertEq(() => 'get' in ctx.access, false);
            const obj = {};
            ctx.access.set(obj, 123);
            assertEq(() => obj[key], 123);
            assertEq(() => 'bar' in obj, false);
        };
        const bar = Symbol('bar');
        const baz = Symbol();
        class Foo {
            bar = 0;
            @dec('foo', 'set foo')
            set foo(x) { this.bar = x; }
            @dec(bar, 'set [bar]')
            set [bar](x) { this.bar = x; }
            @dec(baz, 'set ')
            set [baz](x) { this.bar = x; }
        }
        var obj = new Foo;
        obj.foo = 321;
        assertEq(() => obj.bar, 321);
        obj[bar] = 4321;
        assertEq(() => obj.bar, 4321);
        obj[baz] = 54321;
        assertEq(() => obj.bar, 54321);
    },
    'Setter decorators: Basic (static setter)': () => {
        const dec = (key, name) => (fn, ctx) => {
            assertEq(() => typeof fn, 'function');
            assertEq(() => fn.name, name);
            assertEq(() => ctx.kind, 'setter');
            assertEq(() => ctx.name, key);
            assertEq(() => ctx.static, true);
            assertEq(() => ctx.private, false);
            assertEq(() => ctx.access.has({ [key]: false }), true);
            assertEq(() => ctx.access.has({ bar: true }), false);
            assertEq(() => 'get' in ctx.access, false);
            const obj = {};
            ctx.access.set(obj, 123);
            assertEq(() => obj[key], 123);
            assertEq(() => 'bar' in obj, false);
        };
        const bar = Symbol('bar');
        const baz = Symbol();
        class Foo {
            static bar = 0;
            @dec('foo', 'set foo')
            static set foo(x) { this.bar = x; }
            @dec(bar, 'set [bar]')
            static set [bar](x) { this.bar = x; }
            @dec(baz, 'set ')
            static set [baz](x) { this.bar = x; }
        }
        Foo.foo = 321;
        assertEq(() => Foo.bar, 321);
        Foo[bar] = 4321;
        assertEq(() => Foo.bar, 4321);
        Foo[baz] = 54321;
        assertEq(() => Foo.bar, 54321);
    },
    'Setter decorators: Basic (private instance setter)': () => {
        let lateAsserts;
        const dec = (fn, ctx) => {
            assertEq(() => typeof fn, 'function');
            assertEq(() => fn.name, 'set #foo');
            assertEq(() => ctx.kind, 'setter');
            assertEq(() => ctx.name, '#foo');
            assertEq(() => ctx.static, false);
            assertEq(() => ctx.private, true);
            lateAsserts = () => {
                assertEq(() => ctx.access.has(new Foo), true);
                assertEq(() => ctx.access.has({}), false);
                assertEq(() => 'get' in ctx.access, false);
                assertEq(() => {
                    const obj = new Foo;
                    ctx.access.set(obj, 123);
                    return obj.bar;
                }, 123);
            };
        };
        let set$foo;
        class Foo {
            bar = 0;
            @dec
            set #foo(x) { this.bar = x; }
            static { set$foo = (x, y) => { x.#foo = y; }; }
        }
        lateAsserts();
        var obj = new Foo;
        assertEq(() => set$foo(obj, 321), undefined);
        assertEq(() => obj.bar, 321);
    },
    'Setter decorators: Basic (private static setter)': () => {
        let lateAsserts;
        const dec = (fn, ctx) => {
            assertEq(() => typeof fn, 'function');
            assertEq(() => fn.name, 'set #foo');
            assertEq(() => ctx.kind, 'setter');
            assertEq(() => ctx.name, '#foo');
            assertEq(() => ctx.static, true);
            assertEq(() => ctx.private, true);
            lateAsserts = () => {
                assertEq(() => ctx.access.has(Foo), true);
                assertEq(() => ctx.access.has({}), false);
                assertEq(() => 'get' in ctx.access, false);
                assertEq(() => {
                    ctx.access.set(Foo, 123);
                    return Foo.bar;
                }, 123);
            };
        };
        let set$foo;
        class Foo {
            static bar = 0;
            @dec
            static set #foo(x) { this.bar = x; }
            static { set$foo = (x, y) => { x.#foo = y; }; }
        }
        lateAsserts();
        assertEq(() => set$foo(Foo, 321), undefined);
        assertEq(() => Foo.bar, 321);
    },
    'Setter decorators: Shim (instance setter)': () => {
        let bar;
        const dec = (fn, ctx) => {
            bar = function (x) { fn.call(this, x + 1); };
            return bar;
        };
        class Foo {
            bar = 123;
            @dec
            set foo(x) { this.bar = x; }
        }
        assertEq(() => Object.getOwnPropertyDescriptor(Foo.prototype, 'foo').set, bar);
        var obj = new Foo;
        obj.foo = 321;
        assertEq(() => obj.bar, 322);
    },
    'Setter decorators: Shim (static setter)': () => {
        let bar;
        const dec = (fn, ctx) => {
            bar = function (x) { fn.call(this, x + 1); };
            return bar;
        };
        class Foo {
            static bar = 123;
            @dec
            static set foo(x) { this.bar = x; }
        }
        assertEq(() => Object.getOwnPropertyDescriptor(Foo, 'foo').set, bar);
        Foo.foo = 321;
        assertEq(() => Foo.bar, 322);
    },
    'Setter decorators: Shim (private instance setter)': () => {
        let bar;
        const dec = (fn, ctx) => {
            bar = function (x) { fn.call(this, x + 1); };
            return bar;
        };
        let set$foo;
        class Foo {
            bar = 123;
            @dec
            set #foo(x) { this.bar = x; }
            static { set$foo = (x, y) => { x.#foo = y; }; }
        }
        var obj = new Foo;
        assertEq(() => set$foo(obj, 321), undefined);
        assertEq(() => obj.bar, 322);
    },
    'Setter decorators: Shim (private static setter)': () => {
        let bar;
        const dec = (fn, ctx) => {
            bar = function (x) { fn.call(this, x + 1); };
            return bar;
        };
        let set$foo;
        class Foo {
            static bar = 123;
            @dec
            static set #foo(x) { this.bar = x; }
            static { set$foo = (x, y) => { x.#foo = y; }; }
        }
        assertEq(() => set$foo(Foo, 321), undefined);
        assertEq(() => Foo.bar, 322);
    },
    'Setter decorators: Order (instance setter)': () => {
        const log = [];
        let bar;
        let baz;
        const dec1 = (fn, ctx) => {
            log.push(2);
            bar = function (x) {
                log.push(4);
                fn.call(this, x);
            };
            return bar;
        };
        const dec2 = (fn, ctx) => {
            log.push(1);
            baz = function (x) {
                log.push(5);
                fn.call(this, x);
            };
            return baz;
        };
        log.push(0);
        class Foo {
            @dec1
            @dec2
            set foo(x) { log.push(6); }
        }
        log.push(3);
        new Foo().foo = 123;
        log.push(7);
        assertEq(() => Object.getOwnPropertyDescriptor(Foo.prototype, 'foo').set, bar);
        assertEq(() => log + '', '0,1,2,3,4,5,6,7');
    },
    'Setter decorators: Order (static setter)': () => {
        const log = [];
        let bar;
        let baz;
        const dec1 = (fn, ctx) => {
            log.push(2);
            bar = function (x) {
                log.push(4);
                fn.call(this, x);
            };
            return bar;
        };
        const dec2 = (fn, ctx) => {
            log.push(1);
            baz = function (x) {
                log.push(5);
                fn.call(this, x);
            };
            return baz;
        };
        log.push(0);
        class Foo {
            @dec1
            @dec2
            static set foo(x) { log.push(6); }
        }
        log.push(3);
        Foo.foo = 123;
        log.push(7);
        assertEq(() => Object.getOwnPropertyDescriptor(Foo, 'foo').set, bar);
        assertEq(() => log + '', '0,1,2,3,4,5,6,7');
    },
    'Setter decorators: Order (private instance setter)': () => {
        const log = [];
        let bar;
        let baz;
        const dec1 = (fn, ctx) => {
            log.push(2);
            bar = function (x) {
                log.push(4);
                fn.call(this, x);
            };
            return bar;
        };
        const dec2 = (fn, ctx) => {
            log.push(1);
            baz = function (x) {
                log.push(5);
                fn.call(this, x);
            };
            return baz;
        };
        log.push(0);
        let set$foo;
        class Foo {
            @dec1
            @dec2
            set #foo(x) { log.push(6); }
            static { set$foo = (x, y) => { x.#foo = y; }; }
        }
        log.push(3);
        assertEq(() => set$foo(new Foo, 123), undefined);
        log.push(7);
        assertEq(() => log + '', '0,1,2,3,4,5,6,7');
    },
    'Setter decorators: Order (private static setter)': () => {
        const log = [];
        let bar;
        let baz;
        const dec1 = (fn, ctx) => {
            log.push(2);
            bar = function (x) {
                log.push(4);
                fn.call(this, x);
            };
            return bar;
        };
        const dec2 = (fn, ctx) => {
            log.push(1);
            baz = function (x) {
                log.push(5);
                fn.call(this, x);
            };
            return baz;
        };
        log.push(0);
        let set$foo;
        class Foo {
            @dec1
            @dec2
            static set #foo(x) { log.push(6); }
            static { set$foo = (x, y) => { x.#foo = y; }; }
        }
        log.push(3);
        assertEq(() => set$foo(Foo, 123), undefined);
        log.push(7);
        assertEq(() => log + '', '0,1,2,3,4,5,6,7');
    },
    'Setter decorators: Return null (instance setter)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return null;
            };
            class Foo {
                @dec
                set foo(x) { }
            }
        }, TypeError);
    },
    'Setter decorators: Return null (static setter)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return null;
            };
            class Foo {
                @dec
                static set foo(x) { }
            }
        }, TypeError);
    },
    'Setter decorators: Return null (private instance setter)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return null;
            };
            class Foo {
                @dec
                set #foo(x) { }
            }
        }, TypeError);
    },
    'Setter decorators: Return null (private static setter)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return null;
            };
            class Foo {
                @dec
                static set #foo(x) { }
            }
        }, TypeError);
    },
    'Setter decorators: Return object (instance setter)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return {};
            };
            class Foo {
                @dec
                set foo(x) { }
            }
        }, TypeError);
    },
    'Setter decorators: Return object (static setter)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return {};
            };
            class Foo {
                @dec
                static set foo(x) { }
            }
        }, TypeError);
    },
    'Setter decorators: Return object (private instance setter)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return {};
            };
            class Foo {
                @dec
                set #foo(x) { }
            }
        }, TypeError);
    },
    'Setter decorators: Return object (private static setter)': () => {
        assertThrows(() => {
            const dec = (fn, ctx) => {
                return {};
            };
            class Foo {
                @dec
                static set #foo(x) { }
            }
        }, TypeError);
    },
    'Setter decorators: Extra initializer (instance setter)': () => {
        let oldAddInitializer;
        let got;
        const dec = (fn, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            set foo(x) { }
        }
        assertEq(() => got, undefined);
        const instance = new Foo;
        assertEq(() => got.this, instance);
        assertEq(() => got.args.length, 0);
    },
    'Setter decorators: Extra initializer (static setter)': () => {
        let oldAddInitializer;
        let got;
        const dec = (fn, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            static set foo(x) { }
        }
        assertEq(() => got.this, Foo);
        assertEq(() => got.args.length, 0);
    },
    'Setter decorators: Extra initializer (private instance setter)': () => {
        let oldAddInitializer;
        let got;
        const dec = (fn, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            set #foo(x) { }
        }
        assertEq(() => got, undefined);
        const instance = new Foo;
        assertEq(() => got.this, instance);
        assertEq(() => got.args.length, 0);
    },
    'Setter decorators: Extra initializer (private static setter)': () => {
        let oldAddInitializer;
        let got;
        const dec = (fn, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            static set #foo(x) { }
        }
        assertEq(() => got.this, Foo);
        assertEq(() => got.args.length, 0);
    },
    // Auto-accessor decorators
    'Auto-accessor decorators: Basic (instance auto-accessor)': () => {
        const dec = (key, getName, setName) => (target, ctx) => {
            assertEq(() => typeof target.get, 'function');
            assertEq(() => typeof target.set, 'function');
            assertEq(() => target.get.name, getName);
            assertEq(() => target.set.name, setName);
            assertEq(() => ctx.kind, 'accessor');
            assertEq(() => ctx.name, key);
            assertEq(() => ctx.static, false);
            assertEq(() => ctx.private, false);
            assertEq(() => ctx.access.has({ [key]: false }), true);
            assertEq(() => ctx.access.has({ bar: true }), false);
            assertEq(() => ctx.access.get({ [key]: 123 }), 123);
            assertEq(() => {
                const obj = {};
                ctx.access.set(obj, 123);
                return obj[key];
            }, 123);
        };
        const bar = Symbol('bar');
        const baz = Symbol();
        class Foo {
            @dec('foo', 'get foo', 'set foo')
            accessor foo = 0;
            @dec(bar, 'get [bar]', 'set [bar]')
            accessor [bar] = 0;
            @dec(baz, 'get ', 'set ')
            accessor [baz] = 0;
        }
        var obj = new Foo;
        obj.foo = 321;
        assertEq(() => obj.foo, 321);
        obj[bar] = 4321;
        assertEq(() => obj[bar], 4321);
        obj[baz] = 54321;
        assertEq(() => obj[baz], 54321);
    },
    'Auto-accessor decorators: Basic (static auto-accessor)': () => {
        const dec = (key, getName, setName) => (target, ctx) => {
            assertEq(() => typeof target.get, 'function');
            assertEq(() => typeof target.set, 'function');
            assertEq(() => target.get.name, getName);
            assertEq(() => target.set.name, setName);
            assertEq(() => ctx.kind, 'accessor');
            assertEq(() => ctx.name, key);
            assertEq(() => ctx.static, true);
            assertEq(() => ctx.private, false);
            assertEq(() => ctx.access.has({ [key]: false }), true);
            assertEq(() => ctx.access.has({ bar: true }), false);
            assertEq(() => ctx.access.get({ [key]: 123 }), 123);
            assertEq(() => {
                const obj = {};
                ctx.access.set(obj, 123);
                return obj[key];
            }, 123);
        };
        const bar = Symbol('bar');
        const baz = Symbol();
        class Foo {
            @dec('foo', 'get foo', 'set foo')
            static accessor foo = 0;
            @dec(bar, 'get [bar]', 'set [bar]')
            static accessor [bar] = 0;
            @dec(baz, 'get ', 'set ')
            static accessor [baz] = 0;
        }
        Foo.foo = 321;
        assertEq(() => Foo.foo, 321);
        Foo[bar] = 4321;
        assertEq(() => Foo[bar], 4321);
        Foo[baz] = 54321;
        assertEq(() => Foo[baz], 54321);
    },
    'Auto-accessor decorators: Basic (private instance auto-accessor)': () => {
        let lateAsserts;
        const dec = (target, ctx) => {
            assertEq(() => typeof target.get, 'function');
            assertEq(() => typeof target.set, 'function');
            assertEq(() => target.get.name, 'get #foo');
            assertEq(() => target.set.name, 'set #foo');
            assertEq(() => ctx.kind, 'accessor');
            assertEq(() => ctx.name, '#foo');
            assertEq(() => ctx.static, false);
            assertEq(() => ctx.private, true);
            lateAsserts = () => {
                assertEq(() => ctx.access.has(new Foo), true);
                assertEq(() => ctx.access.has({}), false);
                assertEq(() => ctx.access.get(new Foo), 0);
                assertEq(() => {
                    const obj = new Foo;
                    ctx.access.set(obj, 123);
                    return get$foo(obj);
                }, 123);
            };
        };
        let get$foo;
        let set$foo;
        class Foo {
            @dec
            accessor #foo = 0;
            static {
                get$foo = x => x.#foo;
                set$foo = (x, y) => { x.#foo = y; };
            }
        }
        lateAsserts();
        var obj = new Foo;
        assertEq(() => set$foo(obj, 321), undefined);
        assertEq(() => get$foo(obj), 321);
    },
    'Auto-accessor decorators: Basic (private static auto-accessor)': () => {
        let lateAsserts;
        const dec = (target, ctx) => {
            assertEq(() => typeof target.get, 'function');
            assertEq(() => typeof target.set, 'function');
            assertEq(() => target.get.name, 'get #foo');
            assertEq(() => target.set.name, 'set #foo');
            assertEq(() => ctx.kind, 'accessor');
            assertEq(() => ctx.name, '#foo');
            assertEq(() => ctx.static, true);
            assertEq(() => ctx.private, true);
            lateAsserts = () => {
                assertEq(() => ctx.access.has(Foo), true);
                assertEq(() => ctx.access.has({}), false);
                assertEq(() => ctx.access.get(Foo), 0);
                assertEq(() => {
                    ctx.access.set(Foo, 123);
                    return get$foo(Foo);
                }, 123);
            };
        };
        let get$foo;
        let set$foo;
        class Foo {
            @dec
            static accessor #foo = 0;
            static {
                get$foo = x => x.#foo;
                set$foo = (x, y) => { x.#foo = y; };
            }
        }
        lateAsserts();
        assertEq(() => set$foo(Foo, 321), undefined);
        assertEq(() => get$foo(Foo), 321);
    },
    'Auto-accessor decorators: Shim (instance auto-accessor)': () => {
        let get;
        let set;
        const dec = (target, ctx) => {
            function init(x) {
                assertEq(() => this instanceof Foo, true);
                return x + 1;
            }
            get = function () { return target.get.call(this) * 10; };
            set = function (x) { target.set.call(this, x * 2); };
            return { get, set, init };
        };
        class Foo {
            @dec
            accessor foo = 123;
        }
        assertEq(() => Object.getOwnPropertyDescriptor(Foo.prototype, 'foo').get, get);
        assertEq(() => Object.getOwnPropertyDescriptor(Foo.prototype, 'foo').set, set);
        var obj = new Foo;
        assertEq(() => obj.foo, (123 + 1) * 10);
        obj.foo = 321;
        assertEq(() => obj.foo, (321 * 2) * 10);
    },
    'Auto-accessor decorators: Shim (static auto-accessor)': () => {
        let foo;
        let get;
        let set;
        const dec = (target, ctx) => {
            function init(x) {
                assertEq(() => this, foo);
                return x + 1;
            }
            get = function () { return target.get.call(this) * 10; };
            set = function (x) { target.set.call(this, x * 2); };
            return { get, set, init };
        };
        class Foo {
            static {
                foo = Foo;
            }
            @dec
            static accessor foo = 123;
        }
        assertEq(() => Object.getOwnPropertyDescriptor(Foo, 'foo').get, get);
        assertEq(() => Object.getOwnPropertyDescriptor(Foo, 'foo').set, set);
        assertEq(() => Foo.foo, (123 + 1) * 10);
        Foo.foo = 321;
        assertEq(() => Foo.foo, (321 * 2) * 10);
    },
    'Auto-accessor decorators: Shim (private instance auto-accessor)': () => {
        let get;
        let set;
        const dec = (target, ctx) => {
            function init(x) {
                assertEq(() => this instanceof Foo, true);
                return x + 1;
            }
            get = function () { return target.get.call(this) * 10; };
            set = function (x) { target.set.call(this, x * 2); };
            return { get, set, init };
        };
        let get$foo;
        let set$foo;
        class Foo {
            @dec
            accessor #foo = 123;
            static {
                get$foo = x => x.#foo;
                set$foo = (x, y) => { x.#foo = y; };
            }
        }
        var obj = new Foo;
        assertEq(() => get$foo(obj), (123 + 1) * 10);
        assertEq(() => set$foo(obj, 321), undefined);
        assertEq(() => get$foo(obj), (321 * 2) * 10);
    },
    'Auto-accessor decorators: Shim (private static auto-accessor)': () => {
        let foo;
        let get;
        let set;
        const dec = (target, ctx) => {
            function init(x) {
                assertEq(() => this, foo);
                return x + 1;
            }
            get = function () { return target.get.call(this) * 10; };
            set = function (x) { target.set.call(this, x * 2); };
            return { get, set, init };
        };
        let get$foo;
        let set$foo;
        class Foo {
            static {
                foo = Foo;
                get$foo = x => x.#foo;
                set$foo = (x, y) => { x.#foo = y; };
            }
            @dec
            static accessor #foo = 123;
        }
        assertEq(() => get$foo(Foo), (123 + 1) * 10);
        assertEq(() => set$foo(Foo, 321), undefined);
        assertEq(() => get$foo(Foo), (321 * 2) * 10);
    },
    'Auto-accessor decorators: Return null (instance auto-accessor)': () => {
        assertThrows(() => {
            const dec = (target, ctx) => {
                return null;
            };
            class Foo {
                @dec
                accessor foo;
            }
        }, TypeError);
    },
    'Auto-accessor decorators: Return null (static auto-accessor)': () => {
        assertThrows(() => {
            const dec = (target, ctx) => {
                return null;
            };
            class Foo {
                @dec
                static accessor foo;
            }
        }, TypeError);
    },
    'Auto-accessor decorators: Return null (private instance auto-accessor)': () => {
        assertThrows(() => {
            const dec = (target, ctx) => {
                return null;
            };
            class Foo {
                @dec
                accessor #foo;
            }
        }, TypeError);
    },
    'Auto-accessor decorators: Return null (private static auto-accessor)': () => {
        assertThrows(() => {
            const dec = (target, ctx) => {
                return null;
            };
            class Foo {
                @dec
                static accessor #foo;
            }
        }, TypeError);
    },
    'Auto-accessor decorators: Extra initializer (instance auto-accessor)': () => {
        let oldAddInitializer;
        let got;
        const dec = (target, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            accessor foo;
        }
        assertEq(() => got, undefined);
        const instance = new Foo;
        assertEq(() => got.this, instance);
        assertEq(() => got.args.length, 0);
    },
    'Auto-accessor decorators: Extra initializer (static auto-accessor)': () => {
        let oldAddInitializer;
        let got;
        const dec = (target, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            static accessor foo;
        }
        assertEq(() => got.this, Foo);
        assertEq(() => got.args.length, 0);
    },
    'Auto-accessor decorators: Extra initializer (private instance auto-accessor)': () => {
        let oldAddInitializer;
        let got;
        const dec = (target, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            accessor #foo;
        }
        assertEq(() => got, undefined);
        const instance = new Foo;
        assertEq(() => got.this, instance);
        assertEq(() => got.args.length, 0);
    },
    'Auto-accessor decorators: Extra initializer (private static auto-accessor)': () => {
        let oldAddInitializer;
        let got;
        const dec = (target, ctx) => {
            ctx.addInitializer(function (...args) {
                got = { this: this, args };
            });
            if (oldAddInitializer)
                assertThrows(() => oldAddInitializer(() => { }), TypeError);
            assertThrows(() => ctx.addInitializer({}), TypeError);
            oldAddInitializer = ctx.addInitializer;
        };
        class Foo {
            @dec
            @dec
            static accessor #foo;
        }
        assertEq(() => got.this, Foo);
        assertEq(() => got.args.length, 0);
    },
    // Decorator list evaluation
    'Decorator list evaluation: Computed names (class statement)': () => {
        const log = [];
        const foo = (n) => {
            log.push(n);
            return () => { };
        };
        const computed = {
            get method() { log.push(log.length); return Symbol('method'); },
            get field() { log.push(log.length); return Symbol('field'); },
            get getter() { log.push(log.length); return Symbol('getter'); },
            get setter() { log.push(log.length); return Symbol('setter'); },
            get accessor() { log.push(log.length); return Symbol('accessor'); },
        };
        @foo(0)
        class Foo extends (foo(1), Object) {
            @foo(2)
            [computed.method]() { }
            @foo(4)
            static [computed.method]() { }
            @foo(6)
            [computed.field];
            @foo(8)
            static [computed.field];
            @foo(10)
            get [computed.getter]() { return; }
            @foo(12)
            static get [computed.getter]() { return; }
            @foo(14)
            set [computed.setter](x) { }
            @foo(16)
            static set [computed.setter](x) { }
            @foo(18)
            accessor [computed.accessor];
            @foo(20)
            static accessor [computed.accessor];
        }
        assertEq(() => '' + log, '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21');
    },
    'Decorator list evaluation: Computed names (class expression)': () => {
        const log = [];
        const foo = (n) => {
            log.push(n);
            return () => { };
        };
        const computed = {
            get method() { log.push(log.length); return Symbol('method'); },
            get field() { log.push(log.length); return Symbol('field'); },
            get getter() { log.push(log.length); return Symbol('getter'); },
            get setter() { log.push(log.length); return Symbol('setter'); },
            get accessor() { log.push(log.length); return Symbol('accessor'); },
        };
        (
        @foo(0)
        class extends (foo(1), Object) {
            @foo(2)
            [computed.method]() { }
            @foo(4)
            static [computed.method]() { }
            @foo(6)
            [computed.field];
            @foo(8)
            static [computed.field];
            @foo(10)
            get [computed.getter]() { return; }
            @foo(12)
            static get [computed.getter]() { return; }
            @foo(14)
            set [computed.setter](x) { }
            @foo(16)
            static set [computed.setter](x) { }
            @foo(18)
            accessor [computed.accessor];
            @foo(20)
            static accessor [computed.accessor];
        });
        assertEq(() => '' + log, '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21');
    },
    'Decorator list evaluation: "this" (class statement)': () => {
        const log = [];
        const dummy = () => { };
        const ctx = {
            foo(n) {
                log.push(n);
            }
        };
        function wrapper() {
            @(assertEq(() => this.foo(0), undefined), dummy)
            class Foo extends (assertEq(() => this.foo(1), undefined), Object) {
                @(assertEq(() => this.foo(2), undefined), dummy)
                method() { }
                @(assertEq(() => this.foo(3), undefined), dummy)
                static method() { }
                @(assertEq(() => this.foo(4), undefined), dummy)
                field;
                @(assertEq(() => this.foo(5), undefined), dummy)
                static field;
                @(assertEq(() => this.foo(6), undefined), dummy)
                get getter() { return; }
                @(assertEq(() => this.foo(7), undefined), dummy)
                static get getter() { return; }
                @(assertEq(() => this.foo(8), undefined), dummy)
                set setter(x) { }
                @(assertEq(() => this.foo(9), undefined), dummy)
                static set setter(x) { }
                @(assertEq(() => this.foo(10), undefined), dummy)
                accessor accessor;
                @(assertEq(() => this.foo(11), undefined), dummy)
                static accessor accessor;
            }
        }
        wrapper.call(ctx);
        assertEq(() => '' + log, '0,1,2,3,4,5,6,7,8,9,10,11');
    },
    'Decorator list evaluation: "this" (class expression)': () => {
        const log = [];
        const dummy = () => { };
        const ctx = {
            foo(n) {
                log.push(n);
            }
        };
        function wrapper() {
            (
            @(assertEq(() => this.foo(0), undefined), dummy)
            class extends (assertEq(() => this.foo(1), undefined), Object) {
                @(assertEq(() => this.foo(2), undefined), dummy)
                method() { }
                @(assertEq(() => this.foo(3), undefined), dummy)
                static method() { }
                @(assertEq(() => this.foo(4), undefined), dummy)
                field;
                @(assertEq(() => this.foo(5), undefined), dummy)
                static field;
                @(assertEq(() => this.foo(6), undefined), dummy)
                get getter() { return; }
                @(assertEq(() => this.foo(7), undefined), dummy)
                static get getter() { return; }
                @(assertEq(() => this.foo(8), undefined), dummy)
                set setter(x) { }
                @(assertEq(() => this.foo(9), undefined), dummy)
                static set setter(x) { }
                @(assertEq(() => this.foo(10), undefined), dummy)
                accessor accessor;
                @(assertEq(() => this.foo(11), undefined), dummy)
                static accessor accessor;
            });
        }
        wrapper.call(ctx);
        assertEq(() => '' + log, '0,1,2,3,4,5,6,7,8,9,10,11');
    },
    'Decorator list evaluation: "await" (class statement)': async () => {
        const log = [];
        const dummy = () => { };
        async function wrapper() {
            @(log.push(await Promise.resolve(0)), dummy)
            class Foo extends (log.push(await Promise.resolve(1)), Object) {
                @(log.push(await Promise.resolve(2)), dummy)
                method() { }
                @(log.push(await Promise.resolve(3)), dummy)
                static method() { }
                @(log.push(await Promise.resolve(4)), dummy)
                field;
                @(log.push(await Promise.resolve(5)), dummy)
                static field;
                @(log.push(await Promise.resolve(6)), dummy)
                get getter() { return; }
                @(log.push(await Promise.resolve(7)), dummy)
                static get getter() { return; }
                @(log.push(await Promise.resolve(8)), dummy)
                set setter(x) { }
                @(log.push(await Promise.resolve(9)), dummy)
                static set setter(x) { }
                @(log.push(await Promise.resolve(10)), dummy)
                accessor accessor;
                @(log.push(await Promise.resolve(11)), dummy)
                static accessor accessor;
            }
        }
        await wrapper();
        assertEq(() => '' + log, '0,1,2,3,4,5,6,7,8,9,10,11');
    },
    'Decorator list evaluation: "await" (class expression)': async () => {
        const log = [];
        const dummy = () => { };
        async function wrapper() {
            (
            @(log.push(await Promise.resolve(0)), dummy)
            class extends (log.push(await Promise.resolve(1)), Object) {
                @(log.push(await Promise.resolve(2)), dummy)
                method() { }
                @(log.push(await Promise.resolve(3)), dummy)
                static method() { }
                @(log.push(await Promise.resolve(4)), dummy)
                field;
                @(log.push(await Promise.resolve(5)), dummy)
                static field;
                @(log.push(await Promise.resolve(6)), dummy)
                get getter() { return; }
                @(log.push(await Promise.resolve(7)), dummy)
                static get getter() { return; }
                @(log.push(await Promise.resolve(8)), dummy)
                set setter(x) { }
                @(log.push(await Promise.resolve(9)), dummy)
                static set setter(x) { }
                @(log.push(await Promise.resolve(10)), dummy)
                accessor accessor;
                @(log.push(await Promise.resolve(11)), dummy)
                static accessor accessor;
            });
        }
        await wrapper();
        assertEq(() => '' + log, '0,1,2,3,4,5,6,7,8,9,10,11');
    },
    'Decorator list evaluation: Outer private name (class statement)': () => {
        const log = [];
        class Dummy {
            static #foo(n) {
                log.push(n);
                return () => { };
            }
            static {
                const dummy = this;
                @(dummy.#foo(0))
                class Foo extends (dummy.#foo(1), Object) {
                    @(dummy.#foo(2))
                    method() { }
                    @(dummy.#foo(3))
                    static method() { }
                    @(dummy.#foo(4))
                    field;
                    @(dummy.#foo(5))
                    static field;
                    @(dummy.#foo(6))
                    get getter() { return; }
                    @(dummy.#foo(7))
                    static get getter() { return; }
                    @(dummy.#foo(8))
                    set setter(x) { }
                    @(dummy.#foo(9))
                    static set setter(x) { }
                    @(dummy.#foo(10))
                    accessor accessor;
                    @(dummy.#foo(11))
                    static accessor accessor;
                }
            }
        }
        assertEq(() => '' + log, '0,1,2,3,4,5,6,7,8,9,10,11');
    },
    'Decorator list evaluation: Outer private name (class expression)': () => {
        const log = [];
        class Dummy {
            static #foo(n) {
                log.push(n);
                return () => { };
            }
            static {
                const dummy = this;
                (
                @(dummy.#foo(0))
                class extends (dummy.#foo(1), Object) {
                    @(dummy.#foo(2))
                    method() { }
                    @(dummy.#foo(3))
                    static method() { }
                    @(dummy.#foo(4))
                    field;
                    @(dummy.#foo(5))
                    static field;
                    @(dummy.#foo(6))
                    get getter() { return; }
                    @(dummy.#foo(7))
                    static get getter() { return; }
                    @(dummy.#foo(8))
                    set setter(x) { }
                    @(dummy.#foo(9))
                    static set setter(x) { }
                    @(dummy.#foo(10))
                    accessor accessor;
                    @(dummy.#foo(11))
                    static accessor accessor;
                });
            }
        }
        assertEq(() => '' + log, '0,1,2,3,4,5,6,7,8,9,10,11');
    },
    'Decorator list evaluation: Inner private name (class statement)': () => {
        const fns = [];
        const capture = (fn) => {
            fns.push(fn);
            return () => { };
        };
        class Dummy {
            static #foo = NaN;
            static {
                @(capture(() => new Foo().#foo + 0))
                class Foo {
                    #foo = 10;
                    @(capture(() => new Foo().#foo + 1))
                    method() { }
                    @(capture(() => new Foo().#foo + 2))
                    static method() { }
                    @(capture(() => new Foo().#foo + 3))
                    field;
                    @(capture(() => new Foo().#foo + 4))
                    static field;
                    @(capture(() => new Foo().#foo + 5))
                    get getter() { return; }
                    @(capture(() => new Foo().#foo + 6))
                    static get getter() { return; }
                    @(capture(() => new Foo().#foo + 7))
                    set setter(x) { }
                    @(capture(() => new Foo().#foo + 8))
                    static set setter(x) { }
                    @(capture(() => new Foo().#foo + 9))
                    accessor accessor;
                    @(capture(() => new Foo().#foo + 10))
                    static accessor accessor;
                }
            }
        }
        // Accessing "#foo" in the class decorator should fail. The "#foo" should
        // refer to the outer "#foo", not the inner "#foo".
        const firstFn = fns.shift();
        assertEq(() => {
            try {
                firstFn();
                throw new Error('Expected a TypeError to be thrown');
            }
            catch (err) {
                if (err instanceof TypeError)
                    return true;
                throw err;
            }
        }, true);
        // Accessing "#foo" from any of the class element decorators should succeed.
        // Each "#foo" should refer to the inner "#foo", not the outer "#foo".
        const log = [];
        for (const fn of fns)
            log.push(fn());
        assertEq(() => '' + log, '11,12,13,14,15,16,17,18,19,20');
    },
    'Decorator list evaluation: Inner private name (class expression)': () => {
        const fns = [];
        const capture = (fn) => {
            fns.push(fn);
            return () => { };
        };
        class Outer {
            static #foo = 0;
            static {
                (
                @(capture(() => Outer.#foo + 0))
                class Foo {
                    #foo = 10;
                    @(capture(() => new Foo().#foo + 1))
                    method() { }
                    @(capture(() => new Foo().#foo + 2))
                    static method() { }
                    @(capture(() => new Foo().#foo + 3))
                    field;
                    @(capture(() => new Foo().#foo + 4))
                    static field;
                    @(capture(() => new Foo().#foo + 5))
                    get getter() { return; }
                    @(capture(() => new Foo().#foo + 6))
                    static get getter() { return; }
                    @(capture(() => new Foo().#foo + 7))
                    set setter(x) { }
                    @(capture(() => new Foo().#foo + 8))
                    static set setter(x) { }
                    @(capture(() => new Foo().#foo + 9))
                    accessor accessor;
                    @(capture(() => new Foo().#foo + 10))
                    static accessor accessor;
                });
            }
        }
        // Accessing the outer "#foo" on "Outer" from within the class decorator
        // should succeed. Class decorators are evaluated in the outer private
        // environment before entering "ClassDefinitionEvaluation".
        //
        // Accessing the inner "#foo" on "Foo" from within any of the class element
        // decorators should also succeed. Class element decorators are evaluated
        // in the inner private environment inside "ClassDefinitionEvaluation".
        const log = [];
        for (const fn of fns)
            log.push(fn());
        assertEq(() => '' + log, '0,11,12,13,14,15,16,17,18,19,20');
    },
    'Decorator list evaluation: Class binding (class statement)': () => {
        const fns = [];
        const capture = (fn) => {
            fns.push(fn);
            // Note: As far as I can tell, early reference to the class name should
            // throw a reference error because:
            //
            // 1. Class decorators run first in the top-level scope before entering
            //    BindingClassDeclarationEvaluation.
            //
            // 2. Class element decorators run in ClassDefinitionEvaluation, which
            //    runs ClassElementEvaluation for each class element before eventually
            //    running classEnv.InitializeBinding(classBinding, F).
            //
            assertThrows(() => fn(), ReferenceError);
            return () => { };
        };
        @(capture(() => Foo))
        class Foo {
            @(capture(() => Foo))
            method() { }
            @(capture(() => Foo))
            static method() { }
            @(capture(() => Foo))
            field;
            @(capture(() => Foo))
            static field;
            @(capture(() => Foo))
            get getter() { return; }
            @(capture(() => Foo))
            static get getter() { return; }
            @(capture(() => Foo))
            set setter(x) { }
            @(capture(() => Foo))
            static set setter(x) { }
            @(capture(() => Foo))
            accessor accessor;
            @(capture(() => Foo))
            static accessor accessor;
        }
        const originalFoo = Foo;
        // Once we get here, these should all reference the now-initialized class,
        // either through classBinding (for class element decorators) or through
        // className (for decorators on the class itself).
        for (const fn of fns) {
            assertEq(() => fn(), originalFoo);
        }
        // Mutating a class binding is allowed in JavaScript. Let's test what
        // happens when we do this.
        Foo = null;
        // As far as I can tell, class decorators should observe this change because
        // they are evaluated in the top-level scope.
        const firstFn = fns.shift();
        assertEq(() => firstFn(), null);
        // But I believe class element decorators should not observe this change
        // because they are evaluated in the environment that exists for the
        // duration of ClassDefinitionEvaluation (i.e. classEnv, not env).
        for (const fn of fns) {
            assertEq(() => fn(), originalFoo);
        }
    },
    'Decorator list evaluation: Class binding (class expression)': () => {
        const fns = [];
        const capture = (fn) => {
            fns.push(fn);
            return () => { };
        };
        const originalFoo = (
        @(capture(() => Foo))
        class Foo {
            @(capture(() => Foo))
            method() { }
            @(capture(() => Foo))
            static method() { }
            @(capture(() => Foo))
            field;
            @(capture(() => Foo))
            static field;
            @(capture(() => Foo))
            get getter() { return; }
            @(capture(() => Foo))
            static get getter() { return; }
            @(capture(() => Foo))
            set setter(x) { }
            @(capture(() => Foo))
            static set setter(x) { }
            @(capture(() => Foo))
            accessor accessor;
            @(capture(() => Foo))
            static accessor accessor;
        });
        // Decorators on the class itself should reference a global called "Foo",
        // which should still be a reference error. This is because a class
        // expression runs "DecoratorListEvaluation" in the outer environment and
        // then passes the evaluated decorators to "ClassDefinitionEvaluation".
        const firstFn = fns.shift();
        assertThrows(() => firstFn(), ReferenceError);
        // All other decorators should reference the classBinding called "Foo",
        // which should now be initialized. This is because all other decorators
        // are evaluated within "ClassDefinitionEvaluation" while the running
        // execution context's environment is the nested class environment.
        for (const fn of fns) {
            assertEq(() => fn(), originalFoo);
        }
    },
    // Decorator metadata
    'Decorator metadata: class statement': () => {
        let counter = 0;
        const dec = (_, ctx) => {
            ctx.metadata[ctx.name] = counter++;
        };
        @dec
        class Foo {
            @dec
            instanceField;
            @dec
            accessor instanceAccessor;
            @dec
            instanceMethod() { }
            @dec
            get instanceGetter() { return; }
            @dec
            set instanceSetter(_) { }
            @dec
            static staticField;
            @dec
            static accessor staticAccessor;
            @dec
            static staticMethod() { }
            @dec
            static get staticGetter() { return; }
            @dec
            static set staticSetter(_) { }
        }
        @dec
        class Bar extends Foo {
            @dec
            #instanceField;
            @dec
            accessor #instanceAccessor;
            @dec
            #instanceMethod() { }
            @dec
            get #instanceGetter() { return; }
            @dec
            set #instanceSetter(_) { }
            @dec
            static #staticField;
            @dec
            static accessor #staticAccessor;
            @dec
            static #staticMethod() { }
            @dec
            static get #staticGetter() { return; }
            @dec
            static set #staticSetter(_) { }
        }
        const order = (meta) => '' + [
            meta['staticAccessor'], meta['staticMethod'], meta['staticGetter'], meta['staticSetter'],
            meta['#staticAccessor'], meta['#staticMethod'], meta['#staticGetter'], meta['#staticSetter'],
            meta['instanceAccessor'], meta['instanceMethod'], meta['instanceGetter'], meta['instanceSetter'],
            meta['#instanceAccessor'], meta['#instanceMethod'], meta['#instanceGetter'], meta['#instanceSetter'],
            meta['staticField'], meta['#staticField'],
            meta['instanceField'], meta['#instanceField'],
            meta['Foo'], meta['Bar'],
        ];
        const foo = Foo[Symbol.metadata];
        const bar = Bar[Symbol.metadata];
        assertEq(() => order(foo), '0,1,2,3,,,,,4,5,6,7,,,,,8,,9,,10,');
        assertEq(() => Object.getPrototypeOf(foo), null);
        assertEq(() => order(bar), '0,1,2,3,11,12,13,14,4,5,6,7,15,16,17,18,8,19,9,20,10,21');
        assertEq(() => Object.getPrototypeOf(bar), foo);
        // Test an undecorated class
        class FooNoDec {
        }
        class BarNoDec extends FooNoDec {
        }
        assertEq(() => FooNoDec[Symbol.metadata], null);
        assertEq(() => BarNoDec[Symbol.metadata], null);
        // Test a class with no class decorator
        class FooOneDec {
            @dec
            x;
        }
        class BarOneDec extends FooOneDec {
            @dec
            y;
        }
        assertEq(() => JSON.stringify(FooOneDec[Symbol.metadata]), JSON.stringify({ x: 22 }));
        assertEq(() => JSON.stringify(BarOneDec[Symbol.metadata]), JSON.stringify({ y: 23 }));
        assertEq(() => Object.getPrototypeOf(BarOneDec[Symbol.metadata]), FooOneDec[Symbol.metadata]);
    },
    'Decorator metadata: class expression': () => {
        let counter = 0;
        const dec = (_, ctx) => {
            ctx.metadata[ctx.name] = counter++;
        };
        const Foo = 
        @dec
        class {
            @dec
            instanceField;
            @dec
            accessor instanceAccessor;
            @dec
            instanceMethod() { }
            @dec
            get instanceGetter() { return; }
            @dec
            set instanceSetter(_) { }
            @dec
            static staticField;
            @dec
            static accessor staticAccessor;
            @dec
            static staticMethod() { }
            @dec
            static get staticGetter() { return; }
            @dec
            static set staticSetter(_) { }
        }, Bar = 
        @dec
        class extends Foo {
            @dec
            #instanceField;
            @dec
            accessor #instanceAccessor;
            @dec
            #instanceMethod() { }
            @dec
            get #instanceGetter() { return; }
            @dec
            set #instanceSetter(_) { }
            @dec
            static #staticField;
            @dec
            static accessor #staticAccessor;
            @dec
            static #staticMethod() { }
            @dec
            static get #staticGetter() { return; }
            @dec
            static set #staticSetter(_) { }
        };
        const order = (meta) => '' + [
            meta['staticAccessor'], meta['staticMethod'], meta['staticGetter'], meta['staticSetter'],
            meta['#staticAccessor'], meta['#staticMethod'], meta['#staticGetter'], meta['#staticSetter'],
            meta['instanceAccessor'], meta['instanceMethod'], meta['instanceGetter'], meta['instanceSetter'],
            meta['#instanceAccessor'], meta['#instanceMethod'], meta['#instanceGetter'], meta['#instanceSetter'],
            meta['staticField'], meta['#staticField'],
            meta['instanceField'], meta['#instanceField'],
            meta['Foo'], meta['Bar'],
        ];
        const foo = Foo[Symbol.metadata];
        const bar = Bar[Symbol.metadata];
        assertEq(() => order(foo), '0,1,2,3,,,,,4,5,6,7,,,,,8,,9,,10,');
        assertEq(() => Object.getPrototypeOf(foo), null);
        assertEq(() => order(bar), '0,1,2,3,11,12,13,14,4,5,6,7,15,16,17,18,8,19,9,20,10,21');
        assertEq(() => Object.getPrototypeOf(bar), foo);
        // Test an undecorated class
        const FooNoDec = class {
        };
        const BarNoDec = class extends FooNoDec {
        };
        assertEq(() => FooNoDec[Symbol.metadata], null);
        assertEq(() => BarNoDec[Symbol.metadata], null);
        // Test a class with no class decorator
        const FooOneDec = class {
            @dec
            x;
        };
        const BarOneDec = class extends FooOneDec {
            @dec
            y;
        };
        assertEq(() => JSON.stringify(FooOneDec[Symbol.metadata]), JSON.stringify({ x: 22 }));
        assertEq(() => JSON.stringify(BarOneDec[Symbol.metadata]), JSON.stringify({ y: 23 }));
        assertEq(() => Object.getPrototypeOf(BarOneDec[Symbol.metadata]), FooOneDec[Symbol.metadata]);
    },
    // Initializer order
    'Initializer order (public members, class statement)': () => {
        const log = [];
        // Class decorators
        const classDec1 = (cls, ctxClass) => {
            log.push('c2');
            if (!assertEq(() => typeof ctxClass.addInitializer, 'function'))
                return;
            ctxClass.addInitializer(() => log.push('c5'));
            ctxClass.addInitializer(() => log.push('c6'));
        };
        const classDec2 = (cls, ctxClass) => {
            log.push('c1');
            if (!assertEq(() => typeof ctxClass.addInitializer, 'function'))
                return;
            ctxClass.addInitializer(() => log.push('c3'));
            ctxClass.addInitializer(() => log.push('c4'));
        };
        // Method decorators
        const methodDec1 = (fn, ctxMethod) => {
            log.push('m2');
            if (!assertEq(() => typeof ctxMethod.addInitializer, 'function'))
                return;
            ctxMethod.addInitializer(() => log.push('m5'));
            ctxMethod.addInitializer(() => log.push('m6'));
        };
        const methodDec2 = (fn, ctxMethod) => {
            log.push('m1');
            if (!assertEq(() => typeof ctxMethod.addInitializer, 'function'))
                return;
            ctxMethod.addInitializer(() => log.push('m3'));
            ctxMethod.addInitializer(() => log.push('m4'));
        };
        const staticMethodDec1 = (fn, ctxStaticMethod) => {
            log.push('M2');
            if (!assertEq(() => typeof ctxStaticMethod.addInitializer, 'function'))
                return;
            ctxStaticMethod.addInitializer(() => log.push('M5'));
            ctxStaticMethod.addInitializer(() => log.push('M6'));
        };
        const staticMethodDec2 = (fn, ctxStaticMethod) => {
            log.push('M1');
            if (!assertEq(() => typeof ctxStaticMethod.addInitializer, 'function'))
                return;
            ctxStaticMethod.addInitializer(() => log.push('M3'));
            ctxStaticMethod.addInitializer(() => log.push('M4'));
        };
        // Field decorators
        const fieldDec1 = (value, ctxField) => {
            log.push('f2');
            if (!assertEq(() => typeof ctxField.addInitializer, 'function'))
                return;
            ctxField.addInitializer(() => log.push('f5'));
            ctxField.addInitializer(() => log.push('f6'));
            return () => { log.push('f7'); };
        };
        const fieldDec2 = (value, ctxField) => {
            log.push('f1');
            if (!assertEq(() => typeof ctxField.addInitializer, 'function'))
                return;
            ctxField.addInitializer(() => log.push('f3'));
            ctxField.addInitializer(() => log.push('f4'));
            return () => { log.push('f8'); };
        };
        const staticFieldDec1 = (value, ctxStaticField) => {
            log.push('F2');
            if (!assertEq(() => typeof ctxStaticField.addInitializer, 'function'))
                return;
            ctxStaticField.addInitializer(() => log.push('F5'));
            ctxStaticField.addInitializer(() => log.push('F6'));
            return () => { log.push('F7'); };
        };
        const staticFieldDec2 = (value, ctxStaticField) => {
            log.push('F1');
            if (!assertEq(() => typeof ctxStaticField.addInitializer, 'function'))
                return;
            ctxStaticField.addInitializer(() => log.push('F3'));
            ctxStaticField.addInitializer(() => log.push('F4'));
            return () => { log.push('F8'); };
        };
        // Getter decorators
        const getterDec1 = (fn, ctxGetter) => {
            log.push('g2');
            if (!assertEq(() => typeof ctxGetter.addInitializer, 'function'))
                return;
            ctxGetter.addInitializer(() => log.push('g5'));
            ctxGetter.addInitializer(() => log.push('g6'));
        };
        const getterDec2 = (fn, ctxGetter) => {
            log.push('g1');
            if (!assertEq(() => typeof ctxGetter.addInitializer, 'function'))
                return;
            ctxGetter.addInitializer(() => log.push('g3'));
            ctxGetter.addInitializer(() => log.push('g4'));
        };
        const staticGetterDec1 = (fn, ctxStaticGetter) => {
            log.push('G2');
            if (!assertEq(() => typeof ctxStaticGetter.addInitializer, 'function'))
                return;
            ctxStaticGetter.addInitializer(() => log.push('G5'));
            ctxStaticGetter.addInitializer(() => log.push('G6'));
        };
        const staticGetterDec2 = (fn, ctxStaticGetter) => {
            log.push('G1');
            if (!assertEq(() => typeof ctxStaticGetter.addInitializer, 'function'))
                return;
            ctxStaticGetter.addInitializer(() => log.push('G3'));
            ctxStaticGetter.addInitializer(() => log.push('G4'));
        };
        // Setter decorators
        const setterDec1 = (fn, ctxSetter) => {
            log.push('s2');
            if (!assertEq(() => typeof ctxSetter.addInitializer, 'function'))
                return;
            ctxSetter.addInitializer(() => log.push('s5'));
            ctxSetter.addInitializer(() => log.push('s6'));
        };
        const setterDec2 = (fn, ctxSetter) => {
            log.push('s1');
            if (!assertEq(() => typeof ctxSetter.addInitializer, 'function'))
                return;
            ctxSetter.addInitializer(() => log.push('s3'));
            ctxSetter.addInitializer(() => log.push('s4'));
        };
        const staticSetterDec1 = (fn, ctxStaticSetter) => {
            log.push('S2');
            if (!assertEq(() => typeof ctxStaticSetter.addInitializer, 'function'))
                return;
            ctxStaticSetter.addInitializer(() => log.push('S5'));
            ctxStaticSetter.addInitializer(() => log.push('S6'));
        };
        const staticSetterDec2 = (fn, ctxStaticSetter) => {
            log.push('S1');
            if (!assertEq(() => typeof ctxStaticSetter.addInitializer, 'function'))
                return;
            ctxStaticSetter.addInitializer(() => log.push('S3'));
            ctxStaticSetter.addInitializer(() => log.push('S4'));
        };
        // Auto-accessor decorators
        const accessorDec1 = (target, ctxAccessor) => {
            log.push('a2');
            if (!assertEq(() => typeof ctxAccessor.addInitializer, 'function'))
                return;
            ctxAccessor.addInitializer(() => log.push('a5'));
            ctxAccessor.addInitializer(() => log.push('a6'));
            return { init() { log.push('a7'); } };
        };
        const accessorDec2 = (target, ctxAccessor) => {
            log.push('a1');
            if (!assertEq(() => typeof ctxAccessor.addInitializer, 'function'))
                return;
            ctxAccessor.addInitializer(() => log.push('a3'));
            ctxAccessor.addInitializer(() => log.push('a4'));
            return { init() { log.push('a8'); } };
        };
        const staticAccessorDec1 = (target, ctxStaticAccessor) => {
            log.push('A2');
            if (!assertEq(() => typeof ctxStaticAccessor.addInitializer, 'function'))
                return;
            ctxStaticAccessor.addInitializer(() => log.push('A5'));
            ctxStaticAccessor.addInitializer(() => log.push('A6'));
            return { init() { log.push('A7'); } };
        };
        const staticAccessorDec2 = (target, ctxStaticAccessor) => {
            log.push('A1');
            if (!assertEq(() => typeof ctxStaticAccessor.addInitializer, 'function'))
                return;
            ctxStaticAccessor.addInitializer(() => log.push('A3'));
            ctxStaticAccessor.addInitializer(() => log.push('A4'));
            return { init() { log.push('A8'); } };
        };
        log.push('start');
        @classDec1
        @classDec2
        class Foo extends (log.push('extends'), Object) {
            static { log.push('static:start'); }
            constructor() {
                log.push('ctor:start');
                super();
                log.push('ctor:end');
            }
            @methodDec1
            @methodDec2
            method() { }
            @staticMethodDec1
            @staticMethodDec2
            static method() { }
            @fieldDec1
            @fieldDec2
            field;
            @staticFieldDec1
            @staticFieldDec2
            static field;
            @getterDec1
            @getterDec2
            get getter() { return; }
            @staticGetterDec1
            @staticGetterDec2
            static get getter() { return; }
            @setterDec1
            @setterDec2
            set setter(x) { }
            @staticSetterDec1
            @staticSetterDec2
            static set setter(x) { }
            @accessorDec1
            @accessorDec2
            accessor accessor;
            @staticAccessorDec1
            @staticAccessorDec2
            static accessor accessor;
            static { log.push('static:end'); }
        }
        log.push('after');
        new Foo;
        log.push('end');
        assertEq(() => log + '', 'start,extends,' +
            'M1,M2,G1,G2,S1,S2,A1,A2,' + // For each element e of staticElements if e.[[Kind]] is not field
            'm1,m2,g1,g2,s1,s2,a1,a2,' + // For each element e of instanceElements if e.[[Kind]] is not field
            'F1,F2,' + // For each element e of staticElements if e.[[Kind]] is field
            'f1,f2,' + // For each element e of instanceElements if e.[[Kind]] is field
            'c1,c2,' + // ApplyDecoratorsToClassDefinition
            'M3,M4,M5,M6,G3,G4,G5,G6,S3,S4,S5,S6,' + // For each element initializer of staticMethodExtraInitializers
            'static:start,' + // For each element elementRecord of staticElements
            'F7,F8,F3,F4,F5,F6,' + // InitializeFieldOrAccessor + For each element initializer of elementRecord.[[ExtraInitializers]]
            'A7,A8,A3,A4,A5,A6,' + // InitializeFieldOrAccessor + For each element initializer of elementRecord.[[ExtraInitializers]]
            'static:end,' + // For each element elementRecord of staticElements
            'c3,c4,c5,c6,' + // For each element initializer of classExtraInitializers
            'after,' +
            'ctor:start,' +
            'm3,m4,m5,m6,g3,g4,g5,g6,s3,s4,s5,s6,' + // For each element initializer of constructor.[[Initializers]] (a.k.a. instanceMethodExtraInitializers)
            'f7,f8,f3,f4,f5,f6,' + // InitializeFieldOrAccessor + For each element initializer of elementRecord.[[ExtraInitializers]]
            'a7,a8,a3,a4,a5,a6,' + // InitializeFieldOrAccessor + For each element initializer of elementRecord.[[ExtraInitializers]]
            'ctor:end,' +
            'end');
    },
    'Initializer order (public members, class expression)': () => {
        const log = [];
        // Class decorators
        const classDec1 = (cls, ctxClass) => {
            log.push('c2');
            if (!assertEq(() => typeof ctxClass.addInitializer, 'function'))
                return;
            ctxClass.addInitializer(() => log.push('c5'));
            ctxClass.addInitializer(() => log.push('c6'));
        };
        const classDec2 = (cls, ctxClass) => {
            log.push('c1');
            if (!assertEq(() => typeof ctxClass.addInitializer, 'function'))
                return;
            ctxClass.addInitializer(() => log.push('c3'));
            ctxClass.addInitializer(() => log.push('c4'));
        };
        // Method decorators
        const methodDec1 = (fn, ctxMethod) => {
            log.push('m2');
            if (!assertEq(() => typeof ctxMethod.addInitializer, 'function'))
                return;
            ctxMethod.addInitializer(() => log.push('m5'));
            ctxMethod.addInitializer(() => log.push('m6'));
        };
        const methodDec2 = (fn, ctxMethod) => {
            log.push('m1');
            if (!assertEq(() => typeof ctxMethod.addInitializer, 'function'))
                return;
            ctxMethod.addInitializer(() => log.push('m3'));
            ctxMethod.addInitializer(() => log.push('m4'));
        };
        const staticMethodDec1 = (fn, ctxStaticMethod) => {
            log.push('M2');
            if (!assertEq(() => typeof ctxStaticMethod.addInitializer, 'function'))
                return;
            ctxStaticMethod.addInitializer(() => log.push('M5'));
            ctxStaticMethod.addInitializer(() => log.push('M6'));
        };
        const staticMethodDec2 = (fn, ctxStaticMethod) => {
            log.push('M1');
            if (!assertEq(() => typeof ctxStaticMethod.addInitializer, 'function'))
                return;
            ctxStaticMethod.addInitializer(() => log.push('M3'));
            ctxStaticMethod.addInitializer(() => log.push('M4'));
        };
        // Field decorators
        const fieldDec1 = (value, ctxField) => {
            log.push('f2');
            if (!assertEq(() => typeof ctxField.addInitializer, 'function'))
                return;
            ctxField.addInitializer(() => log.push('f5'));
            ctxField.addInitializer(() => log.push('f6'));
            return () => { log.push('f7'); };
        };
        const fieldDec2 = (value, ctxField) => {
            log.push('f1');
            if (!assertEq(() => typeof ctxField.addInitializer, 'function'))
                return;
            ctxField.addInitializer(() => log.push('f3'));
            ctxField.addInitializer(() => log.push('f4'));
            return () => { log.push('f8'); };
        };
        const staticFieldDec1 = (value, ctxStaticField) => {
            log.push('F2');
            if (!assertEq(() => typeof ctxStaticField.addInitializer, 'function'))
                return;
            ctxStaticField.addInitializer(() => log.push('F5'));
            ctxStaticField.addInitializer(() => log.push('F6'));
            return () => { log.push('F7'); };
        };
        const staticFieldDec2 = (value, ctxStaticField) => {
            log.push('F1');
            if (!assertEq(() => typeof ctxStaticField.addInitializer, 'function'))
                return;
            ctxStaticField.addInitializer(() => log.push('F3'));
            ctxStaticField.addInitializer(() => log.push('F4'));
            return () => { log.push('F8'); };
        };
        // Getter decorators
        const getterDec1 = (fn, ctxGetter) => {
            log.push('g2');
            if (!assertEq(() => typeof ctxGetter.addInitializer, 'function'))
                return;
            ctxGetter.addInitializer(() => log.push('g5'));
            ctxGetter.addInitializer(() => log.push('g6'));
        };
        const getterDec2 = (fn, ctxGetter) => {
            log.push('g1');
            if (!assertEq(() => typeof ctxGetter.addInitializer, 'function'))
                return;
            ctxGetter.addInitializer(() => log.push('g3'));
            ctxGetter.addInitializer(() => log.push('g4'));
        };
        const staticGetterDec1 = (fn, ctxStaticGetter) => {
            log.push('G2');
            if (!assertEq(() => typeof ctxStaticGetter.addInitializer, 'function'))
                return;
            ctxStaticGetter.addInitializer(() => log.push('G5'));
            ctxStaticGetter.addInitializer(() => log.push('G6'));
        };
        const staticGetterDec2 = (fn, ctxStaticGetter) => {
            log.push('G1');
            if (!assertEq(() => typeof ctxStaticGetter.addInitializer, 'function'))
                return;
            ctxStaticGetter.addInitializer(() => log.push('G3'));
            ctxStaticGetter.addInitializer(() => log.push('G4'));
        };
        // Setter decorators
        const setterDec1 = (fn, ctxSetter) => {
            log.push('s2');
            if (!assertEq(() => typeof ctxSetter.addInitializer, 'function'))
                return;
            ctxSetter.addInitializer(() => log.push('s5'));
            ctxSetter.addInitializer(() => log.push('s6'));
        };
        const setterDec2 = (fn, ctxSetter) => {
            log.push('s1');
            if (!assertEq(() => typeof ctxSetter.addInitializer, 'function'))
                return;
            ctxSetter.addInitializer(() => log.push('s3'));
            ctxSetter.addInitializer(() => log.push('s4'));
        };
        const staticSetterDec1 = (fn, ctxStaticSetter) => {
            log.push('S2');
            if (!assertEq(() => typeof ctxStaticSetter.addInitializer, 'function'))
                return;
            ctxStaticSetter.addInitializer(() => log.push('S5'));
            ctxStaticSetter.addInitializer(() => log.push('S6'));
        };
        const staticSetterDec2 = (fn, ctxStaticSetter) => {
            log.push('S1');
            if (!assertEq(() => typeof ctxStaticSetter.addInitializer, 'function'))
                return;
            ctxStaticSetter.addInitializer(() => log.push('S3'));
            ctxStaticSetter.addInitializer(() => log.push('S4'));
        };
        // Auto-accessor decorators
        const accessorDec1 = (target, ctxAccessor) => {
            log.push('a2');
            if (!assertEq(() => typeof ctxAccessor.addInitializer, 'function'))
                return;
            ctxAccessor.addInitializer(() => log.push('a5'));
            ctxAccessor.addInitializer(() => log.push('a6'));
            return { init() { log.push('a7'); } };
        };
        const accessorDec2 = (target, ctxAccessor) => {
            log.push('a1');
            if (!assertEq(() => typeof ctxAccessor.addInitializer, 'function'))
                return;
            ctxAccessor.addInitializer(() => log.push('a3'));
            ctxAccessor.addInitializer(() => log.push('a4'));
            return { init() { log.push('a8'); } };
        };
        const staticAccessorDec1 = (target, ctxStaticAccessor) => {
            log.push('A2');
            if (!assertEq(() => typeof ctxStaticAccessor.addInitializer, 'function'))
                return;
            ctxStaticAccessor.addInitializer(() => log.push('A5'));
            ctxStaticAccessor.addInitializer(() => log.push('A6'));
            return { init() { log.push('A7'); } };
        };
        const staticAccessorDec2 = (target, ctxStaticAccessor) => {
            log.push('A1');
            if (!assertEq(() => typeof ctxStaticAccessor.addInitializer, 'function'))
                return;
            ctxStaticAccessor.addInitializer(() => log.push('A3'));
            ctxStaticAccessor.addInitializer(() => log.push('A4'));
            return { init() { log.push('A8'); } };
        };
        log.push('start');
        const Foo = 
        @classDec1
        @classDec2
        class extends (log.push('extends'), Object) {
            static { log.push('static:start'); }
            constructor() {
                log.push('ctor:start');
                super();
                log.push('ctor:end');
            }
            @methodDec1
            @methodDec2
            method() { }
            @staticMethodDec1
            @staticMethodDec2
            static method() { }
            @fieldDec1
            @fieldDec2
            field;
            @staticFieldDec1
            @staticFieldDec2
            static field;
            @getterDec1
            @getterDec2
            get getter() { return; }
            @staticGetterDec1
            @staticGetterDec2
            static get getter() { return; }
            @setterDec1
            @setterDec2
            set setter(x) { }
            @staticSetterDec1
            @staticSetterDec2
            static set setter(x) { }
            @accessorDec1
            @accessorDec2
            accessor accessor;
            @staticAccessorDec1
            @staticAccessorDec2
            static accessor accessor;
            static { log.push('static:end'); }
        };
        log.push('after');
        new Foo;
        log.push('end');
        assertEq(() => log + '', 'start,extends,' +
            'M1,M2,G1,G2,S1,S2,A1,A2,' + // For each element e of staticElements if e.[[Kind]] is not field
            'm1,m2,g1,g2,s1,s2,a1,a2,' + // For each element e of instanceElements if e.[[Kind]] is not field
            'F1,F2,' + // For each element e of staticElements if e.[[Kind]] is field
            'f1,f2,' + // For each element e of instanceElements if e.[[Kind]] is field
            'c1,c2,' + // ApplyDecoratorsToClassDefinition
            'M3,M4,M5,M6,G3,G4,G5,G6,S3,S4,S5,S6,' + // For each element initializer of staticMethodExtraInitializers
            'static:start,' + // For each element elementRecord of staticElements
            'F7,F8,F3,F4,F5,F6,' + // InitializeFieldOrAccessor + For each element initializer of elementRecord.[[ExtraInitializers]]
            'A7,A8,A3,A4,A5,A6,' + // InitializeFieldOrAccessor + For each element initializer of elementRecord.[[ExtraInitializers]]
            'static:end,' + // For each element elementRecord of staticElements
            'c3,c4,c5,c6,' + // For each element initializer of classExtraInitializers
            'after,' +
            'ctor:start,' +
            'm3,m4,m5,m6,g3,g4,g5,g6,s3,s4,s5,s6,' + // For each element initializer of constructor.[[Initializers]] (a.k.a. instanceMethodExtraInitializers)
            'f7,f8,f3,f4,f5,f6,' + // InitializeFieldOrAccessor + For each element initializer of elementRecord.[[ExtraInitializers]]
            'a7,a8,a3,a4,a5,a6,' + // InitializeFieldOrAccessor + For each element initializer of elementRecord.[[ExtraInitializers]]
            'ctor:end,' +
            'end');
    },
    'Initializer order (private members, class statement)': () => {
        const log = [];
        // Class decorators
        const classDec1 = (cls, ctxClass) => {
            log.push('c2');
            if (!assertEq(() => typeof ctxClass.addInitializer, 'function'))
                return;
            ctxClass.addInitializer(() => log.push('c5'));
            ctxClass.addInitializer(() => log.push('c6'));
        };
        const classDec2 = (cls, ctxClass) => {
            log.push('c1');
            if (!assertEq(() => typeof ctxClass.addInitializer, 'function'))
                return;
            ctxClass.addInitializer(() => log.push('c3'));
            ctxClass.addInitializer(() => log.push('c4'));
        };
        // Method decorators
        const methodDec1 = (fn, ctxMethod) => {
            log.push('m2');
            if (!assertEq(() => typeof ctxMethod.addInitializer, 'function'))
                return;
            ctxMethod.addInitializer(() => log.push('m5'));
            ctxMethod.addInitializer(() => log.push('m6'));
        };
        const methodDec2 = (fn, ctxMethod) => {
            log.push('m1');
            if (!assertEq(() => typeof ctxMethod.addInitializer, 'function'))
                return;
            ctxMethod.addInitializer(() => log.push('m3'));
            ctxMethod.addInitializer(() => log.push('m4'));
        };
        const staticMethodDec1 = (fn, ctxStaticMethod) => {
            log.push('M2');
            if (!assertEq(() => typeof ctxStaticMethod.addInitializer, 'function'))
                return;
            ctxStaticMethod.addInitializer(() => log.push('M5'));
            ctxStaticMethod.addInitializer(() => log.push('M6'));
        };
        const staticMethodDec2 = (fn, ctxStaticMethod) => {
            log.push('M1');
            if (!assertEq(() => typeof ctxStaticMethod.addInitializer, 'function'))
                return;
            ctxStaticMethod.addInitializer(() => log.push('M3'));
            ctxStaticMethod.addInitializer(() => log.push('M4'));
        };
        // Field decorators
        const fieldDec1 = (value, ctxField) => {
            log.push('f2');
            if (!assertEq(() => typeof ctxField.addInitializer, 'function'))
                return;
            ctxField.addInitializer(() => log.push('f5'));
            ctxField.addInitializer(() => log.push('f6'));
            return () => { log.push('f7'); };
        };
        const fieldDec2 = (value, ctxField) => {
            log.push('f1');
            if (!assertEq(() => typeof ctxField.addInitializer, 'function'))
                return;
            ctxField.addInitializer(() => log.push('f3'));
            ctxField.addInitializer(() => log.push('f4'));
            return () => { log.push('f8'); };
        };
        const staticFieldDec1 = (value, ctxStaticField) => {
            log.push('F2');
            if (!assertEq(() => typeof ctxStaticField.addInitializer, 'function'))
                return;
            ctxStaticField.addInitializer(() => log.push('F5'));
            ctxStaticField.addInitializer(() => log.push('F6'));
            return () => { log.push('F7'); };
        };
        const staticFieldDec2 = (value, ctxStaticField) => {
            log.push('F1');
            if (!assertEq(() => typeof ctxStaticField.addInitializer, 'function'))
                return;
            ctxStaticField.addInitializer(() => log.push('F3'));
            ctxStaticField.addInitializer(() => log.push('F4'));
            return () => { log.push('F8'); };
        };
        // Getter decorators
        const getterDec1 = (fn, ctxGetter) => {
            log.push('g2');
            if (!assertEq(() => typeof ctxGetter.addInitializer, 'function'))
                return;
            ctxGetter.addInitializer(() => log.push('g5'));
            ctxGetter.addInitializer(() => log.push('g6'));
        };
        const getterDec2 = (fn, ctxGetter) => {
            log.push('g1');
            if (!assertEq(() => typeof ctxGetter.addInitializer, 'function'))
                return;
            ctxGetter.addInitializer(() => log.push('g3'));
            ctxGetter.addInitializer(() => log.push('g4'));
        };
        const staticGetterDec1 = (fn, ctxStaticGetter) => {
            log.push('G2');
            if (!assertEq(() => typeof ctxStaticGetter.addInitializer, 'function'))
                return;
            ctxStaticGetter.addInitializer(() => log.push('G5'));
            ctxStaticGetter.addInitializer(() => log.push('G6'));
        };
        const staticGetterDec2 = (fn, ctxStaticGetter) => {
            log.push('G1');
            if (!assertEq(() => typeof ctxStaticGetter.addInitializer, 'function'))
                return;
            ctxStaticGetter.addInitializer(() => log.push('G3'));
            ctxStaticGetter.addInitializer(() => log.push('G4'));
        };
        // Setter decorators
        const setterDec1 = (fn, ctxSetter) => {
            log.push('s2');
            if (!assertEq(() => typeof ctxSetter.addInitializer, 'function'))
                return;
            ctxSetter.addInitializer(() => log.push('s5'));
            ctxSetter.addInitializer(() => log.push('s6'));
        };
        const setterDec2 = (fn, ctxSetter) => {
            log.push('s1');
            if (!assertEq(() => typeof ctxSetter.addInitializer, 'function'))
                return;
            ctxSetter.addInitializer(() => log.push('s3'));
            ctxSetter.addInitializer(() => log.push('s4'));
        };
        const staticSetterDec1 = (fn, ctxStaticSetter) => {
            log.push('S2');
            if (!assertEq(() => typeof ctxStaticSetter.addInitializer, 'function'))
                return;
            ctxStaticSetter.addInitializer(() => log.push('S5'));
            ctxStaticSetter.addInitializer(() => log.push('S6'));
        };
        const staticSetterDec2 = (fn, ctxStaticSetter) => {
            log.push('S1');
            if (!assertEq(() => typeof ctxStaticSetter.addInitializer, 'function'))
                return;
            ctxStaticSetter.addInitializer(() => log.push('S3'));
            ctxStaticSetter.addInitializer(() => log.push('S4'));
        };
        // Auto-accessor decorators
        const accessorDec1 = (target, ctxAccessor) => {
            log.push('a2');
            if (!assertEq(() => typeof ctxAccessor.addInitializer, 'function'))
                return;
            ctxAccessor.addInitializer(() => log.push('a5'));
            ctxAccessor.addInitializer(() => log.push('a6'));
            return { init() { log.push('a7'); } };
        };
        const accessorDec2 = (target, ctxAccessor) => {
            log.push('a1');
            if (!assertEq(() => typeof ctxAccessor.addInitializer, 'function'))
                return;
            ctxAccessor.addInitializer(() => log.push('a3'));
            ctxAccessor.addInitializer(() => log.push('a4'));
            return { init() { log.push('a8'); } };
        };
        const staticAccessorDec1 = (target, ctxStaticAccessor) => {
            log.push('A2');
            if (!assertEq(() => typeof ctxStaticAccessor.addInitializer, 'function'))
                return;
            ctxStaticAccessor.addInitializer(() => log.push('A5'));
            ctxStaticAccessor.addInitializer(() => log.push('A6'));
            return { init() { log.push('A7'); } };
        };
        const staticAccessorDec2 = (target, ctxStaticAccessor) => {
            log.push('A1');
            if (!assertEq(() => typeof ctxStaticAccessor.addInitializer, 'function'))
                return;
            ctxStaticAccessor.addInitializer(() => log.push('A3'));
            ctxStaticAccessor.addInitializer(() => log.push('A4'));
            return { init() { log.push('A8'); } };
        };
        log.push('start');
        @classDec1
        @classDec2
        class Foo extends (log.push('extends'), Object) {
            static { log.push('static:start'); }
            constructor() {
                log.push('ctor:start');
                super();
                log.push('ctor:end');
            }
            @methodDec1
            @methodDec2
            #method() { }
            @staticMethodDec1
            @staticMethodDec2
            static #staticMethod() { }
            @fieldDec1
            @fieldDec2
            #field;
            @staticFieldDec1
            @staticFieldDec2
            static #staticField;
            @getterDec1
            @getterDec2
            get #getter() { return; }
            @staticGetterDec1
            @staticGetterDec2
            static get #staticGetter() { return; }
            @setterDec1
            @setterDec2
            set #setter(x) { }
            @staticSetterDec1
            @staticSetterDec2
            static set #staticSetter(x) { }
            @accessorDec1
            @accessorDec2
            accessor #accessor;
            @staticAccessorDec1
            @staticAccessorDec2
            static accessor #staticAccessor;
            static { log.push('static:end'); }
        }
        log.push('after');
        new Foo;
        log.push('end');
        assertEq(() => log + '', 'start,extends,' +
            'M1,M2,G1,G2,S1,S2,A1,A2,' + // For each element e of staticElements if e.[[Kind]] is not field
            'm1,m2,g1,g2,s1,s2,a1,a2,' + // For each element e of instanceElements if e.[[Kind]] is not field
            'F1,F2,' + // For each element e of staticElements if e.[[Kind]] is field
            'f1,f2,' + // For each element e of instanceElements if e.[[Kind]] is field
            'c1,c2,' + // ApplyDecoratorsToClassDefinition
            'M3,M4,M5,M6,G3,G4,G5,G6,S3,S4,S5,S6,' + // For each element initializer of staticMethodExtraInitializers
            'static:start,' + // For each element elementRecord of staticElements
            'F7,F8,F3,F4,F5,F6,' + // InitializeFieldOrAccessor + For each element initializer of elementRecord.[[ExtraInitializers]]
            'A7,A8,A3,A4,A5,A6,' + // InitializeFieldOrAccessor + For each element initializer of elementRecord.[[ExtraInitializers]]
            'static:end,' + // For each element elementRecord of staticElements
            'c3,c4,c5,c6,' + // For each element initializer of classExtraInitializers
            'after,' +
            'ctor:start,' +
            'm3,m4,m5,m6,g3,g4,g5,g6,s3,s4,s5,s6,' + // For each element initializer of constructor.[[Initializers]] (a.k.a. instanceMethodExtraInitializers)
            'f7,f8,f3,f4,f5,f6,' + // InitializeFieldOrAccessor + For each element initializer of elementRecord.[[ExtraInitializers]]
            'a7,a8,a3,a4,a5,a6,' + // InitializeFieldOrAccessor + For each element initializer of elementRecord.[[ExtraInitializers]]
            'ctor:end,' +
            'end');
    },
    'Initializer order (private members, class expression)': () => {
        const log = [];
        // Class decorators
        const classDec1 = (cls, ctxClass) => {
            log.push('c2');
            if (!assertEq(() => typeof ctxClass.addInitializer, 'function'))
                return;
            ctxClass.addInitializer(() => log.push('c5'));
            ctxClass.addInitializer(() => log.push('c6'));
        };
        const classDec2 = (cls, ctxClass) => {
            log.push('c1');
            if (!assertEq(() => typeof ctxClass.addInitializer, 'function'))
                return;
            ctxClass.addInitializer(() => log.push('c3'));
            ctxClass.addInitializer(() => log.push('c4'));
        };
        // Method decorators
        const methodDec1 = (fn, ctxMethod) => {
            log.push('m2');
            if (!assertEq(() => typeof ctxMethod.addInitializer, 'function'))
                return;
            ctxMethod.addInitializer(() => log.push('m5'));
            ctxMethod.addInitializer(() => log.push('m6'));
        };
        const methodDec2 = (fn, ctxMethod) => {
            log.push('m1');
            if (!assertEq(() => typeof ctxMethod.addInitializer, 'function'))
                return;
            ctxMethod.addInitializer(() => log.push('m3'));
            ctxMethod.addInitializer(() => log.push('m4'));
        };
        const staticMethodDec1 = (fn, ctxStaticMethod) => {
            log.push('M2');
            if (!assertEq(() => typeof ctxStaticMethod.addInitializer, 'function'))
                return;
            ctxStaticMethod.addInitializer(() => log.push('M5'));
            ctxStaticMethod.addInitializer(() => log.push('M6'));
        };
        const staticMethodDec2 = (fn, ctxStaticMethod) => {
            log.push('M1');
            if (!assertEq(() => typeof ctxStaticMethod.addInitializer, 'function'))
                return;
            ctxStaticMethod.addInitializer(() => log.push('M3'));
            ctxStaticMethod.addInitializer(() => log.push('M4'));
        };
        // Field decorators
        const fieldDec1 = (value, ctxField) => {
            log.push('f2');
            if (!assertEq(() => typeof ctxField.addInitializer, 'function'))
                return;
            ctxField.addInitializer(() => log.push('f5'));
            ctxField.addInitializer(() => log.push('f6'));
            return () => { log.push('f7'); };
        };
        const fieldDec2 = (value, ctxField) => {
            log.push('f1');
            if (!assertEq(() => typeof ctxField.addInitializer, 'function'))
                return;
            ctxField.addInitializer(() => log.push('f3'));
            ctxField.addInitializer(() => log.push('f4'));
            return () => { log.push('f8'); };
        };
        const staticFieldDec1 = (value, ctxStaticField) => {
            log.push('F2');
            if (!assertEq(() => typeof ctxStaticField.addInitializer, 'function'))
                return;
            ctxStaticField.addInitializer(() => log.push('F5'));
            ctxStaticField.addInitializer(() => log.push('F6'));
            return () => { log.push('F7'); };
        };
        const staticFieldDec2 = (value, ctxStaticField) => {
            log.push('F1');
            if (!assertEq(() => typeof ctxStaticField.addInitializer, 'function'))
                return;
            ctxStaticField.addInitializer(() => log.push('F3'));
            ctxStaticField.addInitializer(() => log.push('F4'));
            return () => { log.push('F8'); };
        };
        // Getter decorators
        const getterDec1 = (fn, ctxGetter) => {
            log.push('g2');
            if (!assertEq(() => typeof ctxGetter.addInitializer, 'function'))
                return;
            ctxGetter.addInitializer(() => log.push('g5'));
            ctxGetter.addInitializer(() => log.push('g6'));
        };
        const getterDec2 = (fn, ctxGetter) => {
            log.push('g1');
            if (!assertEq(() => typeof ctxGetter.addInitializer, 'function'))
                return;
            ctxGetter.addInitializer(() => log.push('g3'));
            ctxGetter.addInitializer(() => log.push('g4'));
        };
        const staticGetterDec1 = (fn, ctxStaticGetter) => {
            log.push('G2');
            if (!assertEq(() => typeof ctxStaticGetter.addInitializer, 'function'))
                return;
            ctxStaticGetter.addInitializer(() => log.push('G5'));
            ctxStaticGetter.addInitializer(() => log.push('G6'));
        };
        const staticGetterDec2 = (fn, ctxStaticGetter) => {
            log.push('G1');
            if (!assertEq(() => typeof ctxStaticGetter.addInitializer, 'function'))
                return;
            ctxStaticGetter.addInitializer(() => log.push('G3'));
            ctxStaticGetter.addInitializer(() => log.push('G4'));
        };
        // Setter decorators
        const setterDec1 = (fn, ctxSetter) => {
            log.push('s2');
            if (!assertEq(() => typeof ctxSetter.addInitializer, 'function'))
                return;
            ctxSetter.addInitializer(() => log.push('s5'));
            ctxSetter.addInitializer(() => log.push('s6'));
        };
        const setterDec2 = (fn, ctxSetter) => {
            log.push('s1');
            if (!assertEq(() => typeof ctxSetter.addInitializer, 'function'))
                return;
            ctxSetter.addInitializer(() => log.push('s3'));
            ctxSetter.addInitializer(() => log.push('s4'));
        };
        const staticSetterDec1 = (fn, ctxStaticSetter) => {
            log.push('S2');
            if (!assertEq(() => typeof ctxStaticSetter.addInitializer, 'function'))
                return;
            ctxStaticSetter.addInitializer(() => log.push('S5'));
            ctxStaticSetter.addInitializer(() => log.push('S6'));
        };
        const staticSetterDec2 = (fn, ctxStaticSetter) => {
            log.push('S1');
            if (!assertEq(() => typeof ctxStaticSetter.addInitializer, 'function'))
                return;
            ctxStaticSetter.addInitializer(() => log.push('S3'));
            ctxStaticSetter.addInitializer(() => log.push('S4'));
        };
        // Auto-accessor decorators
        const accessorDec1 = (target, ctxAccessor) => {
            log.push('a2');
            if (!assertEq(() => typeof ctxAccessor.addInitializer, 'function'))
                return;
            ctxAccessor.addInitializer(() => log.push('a5'));
            ctxAccessor.addInitializer(() => log.push('a6'));
            return { init() { log.push('a7'); } };
        };
        const accessorDec2 = (target, ctxAccessor) => {
            log.push('a1');
            if (!assertEq(() => typeof ctxAccessor.addInitializer, 'function'))
                return;
            ctxAccessor.addInitializer(() => log.push('a3'));
            ctxAccessor.addInitializer(() => log.push('a4'));
            return { init() { log.push('a8'); } };
        };
        const staticAccessorDec1 = (target, ctxStaticAccessor) => {
            log.push('A2');
            if (!assertEq(() => typeof ctxStaticAccessor.addInitializer, 'function'))
                return;
            ctxStaticAccessor.addInitializer(() => log.push('A5'));
            ctxStaticAccessor.addInitializer(() => log.push('A6'));
            return { init() { log.push('A7'); } };
        };
        const staticAccessorDec2 = (target, ctxStaticAccessor) => {
            log.push('A1');
            if (!assertEq(() => typeof ctxStaticAccessor.addInitializer, 'function'))
                return;
            ctxStaticAccessor.addInitializer(() => log.push('A3'));
            ctxStaticAccessor.addInitializer(() => log.push('A4'));
            return { init() { log.push('A8'); } };
        };
        log.push('start');
        const Foo = 
        @classDec1
        @classDec2
        class extends (log.push('extends'), Object) {
            static { log.push('static:start'); }
            constructor() {
                log.push('ctor:start');
                super();
                log.push('ctor:end');
            }
            @methodDec1
            @methodDec2
            #method() { }
            @staticMethodDec1
            @staticMethodDec2
            static #staticMethod() { }
            @fieldDec1
            @fieldDec2
            #field;
            @staticFieldDec1
            @staticFieldDec2
            static #staticField;
            @getterDec1
            @getterDec2
            get #getter() { return; }
            @staticGetterDec1
            @staticGetterDec2
            static get #staticGetter() { return; }
            @setterDec1
            @setterDec2
            set #setter(x) { }
            @staticSetterDec1
            @staticSetterDec2
            static set #staticSetter(x) { }
            @accessorDec1
            @accessorDec2
            accessor #accessor;
            @staticAccessorDec1
            @staticAccessorDec2
            static accessor #staticAccessor;
            static { log.push('static:end'); }
        };
        log.push('after');
        new Foo;
        log.push('end');
        assertEq(() => log + '', 'start,extends,' +
            'M1,M2,G1,G2,S1,S2,A1,A2,' + // For each element e of staticElements if e.[[Kind]] is not field
            'm1,m2,g1,g2,s1,s2,a1,a2,' + // For each element e of instanceElements if e.[[Kind]] is not field
            'F1,F2,' + // For each element e of staticElements if e.[[Kind]] is field
            'f1,f2,' + // For each element e of instanceElements if e.[[Kind]] is field
            'c1,c2,' + // ApplyDecoratorsToClassDefinition
            'M3,M4,M5,M6,G3,G4,G5,G6,S3,S4,S5,S6,' + // For each element initializer of staticMethodExtraInitializers
            'static:start,' + // For each element elementRecord of staticElements
            'F7,F8,F3,F4,F5,F6,' + // InitializeFieldOrAccessor + For each element initializer of elementRecord.[[ExtraInitializers]]
            'A7,A8,A3,A4,A5,A6,' + // InitializeFieldOrAccessor + For each element initializer of elementRecord.[[ExtraInitializers]]
            'static:end,' + // For each element elementRecord of staticElements
            'c3,c4,c5,c6,' + // For each element initializer of classExtraInitializers
            'after,' +
            'ctor:start,' +
            'm3,m4,m5,m6,g3,g4,g5,g6,s3,s4,s5,s6,' + // For each element initializer of constructor.[[Initializers]] (a.k.a. instanceMethodExtraInitializers)
            'f7,f8,f3,f4,f5,f6,' + // InitializeFieldOrAccessor + For each element initializer of elementRecord.[[ExtraInitializers]]
            'a7,a8,a3,a4,a5,a6,' + // InitializeFieldOrAccessor + For each element initializer of elementRecord.[[ExtraInitializers]]
            'ctor:end,' +
            'end');
    },
};
function prettyPrint(x) {
    if (x && x.prototype && x.prototype.constructor === x)
        return 'class';
    if (typeof x === 'string')
        return JSON.stringify(x);
    try {
        return x + '';
    }
    catch {
        return 'typeof ' + typeof x; // Handle values that don't implement "toString"
    }
}
function assertEq(callback, expected) {
    let details;
    try {
        let x = callback();
        if (x === expected)
            return true;
        details = `  Expected: ${prettyPrint(expected)}\n  Observed: ${prettyPrint(x)}`;
    }
    catch (error) {
        details = `  Throws: ${error}`;
    }
    const code = callback.toString().replace(/^\(\) => /, '').replace(/\s+/g, ' ');
    console.log(`❌ ${testName}\n  Code: ${code}\n${details}\n`);
    failures++;
    return false;
}
function assertThrows(callback, expected) {
    let details;
    try {
        let x = callback();
        details = `  Expected: throws instanceof ${expected.name}\n  Observed: returns ${prettyPrint(x)}`;
    }
    catch (error) {
        if (error instanceof expected)
            return true;
        details = `  Expected: throws instanceof ${expected.name}\n  Observed: throws ${error}`;
    }
    const code = callback.toString().replace(/^\(\) => /, '').replace(/\s+/g, ' ');
    console.log(`❌ ${testName}\n  Code: ${code}\n${details}\n`);
    failures++;
    return false;
}
let testName;
let failures = 0;
async function run() {
    for (const [name, test] of Object.entries(tests)) {
        testName = name;
        try {
            await test();
        }
        catch (err) {
            console.log(`❌ ${name}\n  Throws: ${err}\n`);
            failures++;
        }
    }
    if (failures > 0) {
        console.log(`❌ ${failures} checks failed`);
    }
    else {
        console.log(`✅ All checks passed`);
    }
}
const promise = run();
