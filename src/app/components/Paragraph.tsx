import styles from "./Paragraph.module.css";

export default function Paragraph({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <p className={`${styles.p} text-ctp-text`}>{children}</p>;
}
