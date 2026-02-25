type Props = { items: string[] };

export default function Ticker({ items }: Props) {
  return (
    <div className="cardSoft pad-16 overflow-hidden">
      <div className="tickerTrack">
        {items.concat(items).map((item, idx) => (
          <span key={idx} className="small">
            <span className="gold">●</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}