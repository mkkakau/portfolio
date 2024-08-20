import styles from "./Header.module.css";

export default function Header({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <h1 className={`${styles.h1} text-ctp-red`}>{children}</h1>;
}
