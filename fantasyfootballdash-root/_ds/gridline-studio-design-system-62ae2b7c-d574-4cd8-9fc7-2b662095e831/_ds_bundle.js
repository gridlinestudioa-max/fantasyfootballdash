/* @ds-bundle: {"format":4,"namespace":"GridlineStudioDesignSystem_62ae2b","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"ed1d01c3a7e2","components/actions/IconButton.jsx":"64c7fec3242a","components/brand/Logo.jsx":"38589539f77f","components/data/Badge.jsx":"9c1f88dc9415","components/data/Tag.jsx":"a973354a9507","components/feedback/Dialog.jsx":"be022369a2e1","components/feedback/Toast.jsx":"1f0464ff9521","components/feedback/Tooltip.jsx":"2296d6987ae4","components/forms/Checkbox.jsx":"f92c28bc2ff4","components/forms/Input.jsx":"6f5241285c9c","components/forms/Radio.jsx":"10b67c4e8606","components/forms/Select.jsx":"8687458ead36","components/forms/Switch.jsx":"819ad4fe2f12","components/forms/Textarea.jsx":"05390d553104","components/layout/Card.jsx":"fd9768af3649","components/navigation/Tabs.jsx":"5036620cb5ad","ui_kits/website/App.jsx":"ecf98b3a3fe4","ui_kits/website/Bits.jsx":"d5327e943628","ui_kits/website/ContactView.jsx":"fd6aa577ca2d","ui_kits/website/Footer.jsx":"b306273f2ccc","ui_kits/website/Header.jsx":"c2c0a0d01c19","ui_kits/website/HomeView.jsx":"db34bc4251b2","ui_kits/website/JournalView.jsx":"d748252ffc9d","ui_kits/website/StudioView.jsx":"75492afd8163","ui_kits/website/WorkView.jsx":"0c43807fef39"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GridlineStudioDesignSystem_62ae2b = window.GridlineStudioDesignSystem_62ae2b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 'var(--control-sm)',
    padding: '0 16px',
    fontSize: '0.8125rem'
  },
  md: {
    height: 'var(--control-md)',
    padding: '0 22px',
    fontSize: '0.9375rem'
  },
  lg: {
    height: 'var(--control-lg)',
    padding: '0 30px',
    fontSize: '1.0625rem'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--interactive)',
    color: 'var(--text-inverse)',
    border: '1px solid var(--interactive)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--interactive-inverse)',
    color: 'var(--text-primary)',
    border: '1px solid var(--interactive-inverse)'
  }
};

/**
 * Gridline Studio — primary action control. Pill-shaped, Outfit semibold label.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconStart = null,
  iconEnd = null,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const hoverStyle = !disabled && hover ? variant === 'primary' ? {
    background: 'var(--interactive-hover)',
    borderColor: 'var(--interactive-hover)'
  } : variant === 'inverse' ? {
    background: 'var(--gl-sand-2)',
    borderColor: 'var(--gl-sand-2)'
  } : {
    background: 'rgba(8,7,12,0.05)'
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '-0.01em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-full)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      width: fullWidth ? '100%' : 'auto',
      transform: active && !disabled ? 'translateY(0.5px) scale(0.99)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      opacity: disabled ? 0.4 : 1,
      ...s,
      ...v,
      ...hoverStyle,
      ...style
    }
  }, rest), iconStart, children, iconEnd);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};

/**
 * Gridline Studio — square icon-only button. Pass a single icon node as children.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  round = false,
  'aria-label': ariaLabel,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = SIZES[size] || SIZES.md;
  const base = variant === 'primary' ? {
    background: 'var(--interactive)',
    color: 'var(--text-inverse)',
    border: '1px solid var(--interactive)'
  } : variant === 'secondary' ? {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)'
  } : {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent'
  };
  const hoverStyle = !disabled && hover ? variant === 'primary' ? {
    background: 'var(--interactive-hover)'
  } : {
    background: 'rgba(8,7,12,0.06)'
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      flex: '0 0 auto',
      borderRadius: round ? 'var(--radius-full)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...base,
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Filenames as they live in the design system's assets/logos directory.
const FILES = {
  mark: {
    ink: 'mark-black.png',
    cream: 'mark-cream.png'
  },
  combination: {
    ink: 'combination-black.png',
    cream: 'combination-cream.png'
  },
  lettermark: {
    ink: 'lettermark-gs.png',
    cream: 'lettermark-gs.png'
  }
};

// Native aspect ratios (w/h) so the mark reserves correct space.
const RATIO = {
  mark: 1,
  combination: 2.55,
  lettermark: 1
};

/**
 * Gridline Studio logo. Renders the real brand PNG (mark / combination /
 * lettermark) in ink or cream. Point `assetBase` at the design system's
 * assets/logos directory for your page's location.
 */
function Logo({
  variant = 'combination',
  tone = 'ink',
  height = 32,
  assetBase = 'assets/logos',
  src,
  alt = 'Gridline Studio',
  style,
  ...rest
}) {
  const file = (FILES[variant] || FILES.combination)[tone] || (FILES[variant] || FILES.combination).ink;
  const url = src || `${assetBase.replace(/\/$/, '')}/${file}`;
  const ratio = RATIO[variant] || 1;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: url,
    alt: alt,
    style: {
      height,
      width: Math.round(height * ratio),
      objectFit: 'contain',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: 'var(--gl-sand-2)',
    color: 'var(--gl-slate-7)'
  },
  ink: {
    background: 'var(--gl-ink-9)',
    color: 'var(--gl-cream)'
  },
  positive: {
    background: 'var(--gl-positive-surface)',
    color: 'var(--gl-positive)'
  },
  caution: {
    background: 'var(--gl-caution-surface)',
    color: 'var(--gl-caution)'
  },
  critical: {
    background: 'var(--gl-critical-surface)',
    color: 'var(--gl-critical)'
  },
  info: {
    background: 'var(--gl-info-surface)',
    color: 'var(--gl-info)'
  }
};

/**
 * Gridline Studio status/label badge. Small, tracked-out uppercase mono label.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      height: 22,
      padding: '0 10px',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-mono-label)',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--ls-mono)',
      textTransform: 'uppercase',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...t,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gridline Studio tag / chip. Body-font label with a hairline border; optional
 * removable affordance for filter & metadata chips.
 */
function Tag({
  children,
  onRemove,
  selected = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      height: 28,
      padding: '0 12px',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      background: selected ? 'var(--gl-ink-9)' : hover ? 'var(--gl-sand-2)' : 'transparent',
      color: selected ? 'var(--gl-cream)' : 'var(--text-secondary)',
      border: `1px solid ${selected ? 'var(--gl-ink-9)' : 'var(--border-default)'}`,
      transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      marginRight: -4,
      padding: 0,
      border: 'none',
      background: 'transparent',
      color: 'currentColor',
      cursor: 'pointer',
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Gridline Studio modal dialog. Centered cream sheet over an ink scrim, fade +
 * lift entrance. Close on backdrop click or Escape.
 */
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  width = 480
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose && onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      background: 'rgba(8, 7, 12, 0.48)',
      backdropFilter: 'blur(2px)',
      WebkitBackdropFilter: 'blur(2px)',
      animation: 'gl-dialog-fade var(--dur-normal) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes gl-dialog-fade{from{opacity:0}to{opacity:1}}@keyframes gl-dialog-rise{from{opacity:0;transform:translateY(8px) scale(0.98)}to{opacity:1;transform:none}}`), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      padding: 'var(--space-8)',
      animation: 'gl-dialog-rise var(--dur-normal) var(--ease-out)'
    }
  }, (title || onClose) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-heading-m)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-primary)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      marginTop: -4,
      marginRight: -6,
      flex: '0 0 auto',
      border: 'none',
      background: 'transparent',
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: title ? 'var(--space-2) 0 0' : 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-body-m)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-8)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  neutral: 'var(--gl-ink-9)',
  positive: 'var(--gl-positive)',
  caution: 'var(--gl-caution)',
  critical: 'var(--gl-critical)'
};

/**
 * Gridline Studio toast notification. Ink pill that slides up from the bottom.
 * Render one at a time, or map an array in a fixed container.
 */
function Toast({
  message,
  tone = 'neutral',
  action,
  onDismiss,
  style
}) {
  const bar = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      minWidth: 280,
      maxWidth: 420,
      padding: '14px 16px',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      border: '1px solid var(--border-inverse)',
      borderLeft: `3px solid ${bar}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      animation: 'gl-toast-in var(--dur-normal) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes gl-toast-in{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 1.45
    }
  }, message), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: action.onClick,
    style: {
      border: 'none',
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-body-s)',
      color: 'var(--gl-cream)',
      textDecoration: 'underline',
      textUnderlineOffset: 3,
      whiteSpace: 'nowrap'
    }
  }, action.label), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      marginRight: -4,
      flex: '0 0 auto',
      padding: 0,
      border: 'none',
      background: 'transparent',
      color: 'var(--text-inverse-secondary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/**
 * Gridline Studio tooltip. Ink label that appears on hover/focus of its child.
 * Wraps a single trigger element.
 */
function Tooltip({
  label,
  placement = 'top',
  children
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 1100,
      ...pos,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--gl-ink-9)',
      color: 'var(--gl-cream)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--fs-caption)',
      lineHeight: 1.35,
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none',
      animation: 'gl-tip-in var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes gl-tip-in{from{opacity:0}to{opacity:1}}`), label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Gridline Studio checkbox with a hand-drawn-precise check. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style
}) {
  const rid = id || React.useId();
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-body-m)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: rid,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-xs)',
      background: on ? 'var(--interactive)' : 'var(--surface-raised)',
      border: `1.5px solid ${on ? 'var(--interactive)' : 'var(--border-strong)'}`,
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gl-cream)",
    strokeWidth: "3.25",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gridline Studio text input. Hairline border, ink focus ring, optional label & hint.
 */
function Input({
  label,
  hint,
  error,
  size = 'md',
  prefix,
  suffix,
  id,
  disabled = false,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const height = size === 'sm' ? 'var(--control-sm)' : size === 'lg' ? 'var(--control-lg)' : 'var(--control-md)';
  const borderColor = error ? 'var(--gl-critical)' : focus ? 'var(--border-ink)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      height,
      padding: '0 14px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-raised)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus && !error ? 'var(--focus-shadow)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      opacity: disabled ? 0.55 : 1
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-body-m)',
      color: 'var(--text-primary)',
      ...style
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--gl-critical)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Gridline Studio radio button. Use inside a shared-name group. */
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style
}) {
  const rid = id || React.useId();
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const select = () => {
    if (disabled) return;
    if (!isControlled) setInternal(true);
    onChange && onChange(value);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-body-m)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: rid,
    type: "radio",
    name: name,
    value: value,
    checked: on,
    onChange: select,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-full)',
      background: 'var(--surface-raised)',
      border: `1.5px solid ${on ? 'var(--interactive)' : 'var(--border-strong)'}`,
      transition: 'border-color var(--dur-fast) var(--ease-standard)'
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-full)',
      background: 'var(--interactive)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Gridline Studio native select, styled to match Input with a chevron affordance. */
function Select({
  label,
  hint,
  error,
  size = 'md',
  id,
  disabled = false,
  children,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const height = size === 'sm' ? 'var(--control-sm)' : size === 'lg' ? 'var(--control-lg)' : 'var(--control-md)';
  const borderColor = error ? 'var(--gl-critical)' : focus ? 'var(--border-ink)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: rid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height,
      padding: '0 40px 0 14px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-raised)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus && !error ? 'var(--focus-shadow)' : 'none',
      outline: 'none',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-body-m)',
      color: 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, rest), children), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.25",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--gl-critical)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Gridline Studio switch toggle. */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style
}) {
  const rid = id || React.useId();
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-body-m)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: rid,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'relative',
      width: 40,
      height: 24,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-full)',
      background: on ? 'var(--interactive)' : 'var(--gl-sand-3)',
      transition: 'background var(--dur-normal) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-full)',
      background: 'var(--gl-cream)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-normal) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Gridline Studio multi-line text input. */
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  id,
  disabled = false,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const borderColor = error ? 'var(--gl-critical)' : focus ? 'var(--border-ink)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: rid,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      resize: 'vertical',
      padding: '12px 14px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-raised)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus && !error ? 'var(--focus-shadow)' : 'none',
      outline: 'none',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-body-m)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-primary)',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--gl-critical)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gridline Studio surface container. Cream fill, hairline border, optional soft
 * elevation. Editorial by default — leans on borders, not heavy shadow.
 */
function Card({
  children,
  variant = 'outline',
  // outline | raised | inverse
  padding = 'md',
  // none | sm | md | lg
  interactive = false,
  as: Tag = 'div',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pad = padding === 'none' ? 0 : padding === 'sm' ? 'var(--space-4)' : padding === 'lg' ? 'var(--space-8)' : 'var(--space-6)';
  const base = variant === 'inverse' ? {
    background: 'var(--surface-inverse)',
    color: 'var(--text-inverse)',
    border: '1px solid var(--border-inverse)'
  } : variant === 'raised' ? {
    background: 'var(--surface-raised)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-subtle)',
    boxShadow: 'var(--shadow-md)'
  } : {
    background: 'var(--surface-card)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-default)'
  };
  const hoverStyle = interactive && hover ? variant === 'inverse' ? {
    borderColor: 'var(--border-inverse)',
    transform: 'translateY(-2px)'
  } : {
    borderColor: 'var(--border-strong)',
    boxShadow: 'var(--shadow-lg)',
    transform: 'translateY(-2px)'
  } : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pad,
      cursor: interactive ? 'pointer' : 'default',
      transition: 'border-color var(--dur-normal) var(--ease-standard), box-shadow var(--dur-normal) var(--ease-standard), transform var(--dur-normal) var(--ease-standard)',
      ...base,
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Gridline Studio underline tabs. Ink underline slides under the active item;
 * unfussy, editorial. Controlled or uncontrolled.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const first = defaultValue ?? (items[0] && items[0].value);
  const [internal, setInternal] = React.useState(first);
  const isControlled = value !== undefined;
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      disabled: it.disabled,
      onClick: () => !it.disabled && select(it.value),
      style: {
        position: 'relative',
        appearance: 'none',
        background: 'transparent',
        border: 'none',
        padding: '0 0 12px',
        cursor: it.disabled ? 'not-allowed' : 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-medium)',
        fontSize: 'var(--fs-body-m)',
        letterSpacing: '-0.01em',
        color: on ? 'var(--text-primary)' : 'var(--text-muted)',
        opacity: it.disabled ? 0.4 : 1,
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, it.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: 'var(--gl-ink-9)',
        borderRadius: '2px 2px 0 0',
        transform: on ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform var(--dur-normal) var(--ease-standard)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// Gridline Studio — website app shell. Client-side route switch.
function App() {
  const [route, setRoute] = React.useState('home');
  const onRoute = r => {
    setRoute(r);
    window.scrollTo({
      top: 0
    });
  };
  const {
    Header,
    Footer,
    HomeView,
    WorkView,
    StudioView,
    JournalView,
    ContactView
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    route: route,
    onRoute: onRoute
  }), /*#__PURE__*/React.createElement("main", null, route === 'home' && /*#__PURE__*/React.createElement(HomeView, {
    onRoute: onRoute
  }), route === 'work' && /*#__PURE__*/React.createElement(WorkView, {
    onRoute: onRoute
  }), route === 'studio' && /*#__PURE__*/React.createElement(StudioView, null), route === 'journal' && /*#__PURE__*/React.createElement(JournalView, null), route === 'contact' && /*#__PURE__*/React.createElement(ContactView, null)), /*#__PURE__*/React.createElement(Footer, null));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Bits.jsx
try { (() => {
// Gridline Studio — shared UI-kit bits: editorial placeholders & helpers.

// Tonal "image plate" with a faint gridline overlay + mono coordinate caption.
// Stands in for project imagery in this recreation (no real photos shipped).
function Plate({
  tone = 2,
  ratio = '4 / 3',
  label,
  index,
  style
}) {
  const bg = ['var(--gl-paper-1)', 'var(--gl-sand-2)', 'var(--gl-sand-3)', 'var(--gl-stone-4)', 'var(--gl-slate-6)', 'var(--gl-ink-9)'][tone] || 'var(--gl-sand-2)';
  const dark = tone >= 4;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      background: bg,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `linear-gradient(${dark ? 'rgba(255,252,243,0.10)' : 'rgba(8,7,12,0.06)'} 1px, transparent 1px), linear-gradient(90deg, ${dark ? 'rgba(255,252,243,0.10)' : 'rgba(8,7,12,0.06)'} 1px, transparent 1px)`,
      backgroundSize: '32px 32px'
    }
  }), index != null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      color: dark ? 'var(--text-inverse-secondary)' : 'var(--text-muted)'
    }
  }, String(index).padStart(2, '0')), label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 14,
      left: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-inverse-secondary)' : 'var(--text-muted)'
    }
  }, label));
}
function Eyebrow({
  children,
  inverse,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 400,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: inverse ? 'var(--text-inverse-secondary)' : 'var(--text-muted)',
      ...style
    }
  }, children);
}
Object.assign(window, {
  Plate,
  Eyebrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Bits.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactView.jsx
try { (() => {
// Gridline Studio — Contact view. Working inquiry form with success toast.
const {
  Input,
  Select,
  Textarea,
  Checkbox,
  Button,
  Toast
} = window.GridlineStudioDesignSystem_62ae2b;
function ContactView() {
  const {
    Eyebrow
  } = window;
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 40px 100px',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Start a project"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 52,
      lineHeight: 1.08,
      letterSpacing: '-0.03em',
      margin: '20px 0 0'
    }
  }, "Let\u2019s draw the first line together."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: '24px 0 40px'
    }
  }, "Tell us a little about what you\u2019re building. We reply to every serious inquiry within two working days."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, [['Email', 'studio@gridline.studio'], ['Studio', 'Unit 4, 12 Ossian Road, London N4'], ['New business', '+44 20 7946 0142']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      gap: 16,
      paddingBottom: 16,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      width: 120,
      flex: '0 0 auto'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-xl)',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@company.com"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "What do you need?",
    defaultValue: "brand"
  }, /*#__PURE__*/React.createElement("option", {
    value: "brand"
  }, "Brand & identity"), /*#__PURE__*/React.createElement("option", {
    value: "editorial"
  }, "Editorial & print"), /*#__PURE__*/React.createElement("option", {
    value: "web"
  }, "Web & product"), /*#__PURE__*/React.createElement("option", {
    value: "other"
  }, "Something else")), /*#__PURE__*/React.createElement(Textarea, {
    label: "Project brief",
    rows: 4,
    placeholder: "A sentence or two on scope, timeline, and budget."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Add me to the quarterly journal"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg"
  }, "Send inquiry")))), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 40,
      bottom: 32,
      zIndex: 200
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    message: `Thanks${name ? ', ' + name : ''} — your inquiry is on its way.`,
    tone: "positive",
    action: {
      label: 'Undo',
      onClick: () => setSent(false)
    },
    onDismiss: () => setSent(false)
  })));
}
window.ContactView = ContactView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Gridline Studio — site footer.
const {
  Logo
} = window.GridlineStudioDesignSystem_62ae2b;
function Footer() {
  const cols = [{
    h: 'Studio',
    links: ['About', 'Approach', 'Careers', 'Contact']
  }, {
    h: 'Work',
    links: ['Branding', 'Editorial', 'Web & product', 'Archive']
  }, {
    h: 'Elsewhere',
    links: ['Instagram', 'Are.na', 'LinkedIn', 'Journal RSS']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      padding: '64px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 40,
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "combination",
    tone: "cream",
    height: 30,
    assetBase: "../../assets/logos"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-inverse-secondary)',
      maxWidth: 300,
      marginTop: 20
    }
  }, "A design practice built on structure \u2014 identity, editorial, and product systems that hold their line.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-inverse-secondary)',
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 15,
      color: 'var(--text-inverse)',
      textDecoration: 'none',
      opacity: 0.85
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: 1200,
      margin: '48px auto 0',
      paddingTop: 24,
      borderTop: '1px solid var(--border-inverse)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      color: 'var(--text-inverse-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 GRIDLINE STUDIO"), /*#__PURE__*/React.createElement("span", null, "51.5074\xB0 N / 0.1278\xB0 W")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Gridline Studio — site header. Combination logo + underline tabs + CTA.
const {
  Logo,
  Tabs,
  Button
} = window.GridlineStudioDesignSystem_62ae2b;
function Header({
  route,
  onRoute
}) {
  const items = [{
    value: 'home',
    label: 'Home'
  }, {
    value: 'work',
    label: 'Work'
  }, {
    value: 'studio',
    label: 'Studio'
  }, {
    value: 'journal',
    label: 'Journal'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 40px',
      background: 'rgba(255,252,243,0.86)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onRoute('home'),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "combination",
    tone: "ink",
    height: 26,
    assetBase: "../../assets/logos"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      marginLeft: 'auto',
      marginRight: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: 'none'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    onClick: () => onRoute(it.value),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: '4px 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 15,
      letterSpacing: '-0.01em',
      color: route === it.value ? 'var(--text-primary)' : 'var(--text-muted)',
      borderBottom: route === it.value ? '2px solid var(--gl-ink-9)' : '2px solid transparent'
    }
  }, it.label)))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onRoute('contact')
  }, "Start a project"));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeView.jsx
try { (() => {
// Gridline Studio — Home view. Hero + selected work + capabilities.
const {
  Button,
  Tag,
  Badge,
  Card
} = window.GridlineStudioDesignSystem_62ae2b;
function HomeView({
  onRoute
}) {
  const {
    Plate,
    Eyebrow
  } = window;
  const projects = [{
    t: 'Meridian Press',
    c: 'Identity & editorial system',
    tone: 5,
    tags: ['Branding', 'Editorial']
  }, {
    t: 'Field Notes',
    c: 'A quarterly journal on the grid',
    tone: 2,
    tags: ['Editorial']
  }, {
    t: 'Atlas Type Foundry',
    c: 'Web & specimen platform',
    tone: 3,
    tags: ['Web & product']
  }, {
    t: 'Northline Coffee',
    c: 'Packaging & wayfinding',
    tone: 1,
    tags: ['Branding']
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '96px 40px 80px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Design practice \u2014 Est. 2016 \xB7 London"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 84,
      lineHeight: 1.02,
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)',
      margin: '24px 0 0',
      maxWidth: 980
    }
  }, "We draw the grid, then break it with intent."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 20,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      maxWidth: 560,
      margin: '28px 0 0'
    }
  }, "Gridline Studio is a small team building brand identities, editorial systems, and digital products with structure and restraint."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onRoute('work')
  }, "View selected work"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onRoute('contact')
  }, "Start a project"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 40px 100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 28,
      borderTop: '1px solid var(--border-default)',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Selected Work \u2014 2026"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRoute('work'),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, "All projects \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28
    }
  }, projects.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    onClick: () => onRoute('work'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Plate, {
    tone: p.tone,
    index: i + 1,
    label: p.c,
    ratio: "16 / 10"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      letterSpacing: '-0.015em',
      margin: 0
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 15,
      color: 'var(--text-secondary)',
      margin: '4px 0 0'
    }
  }, p.c)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What we do"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24,
      marginTop: 28
    }
  }, [{
    n: '01',
    h: 'Brand & identity',
    d: 'Naming, logotypes, and complete visual systems designed to scale across every surface.'
  }, {
    n: '02',
    h: 'Editorial & print',
    d: 'Books, journals, and reports set with a typographer’s attention to the grid.'
  }, {
    n: '03',
    h: 'Web & product',
    d: 'Design systems and interfaces built with the same structural rigour as our print work.'
  }].map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.n,
    variant: "outline",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: '0.1em',
      color: 'var(--text-muted)'
    }
  }, c.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      letterSpacing: '-0.015em',
      margin: '16px 0 10px'
    }
  }, c.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, c.d)))))));
}
window.HomeView = HomeView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/JournalView.jsx
try { (() => {
// Gridline Studio — Journal (writing) view.
const {
  Badge
} = window.GridlineStudioDesignSystem_62ae2b;
function JournalView() {
  const {
    Plate,
    Eyebrow
  } = window;
  const posts = [{
    t: 'On the discipline of the baseline grid',
    d: 'Why we still set every page to a rhythm you can feel but rarely see.',
    cat: 'Craft',
    y: 'Jun 2026',
    tone: 3,
    big: true
  }, {
    t: 'Two colours are enough',
    d: 'A case for the monochrome brand.',
    cat: 'Brand',
    y: 'May 2026',
    tone: 2
  }, {
    t: 'Specimen as product',
    d: 'Designing the Atlas Type platform.',
    cat: 'Product',
    y: 'Apr 2026',
    tone: 4
  }, {
    t: 'Naming Meridian Press',
    d: 'How a word becomes a system.',
    cat: 'Brand',
    y: 'Mar 2026',
    tone: 1
  }];
  const [big, ...rest] = posts;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px 40px 100px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Journal"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 60,
      letterSpacing: '-0.03em',
      margin: '18px 0 44px'
    }
  }, "Notes on the grid"), /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 40,
      alignItems: 'center',
      paddingBottom: 48,
      borderBottom: '1px solid var(--border-default)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Plate, {
    tone: big.tone,
    ratio: "16 / 10",
    label: big.cat
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ink"
  }, big.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, big.y)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 34,
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      margin: '18px 0 12px'
    }
  }, big.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, big.d))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 28,
      marginTop: 44
    }
  }, rest.map(p => /*#__PURE__*/React.createElement("article", {
    key: p.t,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Plate, {
    tone: p.tone,
    ratio: "4 / 3",
    label: p.cat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, null, p.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, p.y)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
      margin: '12px 0 8px'
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, p.d)))));
}
window.JournalView = JournalView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/JournalView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StudioView.jsx
try { (() => {
// Gridline Studio — Studio (about) view. Statement, principles, team.
function StudioView() {
  const {
    Plate,
    Eyebrow
  } = window;
  const principles = [{
    n: '01',
    h: 'Structure first',
    d: 'Every project begins with a grid, a system, and a set of rules worth breaking later.'
  }, {
    n: '02',
    h: 'Restraint',
    d: 'Two colours, three typefaces, and the confidence to leave space empty.'
  }, {
    n: '03',
    h: 'Made to last',
    d: 'We design identities that read as well in ten years as they do at launch.'
  }];
  const team = [{
    n: 'Ava Lindqvist',
    r: 'Founder, Creative Director',
    tone: 3
  }, {
    n: 'Tomas Reyes',
    r: 'Design Lead, Product',
    tone: 4
  }, {
    n: 'Priya Nair',
    r: 'Editorial & Type',
    tone: 2
  }, {
    n: 'Wole Adeyemi',
    r: 'Design Engineer',
    tone: 5
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      padding: '96px 40px 72px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The Studio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 52,
      lineHeight: 1.08,
      letterSpacing: '-0.03em',
      margin: '20px 0 0'
    }
  }, "A small studio that treats structure as a creative material."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 19,
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      margin: '28px 0 0'
    }
  }, "We are eight designers, writers, and engineers working across identity, editorial, and product. We believe the grid is not a constraint but a starting point \u2014 a shared language that lets ideas move faster and hold together longer.")), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--border-default)',
      borderBottom: '1px solid var(--border-default)',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 40
    }
  }, principles.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: '0.1em',
      color: 'var(--text-muted)',
      paddingBottom: 16,
      borderBottom: '1px solid var(--border-default)'
    }
  }, p.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      letterSpacing: '-0.015em',
      margin: '18px 0 10px'
    }
  }, p.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, p.d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 40px 100px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "People"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24,
      marginTop: 28
    }
  }, team.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.n
  }, /*#__PURE__*/React.createElement(Plate, {
    tone: m.tone,
    ratio: "1 / 1"
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 17,
      letterSpacing: '-0.01em',
      margin: '14px 0 2px'
    }
  }, m.n), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 14,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, m.r))))));
}
window.StudioView = StudioView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StudioView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WorkView.jsx
try { (() => {
// Gridline Studio — Work index. Filterable project grid.
const {
  Tag,
  Badge
} = window.GridlineStudioDesignSystem_62ae2b;
function WorkView({
  onRoute
}) {
  const {
    Plate,
    Eyebrow
  } = window;
  const filters = ['All', 'Branding', 'Editorial', 'Web & product'];
  const [active, setActive] = React.useState('All');
  const all = [{
    t: 'Meridian Press',
    c: 'Identity & editorial system',
    y: '2026',
    cat: 'Branding',
    tone: 5
  }, {
    t: 'Field Notes',
    c: 'Quarterly journal',
    y: '2025',
    cat: 'Editorial',
    tone: 2
  }, {
    t: 'Atlas Type Foundry',
    c: 'Web & specimen platform',
    y: '2025',
    cat: 'Web & product',
    tone: 3
  }, {
    t: 'Northline Coffee',
    c: 'Packaging & wayfinding',
    y: '2025',
    cat: 'Branding',
    tone: 1
  }, {
    t: 'Cartogram',
    c: 'Data-viz product suite',
    y: '2024',
    cat: 'Web & product',
    tone: 4
  }, {
    t: 'The Plain Review',
    c: 'Books & covers',
    y: '2024',
    cat: 'Editorial',
    tone: 2
  }];
  const shown = active === 'All' ? all : all.filter(p => p.cat === active);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px 40px 100px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Archive"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 60,
      letterSpacing: '-0.03em',
      margin: '18px 0 0'
    }
  }, "Selected work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      margin: '32px 0 36px'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: active === f,
    onClick: () => setActive(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 28
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    onClick: () => onRoute('home'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Plate, {
    tone: p.tone,
    index: i + 1,
    ratio: "4 / 3"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      letterSpacing: '-0.015em',
      margin: 0
    }
  }, p.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, p.y)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 14,
      color: 'var(--text-secondary)',
      margin: '4px 0 0'
    }
  }, p.c))))));
}
window.WorkView = WorkView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WorkView.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
