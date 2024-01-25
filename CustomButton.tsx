import { CSSProperties } from "react";

type buttonType = 'button' | 'submit' | 'reset' | undefined

const CustomButton = ( {title, customClass, buttonType, handleClick, id, database, style } : 
    {buttonType: buttonType, title?: React.ReactNode, customClass:string,
         handleClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    id?: string; database?:string; style?: CSSProperties
}) => {
  return (
  <button 
  className={customClass} 
  type={buttonType}
  onClick={handleClick}
  id={id}
  style={style}
  data-bs-toggle={database}>
  {title}
  </button>
  )
}

export default CustomButton