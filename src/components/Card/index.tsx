import React from "react";
import './index.css'

interface ICardProps {
  children: React.ReactNode;
}

function Card(props: ICardProps) {
  const { children } = props;
  return <div className="card">{children}</div>;
}
export default Card;
