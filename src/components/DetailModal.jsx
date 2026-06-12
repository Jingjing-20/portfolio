export default function DetailModal({ id, children }) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box max-w-2xl max-h-[85vh] overflow-y-auto">
        <form method="dialog">
          <button type="submit" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="submit">close</button>
      </form>
    </dialog>
  )
}
