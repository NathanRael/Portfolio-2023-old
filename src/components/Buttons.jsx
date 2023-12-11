const IconFs = {
  fontSize: "24px",
};

export function BigButton({
  name = "Button",
  icon = "bi bi-arrow-right",
  color = "btn-primary",
  inverseIcon = false,
}) {
  return (
    <button
      className={`btn ${color} btn-lg px-32 py-16 text-ligh d-flex align-items-center justify-content-center _body`}
      style={{ width: "max-content" }}
    >
      {inverseIcon ? <i className={`${icon} me-8`} style={IconFs}></i> : ""}
      <span>{name}</span>
      {!inverseIcon ? <i className={`${icon} ms-8`} style={IconFs}></i> : ""}
    </button>
  );
}
export function MdButton({
  name = "Button",
  icon = "bi bi-arrow-right",
  color = "btn-primary",
  inverseIcon = false,
}) {
  return (
    <button
      className={`btn ${color}  px-24 py-12 text-ligh d-flex align-items-center justify-content-center _body`}
    >
      {inverseIcon ? <i className={`${icon} me-8`} style={IconFs}></i> : ""}
      <span>{name}</span>
      {!inverseIcon ? <i className={`${icon} ms-8`} style={IconFs}></i> : ""}
    </button>
  );
}

export function IconButton({ icon = "bi bi-plus-lg", color = "btn-primary" , href = '#'}) {
  return (
    <a
      className={`btn ${color} p-12 rounded-5 d-flex align-items-center justify-content-center _body`}
      style={{ width: "48px", height: "48px" }}
      href={href}
    >
      <i className={icon} style={{ fontSize: "24px" }}></i>
    </a>
  );
}
