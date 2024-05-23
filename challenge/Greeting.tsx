interface Props {
  name: string;
}

function Greeting(props: Props) {
  return <p>Hello {props.name}.</p>;
}

export default Greeting;
