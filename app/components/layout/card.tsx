export default function Card({ card }) {
  console.log("Card component received:", card);
  return <div>Card Component - {card?.heading}</div>;
}