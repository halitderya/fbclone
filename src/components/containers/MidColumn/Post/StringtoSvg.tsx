import { SvgIcon } from "./PostStyles";
interface StringtoSvgProps {
  path: string;
  size: string;
}

const StringtoSvg = (props: StringtoSvgProps) => {
  return <SvgIcon className="stringtosvg" $icon={props.path} $size={props.size}></SvgIcon>;
};

export default StringtoSvg;
