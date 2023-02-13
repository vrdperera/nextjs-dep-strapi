interface IBoxCompProps {
  id: number;
  color: string[];
}

function BoxComp({ id, color }: IBoxCompProps) {
  const rand = Math.floor(Math.random() * id) + '5px';

  console.log(rand);
  return (
    <div
      style={{ borderRadius: `${rand}` }}
      className={`h-[85px] w-[185px] ${color[id]} `}
    ></div>
  );
}

export default BoxComp;
