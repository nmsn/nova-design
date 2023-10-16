import classnames from "classnames";
import { Link } from "react-router-dom";

type SideItemProps = {
  label: string;
  value: string;
  className?: string;
};

const SideItem = ({ label, value, className }: SideItemProps) => {
  return (
    <div className={classnames(className, "p2")} key={value}>
      <Link to={value}>{label}</Link>
    </div>
  );
};

type SideProps = {
  selected?: string;
  options: { label: string; value: string }[];
};

const Side = ({ selected, options }: SideProps) => {
  return (
    <div className="w-xs h-screen pt-2">
      {options.map(({ label, value }) => (
        <SideItem
          key={value}
          label={label}
          value={value}
          className={classnames(selected ? "" : "")}
        />
      ))}
    </div>
  );
};

export default Side;
