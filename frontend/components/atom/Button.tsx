interface ButtonProps {
  label: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button className="bg-[#BA936F] text-white px-[50px] py-[12px] rounded-[15px] text-[18px] font-mono">
      {props.label}
    </button>
  );
}
