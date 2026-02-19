export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} F1 Project</span>
      </div>
    </footer>
  );
}
