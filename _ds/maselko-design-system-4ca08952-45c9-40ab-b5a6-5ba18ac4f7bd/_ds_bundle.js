/* @ds-bundle: {"format":3,"namespace":"MaselkoDesignSystem_4ca089","components":[{"name":"IconCircle","sourcePath":"components/brand/IconCircle.jsx"},{"name":"ProductCard","sourcePath":"components/brand/ProductCard.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"}],"sourceHashes":{"components/brand/IconCircle.jsx":"a99fba1bda68","components/brand/ProductCard.jsx":"f90733f4b635","components/core/Avatar.jsx":"176c8d284f7a","components/core/Badge.jsx":"8061751660bb","components/core/Button.jsx":"afa415d415da","components/core/Card.jsx":"c8d7f82be73f","components/core/Input.jsx":"c5e4b5e2c173","components/core/Logo.jsx":"b6031326d617","ui_kits/website/About.jsx":"73aa67985a37","ui_kits/website/Catalog.jsx":"f89e06493198","ui_kits/website/Header.jsx":"721590b44b59","ui_kits/website/Home.jsx":"6b09a9798c44","ui_kits/website/ProductDetail.jsx":"b3381c078064","ui_kits/website/data.js":"5850d8858143"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MaselkoDesignSystem_4ca089 = window.MaselkoDesignSystem_4ca089 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/IconCircle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Maselko IconCircle — the signature gold disc holding a single
 * continuous-line brick-red illustration (Instagram highlights,
 * feature bullets, category chips).
 *
 * Pass `src` for a line-art image, or `children` for text/glyph.
 */
function IconCircle({
  src,
  alt = '',
  label,
  size = 88,
  tone = 'gold',
  children,
  style = {},
  ...rest
}) {
  const tones = {
    gold: {
      background: 'var(--gold-500)'
    },
    cream: {
      background: 'var(--cream-500)'
    },
    red: {
      background: 'var(--red-700)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      ...tones[tone]
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: size * 0.4,
      color: tone === 'red' ? 'var(--gold-500)' : 'var(--red-700)'
    }
  }, children)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { IconCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/IconCircle.jsx", error: String((e && e.message) || e) }); }

// components/brand/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Maselko ProductCard — packshot over a warm surface with name,
 * attribute badge and price/CTA row. Mirrors the on-pack hierarchy.
 */
function ProductCard({
  image,
  name,
  descriptor,
  badge,
  price,
  cta = 'В корзину',
  onAdd,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      background: 'var(--cream-300)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 'var(--space-3)',
      left: 'var(--space-3)'
    }
  }, badge), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--fw-extrabold)',
      color: 'var(--text-strong)'
    }
  }, name), descriptor && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, descriptor), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 'var(--space-4)'
    }
  }, price && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'var(--text-xl)',
      color: 'var(--red-700)'
    }
  }, price), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAdd,
    style: {
      border: 'none',
      cursor: 'pointer',
      padding: '10px 20px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--action)',
      color: 'var(--cream-300)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-sm)',
      transition: 'background var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--action-hover)',
    onMouseLeave: e => e.currentTarget.style.background = 'var(--action)'
  }, cta))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Maselko Avatar — round, gold ring optional. */
function Avatar({
  src,
  name = '',
  size = 44,
  ring = false,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--gold-500)',
      color: 'var(--red-700)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: size * 0.38,
      flex: 'none',
      border: ring ? '2px solid var(--gold-600)' : 'none',
      boxShadow: ring ? '0 0 0 3px var(--cream-300)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Maselko Badge — compact status / attribute pill.
 * tone: brand | gold | cream | success | neutral | solid
 */
function Badge({
  tone = 'brand',
  children,
  style = {},
  ...rest
}) {
  const tones = {
    brand: {
      background: 'rgba(146,30,23,0.10)',
      color: 'var(--red-700)'
    },
    solid: {
      background: 'var(--red-700)',
      color: 'var(--cream-300)'
    },
    gold: {
      background: 'var(--gold-500)',
      color: 'var(--red-700)'
    },
    cream: {
      background: 'var(--cream-500)',
      color: 'var(--red-800)'
    },
    success: {
      background: 'rgba(59,151,65,0.14)',
      color: 'var(--success)'
    },
    neutral: {
      background: 'var(--neutral-50)',
      color: 'var(--ink-700)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      lineHeight: 1.4,
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Maselko Button — warm, rounded, confident.
 * Variants: primary (brand red), gold, secondary (outline), ghost.
 */
function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-sm)',
      gap: '6px'
    },
    md: {
      padding: '12px 24px',
      fontSize: 'var(--text-md)',
      gap: '8px'
    },
    lg: {
      padding: '16px 32px',
      fontSize: 'var(--text-lg)',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--action)',
      color: 'var(--text-on-brand)',
      border: '2px solid var(--action)'
    },
    gold: {
      background: 'var(--gold-500)',
      color: 'var(--text-on-gold)',
      border: '2px solid var(--gold-500)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-brand)',
      border: '2px solid var(--border-brand)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-brand)',
      border: '2px solid transparent'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    width: full ? '100%' : 'auto',
    padding: sizes[size].padding,
    fontFamily: 'var(--font-body)',
    fontSize: sizes[size].fontSize,
    fontWeight: 'var(--fw-bold)',
    lineHeight: 1,
    letterSpacing: 'var(--ls-snug)',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), filter var(--dur-base) var(--ease-out)',
    ...variants[variant],
    ...style
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
  };
  const onUp = e => {
    e.currentTarget.style.transform = 'scale(1)';
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--action-hover)';else if (variant === 'gold') e.currentTarget.style.background = 'var(--gold-600)';else e.currentTarget.style.background = 'rgba(146,30,23,0.08)';
  };
  const onLeave = e => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.background = variants[variant].background;
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: base,
    onMouseDown: onDown,
    onMouseUp: onUp,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Maselko Card — soft warm container.
 * tone: 'white' | 'cream' | 'gold' | 'brand'
 * Set `interactive` to lift on hover.
 */
function Card({
  tone = 'white',
  interactive = false,
  pad = 'var(--space-5)',
  children,
  style = {},
  ...rest
}) {
  const tones = {
    white: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)'
    },
    cream: {
      background: 'var(--cream-500)',
      color: 'var(--red-800)'
    },
    gold: {
      background: 'var(--gold-500)',
      color: 'var(--red-700)'
    },
    brand: {
      background: 'var(--red-700)',
      color: 'var(--cream-300)'
    }
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pad,
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Maselko Input — labelled text field with warm focus ring.
 */
function Input({
  label,
  hint,
  error,
  iconLeft = null,
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 16px',
      background: 'var(--surface-card)',
      border: `2px solid ${error ? 'var(--red-400)' : focus ? 'var(--red-700)' : 'var(--border-soft)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 4px var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, iconLeft, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-strong)'
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--red-400)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Maselko Logo — recreated wordmark lockup.
 * NOTE: recreated from the brand font (Onest, substitute). Replace with
 * official vector artwork when available.
 *
 * variant: 'wordmark' (МАСЕЛКО + tagline) | 'badge' (round gold seal)
 * tone: 'red' | 'cream' | 'ink' — wordmark color
 */
function Logo({
  variant = 'wordmark',
  tone = 'red',
  tagline = true,
  size = 40,
  style = {},
  ...rest
}) {
  const colors = {
    red: 'var(--red-700)',
    cream: 'var(--cream-300)',
    ink: 'var(--ink-900)'
  };
  if (variant === 'badge') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'var(--gold-500)',
        color: 'var(--red-700)',
        textAlign: 'center',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-black)',
        fontSize: size * 0.2,
        letterSpacing: '-0.01em',
        lineHeight: 1
      }
    }, "\u041C\u0410\u0421\u0415\u041B\u041A\u041E"));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      lineHeight: 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: size,
      letterSpacing: '-0.01em',
      textTransform: 'uppercase',
      color: colors[tone],
      position: 'relative'
    }
  }, "\u041C\u0410\u0421\u0415\u041B\u041A\u041E", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.28,
      verticalAlign: 'super',
      fontWeight: 'var(--fw-bold)'
    }
  }, "\xAE")), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: size * 0.12,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: size * 0.22,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: tone === 'cream' ? 'var(--gold-500)' : colors[tone],
      alignSelf: 'center'
    }
  }, "\u0434\u043B\u044F \u0432\u0441\u0435\u0439 \u0441\u0435\u043C\u044C\u0438"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
// About screen + shared footer.
function AboutScreen({
  go
}) {
  const {
    Button
  } = window.MaselkoDesignSystem_4ca089;
  const A = '../../assets';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--red-700)',
      color: 'var(--cream-300)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '88px 32px',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ms-eyebrow",
    style: {
      color: 'var(--gold-500)'
    }
  }, "\u041E \u0431\u0440\u0435\u043D\u0434\u0435"), /*#__PURE__*/React.createElement("h1", {
    className: "ms-hero",
    style: {
      color: 'var(--cream-300)',
      fontSize: 'clamp(40px,6vw,68px)',
      margin: '16px 0 20px',
      maxWidth: 820
    }
  }, "\u041C\u0430\u0441\u0435\u043B\u043A\u043E \u2014 \u043F\u0440\u043E \u0442\u0435\u043F\u043B\u043E \u0434\u043E\u043C\u0430\u0448\u043D\u0435\u0433\u043E \u0441\u0442\u043E\u043B\u0430"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xl)',
      color: 'var(--gold-300)',
      maxWidth: 620
    }
  }, "\u0434\u043B\u044F \u0432\u0441\u0435\u0439 \u0441\u0435\u043C\u044C\u0438")), /*#__PURE__*/React.createElement("div", {
    className: "ms-wordmark-ghost",
    style: {
      position: 'absolute',
      right: -20,
      bottom: -40,
      fontSize: 220,
      WebkitTextStroke: '2px var(--gold-500)',
      opacity: 0.16
    }
  }, "\u041C")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xl)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-body)',
      marginBottom: 24
    }
  }, "\u041C\u044B \u0432\u0435\u0440\u0438\u043C, \u0447\u0442\u043E \u043B\u0443\u0447\u0448\u0438\u0435 \u043C\u043E\u043C\u0435\u043D\u0442\u044B \u0441\u043B\u0443\u0447\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u043A\u0443\u0445\u043D\u0435: \u043A\u043E\u0433\u0434\u0430 \u0432\u0441\u044F \u0441\u0435\u043C\u044C\u044F \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u0432\u043C\u0435\u0441\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u043C\u0430\u0437\u0430\u0442\u044C \u0442\u0451\u043F\u043B\u044B\u0439 \u043D\u043E\u043D \u043C\u0430\u0441\u043B\u043E\u043C, \u0438\u0441\u043F\u0435\u0447\u044C \u043F\u0438\u0440\u043E\u0433 \u0438\u043B\u0438 \u043D\u0430\u043A\u0440\u044B\u0442\u044C \u0441\u0442\u043E\u043B \u043A \u0443\u0436\u0438\u043D\u0443."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-muted)'
    }
  }, "\u041C\u0430\u0441\u0435\u043B\u043A\u043E \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u043B\u0438\u0432\u043E\u0447\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E, \u043A\u0435\u0442\u0447\u0443\u043F\u044B \u0438 \u0441\u043E\u0443\u0441\u044B \u0438\u0437 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u044B\u0440\u044C\u044F \u2014 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0434\u043E\u0432\u0435\u0440\u044F\u044E\u0442 \u0434\u043E\u043C\u0430 \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0443.")), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-300)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '24px 32px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/lifestyle/kid-salami.jpg`,
    alt: "",
    style: {
      width: '100%',
      height: 320,
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg)'
    }
  }))));
}
window.AboutScreen = AboutScreen;
function SiteFooter({
  go
}) {
  const {
    Logo
  } = window.MaselkoDesignSystem_4ca089;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '56px 32px 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    tone: "cream",
    size: 28
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      color: 'var(--ink-300)',
      fontSize: 'var(--text-sm)',
      maxWidth: 240
    }
  }, "\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0434\u043B\u044F \u0432\u0441\u0435\u0439 \u0441\u0435\u043C\u044C\u0438. \u0422\u0430\u0448\u043A\u0435\u043D\u0442, \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D.")), [['Продукты', ['Масло', 'Кетчупы', 'Соусы', 'Новинки']], ['Бренд', ['О нас', 'Рецепты', 'Качество', 'Контакты']], ['Связь', ['maselko.uz', '+998 71 200-12-57', 'Instagram', 'Telegram']]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--gold-500)',
      marginBottom: 14,
      fontSize: 'var(--text-sm)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-wide)'
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      color: 'var(--ink-300)',
      fontSize: 'var(--text-sm)',
      cursor: 'pointer'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '20px 32px',
      textAlign: 'center',
      color: 'var(--ink-300)',
      fontSize: 'var(--text-xs)'
    }
  }, "\xA9 2025 \u041C\u0430\u0441\u0435\u043B\u043A\u043E \xB7 \u0434\u043B\u044F \u0432\u0441\u0435\u0439 \u0441\u0435\u043C\u044C\u0438"));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Catalog.jsx
try { (() => {
// Catalog screen — filterable product grid.
function CatalogScreen({
  go,
  addToCart,
  openProduct
}) {
  const {
    Badge,
    ProductCard,
    Button
  } = window.MaselkoDesignSystem_4ca089;
  const A = '../../assets';
  const products = window.MASELKO_PRODUCTS;
  const cats = ['Все', 'Масло', 'Кетчупы'];
  const [cat, setCat] = React.useState('Все');
  const shown = products.filter(p => cat === 'Все' || p.category === cat);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-500)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '48px 32px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ms-eyebrow"
  }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-4xl)',
      fontWeight: 'var(--fw-black)',
      margin: '10px 0 0'
    }
  }, "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u041C\u0430\u0441\u0435\u043B\u043A\u043E"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '32px 32px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 32
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    style: {
      padding: '8px 20px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-bold)',
      border: '2px solid ' + (cat === c ? 'var(--red-700)' : 'var(--border-soft)'),
      background: cat === c ? 'var(--red-700)' : 'transparent',
      color: cat === c ? 'var(--cream-300)' : 'var(--ink-700)'
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, shown.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => openProduct(p.id),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(ProductCard, {
    image: `${A}/${p.image}`,
    name: p.name,
    descriptor: p.descriptor,
    badge: /*#__PURE__*/React.createElement(Badge, {
      tone: p.category === 'Масло' ? 'gold' : 'solid'
    }, p.tag),
    price: p.price,
    onAdd: () => addToCart(p)
  }))))));
}
window.CatalogScreen = CatalogScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Catalog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Maselko site — shared header with nav + ribbon-free top bar.
function SiteHeader({
  route,
  go,
  cartCount = 0
}) {
  const {
    Button,
    Logo
  } = window.MaselkoDesignSystem_4ca089;
  const links = [{
    id: 'home',
    label: 'Главная'
  }, {
    id: 'catalog',
    label: 'Продукты'
  }, {
    id: 'recipes',
    label: 'Рецепты'
  }, {
    id: 'about',
    label: 'О бренде'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(253,246,236,0.88)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      marginLeft: 8
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => go(l.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      fontWeight: route === l.id ? 'var(--fw-bold)' : 'var(--fw-medium)',
      color: route === l.id ? 'var(--red-700)' : 'var(--ink-700)',
      padding: '4px 0',
      borderBottom: route === l.id ? '2px solid var(--red-700)' : '2px solid transparent'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--ink-700)'
    }
  }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 22,
      height: 22,
      padding: '0 6px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--red-700)',
      color: 'var(--cream-300)',
      fontSize: 12,
      fontWeight: 'var(--fw-bold)'
    }
  }, cartCount)), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "sm",
    onClick: () => go('catalog')
  }, "\u0413\u0434\u0435 \u043A\u0443\u043F\u0438\u0442\u044C"))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
// Maselko homepage. The signature flowing red "butter ribbon" + ghost
// wordmark motif, product highlights, family band.
function Ribbon({
  style
}) {
  // Single continuous brand line — echoes the on-brand swirl motif.
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 380",
    fill: "none",
    style: style,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M-20 250 C 120 250, 130 90, 250 110 C 360 128, 320 250, 240 250 C 150 250, 200 120, 340 120 C 520 120, 540 300, 720 250",
    stroke: "var(--red-700)",
    strokeWidth: "7",
    strokeLinecap: "round"
  }));
}
function HomeScreen({
  go,
  addToCart
}) {
  const {
    Button,
    Badge,
    IconCircle,
    ProductCard,
    Card
  } = window.MaselkoDesignSystem_4ca089;
  const A = '../../assets';
  const products = window.MASELKO_PRODUCTS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--cream-500)'
    }
  }, /*#__PURE__*/React.createElement(Ribbon, {
    style: {
      position: 'absolute',
      right: -40,
      top: 20,
      width: 620,
      height: 400,
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '88px 32px 120px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "ms-eyebrow"
  }, "\u041F\u0440\u0435\u043C\u0438\u0443\u043C \u043C\u0430\u0441\u043B\u043E \xB7 \u043A\u0435\u0442\u0447\u0443\u043F\u044B \xB7 \u0441\u043E\u0443\u0441\u044B"), /*#__PURE__*/React.createElement("h1", {
    className: "ms-hero",
    style: {
      fontSize: 'clamp(44px, 6vw, 76px)',
      margin: '18px 0 20px'
    }
  }, "\u0412\u043A\u0443\u0441,", /*#__PURE__*/React.createElement("br", null), "\u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443", /*#__PURE__*/React.createElement("br", null), "\u0434\u043E\u0432\u0435\u0440\u044F\u0435\u0442", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-700)'
    }
  }, "\u0432\u0441\u044F \u0441\u0435\u043C\u044C\u044F")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--red-800)',
      maxWidth: 440,
      marginBottom: 32
    }
  }, "\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u043B\u0438\u0432\u043E\u0447\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E, \u043A\u0435\u0442\u0447\u0443\u043F\u044B \u0438 \u0441\u043E\u0443\u0441\u044B \u041C\u0430\u0441\u0435\u043B\u043A\u043E \u2014 \u0434\u043B\u044F \u0437\u0430\u0432\u0442\u0440\u0430\u043A\u043E\u0432, \u0432\u044B\u043F\u0435\u0447\u043A\u0438 \u0438 \u0443\u0436\u0438\u043D\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u044E\u0442 \u0432\u0441\u0435\u0445 \u0437\u0430 \u043E\u0434\u043D\u0438\u043C \u0441\u0442\u043E\u043B\u043E\u043C."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('catalog')
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go('about')
  }, "\u041E \u0431\u0440\u0435\u043D\u0434\u0435"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 360,
      height: 420,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/lifestyle/bread-butter.jpg`,
    alt: "\u041C\u0430\u0441\u0435\u043B\u043A\u043E \u043D\u0430 \u0441\u0442\u043E\u043B\u0435",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ms-wordmark-ghost",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -28,
      textAlign: 'center',
      fontSize: 'clamp(80px, 16vw, 200px)',
      pointerEvents: 'none'
    }
  }, "\u041C\u0410\u0421\u0415\u041B\u041A\u041E")), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--red-700)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '28px 32px',
      display: 'flex',
      justifyContent: 'space-around',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, [['100%', 'натуральный состав'], ['72–82%', 'жирность масла'], ['12', 'продуктов в линейке'], ['1', 'семья — наша']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--gold-500)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--cream-300)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-wide)'
    }
  }, l))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "ms-eyebrow"
  }, "\u041B\u044E\u0431\u0438\u043C\u043E\u0435 \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u0434\u043E\u043C\u0435"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--fw-extrabold)',
      marginTop: 10
    }
  }, "\u041D\u0430\u0448\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192"),
    onClick: () => go('catalog')
  }, "\u0412\u0435\u0441\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, products.slice(0, 3).map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    image: `${A}/${p.image}`,
    name: p.name,
    descriptor: p.descriptor,
    badge: /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, p.tag),
    price: p.price,
    onAdd: () => addToCart(p)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-300)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '72px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/lifestyle/family-cooking.jpg`,
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${A}/lifestyle/family-coffee.jpg`,
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      marginTop: 28
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "ms-eyebrow"
  }, "\u0434\u043B\u044F \u0432\u0441\u0435\u0439 \u0441\u0435\u043C\u044C\u0438"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--fw-extrabold)',
      margin: '12px 0 16px'
    }
  }, "\u0422\u0451\u043F\u043B\u044B\u0435 \u043C\u043E\u043C\u0435\u043D\u0442\u044B \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u043A\u0443\u0445\u043D\u0435"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      marginBottom: 28
    }
  }, "\u041C\u044B \u0434\u0435\u043B\u0430\u0435\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B, \u0432\u043E\u043A\u0440\u0443\u0433 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u0441\u0435\u043C\u044C\u044F: \u043D\u0430\u043C\u0430\u0437\u0430\u0442\u044C \u0441\u0432\u0435\u0436\u0438\u0439 \u043D\u043E\u043D \u0442\u0451\u043F\u043B\u044B\u043C \u043C\u0430\u0441\u043B\u043E\u043C, \u0438\u0441\u043F\u0435\u0447\u044C \u043F\u0438\u0440\u043E\u0433 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u0434\u0435\u0442\u044C\u043C\u0438, \u043D\u0430\u043A\u0440\u044B\u0442\u044C \u0441\u0442\u043E\u043B \u043A \u0443\u0436\u0438\u043D\u0443."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement(IconCircle, {
    src: `${A}/icons/line-percent.jpg`,
    label: "\u0410\u043A\u0446\u0438\u0438"
  }), /*#__PURE__*/React.createElement(IconCircle, {
    src: `${A}/icons/line-globe.jpg`,
    label: "\u0413\u0434\u0435 \u043A\u0443\u043F\u0438\u0442\u044C"
  }), /*#__PURE__*/React.createElement(IconCircle, {
    src: `${A}/icons/line-phone.jpg`,
    label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
  }))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductDetail.jsx
try { (() => {
// Product detail screen.
function ProductScreen({
  productId,
  go,
  addToCart
}) {
  const {
    Button,
    Badge,
    IconCircle
  } = window.MaselkoDesignSystem_4ca089;
  const A = '../../assets';
  const p = window.MASELKO_PRODUCTS.find(x => x.id === productId) || window.MASELKO_PRODUCTS[0];
  const [qty, setQty] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '32px 32px 80px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('catalog'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-500)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      marginBottom: 24,
      padding: 0
    }
  }, "\u2190 \u041D\u0430\u0437\u0430\u0434 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-300)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/${p.image}`,
    alt: p.name,
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: p.category === 'Масло' ? 'gold' : 'solid'
  }, p.tag), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-4xl)',
      fontWeight: 'var(--fw-black)',
      margin: '16px 0 8px'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)',
      marginBottom: 20
    }
  }, p.descriptor), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      marginBottom: 28
    }
  }, p.about), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'var(--text-4xl)',
      color: 'var(--red-700)',
      marginBottom: 24
    }
  }, p.price), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      border: '2px solid var(--border-soft)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 14px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(q => Math.max(1, q - 1)),
    style: qbtn
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)',
      minWidth: 18,
      textAlign: 'center'
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(q => q + 1),
    style: qbtn
  }, "+")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => addToCart(p, qty)
  }, "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      paddingTop: 20,
      borderTop: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement(Feature, {
    label: "\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E"
  }), /*#__PURE__*/React.createElement(Feature, {
    label: "\u0414\u043B\u044F \u0441\u0435\u043C\u044C\u0438"
  }), /*#__PURE__*/React.createElement(Feature, {
    label: "\u041F\u0440\u0435\u043C\u0438\u0443\u043C"
  }))))));
}
const qbtn = {
  width: 26,
  height: 26,
  border: 'none',
  background: 'var(--cream-500)',
  color: 'var(--red-700)',
  borderRadius: '50%',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: 16
};
function Feature({
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--gold-700)'
    }
  }, "\u25CF ", label);
}
window.ProductScreen = ProductScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Maselko product catalogue (demo data; imagery from brand guidelines).
window.MASELKO_PRODUCTS = [{
  id: 'butter-72',
  name: 'Масло сливочное 72%',
  category: 'Масло',
  descriptor: 'Для слоёной выпечки · 180 г',
  tag: '72%',
  price: '24 900 сум',
  image: 'products/butter-pack.jpg',
  about: 'Натуральное сливочное масло 72% жирности. Идеально для слоёного теста, бутербродов и каш.'
}, {
  id: 'butter-82',
  name: 'Масло сливочное 82%',
  category: 'Масло',
  descriptor: 'Кондитерское, премиум · 180 г',
  tag: '82%',
  price: '29 900 сум',
  image: 'products/butter-pack.jpg',
  about: 'Премиальное масло 82% жирности для кондитеров: кремы, бисквиты и выпечка высшего класса.'
}, {
  id: 'ketchup-shashlik',
  name: 'Кетчуп к шашлыку',
  category: 'Кетчупы',
  descriptor: 'С кусочками томатов · 300 г',
  tag: 'Хит',
  price: '18 500 сум',
  image: 'products/ketchup-shashlik.jpg',
  about: 'Густой томатный кетчуп со специями — создан для мяса на углях и семейных застолий.'
}, {
  id: 'ketchup-chili',
  name: 'Кетчуп чили',
  category: 'Кетчупы',
  descriptor: 'Острый, для любителей перца · 300 г',
  tag: 'Острый',
  price: '18 500 сум',
  image: 'products/ketchup-chili.jpg',
  about: 'Острый кетчуп с чили для тех, кто любит поярче. Отлично подходит к шашлыку и закускам.'
}, {
  id: 'butter-80',
  name: 'Масло сливочное 80%',
  category: 'Масло',
  descriptor: 'Классическое · 400 г',
  tag: '80%',
  price: '42 900 сум',
  image: 'products/butter-pack.jpg',
  about: 'Классическое сливочное масло 80% для каждодневного стола — большой семейный формат.'
}, {
  id: 'ketchup-tomato',
  name: 'Кетчуп томатный',
  category: 'Кетчупы',
  descriptor: 'Нежный, для всей семьи · 300 г',
  tag: 'Классика',
  price: '16 900 сум',
  image: 'products/ketchup-shashlik.jpg',
  about: 'Мягкий томатный кетчуп без остроты — любимый вкус детей и взрослых.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.IconCircle = __ds_scope.IconCircle;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

})();
