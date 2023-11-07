import { LabelProps, getLabelTypeColor } from ".";
import { useMemo } from "react";

export const Label = ({ label }: LabelProps) => {
  const color = useMemo(() => {
    return getLabelTypeColor(label);
  }, [label]);

  return (
    <div
      className={`${color}rouded-md h-2 w-16 text-white p-4 flex justify-center items-center`}
    >
      <p>{label}</p>
    </div>
  );
};
