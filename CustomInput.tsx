import { CSSProperties } from "react";

interface CustomInputsProps {
  name: string;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  labelplace:string
  customClass?: string;
  type: string;
  style?: CSSProperties  
}

 export const CustomInputs = ({ name, value, onChange, error, label, labelplace, style, type }: CustomInputsProps) => {
  return (
    <>
      <label className="title-nombre mb-2">{label}:</label>
      <input
        className={`mb-2 form-control w-full  ${error ? 'is-invalid' : ''}`}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={labelplace}
        type={type}
        style={style}
      />
      {error ? <div className="text-danger error">{error}</div> : null}
      </>
  );
};

export default CustomInputs
