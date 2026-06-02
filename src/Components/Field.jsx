function Field({ label, error, children, required = false, className = "", style = {}, ...props }) {
  return (
    <div className={`form-group ${className}`} style={style} {...props}>
      {label && (
        <label htmlFor={props.id}>
          {label}
          {required && <span style={{ color: 'var(--gold)' }}> *</span>}
        </label>
      )}
      {children}
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
}

export default Field;