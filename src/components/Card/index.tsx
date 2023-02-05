import React from "react";
import './style.css'

interface ICardProps {
  children: React.ReactNode;
}

function Card(props: ICardProps) {
  const { children } = props;
  return <div className="wolt-card">{children}</div>;
}
export default Card;
