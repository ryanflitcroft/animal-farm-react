import './Footer.css';

export default function Footer(props) {
  return (
    <footer>
      <span>{props.email}</span>
    </footer>
  );
}