import React, { InputHTMLAttributes } from "react";

interface Props extends React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	label: string;
};

const Radio = ({ label, ...inputProps }: Props) => {
	return (<div className="flex w-1/2 space-x-[10px]">
		<input type="radio" {...inputProps} />
		<span className=" font-bold text-[14px] ">{label}</span>
	</div>)
}


export default Radio;