export default function Clock(props: { time: string, color: string }) {
  return (
    <h1 style={{ color: props.color }}>
      {props.time}
    </h1>
  );
}
