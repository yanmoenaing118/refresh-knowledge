export default function Loading() {
  return (
    <div class="d-flex align-items-center" style={{width: "100%"}}>
      <strong>Loading...</strong>
      <div
        class="spinner-border ml-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
}
